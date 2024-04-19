import { PrimitiveTypeTag, TypeAnnotation } from "../validators/types";

type FunctionName = string;
type FunctionData = {
  type: TypeAnnotation;
};

export const PreBuiltFunctions: Map<FunctionName, FunctionData> = new Map([
  [
    "println!",
    {
      type: new TypeAnnotation(PrimitiveTypeTag.function, "<...> -> ()"),
    },
  ],
  [
    "thread_spawn",
    {
      type: new TypeAnnotation(
        PrimitiveTypeTag.function,
        "<<...> -> ()> -> JoinHandle",
      ),
    },
  ],
  [
    "thread_join",
    {
      type: new TypeAnnotation(PrimitiveTypeTag.function, "<JoinHandle> -> ()"),
    },
  ],
  [
    "mutex_new",
    {
      type: new TypeAnnotation(PrimitiveTypeTag.function, "<T> -> Mutex<T>"),
    },
  ],
  [
    "lock",
    {
      type: new TypeAnnotation(
        PrimitiveTypeTag.function,
        "<Mutex<T>> -> &mut T",
      ),
    },
  ],
]);

export function is_prebuilt_function(name: string): boolean {
  return PreBuiltFunctions.has(name);
}
