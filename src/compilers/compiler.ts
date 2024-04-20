import { Rust2Visitor as RustVisitor } from "../grammars/Rust2Visitor";
import { Result } from "../utils";
import OpCodes from "../common/opcodes";

export type Operand = number | string;
export class Instruction {
  opcode: OpCodes;
  operands: Operand[];

  constructor(opcode: OpCodes, operands: number[]) {
    this.opcode = opcode;
    this.operands = operands;
  }
}

export type Instructions = Instruction[];

export type SVMFunction = {
  stack_size: number;
  environment_size: number;
  num_args: number;
  instructions: Instruction[];
};

export type Program = {
  entry_point: number | undefined;
  functions: SVMFunction[];
};

export class CompilerError extends Error {
  constructor(line_number: number, message: string) {
    super("Line " + line_number + ": " + message);
    this.name = "CompilerError";
  }
}

export interface Compiler extends RustVisitor<Result<Program, CompilerError>> {
  language_version: string;
}

/**
 * Defines a context for the compiler to use during compilation.
 */
export class CompileTimeContext {
  private size: number;
  private names: string[];
  private types: string[];
  private values: Operand[];

  constructor() {
    this.size = 0;
    this.names = [];
    this.types = [];
    this.values = [];
  }

  push(name: string, type: string, value: Operand): number {
    const index = this.size;
    this.size++;
    this.names.push(name);
    this.types.push(type);
    this.values.push(value);
    return index;
  }

  pop(): number {
    const index = this.size - 1;
    this.names.pop();
    this.types.pop();
    this.values.pop();
    this.size--;
    return index;
  }

  lookup(name: string): number | undefined {
    const index = this.names.indexOf(name);
    if (index !== -1) {
      return index;
    }
    return undefined;
  }

  num_variables(): number {
    return this.size;
  }

  get_name(index: number): string {
    return this.names[index];
  }

  get_type(index: number): string {
    return this.types[index];
  }

  get_value(index: number): Operand {
    return this.values[index];
  }
}

export class Environment {
  private size: number;
  private names: string[];
  private types: string[];

  constructor() {
    this.size = 0;
    this.names = [];
    this.types = [];
  }

  push(name: string, type: string): number {
    const index = this.size;
    this.size++;
    this.names.push(name);
    this.types.push(type);
    return index;
  }

  pop(): number {
    const index = this.size - 1;
    this.names.pop();
    this.types.pop();
    this.size--;
    return index;
  }

  lookup(name: string): number | undefined {
    const index = this.names.indexOf(name);
    if (index !== -1) {
      return index;
    }
    return undefined;
  }

  get_size(): number {
    return this.size;
  }

  get_name(index: number): string {
    return this.names[index];
  }

  get_type(index: number): string {
    return this.types[index];
  }
}

export function name_recursive_lookup(
  envs: Environment[],
  name: string,
): [number, number] | undefined {
  for (let i = envs.length - 1; i >= 0; i--) {
    const index = envs[i].lookup(name);
    if (index !== undefined) {
      return [i, index];
    }
  }
  return undefined;
}

export type LoadPrimitiveConstantsOpcode =
  | OpCodes.LGCI
  | OpCodes.LGCF32
  | OpCodes.LGCB0
  | OpCodes.LGCB1
  | OpCodes.LGCS
  | OpCodes.NEWC;
export const PrimitiveTypeToOpcode = new Map<
  string,
  LoadPrimitiveConstantsOpcode
>([
  ["i32", OpCodes.LGCI],
  ["f32", OpCodes.LGCF32],
  ["false", OpCodes.LGCB0],
  ["true", OpCodes.LGCB1],
  ["string", OpCodes.LGCS],
  ["function", OpCodes.NEWC],
]);
