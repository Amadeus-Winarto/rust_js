import { ThreadId } from "./threads";

export interface Scheduler {
  numOfRunningThreads(): number;
  numOfReadyThreads(): number;
  createThread(): ThreadId;
  blockThread(threadId: ThreadId): void;
  unblockThread(threadId: ThreadId): void;
  pauseThread(threadId: ThreadId): void;
  runThread(): [ThreadId, number] | null;
  removeThread(threadId: ThreadId): void;
}

export class RoundRobinScheduler implements Scheduler {
  private _maxThreadId = -1;
  private _maxTimeQuanta: number = 15;
  private _runningThreads: Set<ThreadId> = new Set();
  private _blockedThreads: Set<ThreadId> = new Set();
  private _readyThreads: ThreadId[] = [];
  private _exitedThreads: ThreadId[] = [];

  numOfRunningThreads(): number {
    return this._runningThreads.size;
  }
  numOfReadyThreads(): number {
    return this._readyThreads.length;
  }
  // Create a new thread and add to back of ready queue
  createThread(): ThreadId {
    this._maxThreadId++;
    this._readyThreads.push(this._maxThreadId);
    return this._maxThreadId;
  }
  blockThread(threadId: number): void {
    this._runningThreads.delete(threadId);
    this._blockedThreads.add(threadId);
  }
  // Add unblocked thread to back of ready queue
  unblockThread(threadId: number): void {
    if (this._blockedThreads.delete(threadId)) {
      this._readyThreads.push(threadId);
    }
  }
  // Place thread to back of ready queue
  // Usually called when time quanta for thread has ended
  pauseThread(threadId: ThreadId): void {
    this._runningThreads.delete(threadId);
    this._readyThreads.push(threadId);
  }
  // Run thread at the head of _readyThreads queue
  // null means there are no ready threads to run
  // or no idle workers to run threads on
  runThread(): [ThreadId, number] | null {
    const nextThread = this._readyThreads.shift();
    if (nextThread !== undefined) {
      const timeQuanta = Math.ceil(
        (0.5 + Math.random() * 0.5) * this._maxTimeQuanta,
      );
      this._runningThreads.add(nextThread);
      return [nextThread, timeQuanta];
    } else {
      return null;
    }
  }
  // Thread should be running before being removed
  // Usually called when thread has exited
  removeThread(threadId: number): void {
    this._runningThreads.delete(threadId);
    this._exitedThreads.push(threadId);
  }
}
