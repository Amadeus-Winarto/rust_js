import { Rust2Visitor as RustVisitor } from "../grammars/Rust2Visitor";

// Type: represents the type of program elements
export enum TypeTag {
  i32 = "i32",
  i64 = "i64",
  f32 = "f32",
  f64 = "f64",
  empty = "()",
  bool = "bool",
  string = "string",
  function = "function",

  integer_literal = "integer_literal",
  float_literal = "float_literal",

  unit = "unit", // Represents correctly typed programs but the exact type is not needed
  unknown = "unknown",
}

export class TypeAnnotation {
  constructor(
    public type: TypeTag,
    public value: string | undefined = undefined,
    public is_mutable: boolean = false,
  ) {}

  // Equality check
  equals(other: TypeAnnotation): boolean {
    return (
      this.type === other.type &&
      this.value === other.value &&
      this.is_mutable === other.is_mutable
    );
  }

  // String representation
  toString(): string {
    return this.type + (this.value ? "<" + this.value + ">" : "");
  }
}

export function value_to_type(value: string): TypeTag {
  if (value === "i32") {
    return TypeTag.i32;
  }
  if (value === "i64") {
    return TypeTag.i64;
  }
  if (value === "f32") {
    return TypeTag.f32;
  }
  if (value === "f64") {
    return TypeTag.f64;
  }
  if (value === "bool") {
    return TypeTag.bool;
  }
  if (value === "&str") {
    return TypeTag.string;
  }
  if (value === "function") {
    return TypeTag.function;
  }
  if (value === "()") {
    return TypeTag.empty;
  }
  if (value === "integer_literal") {
    return TypeTag.integer_literal;
  }
  if (value === "float_literal") {
    return TypeTag.float_literal;
  }
  if (value === "...") {
    return TypeTag.unit;
  }
  return TypeTag.unknown;
}

export function is_integer(type: TypeTag): boolean {
  return (
    type === TypeTag.i32 ||
    type === TypeTag.i64 ||
    type === TypeTag.integer_literal
  );
}

export function is_promotable(type: TypeTag, target: TypeTag): boolean {
  if (type === TypeTag.integer_literal) {
    return is_integer(target);
  }
  if (type === TypeTag.float_literal) {
    return is_float(target);
  }
  return type === target;
}

export function is_float(type: TypeTag): boolean {
  return (
    type === TypeTag.f32 ||
    type === TypeTag.f64 ||
    type === TypeTag.float_literal
  );
}

export function is_bool(type: TypeTag): boolean {
  return type === TypeTag.bool;
}

export function is_numeric_operator(operator: string): boolean {
  return (
    operator === "+" || operator === "-" || operator === "*" || operator === "/"
  );
}

export function is_bool_operator(operator: string): boolean {
  return operator === "&&" || operator === "||";
}

export function is_comparison_operator(operator: string): boolean {
  return (
    operator === "==" ||
    operator === "!=" ||
    operator === "<" ||
    operator === ">" ||
    operator === "<=" ||
    operator === ">="
  );
}

// Scope: represents the lexical scope of the program
export type Scope = Map<string, TypeAnnotation>; // Name -> Type
export const to_string = (scope: Scope): string => {
  const result = Array.from(scope).map(([key, value]) => {
    return key + ": " + value;
  });
  return "{" + result.join(", ") + "}";
};

export const printScopes = (
  is_debug: boolean,
  message: string,
  scopes: Scope[],
) => {
  if (is_debug) {
    console.log(message);
    for (let i = 0; i < scopes.length; i++) {
      console.log("\tScope ", i, ": ", to_string(scopes[i]));
    }
  }
};

export interface Validator extends RustVisitor<boolean> {
  rule_name: string;
}
