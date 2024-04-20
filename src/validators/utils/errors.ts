export class SyntaxError extends Error {
  constructor(line_number: number, message: string) {
    super("Line " + line_number + ": " + message);
    this.name = "SyntaxError";
  }
}

export class SemanticError extends Error {
  constructor(line_number: number, message: string) {
    super("Line " + line_number + ": " + message);
    this.name = "SemanticError";
  }
}
