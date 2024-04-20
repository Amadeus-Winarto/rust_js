/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/opcodes.ts":
/*!*******************************!*\
  !*** ./src/common/opcodes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OPCODE_MAX: () => (/* binding */ OPCODE_MAX),
/* harmony export */   OpCodes: () => (/* binding */ OpCodes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getInstructionSize: () => (/* binding */ getInstructionSize)
/* harmony export */ });
var OpCodes;
(function (OpCodes) {
    OpCodes[OpCodes["NOP"] = 0] = "NOP";
    OpCodes[OpCodes["LDCI"] = 1] = "LDCI";
    OpCodes[OpCodes["LGCI"] = 2] = "LGCI";
    OpCodes[OpCodes["LDCF32"] = 3] = "LDCF32";
    OpCodes[OpCodes["LGCF32"] = 4] = "LGCF32";
    OpCodes[OpCodes["LDCF64"] = 5] = "LDCF64";
    OpCodes[OpCodes["LGCF64"] = 6] = "LGCF64";
    OpCodes[OpCodes["LDCB0"] = 7] = "LDCB0";
    OpCodes[OpCodes["LDCB1"] = 8] = "LDCB1";
    OpCodes[OpCodes["LGCB0"] = 9] = "LGCB0";
    OpCodes[OpCodes["LGCB1"] = 10] = "LGCB1";
    OpCodes[OpCodes["LGCU"] = 11] = "LGCU";
    OpCodes[OpCodes["LGCN"] = 12] = "LGCN";
    OpCodes[OpCodes["LGCS"] = 13] = "LGCS";
    OpCodes[OpCodes["POPG"] = 14] = "POPG";
    OpCodes[OpCodes["POPB"] = 15] = "POPB";
    OpCodes[OpCodes["POPF"] = 16] = "POPF";
    OpCodes[OpCodes["ADDG"] = 17] = "ADDG";
    OpCodes[OpCodes["ADDF"] = 18] = "ADDF";
    OpCodes[OpCodes["SUBG"] = 19] = "SUBG";
    OpCodes[OpCodes["SUBF"] = 20] = "SUBF";
    OpCodes[OpCodes["MULG"] = 21] = "MULG";
    OpCodes[OpCodes["MULF"] = 22] = "MULF";
    OpCodes[OpCodes["DIVG"] = 23] = "DIVG";
    OpCodes[OpCodes["DIVF"] = 24] = "DIVF";
    OpCodes[OpCodes["MODG"] = 25] = "MODG";
    OpCodes[OpCodes["MODF"] = 26] = "MODF";
    OpCodes[OpCodes["NOTG"] = 27] = "NOTG";
    OpCodes[OpCodes["NOTB"] = 28] = "NOTB";
    OpCodes[OpCodes["LTG"] = 29] = "LTG";
    OpCodes[OpCodes["LTF"] = 30] = "LTF";
    OpCodes[OpCodes["GTG"] = 31] = "GTG";
    OpCodes[OpCodes["GTF"] = 32] = "GTF";
    OpCodes[OpCodes["LEG"] = 33] = "LEG";
    OpCodes[OpCodes["LEF"] = 34] = "LEF";
    OpCodes[OpCodes["GEG"] = 35] = "GEG";
    OpCodes[OpCodes["GEF"] = 36] = "GEF";
    OpCodes[OpCodes["EQG"] = 37] = "EQG";
    OpCodes[OpCodes["EQF"] = 38] = "EQF";
    OpCodes[OpCodes["EQB"] = 39] = "EQB";
    OpCodes[OpCodes["NEWC"] = 40] = "NEWC";
    OpCodes[OpCodes["NEWA"] = 41] = "NEWA";
    OpCodes[OpCodes["LDLG"] = 42] = "LDLG";
    OpCodes[OpCodes["LDLF"] = 43] = "LDLF";
    OpCodes[OpCodes["LDLB"] = 44] = "LDLB";
    OpCodes[OpCodes["STLG"] = 45] = "STLG";
    OpCodes[OpCodes["STLB"] = 46] = "STLB";
    OpCodes[OpCodes["STLF"] = 47] = "STLF";
    OpCodes[OpCodes["LDPG"] = 48] = "LDPG";
    OpCodes[OpCodes["LDPF"] = 49] = "LDPF";
    OpCodes[OpCodes["LDPB"] = 50] = "LDPB";
    OpCodes[OpCodes["STPG"] = 51] = "STPG";
    OpCodes[OpCodes["STPB"] = 52] = "STPB";
    OpCodes[OpCodes["STPF"] = 53] = "STPF";
    OpCodes[OpCodes["LDAG"] = 54] = "LDAG";
    OpCodes[OpCodes["LDAB"] = 55] = "LDAB";
    OpCodes[OpCodes["LDAF"] = 56] = "LDAF";
    OpCodes[OpCodes["STAG"] = 57] = "STAG";
    OpCodes[OpCodes["STAB"] = 58] = "STAB";
    OpCodes[OpCodes["STAF"] = 59] = "STAF";
    OpCodes[OpCodes["BRT"] = 60] = "BRT";
    OpCodes[OpCodes["BRF"] = 61] = "BRF";
    OpCodes[OpCodes["BR"] = 62] = "BR";
    OpCodes[OpCodes["JMP"] = 63] = "JMP";
    OpCodes[OpCodes["CALL"] = 64] = "CALL";
    OpCodes[OpCodes["CALLT"] = 65] = "CALLT";
    OpCodes[OpCodes["CALLP"] = 66] = "CALLP";
    OpCodes[OpCodes["CALLTP"] = 67] = "CALLTP";
    OpCodes[OpCodes["CALLV"] = 68] = "CALLV";
    OpCodes[OpCodes["CALLTV"] = 69] = "CALLTV";
    OpCodes[OpCodes["RETG"] = 70] = "RETG";
    OpCodes[OpCodes["RETF"] = 71] = "RETF";
    OpCodes[OpCodes["RETB"] = 72] = "RETB";
    OpCodes[OpCodes["RETU"] = 73] = "RETU";
    OpCodes[OpCodes["RETN"] = 74] = "RETN";
    OpCodes[OpCodes["DUP"] = 75] = "DUP";
    OpCodes[OpCodes["NEWENV"] = 76] = "NEWENV";
    OpCodes[OpCodes["POPENV"] = 77] = "POPENV";
    OpCodes[OpCodes["NEWCP"] = 78] = "NEWCP";
    OpCodes[OpCodes["NEWCV"] = 79] = "NEWCV";
    OpCodes[OpCodes["NEGG"] = 80] = "NEGG";
    OpCodes[OpCodes["NEGF"] = 81] = "NEGF";
    OpCodes[OpCodes["NEQG"] = 82] = "NEQG";
    OpCodes[OpCodes["NEQF"] = 83] = "NEQF";
    OpCodes[OpCodes["NEQB"] = 84] = "NEQB";
    OpCodes[OpCodes["GOTO"] = 85] = "GOTO";
    OpCodes[OpCodes["NEWT"] = 86] = "NEWT";
    OpCodes[OpCodes["ENDT"] = 87] = "ENDT";
    OpCodes[OpCodes["JOIN"] = 88] = "JOIN";
    OpCodes[OpCodes["NEWL"] = 89] = "NEWL";
    OpCodes[OpCodes["LOCK"] = 90] = "LOCK";
    OpCodes[OpCodes["UNLOCK"] = 91] = "UNLOCK";
    OpCodes[OpCodes["LDPA"] = 92] = "LDPA";
    OpCodes[OpCodes["DEREF"] = 93] = "DEREF";
    OpCodes[OpCodes["ARRAY_LEN"] = 1000] = "ARRAY_LEN";
    OpCodes[OpCodes["DISPLAY"] = 1001] = "DISPLAY";
    OpCodes[OpCodes["DRAW_DATA"] = 1002] = "DRAW_DATA";
    OpCodes[OpCodes["ERROR"] = 1003] = "ERROR";
    OpCodes[OpCodes["IS_ARRAY"] = 1004] = "IS_ARRAY";
    OpCodes[OpCodes["IS_BOOL"] = 1005] = "IS_BOOL";
    OpCodes[OpCodes["IS_FUNC"] = 1006] = "IS_FUNC";
    OpCodes[OpCodes["IS_NULL"] = 1007] = "IS_NULL";
    OpCodes[OpCodes["IS_NUMBER"] = 1008] = "IS_NUMBER";
    OpCodes[OpCodes["IS_STRING"] = 1009] = "IS_STRING";
    OpCodes[OpCodes["IS_UNDEFINED"] = 1010] = "IS_UNDEFINED";
    OpCodes[OpCodes["MATH_ABS"] = 1011] = "MATH_ABS";
    OpCodes[OpCodes["MATH_ACOS"] = 1012] = "MATH_ACOS";
    OpCodes[OpCodes["MATH_ACOSH"] = 1013] = "MATH_ACOSH";
    OpCodes[OpCodes["MATH_ASIN"] = 1014] = "MATH_ASIN";
    OpCodes[OpCodes["MATH_ASINH"] = 1015] = "MATH_ASINH";
    OpCodes[OpCodes["MATH_ATAN"] = 1016] = "MATH_ATAN";
    OpCodes[OpCodes["MATH_ATAN2"] = 1017] = "MATH_ATAN2";
    OpCodes[OpCodes["MATH_ATANH"] = 1018] = "MATH_ATANH";
    OpCodes[OpCodes["MATH_CBRT"] = 1019] = "MATH_CBRT";
    OpCodes[OpCodes["MATH_CEIL"] = 1020] = "MATH_CEIL";
    OpCodes[OpCodes["MATH_CLZ32"] = 1021] = "MATH_CLZ32";
    OpCodes[OpCodes["MATH_COS"] = 1022] = "MATH_COS";
    OpCodes[OpCodes["MATH_COSH"] = 1023] = "MATH_COSH";
    OpCodes[OpCodes["MATH_EXP"] = 1024] = "MATH_EXP";
    OpCodes[OpCodes["MATH_EXPM1"] = 1025] = "MATH_EXPM1";
    OpCodes[OpCodes["MATH_FLOOR"] = 1026] = "MATH_FLOOR";
    OpCodes[OpCodes["MATH_FROUND"] = 1027] = "MATH_FROUND";
    OpCodes[OpCodes["MATH_HYPOT"] = 1028] = "MATH_HYPOT";
    OpCodes[OpCodes["MATH_IMUL"] = 1029] = "MATH_IMUL";
    OpCodes[OpCodes["MATH_LOG"] = 1030] = "MATH_LOG";
    OpCodes[OpCodes["MATH_LOG1P"] = 1031] = "MATH_LOG1P";
    OpCodes[OpCodes["MATH_LOG2"] = 1032] = "MATH_LOG2";
    OpCodes[OpCodes["MATH_LOG10"] = 1033] = "MATH_LOG10";
    OpCodes[OpCodes["MATH_MAX"] = 1034] = "MATH_MAX";
    OpCodes[OpCodes["MATH_MIN"] = 1035] = "MATH_MIN";
    OpCodes[OpCodes["MATH_POW"] = 1036] = "MATH_POW";
    OpCodes[OpCodes["MATH_RANDOM"] = 1037] = "MATH_RANDOM";
    OpCodes[OpCodes["MATH_ROUND"] = 1038] = "MATH_ROUND";
    OpCodes[OpCodes["MATH_SIGN"] = 1039] = "MATH_SIGN";
    OpCodes[OpCodes["MATH_SIN"] = 1040] = "MATH_SIN";
    OpCodes[OpCodes["MATH_SINH"] = 1041] = "MATH_SINH";
    OpCodes[OpCodes["MATH_SQRT"] = 1042] = "MATH_SQRT";
    OpCodes[OpCodes["MATH_TAN"] = 1043] = "MATH_TAN";
    OpCodes[OpCodes["MATH_TANH"] = 1044] = "MATH_TANH";
    OpCodes[OpCodes["MATH_TRUNC"] = 1045] = "MATH_TRUNC";
    OpCodes[OpCodes["PARSE_INT"] = 1046] = "PARSE_INT";
    OpCodes[OpCodes["RUNTIME"] = 1047] = "RUNTIME";
    OpCodes[OpCodes["STREAM"] = 1048] = "STREAM";
    OpCodes[OpCodes["STRINGIFY"] = 1049] = "STRINGIFY";
    OpCodes[OpCodes["PROMPT"] = 1050] = "PROMPT";
    OpCodes[OpCodes["DISPLAY_LIST"] = 1051] = "DISPLAY_LIST";
    OpCodes[OpCodes["CHAR_AT"] = 1052] = "CHAR_AT";
    OpCodes[OpCodes["ARITY"] = 1053] = "ARITY";
    OpCodes[OpCodes["EXECUTE"] = 2000] = "EXECUTE";
    OpCodes[OpCodes["TEST_AND_SET"] = 2001] = "TEST_AND_SET";
    OpCodes[OpCodes["CLEAR"] = 2002] = "CLEAR";
})(OpCodes || (OpCodes = {}));
const OPCODE_MAX = 84;
function getInstructionSize(opcode) {
    switch (opcode) {
        case OpCodes.LDLG:
        case OpCodes.LDLF:
        case OpCodes.LDLB:
        case OpCodes.STLG:
        case OpCodes.STLF:
        case OpCodes.STLB:
        case OpCodes.CALL:
        case OpCodes.CALLT:
        case OpCodes.NEWENV:
        case OpCodes.NEWCP:
        case OpCodes.NEWCV:
            return 2;
        case OpCodes.LDPG:
        case OpCodes.LDPF:
        case OpCodes.LDPB:
        case OpCodes.STPG:
        case OpCodes.STPF:
        case OpCodes.STPB:
        case OpCodes.CALLP:
        case OpCodes.CALLTP:
        case OpCodes.CALLV:
        case OpCodes.CALLTV:
            return 3;
        case OpCodes.LDCI:
        case OpCodes.LGCI:
        case OpCodes.LDCF32:
        case OpCodes.LGCF32:
        case OpCodes.LGCS:
        case OpCodes.NEWC:
        case OpCodes.BRF:
        case OpCodes.BRT:
        case OpCodes.BR:
        case OpCodes.JMP:
            return 5;
        case OpCodes.LDCF64:
        case OpCodes.LGCF64:
            return 9;
        default:
            return 1;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpCodes);


/***/ }),

/***/ "./src/vm/scheduler.ts":
/*!*****************************!*\
  !*** ./src/vm/scheduler.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundRobinScheduler: () => (/* binding */ RoundRobinScheduler)
/* harmony export */ });
class RoundRobinScheduler {
    constructor() {
        this._maxThreadId = -1;
        this._maxTimeQuanta = 15;
        this._runningThreads = new Set();
        this._blockedThreads = new Set();
        this._readyThreads = [];
        this._exitedThreads = [];
    }
    numOfRunningThreads() {
        return this._runningThreads.size;
    }
    numOfReadyThreads() {
        return this._readyThreads.length;
    }
    createThread() {
        this._maxThreadId++;
        this._readyThreads.push(this._maxThreadId);
        return this._maxThreadId;
    }
    blockThread(threadId) {
        this._runningThreads.delete(threadId);
        this._blockedThreads.add(threadId);
    }
    unblockThread(threadId) {
        if (this._blockedThreads.delete(threadId)) {
            this._readyThreads.push(threadId);
        }
    }
    pauseThread(threadId) {
        this._runningThreads.delete(threadId);
        this._readyThreads.push(threadId);
    }
    runThread() {
        const nextThread = this._readyThreads.shift();
        if (nextThread !== undefined) {
            const timeQuanta = Math.ceil((0.5 + Math.random() * 0.5) * this._maxTimeQuanta);
            this._runningThreads.add(nextThread);
            return [nextThread, timeQuanta];
        }
        else {
            return null;
        }
    }
    removeThread(threadId) {
        this._runningThreads.delete(threadId);
        this._exitedThreads.push(threadId);
    }
}


/***/ }),

/***/ "./src/vm/threads.ts":
/*!***************************!*\
  !*** ./src/vm/threads.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThreadStatus: () => (/* binding */ ThreadStatus)
/* harmony export */ });
var ThreadStatus;
(function (ThreadStatus) {
    ThreadStatus[ThreadStatus["READY"] = 0] = "READY";
    ThreadStatus[ThreadStatus["BLOCKED"] = 1] = "BLOCKED";
    ThreadStatus[ThreadStatus["RUNNING"] = 2] = "RUNNING";
    ThreadStatus[ThreadStatus["TERMINATED"] = 3] = "TERMINATED";
})(ThreadStatus || (ThreadStatus = {}));


/***/ }),

/***/ "./src/vm/vm.ts":
/*!**********************!*\
  !*** ./src/vm/vm.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FUNC_CODE_OFFSET: () => (/* binding */ FUNC_CODE_OFFSET),
/* harmony export */   FUNC_ENV_SIZE_OFFSET: () => (/* binding */ FUNC_ENV_SIZE_OFFSET),
/* harmony export */   FUNC_NUM_ARGS_OFFSET: () => (/* binding */ FUNC_NUM_ARGS_OFFSET),
/* harmony export */   Syscall: () => (/* binding */ Syscall),
/* harmony export */   runWithProgram: () => (/* binding */ runWithProgram)
/* harmony export */ });
/* harmony import */ var _threads__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./threads */ "./src/vm/threads.ts");
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler */ "./src/vm/scheduler.ts");


let maxLockId = 0;
var Syscall;
(function (Syscall) {
    Syscall[Syscall["CLONE"] = 0] = "CLONE";
    Syscall[Syscall["JOIN"] = 1] = "JOIN";
    Syscall[Syscall["LOCK_INIT"] = 2] = "LOCK_INIT";
    Syscall[Syscall["LOCK"] = 3] = "LOCK";
    Syscall[Syscall["UNLOCK"] = 4] = "UNLOCK";
    Syscall[Syscall["LOCK_DESTROY"] = 5] = "LOCK_DESTROY";
})(Syscall || (Syscall = {}));
let idleWorkers = [];
const workers = new Map();
const threads = new Map();
const locks = new Map();
const joinThreads = new Map();
const threadChannels = new Map();
const syscallChannels = new Map();
let scheduler;
let FREE;
let HEAP;
function init_thread_port(workerId, port) {
    port.onmessage = (message) => {
        const thread = message.data[0];
        switch (thread.status) {
            case _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.READY:
                scheduler.pauseThread(thread.ID);
                break;
            case _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.TERMINATED:
                if (thread.ID === mainThreadId) {
                    SHUT_DOWN_MACHINE();
                    return;
                }
                scheduler.removeThread(thread.ID);
                const blockedThreads = joinThreads.get(thread.ID);
                if (blockedThreads !== undefined) {
                    for (let i = 0; i < blockedThreads.length; i++) {
                        scheduler.unblockThread(blockedThreads[i]);
                        threads.get(blockedThreads[i]).status = _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.READY;
                    }
                    joinThreads.delete(thread.ID);
                }
                break;
            default:
                throw Error("VM received a thread from worker that is still in RUNNING or BLOCKED status");
        }
        threads.set(thread.ID, thread);
        const res = scheduler.runThread();
        if (res !== null) {
            port.postMessage([threads.get(res[0]), res[1]]);
        }
        else {
            idleWorkers.push(workerId);
        }
    };
}
function init_syscall_port(workerId, port) {
    port.onmessage = (message) => {
        const syscall = message.data[0];
        switch (syscall) {
            case Syscall.CLONE: {
                const FN = message.data[1];
                const PC = message.data[2];
                const ENV = message.data[3];
                const OS = message.data[4];
                const buf = message.data[5];
                const id = scheduler.createThread();
                const thread = {
                    ID: id,
                    FN: FN,
                    PC: PC,
                    ENV: ENV,
                    OS: [...OS, id],
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
                    status: _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.READY,
                };
                threads.set(id, thread);
                Atomics.store(buf, 0, id);
                Atomics.notify(buf, 0, 1);
                const workerId = idleWorkers.shift();
                if (workerId !== undefined) {
                    const res = scheduler.runThread();
                    if (res === null) {
                        throw Error("Scheduler has no thread to run even after new thread was created");
                    }
                    const thread_port = threadChannels.get(workerId).port1;
                    thread_port.postMessage([threads.get(res[0]), res[1]]);
                }
                break;
            }
            case Syscall.JOIN: {
                const joinCaller = message.data[1];
                const joinCallee = message.data[2];
                const TO = message.data[3];
                if (!threads.has(joinCallee)) {
                    throw Error("VM received a request to join a thread that does not exist");
                }
                const thread_port = threadChannels.get(workerId).port1;
                if (threads.get(joinCallee).status === _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.TERMINATED) {
                    joinCaller.status = _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.READY;
                    thread_port.postMessage([joinCaller, TO]);
                }
                else {
                    if (!joinThreads.has(joinCallee)) {
                        joinThreads.set(joinCallee, []);
                    }
                    joinCaller.status = _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.BLOCKED;
                    joinThreads.get(joinCallee).push(joinCaller.ID);
                    scheduler.blockThread(joinCaller.ID);
                    threads.set(joinCaller.ID, joinCaller);
                    const res = scheduler.runThread();
                    if (res !== null) {
                        thread_port.postMessage([threads.get(res[0]), res[1]]);
                    }
                }
                break;
            }
            case Syscall.LOCK_INIT: {
                const buf = message.data[1];
                maxLockId += 1;
                locks.set(maxLockId, { ID: maxLockId, locked: false, queue: [] });
                Atomics.store(buf, 0, maxLockId);
                Atomics.notify(buf, 0, 1);
                break;
            }
            case Syscall.LOCK: {
                const lockCaller = message.data[1];
                const lockId = message.data[2];
                const TO = message.data[3];
                const lock = locks.get(lockId);
                if (lock === undefined) {
                    throw Error("VM received a request to lock a lock that does not exist");
                }
                const thread_port = threadChannels.get(workerId).port1;
                if (lock.locked) {
                    lockCaller.status = _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.BLOCKED;
                    lock.queue.push(lockCaller.ID);
                    scheduler.blockThread(lockCaller.ID);
                    threads.set(lockCaller.ID, lockCaller);
                    const res = scheduler.runThread();
                    if (res !== null) {
                        thread_port.postMessage([threads.get(res[0]), res[1]]);
                    }
                }
                else {
                    lock.locked = true;
                    lockCaller.status = _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.READY;
                    thread_port.postMessage([lockCaller, TO]);
                }
                break;
            }
            case Syscall.UNLOCK: {
                const lockId = message.data[1];
                const lock = locks.get(lockId);
                if (lock === undefined) {
                    throw Error("VM received a request to unlock a lock that does not exist");
                }
                else {
                    if (!lock.locked) {
                        throw Error("VM received a request to unlock a lock that is already unlocked");
                    }
                    else {
                        const tid = lock.queue.shift();
                        if (tid === undefined) {
                            lock.locked = false;
                        }
                        else {
                            scheduler.unblockThread(tid);
                            threads.get(tid).status = _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.READY;
                            const workerId = idleWorkers.shift();
                            if (workerId !== undefined) {
                                const res = scheduler.runThread();
                                if (res === null) {
                                    throw Error("Scheduler has no thread to run even after thread was just unblocked");
                                }
                                const thread_port = threadChannels.get(workerId).port1;
                                thread_port.postMessage([threads.get(res[0]), res[1]]);
                            }
                        }
                    }
                }
                break;
            }
            case Syscall.LOCK_DESTROY: {
                break;
            }
            default:
                throw Error("VM received an invalid syscall");
        }
    };
}
function init_display_port(output, port) {
    port.onmessage = (message) => {
        output.value += message.data.join("") + "\n";
    };
}
function INITIALIZE(heapSize, p, numOfWorkers, output) {
    FREE = new Uint32Array(new SharedArrayBuffer(4));
    HEAP = new DataView(new SharedArrayBuffer(heapSize));
    for (let i = 0; i < numOfWorkers; i++) {
        const worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_vm_vm_ts-src_vm_worker_ts"), __webpack_require__.b));
        const workerId = i;
        const threadChannel = new MessageChannel();
        const syscallChannel = new MessageChannel();
        const displayChannel = new MessageChannel();
        init_thread_port(workerId, threadChannel.port1);
        init_syscall_port(workerId, syscallChannel.port1);
        init_display_port(output, displayChannel.port1);
        worker.postMessage([HEAP, FREE, p], [threadChannel.port2, syscallChannel.port2, displayChannel.port2]);
        threadChannels.set(workerId, threadChannel);
        syscallChannels.set(workerId, syscallChannel);
        workers.set(workerId, worker);
        idleWorkers.push(workerId);
    }
    scheduler = new _scheduler__WEBPACK_IMPORTED_MODULE_1__.RoundRobinScheduler();
}
function SHUT_DOWN_MACHINE() {
    for (const w of workers.values()) {
        w.terminate();
    }
    idleWorkers = [];
    threadChannels.clear();
    syscallChannels.clear();
    workers.clear();
    threads.clear();
    locks.clear();
    joinThreads.clear();
    maxLockId = 0;
}
function RUN_MACHINE() {
    const workerId = idleWorkers.shift();
    if (workerId !== undefined) {
        const res = scheduler.runThread();
        if (res !== null) {
            const port = threadChannels.get(workerId).port1;
            port.postMessage([threads.get(res[0]), res[1]]);
        }
        else {
            throw Error("Scheduler returns null for runThread after main thread was added");
        }
    }
    else {
        throw Error("No workers to run machine");
    }
}
let mainThreadId;
const FUNC_ENV_SIZE_OFFSET = 1;
const FUNC_NUM_ARGS_OFFSET = 2;
const FUNC_CODE_OFFSET = 3;
function runWithProgram(p, heapSize, numOfWorkers, output) {
    INITIALIZE(heapSize, p, numOfWorkers, output);
    const PC = 0;
    const ENV = -1;
    mainThreadId = scheduler.createThread();
    const thread = {
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
        status: _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.READY,
    };
    threads.set(mainThreadId, thread);
    RUN_MACHINE();
}


/***/ }),

/***/ "./src/vm/worker.ts":
/*!**************************!*\
  !*** ./src/vm/worker.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JOIN_THREAD_EXITED: () => (/* binding */ JOIN_THREAD_EXITED),
/* harmony export */   JOIN_THREAD_NOT_EXITED: () => (/* binding */ JOIN_THREAD_NOT_EXITED),
/* harmony export */   LOCK_ACQUIRED: () => (/* binding */ LOCK_ACQUIRED),
/* harmony export */   LOCK_NOT_ACQUIRED: () => (/* binding */ LOCK_NOT_ACQUIRED)
/* harmony export */ });
/* harmony import */ var _threads__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./threads */ "./src/vm/threads.ts");
/* harmony import */ var _common_opcodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/opcodes */ "./src/common/opcodes.ts");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vm */ "./src/vm/vm.ts");



function PEEK(array, idx) {
    return array.slice(-1 - idx)[0];
}
let HEAP;
let FREE;
let RES;
const SIZE_OFFSET = 5;
const WORD_SIZE = 8;
function HEAP_GET(address) {
    return HEAP.getFloat64(address * WORD_SIZE);
}
function HEAP_SET(address, value) {
    HEAP.setFloat64(address * WORD_SIZE, value);
}
function HEAP_GET_CHILD(address, child_index) {
    return HEAP_GET(address + 1 + child_index);
}
function HEAP_SET_CHILD(address, child_index, value) {
    return HEAP_SET(address + 1 + child_index, value);
}
function HEAP_GET_TAG(address) {
    return HEAP.getUint8(address * WORD_SIZE);
}
function HEAP_GET_SIZE(address) {
    return HEAP.getUint16(address * WORD_SIZE + SIZE_OFFSET);
}
function HEAP_GET_NUM_CHILD(address) {
    return HEAP_GET_TAG(address) === NUMBER_TAG ? 0 : HEAP_GET_SIZE(address) - 1;
}
function HEAP_SET_BYTE_AT_OFFSET(address, offset, value) {
    HEAP.setUint8(address * WORD_SIZE + offset, value);
}
function HEAP_GET_BYTE_AT_OFFSET(address, offset) {
    return HEAP.getUint8(address * WORD_SIZE + offset);
}
function HEAP_SET_2_BYTES_AT_OFFSET(address, offset, value) {
    HEAP.setUint16(address * WORD_SIZE + offset, value);
}
function HEAP_GET_2_BYTES_AT_OFFSET(address, offset) {
    return HEAP.getUint16(address * WORD_SIZE + offset);
}
function NEW() {
    K = Atomics.add(FREE, 0, B);
    if ((K + B) * WORD_SIZE > HEAP.byteLength) {
        throw new Error("OUT OF MEMORY");
    }
    HEAP.setUint8(K * WORD_SIZE, A);
    HEAP.setUint16(K * WORD_SIZE + SIZE_OFFSET, B);
    RES = K;
}
const BOOL_TAG = 1;
const BOOL_SIZE = 1;
function NEW_BOOL() {
    C = Number(A);
    A = BOOL_TAG;
    B = BOOL_SIZE;
    NEW();
    HEAP_SET_BYTE_AT_OFFSET(RES, 7, C);
}
function IS_BOOL(address) {
    return HEAP_GET_TAG(address) === BOOL_TAG;
}
function IS_TRUE(address) {
    return IS_BOOL(address) && HEAP_GET_BYTE_AT_OFFSET(address, 7) === 1;
}
function IS_FALSE(address) {
    return IS_BOOL(address) && HEAP_GET_BYTE_AT_OFFSET(address, 7) === 0;
}
const NUMBER_TAG = 2;
const NUMBER_SIZE = 2;
const NUMBER_VALUE_SLOT = 1;
function NEW_NUMBER() {
    C = A;
    A = NUMBER_TAG;
    B = NUMBER_SIZE;
    NEW();
    HEAP_SET(RES + NUMBER_VALUE_SLOT, C);
}
function IS_NUMBER(address) {
    return HEAP_GET_TAG(address) === NUMBER_TAG;
}
const STRING_TAG = 3;
const ENCODER = new TextEncoder();
const DECODER = new TextDecoder();
function NEW_STRING() {
    const view = ENCODER.encode(A);
    C = ENCODER.encode(A);
    A = STRING_TAG;
    B = Math.ceil(C.length / WORD_SIZE) + 2;
    NEW();
    HEAP_SET_CHILD(RES, 0, C.length);
    for (let i = 0; i < C.length; i++) {
        HEAP_SET_BYTE_AT_OFFSET(RES + 2, i, C[i]);
    }
}
function IS_STRING(address) {
    return HEAP_GET_TAG(address) === STRING_TAG;
}
function HEAP_GET_STRING(address) {
    if (!IS_STRING(address)) {
        throw Error("Called HEAP_GET_STRING on an object that is not a string");
    }
    B = HEAP_GET_CHILD(address, 0);
    const view = new Uint8Array(new ArrayBuffer(B));
    for (let i = 0; i < B; i++) {
        view[i] = HEAP_GET_BYTE_AT_OFFSET(address + 2, i);
    }
    return DECODER.decode(view);
}
const ARRAY_TAG = 4;
function NEW_ARRAY() {
    C = A;
    A = ARRAY_TAG;
    B = C.length + 2;
    NEW();
    HEAP_SET_CHILD(RES, 0, C.length);
    for (let i = 0; i < C.length; i++) {
        HEAP_SET_CHILD(RES, i + 1, C[i]);
    }
}
function IS_ARRAY(address) {
    return HEAP_GET_TAG(address) === ARRAY_TAG;
}
const UNDEFINED_TAG = 5;
const UNDEFINED_SIZE = 1;
function NEW_UNDEFINED() {
    A = UNDEFINED_TAG;
    B = UNDEFINED_SIZE;
    NEW();
}
function IS_UNDEFINED(address) {
    return HEAP_GET_TAG(address) === UNDEFINED_TAG;
}
const NULL_TAG = 6;
const NULL_SIZE = 1;
function NEW_NULL() {
    A = NULL_TAG;
    B = NULL_SIZE;
    NEW();
}
function IS_NULL(address) {
    return HEAP_GET_TAG(address) === NULL_TAG;
}
const CLOSURE_TAG = 7;
const CLOSURE_SIZE = 2;
function NEW_CLOSURE() {
    C = A;
    A = CLOSURE_TAG;
    B = CLOSURE_SIZE;
    NEW();
    HEAP_SET_2_BYTES_AT_OFFSET(RES, 2, C[0]);
    HEAP_SET_CHILD(RES, 0, C[1]);
}
function IS_CLOSURE(address) {
    return HEAP_GET_TAG(address) === CLOSURE_TAG;
}
function HEAP_GET_CLOSURE_P(address) {
    return FUNC[HEAP_GET_2_BYTES_AT_OFFSET(address, 2)][_vm__WEBPACK_IMPORTED_MODULE_2__.FUNC_CODE_OFFSET];
}
function HEAP_GET_CLOSURE_FN(address) {
    return HEAP_GET_2_BYTES_AT_OFFSET(address, 2);
}
function HEAP_GET_CLOSURE_ENV(address) {
    return HEAP_GET_CHILD(address, 0);
}
const BLOCK_FRAME_TAG = 8;
const BLOCK_FRAME_SIZE = 2;
function NEW_BLOCK_FRAME() {
    C = A;
    A = BLOCK_FRAME_TAG;
    B = BLOCK_FRAME_SIZE;
    NEW();
    HEAP_SET_CHILD(RES, 0, C);
}
function IS_BLOCK_FRAME(address) {
    return HEAP_GET_TAG(address) === BLOCK_FRAME_TAG;
}
function HEAP_GET_BLOCK_FRAME_ENV(address) {
    return HEAP_GET_CHILD(address, 0);
}
const CALL_FRAME_TAG = 9;
const CALL_FRAME_SIZE = 2;
function NEW_CALL_FRAME() {
    C = A;
    A = CALL_FRAME_TAG;
    B = CALL_FRAME_SIZE;
    NEW();
    HEAP_SET_CHILD(RES, 0, C[0]);
    HEAP_SET_2_BYTES_AT_OFFSET(RES, 1, C[1]);
    HEAP_SET_2_BYTES_AT_OFFSET(RES, 3, C[2]);
}
function IS_CALL_FRAME(address) {
    return HEAP_GET_TAG(address) === CALL_FRAME_TAG;
}
function HEAP_GET_CALL_FRAME_ENV(address) {
    return HEAP_GET_CHILD(address, 0);
}
function HEAP_GET_CALL_FRAME_PC(address) {
    return HEAP_GET_2_BYTES_AT_OFFSET(address, 1);
}
function HEAP_GET_CALL_FRAME_P(address) {
    return FUNC[HEAP_GET_2_BYTES_AT_OFFSET(address, 3)][_vm__WEBPACK_IMPORTED_MODULE_2__.FUNC_CODE_OFFSET];
}
function HEAP_GET_CALL_FRAME_FN(address) {
    return HEAP_GET_2_BYTES_AT_OFFSET(address, 3);
}
const FRAME_TAG = 10;
function NEW_FRAME() {
    C = A;
    A = FRAME_TAG;
    B = 1 + C;
    NEW();
}
function IS_FRAME(address) {
    return HEAP_GET_TAG(address) === FRAME_TAG;
}
const ENVIRONMENT_TAG = 11;
function NEW_ENVIRONMENT() {
    C = A;
    A = ENVIRONMENT_TAG;
    B = 1 + C;
    NEW();
}
function HEAP_GET_ENV_VALUE(address, position) {
    const [frame_index, value_index] = position;
    const frame_address = HEAP_GET_CHILD(address, frame_index);
    return HEAP_GET_CHILD(frame_address, value_index);
}
function HEAP_SET_ENV_VALUE(address, position, value) {
    const [frame_index, value_index] = position;
    const frame_address = HEAP_GET_CHILD(address, frame_index);
    HEAP_SET_CHILD(frame_address, value_index, value);
}
function HEAP_ENV_EXTEND(frame_address, env_address) {
    const old_size = HEAP_GET_SIZE(env_address);
    A = old_size;
    NEW_ENVIRONMENT();
    for (let i = 0; i < old_size - 1; i++) {
        HEAP_SET_CHILD(RES, i, HEAP_GET_CHILD(env_address, i));
    }
    HEAP_SET_CHILD(RES, old_size - 1, frame_address);
    return RES;
}
const UNASSIGNED_TAG = 12;
const UNASSIGNED_SIZE = 1;
function NEW_UNASSIGNED() {
    A = UNASSIGNED_TAG;
    B = UNASSIGNED_SIZE;
    NEW();
}
function IS_UNASSIGNED(address) {
    return HEAP_GET_TAG(address) === UNASSIGNED_TAG;
}
let UNASSIGNED;
const LOCK_TAG = 13;
const LOCK_SIZE = 2;
const LOCK_ID_SLOT = 1;
function NEW_LOCK() {
    C = A;
    A = LOCK_TAG;
    B = LOCK_SIZE;
    NEW();
    HEAP_SET(RES + LOCK_ID_SLOT, C);
}
function IS_LOCK(address) {
    return HEAP_GET_TAG(address) === LOCK_TAG;
}
function HEAP_GET_LOCK_ID(address) {
    return HEAP_GET_CHILD(address, 0);
}
const THREAD_TAG = 14;
const THREAD_SIZE = 2;
const THREAD_ID_SLOT = 1;
function NEW_THREAD() {
    C = A;
    A = THREAD_TAG;
    B = THREAD_SIZE;
    NEW();
    HEAP_SET(RES + THREAD_ID_SLOT, C);
}
function IS_THREAD(address) {
    return HEAP_GET_TAG(address) === THREAD_TAG;
}
function HEAP_GET_THREAD_ID(address) {
    return HEAP_GET_CHILD(address, 0);
}
const ADDRESS_TAG = 15;
const ADDRESS_SIZE = 3;
function NEW_ADDRESS() {
    C = A;
    A = ADDRESS_TAG;
    B = ADDRESS_SIZE;
    NEW();
    HEAP_SET_2_BYTES_AT_OFFSET(RES, 1, C[0]);
    HEAP_SET_2_BYTES_AT_OFFSET(RES, 3, C[1]);
    HEAP_SET_CHILD(RES, 0, C[2]);
    HEAP_SET_CHILD(RES, 1, C[3]);
}
function IS_ADDRESS(address) {
    return HEAP_GET_TAG(address) === ADDRESS_TAG;
}
function HEAP_GET_ADDRESS_VALUE_IDX(address) {
    return HEAP_GET_2_BYTES_AT_OFFSET(address, 1);
}
function HEAP_GET_ADDRESS_FRAME_IDX(address) {
    return HEAP_GET_2_BYTES_AT_OFFSET(address, 3);
}
function HEAP_GET_ADDRESS(address) {
    return HEAP_GET_CHILD(address, 0);
}
function HEAP_SET_ADDRESS(address, value) {
    HEAP_SET_CHILD(address, 0, value);
}
function HEAP_GET_ADDRESS_ENV(address) {
    return HEAP_GET_CHILD(address, 1);
}
function HEAP_ADDRESS_DEREF(address) {
    H = address;
    while (IS_ADDRESS(H)) {
        H = HEAP_GET_ADDRESS(H);
    }
    return H;
}
const GOTO_PC_OFFSET = 1;
const LDCI_VALUE_OFFSET = 1;
const LDCF32_VALUE_OFFSET = 1;
const LDCF64_VALUE_OFFSET = 1;
const LGCS_VALUE_OFFSET = 1;
const NEWC_ADDR_OFFSET = 1;
const LD_ST_VALUE_IDX_OFFSET = 1;
const LD_ST_FRAME_IDX_OFFSET = 2;
const NUM_LOCALS_OFFSET = 1;
const BR_OFFSET = 1;
const CALL_ARITY_OFFSET = 1;
const NEWT_ADDR_OFFSET = 1;
const M = [];
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.NOP] = () => {
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.GOTO] = () => {
    PC = PC + P[PC][GOTO_PC_OFFSET];
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.LGCI] = () => {
    A = P[PC][LDCI_VALUE_OFFSET];
    NEW_NUMBER();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.LGCF32] = () => {
    A = P[PC][LDCF32_VALUE_OFFSET];
    NEW_NUMBER();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.LGCF64] = () => {
    A = P[PC][LDCF64_VALUE_OFFSET];
    NEW_NUMBER();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.LGCB0] = () => {
    A = false;
    NEW_BOOL();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.LGCB1] = () => {
    A = true;
    NEW_BOOL();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.LGCU] = () => {
    NEW_UNDEFINED();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.LGCN] = () => {
    NEW_NULL();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.LGCS] = () => {
    A = P[PC][LGCS_VALUE_OFFSET];
    NEW_STRING();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.ADDG] = () => {
    I = OS.pop();
    G = OS.pop();
    if (IS_NUMBER(I) && IS_NUMBER(G)) {
        A = HEAP_GET(I + NUMBER_VALUE_SLOT);
        A = HEAP_GET(G + NUMBER_VALUE_SLOT) + A;
        NEW_NUMBER();
    }
    else if (IS_STRING(I) && IS_STRING(G)) {
        A = HEAP_GET_STRING(I);
        A = HEAP_GET_STRING(G) + A;
        NEW_STRING();
    }
    else {
        throw Error("Not both arguments to add.g are of type number or type string");
    }
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.SUBG] = () => {
    I = OS.pop();
    G = OS.pop();
    F = IS_NUMBER(I) && IS_NUMBER(G);
    if (F) {
        A = HEAP_GET(I + NUMBER_VALUE_SLOT);
        A = HEAP_GET(G + NUMBER_VALUE_SLOT) - A;
        NEW_NUMBER();
        OS.push(RES);
        PC = PC + 1;
    }
    else {
        throw Error("Not both arguments to sub.g are of type number");
    }
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.MULG] = () => {
    I = OS.pop();
    G = OS.pop();
    F = IS_NUMBER(I) && IS_NUMBER(G);
    if (F) {
        A = HEAP_GET(I + NUMBER_VALUE_SLOT);
        A = HEAP_GET(G + NUMBER_VALUE_SLOT) * A;
        NEW_NUMBER();
        OS.push(RES);
        PC = PC + 1;
    }
    else {
        throw Error("Not both arguments to mul.g are of type number");
    }
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.DIVG] = () => {
    I = OS.pop();
    G = OS.pop();
    F = IS_NUMBER(I) && IS_NUMBER(G);
    if (F) {
        A = HEAP_GET(I + NUMBER_VALUE_SLOT);
        A = HEAP_GET(G + NUMBER_VALUE_SLOT) / A;
        NEW_NUMBER();
        OS.push(RES);
        PC = PC + 1;
    }
    else {
        throw Error("Not both arguments to div.g are of type number");
    }
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.MODG] = () => {
    I = OS.pop();
    G = OS.pop();
    F = IS_NUMBER(I) && IS_NUMBER(G);
    if (F) {
        A = HEAP_GET(I + NUMBER_VALUE_SLOT);
        A = HEAP_GET(G + NUMBER_VALUE_SLOT) % A;
        NEW_NUMBER();
        OS.push(RES);
        PC = PC + 1;
    }
    else {
        throw Error("Not both arguments to mod.g are of type number");
    }
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.NEGG] = () => {
    I = OS.pop();
    F = IS_NUMBER(I);
    if (F) {
        A = -HEAP_GET(I + NUMBER_VALUE_SLOT);
        NEW_NUMBER();
        OS.push(RES);
        PC = PC + 1;
    }
    else {
        throw Error("Argument to neg.g is not of type number");
    }
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.NOTG] = () => {
    I = OS.pop();
    F = IS_BOOL(I);
    if (F) {
        if (IS_TRUE(I)) {
            A = false;
            NEW_BOOL();
        }
        else {
            A = true;
            NEW_BOOL();
        }
        OS.push(RES);
        PC = PC + 1;
    }
    else {
        throw Error("Argument to not.g is not of type boolean");
    }
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.LTG] = () => {
    I = OS.pop();
    G = OS.pop();
    if (IS_NUMBER(I) && IS_NUMBER(G)) {
        A = HEAP_GET(I + NUMBER_VALUE_SLOT);
        A = HEAP_GET(G + NUMBER_VALUE_SLOT) < A;
    }
    else if (IS_STRING(I) && IS_STRING(G)) {
        A = HEAP_GET_STRING(I);
        A = HEAP_GET_STRING(G) < A;
    }
    else {
        throw Error("Not both arguments to lt.g are of type number or type string");
    }
    NEW_BOOL();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.GTG] = () => {
    I = OS.pop();
    G = OS.pop();
    if (IS_NUMBER(I) && IS_NUMBER(G)) {
        A = HEAP_GET(I + NUMBER_VALUE_SLOT);
        A = HEAP_GET(G + NUMBER_VALUE_SLOT) > A;
    }
    else if (IS_STRING(I) && IS_STRING(G)) {
        A = HEAP_GET_STRING(I);
        A = HEAP_GET_STRING(G) > A;
    }
    else {
        throw Error("Not both arguments to gt.g are of type number or type string");
    }
    NEW_BOOL();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.LEG] = () => {
    I = OS.pop();
    G = OS.pop();
    if (IS_NUMBER(I) && IS_NUMBER(G)) {
        A = HEAP_GET(I + NUMBER_VALUE_SLOT);
        A = HEAP_GET(G + NUMBER_VALUE_SLOT) <= A;
    }
    else if (IS_STRING(I) && IS_STRING(G)) {
        A = HEAP_GET_STRING(I);
        A = HEAP_GET_STRING(G) <= A;
    }
    else {
        throw Error("Not both arguments to le.g are of type number or type string");
    }
    NEW_BOOL();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.GEG] = () => {
    I = OS.pop();
    G = OS.pop();
    if (IS_NUMBER(I) && IS_NUMBER(G)) {
        A = HEAP_GET(I + NUMBER_VALUE_SLOT);
        A = HEAP_GET(G + NUMBER_VALUE_SLOT) >= A;
    }
    else if (IS_STRING(I) && IS_STRING(G)) {
        A = HEAP_GET_STRING(I);
        A = HEAP_GET_STRING(G) >= A;
    }
    else {
        throw Error("Not both arguments to ge.g are of type number or type string");
    }
    NEW_BOOL();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.EQG] = () => {
    I = OS.pop();
    G = OS.pop();
    if (IS_NUMBER(I) && IS_NUMBER(G)) {
        A = HEAP_GET(I + NUMBER_VALUE_SLOT);
        A = HEAP_GET(G + NUMBER_VALUE_SLOT) === A;
    }
    else if (IS_BOOL(I) && IS_BOOL(G)) {
        A = (IS_TRUE(I) && IS_TRUE(G)) || (IS_FALSE(I) && IS_FALSE(G));
    }
    else if (IS_STRING(I) && IS_STRING(G)) {
        A = HEAP_GET_STRING(I);
        A = HEAP_GET_STRING(G) === A;
    }
    else {
        throw Error("Not both arguments to eq.g are of type number or type string or type bool");
    }
    NEW_BOOL();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.NEQG] = () => {
    I = OS.pop();
    G = OS.pop();
    if (IS_NUMBER(I) && IS_NUMBER(G)) {
        A = HEAP_GET(I + NUMBER_VALUE_SLOT);
        A = HEAP_GET(G + NUMBER_VALUE_SLOT) !== A;
    }
    else if (IS_BOOL(I) && IS_BOOL(G)) {
        A = (IS_TRUE(I) && IS_FALSE(G)) || (IS_TRUE(I) && IS_FALSE(G));
    }
    else if (IS_STRING(I) && IS_STRING(G)) {
        A = HEAP_GET_STRING(I);
        A = HEAP_GET_STRING(G) !== A;
    }
    else {
        throw Error("Not both arguments to neq.g are of type number or type string or type bool");
    }
    NEW_BOOL();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.NEWC] = () => {
    A = [P[PC][NEWC_ADDR_OFFSET], ENV];
    NEW_CLOSURE();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.LDLG] = () => {
    A = [HEAP_GET_NUM_CHILD(ENV) - 1, P[PC][LD_ST_VALUE_IDX_OFFSET]];
    A = HEAP_GET_ENV_VALUE(ENV, A);
    F = IS_UNASSIGNED(A);
    if (F) {
        throw Error("access of unassigned name");
    }
    OS.push(A);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.STLG] = () => {
    A = [0, P[PC][LD_ST_VALUE_IDX_OFFSET]];
    F = [HEAP_GET_NUM_CHILD(ENV) - 1, P[PC][LD_ST_VALUE_IDX_OFFSET]];
    F = HEAP_GET_ENV_VALUE(ENV, F);
    while (IS_ADDRESS(F)) {
        B = F;
        A = [HEAP_GET_ADDRESS_FRAME_IDX(F), HEAP_GET_ADDRESS_VALUE_IDX(F)];
        F = HEAP_GET_ADDRESS(F);
    }
    G = OS.pop();
    if (IS_ADDRESS(B)) {
        HEAP_SET_ADDRESS(B, G);
        A[0] = HEAP_GET_NUM_CHILD(HEAP_GET_ADDRESS_ENV(B)) - 1 - A[0];
        HEAP_SET_ENV_VALUE(HEAP_GET_ADDRESS_ENV(B), A, G);
    }
    else {
        A[0] = HEAP_GET_NUM_CHILD(ENV) - 1 - A[0];
        HEAP_SET_ENV_VALUE(ENV, A, G);
    }
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.LDPG] = () => {
    A = HEAP_GET_NUM_CHILD(ENV) - 1 - P[PC][LD_ST_FRAME_IDX_OFFSET];
    A = [A, P[PC][LD_ST_VALUE_IDX_OFFSET]];
    A = HEAP_GET_ENV_VALUE(ENV, A);
    F = IS_UNASSIGNED(A);
    if (F) {
        throw Error("access of unassigned name");
    }
    OS.push(A);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.STPG] = () => {
    A = [P[PC][LD_ST_FRAME_IDX_OFFSET], P[PC][LD_ST_VALUE_IDX_OFFSET]];
    F = [
        HEAP_GET_NUM_CHILD(ENV) - 1 - P[PC][LD_ST_FRAME_IDX_OFFSET],
        P[PC][LD_ST_VALUE_IDX_OFFSET],
    ];
    F = HEAP_GET_ENV_VALUE(ENV, F);
    while (IS_ADDRESS(F)) {
        B = F;
        A = [HEAP_GET_ADDRESS_FRAME_IDX(F), HEAP_GET_ADDRESS_VALUE_IDX(F)];
        F = HEAP_GET_ADDRESS(F);
    }
    G = OS.pop();
    if (IS_ADDRESS(B)) {
        HEAP_SET_ADDRESS(B, G);
        A[0] = HEAP_GET_NUM_CHILD(HEAP_GET_ADDRESS_ENV(B)) - 1 - A[0];
        A = HEAP_SET_ENV_VALUE(HEAP_GET_ADDRESS_ENV(B), A, G);
    }
    else {
        A[0] = HEAP_GET_NUM_CHILD(ENV) - 1 - A[0];
        A = HEAP_SET_ENV_VALUE(ENV, A, G);
    }
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.BRT] = () => {
    A = OS.pop();
    if (IS_TRUE(A)) {
        PC = PC + P[PC][BR_OFFSET];
    }
    else {
        PC = PC + 1;
    }
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.BRF] = () => {
    A = OS.pop();
    if (IS_FALSE(A)) {
        PC = PC + P[PC][BR_OFFSET];
    }
    else {
        PC = PC + 1;
    }
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.BR] = () => {
    PC = PC + P[PC][BR_OFFSET];
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.CALL] = () => {
    G = PEEK(OS, P[PC][CALL_ARITY_OFFSET]);
    A = P[PC][CALL_ARITY_OFFSET];
    NEW_FRAME();
    E = RES;
    for (let i = P[PC][CALL_ARITY_OFFSET] - 1; i >= 0; i--) {
        HEAP_SET_CHILD(E, i, OS.pop());
    }
    PC = PC + 1;
    A = [ENV, PC, FN];
    NEW_CALL_FRAME();
    RTS.push(RES);
    OS.pop();
    ENV = HEAP_ENV_EXTEND(E, HEAP_GET_CLOSURE_ENV(G));
    PC = 0;
    P = HEAP_GET_CLOSURE_P(G);
    FN = HEAP_GET_CLOSURE_FN(G);
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.CALLT] = () => {
    G = PEEK(OS, P[PC][CALL_ARITY_OFFSET]);
    A = P[PC][CALL_ARITY_OFFSET];
    NEW_FRAME();
    E = RES;
    for (let i = P[PC][CALL_ARITY_OFFSET] - 1; i >= 0; i--) {
        HEAP_SET_CHILD(E, i, OS.pop());
    }
    OS.pop();
    ENV = HEAP_ENV_EXTEND(E, HEAP_GET_CLOSURE_ENV(G));
    PC = 0;
    P = HEAP_GET_CLOSURE_P(G);
    FN = HEAP_GET_CLOSURE_FN(G);
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.RETG] = () => {
    H = RTS.pop();
    if (IS_CALL_FRAME(H)) {
        PC = HEAP_GET_CALL_FRAME_PC(H);
        ENV = HEAP_GET_CALL_FRAME_ENV(H);
        P = HEAP_GET_CALL_FRAME_P(H);
        FN = HEAP_GET_CALL_FRAME_FN(H);
    }
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.POPG] = () => {
    OS.pop();
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.NEWENV] = () => {
    A = ENV;
    NEW_BLOCK_FRAME();
    RTS.push(RES);
    I = P[PC][NUM_LOCALS_OFFSET];
    A = I;
    NEW_FRAME();
    H = RES;
    ENV = HEAP_ENV_EXTEND(H, ENV);
    for (let i = 0; i < I; i++) {
        HEAP_SET_CHILD(H, i, UNASSIGNED);
    }
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.POPENV] = () => {
    H = RTS.pop();
    if (IS_BLOCK_FRAME(H)) {
        ENV = HEAP_GET_BLOCK_FRAME_ENV(H);
        PC = PC + 1;
    }
    else {
        throw Error("Top of RTS not a block frame when exiting scope");
    }
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.LDPA] = () => {
    A = HEAP_GET_NUM_CHILD(ENV) - 1 - P[PC][LD_ST_FRAME_IDX_OFFSET];
    A = [A, P[PC][LD_ST_VALUE_IDX_OFFSET]];
    A = HEAP_GET_ENV_VALUE(ENV, A);
    A = [P[PC][LD_ST_VALUE_IDX_OFFSET], P[PC][LD_ST_FRAME_IDX_OFFSET], A, ENV];
    NEW_ADDRESS();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.DEREF] = () => {
    H = OS.pop();
    if (IS_ADDRESS(H)) {
        H = HEAP_GET_ADDRESS(H);
        OS.push(H);
        PC = PC + 1;
    }
    else {
        throw Error("Trying to dereference a non-address value");
    }
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.NEWT] = () => {
    A = PC + P[PC][NEWT_ADDR_OFFSET];
    A = THREAD_INIT();
    NEW_THREAD();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.ENDT] = () => {
    STATUS = _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.TERMINATED;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.JOIN] = () => {
    H = OS.pop();
    K = IS_THREAD(H);
    if (K) {
        OS.pop();
        PC = PC + 1;
        JOIN_THREAD(HEAP_GET_THREAD_ID(H));
        BLOCKING_SYSCALL = true;
    }
    else {
        throw Error("Join expects a Thread Id to be on top of OS");
    }
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.NEWL] = () => {
    A = LOCK_INIT();
    NEW_LOCK();
    OS.push(RES);
    PC = PC + 1;
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.LOCK] = () => {
    H = OS.pop();
    K = IS_LOCK(H);
    if (K) {
        PC = PC + 1;
        LOCK(HEAP_GET_LOCK_ID(H));
        BLOCKING_SYSCALL = true;
    }
    else {
        throw Error("Unlock expects a Lock Id to be on top of OS");
    }
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.UNLOCK] = () => {
    H = OS.pop();
    K = IS_LOCK(H);
    if (K) {
        UNLOCK(HEAP_GET_LOCK_ID(H));
        PC = PC + 1;
    }
    else {
        throw Error("Unlock expects a Lock Id to be on top of OS");
    }
};
M[_common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.DISPLAY] = () => {
    A = P[PC][CALL_ARITY_OFFSET];
    let res = [];
    for (let i = 0; i < A; i++) {
        res.push(convertToJsFormat(OS.pop()));
    }
    res = res.reverse();
    DISPLAY_PORT.postMessage(res);
    console.log(...res);
    NEW_UNDEFINED();
    OS.push(RES);
    PC = PC + 1;
};
function THREAD_INIT() {
    const buf = new Int32Array(new SharedArrayBuffer(4));
    SYSCALL_PORT.postMessage([_vm__WEBPACK_IMPORTED_MODULE_2__.Syscall.CLONE, FN, A, ENV, OS, buf]);
    Atomics.wait(buf, 0, 0);
    return buf[0];
}
const JOIN_THREAD_EXITED = 1;
const JOIN_THREAD_NOT_EXITED = -1;
function JOIN_THREAD(joinId) {
    const thread = saveContext();
    SYSCALL_PORT.postMessage([_vm__WEBPACK_IMPORTED_MODULE_2__.Syscall.JOIN, thread, joinId, TO]);
}
const LOCK_ACQUIRED = 1;
const LOCK_NOT_ACQUIRED = -1;
function LOCK_INIT() {
    const buf = new Int32Array(new SharedArrayBuffer(4));
    SYSCALL_PORT.postMessage([_vm__WEBPACK_IMPORTED_MODULE_2__.Syscall.LOCK_INIT, buf]);
    Atomics.wait(buf, 0, 0);
    return buf[0];
}
function LOCK(lockId) {
    const thread = saveContext();
    SYSCALL_PORT.postMessage([_vm__WEBPACK_IMPORTED_MODULE_2__.Syscall.LOCK, thread, lockId, TO]);
}
function UNLOCK(lockId) {
    SYSCALL_PORT.postMessage([_vm__WEBPACK_IMPORTED_MODULE_2__.Syscall.UNLOCK, lockId]);
}
function LOCK_DESTROY(lockId) {
    SYSCALL_PORT.postMessage([_vm__WEBPACK_IMPORTED_MODULE_2__.Syscall.LOCK_DESTROY, lockId]);
}
function convertToJsFormat(address) {
    const tag = HEAP_GET_TAG(address);
    switch (tag) {
        case BOOL_TAG:
            return IS_TRUE(address);
        case NUMBER_TAG:
            return HEAP_GET(address + NUMBER_VALUE_SLOT);
        case STRING_TAG:
            return HEAP_GET_STRING(address);
        case UNDEFINED_TAG:
            return undefined;
        case NULL_TAG:
            return null;
        case CLOSURE_TAG:
            return "<Function>";
        case LOCK_TAG:
            return HEAP_GET_LOCK_ID(address);
        case THREAD_TAG:
            return HEAP_GET_THREAD_ID(address);
        case ADDRESS_TAG:
            return convertToJsFormat(HEAP_ADDRESS_DEREF(address));
        default:
            return address;
    }
}
let A = 0;
let B = 0;
let C = 0;
let D = 0;
let E = 0;
let F = 0;
let G = 0;
let H = 0;
let I = 0;
let J = 0;
let K = 0;
let ENTRY;
let FUNC;
let FN;
let P;
let PC = 0;
let ENV = -1;
let OS = [];
let RTS = [];
let STATUS = _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.RUNNING;
let BLOCKING_SYSCALL = false;
let THREADID;
const HEAP_DATAVIEW_IDX = 0;
const FREE_UINT32_ARR_IDX = 1;
const PROGRAM_IDX = 2;
const THREAD_PORT_IDX = 0;
const SYSCALL_PORT_IDX = 1;
const DISPLAY_PORT_IDX = 2;
const THREAD_IDX = 0;
const TIME_QUANTA_IDX = 1;
let THREAD_PORT;
let SYSCALL_PORT;
let DISPLAY_PORT;
self.onmessage = (message) => {
    const data = message.data;
    const ports = message.ports;
    INITIALIZE(data[HEAP_DATAVIEW_IDX], data[FREE_UINT32_ARR_IDX], data[PROGRAM_IDX], ports[THREAD_PORT_IDX], ports[SYSCALL_PORT_IDX], ports[DISPLAY_PORT_IDX]);
};
function INITIALIZE(heap, free, p, thread_port, syscall_port, display_port) {
    HEAP = heap;
    FREE = free;
    RES = -Infinity;
    NEW_UNASSIGNED();
    UNASSIGNED = RES;
    THREAD_PORT = thread_port;
    SYSCALL_PORT = syscall_port;
    DISPLAY_PORT = display_port;
    ENTRY = p[0];
    FUNC = p[1];
    THREAD_PORT.onmessage = (message) => {
        const data = message.data;
        runThread(data[THREAD_IDX], data[TIME_QUANTA_IDX]);
    };
}
let TO;
function runThread(thread, timeQuanta) {
    BLOCKING_SYSCALL = false;
    loadContext(thread);
    if (ENV === -1) {
        A = 1;
        NEW_ENVIRONMENT();
        ENV = RES;
        A = FUNC.length - 1;
        NEW_FRAME();
        for (let i = 0; i < FUNC.length - 1; i++) {
            HEAP_SET_CHILD(RES, i, UNASSIGNED);
        }
        ENV = HEAP_ENV_EXTEND(RES, ENV);
    }
    TO = timeQuanta;
    while (TO > 0 && (STATUS !== _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.TERMINATED) && !BLOCKING_SYSCALL) {
        RUN_INSTRUCTION();
        TO = TO - 1;
    }
    if (!BLOCKING_SYSCALL) {
        const thread = saveContext();
        if (thread.status === _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.RUNNING) {
            thread.status = _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.READY;
        }
        THREAD_PORT.postMessage([thread]);
    }
}
const INS_OPCODE_OFFSET = 0;
function RUN_INSTRUCTION() {
    if (FN === ENTRY && P[PC][INS_OPCODE_OFFSET] === _common_opcodes__WEBPACK_IMPORTED_MODULE_1__.OpCodes.RETG) {
        STATUS = _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.TERMINATED;
    }
    else {
        M[P[PC][INS_OPCODE_OFFSET]]();
    }
}
function loadContext(thread) {
    A = thread.RS.A;
    B = thread.RS.B;
    C = thread.RS.C;
    D = thread.RS.D;
    E = thread.RS.E;
    F = thread.RS.F;
    G = thread.RS.G;
    H = thread.RS.H;
    I = thread.RS.I;
    J = thread.RS.J;
    K = thread.RS.K;
    P = FUNC[thread.FN][_vm__WEBPACK_IMPORTED_MODULE_2__.FUNC_CODE_OFFSET];
    FN = thread.FN;
    PC = thread.PC;
    ENV = thread.ENV;
    OS = thread.OS;
    RTS = thread.RTS;
    if (thread.status !== _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.READY) {
        throw Error('worker received a thread that is not ready');
    }
    STATUS = _threads__WEBPACK_IMPORTED_MODULE_0__.ThreadStatus.RUNNING;
    THREADID = thread.ID;
}
function saveContext() {
    return {
        ID: THREADID,
        FN: FN,
        PC: PC,
        ENV: ENV,
        OS: OS,
        RTS: RTS,
        RS: {
            A: A,
            B: B,
            C: C,
            D: D,
            E: E,
            F: F,
            G: G,
            H: H,
            I: I,
            J: J,
            K: K,
        },
        status: STATUS
    };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = self.location + "";
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_vm_vm_ts-src_vm_worker_ts": 1
/******/ 		};
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/vm/worker.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztZQUNKLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztTQUNMO1FBQ0QsTUFBTSxFQUFFLE1BQU07S0FDZjtBQUNILENBQUM7Ozs7Ozs7VUNsOENEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBOztXQUVBOzs7OztVRWJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnVzdC5qcy8uL3NyYy9jb21tb24vb3Bjb2Rlcy50cyIsIndlYnBhY2s6Ly9ydXN0LmpzLy4vc3JjL3ZtL3NjaGVkdWxlci50cyIsIndlYnBhY2s6Ly9ydXN0LmpzLy4vc3JjL3ZtL3RocmVhZHMudHMiLCJ3ZWJwYWNrOi8vcnVzdC5qcy8uL3NyYy92bS92bS50cyIsIndlYnBhY2s6Ly9ydXN0LmpzLy4vc3JjL3ZtL3dvcmtlci50cyIsIndlYnBhY2s6Ly9ydXN0LmpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3J1c3QuanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3J1c3QuanMvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3J1c3QuanMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ydXN0LmpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnVzdC5qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3J1c3QuanMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcnVzdC5qcy93ZWJwYWNrL3J1bnRpbWUvaW1wb3J0U2NyaXB0cyBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3J1c3QuanMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ydXN0LmpzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9ydXN0LmpzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBPcENvZGVzIHtcbiAgTk9QID0gMCxcbiAgTERDSSA9IDEsIC8vIGludGVnZXJcbiAgTEdDSSA9IDIsIC8vIGludGVnZXJcbiAgTERDRjMyID0gMywgLy8gMzItYml0IGZsb2F0XG4gIExHQ0YzMiA9IDQsIC8vIDMyLWJpdCBmbG9hdFxuICBMRENGNjQgPSA1LCAvLyA2NC1iaXQgZmxvYXRcbiAgTEdDRjY0ID0gNiwgLy8gNjQtYml0IGZsb2F0XG4gIExEQ0IwID0gNyxcbiAgTERDQjEgPSA4LFxuICBMR0NCMCA9IDksXG4gIExHQ0IxID0gMTAsXG4gIExHQ1UgPSAxMSxcbiAgTEdDTiA9IDEyLFxuICBMR0NTID0gMTMsIC8vIHN0cmluZ1xuICBQT1BHID0gMTQsXG4gIFBPUEIgPSAxNSxcbiAgUE9QRiA9IDE2LFxuICBBRERHID0gMTcsXG4gIEFEREYgPSAxOCxcbiAgU1VCRyA9IDE5LFxuICBTVUJGID0gMjAsXG4gIE1VTEcgPSAyMSxcbiAgTVVMRiA9IDIyLFxuICBESVZHID0gMjMsXG4gIERJVkYgPSAyNCxcbiAgTU9ERyA9IDI1LFxuICBNT0RGID0gMjYsXG4gIE5PVEcgPSAyNyxcbiAgTk9UQiA9IDI4LFxuICBMVEcgPSAyOSxcbiAgTFRGID0gMzAsXG4gIEdURyA9IDMxLFxuICBHVEYgPSAzMixcbiAgTEVHID0gMzMsXG4gIExFRiA9IDM0LFxuICBHRUcgPSAzNSxcbiAgR0VGID0gMzYsXG4gIEVRRyA9IDM3LFxuICBFUUYgPSAzOCxcbiAgRVFCID0gMzksXG4gIE5FV0MgPSA0MCwgLy8gQWRkcmVzcyBvZiBmdW5jdGlvblxuICBORVdBID0gNDEsXG4gIExETEcgPSA0MiwgLy8gaW5kZXggaW4gY3VycmVudCBlbnZcbiAgTERMRiA9IDQzLCAvLyBpbmRleCBpbiBjdXJyZW50IGVudlxuICBMRExCID0gNDQsIC8vIGluZGV4IGluIGN1cnJlbnQgZW52XG4gIFNUTEcgPSA0NSwgLy8gaW5kZXggaW4gY3VycmVudCBlbnZcbiAgU1RMQiA9IDQ2LCAvLyBpbmRleCBpbiBjdXJyZW50IGVudlxuICBTVExGID0gNDcsIC8vIGluZGV4IGluIGN1cnJlbnQgZW52XG4gIExEUEcgPSA0OCwgLy8gaW5kZXggaW4gZW52LCBpbmRleCBvZiBwYXJlbnQgcmVsYXRpdmUgdG8gY3VycmVudCBlbnZcbiAgTERQRiA9IDQ5LCAvLyBpbmRleCBpbiBlbnYsIGluZGV4IG9mIHBhcmVudCByZWxhdGl2ZSB0byBjdXJyZW50IGVudlxuICBMRFBCID0gNTAsIC8vIGluZGV4IGluIGVudiwgaW5kZXggb2YgcGFyZW50IHJlbGF0aXZlIHRvIGN1cnJlbnQgZW52XG4gIFNUUEcgPSA1MSwgLy8gaW5kZXggaW4gZW52LCBpbmRleCBvZiBwYXJlbnQgcmVsYXRpdmUgdG8gY3VycmVudCBlbnZcbiAgU1RQQiA9IDUyLCAvLyBpbmRleCBpbiBlbnYsIGluZGV4IG9mIHBhcmVudCByZWxhdGl2ZSB0byBjdXJyZW50IGVudlxuICBTVFBGID0gNTMsIC8vIGluZGV4IGluIGVudiwgaW5kZXggb2YgcGFyZW50IHJlbGF0aXZlIHRvIGN1cnJlbnQgZW52XG4gIExEQUcgPSA1NCxcbiAgTERBQiA9IDU1LFxuICBMREFGID0gNTYsXG4gIFNUQUcgPSA1NyxcbiAgU1RBQiA9IDU4LFxuICBTVEFGID0gNTksXG4gIEJSVCA9IDYwLCAvLyBPZmZzZXRcbiAgQlJGID0gNjEsIC8vIE9mZnNldFxuICBCUiA9IDYyLCAvLyBPZmZzZXRcbiAgSk1QID0gNjMsIC8vIEFkZHJlc3NcbiAgQ0FMTCA9IDY0LCAvLyBudW1iZXIgb2YgYXJndW1lbnRzXG4gIENBTExUID0gNjUsIC8vIG51bWJlciBvZiBhcmd1bWVudHNcbiAgQ0FMTFAgPSA2NiwgLy8gaWQgb2YgcHJpbWl0aXZlIGZ1bmN0aW9uLCBudW1iZXIgb2YgYXJndW1lbnRzXG4gIENBTExUUCA9IDY3LCAvLyBpZCBvZiBwcmltaXRpdmUgZnVuY3Rpb24sIG51bWJlciBvZiBhcmd1bWVudHNcbiAgQ0FMTFYgPSA2OCwgLy8gaWQgb2Ygdm0taW50ZXJuYWwgZnVuY3Rpb24sIG51bWJlciBvZiBhcmd1bWVudHNcbiAgQ0FMTFRWID0gNjksIC8vIGlkIG9mIHZtLWludGVybmFsIGZ1bmN0aW9uLCBudW1iZXIgb2YgYXJndW1lbnRzXG4gIFJFVEcgPSA3MCxcbiAgUkVURiA9IDcxLFxuICBSRVRCID0gNzIsXG4gIFJFVFUgPSA3MyxcbiAgUkVUTiA9IDc0LFxuICBEVVAgPSA3NSxcbiAgTkVXRU5WID0gNzYsIC8vIG51bWJlciBvZiBsb2NhbHMgaW4gbmV3IGVudmlyb25tZW50XG4gIFBPUEVOViA9IDc3LFxuICBORVdDUCA9IDc4LFxuICBORVdDViA9IDc5LFxuICBORUdHID0gODAsXG4gIE5FR0YgPSA4MSxcbiAgTkVRRyA9IDgyLFxuICBORVFGID0gODMsXG4gIE5FUUIgPSA4NCxcbiAgR09UTyA9IDg1LFxuICBORVdUID0gODYsXG4gIEVORFQgPSA4NyxcbiAgSk9JTiA9IDg4LFxuICBORVdMID0gODksXG4gIExPQ0sgPSA5MCxcbiAgVU5MT0NLID0gOTEsXG4gIExEUEEgPSA5MixcbiAgREVSRUYgPSA5MyxcblxuICAvLyBjdXN0b20gb3Bjb2Rlc1xuICBBUlJBWV9MRU4gPSAxMDAwLFxuICBESVNQTEFZID0gMTAwMSxcbiAgRFJBV19EQVRBID0gMTAwMixcbiAgRVJST1IgPSAxMDAzLFxuICBJU19BUlJBWSA9IDEwMDQsXG4gIElTX0JPT0wgPSAxMDA1LFxuICBJU19GVU5DID0gMTAwNixcbiAgSVNfTlVMTCA9IDEwMDcsXG4gIElTX05VTUJFUiA9IDEwMDgsXG4gIElTX1NUUklORyA9IDEwMDksXG4gIElTX1VOREVGSU5FRCA9IDEwMTAsXG4gIE1BVEhfQUJTID0gMTAxMSxcbiAgTUFUSF9BQ09TID0gMTAxMixcbiAgTUFUSF9BQ09TSCA9IDEwMTMsXG4gIE1BVEhfQVNJTiA9IDEwMTQsXG4gIE1BVEhfQVNJTkggPSAxMDE1LFxuICBNQVRIX0FUQU4gPSAxMDE2LFxuICBNQVRIX0FUQU4yID0gMTAxNyxcbiAgTUFUSF9BVEFOSCA9IDEwMTgsXG4gIE1BVEhfQ0JSVCA9IDEwMTksXG4gIE1BVEhfQ0VJTCA9IDEwMjAsXG4gIE1BVEhfQ0xaMzIgPSAxMDIxLFxuICBNQVRIX0NPUyA9IDEwMjIsXG4gIE1BVEhfQ09TSCA9IDEwMjMsXG4gIE1BVEhfRVhQID0gMTAyNCxcbiAgTUFUSF9FWFBNMSA9IDEwMjUsXG4gIE1BVEhfRkxPT1IgPSAxMDI2LFxuICBNQVRIX0ZST1VORCA9IDEwMjcsXG4gIE1BVEhfSFlQT1QgPSAxMDI4LFxuICBNQVRIX0lNVUwgPSAxMDI5LFxuICBNQVRIX0xPRyA9IDEwMzAsXG4gIE1BVEhfTE9HMVAgPSAxMDMxLFxuICBNQVRIX0xPRzIgPSAxMDMyLFxuICBNQVRIX0xPRzEwID0gMTAzMyxcbiAgTUFUSF9NQVggPSAxMDM0LFxuICBNQVRIX01JTiA9IDEwMzUsXG4gIE1BVEhfUE9XID0gMTAzNixcbiAgTUFUSF9SQU5ET00gPSAxMDM3LFxuICBNQVRIX1JPVU5EID0gMTAzOCxcbiAgTUFUSF9TSUdOID0gMTAzOSxcbiAgTUFUSF9TSU4gPSAxMDQwLFxuICBNQVRIX1NJTkggPSAxMDQxLFxuICBNQVRIX1NRUlQgPSAxMDQyLFxuICBNQVRIX1RBTiA9IDEwNDMsXG4gIE1BVEhfVEFOSCA9IDEwNDQsXG4gIE1BVEhfVFJVTkMgPSAxMDQ1LFxuICBQQVJTRV9JTlQgPSAxMDQ2LFxuICBSVU5USU1FID0gMTA0NyxcbiAgU1RSRUFNID0gMTA0OCxcbiAgU1RSSU5HSUZZID0gMTA0OSxcbiAgUFJPTVBUID0gMTA1MCxcbiAgRElTUExBWV9MSVNUID0gMTA1MSxcbiAgQ0hBUl9BVCA9IDEwNTIsXG4gIEFSSVRZID0gMTA1MyxcblxuICAvLyBTb3VyY2UgMyBDb25jdXJyZW5jdCBPcGNvZGVzXG4gIEVYRUNVVEUgPSAyMDAwLFxuICBURVNUX0FORF9TRVQgPSAyMDAxLFxuICBDTEVBUiA9IDIwMDIsXG59XG5cbmV4cG9ydCBjb25zdCBPUENPREVfTUFYID0gODQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnN0cnVjdGlvblNpemUob3Bjb2RlOiBPcENvZGVzKTogbnVtYmVyIHtcbiAgc3dpdGNoIChvcGNvZGUpIHtcbiAgICBjYXNlIE9wQ29kZXMuTERMRzpcbiAgICBjYXNlIE9wQ29kZXMuTERMRjpcbiAgICBjYXNlIE9wQ29kZXMuTERMQjpcbiAgICBjYXNlIE9wQ29kZXMuU1RMRzpcbiAgICBjYXNlIE9wQ29kZXMuU1RMRjpcbiAgICBjYXNlIE9wQ29kZXMuU1RMQjpcbiAgICBjYXNlIE9wQ29kZXMuQ0FMTDpcbiAgICBjYXNlIE9wQ29kZXMuQ0FMTFQ6XG4gICAgY2FzZSBPcENvZGVzLk5FV0VOVjpcbiAgICBjYXNlIE9wQ29kZXMuTkVXQ1A6XG4gICAgY2FzZSBPcENvZGVzLk5FV0NWOlxuICAgICAgcmV0dXJuIDI7XG5cbiAgICBjYXNlIE9wQ29kZXMuTERQRzpcbiAgICBjYXNlIE9wQ29kZXMuTERQRjpcbiAgICBjYXNlIE9wQ29kZXMuTERQQjpcbiAgICBjYXNlIE9wQ29kZXMuU1RQRzpcbiAgICBjYXNlIE9wQ29kZXMuU1RQRjpcbiAgICBjYXNlIE9wQ29kZXMuU1RQQjpcbiAgICBjYXNlIE9wQ29kZXMuQ0FMTFA6XG4gICAgY2FzZSBPcENvZGVzLkNBTExUUDpcbiAgICBjYXNlIE9wQ29kZXMuQ0FMTFY6XG4gICAgY2FzZSBPcENvZGVzLkNBTExUVjpcbiAgICAgIHJldHVybiAzO1xuXG4gICAgY2FzZSBPcENvZGVzLkxEQ0k6XG4gICAgY2FzZSBPcENvZGVzLkxHQ0k6XG4gICAgY2FzZSBPcENvZGVzLkxEQ0YzMjpcbiAgICBjYXNlIE9wQ29kZXMuTEdDRjMyOlxuICAgIGNhc2UgT3BDb2Rlcy5MR0NTOlxuICAgIGNhc2UgT3BDb2Rlcy5ORVdDOlxuICAgIGNhc2UgT3BDb2Rlcy5CUkY6XG4gICAgY2FzZSBPcENvZGVzLkJSVDpcbiAgICBjYXNlIE9wQ29kZXMuQlI6XG4gICAgY2FzZSBPcENvZGVzLkpNUDpcbiAgICAgIHJldHVybiA1O1xuXG4gICAgY2FzZSBPcENvZGVzLkxEQ0Y2NDpcbiAgICBjYXNlIE9wQ29kZXMuTEdDRjY0OlxuICAgICAgcmV0dXJuIDk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3BDb2RlcztcbiIsImltcG9ydCB7IFRocmVhZElkIH0gZnJvbSBcIi4vdGhyZWFkc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVkdWxlciB7XG4gIG51bU9mUnVubmluZ1RocmVhZHMoKTogbnVtYmVyO1xuICBudW1PZlJlYWR5VGhyZWFkcygpOiBudW1iZXI7XG4gIGNyZWF0ZVRocmVhZCgpOiBUaHJlYWRJZDtcbiAgYmxvY2tUaHJlYWQodGhyZWFkSWQ6IFRocmVhZElkKTogdm9pZDtcbiAgdW5ibG9ja1RocmVhZCh0aHJlYWRJZDogVGhyZWFkSWQpOiB2b2lkO1xuICBwYXVzZVRocmVhZCh0aHJlYWRJZDogVGhyZWFkSWQpOiB2b2lkO1xuICBydW5UaHJlYWQoKTogW1RocmVhZElkLCBudW1iZXJdIHwgbnVsbDtcbiAgcmVtb3ZlVGhyZWFkKHRocmVhZElkOiBUaHJlYWRJZCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBSb3VuZFJvYmluU2NoZWR1bGVyIGltcGxlbWVudHMgU2NoZWR1bGVyIHtcbiAgcHJpdmF0ZSBfbWF4VGhyZWFkSWQgPSAtMTtcbiAgcHJpdmF0ZSBfbWF4VGltZVF1YW50YTogbnVtYmVyID0gMTU7XG4gIHByaXZhdGUgX3J1bm5pbmdUaHJlYWRzOiBTZXQ8VGhyZWFkSWQ+ID0gbmV3IFNldCgpO1xuICBwcml2YXRlIF9ibG9ja2VkVGhyZWFkczogU2V0PFRocmVhZElkPiA9IG5ldyBTZXQoKTtcbiAgcHJpdmF0ZSBfcmVhZHlUaHJlYWRzOiBUaHJlYWRJZFtdID0gW107XG4gIHByaXZhdGUgX2V4aXRlZFRocmVhZHM6IFRocmVhZElkW10gPSBbXTtcblxuICBudW1PZlJ1bm5pbmdUaHJlYWRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bm5pbmdUaHJlYWRzLnNpemU7XG4gIH1cbiAgbnVtT2ZSZWFkeVRocmVhZHMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZHlUaHJlYWRzLmxlbmd0aDtcbiAgfVxuICAvLyBDcmVhdGUgYSBuZXcgdGhyZWFkIGFuZCBhZGQgdG8gYmFjayBvZiByZWFkeSBxdWV1ZVxuICBjcmVhdGVUaHJlYWQoKTogVGhyZWFkSWQge1xuICAgIHRoaXMuX21heFRocmVhZElkKys7XG4gICAgdGhpcy5fcmVhZHlUaHJlYWRzLnB1c2godGhpcy5fbWF4VGhyZWFkSWQpO1xuICAgIHJldHVybiB0aGlzLl9tYXhUaHJlYWRJZDtcbiAgfVxuICBibG9ja1RocmVhZCh0aHJlYWRJZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fcnVubmluZ1RocmVhZHMuZGVsZXRlKHRocmVhZElkKTtcbiAgICB0aGlzLl9ibG9ja2VkVGhyZWFkcy5hZGQodGhyZWFkSWQpO1xuICB9XG4gIC8vIEFkZCB1bmJsb2NrZWQgdGhyZWFkIHRvIGJhY2sgb2YgcmVhZHkgcXVldWVcbiAgdW5ibG9ja1RocmVhZCh0aHJlYWRJZDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2Jsb2NrZWRUaHJlYWRzLmRlbGV0ZSh0aHJlYWRJZCkpIHtcbiAgICAgIHRoaXMuX3JlYWR5VGhyZWFkcy5wdXNoKHRocmVhZElkKTtcbiAgICB9XG4gIH1cbiAgLy8gUGxhY2UgdGhyZWFkIHRvIGJhY2sgb2YgcmVhZHkgcXVldWVcbiAgLy8gVXN1YWxseSBjYWxsZWQgd2hlbiB0aW1lIHF1YW50YSBmb3IgdGhyZWFkIGhhcyBlbmRlZFxuICBwYXVzZVRocmVhZCh0aHJlYWRJZDogVGhyZWFkSWQpOiB2b2lkIHtcbiAgICB0aGlzLl9ydW5uaW5nVGhyZWFkcy5kZWxldGUodGhyZWFkSWQpO1xuICAgIHRoaXMuX3JlYWR5VGhyZWFkcy5wdXNoKHRocmVhZElkKTtcbiAgfVxuICAvLyBSdW4gdGhyZWFkIGF0IHRoZSBoZWFkIG9mIF9yZWFkeVRocmVhZHMgcXVldWVcbiAgLy8gbnVsbCBtZWFucyB0aGVyZSBhcmUgbm8gcmVhZHkgdGhyZWFkcyB0byBydW5cbiAgLy8gb3Igbm8gaWRsZSB3b3JrZXJzIHRvIHJ1biB0aHJlYWRzIG9uXG4gIHJ1blRocmVhZCgpOiBbVGhyZWFkSWQsIG51bWJlcl0gfCBudWxsIHtcbiAgICBjb25zdCBuZXh0VGhyZWFkID0gdGhpcy5fcmVhZHlUaHJlYWRzLnNoaWZ0KCk7XG4gICAgaWYgKG5leHRUaHJlYWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgdGltZVF1YW50YSA9IE1hdGguY2VpbChcbiAgICAgICAgKDAuNSArIE1hdGgucmFuZG9tKCkgKiAwLjUpICogdGhpcy5fbWF4VGltZVF1YW50YSxcbiAgICAgICk7XG4gICAgICB0aGlzLl9ydW5uaW5nVGhyZWFkcy5hZGQobmV4dFRocmVhZCk7XG4gICAgICByZXR1cm4gW25leHRUaHJlYWQsIHRpbWVRdWFudGFdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgLy8gVGhyZWFkIHNob3VsZCBiZSBydW5uaW5nIGJlZm9yZSBiZWluZyByZW1vdmVkXG4gIC8vIFVzdWFsbHkgY2FsbGVkIHdoZW4gdGhyZWFkIGhhcyBleGl0ZWRcbiAgcmVtb3ZlVGhyZWFkKHRocmVhZElkOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9ydW5uaW5nVGhyZWFkcy5kZWxldGUodGhyZWFkSWQpO1xuICAgIHRoaXMuX2V4aXRlZFRocmVhZHMucHVzaCh0aHJlYWRJZCk7XG4gIH1cbn1cbiIsIi8qXG5cIktlcm5lbFwiIHRocmVhZHMuIEltcGxlbWVudGF0aW9uIG9mIFJ1c3QgdGhyZWFkcyB3aWxsIHByb2JhYmx5IGJlIGEgMS10by0xIG1hcHBpbmcgdG8gdGhlc2UgXCJrZXJuZWxcIiB0aHJlYWRzLlxuKi9cbmltcG9ydCB7IFJlZ2lzdGVyU2V0IH0gZnJvbSBcIi4vd29ya2VyXCI7XG5cbmV4cG9ydCB0eXBlIFRocmVhZElkID0gbnVtYmVyO1xuXG5leHBvcnQgZW51bSBUaHJlYWRTdGF0dXMge1xuICAvLyBUaHJlYWQgaXMgY3JlYXRlZCBidXQgbm90IHJ1bm5pbmdcbiAgUkVBRFksXG4gIC8vIFRocmVhZCBpcyBibG9ja2VkIHdhaXRpbmcgZm9yIHNvbWUgcmVzb3VyY2Ugb3IgYW5vdGhlciB0aHJlYWRcbiAgQkxPQ0tFRCxcbiAgLy8gVGhyZWFkIGlzIHNjaGVkdWxlZCBieSBzY2hlZHVsZXIsIHJ1bm5pbmcgb24gYSB3b3JrZXJcbiAgUlVOTklORyxcbiAgLy8gVGhyZWFkIGhhcyBmaW5pc2hlZCBleGVjdXRpbmdcbiAgVEVSTUlOQVRFRCxcbn1cblxuZXhwb3J0IHR5cGUgVGhyZWFkID0ge1xuICBJRDogVGhyZWFkSWQ7XG4gIEZOOiBudW1iZXI7XG4gIFBDOiBudW1iZXI7XG4gIC8vIEFkZHJlc3Mgb2YgZW52aXJvbm1lbnQgaW4gaGVhcFxuICBFTlY6IG51bWJlcjtcbiAgT1M6IGFueVtdO1xuICBSVFM6IGFueVtdO1xuICAvLyBWYWx1ZXMgb2YgcmVnaXN0ZXJzXG4gIFJTOiBSZWdpc3RlclNldDtcbiAgc3RhdHVzOiBUaHJlYWRTdGF0dXM7XG59O1xuIiwiaW1wb3J0IHsgVGhyZWFkU3RhdHVzLCBUaHJlYWRJZCwgVGhyZWFkIH0gZnJvbSBcIi4vdGhyZWFkc1wiO1xuaW1wb3J0IHsgUm91bmRSb2JpblNjaGVkdWxlciwgU2NoZWR1bGVyIH0gZnJvbSBcIi4vc2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBQcm9ncmFtQXJyYXkgYXMgUHJvZ3JhbSB9IGZyb20gXCIuLi9jb21tb24vdHlwZXNcIjtcbmltcG9ydCB7XG4gIFdvcmtlcklkLFxuICBKT0lOX1RIUkVBRF9FWElURUQsXG4gIEpPSU5fVEhSRUFEX05PVF9FWElURUQsXG4gIExPQ0tfQUNRVUlSRUQsXG4gIExPQ0tfTk9UX0FDUVVJUkVELFxufSBmcm9tIFwiLi93b3JrZXJcIjtcblxuZXhwb3J0IHR5cGUgTG9ja0lkID0gbnVtYmVyO1xuXG5leHBvcnQgdHlwZSBMb2NrID0ge1xuICBJRDogTG9ja0lkO1xuICBsb2NrZWQ6IGJvb2xlYW47XG4gIC8vIEZJRk8gcXVldWUgb2YgdGhyZWFkcyB3YWl0aW5nIHRvIGFjcXVpcmUgbG9jaywgdGhpcyBlbnN1cmVzIG5vIHN0YXJ2YXRpb25cbiAgcXVldWU6IFRocmVhZElkW107XG59O1xuXG5sZXQgbWF4TG9ja0lkID0gMDtcblxuZXhwb3J0IGVudW0gU3lzY2FsbCB7XG4gIENMT05FLFxuICBKT0lOLFxuICBMT0NLX0lOSVQsXG4gIExPQ0ssXG4gIFVOTE9DSyxcbiAgTE9DS19ERVNUUk9ZLFxufVxuXG5sZXQgaWRsZVdvcmtlcnM6IFdvcmtlcklkW10gPSBbXTtcbmNvbnN0IHdvcmtlcnM6IE1hcDxXb3JrZXJJZCwgV29ya2VyPiA9IG5ldyBNYXAoKTtcbmNvbnN0IHRocmVhZHM6IE1hcDxUaHJlYWRJZCwgVGhyZWFkPiA9IG5ldyBNYXAoKTtcbmNvbnN0IGxvY2tzOiBNYXA8TG9ja0lkLCBMb2NrPiA9IG5ldyBNYXAoKTtcbi8vIE1hcCBvZiB0aHJlYWQgaWQgdG8gYXJyYXkgb2YgdGhyZWFkIGlkcyB3YWl0aW5nXG5jb25zdCBqb2luVGhyZWFkczogTWFwPFRocmVhZElkLCBUaHJlYWRJZFtdPiA9IG5ldyBNYXAoKTtcblxuY29uc3QgdGhyZWFkQ2hhbm5lbHM6IE1hcDxXb3JrZXJJZCwgTWVzc2FnZUNoYW5uZWw+ID0gbmV3IE1hcCgpO1xuY29uc3Qgc3lzY2FsbENoYW5uZWxzOiBNYXA8V29ya2VySWQsIE1lc3NhZ2VDaGFubmVsPiA9IG5ldyBNYXAoKTtcblxubGV0IHNjaGVkdWxlcjogU2NoZWR1bGVyO1xubGV0IEZSRUU6IFVpbnQzMkFycmF5O1xubGV0IEhFQVA6IERhdGFWaWV3O1xuXG4vLyBzZXRzIHVwIG1lc3NhZ2UgaGFuZGxlcnMgZm9yIHRocmVhZCByZWxhdGVkIG1lc3NhZ2VzIGZyb20gd29ya2Vyc1xuZnVuY3Rpb24gaW5pdF90aHJlYWRfcG9ydCh3b3JrZXJJZDogV29ya2VySWQsIHBvcnQ6IE1lc3NhZ2VQb3J0KSB7XG4gIHBvcnQub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCB0aHJlYWQ6IFRocmVhZCA9IG1lc3NhZ2UuZGF0YVswXTtcbiAgICBzd2l0Y2ggKHRocmVhZC5zdGF0dXMpIHtcbiAgICAgIGNhc2UgVGhyZWFkU3RhdHVzLlJFQURZOlxuICAgICAgICBzY2hlZHVsZXIucGF1c2VUaHJlYWQodGhyZWFkLklEKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRocmVhZFN0YXR1cy5URVJNSU5BVEVEOlxuICAgICAgICBpZiAodGhyZWFkLklEID09PSBtYWluVGhyZWFkSWQpIHtcbiAgICAgICAgICAvLyBTaHV0IGRvd24gbWFjaGluZVxuICAgICAgICAgIFNIVVRfRE9XTl9NQUNISU5FKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlci5yZW1vdmVUaHJlYWQodGhyZWFkLklEKTtcbiAgICAgICAgLy8gdW5ibG9jayBhbGwgdGhlIHRocmVhZHMgd2FpdGluZyBvbiB0aGlzIHRocmVhZCB0byB0ZXJtaW5hdGUsIGlmIGFueVxuICAgICAgICBjb25zdCBibG9ja2VkVGhyZWFkcyA9IGpvaW5UaHJlYWRzLmdldCh0aHJlYWQuSUQpO1xuICAgICAgICBpZiAoYmxvY2tlZFRocmVhZHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tlZFRocmVhZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNjaGVkdWxlci51bmJsb2NrVGhyZWFkKGJsb2NrZWRUaHJlYWRzIVtpXSk7XG4gICAgICAgICAgICB0aHJlYWRzLmdldChibG9ja2VkVGhyZWFkc1tpXSkhLnN0YXR1cyA9IFRocmVhZFN0YXR1cy5SRUFEWTtcbiAgICAgICAgICB9XG4gICAgICAgICAgam9pblRocmVhZHMuZGVsZXRlKHRocmVhZC5JRClcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIHRocmVhZCBzdGF0dXMgc2hvdWxkIG5vdCBiZSBydW5uaW5nXG4gICAgICAgIC8vIFRoaXMgY29kZSBzaG91bGQgbm90IHJ1blxuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBcIlZNIHJlY2VpdmVkIGEgdGhyZWFkIGZyb20gd29ya2VyIHRoYXQgaXMgc3RpbGwgaW4gUlVOTklORyBvciBCTE9DS0VEIHN0YXR1c1wiLFxuICAgICAgICApO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgdGhyZWFkIGNvbnRleHRcbiAgICB0aHJlYWRzLnNldCh0aHJlYWQuSUQsIHRocmVhZCk7XG4gICAgLy8gU2VuZCBuZXh0IHRocmVhZCB0byB3b3JrZXIgdG8gcnVuLCBpZiBhbnlcbiAgICBjb25zdCByZXM6IFtUaHJlYWRJZCwgbnVtYmVyXSB8IG51bGwgPSBzY2hlZHVsZXIucnVuVGhyZWFkKCk7XG4gICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgcG9ydC5wb3N0TWVzc2FnZShbdGhyZWFkcy5nZXQocmVzWzBdKSwgcmVzWzFdXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIG1vcmUgdGhyZWFkIHRvIHJ1blxuICAgICAgaWRsZVdvcmtlcnMucHVzaCh3b3JrZXJJZCk7XG4gICAgfVxuICB9O1xufVxuXG5cbi8vIHNldHMgdXAgbWVzc2FnZSBoYW5kbGVycyBmb3Igc3lzY2FsbCByZWxhdGVkIG1lc3NhZ2VzIGZyb20gd29ya2Vyc1xuZnVuY3Rpb24gaW5pdF9zeXNjYWxsX3BvcnQod29ya2VySWQ6IFdvcmtlcklkLCBwb3J0OiBNZXNzYWdlUG9ydCkge1xuICBwb3J0Lm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgY29uc3Qgc3lzY2FsbDogU3lzY2FsbCA9IG1lc3NhZ2UuZGF0YVswXTtcbiAgICBzd2l0Y2ggKHN5c2NhbGwpIHtcbiAgICAgIGNhc2UgU3lzY2FsbC5DTE9ORToge1xuICAgICAgICBjb25zdCBGTjogbnVtYmVyID0gbWVzc2FnZS5kYXRhWzFdO1xuICAgICAgICBjb25zdCBQQzogbnVtYmVyID0gbWVzc2FnZS5kYXRhWzJdO1xuICAgICAgICBjb25zdCBFTlY6IG51bWJlciA9IG1lc3NhZ2UuZGF0YVszXTtcbiAgICAgICAgY29uc3QgT1M6IGFueVtdID0gbWVzc2FnZS5kYXRhWzRdO1xuICAgICAgICBjb25zdCBidWY6IEludDMyQXJyYXkgPSBtZXNzYWdlLmRhdGFbNV07XG4gICAgICAgIGNvbnN0IGlkID0gc2NoZWR1bGVyLmNyZWF0ZVRocmVhZCgpO1xuICAgICAgICBjb25zdCB0aHJlYWQ6IFRocmVhZCA9IHtcbiAgICAgICAgICBJRDogaWQsXG4gICAgICAgICAgRk46IEZOLFxuICAgICAgICAgIFBDOiBQQyxcbiAgICAgICAgICBFTlY6IEVOVixcbiAgICAgICAgICBPUzogWy4uLk9TLCBpZF0sXG4gICAgICAgICAgUlRTOiBbXSxcbiAgICAgICAgICBSUzoge1xuICAgICAgICAgICAgQTogMCxcbiAgICAgICAgICAgIEI6IDAsXG4gICAgICAgICAgICBDOiAwLFxuICAgICAgICAgICAgRDogMCxcbiAgICAgICAgICAgIEU6IDAsXG4gICAgICAgICAgICBGOiAwLFxuICAgICAgICAgICAgRzogMCxcbiAgICAgICAgICAgIEg6IDAsXG4gICAgICAgICAgICBJOiAwLFxuICAgICAgICAgICAgSjogMCxcbiAgICAgICAgICAgIEs6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdGF0dXM6IFRocmVhZFN0YXR1cy5SRUFEWSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhyZWFkcy5zZXQoaWQsIHRocmVhZCk7XG4gICAgICAgIEF0b21pY3Muc3RvcmUoYnVmLCAwLCBpZCk7XG4gICAgICAgIEF0b21pY3Mubm90aWZ5KGJ1ZiwgMCwgMSk7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGFuIGlkbGUgd29ya2VyIHRvIHNlbmQgdGhpcyBuZXdseSBjcmVhdGVkIHRocmVhZCBmb3IgZXhlY3V0aW9uXG4gICAgICAgIGNvbnN0IHdvcmtlcklkID0gaWRsZVdvcmtlcnMuc2hpZnQoKTtcbiAgICAgICAgaWYgKHdvcmtlcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCByZXM6IFtUaHJlYWRJZCwgbnVtYmVyXSB8IG51bGwgPSBzY2hlZHVsZXIucnVuVGhyZWFkKCk7XG4gICAgICAgICAgaWYgKHJlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICAgIFwiU2NoZWR1bGVyIGhhcyBubyB0aHJlYWQgdG8gcnVuIGV2ZW4gYWZ0ZXIgbmV3IHRocmVhZCB3YXMgY3JlYXRlZFwiLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgdGhyZWFkX3BvcnQgPSB0aHJlYWRDaGFubmVscy5nZXQod29ya2VySWQpIS5wb3J0MTtcbiAgICAgICAgICB0aHJlYWRfcG9ydC5wb3N0TWVzc2FnZShbdGhyZWFkcy5nZXQocmVzWzBdKSwgcmVzWzFdXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFN5c2NhbGwuSk9JTjoge1xuICAgICAgICBjb25zdCBqb2luQ2FsbGVyOiBUaHJlYWQgPSBtZXNzYWdlLmRhdGFbMV07XG4gICAgICAgIGNvbnN0IGpvaW5DYWxsZWU6IFRocmVhZElkID0gbWVzc2FnZS5kYXRhWzJdO1xuICAgICAgICBjb25zdCBUTyA9IG1lc3NhZ2UuZGF0YVszXTtcbiAgICAgICAgaWYgKCF0aHJlYWRzLmhhcyhqb2luQ2FsbGVlKSkge1xuICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgXCJWTSByZWNlaXZlZCBhIHJlcXVlc3QgdG8gam9pbiBhIHRocmVhZCB0aGF0IGRvZXMgbm90IGV4aXN0XCIsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aHJlYWRfcG9ydCA9IHRocmVhZENoYW5uZWxzLmdldCh3b3JrZXJJZCkhLnBvcnQxO1xuICAgICAgICAvLyBDaGVjayBpZiBqb2luQ2FsbGVlIGhhcyB0ZXJtaW5hdGVkXG4gICAgICAgIGlmICh0aHJlYWRzLmdldChqb2luQ2FsbGVlKSEuc3RhdHVzID09PSBUaHJlYWRTdGF0dXMuVEVSTUlOQVRFRCkge1xuICAgICAgICAgIGpvaW5DYWxsZXIuc3RhdHVzID0gVGhyZWFkU3RhdHVzLlJFQURZXG4gICAgICAgICAgdGhyZWFkX3BvcnQucG9zdE1lc3NhZ2UoW2pvaW5DYWxsZXIsIFRPXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWpvaW5UaHJlYWRzLmhhcyhqb2luQ2FsbGVlKSkge1xuICAgICAgICAgICAgam9pblRocmVhZHMuc2V0KGpvaW5DYWxsZWUsIFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gU3RvcmUgYWxsIHRoZSB0aHJlYWRzIHdhaXRpbmcgb24gam9pbkNhbGxlZSB0byB0ZXJtaW5hdGVcbiAgICAgICAgICBqb2luQ2FsbGVyLnN0YXR1cyA9IFRocmVhZFN0YXR1cy5CTE9DS0VEXG4gICAgICAgICAgam9pblRocmVhZHMuZ2V0KGpvaW5DYWxsZWUpIS5wdXNoKGpvaW5DYWxsZXIuSUQpXG4gICAgICAgICAgc2NoZWR1bGVyLmJsb2NrVGhyZWFkKGpvaW5DYWxsZXIuSUQpXG4gICAgICAgICAgdGhyZWFkcy5zZXQoam9pbkNhbGxlci5JRCwgam9pbkNhbGxlcilcblxuICAgICAgICAgIGNvbnN0IHJlczogW1RocmVhZElkLCBudW1iZXJdIHwgbnVsbCA9IHNjaGVkdWxlci5ydW5UaHJlYWQoKTtcbiAgICAgICAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJlYWRfcG9ydC5wb3N0TWVzc2FnZShbdGhyZWFkcy5nZXQocmVzWzBdKSwgcmVzWzFdXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTeXNjYWxsLkxPQ0tfSU5JVDoge1xuICAgICAgICBjb25zdCBidWY6IEludDMyQXJyYXkgPSBtZXNzYWdlLmRhdGFbMV07XG4gICAgICAgIG1heExvY2tJZCArPSAxO1xuICAgICAgICBsb2Nrcy5zZXQobWF4TG9ja0lkLCB7IElEOiBtYXhMb2NrSWQsIGxvY2tlZDogZmFsc2UsIHF1ZXVlOiBbXSB9KTtcbiAgICAgICAgQXRvbWljcy5zdG9yZShidWYsIDAsIG1heExvY2tJZCk7XG4gICAgICAgIEF0b21pY3Mubm90aWZ5KGJ1ZiwgMCwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTeXNjYWxsLkxPQ0s6IHtcbiAgICAgICAgY29uc3QgbG9ja0NhbGxlcjogVGhyZWFkID0gbWVzc2FnZS5kYXRhWzFdXG4gICAgICAgIGNvbnN0IGxvY2tJZDogTG9ja0lkID0gbWVzc2FnZS5kYXRhWzJdO1xuICAgICAgICBjb25zdCBUTzogbnVtYmVyID0gbWVzc2FnZS5kYXRhWzNdXG4gICAgICAgIGNvbnN0IGxvY2s6IExvY2sgfCB1bmRlZmluZWQgPSBsb2Nrcy5nZXQobG9ja0lkKTtcbiAgICAgICAgaWYgKGxvY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgXCJWTSByZWNlaXZlZCBhIHJlcXVlc3QgdG8gbG9jayBhIGxvY2sgdGhhdCBkb2VzIG5vdCBleGlzdFwiLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGhyZWFkX3BvcnQgPSB0aHJlYWRDaGFubmVscy5nZXQod29ya2VySWQpIS5wb3J0MTtcbiAgICAgICAgaWYgKGxvY2subG9ja2VkKSB7XG4gICAgICAgICAgLy8gQmxvY2sgdGhyZWFkIHNpbmNlIGZhaWxlZCB0byBhY3F1aXJlIGxvY2tcbiAgICAgICAgICBsb2NrQ2FsbGVyLnN0YXR1cyA9IFRocmVhZFN0YXR1cy5CTE9DS0VEXG4gICAgICAgICAgbG9jay5xdWV1ZS5wdXNoKGxvY2tDYWxsZXIuSUQpXG4gICAgICAgICAgc2NoZWR1bGVyLmJsb2NrVGhyZWFkKGxvY2tDYWxsZXIuSUQpXG4gICAgICAgICAgdGhyZWFkcy5zZXQobG9ja0NhbGxlci5JRCwgbG9ja0NhbGxlcilcblxuICAgICAgICAgIGNvbnN0IHJlczogW1RocmVhZElkLCBudW1iZXJdIHwgbnVsbCA9IHNjaGVkdWxlci5ydW5UaHJlYWQoKTtcbiAgICAgICAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJlYWRfcG9ydC5wb3N0TWVzc2FnZShbdGhyZWFkcy5nZXQocmVzWzBdKSwgcmVzWzFdXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvY2subG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICBsb2NrQ2FsbGVyLnN0YXR1cyA9IFRocmVhZFN0YXR1cy5SRUFEWVxuICAgICAgICAgIHRocmVhZF9wb3J0LnBvc3RNZXNzYWdlKFtsb2NrQ2FsbGVyLCBUT10pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFN5c2NhbGwuVU5MT0NLOiB7XG4gICAgICAgIGNvbnN0IGxvY2tJZDogTG9ja0lkID0gbWVzc2FnZS5kYXRhWzFdO1xuICAgICAgICBjb25zdCBsb2NrOiBMb2NrIHwgdW5kZWZpbmVkID0gbG9ja3MuZ2V0KGxvY2tJZCk7XG4gICAgICAgIGlmIChsb2NrID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgIFwiVk0gcmVjZWl2ZWQgYSByZXF1ZXN0IHRvIHVubG9jayBhIGxvY2sgdGhhdCBkb2VzIG5vdCBleGlzdFwiLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFsb2NrLmxvY2tlZCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICAgIFwiVk0gcmVjZWl2ZWQgYSByZXF1ZXN0IHRvIHVubG9jayBhIGxvY2sgdGhhdCBpcyBhbHJlYWR5IHVubG9ja2VkXCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0aWQgPSBsb2NrLnF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAodGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgLy8gbm8gb3RoZXIgdGhyZWFkcyB3YWl0aW5nIG9uIHRoaXMgbG9ja1xuICAgICAgICAgICAgICBsb2NrLmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2NoZWR1bGVyLnVuYmxvY2tUaHJlYWQodGlkKTtcbiAgICAgICAgICAgICAgdGhyZWFkcy5nZXQodGlkKSEuc3RhdHVzID0gVGhyZWFkU3RhdHVzLlJFQURZO1xuICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhbiBpZGxlIHdvcmtlciB0byBzZW5kIHRoaXMgdW5ibG9ja2VkIHRocmVhZCBmb3IgZXhlY3V0aW9uXG4gICAgICAgICAgICAgIGNvbnN0IHdvcmtlcklkID0gaWRsZVdvcmtlcnMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgaWYgKHdvcmtlcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXM6IFtUaHJlYWRJZCwgbnVtYmVyXSB8IG51bGwgPSBzY2hlZHVsZXIucnVuVGhyZWFkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIFwiU2NoZWR1bGVyIGhhcyBubyB0aHJlYWQgdG8gcnVuIGV2ZW4gYWZ0ZXIgdGhyZWFkIHdhcyBqdXN0IHVuYmxvY2tlZFwiLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdGhyZWFkX3BvcnQgPSB0aHJlYWRDaGFubmVscy5nZXQod29ya2VySWQpIS5wb3J0MTtcbiAgICAgICAgICAgICAgICB0aHJlYWRfcG9ydC5wb3N0TWVzc2FnZShbdGhyZWFkcy5nZXQocmVzWzBdKSwgcmVzWzFdXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFN5c2NhbGwuTE9DS19ERVNUUk9ZOiB7XG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBsb2NrIGRlc3Ryb3kgc3lzY2FsbCB0byBjbGVhbiB1cCBsb2NrcyB0aGF0IGFyZSBubyBsb25nZXIgaW4gdXNlXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJWTSByZWNlaXZlZCBhbiBpbnZhbGlkIHN5c2NhbGxcIik7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0X2Rpc3BsYXlfcG9ydChvdXRwdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIHBvcnQ6IE1lc3NhZ2VQb3J0KSB7XG4gIHBvcnQub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICBvdXRwdXQudmFsdWUgKz0gbWVzc2FnZS5kYXRhLmpvaW4oXCJcIikgKyBcIlxcblwiO1xuICB9XG59XG5cbi8vIGhlYXBTaXplIGlzIHRoZSBudW1iZXIgb2YgYnl0ZXMgZm9yIGhlYXBcbmZ1bmN0aW9uIElOSVRJQUxJWkUoXG4gIGhlYXBTaXplOiBudW1iZXIsXG4gIHA6IFByb2dyYW0sXG4gIG51bU9mV29ya2VyczogbnVtYmVyLFxuICBvdXRwdXQ6IEhUTUxJbnB1dEVsZW1lbnQsXG4pIHtcbiAgLy8gaW5pdGlhbGl6ZSBoZWFwXG4gIEZSRUUgPSBuZXcgVWludDMyQXJyYXkobmV3IFNoYXJlZEFycmF5QnVmZmVyKDQpKTtcbiAgSEVBUCA9IG5ldyBEYXRhVmlldyhuZXcgU2hhcmVkQXJyYXlCdWZmZXIoaGVhcFNpemUpKTtcblxuICAvLyBpbml0aWFsaXplIHdvcmtlcnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZldvcmtlcnM7IGkrKykge1xuICAgIGNvbnN0IHdvcmtlciA9IG5ldyBXb3JrZXIobmV3IFVSTChcIi4vd29ya2VyLnRzXCIsIGltcG9ydC5tZXRhLnVybCkpO1xuICAgIGNvbnN0IHdvcmtlcklkID0gaTtcblxuICAgIGNvbnN0IHRocmVhZENoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBjb25zdCBzeXNjYWxsQ2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIGNvbnN0IGRpc3BsYXlDaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG5cbiAgICBpbml0X3RocmVhZF9wb3J0KHdvcmtlcklkLCB0aHJlYWRDaGFubmVsLnBvcnQxKTtcbiAgICBpbml0X3N5c2NhbGxfcG9ydCh3b3JrZXJJZCwgc3lzY2FsbENoYW5uZWwucG9ydDEpO1xuICAgIGluaXRfZGlzcGxheV9wb3J0KG91dHB1dCwgZGlzcGxheUNoYW5uZWwucG9ydDEpO1xuXG4gICAgLy8gV29ya2VyIGdldHMgcG9ydDIsIHZtIGdldHMgcG9ydDFcbiAgICB3b3JrZXIucG9zdE1lc3NhZ2UoXG4gICAgICBbSEVBUCwgRlJFRSwgcF0sXG4gICAgICBbdGhyZWFkQ2hhbm5lbC5wb3J0Miwgc3lzY2FsbENoYW5uZWwucG9ydDIsIGRpc3BsYXlDaGFubmVsLnBvcnQyXSxcbiAgICApO1xuXG4gICAgdGhyZWFkQ2hhbm5lbHMuc2V0KHdvcmtlcklkLCB0aHJlYWRDaGFubmVsKTtcbiAgICBzeXNjYWxsQ2hhbm5lbHMuc2V0KHdvcmtlcklkLCBzeXNjYWxsQ2hhbm5lbCk7XG5cbiAgICB3b3JrZXJzLnNldCh3b3JrZXJJZCwgd29ya2VyKTtcbiAgICAvLyBJbml0aWFsbHksIGFsbCB3b3JrZXJzIGFyZSBpZGxlXG4gICAgaWRsZVdvcmtlcnMucHVzaCh3b3JrZXJJZCk7XG4gIH1cblxuICAvLyBpbml0aWFsaXplIHNjaGVkdWxlciB3aXRoIGNvbmZpZ3VyZWQgd29ya2Vyc1xuICBzY2hlZHVsZXIgPSBuZXcgUm91bmRSb2JpblNjaGVkdWxlcigpO1xufVxuXG5mdW5jdGlvbiBTSFVUX0RPV05fTUFDSElORSgpIHtcbiAgLy8gT25jZSBtYWluIHRocmVhZCBjb21wbGV0ZXMsIHNodXQgZG93biBtYWNoaW5lXG4gIC8vIEFsbCBvdGhlciB0aHJlYWRzIHNwYXduZWQgd2lsbCBhbHNvIHN0b3AgZXhlY3V0aW5nXG4gIGZvciAoY29uc3QgdyBvZiB3b3JrZXJzLnZhbHVlcygpKSB7XG4gICAgdy50ZXJtaW5hdGUoKTtcbiAgfVxuICAvLyBDbGVhbiB1cCBWTSBzdGF0ZVxuICBpZGxlV29ya2VycyA9IFtdO1xuICB0aHJlYWRDaGFubmVscy5jbGVhcigpO1xuICBzeXNjYWxsQ2hhbm5lbHMuY2xlYXIoKTtcbiAgd29ya2Vycy5jbGVhcigpO1xuICB0aHJlYWRzLmNsZWFyKCk7XG4gIGxvY2tzLmNsZWFyKCk7XG4gIGpvaW5UaHJlYWRzLmNsZWFyKCk7XG4gIG1heExvY2tJZCA9IDA7XG59XG5cbmZ1bmN0aW9uIFJVTl9NQUNISU5FKCkge1xuICBjb25zdCB3b3JrZXJJZCA9IGlkbGVXb3JrZXJzLnNoaWZ0KCk7XG4gIGlmICh3b3JrZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgcmVzOiBbVGhyZWFkSWQsIG51bWJlcl0gfCBudWxsID0gc2NoZWR1bGVyLnJ1blRocmVhZCgpO1xuICAgIGlmIChyZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBvcnQgPSB0aHJlYWRDaGFubmVscy5nZXQod29ya2VySWQpIS5wb3J0MTtcbiAgICAgIHBvcnQucG9zdE1lc3NhZ2UoW3RocmVhZHMuZ2V0KHJlc1swXSksIHJlc1sxXV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgXCJTY2hlZHVsZXIgcmV0dXJucyBudWxsIGZvciBydW5UaHJlYWQgYWZ0ZXIgbWFpbiB0aHJlYWQgd2FzIGFkZGVkXCIsXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBFcnJvcihcIk5vIHdvcmtlcnMgdG8gcnVuIG1hY2hpbmVcIik7XG4gIH1cbn1cblxuLy8gVXNlIHRvIGNoZWNrIGlmIG1haW4gdGhyZWFkIGhhcyB0ZXJtaW5hdGVkLCB0aGVuIHNodXQgZG93biBtYWNoaW5lIGFuZCByZXR1cm4gcmVzdWx0XG5sZXQgbWFpblRocmVhZElkOiBUaHJlYWRJZDtcblxuZXhwb3J0IGNvbnN0IEZVTkNfRU5WX1NJWkVfT0ZGU0VUID0gMTtcbmV4cG9ydCBjb25zdCBGVU5DX05VTV9BUkdTX09GRlNFVCA9IDI7XG5leHBvcnQgY29uc3QgRlVOQ19DT0RFX09GRlNFVCA9IDM7XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5XaXRoUHJvZ3JhbShcbiAgcDogUHJvZ3JhbSxcbiAgaGVhcFNpemU6IG51bWJlcixcbiAgbnVtT2ZXb3JrZXJzOiBudW1iZXIsXG4gIG91dHB1dDogSFRNTElucHV0RWxlbWVudCxcbikge1xuICBJTklUSUFMSVpFKGhlYXBTaXplLCBwLCBudW1PZldvcmtlcnMsIG91dHB1dCk7XG5cbiAgLy8gY3JlYXRlIG1haW4gdGhyZWFkIGZvciB0aGlzIHByb2dyYW1cbiAgY29uc3QgUEM6IG51bWJlciA9IDA7XG4gIGNvbnN0IEVOVjogbnVtYmVyID0gLTE7IC8vIC0xIEVOViBpbmRpY2F0ZXMgdGhhdCB0aHJlYWQgaGFzIG5vdCBiZWVuIGV4ZWN1dGVkIGJlZm9yZVxuICBtYWluVGhyZWFkSWQgPSBzY2hlZHVsZXIuY3JlYXRlVGhyZWFkKCk7XG4gIGNvbnN0IHRocmVhZDogVGhyZWFkID0ge1xuICAgIElEOiBtYWluVGhyZWFkSWQsXG4gICAgRk46IHBbMF0sXG4gICAgUEM6IFBDLFxuICAgIEVOVjogRU5WLFxuICAgIE9TOiBbXSxcbiAgICBSVFM6IFtdLFxuICAgIFJTOiB7XG4gICAgICBBOiAwLFxuICAgICAgQjogMCxcbiAgICAgIEM6IDAsXG4gICAgICBEOiAwLFxuICAgICAgRTogMCxcbiAgICAgIEY6IDAsXG4gICAgICBHOiAwLFxuICAgICAgSDogMCxcbiAgICAgIEk6IDAsXG4gICAgICBKOiAwLFxuICAgICAgSzogMCxcbiAgICB9LFxuICAgIHN0YXR1czogVGhyZWFkU3RhdHVzLlJFQURZLFxuICB9O1xuICB0aHJlYWRzLnNldChtYWluVGhyZWFkSWQsIHRocmVhZCk7XG5cbiAgUlVOX01BQ0hJTkUoKTtcbn1cbiIsImltcG9ydCB7IFRocmVhZFN0YXR1cywgVGhyZWFkLCBUaHJlYWRJZCB9IGZyb20gXCIuL3RocmVhZHNcIjtcbmltcG9ydCB7XG4gIEluc3RydWN0aW9uQXJyIGFzIEluc3RydWN0aW9uLFxuICBQcm9ncmFtQXJyYXkgYXMgUHJvZ3JhbSxcbiAgUlZNRnVuY3Rpb25BcnIgYXMgUlZNRnVuY3Rpb24sXG59IGZyb20gXCIuLi9jb21tb24vdHlwZXNcIjtcbmltcG9ydCB7IE9wQ29kZXMgfSBmcm9tIFwiLi4vY29tbW9uL29wY29kZXNcIjtcbmltcG9ydCB7IEZVTkNfQ09ERV9PRkZTRVQsIExvY2tJZCwgU3lzY2FsbCB9IGZyb20gXCIuL3ZtXCI7XG5cbmV4cG9ydCB0eXBlIFdvcmtlcklkID0gbnVtYmVyO1xuXG5mdW5jdGlvbiBQRUVLKGFycmF5OiBhbnlbXSwgaWR4OiBudW1iZXIpOiBhbnkge1xuICByZXR1cm4gYXJyYXkuc2xpY2UoLTEgLSBpZHgpWzBdO1xufVxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBIRUFQXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBMZXQgc2hhcmVkYXJyYXlidWZmZXIgdG8gYmUgbG9jYWwgdG8gd29ya2VyIGZvciBub3dcbi8vIFNob3VsZCBiZSBjcmVhdGVkIGluIHZtIGFuZCBzZW50IHRvIHdvcmtlclxubGV0IEhFQVA6IERhdGFWaWV3O1xuXG4vLyBGUkVFIGlzIGEgVWludDMyQXJyYXkgd2l0aCBhIFNoYXJlZEFycmF5QnVmZmVyIHVuZGVybmVhdGhcbi8vIFRoaXMgYWxsb3dzIEZSRUUgdG8gYmUgYXRvbWljYWxseSBpbmNyZW1lbnRlZCBhY3Jvc3MgYWxsIHdvcmtlcnNcbmxldCBGUkVFOiBVaW50MzJBcnJheTtcbmxldCBSRVM6IG51bWJlcjtcblxuY29uc3QgU0laRV9PRkZTRVQgPSA1O1xuY29uc3QgV09SRF9TSVpFID0gODsgLy8gbnVtYmVyIG9mIGJ5dGVzIGluIG9uZSB3b3JkXG5cbi8vIGdldCBhbmQgc2V0IGEgV09SRCBpbiBoZWFwIGF0IGdpdmVuIGFkZHJlc3NcbmZ1bmN0aW9uIEhFQVBfR0VUKGFkZHJlc3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBIRUFQLmdldEZsb2F0NjQoYWRkcmVzcyAqIFdPUkRfU0laRSk7XG59XG5cbmZ1bmN0aW9uIEhFQVBfU0VUKGFkZHJlc3M6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuICBIRUFQLnNldEZsb2F0NjQoYWRkcmVzcyAqIFdPUkRfU0laRSwgdmFsdWUpO1xufVxuXG4vLyBjaGlsZCBpbmRleCBzdGFydHMgYXQgMFxuZnVuY3Rpb24gSEVBUF9HRVRfQ0hJTEQoYWRkcmVzczogbnVtYmVyLCBjaGlsZF9pbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIEhFQVBfR0VUKGFkZHJlc3MgKyAxICsgY2hpbGRfaW5kZXgpO1xufVxuXG5mdW5jdGlvbiBIRUFQX1NFVF9DSElMRChcbiAgYWRkcmVzczogbnVtYmVyLFxuICBjaGlsZF9pbmRleDogbnVtYmVyLFxuICB2YWx1ZTogbnVtYmVyLFxuKTogdm9pZCB7XG4gIHJldHVybiBIRUFQX1NFVChhZGRyZXNzICsgMSArIGNoaWxkX2luZGV4LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIEhFQVBfR0VUX1RBRyhhZGRyZXNzOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gSEVBUC5nZXRVaW50OChhZGRyZXNzICogV09SRF9TSVpFKTtcbn1cblxuZnVuY3Rpb24gSEVBUF9HRVRfU0laRShhZGRyZXNzOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gSEVBUC5nZXRVaW50MTYoYWRkcmVzcyAqIFdPUkRfU0laRSArIFNJWkVfT0ZGU0VUKTtcbn1cblxuZnVuY3Rpb24gSEVBUF9HRVRfTlVNX0NISUxEKGFkZHJlc3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBIRUFQX0dFVF9UQUcoYWRkcmVzcykgPT09IE5VTUJFUl9UQUcgPyAwIDogSEVBUF9HRVRfU0laRShhZGRyZXNzKSAtIDE7XG59XG5cbmZ1bmN0aW9uIEhFQVBfU0VUX0JZVEVfQVRfT0ZGU0VUKFxuICBhZGRyZXNzOiBudW1iZXIsXG4gIG9mZnNldDogbnVtYmVyLFxuICB2YWx1ZTogbnVtYmVyLFxuKTogdm9pZCB7XG4gIEhFQVAuc2V0VWludDgoYWRkcmVzcyAqIFdPUkRfU0laRSArIG9mZnNldCwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBIRUFQX0dFVF9CWVRFX0FUX09GRlNFVChhZGRyZXNzOiBudW1iZXIsIG9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIEhFQVAuZ2V0VWludDgoYWRkcmVzcyAqIFdPUkRfU0laRSArIG9mZnNldCk7XG59XG5cbmZ1bmN0aW9uIEhFQVBfU0VUXzJfQllURVNfQVRfT0ZGU0VUKFxuICBhZGRyZXNzOiBudW1iZXIsXG4gIG9mZnNldDogbnVtYmVyLFxuICB2YWx1ZTogbnVtYmVyLFxuKTogdm9pZCB7XG4gIEhFQVAuc2V0VWludDE2KGFkZHJlc3MgKiBXT1JEX1NJWkUgKyBvZmZzZXQsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gSEVBUF9HRVRfMl9CWVRFU19BVF9PRkZTRVQoYWRkcmVzczogbnVtYmVyLCBvZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBIRUFQLmdldFVpbnQxNihhZGRyZXNzICogV09SRF9TSVpFICsgb2Zmc2V0KTtcbn1cblxuLy8gTkVXIGV4cGVjdHMgdGFnIGluIEEgYW5kIHNpemUgKCMgb2Ygd29yZHMpIGluIEJcbi8vIEFsbG9jYXRlcyBCIG51bWJlciBvZiB3b3JkcyBvbiB0aGUgaGVhcFxuLy8gYW5kIG1hcmtzIHRoZSBmaXJzdCB3b3JkIHdpdGggYSAxLWJ5dGUgdGFnLlxuLy8gdGhlIGxhc3QgdHdvIGJ5dGVzIG9mIHRoZSBmaXJzdCB3b3JkIGluZGljYXRlIHRoZVxuLy8gbnVtYmVyIG9mIGNoaWxkcmVuIChhZGRyZXNzZXMpIHRoYXQgZm9sbG93IHRoZSB0YWcgd29yZFxuZnVuY3Rpb24gTkVXKCkge1xuICBLID0gQXRvbWljcy5hZGQoRlJFRSwgMCwgQik7XG4gIC8vIENoZWNrIGlmIG91dCBvZiBtZW1vcnlcbiAgaWYgKChLICsgQikgKiBXT1JEX1NJWkUgPiBIRUFQLmJ5dGVMZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJPVVQgT0YgTUVNT1JZXCIpO1xuICB9XG4gIEhFQVAuc2V0VWludDgoSyAqIFdPUkRfU0laRSwgQSk7XG4gIEhFQVAuc2V0VWludDE2KEsgKiBXT1JEX1NJWkUgKyBTSVpFX09GRlNFVCwgQik7XG4gIFJFUyA9IEs7XG59XG5cbi8vIGJvb2wgbm9kZXMgbGF5b3V0ICgxIHdvcmQpXG4vL1xuLy8gMDogWzEgYnl0ZSB0YWcsIDQgYnl0ZXMgdW51c2VkLCAyIGJ5dGVzICNjaGlsZHJlbiwgMSBieXRlIHZhbHVlXVxuXG5jb25zdCBCT09MX1RBRyA9IDE7XG5jb25zdCBCT09MX1NJWkUgPSAxO1xuXG4vLyBjaGFuZ2VzIEEsIEIsIEMsIGV4cGVjdHMgYm9vbGVhbiB2YWx1ZSBpbiBBXG4vLyAwIGZvciBmYWxzZSwgMSBmb3IgdHJ1ZVxuZnVuY3Rpb24gTkVXX0JPT0woKSB7XG4gIEMgPSBOdW1iZXIoQSk7IC8vIENvbnZlcnQgYm9vbGVhbiB2YWx1ZSB0byBudW1iZXJcbiAgQSA9IEJPT0xfVEFHO1xuICBCID0gQk9PTF9TSVpFO1xuICBORVcoKTtcbiAgSEVBUF9TRVRfQllURV9BVF9PRkZTRVQoUkVTLCA3LCBDKTtcbn1cblxuZnVuY3Rpb24gSVNfQk9PTChhZGRyZXNzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIEhFQVBfR0VUX1RBRyhhZGRyZXNzKSA9PT0gQk9PTF9UQUc7XG59XG5cbmZ1bmN0aW9uIElTX1RSVUUoYWRkcmVzczogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBJU19CT09MKGFkZHJlc3MpICYmIEhFQVBfR0VUX0JZVEVfQVRfT0ZGU0VUKGFkZHJlc3MsIDcpID09PSAxO1xufVxuXG5mdW5jdGlvbiBJU19GQUxTRShhZGRyZXNzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIElTX0JPT0woYWRkcmVzcykgJiYgSEVBUF9HRVRfQllURV9BVF9PRkZTRVQoYWRkcmVzcywgNykgPT09IDA7XG59XG5cbi8vIG51bWJlciBub2RlcyBsYXlvdXQgKDIgd29yZHMpXG4vL1xuLy8gMDogWzEgYnl0ZSB0YWcsIDQgYnl0ZXMgdW51c2VkLCAyIGJ5dGVzICNjaGlsZHJlbiwgMSBieXRlIHVudXNlZF1cbi8vIDE6IHZhbHVlXG4vLyBub3RlOiAjY2hpbGRyZW4gPSAwXG5cbmNvbnN0IE5VTUJFUl9UQUcgPSAyO1xuY29uc3QgTlVNQkVSX1NJWkUgPSAyO1xuY29uc3QgTlVNQkVSX1ZBTFVFX1NMT1QgPSAxO1xuXG4vLyBjaGFuZ2VzIEEsIEIsIEMsIGV4cGVjdHMgbnVtYmVyIGluIEFcbmZ1bmN0aW9uIE5FV19OVU1CRVIoKSB7XG4gIEMgPSBBO1xuICBBID0gTlVNQkVSX1RBRztcbiAgQiA9IE5VTUJFUl9TSVpFO1xuICBORVcoKTsgLy8gUkVTIGlzIG5vdyBpbmRleCBvZiBmcmVlIG5vZGUgaW4gSEVBUFxuICBIRUFQX1NFVChSRVMgKyBOVU1CRVJfVkFMVUVfU0xPVCwgQyk7XG59XG5cbmZ1bmN0aW9uIElTX05VTUJFUihhZGRyZXNzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIEhFQVBfR0VUX1RBRyhhZGRyZXNzKSA9PT0gTlVNQkVSX1RBRztcbn1cblxuLy8gc3RyaW5nIG5vZGVzIGxheW91dCAoMiArIG4gd29yZHMpXG4vLyBuIGlzIHRoZSBudW1iZXIgb2Ygd29yZHMgbmVlZGVkIHRvIHN0b3JlIEEgaW4gZW5jb2RlZCBmb3JtXG4vL1xuLy8gMDogWzEgYnl0ZSB0YWcsIDQgYnl0ZXMgdW51c2VkLCAyIGJ5dGVzICNjaGlsZHJlbiwgMSBieXRlIHVudXNlZF1cbi8vIDE6IGxlbmd0aCBvZiBzdHJpbmcgKG51bWJlciBvZiBieXRlcylcbi8vIGZvbGxvd2VkIGJ5IGNoYXJhY3RlcnMgaW4gc3RyaW5nIGVuY29kZWQgaW50byBVaW50OEFycmF5XG5cbmNvbnN0IFNUUklOR19UQUcgPSAzO1xuY29uc3QgRU5DT0RFUiA9IG5ldyBUZXh0RW5jb2RlcigpO1xuY29uc3QgREVDT0RFUiA9IG5ldyBUZXh0RGVjb2RlcigpO1xuXG4vLyBjaGFuZ2VzIEEsIEIsIEMsIGV4cGVjdHMgc3RyaW5nIGxpdGVyYWwgaW4gQVxuZnVuY3Rpb24gTkVXX1NUUklORygpIHtcbiAgY29uc3QgdmlldyA9IEVOQ09ERVIuZW5jb2RlKEEpO1xuICBDID0gRU5DT0RFUi5lbmNvZGUoQSk7XG4gIEEgPSBTVFJJTkdfVEFHO1xuICBCID0gTWF0aC5jZWlsKEMubGVuZ3RoIC8gV09SRF9TSVpFKSArIDI7XG4gIE5FVygpO1xuICAvLyBmaXJzdCBjaGlsZCBpcyBudW1iZXIgb2YgYnl0ZXNcbiAgSEVBUF9TRVRfQ0hJTEQoUkVTLCAwLCBDLmxlbmd0aCk7XG4gIC8vIHNlY29uZCBjaGlsZCBvbndhcmRzIGFyZSBjaGFyYWN0ZXJzIG9mIHN0cmluZyBlbmNvZGVkIGluIFVpbnQ4XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgQy5sZW5ndGg7IGkrKykge1xuICAgIEhFQVBfU0VUX0JZVEVfQVRfT0ZGU0VUKFJFUyArIDIsIGksIENbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIElTX1NUUklORyhhZGRyZXNzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIEhFQVBfR0VUX1RBRyhhZGRyZXNzKSA9PT0gU1RSSU5HX1RBRztcbn1cblxuZnVuY3Rpb24gSEVBUF9HRVRfU1RSSU5HKGFkZHJlc3M6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmICghSVNfU1RSSU5HKGFkZHJlc3MpKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJDYWxsZWQgSEVBUF9HRVRfU1RSSU5HIG9uIGFuIG9iamVjdCB0aGF0IGlzIG5vdCBhIHN0cmluZ1wiKTtcbiAgfVxuICAvLyBudW1iZXIgb2YgYnl0ZXNcbiAgQiA9IEhFQVBfR0VUX0NISUxEKGFkZHJlc3MsIDApO1xuICBjb25zdCB2aWV3OiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkobmV3IEFycmF5QnVmZmVyKEIpKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBCOyBpKyspIHtcbiAgICB2aWV3W2ldID0gSEVBUF9HRVRfQllURV9BVF9PRkZTRVQoYWRkcmVzcyArIDIsIGkpO1xuICB9XG4gIHJldHVybiBERUNPREVSLmRlY29kZSh2aWV3KTtcbn1cblxuLy8gYXJyYXkgbm9kZXMgbGF5b3V0ICgyICsgbiB3b3Jkcylcbi8vIG4gaXMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhcnJheVxuLy9cbi8vIDA6IFsxIGJ5dGUgdGFnLCA0IGJ5dGVzIHVudXNlZCwgMiBieXRlcyAjY2hpbGRyZW4sIDEgYnl0ZSB1bnVzZWRdXG4vLyAxOiBudW1iZXIgb2YgZWxlbWVudHMgaW4gYXJyYXlcbi8vIGZvbGxvd2VkIGJ5IHRoZSBhZGRyZXNzZXMgb2YgZWxlbWVudHMgaW4gYXJyYXlcblxuY29uc3QgQVJSQVlfVEFHID0gNDtcblxuLy8gY2hhbmdlcyBBLCBCLCBDLCBleHBlY3RzIEEgdG8gYmUgYW4gYXJyYXkgb2YgYWRkcmVzc2VzXG4vLyBvZiBlbGVtZW50cyBpbiB0aGUgYXJyYXkgdG8gYmUgY3JlYXRlZFxuZnVuY3Rpb24gTkVXX0FSUkFZKCkge1xuICBDID0gQTtcbiAgQSA9IEFSUkFZX1RBRztcbiAgQiA9IEMubGVuZ3RoICsgMjtcbiAgTkVXKCk7XG4gIC8vIGZpcnN0IGNoaWxkIGlzIG51bWJlciBvZiBlbGVtZW50cyBpbiBhcnJheVxuICBIRUFQX1NFVF9DSElMRChSRVMsIDAsIEMubGVuZ3RoKTtcbiAgLy8gc2Vjb25kIGNoaWxkIG9ud2FyZHMgYXJlIGFkZHJlc3NlcyBvZiBlbGVtZW50c1xuICBmb3IgKGxldCBpID0gMDsgaSA8IEMubGVuZ3RoOyBpKyspIHtcbiAgICBIRUFQX1NFVF9DSElMRChSRVMsIGkgKyAxLCBDW2ldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBJU19BUlJBWShhZGRyZXNzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIEhFQVBfR0VUX1RBRyhhZGRyZXNzKSA9PT0gQVJSQVlfVEFHO1xufVxuXG4vLyB1bmRlZmluZWQgbm9kZXMgbGF5b3V0ICgxIHdvcmQpXG4vL1xuLy8gMDogWzEgYnl0ZSB0YWcsIDQgYnl0ZXMgdW51c2VkLCAyIGJ5dGVzICNjaGlsZHJlbiwgMSBieXRlIHVudXNlZF1cblxuY29uc3QgVU5ERUZJTkVEX1RBRyA9IDU7XG5jb25zdCBVTkRFRklORURfU0laRSA9IDE7XG5cbi8vIGNoYW5nZXMgQSwgQlxuZnVuY3Rpb24gTkVXX1VOREVGSU5FRCgpIHtcbiAgQSA9IFVOREVGSU5FRF9UQUc7XG4gIEIgPSBVTkRFRklORURfU0laRTtcbiAgTkVXKCk7XG59XG5cbmZ1bmN0aW9uIElTX1VOREVGSU5FRChhZGRyZXNzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIEhFQVBfR0VUX1RBRyhhZGRyZXNzKSA9PT0gVU5ERUZJTkVEX1RBRztcbn1cblxuLy8gbnVsbCBub2RlcyBsYXlvdXQgKDEgd29yZClcbi8vXG4vLyAwOiBbMSBieXRlIHRhZywgNCBieXRlcyB1bnVzZWQsIDIgYnl0ZXMgI2NoaWxkcmVuLCAxIGJ5dGUgdW51c2VkXVxuXG5jb25zdCBOVUxMX1RBRyA9IDY7XG5jb25zdCBOVUxMX1NJWkUgPSAxO1xuXG4vLyBjaGFuZ2VzIEEsIEJcbmZ1bmN0aW9uIE5FV19OVUxMKCkge1xuICBBID0gTlVMTF9UQUc7XG4gIEIgPSBOVUxMX1NJWkU7XG4gIE5FVygpO1xufVxuXG5mdW5jdGlvbiBJU19OVUxMKGFkZHJlc3M6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gSEVBUF9HRVRfVEFHKGFkZHJlc3MpID09PSBOVUxMX1RBRztcbn1cblxuLy8gY2xvc3VyZSBub2RlcyBsYXlvdXQgKDIgd29yZHMpXG4vLyAwOiBbMSBieXRlIHRhZywgMSBieXRlIHVudXNlZCwgMiBieXRlcyBpbmRleCBvZiBmdW5jdGlvbiBpbiBGVU5DLCAxIGJ5dGVzIHVudXNlZCxcbi8vIDIgYnl0ZXMgI2NoaWxkcmVuLCAxIGJ5dGVzIHVudXNlZF1cbi8vIDE6IGFkZHJlc3Mgb2YgZW52XG5cbmNvbnN0IENMT1NVUkVfVEFHID0gNztcbmNvbnN0IENMT1NVUkVfU0laRSA9IDI7XG5cbi8vIGNoYW5nZXMgQSwgQiwgQywgZXhwZWN0cyBBID0gW2luZGV4IG9mIGZ1bmN0aW9uIGluIEZVTkMsIGVudl1cbmZ1bmN0aW9uIE5FV19DTE9TVVJFKCkge1xuICBDID0gQTtcbiAgQSA9IENMT1NVUkVfVEFHO1xuICBCID0gQ0xPU1VSRV9TSVpFO1xuICBORVcoKTtcbiAgSEVBUF9TRVRfMl9CWVRFU19BVF9PRkZTRVQoUkVTLCAyLCBDWzBdKTtcbiAgSEVBUF9TRVRfQ0hJTEQoUkVTLCAwLCBDWzFdKTtcbn1cblxuZnVuY3Rpb24gSVNfQ0xPU1VSRShhZGRyZXNzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIEhFQVBfR0VUX1RBRyhhZGRyZXNzKSA9PT0gQ0xPU1VSRV9UQUc7XG59XG5cbmZ1bmN0aW9uIEhFQVBfR0VUX0NMT1NVUkVfUChhZGRyZXNzOiBudW1iZXIpOiBJbnN0cnVjdGlvbltdIHtcbiAgcmV0dXJuIEZVTkNbSEVBUF9HRVRfMl9CWVRFU19BVF9PRkZTRVQoYWRkcmVzcywgMildW0ZVTkNfQ09ERV9PRkZTRVRdO1xufVxuXG5mdW5jdGlvbiBIRUFQX0dFVF9DTE9TVVJFX0ZOKGFkZHJlc3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBIRUFQX0dFVF8yX0JZVEVTX0FUX09GRlNFVChhZGRyZXNzLCAyKTtcbn1cblxuZnVuY3Rpb24gSEVBUF9HRVRfQ0xPU1VSRV9FTlYoYWRkcmVzczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIEhFQVBfR0VUX0NISUxEKGFkZHJlc3MsIDApO1xufVxuXG4vLyBibG9jayBmcmFtZSBub2RlcyBsYXlvdXQgKDIgd29yZHMpXG4vLyAwOiBbMSBieXRlIHRhZywgNCBieXRlcyB1bnVzZWQsIDIgYnl0ZXMgI2NoaWxkcmVuLCAxIGJ5dGUgdW51c2VkXVxuLy8gMTogYWRkcmVzcyBvZiBlbnZcblxuY29uc3QgQkxPQ0tfRlJBTUVfVEFHID0gODtcbmNvbnN0IEJMT0NLX0ZSQU1FX1NJWkUgPSAyO1xuXG4vLyBjaGFuZ2VzIEEsIEIsIEMsIGV4cGVjdHMgYWRkcmVzcyBvZiBlbnYgaW4gQVxuZnVuY3Rpb24gTkVXX0JMT0NLX0ZSQU1FKCkge1xuICBDID0gQTtcbiAgQSA9IEJMT0NLX0ZSQU1FX1RBRztcbiAgQiA9IEJMT0NLX0ZSQU1FX1NJWkU7XG4gIE5FVygpO1xuICBIRUFQX1NFVF9DSElMRChSRVMsIDAsIEMpO1xufVxuXG5mdW5jdGlvbiBJU19CTE9DS19GUkFNRShhZGRyZXNzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIEhFQVBfR0VUX1RBRyhhZGRyZXNzKSA9PT0gQkxPQ0tfRlJBTUVfVEFHO1xufVxuXG5mdW5jdGlvbiBIRUFQX0dFVF9CTE9DS19GUkFNRV9FTlYoYWRkcmVzczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIEhFQVBfR0VUX0NISUxEKGFkZHJlc3MsIDApO1xufVxuXG4vLyBjYWxsIGZyYW1lIG5vZGVzIGxheW91dCAoMiB3b3Jkcylcbi8vIDA6IFsxIGJ5dGUgdGFnLCAyIGJ5dGVzIHBjLCAyIGJ5dGVzIGluZGV4IG9mIGZ1bmN0aW9uIGluIEZVTkNcbi8vIDIgYnl0ZXMgI2NoaWxkcmVuLCAxIGJ5dGUgdW51c2VkXVxuLy8gMTogYWRkcmVzcyBvZiBlbnZcblxuY29uc3QgQ0FMTF9GUkFNRV9UQUcgPSA5O1xuY29uc3QgQ0FMTF9GUkFNRV9TSVpFID0gMjtcblxuLy8gY2hhbmdlcyBBLCBCLCBDLCBleHBlY3RzIEEgPSBbZW52LCBQQywgaW5kZXggb2YgZnVuY3Rpb24gaW4gRlVOQ11cbmZ1bmN0aW9uIE5FV19DQUxMX0ZSQU1FKCkge1xuICBDID0gQTtcbiAgQSA9IENBTExfRlJBTUVfVEFHO1xuICBCID0gQ0FMTF9GUkFNRV9TSVpFO1xuICBORVcoKTtcbiAgSEVBUF9TRVRfQ0hJTEQoUkVTLCAwLCBDWzBdKTtcbiAgSEVBUF9TRVRfMl9CWVRFU19BVF9PRkZTRVQoUkVTLCAxLCBDWzFdKTtcbiAgSEVBUF9TRVRfMl9CWVRFU19BVF9PRkZTRVQoUkVTLCAzLCBDWzJdKTtcbn1cblxuZnVuY3Rpb24gSVNfQ0FMTF9GUkFNRShhZGRyZXNzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIEhFQVBfR0VUX1RBRyhhZGRyZXNzKSA9PT0gQ0FMTF9GUkFNRV9UQUc7XG59XG5cbmZ1bmN0aW9uIEhFQVBfR0VUX0NBTExfRlJBTUVfRU5WKGFkZHJlc3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBIRUFQX0dFVF9DSElMRChhZGRyZXNzLCAwKTtcbn1cblxuZnVuY3Rpb24gSEVBUF9HRVRfQ0FMTF9GUkFNRV9QQyhhZGRyZXNzOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gSEVBUF9HRVRfMl9CWVRFU19BVF9PRkZTRVQoYWRkcmVzcywgMSk7XG59XG5cbmZ1bmN0aW9uIEhFQVBfR0VUX0NBTExfRlJBTUVfUChhZGRyZXNzOiBudW1iZXIpOiBJbnN0cnVjdGlvbltdIHtcbiAgcmV0dXJuIEZVTkNbSEVBUF9HRVRfMl9CWVRFU19BVF9PRkZTRVQoYWRkcmVzcywgMyldW0ZVTkNfQ09ERV9PRkZTRVRdO1xufVxuXG5mdW5jdGlvbiBIRUFQX0dFVF9DQUxMX0ZSQU1FX0ZOKGFkZHJlc3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBIRUFQX0dFVF8yX0JZVEVTX0FUX09GRlNFVChhZGRyZXNzLCAzKTtcbn1cblxuLy8gZW52aXJvbm1lbnQgZnJhbWUgbm9kZXMgbGF5b3V0ICgxICsgbiB3b3Jkcylcbi8vIG4gaXMgdGhlIG51bWJlciBvZiB2YWx1ZXMgaW4gZW52aXJvbm1lbnQgZnJhbWVcbi8vIDA6IFsxIGJ5dGUgdGFnLCA0IGJ5dGVzIHVudXNlZCwgMiBieXRlcyAjY2hpbGRyZW4sIDEgYnl0ZSB1bnVzZWRdXG4vLyBmb2xsb3dlZCBieSB0aGUgYWRkcmVzc2VzIG9mIHZhbHVlcyBpbiBlbnZpcm9ubWVudCBmcmFtZVxuXG5jb25zdCBGUkFNRV9UQUcgPSAxMDtcblxuLy8gY2hhbmdlcyBBLCBCLCBDLCBleHBlY3RzIG51bWJlciBvZiB2YWx1ZXMgaW4gQVxuZnVuY3Rpb24gTkVXX0ZSQU1FKCkge1xuICBDID0gQTtcbiAgQSA9IEZSQU1FX1RBRztcbiAgQiA9IDEgKyBDO1xuICBORVcoKTtcbn1cblxuZnVuY3Rpb24gSVNfRlJBTUUoYWRkcmVzczogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBIRUFQX0dFVF9UQUcoYWRkcmVzcykgPT09IEZSQU1FX1RBRztcbn1cblxuLy8gZW52aXJvbm1lbnQgbm9kZXMgbGF5b3V0ICgxICsgbiB3b3Jkcylcbi8vIG4gaXMgdGhlIG51bWJlciBvZiBmcmFtZXNcbi8vIDA6IFsxIGJ5dGUgdGFnLCA0IGJ5dGVzIHVudXNlZCwgMiBieXRlcyAjY2hpbGRyZW4sIDEgYnl0ZSB1bnVzZWRdXG4vLyBmb2xsb3dlZCBieSB0aGUgYWRkcmVzc2VzIG9mIGl0cyBmcmFtZXNcblxuY29uc3QgRU5WSVJPTk1FTlRfVEFHID0gMTE7XG5cbi8vIGNoYW5nZXMgQSwgQiwgQywgZXhwZWN0cyBudW1iZXIgb2YgZnJhbWVzIGluIEFcbmZ1bmN0aW9uIE5FV19FTlZJUk9OTUVOVCgpIHtcbiAgQyA9IEE7XG4gIEEgPSBFTlZJUk9OTUVOVF9UQUc7XG4gIEIgPSAxICsgQztcbiAgTkVXKCk7XG59XG5cbmZ1bmN0aW9uIEhFQVBfR0VUX0VOVl9WQUxVRShcbiAgYWRkcmVzczogbnVtYmVyLFxuICBwb3NpdGlvbjogW251bWJlciwgbnVtYmVyXSxcbik6IG51bWJlciB7XG4gIGNvbnN0IFtmcmFtZV9pbmRleCwgdmFsdWVfaW5kZXhdID0gcG9zaXRpb247XG4gIGNvbnN0IGZyYW1lX2FkZHJlc3MgPSBIRUFQX0dFVF9DSElMRChhZGRyZXNzLCBmcmFtZV9pbmRleCk7XG4gIHJldHVybiBIRUFQX0dFVF9DSElMRChmcmFtZV9hZGRyZXNzLCB2YWx1ZV9pbmRleCk7XG59XG5cbmZ1bmN0aW9uIEhFQVBfU0VUX0VOVl9WQUxVRShcbiAgYWRkcmVzczogbnVtYmVyLFxuICBwb3NpdGlvbjogW251bWJlciwgbnVtYmVyXSxcbiAgdmFsdWU6IG51bWJlcixcbik6IHZvaWQge1xuICBjb25zdCBbZnJhbWVfaW5kZXgsIHZhbHVlX2luZGV4XSA9IHBvc2l0aW9uO1xuICBjb25zdCBmcmFtZV9hZGRyZXNzID0gSEVBUF9HRVRfQ0hJTEQoYWRkcmVzcywgZnJhbWVfaW5kZXgpO1xuICBIRUFQX1NFVF9DSElMRChmcmFtZV9hZGRyZXNzLCB2YWx1ZV9pbmRleCwgdmFsdWUpO1xufVxuXG4vLyBSZXR1cm4gYWRkcmVzcyBvZiBuZXcgZW52aXJvbm1lbnQgZXh0ZW5kZWQgd2l0aCBmcmFtZV9hZGRyZXNzXG5mdW5jdGlvbiBIRUFQX0VOVl9FWFRFTkQoZnJhbWVfYWRkcmVzczogbnVtYmVyLCBlbnZfYWRkcmVzczogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3Qgb2xkX3NpemUgPSBIRUFQX0dFVF9TSVpFKGVudl9hZGRyZXNzKTtcbiAgQSA9IG9sZF9zaXplO1xuICBORVdfRU5WSVJPTk1FTlQoKTtcbiAgLy8gY29weSBhZGRyZXNzZXMgb2YgZnJhbWVzIG92ZXIgdG8gbmV3IGVudmlyb25tZW50XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkX3NpemUgLSAxOyBpKyspIHtcbiAgICBIRUFQX1NFVF9DSElMRChSRVMsIGksIEhFQVBfR0VUX0NISUxEKGVudl9hZGRyZXNzLCBpKSk7XG4gIH1cbiAgSEVBUF9TRVRfQ0hJTEQoUkVTLCBvbGRfc2l6ZSAtIDEsIGZyYW1lX2FkZHJlc3MpO1xuICByZXR1cm4gUkVTO1xufVxuXG5jb25zdCBVTkFTU0lHTkVEX1RBRyA9IDEyO1xuY29uc3QgVU5BU1NJR05FRF9TSVpFID0gMTtcblxuLy8gY2hhbmdlcyBBLCBCXG5mdW5jdGlvbiBORVdfVU5BU1NJR05FRCgpIHtcbiAgQSA9IFVOQVNTSUdORURfVEFHO1xuICBCID0gVU5BU1NJR05FRF9TSVpFO1xuICBORVcoKTtcbn1cblxuZnVuY3Rpb24gSVNfVU5BU1NJR05FRChhZGRyZXNzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIEhFQVBfR0VUX1RBRyhhZGRyZXNzKSA9PT0gVU5BU1NJR05FRF9UQUc7XG59XG5cbmxldCBVTkFTU0lHTkVEOiBudW1iZXI7XG5cbi8vIGxvY2sgbm9kZXMgbGF5b3V0ICgyIHdvcmRzKVxuLy9cbi8vIDA6IFsxIGJ5dGUgdGFnLCA0IGJ5dGVzIHVudXNlZCwgMiBieXRlcyAjY2hpbGRyZW4sIDEgYnl0ZSB1bnVzZWRdXG4vLyAxOiBsb2NrIGlkXG5cbmNvbnN0IExPQ0tfVEFHID0gMTM7XG5jb25zdCBMT0NLX1NJWkUgPSAyO1xuY29uc3QgTE9DS19JRF9TTE9UID0gMTtcblxuLy8gY2hhbmdlcyBBLCBCLCBDLCBleHBlY3RzIGxvY2sgaWQgaW4gQVxuZnVuY3Rpb24gTkVXX0xPQ0soKSB7XG4gIEMgPSBBO1xuICBBID0gTE9DS19UQUc7XG4gIEIgPSBMT0NLX1NJWkU7XG4gIE5FVygpO1xuICBIRUFQX1NFVChSRVMgKyBMT0NLX0lEX1NMT1QsIEMpO1xufVxuXG5mdW5jdGlvbiBJU19MT0NLKGFkZHJlc3M6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gSEVBUF9HRVRfVEFHKGFkZHJlc3MpID09PSBMT0NLX1RBRztcbn1cblxuZnVuY3Rpb24gSEVBUF9HRVRfTE9DS19JRChhZGRyZXNzOiBudW1iZXIpOiBMb2NrSWQge1xuICByZXR1cm4gSEVBUF9HRVRfQ0hJTEQoYWRkcmVzcywgMCk7XG59XG5cbi8vIHRocmVhZCBub2RlcyBsYXlvdXQgKDIgd29yZHMpXG4vL1xuLy8gMDogWzEgYnl0ZSB0YWcsIDQgYnl0ZXMgdW51c2VkLCAyIGJ5dGVzICNjaGlsZHJlbiwgMSBieXRlIHVudXNlZF1cbi8vIDE6IHRocmVhZCBpZFxuXG5jb25zdCBUSFJFQURfVEFHID0gMTQ7XG5jb25zdCBUSFJFQURfU0laRSA9IDI7XG5jb25zdCBUSFJFQURfSURfU0xPVCA9IDE7XG5cbi8vIGNoYW5nZXMgQSwgQiwgQywgZXhwZWN0cyB0aHJlYWQgaWQgaW4gQVxuZnVuY3Rpb24gTkVXX1RIUkVBRCgpIHtcbiAgQyA9IEE7XG4gIEEgPSBUSFJFQURfVEFHO1xuICBCID0gVEhSRUFEX1NJWkU7XG4gIE5FVygpO1xuICBIRUFQX1NFVChSRVMgKyBUSFJFQURfSURfU0xPVCwgQyk7XG59XG5cbmZ1bmN0aW9uIElTX1RIUkVBRChhZGRyZXNzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIEhFQVBfR0VUX1RBRyhhZGRyZXNzKSA9PT0gVEhSRUFEX1RBRztcbn1cblxuZnVuY3Rpb24gSEVBUF9HRVRfVEhSRUFEX0lEKGFkZHJlc3M6IG51bWJlcik6IFRocmVhZElkIHtcbiAgcmV0dXJuIEhFQVBfR0VUX0NISUxEKGFkZHJlc3MsIDApO1xufVxuXG4vLyBhZGRyZXNzIG5vZGVzIGxheW91dCAoMiB3b3Jkcylcbi8vXG4vLyAwOiBbMSBieXRlIHRhZywgMiBieXRlcyB2YWx1ZSBpbmRleCBvZiBhZGRyZXNzLCAyIGJ5dGVzIGZyYW1lXG4vLyBpbmRleCBvZiBhZGRkcmVzcywgMiBieXRlcyAjY2hpbGRyZW4sIDEgYnl0ZSB1bnVzZWRdXG4vLyAxOiBhZGRyZXNzXG4vLyAyOiBlbnZpcm9ubWVudCB0aGF0IGFkZHJlc3MgaXMgaW5cblxuY29uc3QgQUREUkVTU19UQUcgPSAxNTtcbmNvbnN0IEFERFJFU1NfU0laRSA9IDM7XG5cbi8vIGNoYW5nZXMgQSwgQiwgQywgZXhwZWN0cyBBID0gW3ZhbHVlIGluZGV4LCBmcmFtZSBpbmRleCwgYWRkcmVzcywgZW52XVxuZnVuY3Rpb24gTkVXX0FERFJFU1MoKSB7XG4gIEMgPSBBO1xuICBBID0gQUREUkVTU19UQUc7XG4gIEIgPSBBRERSRVNTX1NJWkU7XG4gIE5FVygpO1xuICBIRUFQX1NFVF8yX0JZVEVTX0FUX09GRlNFVChSRVMsIDEsIENbMF0pO1xuICBIRUFQX1NFVF8yX0JZVEVTX0FUX09GRlNFVChSRVMsIDMsIENbMV0pO1xuICBIRUFQX1NFVF9DSElMRChSRVMsIDAsIENbMl0pO1xuICBIRUFQX1NFVF9DSElMRChSRVMsIDEsIENbM10pXG59XG5cbmZ1bmN0aW9uIElTX0FERFJFU1MoYWRkcmVzczogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBIRUFQX0dFVF9UQUcoYWRkcmVzcykgPT09IEFERFJFU1NfVEFHO1xufVxuXG5mdW5jdGlvbiBIRUFQX0dFVF9BRERSRVNTX1ZBTFVFX0lEWChhZGRyZXNzOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gSEVBUF9HRVRfMl9CWVRFU19BVF9PRkZTRVQoYWRkcmVzcywgMSk7XG59XG5cbmZ1bmN0aW9uIEhFQVBfR0VUX0FERFJFU1NfRlJBTUVfSURYKGFkZHJlc3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBIRUFQX0dFVF8yX0JZVEVTX0FUX09GRlNFVChhZGRyZXNzLCAzKTtcbn1cblxuZnVuY3Rpb24gSEVBUF9HRVRfQUREUkVTUyhhZGRyZXNzOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gSEVBUF9HRVRfQ0hJTEQoYWRkcmVzcywgMCk7XG59XG5cbmZ1bmN0aW9uIEhFQVBfU0VUX0FERFJFU1MoYWRkcmVzczogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gIEhFQVBfU0VUX0NISUxEKGFkZHJlc3MsIDAsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gSEVBUF9HRVRfQUREUkVTU19FTlYoYWRkcmVzczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIEhFQVBfR0VUX0NISUxEKGFkZHJlc3MsIDEpXG59XG5cbmZ1bmN0aW9uIEhFQVBfQUREUkVTU19ERVJFRihhZGRyZXNzOiBudW1iZXIpOiBudW1iZXIge1xuICBIID0gYWRkcmVzcztcbiAgd2hpbGUgKElTX0FERFJFU1MoSCkpIHtcbiAgICBIID0gSEVBUF9HRVRfQUREUkVTUyhIKTtcbiAgfVxuICByZXR1cm4gSDtcbn1cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogVmlydHVhbCBNYWNoaW5lXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBHT1RPX1BDX09GRlNFVCA9IDE7XG5jb25zdCBMRENJX1ZBTFVFX09GRlNFVCA9IDE7XG5jb25zdCBMRENGMzJfVkFMVUVfT0ZGU0VUID0gMTtcbmNvbnN0IExEQ0Y2NF9WQUxVRV9PRkZTRVQgPSAxO1xuY29uc3QgTEdDU19WQUxVRV9PRkZTRVQgPSAxO1xuLy8gY29uc3QgTkVXQ19BUklUWV9PRkZTRVQgPSAxXG4vLyBQQyBoZXJlIHJlZmVycyB0byBhZGRyZXNzIG9mIHN0YXJ0IG9mIGZ1bmN0aW9uJ3MgYm9keVxuY29uc3QgTkVXQ19BRERSX09GRlNFVCA9IDE7XG5jb25zdCBMRF9TVF9WQUxVRV9JRFhfT0ZGU0VUID0gMTtcbmNvbnN0IExEX1NUX0ZSQU1FX0lEWF9PRkZTRVQgPSAyO1xuLy8gbnVtYmVyIG9mIGxvY2FscyBpbiBibG9jayBzaG91bGQgYmUgZmlyc3QgYXJndW1lbnQgb2YgaW5zdHJ1Y3Rpb25cbmNvbnN0IE5VTV9MT0NBTFNfT0ZGU0VUID0gMTtcbmNvbnN0IEJSX09GRlNFVCA9IDE7XG5jb25zdCBDQUxMX0FSSVRZX09GRlNFVCA9IDE7XG5jb25zdCBORVdUX0FERFJfT0ZGU0VUID0gMTtcblxuY29uc3QgTTogKCgpID0+IHZvaWQpW10gPSBbXTtcblxuTVtPcENvZGVzLk5PUF0gPSAoKSA9PiB7XG4gIFBDID0gUEMgKyAxO1xufTtcblxuLy8gUmVsYXRpdmUgYWRkcmVzc2luZ1xuTVtPcENvZGVzLkdPVE9dID0gKCkgPT4ge1xuICBQQyA9IFBDICsgKFBbUENdW0dPVE9fUENfT0ZGU0VUXSBhcyBudW1iZXIpO1xufTtcblxuTVtPcENvZGVzLkxHQ0ldID0gKCkgPT4ge1xuICBBID0gUFtQQ11bTERDSV9WQUxVRV9PRkZTRVRdO1xuICBORVdfTlVNQkVSKCk7XG4gIE9TLnB1c2goUkVTKTtcbiAgUEMgPSBQQyArIDE7XG59O1xuXG5NW09wQ29kZXMuTEdDRjMyXSA9ICgpID0+IHtcbiAgQSA9IFBbUENdW0xEQ0YzMl9WQUxVRV9PRkZTRVRdO1xuICBORVdfTlVNQkVSKCk7XG4gIE9TLnB1c2goUkVTKTtcbiAgUEMgPSBQQyArIDE7XG59O1xuXG5NW09wQ29kZXMuTEdDRjY0XSA9ICgpID0+IHtcbiAgQSA9IFBbUENdW0xEQ0Y2NF9WQUxVRV9PRkZTRVRdO1xuICBORVdfTlVNQkVSKCk7XG4gIE9TLnB1c2goUkVTKTtcbiAgUEMgPSBQQyArIDE7XG59O1xuXG4vLyBsb2FkIGNvbnN0YW50IGZhbHNlXG5NW09wQ29kZXMuTEdDQjBdID0gKCkgPT4ge1xuICBBID0gZmFsc2U7XG4gIE5FV19CT09MKCk7XG4gIE9TLnB1c2goUkVTKTtcbiAgUEMgPSBQQyArIDE7XG59O1xuXG4vLyBsb2FkIGNvbnN0YW50IHRydWVcbk1bT3BDb2Rlcy5MR0NCMV0gPSAoKSA9PiB7XG4gIEEgPSB0cnVlO1xuICBORVdfQk9PTCgpO1xuICBPUy5wdXNoKFJFUyk7XG4gIFBDID0gUEMgKyAxO1xufTtcblxuLy8gbG9hZCBjb25zdGFudCB1bmRlZmluZWRcbk1bT3BDb2Rlcy5MR0NVXSA9ICgpID0+IHtcbiAgTkVXX1VOREVGSU5FRCgpO1xuICBPUy5wdXNoKFJFUyk7XG4gIFBDID0gUEMgKyAxO1xufTtcblxuLy8gbG9hZCBjb25zdGFudCBudWxsXG5NW09wQ29kZXMuTEdDTl0gPSAoKSA9PiB7XG4gIE5FV19OVUxMKCk7XG4gIE9TLnB1c2goUkVTKTtcbiAgUEMgPSBQQyArIDE7XG59O1xuXG5NW09wQ29kZXMuTEdDU10gPSAoKSA9PiB7XG4gIC8vIHN0cmluZyBsaXRlcmFsIHNob3VsZCBiZSBpbiBBXG4gIEEgPSBQW1BDXVtMR0NTX1ZBTFVFX09GRlNFVF07XG4gIE5FV19TVFJJTkcoKTtcbiAgT1MucHVzaChSRVMpO1xuICBQQyA9IFBDICsgMTtcbn07XG5cbk1bT3BDb2Rlcy5BRERHXSA9ICgpID0+IHtcbiAgSSA9IE9TLnBvcCgpO1xuICBHID0gT1MucG9wKCk7XG4gIGlmIChJU19OVU1CRVIoSSkgJiYgSVNfTlVNQkVSKEcpKSB7XG4gICAgQSA9IEhFQVBfR0VUKEkgKyBOVU1CRVJfVkFMVUVfU0xPVCk7XG4gICAgQSA9IEhFQVBfR0VUKEcgKyBOVU1CRVJfVkFMVUVfU0xPVCkgKyBBO1xuICAgIE5FV19OVU1CRVIoKTtcbiAgfSBlbHNlIGlmIChJU19TVFJJTkcoSSkgJiYgSVNfU1RSSU5HKEcpKSB7XG4gICAgQSA9IEhFQVBfR0VUX1NUUklORyhJKTtcbiAgICBBID0gSEVBUF9HRVRfU1RSSU5HKEcpICsgQTtcbiAgICBORVdfU1RSSU5HKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBcIk5vdCBib3RoIGFyZ3VtZW50cyB0byBhZGQuZyBhcmUgb2YgdHlwZSBudW1iZXIgb3IgdHlwZSBzdHJpbmdcIixcbiAgICApO1xuICB9XG4gIE9TLnB1c2goUkVTKTtcbiAgUEMgPSBQQyArIDE7XG59O1xuXG4vLyBudW1iZXIgYmVsb3cgdG9wIG9mIE9TIC0gbnVtYmVyIG9uIHRvcCBvZiBPU1xuTVtPcENvZGVzLlNVQkddID0gKCkgPT4ge1xuICBJID0gT1MucG9wKCk7IC8vIGFkZHJlc3Mgb2YgZmlyc3QgbnVtYmVyXG4gIEcgPSBPUy5wb3AoKTsgLy8gYWRkcmVzcyBvZiBzZWNvbmQgbnVtYmVyXG4gIC8vIENoZWNrIGlmIGJvdGggYXJlIGluZGVlZCBudW1iZXJzXG4gIEYgPSBJU19OVU1CRVIoSSkgJiYgSVNfTlVNQkVSKEcpO1xuICBpZiAoRikge1xuICAgIEEgPSBIRUFQX0dFVChJICsgTlVNQkVSX1ZBTFVFX1NMT1QpO1xuICAgIEEgPSBIRUFQX0dFVChHICsgTlVNQkVSX1ZBTFVFX1NMT1QpIC0gQTtcbiAgICBORVdfTlVNQkVSKCk7XG4gICAgT1MucHVzaChSRVMpO1xuICAgIFBDID0gUEMgKyAxO1xuICB9IGVsc2Uge1xuICAgIHRocm93IEVycm9yKFwiTm90IGJvdGggYXJndW1lbnRzIHRvIHN1Yi5nIGFyZSBvZiB0eXBlIG51bWJlclwiKTtcbiAgfVxufTtcblxuTVtPcENvZGVzLk1VTEddID0gKCkgPT4ge1xuICBJID0gT1MucG9wKCk7IC8vIGFkZHJlc3Mgb2YgZmlyc3QgbnVtYmVyXG4gIEcgPSBPUy5wb3AoKTsgLy8gYWRkcmVzcyBvZiBzZWNvbmQgbnVtYmVyXG4gIC8vIENoZWNrIGlmIGJvdGggYXJlIGluZGVlZCBudW1iZXJzXG4gIEYgPSBJU19OVU1CRVIoSSkgJiYgSVNfTlVNQkVSKEcpO1xuICBpZiAoRikge1xuICAgIEEgPSBIRUFQX0dFVChJICsgTlVNQkVSX1ZBTFVFX1NMT1QpO1xuICAgIEEgPSBIRUFQX0dFVChHICsgTlVNQkVSX1ZBTFVFX1NMT1QpICogQTtcbiAgICBORVdfTlVNQkVSKCk7XG4gICAgT1MucHVzaChSRVMpO1xuICAgIFBDID0gUEMgKyAxO1xuICB9IGVsc2Uge1xuICAgIHRocm93IEVycm9yKFwiTm90IGJvdGggYXJndW1lbnRzIHRvIG11bC5nIGFyZSBvZiB0eXBlIG51bWJlclwiKTtcbiAgfVxufTtcblxuLy8gbnVtYmVyIGJlbG93IHRvcCBvZiBPUyAvIG51bWJlciBvbiB0b3Agb2YgT1Ncbk1bT3BDb2Rlcy5ESVZHXSA9ICgpID0+IHtcbiAgSSA9IE9TLnBvcCgpOyAvLyBhZGRyZXNzIG9mIGZpcnN0IG51bWJlclxuICBHID0gT1MucG9wKCk7IC8vIGFkZHJlc3Mgb2Ygc2Vjb25kIG51bWJlclxuICAvLyBDaGVjayBpZiBib3RoIGFyZSBpbmRlZWQgbnVtYmVyc1xuICBGID0gSVNfTlVNQkVSKEkpICYmIElTX05VTUJFUihHKTtcbiAgaWYgKEYpIHtcbiAgICBBID0gSEVBUF9HRVQoSSArIE5VTUJFUl9WQUxVRV9TTE9UKTtcbiAgICBBID0gSEVBUF9HRVQoRyArIE5VTUJFUl9WQUxVRV9TTE9UKSAvIEE7XG4gICAgTkVXX05VTUJFUigpO1xuICAgIE9TLnB1c2goUkVTKTtcbiAgICBQQyA9IFBDICsgMTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBFcnJvcihcIk5vdCBib3RoIGFyZ3VtZW50cyB0byBkaXYuZyBhcmUgb2YgdHlwZSBudW1iZXJcIik7XG4gIH1cbn07XG5cbi8vIG51bWJlciBiZWxvdyB0b3Agb2YgT1MgJSBudW1iZXIgb24gdG9wIG9mIE9TXG5NW09wQ29kZXMuTU9ER10gPSAoKSA9PiB7XG4gIEkgPSBPUy5wb3AoKTsgLy8gYWRkcmVzcyBvZiBmaXJzdCBudW1iZXJcbiAgRyA9IE9TLnBvcCgpOyAvLyBhZGRyZXNzIG9mIHNlY29uZCBudW1iZXJcbiAgLy8gQ2hlY2sgaWYgYm90aCBhcmUgaW5kZWVkIG51bWJlcnNcbiAgRiA9IElTX05VTUJFUihJKSAmJiBJU19OVU1CRVIoRyk7XG4gIGlmIChGKSB7XG4gICAgQSA9IEhFQVBfR0VUKEkgKyBOVU1CRVJfVkFMVUVfU0xPVCk7XG4gICAgQSA9IEhFQVBfR0VUKEcgKyBOVU1CRVJfVkFMVUVfU0xPVCkgJSBBO1xuICAgIE5FV19OVU1CRVIoKTtcbiAgICBPUy5wdXNoKFJFUyk7XG4gICAgUEMgPSBQQyArIDE7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRXJyb3IoXCJOb3QgYm90aCBhcmd1bWVudHMgdG8gbW9kLmcgYXJlIG9mIHR5cGUgbnVtYmVyXCIpO1xuICB9XG59O1xuXG5NW09wQ29kZXMuTkVHR10gPSAoKSA9PiB7XG4gIEkgPSBPUy5wb3AoKTtcbiAgRiA9IElTX05VTUJFUihJKTtcbiAgaWYgKEYpIHtcbiAgICBBID0gLUhFQVBfR0VUKEkgKyBOVU1CRVJfVkFMVUVfU0xPVCk7XG4gICAgTkVXX05VTUJFUigpO1xuICAgIE9TLnB1c2goUkVTKTtcbiAgICBQQyA9IFBDICsgMTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBFcnJvcihcIkFyZ3VtZW50IHRvIG5lZy5nIGlzIG5vdCBvZiB0eXBlIG51bWJlclwiKTtcbiAgfVxufTtcblxuTVtPcENvZGVzLk5PVEddID0gKCkgPT4ge1xuICBJID0gT1MucG9wKCk7XG4gIEYgPSBJU19CT09MKEkpO1xuICBpZiAoRikge1xuICAgIGlmIChJU19UUlVFKEkpKSB7XG4gICAgICBBID0gZmFsc2U7XG4gICAgICBORVdfQk9PTCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBBID0gdHJ1ZTtcbiAgICAgIE5FV19CT09MKCk7XG4gICAgfVxuICAgIE9TLnB1c2goUkVTKTtcbiAgICBQQyA9IFBDICsgMTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBFcnJvcihcIkFyZ3VtZW50IHRvIG5vdC5nIGlzIG5vdCBvZiB0eXBlIGJvb2xlYW5cIik7XG4gIH1cbn07XG5cbi8vIEFzc3VtZSBib3RoIG9wZXJhbmRzIGFyZSBzdHJpbmdzIG9yIG51bWJlcnNcbi8vIG51bWJlci9zdHJpbmcgYmVsb3cgdG9wIG9mIE9TIDwgbnVtYmVyL3N0cmluZyBvbiB0b3Agb2YgT1Ncbk1bT3BDb2Rlcy5MVEddID0gKCkgPT4ge1xuICBJID0gT1MucG9wKCk7XG4gIEcgPSBPUy5wb3AoKTtcbiAgaWYgKElTX05VTUJFUihJKSAmJiBJU19OVU1CRVIoRykpIHtcbiAgICBBID0gSEVBUF9HRVQoSSArIE5VTUJFUl9WQUxVRV9TTE9UKTtcbiAgICBBID0gSEVBUF9HRVQoRyArIE5VTUJFUl9WQUxVRV9TTE9UKSA8IEE7XG4gIH0gZWxzZSBpZiAoSVNfU1RSSU5HKEkpICYmIElTX1NUUklORyhHKSkge1xuICAgIEEgPSBIRUFQX0dFVF9TVFJJTkcoSSk7XG4gICAgQSA9IEhFQVBfR0VUX1NUUklORyhHKSA8IEE7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRXJyb3IoXCJOb3QgYm90aCBhcmd1bWVudHMgdG8gbHQuZyBhcmUgb2YgdHlwZSBudW1iZXIgb3IgdHlwZSBzdHJpbmdcIik7XG4gIH1cbiAgTkVXX0JPT0woKTtcbiAgT1MucHVzaChSRVMpO1xuICBQQyA9IFBDICsgMTtcbn07XG5cbi8vIG51bWJlci9zdHJpbmcgYmVsb3cgdG9wIG9mIE9TID4gbnVtYmVyL3N0cmluZyBvbiB0b3Agb2YgT1Ncbk1bT3BDb2Rlcy5HVEddID0gKCkgPT4ge1xuICBJID0gT1MucG9wKCk7XG4gIEcgPSBPUy5wb3AoKTtcbiAgaWYgKElTX05VTUJFUihJKSAmJiBJU19OVU1CRVIoRykpIHtcbiAgICBBID0gSEVBUF9HRVQoSSArIE5VTUJFUl9WQUxVRV9TTE9UKTtcbiAgICBBID0gSEVBUF9HRVQoRyArIE5VTUJFUl9WQUxVRV9TTE9UKSA+IEE7XG4gIH0gZWxzZSBpZiAoSVNfU1RSSU5HKEkpICYmIElTX1NUUklORyhHKSkge1xuICAgIEEgPSBIRUFQX0dFVF9TVFJJTkcoSSk7XG4gICAgQSA9IEhFQVBfR0VUX1NUUklORyhHKSA+IEE7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRXJyb3IoXCJOb3QgYm90aCBhcmd1bWVudHMgdG8gZ3QuZyBhcmUgb2YgdHlwZSBudW1iZXIgb3IgdHlwZSBzdHJpbmdcIik7XG4gIH1cbiAgTkVXX0JPT0woKTtcbiAgT1MucHVzaChSRVMpO1xuICBQQyA9IFBDICsgMTtcbn07XG5cbi8vIG51bWJlci9zdHJpbmcgYmVsb3cgdG9wIG9mIE9TIDw9IG51bWJlci9zdHJpbmcgb24gdG9wIG9mIE9TXG5NW09wQ29kZXMuTEVHXSA9ICgpID0+IHtcbiAgSSA9IE9TLnBvcCgpO1xuICBHID0gT1MucG9wKCk7XG4gIGlmIChJU19OVU1CRVIoSSkgJiYgSVNfTlVNQkVSKEcpKSB7XG4gICAgQSA9IEhFQVBfR0VUKEkgKyBOVU1CRVJfVkFMVUVfU0xPVCk7XG4gICAgQSA9IEhFQVBfR0VUKEcgKyBOVU1CRVJfVkFMVUVfU0xPVCkgPD0gQTtcbiAgfSBlbHNlIGlmIChJU19TVFJJTkcoSSkgJiYgSVNfU1RSSU5HKEcpKSB7XG4gICAgQSA9IEhFQVBfR0VUX1NUUklORyhJKTtcbiAgICBBID0gSEVBUF9HRVRfU1RSSU5HKEcpIDw9IEE7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRXJyb3IoXCJOb3QgYm90aCBhcmd1bWVudHMgdG8gbGUuZyBhcmUgb2YgdHlwZSBudW1iZXIgb3IgdHlwZSBzdHJpbmdcIik7XG4gIH1cbiAgTkVXX0JPT0woKTtcbiAgT1MucHVzaChSRVMpO1xuICBQQyA9IFBDICsgMTtcbn07XG5cbi8vIG51bWJlci9zdHJpbmcgYmVsb3cgdG9wIG9mIE9TID49IG51bWJlci9zdHJpbmcgb24gdG9wIG9mIE9TXG5NW09wQ29kZXMuR0VHXSA9ICgpID0+IHtcbiAgSSA9IE9TLnBvcCgpO1xuICBHID0gT1MucG9wKCk7XG4gIGlmIChJU19OVU1CRVIoSSkgJiYgSVNfTlVNQkVSKEcpKSB7XG4gICAgQSA9IEhFQVBfR0VUKEkgKyBOVU1CRVJfVkFMVUVfU0xPVCk7XG4gICAgQSA9IEhFQVBfR0VUKEcgKyBOVU1CRVJfVkFMVUVfU0xPVCkgPj0gQTtcbiAgfSBlbHNlIGlmIChJU19TVFJJTkcoSSkgJiYgSVNfU1RSSU5HKEcpKSB7XG4gICAgQSA9IEhFQVBfR0VUX1NUUklORyhJKTtcbiAgICBBID0gSEVBUF9HRVRfU1RSSU5HKEcpID49IEE7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRXJyb3IoXCJOb3QgYm90aCBhcmd1bWVudHMgdG8gZ2UuZyBhcmUgb2YgdHlwZSBudW1iZXIgb3IgdHlwZSBzdHJpbmdcIik7XG4gIH1cbiAgTkVXX0JPT0woKTtcbiAgT1MucHVzaChSRVMpO1xuICBQQyA9IFBDICsgMTtcbn07XG5cbk1bT3BDb2Rlcy5FUUddID0gKCkgPT4ge1xuICBJID0gT1MucG9wKCk7XG4gIEcgPSBPUy5wb3AoKTtcbiAgaWYgKElTX05VTUJFUihJKSAmJiBJU19OVU1CRVIoRykpIHtcbiAgICBBID0gSEVBUF9HRVQoSSArIE5VTUJFUl9WQUxVRV9TTE9UKTtcbiAgICBBID0gSEVBUF9HRVQoRyArIE5VTUJFUl9WQUxVRV9TTE9UKSA9PT0gQTtcbiAgfSBlbHNlIGlmIChJU19CT09MKEkpICYmIElTX0JPT0woRykpIHtcbiAgICBBID0gKElTX1RSVUUoSSkgJiYgSVNfVFJVRShHKSkgfHwgKElTX0ZBTFNFKEkpICYmIElTX0ZBTFNFKEcpKTtcbiAgfSBlbHNlIGlmIChJU19TVFJJTkcoSSkgJiYgSVNfU1RSSU5HKEcpKSB7XG4gICAgQSA9IEhFQVBfR0VUX1NUUklORyhJKTtcbiAgICBBID0gSEVBUF9HRVRfU1RSSU5HKEcpID09PSBBO1xuICB9IGVsc2Uge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgXCJOb3QgYm90aCBhcmd1bWVudHMgdG8gZXEuZyBhcmUgb2YgdHlwZSBudW1iZXIgb3IgdHlwZSBzdHJpbmcgb3IgdHlwZSBib29sXCIsXG4gICAgKTtcbiAgfVxuICBORVdfQk9PTCgpO1xuICBPUy5wdXNoKFJFUyk7XG4gIFBDID0gUEMgKyAxO1xufTtcblxuTVtPcENvZGVzLk5FUUddID0gKCkgPT4ge1xuICBJID0gT1MucG9wKCk7XG4gIEcgPSBPUy5wb3AoKTtcbiAgaWYgKElTX05VTUJFUihJKSAmJiBJU19OVU1CRVIoRykpIHtcbiAgICBBID0gSEVBUF9HRVQoSSArIE5VTUJFUl9WQUxVRV9TTE9UKTtcbiAgICBBID0gSEVBUF9HRVQoRyArIE5VTUJFUl9WQUxVRV9TTE9UKSAhPT0gQTtcbiAgfSBlbHNlIGlmIChJU19CT09MKEkpICYmIElTX0JPT0woRykpIHtcbiAgICBBID0gKElTX1RSVUUoSSkgJiYgSVNfRkFMU0UoRykpIHx8IChJU19UUlVFKEkpICYmIElTX0ZBTFNFKEcpKTtcbiAgfSBlbHNlIGlmIChJU19TVFJJTkcoSSkgJiYgSVNfU1RSSU5HKEcpKSB7XG4gICAgQSA9IEhFQVBfR0VUX1NUUklORyhJKTtcbiAgICBBID0gSEVBUF9HRVRfU1RSSU5HKEcpICE9PSBBO1xuICB9IGVsc2Uge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgXCJOb3QgYm90aCBhcmd1bWVudHMgdG8gbmVxLmcgYXJlIG9mIHR5cGUgbnVtYmVyIG9yIHR5cGUgc3RyaW5nIG9yIHR5cGUgYm9vbFwiLFxuICAgICk7XG4gIH1cbiAgTkVXX0JPT0woKTtcbiAgT1MucHVzaChSRVMpO1xuICBQQyA9IFBDICsgMTtcbn07XG5cbi8vIFNpbWlsYXIgdG8gTERGIGluIEhXNS82XG5NW09wQ29kZXMuTkVXQ10gPSAoKSA9PiB7XG4gIEEgPSBbUFtQQ11bTkVXQ19BRERSX09GRlNFVF0sIEVOVl07XG4gIC8vIGV4cGVjdHMgQSA9IFtpbmRleCBvZiBmdW5jdGlvbiBpbiBGVU5DLCBlbnZdXG4gIE5FV19DTE9TVVJFKCk7XG4gIE9TLnB1c2goUkVTKTsgLy8gY2xvc3VyZSBhZGRyZXNzIG9uIHRvcCBvZiBPU1xuICBQQyA9IFBDICsgMTtcbn07XG5cbi8qXG5NW09wQ29kZXMuTkVXQV0gPSAoKSA9PiB7XG5cbiAgTkVXX0FSUkFZKClcbiAgQSA9IFJFU1xuICBQVVNIX09TKClcbiAgUEMgPSBQQyArIDFcbn1cbiovXG5cbi8vIFNpbWlsYXIgdG8gTERcbk1bT3BDb2Rlcy5MRExHXSA9ICgpID0+IHtcbiAgQSA9IFtIRUFQX0dFVF9OVU1fQ0hJTEQoRU5WKSAtIDEsIFBbUENdW0xEX1NUX1ZBTFVFX0lEWF9PRkZTRVRdXTtcbiAgQSA9IEhFQVBfR0VUX0VOVl9WQUxVRShFTlYsIEEpO1xuICBGID0gSVNfVU5BU1NJR05FRChBKTtcbiAgaWYgKEYpIHtcbiAgICB0aHJvdyBFcnJvcihcImFjY2VzcyBvZiB1bmFzc2lnbmVkIG5hbWVcIik7XG4gIH1cbiAgT1MucHVzaChBKTtcbiAgUEMgPSBQQyArIDE7XG59O1xuXG4vLyBTaW1pbGFyIHRvIEFTU0lHTlxuLy8gRXhwZWN0cyBhZGRyZXNzIG9mIHZhbHVlIHRvIHN0b3JlIHRvIGJlIHRvcCB0b2YgT1Ncbk1bT3BDb2Rlcy5TVExHXSA9ICgpID0+IHtcbiAgQSA9IFswLCBQW1BDXVtMRF9TVF9WQUxVRV9JRFhfT0ZGU0VUXV07XG4gIEYgPSBbSEVBUF9HRVRfTlVNX0NISUxEKEVOVikgLSAxLCBQW1BDXVtMRF9TVF9WQUxVRV9JRFhfT0ZGU0VUXV07XG4gIEYgPSBIRUFQX0dFVF9FTlZfVkFMVUUoRU5WLCBGKTtcbiAgd2hpbGUgKElTX0FERFJFU1MoRikpIHtcbiAgICBCID0gRiAvLyBzdG9yZSBhZGRyZXNzIG9mIGFkZHJlc3NcbiAgICBBID0gW0hFQVBfR0VUX0FERFJFU1NfRlJBTUVfSURYKEYpLCBIRUFQX0dFVF9BRERSRVNTX1ZBTFVFX0lEWChGKV07XG4gICAgRiA9IEhFQVBfR0VUX0FERFJFU1MoRik7XG4gIH1cbiAgRyA9IE9TLnBvcCgpXG4gIGlmIChJU19BRERSRVNTKEIpKSB7XG4gICAgSEVBUF9TRVRfQUREUkVTUyhCLCBHKVxuICAgIEFbMF0gPSBIRUFQX0dFVF9OVU1fQ0hJTEQoSEVBUF9HRVRfQUREUkVTU19FTlYoQikpIC0gMSAtIEFbMF07XG4gICAgSEVBUF9TRVRfRU5WX1ZBTFVFKEhFQVBfR0VUX0FERFJFU1NfRU5WKEIpLCBBLCBHKTtcbiAgfSBlbHNlIHtcbiAgICBBWzBdID0gSEVBUF9HRVRfTlVNX0NISUxEKEVOVikgLSAxIC0gQVswXTtcbiAgICBIRUFQX1NFVF9FTlZfVkFMVUUoRU5WLCBBLCBHKTtcbiAgfVxuICBQQyA9IFBDICsgMTtcbn07XG5cbi8qXG5NW09wQ29kZXMuTERQR10gPSAoKSA9PiB7XG4gIEEgPSBbUFtQQ11bTERfU1RfRlJBTUVfSURYX09GRlNFVF0sIFBbUENdW0xEX1NUX1ZBTFVFX0lEWF9PRkZTRVRdXVxuICBBID0gSEVBUF9HRVRfRU5WX1ZBTFVFKEVOViwgQSlcbiAgRiA9IElTX1VOQVNTSUdORUQoQSlcbiAgaWYgKEYpIHtcbiAgICB0aHJvdyBFcnJvcihcImFjY2VzcyBvZiB1bmFzc2lnbmVkIG5hbWVcIilcbiAgfVxuICBPUy5wdXNoKEEpXG4gIFBDID0gUEMgKyAxXG59XG4qL1xuXG5NW09wQ29kZXMuTERQR10gPSAoKSA9PiB7XG4gIEEgPSBIRUFQX0dFVF9OVU1fQ0hJTEQoRU5WKSAtIDEgLSAoUFtQQ11bTERfU1RfRlJBTUVfSURYX09GRlNFVF0gYXMgbnVtYmVyKTtcbiAgQSA9IFtBLCBQW1BDXVtMRF9TVF9WQUxVRV9JRFhfT0ZGU0VUXV07XG4gIEEgPSBIRUFQX0dFVF9FTlZfVkFMVUUoRU5WLCBBKTtcbiAgRiA9IElTX1VOQVNTSUdORUQoQSk7XG4gIGlmIChGKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJhY2Nlc3Mgb2YgdW5hc3NpZ25lZCBuYW1lXCIpO1xuICB9XG4gIE9TLnB1c2goQSk7XG4gIFBDID0gUEMgKyAxO1xufTtcblxuLypcbk1bT3BDb2Rlcy5TVFBHXSA9ICgpID0+IHtcbiAgQSA9IFtQW1BDXVtMRF9TVF9GUkFNRV9JRFhfT0ZGU0VUXSwgUFtQQ11bTERfU1RfVkFMVUVfSURYX09GRlNFVF1dXG4gIEEgPSBIRUFQX1NFVF9FTlZfVkFMVUUoRU5WLCBBLCBQRUVLKE9TLCAwKSlcbiAgUEMgPSBQQyArIDFcbn1cbiovXG5cbk1bT3BDb2Rlcy5TVFBHXSA9ICgpID0+IHtcbiAgQSA9IFtQW1BDXVtMRF9TVF9GUkFNRV9JRFhfT0ZGU0VUXSwgUFtQQ11bTERfU1RfVkFMVUVfSURYX09GRlNFVF1dO1xuICBGID0gW1xuICAgIEhFQVBfR0VUX05VTV9DSElMRChFTlYpIC0gMSAtIChQW1BDXVtMRF9TVF9GUkFNRV9JRFhfT0ZGU0VUXSBhcyBudW1iZXIpLFxuICAgIFBbUENdW0xEX1NUX1ZBTFVFX0lEWF9PRkZTRVRdLFxuICBdO1xuICBGID0gSEVBUF9HRVRfRU5WX1ZBTFVFKEVOViwgRik7XG4gIHdoaWxlIChJU19BRERSRVNTKEYpKSB7XG4gICAgQiA9IEZcbiAgICBBID0gW0hFQVBfR0VUX0FERFJFU1NfRlJBTUVfSURYKEYpLCBIRUFQX0dFVF9BRERSRVNTX1ZBTFVFX0lEWChGKV07XG4gICAgRiA9IEhFQVBfR0VUX0FERFJFU1MoRik7XG4gIH1cbiAgRyA9IE9TLnBvcCgpXG4gIGlmIChJU19BRERSRVNTKEIpKSB7XG4gICAgSEVBUF9TRVRfQUREUkVTUyhCLCBHKVxuICAgIEFbMF0gPSBIRUFQX0dFVF9OVU1fQ0hJTEQoSEVBUF9HRVRfQUREUkVTU19FTlYoQikpIC0gMSAtIEFbMF07XG4gICAgQSA9IEhFQVBfU0VUX0VOVl9WQUxVRShIRUFQX0dFVF9BRERSRVNTX0VOVihCKSwgQSwgRyk7XG4gIH0gZWxzZSB7XG4gICAgQVswXSA9IEhFQVBfR0VUX05VTV9DSElMRChFTlYpIC0gMSAtIEFbMF07XG4gICAgQSA9IEhFQVBfU0VUX0VOVl9WQUxVRShFTlYsIEEsIEcpO1xuICB9XG4gIFBDID0gUEMgKyAxO1xufTtcblxuLy8gRXhwZWN0cyB0b3Agb2YgT1MgdG8gYmUgYSBib29sZWFuXG5NW09wQ29kZXMuQlJUXSA9ICgpID0+IHtcbiAgQSA9IE9TLnBvcCgpO1xuICBpZiAoSVNfVFJVRShBKSkge1xuICAgIFBDID0gUEMgKyAoUFtQQ11bQlJfT0ZGU0VUXSBhcyBudW1iZXIpO1xuICB9IGVsc2Uge1xuICAgIFBDID0gUEMgKyAxO1xuICB9XG59O1xuXG5NW09wQ29kZXMuQlJGXSA9ICgpID0+IHtcbiAgQSA9IE9TLnBvcCgpO1xuICBpZiAoSVNfRkFMU0UoQSkpIHtcbiAgICBQQyA9IFBDICsgKFBbUENdW0JSX09GRlNFVF0gYXMgbnVtYmVyKTtcbiAgfSBlbHNlIHtcbiAgICBQQyA9IFBDICsgMTtcbiAgfVxufTtcblxuTVtPcENvZGVzLkJSXSA9ICgpID0+IHtcbiAgUEMgPSBQQyArIChQW1BDXVtCUl9PRkZTRVRdIGFzIG51bWJlcik7XG59O1xuXG4vLyBCZWZvcmUgcnVubmluZyBDQUxMLCBsb2FkIG5hbWUgb2YgZnVuY3Rpb24sXG4vLyB0aGVuIGxvYWQgYXJndW1lbnRzIHRvIGZ1bmN0aW9uXG5NW09wQ29kZXMuQ0FMTF0gPSAoKSA9PiB7XG4gIC8vIEFkZHJlc3Mgb2YgY2xvc3VyZSBvZiBmdW5jdGlvbiB0byBjYWxsXG4gIEcgPSBQRUVLKE9TLCBQW1BDXVtDQUxMX0FSSVRZX09GRlNFVF0gYXMgbnVtYmVyKTtcbiAgQSA9IFBbUENdW0NBTExfQVJJVFlfT0ZGU0VUXTtcbiAgTkVXX0ZSQU1FKCk7IC8vIEV4cGVjdHMgbnVtYmVyIG9mIHZhbHVlcyB0byBiZSBpbiBBXG4gIEUgPSBSRVM7XG4gIGZvciAobGV0IGkgPSAoUFtQQ11bQ0FMTF9BUklUWV9PRkZTRVRdIGFzIG51bWJlcikgLSAxOyBpID49IDA7IGktLSkge1xuICAgIEhFQVBfU0VUX0NISUxEKEUsIGksIE9TLnBvcCgpKTtcbiAgfVxuICBQQyA9IFBDICsgMTtcbiAgQSA9IFtFTlYsIFBDLCBGTl07XG4gIE5FV19DQUxMX0ZSQU1FKCk7XG4gIFJUUy5wdXNoKFJFUyk7XG4gIE9TLnBvcCgpO1xuICBFTlYgPSBIRUFQX0VOVl9FWFRFTkQoRSwgSEVBUF9HRVRfQ0xPU1VSRV9FTlYoRykpO1xuICBQQyA9IDA7XG4gIFAgPSBIRUFQX0dFVF9DTE9TVVJFX1AoRyk7XG4gIEZOID0gSEVBUF9HRVRfQ0xPU1VSRV9GTihHKTtcbn07XG5cbk1bT3BDb2Rlcy5DQUxMVF0gPSAoKSA9PiB7XG4gIC8vIEFkZHJlc3Mgb2YgY2xvc3VyZSBvZiBmdW5jdGlvbiB0byBjYWxsXG4gIEcgPSBQRUVLKE9TLCBQW1BDXVtDQUxMX0FSSVRZX09GRlNFVF0gYXMgbnVtYmVyKTtcbiAgQSA9IFBbUENdW0NBTExfQVJJVFlfT0ZGU0VUXTtcbiAgTkVXX0ZSQU1FKCk7IC8vIEV4cGVjdHMgbnVtYmVyIG9mIHZhbHVlcyB0byBiZSBpbiBBXG4gIEUgPSBSRVM7XG4gIGZvciAobGV0IGkgPSAoUFtQQ11bQ0FMTF9BUklUWV9PRkZTRVRdIGFzIG51bWJlcikgLSAxOyBpID49IDA7IGktLSkge1xuICAgIEhFQVBfU0VUX0NISUxEKEUsIGksIE9TLnBvcCgpKTtcbiAgfVxuICBPUy5wb3AoKTtcbiAgRU5WID0gSEVBUF9FTlZfRVhURU5EKEUsIEhFQVBfR0VUX0NMT1NVUkVfRU5WKEcpKTtcbiAgUEMgPSAwO1xuICBQID0gSEVBUF9HRVRfQ0xPU1VSRV9QKEcpO1xuICBGTiA9IEhFQVBfR0VUX0NMT1NVUkVfRk4oRyk7XG59O1xuXG5NW09wQ29kZXMuUkVUR10gPSAoKSA9PiB7XG4gIEggPSBSVFMucG9wKCk7XG4gIGlmIChJU19DQUxMX0ZSQU1FKEgpKSB7XG4gICAgUEMgPSBIRUFQX0dFVF9DQUxMX0ZSQU1FX1BDKEgpO1xuICAgIEVOViA9IEhFQVBfR0VUX0NBTExfRlJBTUVfRU5WKEgpO1xuICAgIFAgPSBIRUFQX0dFVF9DQUxMX0ZSQU1FX1AoSCk7XG4gICAgRk4gPSBIRUFQX0dFVF9DQUxMX0ZSQU1FX0ZOKEgpO1xuICB9XG59O1xuXG5NW09wQ29kZXMuUE9QR10gPSAoKSA9PiB7XG4gIE9TLnBvcCgpO1xuICBQQyA9IFBDICsgMTtcbn07XG5cbk1bT3BDb2Rlcy5ORVdFTlZdID0gKCkgPT4ge1xuICBBID0gRU5WO1xuICBORVdfQkxPQ0tfRlJBTUUoKTtcbiAgUlRTLnB1c2goUkVTKTtcbiAgSSA9IFBbUENdW05VTV9MT0NBTFNfT0ZGU0VUXTtcbiAgQSA9IEk7XG4gIE5FV19GUkFNRSgpO1xuICBIID0gUkVTO1xuICBFTlYgPSBIRUFQX0VOVl9FWFRFTkQoSCwgRU5WKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBJOyBpKyspIHtcbiAgICBIRUFQX1NFVF9DSElMRChILCBpLCBVTkFTU0lHTkVEKTtcbiAgfVxuICBQQyA9IFBDICsgMTtcbn07XG5cbk1bT3BDb2Rlcy5QT1BFTlZdID0gKCkgPT4ge1xuICBIID0gUlRTLnBvcCgpO1xuICBpZiAoSVNfQkxPQ0tfRlJBTUUoSCkpIHtcbiAgICBFTlYgPSBIRUFQX0dFVF9CTE9DS19GUkFNRV9FTlYoSCk7XG4gICAgUEMgPSBQQyArIDE7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRXJyb3IoXCJUb3Agb2YgUlRTIG5vdCBhIGJsb2NrIGZyYW1lIHdoZW4gZXhpdGluZyBzY29wZVwiKTtcbiAgfVxufTtcblxuTVtPcENvZGVzLkxEUEFdID0gKCkgPT4ge1xuICBBID0gSEVBUF9HRVRfTlVNX0NISUxEKEVOVikgLSAxIC0gKFBbUENdW0xEX1NUX0ZSQU1FX0lEWF9PRkZTRVRdIGFzIG51bWJlcik7XG4gIEEgPSBbQSwgUFtQQ11bTERfU1RfVkFMVUVfSURYX09GRlNFVF1dO1xuICBBID0gSEVBUF9HRVRfRU5WX1ZBTFVFKEVOViwgQSk7XG4gIEEgPSBbUFtQQ11bTERfU1RfVkFMVUVfSURYX09GRlNFVF0sIFBbUENdW0xEX1NUX0ZSQU1FX0lEWF9PRkZTRVRdLCBBLCBFTlZdO1xuICAvLyBleHBlY3RzIEEgPSBbdmFsdWUgaW5kZXgsIGZyYW1lIGluZGV4LCBhZGRyZXNzLCBlbnZdXG4gIE5FV19BRERSRVNTKCk7XG4gIE9TLnB1c2goUkVTKTtcbiAgUEMgPSBQQyArIDE7XG59O1xuXG4vLyBFeHBlY3RzIGFkZHJlc3MgdG8gYmUgb24gdG9wIG9mIE9TXG5NW09wQ29kZXMuREVSRUZdID0gKCkgPT4ge1xuICBIID0gT1MucG9wKCk7XG4gIGlmIChJU19BRERSRVNTKEgpKSB7XG4gICAgSCA9IEhFQVBfR0VUX0FERFJFU1MoSCk7XG4gICAgT1MucHVzaChIKTtcbiAgICBQQyA9IFBDICsgMTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBFcnJvcihcIlRyeWluZyB0byBkZXJlZmVyZW5jZSBhIG5vbi1hZGRyZXNzIHZhbHVlXCIpO1xuICB9XG59O1xuXG4vLyBDb25jdXJyZW5jeVxuXG4vLyBUaHJlYWQgaWQgb2YgbmV3bHkgY3JlYXRlZCB0aHJlYWQgd2lsbCBiZSBhbGxvY2F0ZWQgb24gdGhlIGhlYXBcbi8vIEFkZHJlc3Mgb2YgdGhyZWFkIGlkIGFsbG9jYXRlZCBvbiBoZWFwIHdpbGwgYmUgb24gdG9wIG9mIE9TIGFmdGVyIE5FV1QgZW5kc1xuTVtPcENvZGVzLk5FV1RdID0gKCkgPT4ge1xuICBBID0gUEMgKyAoUFtQQ11bTkVXVF9BRERSX09GRlNFVF0gYXMgbnVtYmVyKTtcbiAgQSA9IFRIUkVBRF9JTklUKCk7XG4gIE5FV19USFJFQUQoKTtcbiAgT1MucHVzaChSRVMpO1xuICBQQyA9IFBDICsgMTtcbn07XG5cbk1bT3BDb2Rlcy5FTkRUXSA9ICgpID0+IHtcbiAgU1RBVFVTID0gVGhyZWFkU3RhdHVzLlRFUk1JTkFURURcbn07XG5cbi8vIEV4cGVjdHMgdGhyZWFkIGlkIHRvIGJlIG9uIHRvcCBvZiBPU1xuTVtPcENvZGVzLkpPSU5dID0gKCkgPT4ge1xuICBIID0gT1MucG9wKCk7XG4gIEsgPSBJU19USFJFQUQoSCk7XG4gIGlmIChLKSB7XG4gICAgT1MucG9wKCk7IC8vIHBvcCBvdXQgY2xvc3VyZSBsb2FkZWQgYmVmb3JlIGNhbGxpbmcgTkVXVFxuICAgIC8vIEV2ZW4gaWYgam9pbiB0aHJlYWQgaGFzIG5vdCBleGl0ZWQsIHdlIHNob3VsZCBzdGlsbCBpbmNyZW1lbnQgUEMgc2luY2VcbiAgICAvLyBqb2luIGNhbGxlciBzaG91bGQgZXhlY3V0ZSBuZXh0IGluc3RydWN0aW9uIGFmdGVyIGl0IGlzIHVuYmxvY2tlZFxuICAgIFBDID0gUEMgKyAxO1xuICAgIEpPSU5fVEhSRUFEKEhFQVBfR0VUX1RIUkVBRF9JRChIKSk7XG4gICAgQkxPQ0tJTkdfU1lTQ0FMTCA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBFcnJvcihcIkpvaW4gZXhwZWN0cyBhIFRocmVhZCBJZCB0byBiZSBvbiB0b3Agb2YgT1NcIik7XG4gIH1cbn07XG5cbi8vIExvY2sgaWQgb2YgbmV3bHkgY3JlYXRlZCBsb2NrIHdpbGwgYmUgYWxsb2NhdGVkIG9uIHRoZSBoZWFwXG4vLyBBZGRyZXNzIG9mIGxvY2sgaWQgYWxsb2NhdGVkIG9uIGhlYXAgd2lsbCBiZSBvbiB0b3Agb2YgT1MgYWZ0ZXIgTkVXTCBlbmRzXG5NW09wQ29kZXMuTkVXTF0gPSAoKSA9PiB7XG4gIEEgPSBMT0NLX0lOSVQoKTtcbiAgTkVXX0xPQ0soKTtcbiAgT1MucHVzaChSRVMpO1xuICBQQyA9IFBDICsgMTtcbn07XG5cbi8vIEV4cGVjdHMgbG9jayBpZCB0byBiZSBvbiB0b3Agb2YgT1Ncbk1bT3BDb2Rlcy5MT0NLXSA9ICgpID0+IHtcbiAgSCA9IE9TLnBvcCgpO1xuICBLID0gSVNfTE9DSyhIKTtcbiAgaWYgKEspIHtcbiAgICBQQyA9IFBDICsgMTtcbiAgICBMT0NLKEhFQVBfR0VUX0xPQ0tfSUQoSCkpO1xuICAgIEJMT0NLSU5HX1NZU0NBTEwgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRXJyb3IoXCJVbmxvY2sgZXhwZWN0cyBhIExvY2sgSWQgdG8gYmUgb24gdG9wIG9mIE9TXCIpO1xuICB9XG59O1xuXG4vLyBFeHBlY3RzIGxvY2sgaWQgdG8gYmUgb24gdG9wIG9mIE9TXG5NW09wQ29kZXMuVU5MT0NLXSA9ICgpID0+IHtcbiAgSCA9IE9TLnBvcCgpO1xuICBLID0gSVNfTE9DSyhIKTtcbiAgaWYgKEspIHtcbiAgICBVTkxPQ0soSEVBUF9HRVRfTE9DS19JRChIKSk7XG4gICAgUEMgPSBQQyArIDE7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRXJyb3IoXCJVbmxvY2sgZXhwZWN0cyBhIExvY2sgSWQgdG8gYmUgb24gdG9wIG9mIE9TXCIpO1xuICB9XG59O1xuXG5NW09wQ29kZXMuRElTUExBWV0gPSAoKSA9PiB7XG4gIEEgPSBQW1BDXVtDQUxMX0FSSVRZX09GRlNFVF07XG4gIGxldCByZXM6IGFueVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgQTsgaSsrKSB7XG4gICAgcmVzLnB1c2goY29udmVydFRvSnNGb3JtYXQoT1MucG9wKCkpKTtcbiAgfVxuICByZXMgPSByZXMucmV2ZXJzZSgpO1xuICBESVNQTEFZX1BPUlQucG9zdE1lc3NhZ2UocmVzKTtcbiAgY29uc29sZS5sb2coLi4ucmVzKTtcbiAgTkVXX1VOREVGSU5FRCgpO1xuICBPUy5wdXNoKFJFUyk7XG4gIFBDID0gUEMgKyAxO1xufTtcblxuLy8gRXhwZWN0cyBpbmRleCBvZiBmdW5jdGlvbiBpbiBGVU5DIG9mIG5ldyB0aHJlYWQgdG8gYmUgaW4gQVxuLy8gQ29weSBlbnZpcm9ubWVudCBhbmQgaW5zdHJ1Y3Rpb25zIG9mIGN1cnJlbnQgdGhyZWFkXG5mdW5jdGlvbiBUSFJFQURfSU5JVCgpOiBUaHJlYWRJZCB7XG4gIGNvbnN0IGJ1ZiA9IG5ldyBJbnQzMkFycmF5KG5ldyBTaGFyZWRBcnJheUJ1ZmZlcig0KSk7XG4gIFNZU0NBTExfUE9SVC5wb3N0TWVzc2FnZShbU3lzY2FsbC5DTE9ORSwgRk4sIEEsIEVOViwgT1MsIGJ1Zl0pO1xuICBBdG9taWNzLndhaXQoYnVmLCAwLCAwKTtcbiAgcmV0dXJuIGJ1ZlswXTsgLy8gdGhyZWFkIGlkIG9mIG5ldyBjcmVhdGVkIHRocmVhZCBzaG91bGQgbm90IGJlIDBcbn1cblxuZXhwb3J0IGNvbnN0IEpPSU5fVEhSRUFEX0VYSVRFRCA9IDE7XG5leHBvcnQgY29uc3QgSk9JTl9USFJFQURfTk9UX0VYSVRFRCA9IC0xO1xuXG4vLyBCbG9ja2luZyBzeXNjYWxsXG5mdW5jdGlvbiBKT0lOX1RIUkVBRChqb2luSWQ6IFRocmVhZElkKTogdm9pZCB7XG4gIGNvbnN0IHRocmVhZCA9IHNhdmVDb250ZXh0KClcbiAgU1lTQ0FMTF9QT1JULnBvc3RNZXNzYWdlKFtTeXNjYWxsLkpPSU4sIHRocmVhZCwgam9pbklkLCBUT10pO1xufVxuXG5leHBvcnQgY29uc3QgTE9DS19BQ1FVSVJFRCA9IDE7XG5leHBvcnQgY29uc3QgTE9DS19OT1RfQUNRVUlSRUQgPSAtMTtcblxuZnVuY3Rpb24gTE9DS19JTklUKCk6IExvY2tJZCB7XG4gIGNvbnN0IGJ1ZiA9IG5ldyBJbnQzMkFycmF5KG5ldyBTaGFyZWRBcnJheUJ1ZmZlcig0KSk7XG4gIFNZU0NBTExfUE9SVC5wb3N0TWVzc2FnZShbU3lzY2FsbC5MT0NLX0lOSVQsIGJ1Zl0pO1xuICBBdG9taWNzLndhaXQoYnVmLCAwLCAwKTtcbiAgcmV0dXJuIGJ1ZlswXTtcbn1cblxuLy8gQmxvY2tpbmcgc3lzY2FsbFxuZnVuY3Rpb24gTE9DSyhsb2NrSWQ6IExvY2tJZCk6IHZvaWQge1xuICBjb25zdCB0aHJlYWQgPSBzYXZlQ29udGV4dCgpXG4gIFNZU0NBTExfUE9SVC5wb3N0TWVzc2FnZShbU3lzY2FsbC5MT0NLLCB0aHJlYWQsIGxvY2tJZCwgVE9dKTtcbn1cblxuZnVuY3Rpb24gVU5MT0NLKGxvY2tJZDogTG9ja0lkKSB7XG4gIFNZU0NBTExfUE9SVC5wb3N0TWVzc2FnZShbU3lzY2FsbC5VTkxPQ0ssIGxvY2tJZF0pO1xufVxuXG5mdW5jdGlvbiBMT0NLX0RFU1RST1kobG9ja0lkOiBMb2NrSWQpIHtcbiAgU1lTQ0FMTF9QT1JULnBvc3RNZXNzYWdlKFtTeXNjYWxsLkxPQ0tfREVTVFJPWSwgbG9ja0lkXSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0pzRm9ybWF0KGFkZHJlc3M6IG51bWJlcik6IGFueSB7XG4gIGNvbnN0IHRhZyA9IEhFQVBfR0VUX1RBRyhhZGRyZXNzKTtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIEJPT0xfVEFHOlxuICAgICAgcmV0dXJuIElTX1RSVUUoYWRkcmVzcyk7XG4gICAgY2FzZSBOVU1CRVJfVEFHOlxuICAgICAgcmV0dXJuIEhFQVBfR0VUKGFkZHJlc3MgKyBOVU1CRVJfVkFMVUVfU0xPVCk7XG4gICAgY2FzZSBTVFJJTkdfVEFHOlxuICAgICAgcmV0dXJuIEhFQVBfR0VUX1NUUklORyhhZGRyZXNzKTtcbiAgICBjYXNlIFVOREVGSU5FRF9UQUc6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNhc2UgTlVMTF9UQUc6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICBjYXNlIENMT1NVUkVfVEFHOlxuICAgICAgcmV0dXJuIFwiPEZ1bmN0aW9uPlwiO1xuICAgIGNhc2UgTE9DS19UQUc6XG4gICAgICByZXR1cm4gSEVBUF9HRVRfTE9DS19JRChhZGRyZXNzKTtcbiAgICBjYXNlIFRIUkVBRF9UQUc6XG4gICAgICByZXR1cm4gSEVBUF9HRVRfVEhSRUFEX0lEKGFkZHJlc3MpO1xuICAgIGNhc2UgQUREUkVTU19UQUc6XG4gICAgICByZXR1cm4gY29udmVydFRvSnNGb3JtYXQoSEVBUF9BRERSRVNTX0RFUkVGKGFkZHJlc3MpKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGFkZHJlc3M7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJTZXQgPSB7XG4gIEE6IGFueTtcbiAgQjogYW55O1xuICBDOiBhbnk7XG4gIEQ6IGFueTtcbiAgRTogYW55O1xuICBGOiBhbnk7XG4gIEc6IGFueTtcbiAgSDogYW55O1xuICBJOiBhbnk7XG4gIEo6IGFueTtcbiAgSzogYW55O1xufTtcblxuLy8gUmVnaXN0ZXJzXG5sZXQgQTogYW55ID0gMDtcbmxldCBCOiBhbnkgPSAwO1xubGV0IEM6IGFueSA9IDA7XG5sZXQgRDogYW55ID0gMDtcbmxldCBFOiBhbnkgPSAwO1xubGV0IEY6IGFueSA9IDA7XG5sZXQgRzogYW55ID0gMDtcbmxldCBIOiBhbnkgPSAwO1xubGV0IEk6IGFueSA9IDA7XG5sZXQgSjogYW55ID0gMDtcbmxldCBLOiBhbnkgPSAwO1xuXG4vLyBJbmRleCBvZiBlbnRyeSBwb2ludCBmdW5jdGlvbiBvZiBwcm9ncmFtXG5sZXQgRU5UUlk6IG51bWJlcjtcbi8vIExpc3Qgb2YgZnVuY3Rpb25zXG5sZXQgRlVOQzogUlZNRnVuY3Rpb25bXTtcbi8vIEluZGV4IG9mIGV4ZWN1dGluZyBmdW5jdGlvblxubGV0IEZOOiBudW1iZXI7XG4vLyBJbnN0cnVjdGlvbnMgdG8gZXhlY3V0ZVxubGV0IFA6IEluc3RydWN0aW9uW107XG4vLyBQcm9ncmFtIGNvdW50ZXI6IGluZGV4IG9mIE5FWFQgaW5zdHJ1Y3Rpb24gaW4gUCB0byBleGVjdXRlXG5sZXQgUEM6IG51bWJlciA9IDA7XG4vLyBBZGRyZXNzIG9mIGVudmlyb25tZW50IGluIGhlYXBcbmxldCBFTlYgPSAtMTtcbi8vIE9wZXJhbmQgc3RhY2sgKEFycmF5IG9mIGFkZHJlc3Nlcywgd29yZC1lbmNvZGVkIGxpdGVyYWxzLCBudW1iZXJzKVxubGV0IE9TOiBhbnlbXSA9IFtdO1xuLy8gQ2FsbCBzdGFjayAoQXJyYXkgb2YgYWRkcmVzc2VzKVxubGV0IFJUUzogYW55W10gPSBbXTtcblxubGV0IFNUQVRVUzogVGhyZWFkU3RhdHVzID0gVGhyZWFkU3RhdHVzLlJVTk5JTkc7XG5sZXQgQkxPQ0tJTkdfU1lTQ0FMTDogYm9vbGVhbiA9IGZhbHNlO1xubGV0IFRIUkVBRElEOiBUaHJlYWRJZDtcblxuY29uc3QgSEVBUF9EQVRBVklFV19JRFggPSAwO1xuY29uc3QgRlJFRV9VSU5UMzJfQVJSX0lEWCA9IDE7XG5jb25zdCBQUk9HUkFNX0lEWCA9IDI7XG5cbmNvbnN0IFRIUkVBRF9QT1JUX0lEWCA9IDA7XG5jb25zdCBTWVNDQUxMX1BPUlRfSURYID0gMTtcbmNvbnN0IERJU1BMQVlfUE9SVF9JRFggPSAyO1xuXG5jb25zdCBUSFJFQURfSURYID0gMDtcbmNvbnN0IFRJTUVfUVVBTlRBX0lEWCA9IDE7XG5cbi8vIFdvcmtlciB3aWxsIHJlY2VpdmUgdGhyZWFkcyB0byBydW4gYW5kXG4vLyBzZW5kIHRocmVhZHMgYmFjayB0byB2bSB0aHJvdWdoIHRoaXMgcG9ydFxubGV0IFRIUkVBRF9QT1JUOiBNZXNzYWdlUG9ydDtcblxuLy8gV29ya2VyIHdpbGwgc2VuZCBzeXNjYWxsIHJlcXVlc3RzIHRocm91Z2ggdGhpcyBwb3J0XG5sZXQgU1lTQ0FMTF9QT1JUOiBNZXNzYWdlUG9ydDtcblxuLy8gV29ya2VyIHdpbGwgc2VuZCBzdHJpbmdzIHRvIGJlIGRpc3BsYXllZFxubGV0IERJU1BMQVlfUE9SVDogTWVzc2FnZVBvcnQ7XG5cbi8vIEZpcnN0IG1lc3NhZ2UgdG8gd29ya2VyXG5zZWxmLm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gIC8vIG1lc3NhZ2UgZGF0YSBzaG91bGQgY29udGFpbiBoZWFwIGRhdGF2aWV3IGFuZCBmcmVlIHVpbnQzMmFycmF5XG4gIGNvbnN0IGRhdGEgPSBtZXNzYWdlLmRhdGE7XG4gIGNvbnN0IHBvcnRzID0gbWVzc2FnZS5wb3J0cztcblxuICBJTklUSUFMSVpFKFxuICAgIGRhdGFbSEVBUF9EQVRBVklFV19JRFhdLFxuICAgIGRhdGFbRlJFRV9VSU5UMzJfQVJSX0lEWF0sXG4gICAgZGF0YVtQUk9HUkFNX0lEWF0sXG4gICAgcG9ydHNbVEhSRUFEX1BPUlRfSURYXSxcbiAgICBwb3J0c1tTWVNDQUxMX1BPUlRfSURYXSxcbiAgICBwb3J0c1tESVNQTEFZX1BPUlRfSURYXSxcbiAgKTtcbn07XG5cbmZ1bmN0aW9uIElOSVRJQUxJWkUoXG4gIGhlYXA6IERhdGFWaWV3LFxuICBmcmVlOiBVaW50MzJBcnJheSxcbiAgcDogUHJvZ3JhbSxcbiAgdGhyZWFkX3BvcnQ6IE1lc3NhZ2VQb3J0LFxuICBzeXNjYWxsX3BvcnQ6IE1lc3NhZ2VQb3J0LFxuICBkaXNwbGF5X3BvcnQ6IE1lc3NhZ2VQb3J0LFxuKSB7XG4gIC8vIEluaXRpYWxpemUgaGVhcFxuICBIRUFQID0gaGVhcDtcbiAgRlJFRSA9IGZyZWU7XG4gIFJFUyA9IC1JbmZpbml0eTtcblxuICAvLyBJbml0aWFsaXplIGNvbnN0YW50c1xuICBORVdfVU5BU1NJR05FRCgpO1xuICBVTkFTU0lHTkVEID0gUkVTO1xuXG4gIC8vIEluaXRpYWxpemUgcG9ydHMgZm9yIG1lc3NhZ2UgcGFzc2luZyBiZXR3ZWVuIHdvcmtlciBhbmQgdm1cbiAgVEhSRUFEX1BPUlQgPSB0aHJlYWRfcG9ydDtcbiAgU1lTQ0FMTF9QT1JUID0gc3lzY2FsbF9wb3J0O1xuICBESVNQTEFZX1BPUlQgPSBkaXNwbGF5X3BvcnQ7XG5cbiAgRU5UUlkgPSBwWzBdO1xuICBGVU5DID0gcFsxXTtcblxuICAvLyBTZXQgdXAgbWVzc2FnZSBoYW5kbGVyIGZvciBhY2NlcHRpbmcgdGhyZWFkcyB0byBydW5cbiAgVEhSRUFEX1BPUlQub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBkYXRhID0gbWVzc2FnZS5kYXRhO1xuICAgIHJ1blRocmVhZChkYXRhW1RIUkVBRF9JRFhdLCBkYXRhW1RJTUVfUVVBTlRBX0lEWF0pO1xuICB9O1xufVxuXG5sZXQgVE86IG51bWJlcjtcblxuZnVuY3Rpb24gcnVuVGhyZWFkKHRocmVhZDogVGhyZWFkLCB0aW1lUXVhbnRhOiBudW1iZXIpOiB2b2lkIHtcbiAgQkxPQ0tJTkdfU1lTQ0FMTCA9IGZhbHNlXG5cbiAgbG9hZENvbnRleHQodGhyZWFkKTtcblxuICAvLyBpZiB0aHJlYWQgZmlyc3QgdGltZSBydW5uaW5nXG4gIGlmIChFTlYgPT09IC0xKSB7XG4gICAgQSA9IDE7XG4gICAgTkVXX0VOVklST05NRU5UKCk7XG4gICAgRU5WID0gUkVTO1xuICAgIEEgPSBGVU5DLmxlbmd0aCAtIDE7XG4gICAgTkVXX0ZSQU1FKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBGVU5DLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgSEVBUF9TRVRfQ0hJTEQoUkVTLCBpLCBVTkFTU0lHTkVEKTtcbiAgICB9XG4gICAgRU5WID0gSEVBUF9FTlZfRVhURU5EKFJFUywgRU5WKTtcbiAgfVxuXG4gIFRPID0gdGltZVF1YW50YTtcbiAgLy8gcnVuIHRpbWVRdWFudGEgbnVtYmVyIG9mIGluc3RydWN0aW9ucyBvciB0aWxsIG5vIG1vcmUgaW5zdHJ1Y3Rpb25zXG4gIC8vIG9yIHRpbGwgdGhyZWFkIGdldHMgYmxvY2tlZFxuICB3aGlsZSAoVE8gPiAwICYmIChTVEFUVVMgIT09IFRocmVhZFN0YXR1cy5URVJNSU5BVEVEKSAmJiAhQkxPQ0tJTkdfU1lTQ0FMTCkge1xuICAgIFJVTl9JTlNUUlVDVElPTigpO1xuICAgIFRPID0gVE8gLSAxO1xuICB9XG5cbiAgaWYgKCFCTE9DS0lOR19TWVNDQUxMKSB7XG4gICAgY29uc3QgdGhyZWFkID0gc2F2ZUNvbnRleHQoKVxuICAgIGlmICh0aHJlYWQuc3RhdHVzID09PSBUaHJlYWRTdGF0dXMuUlVOTklORykge1xuICAgICAgdGhyZWFkLnN0YXR1cyA9IFRocmVhZFN0YXR1cy5SRUFEWVxuICAgIH1cbiAgICBUSFJFQURfUE9SVC5wb3N0TWVzc2FnZShbdGhyZWFkXSlcbiAgfVxufVxuXG5jb25zdCBJTlNfT1BDT0RFX09GRlNFVCA9IDA7XG5cbmZ1bmN0aW9uIFJVTl9JTlNUUlVDVElPTigpIHtcbiAgLy8gQXR0ZW1wdGluZyB0byByZXR1cm4gZnJvbSBlbnRyeSBwb2ludCBmdW5jdGlvbiwgZW5kIG9mIHByb2dyYW1cbiAgaWYgKEZOID09PSBFTlRSWSAmJiBQW1BDXVtJTlNfT1BDT0RFX09GRlNFVF0gPT09IE9wQ29kZXMuUkVURykge1xuICAgIFNUQVRVUyA9IFRocmVhZFN0YXR1cy5URVJNSU5BVEVEXG4gIH0gZWxzZSB7XG4gICAgLy8gVGhlIG1pY3JvY29kZSBzaG91bGQgaW5jcmVtZW50IFBDXG4gICAgTVtQW1BDXVtJTlNfT1BDT0RFX09GRlNFVF1dKCk7XG4gIH1cbn1cblxuLy8gQ29udGV4dCBvZiB0aHJlYWQgY29uc2lzdCBvZiBlbnZpcm9ubWVudCwgb3BlcmFuZCBzdGFjayBhbmQgY2FsbCBzdGFja1xuLy8gUG9zc2libGUgdG8gYWRkIGZpbGUgZGVzY3JpcHRvcnMgYW5kIHNpZ25hbCBoYW5kbGVyc1xuZnVuY3Rpb24gbG9hZENvbnRleHQodGhyZWFkOiBUaHJlYWQpOiB2b2lkIHtcbiAgLy8gbG9hZCByZWdpc3RlciB2YWx1ZXMgb2YgdGhyZWFkIHRvIHdvcmtlclxuICBBID0gdGhyZWFkLlJTLkE7XG4gIEIgPSB0aHJlYWQuUlMuQjtcbiAgQyA9IHRocmVhZC5SUy5DO1xuICBEID0gdGhyZWFkLlJTLkQ7XG4gIEUgPSB0aHJlYWQuUlMuRTtcbiAgRiA9IHRocmVhZC5SUy5GO1xuICBHID0gdGhyZWFkLlJTLkc7XG4gIEggPSB0aHJlYWQuUlMuSDtcbiAgSSA9IHRocmVhZC5SUy5JO1xuICBKID0gdGhyZWFkLlJTLko7XG4gIEsgPSB0aHJlYWQuUlMuSztcblxuICBQID0gRlVOQ1t0aHJlYWQuRk5dW0ZVTkNfQ09ERV9PRkZTRVRdO1xuICBGTiA9IHRocmVhZC5GTjtcbiAgUEMgPSB0aHJlYWQuUEM7XG4gIEVOViA9IHRocmVhZC5FTlY7XG4gIE9TID0gdGhyZWFkLk9TO1xuICBSVFMgPSB0aHJlYWQuUlRTO1xuXG4gIGlmICh0aHJlYWQuc3RhdHVzICE9PSBUaHJlYWRTdGF0dXMuUkVBRFkpIHtcbiAgICB0aHJvdyBFcnJvcignd29ya2VyIHJlY2VpdmVkIGEgdGhyZWFkIHRoYXQgaXMgbm90IHJlYWR5JylcbiAgfVxuICBTVEFUVVMgPSBUaHJlYWRTdGF0dXMuUlVOTklORztcbiAgVEhSRUFESUQgPSB0aHJlYWQuSUQ7XG59XG5cbmZ1bmN0aW9uIHNhdmVDb250ZXh0KCk6IFRocmVhZCB7XG4gIHJldHVybiB7XG4gICAgSUQ6IFRIUkVBRElELFxuICAgIEZOOiBGTixcbiAgICBQQzogUEMsXG4gICAgRU5WOiBFTlYsXG4gICAgT1M6IE9TLFxuICAgIFJUUzogUlRTLFxuICAgIFJTOiB7XG4gICAgICBBOiBBLFxuICAgICAgQjogQixcbiAgICAgIEM6IEMsXG4gICAgICBEOiBELFxuICAgICAgRTogRSxcbiAgICAgIEY6IEYsXG4gICAgICBHOiBHLFxuICAgICAgSDogSCxcbiAgICAgIEk6IEksXG4gICAgICBKOiBKLFxuICAgICAgSzogSyxcbiAgICB9LFxuICAgIHN0YXR1czogU1RBVFVTXG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmJ1bmRsZS5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IHNlbGYubG9jYXRpb24gKyBcIlwiO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuLy8gXCIxXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInNyY192bV92bV90cy1zcmNfdm1fd29ya2VyX3RzXCI6IDFcbn07XG5cbi8vIG5vIGNodW5rIGluc3RhbGwgZnVuY3Rpb24gbmVlZGVkXG4vLyBubyBjaHVuayBsb2FkaW5nXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy92bS93b3JrZXIudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=