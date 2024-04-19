/*
"Kernel" threads. Implementation of Rust threads will probably be a 1-to-1 mapping to these "kernel" threads.
*/
import { RegisterSet } from "./worker";

export type ThreadId = number;

export enum ThreadStatus {
  // Thread is created but not running
  READY,
  // Thread is blocked waiting for some resource or another thread
  BLOCKED,
  // Thread is scheduled by scheduler, running on a worker
  RUNNING,
  // Thread has finished executing
  TERMINATED,
}

export type Thread = {
  ID: ThreadId;
  FN: number;
  PC: number;
  // Address of environment in heap
  ENV: number;
  OS: any[];
  RTS: any[];
  // Values of registers
  RS: RegisterSet;
  status: ThreadStatus;
};
