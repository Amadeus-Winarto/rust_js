import { Scope, TypeAnnotation } from "./validators/types";

export const print = (is_debug: boolean) => {
    if (is_debug) {
        return console.log;
    }
    return () => { };
};


export function in_scope_untyped(scope: Scope[], name: string): boolean {
    for (const s of scope) {
        if (s.has(name)) {
            return true;
        }
    }
    return false;
}

export function get_type(scope: Scope[], name: string): TypeAnnotation | undefined {
    for (const s of scope) {
        if (s.has(name)) {
            return s.get(name);
        }
    }
    return undefined;
}

export function add_to_scope(scope: Scope[], name: string, type: TypeAnnotation): void {
    scope[scope.length - 1].set(name, type);
}

export type Result<T, E = Error> =
    | { ok: true; value: T }
    | { ok: false; error: E };
