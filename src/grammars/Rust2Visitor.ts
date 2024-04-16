// Generated from grammars/Rust2.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./Rust2Parser";
import { Program_elementContext } from "./Rust2Parser";
import { StatementContext } from "./Rust2Parser";
import { Constant_declarationContext } from "./Rust2Parser";
import { Variable_declarationContext } from "./Rust2Parser";
import { MutableContext } from "./Rust2Parser";
import { Function_declarationContext } from "./Rust2Parser";
import { Return_expressionContext } from "./Rust2Parser";
import { ExpressionContext } from "./Rust2Parser";
import { AssignmentContext } from "./Rust2Parser";
import { ClosureContext } from "./Rust2Parser";
import { Closure_parameter_listContext } from "./Rust2Parser";
import { Parens_expressionContext } from "./Rust2Parser";
import { If_expressionContext } from "./Rust2Parser";
import { Cond_exprContext } from "./Rust2Parser";
import { Args_listContext } from "./Rust2Parser";
import { ArgsContext } from "./Rust2Parser";
import { Function_applicationContext } from "./Rust2Parser";
import { BlockContext } from "./Rust2Parser";
import { Function_bodyContext } from "./Rust2Parser";
import { Parameter_listContext } from "./Rust2Parser";
import { ParameterContext } from "./Rust2Parser";
import { ParametersContext } from "./Rust2Parser";
import { Binary_operatorContext } from "./Rust2Parser";
import { Unary_operatorContext } from "./Rust2Parser";
import { Binary_logical_operatorContext } from "./Rust2Parser";
import { LiteralContext } from "./Rust2Parser";
import { Integer_literalContext } from "./Rust2Parser";
import { Float_literalContext } from "./Rust2Parser";
import { Boolean_literalContext } from "./Rust2Parser";
import { String_literalContext } from "./Rust2Parser";
import { String_charactersContext } from "./Rust2Parser";
import { TypeContext } from "./Rust2Parser";
import { Custom_typeContext } from "./Rust2Parser";
import { Print_macroContext } from "./Rust2Parser";
import { NameContext } from "./Rust2Parser";
import { Const_nameContext } from "./Rust2Parser";
import { Var_nameContext } from "./Rust2Parser";
import { Function_nameContext } from "./Rust2Parser";

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Rust2Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface Rust2Visitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `Rust2Parser.program`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitProgram?: (ctx: ProgramContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.program_element`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitProgram_element?: (ctx: Program_elementContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatement?: (ctx: StatementContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.constant_declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstant_declaration?: (ctx: Constant_declarationContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.variable_declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVariable_declaration?: (ctx: Variable_declarationContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.mutable`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMutable?: (ctx: MutableContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.function_declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunction_declaration?: (ctx: Function_declarationContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.return_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReturn_expression?: (ctx: Return_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.assignment`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignment?: (ctx: AssignmentContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.closure`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClosure?: (ctx: ClosureContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.closure_parameter_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClosure_parameter_list?: (ctx: Closure_parameter_listContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.parens_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParens_expression?: (ctx: Parens_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.if_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIf_expression?: (ctx: If_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.cond_expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCond_expr?: (ctx: Cond_exprContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.args_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArgs_list?: (ctx: Args_listContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.args`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArgs?: (ctx: ArgsContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.function_application`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunction_application?: (ctx: Function_applicationContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.block`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlock?: (ctx: BlockContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.function_body`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunction_body?: (ctx: Function_bodyContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.parameter_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameter_list?: (ctx: Parameter_listContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.parameter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameter?: (ctx: ParameterContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.parameters`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameters?: (ctx: ParametersContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.binary_operator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBinary_operator?: (ctx: Binary_operatorContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.unary_operator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnary_operator?: (ctx: Unary_operatorContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.binary_logical_operator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBinary_logical_operator?: (
    ctx: Binary_logical_operatorContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.literal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLiteral?: (ctx: LiteralContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.integer_literal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInteger_literal?: (ctx: Integer_literalContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.float_literal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFloat_literal?: (ctx: Float_literalContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.boolean_literal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBoolean_literal?: (ctx: Boolean_literalContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.string_literal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitString_literal?: (ctx: String_literalContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.string_characters`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitString_characters?: (ctx: String_charactersContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitType?: (ctx: TypeContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.custom_type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCustom_type?: (ctx: Custom_typeContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.print_macro`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrint_macro?: (ctx: Print_macroContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitName?: (ctx: NameContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.const_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConst_name?: (ctx: Const_nameContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.var_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVar_name?: (ctx: Var_nameContext) => Result;

  /**
   * Visit a parse tree produced by `Rust2Parser.function_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunction_name?: (ctx: Function_nameContext) => Result;
}
