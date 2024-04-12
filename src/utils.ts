import { Program } from "./compilers/compiler";
import { Scope, TypeAnnotation } from "./validators/types";
import { writeFileSync } from "fs";

export const print = (is_debug: boolean) => {
  if (is_debug) {
    return console.log;
  }
  return () => {};
};

export function in_scope_untyped(scope: Scope[], name: string): boolean {
  const last_scope = scope[scope.length - 1];
  if (last_scope.has(name)) {
    return true;
  }
  return false;
}

export function in_scope_untyped_recursive(
  scope: Scope[],
  name: string,
): boolean {
  for (const s of scope) {
    if (s.has(name)) {
      return true;
    }
  }
  return false;
}

export function get_type(
  scope: Scope[],
  name: string,
): TypeAnnotation | undefined {
  for (const s of scope) {
    if (s.has(name)) {
      return s.get(name);
    }
  }
  return undefined;
}

export function add_to_scope(
  scope: Scope[],
  name: string,
  type: TypeAnnotation,
): void {
  scope[scope.length - 1].set(name, type);
}

export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

type Offset = number; // instructions to skip
type Address = [
  number, // function index
  number?, // instruction index within function; optional
];
type Argument = number | boolean | string | Offset | Address;
type InstructionArr = [
  number, // opcode
  Argument?,
  Argument?,
];
type SVMFunctionArr = [
  number, // stack size
  number, // environment size
  number, // number of arguments
  InstructionArr[], // code
];

type ProgramArray = [
  number, // entry_point
  SVMFunctionArr[], // functions
];

function toProgramArray(program: Program): ProgramArray {
  if (program.entry_point === undefined) {
    console.error(
      "entry_point is undefined! Temporarily setting to -1, but there is an error in the compiler.",
    );
    program.entry_point = -1;
  }

  const functions: SVMFunctionArr[] = [];
  for (const func of program.functions) {
    const instructions: InstructionArr[] = [];
    for (const instr of func.instructions) {
      if (instr.operands === undefined || instr.operands.length === 0) {
        instructions.push([instr.opcode]);
        continue;
      } else if (instr.operands.length == 1) {
        instructions.push([instr.opcode, instr.operands[0]]);
        continue;
      } else if (instr.operands.length == 2) {
        instructions.push([instr.opcode, instr.operands[0], instr.operands[1]]);
        continue;
      } else if (instr.operands.length > 2) {
        console.error("Too many operands in instruction:", instr);
        process.exit(1);
      }
    }
    functions.push([
      func.stack_size,
      func.environment_size,
      func.num_args,
      instructions,
    ]);
  }
  return [program.entry_point, functions];
}

export function toJson(program: Program) {
  return JSON.stringify(toProgramArray(program));
}

export function saveJson(program: Program, filename: string) {
  console.log("Saving Program to: ", filename);
  writeFileSync(filename, toJson(program));
}
