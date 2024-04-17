import { Rust2Visitor as RustVisitor } from "../grammars/Rust2Visitor";

export type TypeTag =
  | PrimitiveTypeTag
  | Reference<TypeTag>
  | Reference<Mutable<TypeTag>>;

// Type: represents the type of program elements
export enum PrimitiveTypeTag {
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

class Reference<T extends TypeTag> {
  constructor(public type: T) {}
}

class Mutable<T extends TypeTag> {
  constructor(public type: T) {}
}
export function make_reference(type_tag: TypeTag): Reference<TypeTag> {
  return new Reference(type_tag);
}

export function make_mutable_reference(
  type_tag: TypeTag,
): Reference<Mutable<TypeTag>> {
  return new Reference(new Mutable(type_tag));
}

export function is_immutable_borrow(type: TypeTag): boolean {
  return type instanceof Reference && !(type.type instanceof Mutable);
}

export function is_mutable_borrow(type: TypeTag): boolean {
  return type instanceof Reference && type.type instanceof Mutable;
}

export function is_borrow(type: TypeTag): boolean {
  return type instanceof Reference;
}

export function unwrap_reference(type: TypeTag): TypeTag {
  if (type instanceof Reference && type.type instanceof Mutable) {
    return type.type.type;
  } else if (type instanceof Reference) {
    return type.type;
  }
  return type;
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

function value_to_primitive_type(value: string): TypeTag {
  if (value === "i32") {
    return PrimitiveTypeTag.i32;
  }
  if (value === "i64") {
    return PrimitiveTypeTag.i64;
  }
  if (value === "f32") {
    return PrimitiveTypeTag.f32;
  }
  if (value === "f64") {
    return PrimitiveTypeTag.f64;
  }
  if (value === "bool") {
    return PrimitiveTypeTag.bool;
  }
  if (value === "str") {
    return PrimitiveTypeTag.string;
  }
  if (value === "function") {
    return PrimitiveTypeTag.function;
  }
  if (value === "()") {
    return PrimitiveTypeTag.empty;
  }
  if (value === "integer_literal") {
    return PrimitiveTypeTag.integer_literal;
  }
  if (value === "float_literal") {
    return PrimitiveTypeTag.float_literal;
  }
  if (value === "...") {
    return PrimitiveTypeTag.unit;
  }
  return PrimitiveTypeTag.unknown;
}

export function value_to_type(value: string): TypeTag {
  if (value.startsWith("&mut")) {
    return new Reference(new Mutable(value_to_type(value.slice(4).trim())));
  } else if (value.startsWith("&")) {
    return new Reference(value_to_type(value.slice(1)));
  } else {
    return value_to_primitive_type(value);
  }
}

export function type_to_value(type: TypeTag): string {
  if (type instanceof Reference) {
    if (type.type instanceof Mutable) {
      return "&mut " + type_to_value(type.type.type);
    } else {
      return "&" + type_to_value(type.type);
    }
  } else {
    return type;
  }
}

export function is_integer(type: TypeTag): boolean {
  return (
    type === PrimitiveTypeTag.i32 ||
    type === PrimitiveTypeTag.i64 ||
    type === PrimitiveTypeTag.integer_literal
  );
}

export function is_promotable(type: TypeTag, target: TypeTag): boolean {
  if (type === PrimitiveTypeTag.integer_literal) {
    return is_integer(target);
  }
  if (type === PrimitiveTypeTag.float_literal) {
    return is_float(target);
  }

  return type_to_value(type) === type_to_value(target);
}

export function is_float(type: TypeTag): boolean {
  return (
    type === PrimitiveTypeTag.f32 ||
    type === PrimitiveTypeTag.f64 ||
    type === PrimitiveTypeTag.float_literal
  );
}

export function is_bool(type: TypeTag): boolean {
  return type === PrimitiveTypeTag.bool;
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
