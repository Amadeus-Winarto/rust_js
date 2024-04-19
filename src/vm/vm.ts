import { ThreadStatus, ThreadId, Thread } from "./threads";
import { RoundRobinScheduler, Scheduler } from "./scheduler";
import { Program } from "./compiler";
import {
  WorkerId,
  JOIN_THREAD_EXITED,
  JOIN_THREAD_NOT_EXITED,
  LOCK_ACQUIRED,
  LOCK_NOT_ACQUIRED,
} from "./worker";

export type LockId = number;

export type Lock = {
  ID: LockId;
  locked: boolean;
  // FIFO queue of threads waiting to acquire lock, this ensures no starvation
  queue: ThreadId[];
};

let maxLockId = 0;

export enum Syscall {
  CLONE,
  JOIN,
  LOCK_INIT,
  LOCK,
  UNLOCK,
  LOCK_DESTROY,
}

const idleWorkers: WorkerId[] = [];
const workers: Map<WorkerId, Worker> = new Map();
const threads: Map<ThreadId, Thread> = new Map();
const locks: Map<LockId, Lock> = new Map();
// Map of thread id to array of thread ids waiting
const joinThreads: Map<ThreadId, ThreadId[]> = new Map();

const threadChannels: Map<WorkerId, MessageChannel> = new Map();
const syscallChannels: Map<WorkerId, MessageChannel> = new Map();

let scheduler: Scheduler;
let FREE: Uint32Array = new Uint32Array(new SharedArrayBuffer(4));
let HEAP: DataView;

// sets up message handlers for thread related messages from workers
function init_thread_port(workerId: WorkerId, port: MessagePort) {
  port.onmessage = (message) => {
    const thread: Thread = message.data[0];
    switch (thread.status) {
      case ThreadStatus.BLOCKED:
        scheduler.blockThread(thread.ID);
        break;
      case ThreadStatus.READY:
        scheduler.pauseThread(thread.ID);
        break;
      case ThreadStatus.TERMINATED:
        if (thread.ID === mainThreadId) {
          // Shut down machine
          SHUT_DOWN_MACHINE();
        }
        scheduler.removeThread(thread.ID);
        // unblock all the threads waiting on this thread to terminate, if any
        const blockedThreads = joinThreads.get(thread.ID);
        if (blockedThreads !== undefined) {
          for (let i = 0; i < blockedThreads.length; i++) {
            scheduler.unblockThread(blockedThreads![i]);
            threads.get(blockedThreads[i])!.status = ThreadStatus.READY;
          }
        }
        break;
      default:
        // thread status should not be running
        // This code should not run
        throw Error(
          "VM received a thread from worker that is still in RUNNING status",
        );
    }
    threads.set(thread.ID, thread);
    // Send next thread to worker to run, if any
    const res: [ThreadId, number] | null = scheduler.runThread();
    if (res !== null) {
      port.postMessage([threads.get(res[0]), res[1]]);
    } else {
      // No more thread to run
      idleWorkers.push(workerId);
    }
  };
}

// sets up message handlers for syscall related messages from workers
function init_syscall_port(port: MessagePort) {
  port.onmessage = (message) => {
    const syscall: Syscall = message.data[0];
    let buf: Int32Array;
    let lockId: LockId;
    let lock: Lock | undefined;
    switch (syscall) {
      case Syscall.CLONE:
        const FN: number = message.data[1];
        const PC: number = message.data[2];
        const ENV: number = message.data[3];
        const OS: any[] = message.data[4];
        buf = message.data[5];
        const id = scheduler.createThread();
        const thread: Thread = {
          ID: id,
          FN: FN,
          PC: PC,
          ENV: ENV,
          OS: OS,
          RTS: [],
          RS: {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            E: 0,
            F: 0,
            G: 0,
            H: 0,
            I: 0,
            J: 0,
            K: 0,
          },
          status: ThreadStatus.READY,
        };
        threads.set(id, thread);
        Atomics.store(buf, 0, id);
        Atomics.notify(buf, 0, 1);
        // Check if there is an idle worker to send this thread for execution
        const workerId = idleWorkers.shift();
        if (workerId !== undefined) {
          const res: [ThreadId, number] | null = scheduler.runThread();
          if (res === null) {
            throw Error(
              "Scheduler has no thread to run even after new thread was created",
            );
          }
          const thread_port = threadChannels.get(workerId)!.port1;
          thread_port.postMessage([threads.get(res[0]), res[1]]);
        }
        break;
      case Syscall.JOIN:
        const joinCaller: ThreadId = message.data[1];
        const joinCallee: ThreadId = message.data[2];
        buf = message.data[3];
        if (!threads.has(joinCallee)) {
          throw Error(
            "VM received a request to join a thread that does not exist",
          );
        }
        // Check if joinCallee has terminated
        if (threads.get(joinCallee)!.status === ThreadStatus.TERMINATED) {
          Atomics.store(buf, 0, JOIN_THREAD_EXITED);
          Atomics.notify(buf, 0, 1);
        } else {
          if (!joinThreads.has(joinCallee)) {
            joinThreads.set(joinCallee, []);
          }
          // Store all the threads waiting on joinCallee to terminate
          joinThreads.get(joinCallee)!.push(joinCaller);
          Atomics.store(buf, 0, JOIN_THREAD_NOT_EXITED);
          Atomics.notify(buf, 0, 1);
        }
        break;
      case Syscall.LOCK_INIT:
        buf = message.data[1];
        maxLockId += 1;
        locks.set(maxLockId, { ID: maxLockId, locked: false, queue: [] });
        Atomics.store(buf, 0, maxLockId);
        Atomics.notify(buf, 0, 1);
        break;
      case Syscall.LOCK:
        const threadId: ThreadId = message.data[1];
        lockId = message.data[2];
        buf = message.data[3];
        lock = locks.get(lockId);
        if (lock === undefined) {
          throw Error(
            "VM received a request to lock a lock that does not exist",
          );
        } else {
          if (lock.locked) {
            lock.queue.push(threadId);
            Atomics.store(buf, 0, LOCK_NOT_ACQUIRED);
            Atomics.notify(buf, 0, 1);
          } else {
            lock.locked = true;
            Atomics.store(buf, 0, LOCK_ACQUIRED);
            Atomics.notify(buf, 0, 1);
          }
        }
        break;
      case Syscall.UNLOCK:
        lockId = message.data[1];
        lock = locks.get(lockId);
        if (lock === undefined) {
          throw Error(
            "VM received a request to unlock a lock that does not exist",
          );
        } else {
          if (!lock.locked) {
            throw Error(
              "VM received a request to unlock a lock that is already unlocked",
            );
          } else {
            const i = lock.queue.shift();
            if (i === undefined) {
              // no other threads waiting on this lock
              lock.locked = false;
            } else {
              scheduler.unblockThread(i);
              threads.get(i)!.status = ThreadStatus.READY;
            }
          }
        }
        break;
      case Syscall.LOCK_DESTROY:
        // TODO: Implement lock destroy syscall to clean up locks that are no longer in use
        break;
      default:
        throw Error("VM received an invalid syscall");
    }
  };
}

// heapSize is the number of bytes for heap
function INITIALIZE(
  heapSize: number,
  p: Program,
  numOfWorkers: number,
  output: HTMLInputElement,
) {
  // initialize heap
  HEAP = new DataView(new SharedArrayBuffer(heapSize));

  // initialize workers
  for (let i = 0; i < numOfWorkers; i++) {
    const worker = new Worker(new URL("./worker.ts", import.meta.url));
    const workerId = i;

    const threadChannel = new MessageChannel();
    const syscallChannel = new MessageChannel();
    const displayChannel = new MessageChannel();

    // Worker gets port2, vm gets port1
    worker.postMessage(
      [HEAP, FREE, p],
      [threadChannel.port2, syscallChannel.port2, displayChannel.port2],
    );

    displayChannel.port1.onmessage = (message) => {
      output.value += message.data.join("") + "\n";
    };

    init_thread_port(workerId, threadChannel.port1);
    init_syscall_port(syscallChannel.port1);

    threadChannels.set(workerId, threadChannel);
    syscallChannels.set(workerId, syscallChannel);

    workers.set(workerId, worker);
    // Initially, all workers are idle
    idleWorkers.push(workerId);
  }

  // initialize scheduler with configured workers
  scheduler = new RoundRobinScheduler();
}

function SHUT_DOWN_MACHINE() {
  // Once main thread completes, shut down machine
  // All other threads spawned will also stop executing
  for (const w of workers.values()) {
    w.terminate();
  }
}

function RUN_MACHINE() {
  const workerId = idleWorkers.shift();
  if (workerId !== undefined) {
    const res: [ThreadId, number] | null = scheduler.runThread();
    if (res !== null) {
      const port = threadChannels.get(workerId)!.port1;
      port.postMessage([threads.get(res[0]), res[1]]);
    } else {
      throw Error(
        "Scheduler returns null for runThread after main thread was added",
      );
    }
  } else {
    throw Error("No workers to run machine");
  }
}

// Use to check if main thread has terminated, then shut down machine and return result
let mainThreadId: ThreadId;

export const FUNC_ENV_SIZE_OFFSET = 1;
export const FUNC_NUM_ARGS_OFFSET = 2;
export const FUNC_CODE_OFFSET = 3;

export function runWithProgram(
  p: Program,
  heapSize: number,
  numOfWorkers: number,
  output: HTMLInputElement,
) {
  INITIALIZE(heapSize, p, numOfWorkers, output);

  // create main thread for this program
  const PC: number = 0;
  const ENV: number = -1; // -1 ENV indicates that thread has not been executed before
  mainThreadId = scheduler.createThread();
  const thread: Thread = {
    ID: mainThreadId,
    FN: p[0],
    PC: PC,
    ENV: ENV,
    OS: [],
    RTS: [],
    RS: {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      F: 0,
      G: 0,
      H: 0,
      I: 0,
      J: 0,
      K: 0,
    },
    status: ThreadStatus.READY,
  };
  threads.set(mainThreadId, thread);

  RUN_MACHINE();
}
