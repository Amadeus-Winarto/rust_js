import { ThreadStatus, Thread, ThreadId } from './threads'
import { Instruction, Offset, Address, Argument, Program, RVMFunction } from './compiler'
import { OpCodes } from './opcode'
import { FUNC_CODE_OFFSET, LockId, Syscall } from './vm'

export type WorkerId = number

function PEEK(array: any[], idx: number): any {
  return array.slice(-1 - idx)[0]
}

/* *************************
 * HEAP
 * *************************/

// Let sharedarraybuffer to be local to worker for now
// Should be created in vm and sent to worker
let HEAP: DataView

// FREE is a Uint32Array with a SharedArrayBuffer underneath
// This allows FREE to be atomically incremented across all workers
let FREE: Uint32Array
let RES: number

const SIZE_OFFSET = 5
const WORD_SIZE = 8 // number of bytes in one word

// get and set a WORD in heap at given address
function HEAP_GET(address: number): number {
  return HEAP.getFloat64(address * WORD_SIZE)
}

function HEAP_SET(address: number, value: number): void {
  HEAP.setFloat64(address * WORD_SIZE, value)
}

// child index starts at 0
function HEAP_GET_CHILD(address: number, child_index: number): number {
  return HEAP_GET(address + 1 + child_index)
}

function HEAP_SET_CHILD(address: number, child_index: number, value: number): void {
  return HEAP_SET(address + 1 + child_index, value)
}

function HEAP_GET_TAG(address: number): number {
  return HEAP.getUint8(address * WORD_SIZE)
}

function HEAP_GET_SIZE(address: number): number {
  return HEAP.getUint16(address * WORD_SIZE + SIZE_OFFSET)
}

function HEAP_GET_NUM_CHILD(address: number): number {
  return HEAP_GET_TAG(address) === NUMBER_TAG
    ? 0
    : HEAP_GET_SIZE(address) - 1
}

function HEAP_SET_BYTE_AT_OFFSET(address: number, offset: number, value: number): void {
  HEAP.setUint8(address * WORD_SIZE + offset, value)
}

function HEAP_GET_BYTE_AT_OFFSET(address: number, offset: number): number {
  return HEAP.getUint8(address * WORD_SIZE + offset)
}

function HEAP_SET_2_BYTES_AT_OFFSET(address: number, offset: number, value: number): void {
  HEAP.setUint16(address * WORD_SIZE + offset, value)
}

function HEAP_GET_2_BYTES_AT_OFFSET(address: number, offset: number): number {
  return HEAP.getUint16(address * WORD_SIZE + offset)
}

// NEW expects tag in A and size (# of words) in B
// Allocates B number of words on the heap
// and marks the first word with a 1-byte tag.
// the last two bytes of the first word indicate the
// number of children (addresses) that follow the tag word
function NEW() {
  K = Atomics.add(FREE, 0, B)
  // Check if out of memory
  if ((K + B) * WORD_SIZE > HEAP.byteLength) {
    throw new Error("OUT OF MEMORY")
  }
  HEAP.setUint8(K * WORD_SIZE, A)
  HEAP.setUint16(K * WORD_SIZE + SIZE_OFFSET, B)
  RES = K
}

// bool nodes layout (1 word)
//
// 0: [1 byte tag, 4 bytes unused, 2 bytes #children, 1 byte value]

const BOOL_TAG = 1
const BOOL_SIZE = 1

// changes A, B, C, expects boolean value in A
// 0 for false, 1 for true
function NEW_BOOL() {
  C = Number(A) // Convert boolean value to number
  A = BOOL_TAG
  B = BOOL_SIZE
  NEW()
  HEAP_SET_BYTE_AT_OFFSET(RES, 7, C)
}

function IS_BOOL(address: number): boolean {
  return HEAP_GET_TAG(address) === BOOL_TAG
}

function IS_TRUE(address: number): boolean {
  return IS_BOOL(address) && HEAP_GET_BYTE_AT_OFFSET(address, 7) === 1
}

function IS_FALSE(address: number): boolean {
  return IS_BOOL(address) && HEAP_GET_BYTE_AT_OFFSET(address, 7) === 0
}

// number nodes layout (2 words)
//
// 0: [1 byte tag, 4 bytes unused, 2 bytes #children, 1 byte unused]
// 1: value
// note: #children = 0

const NUMBER_TAG = 2
const NUMBER_SIZE = 2
const NUMBER_VALUE_SLOT = 1

// changes A, B, C, expects number in A
function NEW_NUMBER() {
  C = A
  A = NUMBER_TAG
  B = NUMBER_SIZE
  NEW() // RES is now index of free node in HEAP
  HEAP_SET(RES + NUMBER_VALUE_SLOT, C)
}

function IS_NUMBER(address: number): boolean {
  return HEAP_GET_TAG(address) === NUMBER_TAG
}

// string nodes layout (2 + n words)
// n is the number of words needed to store A in encoded form
//
// 0: [1 byte tag, 4 bytes unused, 2 bytes #children, 1 byte unused]
// 1: length of string (number of bytes)
// followed by characters in string encoded into Uint8Array

const STRING_TAG = 3
const ENCODER = new TextEncoder();
const DECODER = new TextDecoder();

// changes A, B, C, expects string literal in A
function NEW_STRING() {
  const view = ENCODER.encode(A)
  C = ENCODER.encode(A)
  A = STRING_TAG
  B = Math.ceil(C.length / WORD_SIZE) + 2
  NEW()
  // first child is number of bytes
  HEAP_SET_CHILD(RES, 0, C.length)
  // second child onwards are characters of string encoded in Uint8
  for (let i = 0; i < C.length; i++) {
    HEAP_SET_BYTE_AT_OFFSET(RES + 2, i, C[i])
  }
}

function IS_STRING(address: number): boolean {
  return HEAP_GET_TAG(address) === STRING_TAG
}

function HEAP_GET_STRING(address: number): string {
  if (!IS_STRING(address)) {
    throw Error("Called HEAP_GET_STRING on an object that is not a string")
  }
  // number of bytes
  B = HEAP_GET_CHILD(address, 0)
  const view: Uint8Array = new Uint8Array(new ArrayBuffer(B))
  for (let i = 0; i < B; i++) {
    view[i] = HEAP_GET_BYTE_AT_OFFSET(address + 2, i)
  }
  return DECODER.decode(view)
}

// array nodes layout (2 + n words)
// n is the number of elements in array
//
// 0: [1 byte tag, 4 bytes unused, 2 bytes #children, 1 byte unused]
// 1: number of elements in array
// followed by the addresses of elements in array

const ARRAY_TAG = 4

// changes A, B, C, expects A to be an array of addresses
// of elements in the array to be created
function NEW_ARRAY() {
  C = A
  A = ARRAY_TAG
  B = C.length + 2
  NEW()
  // first child is number of elements in array
  HEAP_SET_CHILD(RES, 0, C.length)
  // second child onwards are addresses of elements
  for (let i = 0; i < C.length; i++) {
    HEAP_SET_CHILD(RES, i + 1, C[i])
  }
}

function IS_ARRAY(address: number): boolean {
  return HEAP_GET_TAG(address) === ARRAY_TAG
}

// undefined nodes layout (1 word)
//
// 0: [1 byte tag, 4 bytes unused, 2 bytes #children, 1 byte unused]

const UNDEFINED_TAG = 5
const UNDEFINED_SIZE = 1

// changes A, B
function NEW_UNDEFINED() {
  A = UNDEFINED_TAG
  B = UNDEFINED_SIZE
  NEW()
}

function IS_UNDEFINED(address: number): boolean {
  return HEAP_GET_TAG(address) === UNDEFINED_TAG
}

// null nodes layout (1 word)
//
// 0: [1 byte tag, 4 bytes unused, 2 bytes #children, 1 byte unused]

const NULL_TAG = 6
const NULL_SIZE = 1

// changes A, B
function NEW_NULL() {
  A = NULL_TAG
  B = NULL_SIZE
  NEW()
}

function IS_NULL(address: number): boolean {
  return HEAP_GET_TAG(address) === NULL_TAG
}

// closure nodes layout (2 words)
// 0: [1 byte tag, 1 byte unused, 2 bytes index of function in FUNC, 1 bytes unused,
// 2 bytes #children, 1 bytes unused]
// 1: address of env

const CLOSURE_TAG = 7
const CLOSURE_SIZE = 2

// changes A, B, C, expects A = [index of function in FUNC, env]
function NEW_CLOSURE() {
  C = A
  A = CLOSURE_TAG
  B = CLOSURE_SIZE
  NEW()
  HEAP_SET_2_BYTES_AT_OFFSET(RES, 2, C[0])
  HEAP_SET_CHILD(RES, 0, C[1])
}

function IS_CLOSURE(address: number): boolean {
  return HEAP_GET_TAG(address) === CLOSURE_TAG
}

function HEAP_GET_CLOSURE_P(address: number): Instruction[] {
  return FUNC[HEAP_GET_2_BYTES_AT_OFFSET(address, 2)][FUNC_CODE_OFFSET]
}

function HEAP_GET_CLOSURE_FN(address: number): number {
  return HEAP_GET_2_BYTES_AT_OFFSET(address, 2)
}

function HEAP_GET_CLOSURE_ENV(address: number): number {
  return HEAP_GET_CHILD(address, 0)
}

// block frame nodes layout (2 words)
// 0: [1 byte tag, 4 bytes unused, 2 bytes #children, 1 byte unused]
// 1: address of env

const BLOCK_FRAME_TAG = 8
const BLOCK_FRAME_SIZE = 2

// changes A, B, C, expects address of env in A
function NEW_BLOCK_FRAME() {
  C = A
  A = BLOCK_FRAME_TAG
  B = BLOCK_FRAME_SIZE
  NEW()
  HEAP_SET_CHILD(RES, 0, C)
}

function IS_BLOCK_FRAME(address: number): boolean {
  return HEAP_GET_TAG(address) === BLOCK_FRAME_TAG
}

function HEAP_GET_BLOCK_FRAME_ENV(address: number): number {
  return HEAP_GET_CHILD(address, 0);
}

// call frame nodes layout (2 words)
// 0: [1 byte tag, 2 bytes pc, 2 bytes index of function in FUNC
// 2 bytes #children, 1 byte unused]
// 1: address of env

const CALL_FRAME_TAG = 9
const CALL_FRAME_SIZE = 2

// changes A, B, C, expects A = [env, PC, index of function in FUNC]
function NEW_CALL_FRAME() {
  C = A
  A = CALL_FRAME_TAG
  B = CALL_FRAME_SIZE
  NEW()
  HEAP_SET_CHILD(RES, 0, C[0])
  HEAP_SET_2_BYTES_AT_OFFSET(RES, 1, C[1])
  HEAP_SET_2_BYTES_AT_OFFSET(RES, 3, C[2])
}

function IS_CALL_FRAME(address: number): boolean {
  return HEAP_GET_TAG(address) === CALL_FRAME_TAG
}

function HEAP_GET_CALL_FRAME_ENV(address: number): number {
  return HEAP_GET_CHILD(address, 0)
}

function HEAP_GET_CALL_FRAME_PC(address: number): number {
  return HEAP_GET_2_BYTES_AT_OFFSET(address, 1)
}

function HEAP_GET_CALL_FRAME_P(address: number): Instruction[] {
  return FUNC[HEAP_GET_2_BYTES_AT_OFFSET(address, 3)][FUNC_CODE_OFFSET]
}

function HEAP_GET_CALL_FRAME_FN(address: number): number {
  return HEAP_GET_2_BYTES_AT_OFFSET(address, 3)
}

// environment frame nodes layout (1 + n words)
// n is the number of values in environment frame
// 0: [1 byte tag, 4 bytes unused, 2 bytes #children, 1 byte unused]
// followed by the addresses of values in environment frame

const FRAME_TAG = 10

// changes A, B, C, expects number of values in A
function NEW_FRAME() {
  C = A
  A = FRAME_TAG
  B = 1 + C
  NEW()
}

function IS_FRAME(address: number): boolean {
  return HEAP_GET_TAG(address) === FRAME_TAG
}

// environment nodes layout (1 + n words)
// n is the number of frames
// 0: [1 byte tag, 4 bytes unused, 2 bytes #children, 1 byte unused]
// followed by the addresses of its frames

const ENVIRONMENT_TAG = 11

// changes A, B, C, expects number of frames in A
function NEW_ENVIRONMENT() {
  C = A
  A = ENVIRONMENT_TAG
  B = 1 + C
  NEW()
}

function HEAP_GET_ENV_VALUE(address: number, position: [number, number]): number {
  const [frame_index, value_index] = position
  const frame_address = HEAP_GET_CHILD(address, frame_index)
  return HEAP_GET_CHILD(frame_address, value_index)
}

function HEAP_SET_ENV_VALUE(address: number, position: [number, number], value: number): void {
  const [frame_index, value_index] = position
  const frame_address = HEAP_GET_CHILD(address, frame_index)
  HEAP_SET_CHILD(frame_address, value_index, value)
}

// Return address of new environment extended with frame_address
function HEAP_ENV_EXTEND(frame_address: number, env_address: number): number {
  const old_size = HEAP_GET_SIZE(env_address)
  A = old_size
  NEW_ENVIRONMENT()
  // copy addresses of frames over to new environment
  for (let i = 0; i < old_size - 1; i++) {
    HEAP_SET_CHILD(RES, i, HEAP_GET_CHILD(env_address, i))
  }
  HEAP_SET_CHILD(RES, old_size - 1, frame_address)
  return RES
}

const UNASSIGNED_TAG = 12
const UNASSIGNED_SIZE = 1

// changes A, B
function NEW_UNASSIGNED() {
  A = UNASSIGNED_TAG
  B = UNASSIGNED_SIZE
  NEW()
}

function IS_UNASSIGNED(address: number): boolean {
  return HEAP_GET_TAG(address) === UNASSIGNED_TAG
}

let UNASSIGNED: number

// lock nodes layout (2 words)
//
// 0: [1 byte tag, 4 bytes unused, 2 bytes #children, 1 byte unused]
// 1: lock id

const LOCK_TAG = 13
const LOCK_SIZE = 2
const LOCK_ID_SLOT = 1

// changes A, B, C, expects lock id in A
function NEW_LOCK() {
  C = A
  A = LOCK_TAG
  B = LOCK_SIZE
  NEW()
  HEAP_SET(RES + LOCK_ID_SLOT, C)
}

function IS_LOCK(address: number): boolean {
  return HEAP_GET_TAG(address) === LOCK_TAG
}

function HEAP_GET_LOCK_ID(address: number): LockId {
  return HEAP_GET_CHILD(address, 0)
}

// thread nodes layout (2 words)
// 
// 0: [1 byte tag, 4 bytes unused, 2 bytes #children, 1 byte unused]
// 1: thread id

const THREAD_TAG = 14
const THREAD_SIZE = 2
const THREAD_ID_SLOT = 1

// changes A, B, C, expects thread id in A
function NEW_THREAD() {
  C = A
  A = THREAD_TAG
  B = THREAD_SIZE
  NEW()
  HEAP_SET(RES + THREAD_ID_SLOT, C)
}

function IS_THREAD(address: number): boolean {
  return HEAP_GET_TAG(address) === THREAD_TAG
}

function HEAP_GET_THREAD_ID(address: number): ThreadId {
  return HEAP_GET_CHILD(address, 0)
}

// address nodes layout (2 words)
//
// 0: [1 byte tag, 2 bytes value index of address, 2 bytes frame
// index of adddress, 2 bytes #children, 1 byte unused]
// 1: address

const ADDRESS_TAG = 15
const ADDRESS_SIZE = 2

// changes A, B, C, expects A = [value index, frame index, address]
function NEW_ADDRESS() {
  C = A
  A = ADDRESS_TAG
  B = ADDRESS_SIZE
  NEW()
  HEAP_SET_CHILD(RES, 0, C[2])
  HEAP_SET_2_BYTES_AT_OFFSET(RES, 1, C[0])
  HEAP_SET_2_BYTES_AT_OFFSET(RES, 3, C[1])
}

function IS_ADDRESS(address: number): boolean {
  return HEAP_GET_TAG(address) === ADDRESS_TAG
}

function HEAP_GET_ADDRESS_VALUE_IDX(address: number): number {
  return HEAP_GET_2_BYTES_AT_OFFSET(address, 1)
}

function HEAP_GET_ADDRESS_FRAME_IDX(address: number): number {
  return HEAP_GET_2_BYTES_AT_OFFSET(address, 3)
}

function HEAP_GET_ADDRESS(address: number): number {
  return HEAP_GET_CHILD(address, 0)
}

/* *************************
 * Virtual Machine
 * *************************/

const GOTO_PC_OFFSET = 1
const LDCI_VALUE_OFFSET = 1
const LDCF32_VALUE_OFFSET = 1
const LDCF64_VALUE_OFFSET = 1
const LGCS_VALUE_OFFSET = 1
// const NEWC_ARITY_OFFSET = 1
// PC here refers to address of start of function's body
const NEWC_ADDR_OFFSET = 1
const LD_ST_VALUE_IDX_OFFSET = 1
const LD_ST_FRAME_IDX_OFFSET = 2
// number of locals in block should be first argument of instruction
const NUM_LOCALS_OFFSET = 1
const BR_OFFSET = 1
const CALL_ARITY_OFFSET = 1
const NEWT_ADDR_OFFSET = 1

const M: (() => void)[] = []

M[OpCodes.NOP] = () => {
  PC = PC + 1
}

// Relative addressing
M[OpCodes.GOTO] = () => {
  PC = PC + (P[PC][GOTO_PC_OFFSET] as number)
}

M[OpCodes.LGCI] = () => {
  A = P[PC][LDCI_VALUE_OFFSET]
  NEW_NUMBER()
  OS.push(RES)
  PC = PC + 1
}

M[OpCodes.LGCF32] = () => {
  A = P[PC][LDCF32_VALUE_OFFSET]
  NEW_NUMBER()
  OS.push(RES)
  PC = PC + 1
}

M[OpCodes.LGCF64] = () => {
  A = P[PC][LDCF64_VALUE_OFFSET]
  NEW_NUMBER()
  OS.push(RES)
  PC = PC + 1
}

// load constant false
M[OpCodes.LGCB0] = () => {
  A = false
  NEW_BOOL()
  OS.push(RES)
  PC = PC + 1
}

// load constant true
M[OpCodes.LGCB1] = () => {
  A = true
  NEW_BOOL()
  OS.push(RES)
  PC = PC + 1
}

// load constant undefined
M[OpCodes.LGCU] = () => {
  NEW_UNDEFINED()
  OS.push(RES)
  PC = PC + 1
}

// load constant null
M[OpCodes.LGCN] = () => {
  NEW_NULL()
  OS.push(RES)
  PC = PC + 1
}

M[OpCodes.LGCS] = () => {
  // string literal should be in A
  A = P[PC][LGCS_VALUE_OFFSET]
  NEW_STRING()
  OS.push(RES)
  PC = PC + 1
}

M[OpCodes.ADDG] = () => {
  I = OS.pop()
  G = OS.pop()
  if (IS_NUMBER(I) && IS_NUMBER(G)) {
    A = HEAP_GET(I + NUMBER_VALUE_SLOT)
    A = HEAP_GET(G + NUMBER_VALUE_SLOT) + A
    NEW_NUMBER()
  } else if (IS_STRING(I) && IS_STRING(G)) {
    A = HEAP_GET_STRING(I)
    A = HEAP_GET_STRING(G) + A
    NEW_STRING()
  } else {
    throw Error("Not both arguments to add.g are of type number or type string")
  }
  OS.push(RES)
  PC = PC + 1
}

// number below top of OS - number on top of OS
M[OpCodes.SUBG] = () => {
  I = OS.pop() // address of first number
  G = OS.pop() // address of second number
  // Check if both are indeed numbers
  F = IS_NUMBER(I) && IS_NUMBER(G)
  if (F) {
    A = HEAP_GET(I + NUMBER_VALUE_SLOT)
    A = HEAP_GET(G + NUMBER_VALUE_SLOT) - A
    NEW_NUMBER()
    OS.push(RES)
    PC = PC + 1
  } else {
    throw Error("Not both arguments to sub.g are of type number")
  }
}

M[OpCodes.MULG] = () => {
  I = OS.pop() // address of first number
  G = OS.pop() // address of second number
  // Check if both are indeed numbers
  F = IS_NUMBER(I) && IS_NUMBER(G)
  if (F) {
    A = HEAP_GET(I + NUMBER_VALUE_SLOT)
    A = HEAP_GET(G + NUMBER_VALUE_SLOT) * A
    NEW_NUMBER()
    OS.push(RES)
    PC = PC + 1
  } else {
    throw Error("Not both arguments to mul.g are of type number")
  }
}

// number below top of OS / number on top of OS 
M[OpCodes.DIVG] = () => {
  I = OS.pop() // address of first number
  G = OS.pop() // address of second number
  // Check if both are indeed numbers
  F = IS_NUMBER(I) && IS_NUMBER(G)
  if (F) {
    A = HEAP_GET(I + NUMBER_VALUE_SLOT)
    A = HEAP_GET(G + NUMBER_VALUE_SLOT) / A
    NEW_NUMBER()
    OS.push(RES)
    PC = PC + 1
  } else {
    throw Error("Not both arguments to div.g are of type number")
  }
}

// number below top of OS % number on top of OS 
M[OpCodes.MODG] = () => {
  I = OS.pop() // address of first number
  G = OS.pop() // address of second number
  // Check if both are indeed numbers
  F = IS_NUMBER(I) && IS_NUMBER(G)
  if (F) {
    A = HEAP_GET(I + NUMBER_VALUE_SLOT)
    A = HEAP_GET(G + NUMBER_VALUE_SLOT) % A
    NEW_NUMBER()
    OS.push(RES)
    PC = PC + 1
  } else {
    throw Error("Not both arguments to mod.g are of type number")
  }
}

M[OpCodes.NEGG] = () => {
  I = OS.pop()
  F = IS_NUMBER(I)
  if (F) {
    A = -HEAP_GET(I + NUMBER_VALUE_SLOT)
    NEW_NUMBER()
    OS.push(RES)
    PC = PC + 1
  } else {
    throw Error("Argument to neg.g is not of type number")
  }
}

M[OpCodes.NOTG] = () => {
  I = OS.pop()
  F = IS_BOOL(I)
  if (F) {
    if (IS_TRUE(I)) {
      A = false
      NEW_BOOL()
    } else {
      A = true
      NEW_BOOL()
    }
    OS.push(RES)
    PC = PC + 1
  } else {
    throw Error("Argument to not.g is not of type boolean")
  }
}

// Assume both operands are strings or numbers
// number/string below top of OS < number/string on top of OS
M[OpCodes.LTG] = () => {
  I = OS.pop()
  G = OS.pop()
  if (IS_NUMBER(I) && IS_NUMBER(G)) {
    A = HEAP_GET(I + NUMBER_VALUE_SLOT)
    A = HEAP_GET(G + NUMBER_VALUE_SLOT) < A
  } else if (IS_STRING(I) && IS_STRING(G)) {
    A = HEAP_GET_STRING(I)
    A = HEAP_GET_STRING(G) < A
  } else {
    throw Error("Not both arguments to lt.g are of type number or type string")
  }
  NEW_BOOL()
  OS.push(RES)
  PC = PC + 1
}

// number/string below top of OS > number/string on top of OS
M[OpCodes.GTG] = () => {
  I = OS.pop()
  G = OS.pop()
  if (IS_NUMBER(I) && IS_NUMBER(G)) {
    A = HEAP_GET(I + NUMBER_VALUE_SLOT)
    A = HEAP_GET(G + NUMBER_VALUE_SLOT) > A
  } else if (IS_STRING(I) && IS_STRING(G)) {
    A = HEAP_GET_STRING(I)
    A = HEAP_GET_STRING(G) > A
  } else {
    throw Error("Not both arguments to gt.g are of type number or type string")
  }
  NEW_BOOL()
  OS.push(RES)
  PC = PC + 1
}

// number/string below top of OS <= number/string on top of OS
M[OpCodes.LEG] = () => {
  I = OS.pop()
  G = OS.pop()
  if (IS_NUMBER(I) && IS_NUMBER(G)) {
    A = HEAP_GET(I + NUMBER_VALUE_SLOT)
    A = HEAP_GET(G + NUMBER_VALUE_SLOT) <= A
  } else if (IS_STRING(I) && IS_STRING(G)) {
    A = HEAP_GET_STRING(I)
    A = HEAP_GET_STRING(G) <= A
  } else {
    throw Error("Not both arguments to le.g are of type number or type string")
  }
  NEW_BOOL()
  OS.push(RES)
  PC = PC + 1
}

// number/string below top of OS >= number/string on top of OS
M[OpCodes.GEG] = () => {
  I = OS.pop()
  G = OS.pop()
  if (IS_NUMBER(I) && IS_NUMBER(G)) {
    A = HEAP_GET(I + NUMBER_VALUE_SLOT)
    A = HEAP_GET(G + NUMBER_VALUE_SLOT) >= A
  } else if (IS_STRING(I) && IS_STRING(G)) {
    A = HEAP_GET_STRING(I)
    A = HEAP_GET_STRING(G) >= A
  } else {
    throw Error("Not both arguments to ge.g are of type number or type string")
  }
  NEW_BOOL()
  OS.push(RES)
  PC = PC + 1
}

M[OpCodes.EQG] = () => {
  I = OS.pop()
  G = OS.pop()
  if (IS_NUMBER(I) && IS_NUMBER(G)) {
    A = HEAP_GET(I + NUMBER_VALUE_SLOT)
    A = HEAP_GET(G + NUMBER_VALUE_SLOT) === A
  } else if (IS_BOOL(I) && IS_BOOL(G)) {
    A = (IS_TRUE(I) && IS_TRUE(G)) || (IS_FALSE(I) && IS_FALSE(G))

  } else if (IS_STRING(I) && IS_STRING(G)) {
    A = HEAP_GET_STRING(I)
    A = HEAP_GET_STRING(G) === A
  } else {
    throw Error("Not both arguments to eq.g are of type number or type string or type bool")
  }
  NEW_BOOL()
  OS.push(RES)
  PC = PC + 1
}

M[OpCodes.NEQG] = () => {
  I = OS.pop()
  G = OS.pop()
  if (IS_NUMBER(I) && IS_NUMBER(G)) {
    A = HEAP_GET(I + NUMBER_VALUE_SLOT)
    A = HEAP_GET(G + NUMBER_VALUE_SLOT) !== A
  } else if (IS_BOOL(I) && IS_BOOL(G)) {
    A = (IS_TRUE(I) && IS_FALSE(G)) || (IS_TRUE(I) && IS_FALSE(G))
  } else if (IS_STRING(I) && IS_STRING(G)) {
    A = HEAP_GET_STRING(I)
    A = HEAP_GET_STRING(G) !== A
  } else {
    throw Error("Not both arguments to neq.g are of type number or type string or type bool")
  }
  NEW_BOOL()
  OS.push(RES)
  PC = PC + 1
}

// Similar to LDF in HW5/6
M[OpCodes.NEWC] = () => {
  A = [P[PC][NEWC_ADDR_OFFSET], ENV]
  // expects A = [index of function in FUNC, env]
  NEW_CLOSURE()
  OS.push(RES) // closure address on top of OS
  PC = PC + 1
}

/*
M[OpCodes.NEWA] = () => {

  NEW_ARRAY()
  A = RES
  PUSH_OS()
  PC = PC + 1
}
*/

// Similar to LD
M[OpCodes.LDLG] = () => {
  A = [HEAP_GET_NUM_CHILD(ENV) - 1, P[PC][LD_ST_VALUE_IDX_OFFSET]]
  A = HEAP_GET_ENV_VALUE(ENV, A)
  F = IS_UNASSIGNED(A)
  if (F) {
    throw Error("access of unassigned name")
  }
  OS.push(A)
  PC = PC + 1
}

// Similar to ASSIGN
// Expects address of value to store to be top tof OS
M[OpCodes.STLG] = () => {
  A = [0, P[PC][LD_ST_VALUE_IDX_OFFSET]]
  B = [HEAP_GET_NUM_CHILD(ENV) - 1, P[PC][LD_ST_VALUE_IDX_OFFSET]]
  F = HEAP_GET_ENV_VALUE(ENV, B)
  while (IS_ADDRESS(F)) {
    A = [HEAP_GET_ADDRESS_FRAME_IDX(F), HEAP_GET_ADDRESS_VALUE_IDX(F)]
    F = HEAP_GET_ADDRESS(F)
  }
  A[0] = HEAP_GET_NUM_CHILD(ENV) - 1 - A[0]
  A = HEAP_SET_ENV_VALUE(ENV, A, OS.pop())
  PC = PC + 1
}

/*
M[OpCodes.LDPG] = () => {
  A = [P[PC][LD_ST_FRAME_IDX_OFFSET], P[PC][LD_ST_VALUE_IDX_OFFSET]]
  A = HEAP_GET_ENV_VALUE(ENV, A)
  F = IS_UNASSIGNED(A)
  if (F) {
    throw Error("access of unassigned name")
  }
  OS.push(A)
  PC = PC + 1
}
*/

M[OpCodes.LDPG] = () => {
  A = HEAP_GET_NUM_CHILD(ENV) - 1 - (P[PC][LD_ST_FRAME_IDX_OFFSET] as number)
  A = [A, P[PC][LD_ST_VALUE_IDX_OFFSET]]
  A = HEAP_GET_ENV_VALUE(ENV, A)
  F = IS_UNASSIGNED(A)
  if (F) {
    throw Error("access of unassigned name")
  }
  OS.push(A)
  PC = PC + 1
}

/*
M[OpCodes.STPG] = () => {
  A = [P[PC][LD_ST_FRAME_IDX_OFFSET], P[PC][LD_ST_VALUE_IDX_OFFSET]]
  A = HEAP_SET_ENV_VALUE(ENV, A, PEEK(OS, 0))
  PC = PC + 1
}
*/

M[OpCodes.STPG] = () => {
  A = [P[PC][LD_ST_FRAME_IDX_OFFSET], P[PC][LD_ST_VALUE_IDX_OFFSET]]
  B = [HEAP_GET_NUM_CHILD(ENV) - 1 - (P[PC][LD_ST_FRAME_IDX_OFFSET] as number),
  P[PC][LD_ST_VALUE_IDX_OFFSET]]
  F = HEAP_GET_ENV_VALUE(ENV, B)
  while (IS_ADDRESS(F)) {
    A = [HEAP_GET_ADDRESS_FRAME_IDX(F), HEAP_GET_ADDRESS_VALUE_IDX(F)]
    F = HEAP_GET_ADDRESS(F)
  }
  A[0] = HEAP_GET_NUM_CHILD(ENV) - 1 - A[0]
  A = HEAP_SET_ENV_VALUE(ENV, A, OS.pop())
  PC = PC + 1
}

// Expects top of OS to be a boolean
M[OpCodes.BRT] = () => {
  A = OS.pop()
  if (IS_TRUE(A)) {
    PC = PC + (P[PC][BR_OFFSET] as number)
  } else {
    PC = PC + 1
  }
}

M[OpCodes.BRF] = () => {
  A = OS.pop()
  if (IS_FALSE(A)) {
    PC = PC + (P[PC][BR_OFFSET] as number)
  } else {
    PC = PC + 1
  }
}

M[OpCodes.BR] = () => {
  PC = PC + (P[PC][BR_OFFSET] as number)
}

// Before running CALL, load name of function,
// then load arguments to function
M[OpCodes.CALL] = () => {
  // Address of closure of function to call
  G = PEEK(OS, P[PC][CALL_ARITY_OFFSET] as number)
  A = P[PC][CALL_ARITY_OFFSET]
  NEW_FRAME() // Expects number of values to be in A
  E = RES
  for (let i = P[PC][CALL_ARITY_OFFSET] as number - 1; i >= 0; i--) {
    HEAP_SET_CHILD(E, i, OS.pop())
  }
  PC = PC + 1
  A = [ENV, PC, FN]
  NEW_CALL_FRAME()
  RTS.push(RES)
  OS.pop()
  ENV = HEAP_ENV_EXTEND(E, HEAP_GET_CLOSURE_ENV(G))
  PC = 0
  P = HEAP_GET_CLOSURE_P(G)
  FN = HEAP_GET_CLOSURE_FN(G)
}

M[OpCodes.CALLT] = () => {
  // Address of closure of function to call
  G = PEEK(OS, P[PC][CALL_ARITY_OFFSET] as number)
  A = P[PC][CALL_ARITY_OFFSET]
  NEW_FRAME() // Expects number of values to be in A
  E = RES
  for (let i = P[PC][CALL_ARITY_OFFSET] as number - 1; i >= 0; i--) {
    HEAP_SET_CHILD(E, i, OS.pop())
  }
  OS.pop()
  ENV = HEAP_ENV_EXTEND(E, HEAP_GET_CLOSURE_ENV(G))
  PC = 0
  P = HEAP_GET_CLOSURE_P(G)
  FN = HEAP_GET_CLOSURE_FN(G)
}

M[OpCodes.RETG] = () => {
  H = RTS.pop()
  if (IS_CALL_FRAME(H)) {
    PC = HEAP_GET_CALL_FRAME_PC(H)
    ENV = HEAP_GET_CALL_FRAME_ENV(H)
    P = HEAP_GET_CALL_FRAME_P(H)
    FN = HEAP_GET_CALL_FRAME_FN(H)
  } else {
    PC = PC - 1
  }
}

M[OpCodes.POPG] = () => {
  OS.pop()
  PC = PC + 1
}

M[OpCodes.NEWENV] = () => {
  A = ENV
  NEW_BLOCK_FRAME()
  RTS.push(RES)
  I = P[PC][NUM_LOCALS_OFFSET]
  A = I
  NEW_FRAME()
  H = RES
  ENV = HEAP_ENV_EXTEND(H, ENV)
  for (let i = 0; i < I; i++) {
    HEAP_SET_CHILD(H, i, UNASSIGNED)
  }
  PC = PC + 1
}

M[OpCodes.POPENV] = () => {
  H = RTS.pop()
  if (IS_BLOCK_FRAME(H)) {
    ENV = HEAP_GET_BLOCK_FRAME_ENV(H)
    PC = PC + 1
  } else {
    throw Error("Top of RTS not a block frame when exiting scope")
  }
}

M[OpCodes.LDPA] = () => {
  A = HEAP_GET_NUM_CHILD(ENV) - (P[PC][LD_ST_FRAME_IDX_OFFSET] as number)
  A = [A, P[PC][LD_ST_VALUE_IDX_OFFSET]]
  A = HEAP_GET_ENV_VALUE(ENV, A)
  A = [P[PC][LD_ST_VALUE_IDX_OFFSET], P[PC][LD_ST_FRAME_IDX_OFFSET], A]
  // expects A = [value index, frame index, address]
  NEW_ADDRESS()
  OS.push(RES)
  PC = PC + 1
}

// Expects address to be on top of OS
M[OpCodes.DEREF] = () => {
  H = OS.pop()
  if (IS_ADDRESS(H)) {
    H = HEAP_GET_ADDRESS(H)
    OS.push(H)
    PC = PC + 1
  } else {
    throw Error("Trying to dereference a non-address value")
  }
}

// Concurrency

// Thread id of newly created thread will be allocated on the heap
// Address of thread id allocated on heap will be on top of OS after NEWT ends
M[OpCodes.NEWT] = () => {
  A = P[PC][NEWT_ADDR_OFFSET] as number
  A = THREAD_INIT()
  NEW_THREAD()
  OS.push(RES)
  PC = PC + 1
}

M[OpCodes.ENDT] = () => {
  PC = P.length
}

// Expects thread id to be on top of OS
M[OpCodes.JOIN] = () => {
  H = OS.pop()
  K = IS_THREAD(H)
  if (K) {
    G = JOIN_THREAD(HEAP_GET_THREAD_ID(H))
    PC = PC + 1
    // Even if join thread has not exited, we should still increment PC since
    // join caller should execute next instruction after it is unblocked
    if (G === JOIN_THREAD_NOT_EXITED) {
      STATUS = ThreadStatus.BLOCKED
    }
  } else {
    throw Error("Join expects a Thread Id to be on top of OS")
  }
}

// Lock id of newly created lock will be allocated on the heap
// Address of lock id allocated on heap will be on top of OS after NEWL ends
M[OpCodes.NEWL] = () => {
  A = LOCK_INIT()
  NEW_LOCK()
  OS.push(RES)
  PC = PC + 1
}

// Expects lock id to be on top of OS
M[OpCodes.LOCK] = () => {
  H = OS.pop()
  K = IS_LOCK(H)
  if (K) {
    G = LOCK(HEAP_GET_LOCK_ID(H))
    PC = PC + 1
    if (G === LOCK_NOT_ACQUIRED) {
      STATUS = ThreadStatus.BLOCKED
    }
  } else {
    throw Error("Unlock expects a Lock Id to be on top of OS")
  }
}

// Expects lock id to be on top of OS
M[OpCodes.UNLOCK] = () => {
  H = OS.pop()
  K = IS_LOCK(H)
  if (K) {
    UNLOCK(HEAP_GET_LOCK_ID(H))
    PC = PC + 1
  } else {
    throw Error("Unlock expects a Lock Id to be on top of OS")
  }
}

M[OpCodes.DISPLAY] = () => {
  A = P[PC][CALL_ARITY_OFFSET]
  let res: any[] = []
  for (let i = 0; i < A; i++) {
    res.push(convertToJsFormat(OS.pop()))
  }
  console.log(...res)
  NEW_UNDEFINED()
  OS.push(RES)
  PC = PC + 1
}

// Expects index of function in FUNC of new thread to be in A
// Copy environment and instructions of current thread
function THREAD_INIT(): ThreadId {
  const buf = new Int32Array(new SharedArrayBuffer(4))
  SYSCALL_PORT.postMessage([Syscall.CLONE, A, ENV, buf])
  Atomics.wait(buf, 0, 0)
  return buf[0]
}

export const JOIN_THREAD_EXITED = 1
export const JOIN_THREAD_NOT_EXITED = -1

// Sets current thread status to block if joining thread has not been terminated
function JOIN_THREAD(joinId: ThreadId): number {
  const buf = new Int32Array(new SharedArrayBuffer(4))
  SYSCALL_PORT.postMessage([Syscall.JOIN, THREADID, joinId, buf])
  Atomics.wait(buf, 0, 0)
  return buf[0]
}

export const LOCK_ACQUIRED = 1
export const LOCK_NOT_ACQUIRED = -1

function LOCK_INIT(): LockId {
  const buf = new Int32Array(new SharedArrayBuffer(4))
  SYSCALL_PORT.postMessage([Syscall.LOCK_INIT, buf])
  Atomics.wait(buf, 0, 0)
  return buf[0]
}

function LOCK(lockId: LockId): number {
  const buf = new Int32Array(new SharedArrayBuffer(4))
  SYSCALL_PORT.postMessage([Syscall.LOCK, THREADID, lockId, buf])
  Atomics.wait(buf, 0, 0)
  return buf[0]
}

function UNLOCK(lockId: LockId) {
  SYSCALL_PORT.postMessage([Syscall.UNLOCK, lockId])
}

function LOCK_DESTROY(lockId: LockId) {
  SYSCALL_PORT.postMessage([Syscall.LOCK_DESTROY, lockId])
}

function convertToJsFormat(address: number): any {
  const tag = HEAP_GET_TAG(address)
  switch (tag) {
    case BOOL_TAG:
      return IS_TRUE(address)
    case NUMBER_TAG:
      return HEAP_GET(address + NUMBER_VALUE_SLOT)
    case STRING_TAG:
      return HEAP_GET_STRING(address)
    case UNDEFINED_TAG:
      return undefined
    case NULL_TAG:
      return null
    case CLOSURE_TAG:
      return '<Function>'
    case LOCK_TAG:
      return HEAP_GET_LOCK_ID(address)
    case THREAD_TAG:
      return HEAP_GET_THREAD_ID(address)
    default:
      return address
  }
}

export type RegisterSet = {
  A: any
  B: any
  C: any
  D: any
  E: any
  F: any
  G: any
  H: any
  I: any
  J: any
  K: any
}

// Registers
let A: any = 0
let B: any = 0
let C: any = 0
let D: any = 0
let E: any = 0
let F: any = 0
let G: any = 0
let H: any = 0
let I: any = 0
let J: any = 0
let K: any = 0

// Index of entry point function of program
let ENTRY: number
// List of functions
let FUNC: RVMFunction[]
// Index of executing function
let FN: number
// Instructions to execute
let P: Instruction[]
// Program counter: index of NEXT instruction in P to execute
let PC: number = 0
// Address of environment in heap
let ENV = -1
// Operand stack (Array of addresses, word-encoded literals, numbers)
let OS: any[] = []
// Call stack (Array of addresses)
let RTS: any[] = []

let STATUS: ThreadStatus = ThreadStatus.RUNNING
let THREADID: ThreadId

const HEAP_DATAVIEW_IDX = 0
const FREE_UINT32_ARR_IDX = 1
const PROGRAM_IDX = 2

const THREAD_PORT_IDX = 0
const SYSCALL_PORT_IDX = 1

const THREAD_IDX = 0
const TIME_QUANTA_IDX = 1

// Worker will receive threads to run and
// send threads back to vm through this port
let THREAD_PORT: MessagePort

// Worker will send syscall requests through this port
let SYSCALL_PORT: MessagePort

// First message to worker
self.onmessage = (message) => {
  // message data should contain heap dataview and free uint32array
  const data = message.data
  const ports = message.ports

  INITIALIZE(data[HEAP_DATAVIEW_IDX], data[FREE_UINT32_ARR_IDX], data[PROGRAM_IDX],
    ports[THREAD_PORT_IDX], ports[SYSCALL_PORT_IDX])
}

function INITIALIZE(heap: DataView, free: Uint32Array, p: Program,
  thread_port: MessagePort, syscall_port: MessagePort) {
  // Initialize heap
  HEAP = heap
  FREE = free
  RES = -Infinity

  // Initialize constants
  NEW_UNASSIGNED()
  UNASSIGNED = RES

  // Initialize ports for message passing between worker and vm
  THREAD_PORT = thread_port
  SYSCALL_PORT = syscall_port

  ENTRY = p[0]
  FUNC = p[1]

  // Set up message handler for accepting threads to run
  THREAD_PORT.onmessage = (message) => {
    const data = message.data
    const thread = runThread(data[THREAD_IDX], data[TIME_QUANTA_IDX])

    // send thread back to vm after finished running
    THREAD_PORT.postMessage([thread])
  }
}

// End of thread
let EOT: boolean = true;
let TO: number;

function runThread(thread: Thread, timeQuanta: number): Thread {
  loadContext(thread);

  // if thread first time running
  if (ENV === -1) {
    A = 1
    NEW_ENVIRONMENT();
    ENV = RES;
    A = FUNC.length - 1;
    NEW_FRAME();
    for (let i = 0; i < FUNC.length - 1; i++) {
      HEAP_SET_CHILD(RES, i, UNASSIGNED)
    }
    ENV = HEAP_ENV_EXTEND(RES, ENV)
  }

  EOT = false;
  TO = timeQuanta;
  // run timeQuanta number of instructions or till no more instructions
  // or till thread gets blocked
  // while (TO > 0 && RUNNING && STATUS !== ThreadStatus.BLOCKED) {
  while (TO > 0 && !EOT && STATUS !== ThreadStatus.BLOCKED) {
    RUN_INSTRUCTION();
    TO = TO - 1;
  }

  saveContext(thread);
  // If thread status is BLOCKED, dont change it
  if (STATUS === ThreadStatus.RUNNING) {
    // if (thread.PC === thread.P.length) {
    if (EOT) {
      // No more code, thread should exit
      thread.status = ThreadStatus.TERMINATED
    } else {
      // Time quanta is up
      thread.status = ThreadStatus.READY
    }
  }
  return thread
}

const INS_OPCODE_OFFSET = 0

function RUN_INSTRUCTION() {
  // Attempting to return from entry point function, end of program
  if (FN === ENTRY && P[PC][INS_OPCODE_OFFSET] === OpCodes.RETG) {
    EOT = true
  } else {
    // The microcode should increment PC
    M[P[PC][INS_OPCODE_OFFSET]]()
  }
}

// Context of thread consist of environment, operand stack and call stack
// Possible to add file descriptors and signal handlers
function loadContext(thread: Thread): void {
  // load register values of thread to worker
  A = thread.RS.A
  B = thread.RS.B
  C = thread.RS.C
  D = thread.RS.D
  E = thread.RS.E
  F = thread.RS.F
  G = thread.RS.G
  H = thread.RS.H
  I = thread.RS.I
  J = thread.RS.J
  K = thread.RS.K

  P = FUNC[thread.FN][FUNC_CODE_OFFSET]
  FN = thread.FN
  PC = thread.PC
  ENV = thread.ENV
  OS = thread.OS
  RTS = thread.RTS

  STATUS = ThreadStatus.RUNNING
  THREADID = thread.ID
}

function saveContext(thread: Thread): void {
  // Context saving: save register values of worker to thread
  thread.RS.A = A
  thread.RS.B = B
  thread.RS.C = C
  thread.RS.D = D
  thread.RS.E = E
  thread.RS.F = F
  thread.RS.G = G
  thread.RS.H = H
  thread.RS.I = I
  thread.RS.J = J
  thread.RS.K = K

  thread.FN = FN
  thread.PC = PC
  thread.ENV = ENV
  thread.OS = OS
  thread.RTS = RTS
}
