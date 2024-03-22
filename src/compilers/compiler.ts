import { Rust1Visitor as RustVisitor } from "../grammars/Rust1Visitor";
import { Result } from "../utils";
import OpCodes from "./opcodes";

type Operand = number | string;
export class Instruction {
  opcode: OpCodes;
  operands: Operand[];

  constructor(opcode: OpCodes, operands: number[]) {
    this.opcode = opcode;
    this.operands = operands;
  }
}

export type Instructions = Instruction[];

export class CompilerError extends Error {
  constructor(
    public line: number,
    public message: string,
  ) {
    super(message);
    this.name = "CompilerError";
  }
}

export interface Compiler
  extends RustVisitor<Result<Instructions, CompilerError>> {
  language_version: string;
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

  get_name(index: number): string {
    return this.names[index];
  }

  get_type(index: number): string {
    return this.types[index];
  }
}

export function name_lookup(
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
  | OpCodes.LDCI
  | OpCodes.LDCF32
  | OpCodes.LDCB0
  | OpCodes.LDCB1
  | OpCodes.LGCS;
export const PrimitiveTypeToOpcode = new Map<
  string,
  LoadPrimitiveConstantsOpcode
>([
  ["i32", OpCodes.LDCI],
  ["f32", OpCodes.LDCF32],
  ["false", OpCodes.LDCB0],
  ["true", OpCodes.LDCB1],
  ["string", OpCodes.LGCS],
]);

export type PopPrimitiveConstantsOpcode =
  | OpCodes.POPF
  | OpCodes.POPB
  | OpCodes.POPG;
export const PopOpcodeByType = new Map<string, PopPrimitiveConstantsOpcode>([
  ["i32", OpCodes.POPF],
  ["f32", OpCodes.POPF],
  ["bool", OpCodes.POPB],
  ["string", OpCodes.POPG],
]);

export type StorePrimitiveConstantsOpcode =
  | OpCodes.STLF
  | OpCodes.STLB
  | OpCodes.STLG;
export const StoreOpcodeByType = new Map<string, StorePrimitiveConstantsOpcode>(
  [
    ["i32", OpCodes.STLF],
    ["f32", OpCodes.STLF],
    ["bool", OpCodes.STLB],
    ["string", OpCodes.STLG],
  ],
);

export type LoadPrimitiveVariablesOpcode =
  | OpCodes.LDPF
  | OpCodes.LDPB
  | OpCodes.LDPG;
export const LoadPrimitiveFromEnvByType = new Map<
  string,
  LoadPrimitiveVariablesOpcode
>([
  ["i32", OpCodes.LDPF],
  ["f32", OpCodes.LDPF],
  ["bool", OpCodes.LDPB],
  ["string", OpCodes.LDPG],
]);
