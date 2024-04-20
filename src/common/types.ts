type Offset = number; // instructions to skip
type Address = [
  number, // function index
  number?, // instruction index within function; optional
];

export type Argument = number | boolean | string | Offset | Address;
export type InstructionArr = [
  number, // opcode
  Argument?,
  Argument?,
];

export type RVMFunctionArr = [
  number, // stack size
  number, // environment size
  number, // number of arguments
  InstructionArr[], // code
];

export type ProgramArray = [
  number, // entry_point
  RVMFunctionArr[], // functions
];
