// Copied from js-lang Source Academy
export type Offset = number; // instructions to skip
export type Address = [
  number, // function index
  number?, // instruction index within function; optional
];
export type Instruction = [
  number, // opcode
  Argument?,
  Argument?,
];
export type Argument = number | boolean | string | Offset | Address;
export type RVMFunction = [
  number, // stack size
  number, // environment size
  number, // number of arguments
  Instruction[], // code
];
export type Program = [
  number, // index of entry point function
  RVMFunction[],
];
