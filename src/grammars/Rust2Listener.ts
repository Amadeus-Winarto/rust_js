// Generated from grammars/Rust2.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./Rust2Parser";
import { Program_elementContext } from "./Rust2Parser";
import { StatementContext } from "./Rust2Parser";
import { Constant_declarationContext } from "./Rust2Parser";
import { Variable_declarationContext } from "./Rust2Parser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `Rust2Parser`.
 */
export interface Rust2Listener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `Rust2Parser.program`.
   * @param ctx the parse tree
   */
  enterProgram?: (ctx: ProgramContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.program`.
   * @param ctx the parse tree
   */
  exitProgram?: (ctx: ProgramContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.program_element`.
   * @param ctx the parse tree
   */
  enterProgram_element?: (ctx: Program_elementContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.program_element`.
   * @param ctx the parse tree
   */
  exitProgram_element?: (ctx: Program_elementContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.statement`.
   * @param ctx the parse tree
   */
  enterStatement?: (ctx: StatementContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.statement`.
   * @param ctx the parse tree
   */
  exitStatement?: (ctx: StatementContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.constant_declaration`.
   * @param ctx the parse tree
   */
  enterConstant_declaration?: (ctx: Constant_declarationContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.constant_declaration`.
   * @param ctx the parse tree
   */
  exitConstant_declaration?: (ctx: Constant_declarationContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.variable_declaration`.
   * @param ctx the parse tree
   */
  enterVariable_declaration?: (ctx: Variable_declarationContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.variable_declaration`.
   * @param ctx the parse tree
   */
  exitVariable_declaration?: (ctx: Variable_declarationContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.function_declaration`.
   * @param ctx the parse tree
   */
  enterFunction_declaration?: (ctx: Function_declarationContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.function_declaration`.
   * @param ctx the parse tree
   */
  exitFunction_declaration?: (ctx: Function_declarationContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.return_expression`.
   * @param ctx the parse tree
   */
  enterReturn_expression?: (ctx: Return_expressionContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.return_expression`.
   * @param ctx the parse tree
   */
  exitReturn_expression?: (ctx: Return_expressionContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.assignment`.
   * @param ctx the parse tree
   */
  enterAssignment?: (ctx: AssignmentContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.assignment`.
   * @param ctx the parse tree
   */
  exitAssignment?: (ctx: AssignmentContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.closure`.
   * @param ctx the parse tree
   */
  enterClosure?: (ctx: ClosureContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.closure`.
   * @param ctx the parse tree
   */
  exitClosure?: (ctx: ClosureContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.closure_parameter_list`.
   * @param ctx the parse tree
   */
  enterClosure_parameter_list?: (ctx: Closure_parameter_listContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.closure_parameter_list`.
   * @param ctx the parse tree
   */
  exitClosure_parameter_list?: (ctx: Closure_parameter_listContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.parens_expression`.
   * @param ctx the parse tree
   */
  enterParens_expression?: (ctx: Parens_expressionContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.parens_expression`.
   * @param ctx the parse tree
   */
  exitParens_expression?: (ctx: Parens_expressionContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.if_expression`.
   * @param ctx the parse tree
   */
  enterIf_expression?: (ctx: If_expressionContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.if_expression`.
   * @param ctx the parse tree
   */
  exitIf_expression?: (ctx: If_expressionContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.cond_expr`.
   * @param ctx the parse tree
   */
  enterCond_expr?: (ctx: Cond_exprContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.cond_expr`.
   * @param ctx the parse tree
   */
  exitCond_expr?: (ctx: Cond_exprContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.args_list`.
   * @param ctx the parse tree
   */
  enterArgs_list?: (ctx: Args_listContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.args_list`.
   * @param ctx the parse tree
   */
  exitArgs_list?: (ctx: Args_listContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.args`.
   * @param ctx the parse tree
   */
  enterArgs?: (ctx: ArgsContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.args`.
   * @param ctx the parse tree
   */
  exitArgs?: (ctx: ArgsContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.function_application`.
   * @param ctx the parse tree
   */
  enterFunction_application?: (ctx: Function_applicationContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.function_application`.
   * @param ctx the parse tree
   */
  exitFunction_application?: (ctx: Function_applicationContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.block`.
   * @param ctx the parse tree
   */
  enterBlock?: (ctx: BlockContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.block`.
   * @param ctx the parse tree
   */
  exitBlock?: (ctx: BlockContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.function_body`.
   * @param ctx the parse tree
   */
  enterFunction_body?: (ctx: Function_bodyContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.function_body`.
   * @param ctx the parse tree
   */
  exitFunction_body?: (ctx: Function_bodyContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.parameter_list`.
   * @param ctx the parse tree
   */
  enterParameter_list?: (ctx: Parameter_listContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.parameter_list`.
   * @param ctx the parse tree
   */
  exitParameter_list?: (ctx: Parameter_listContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.parameter`.
   * @param ctx the parse tree
   */
  enterParameter?: (ctx: ParameterContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.parameter`.
   * @param ctx the parse tree
   */
  exitParameter?: (ctx: ParameterContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.parameters`.
   * @param ctx the parse tree
   */
  enterParameters?: (ctx: ParametersContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.parameters`.
   * @param ctx the parse tree
   */
  exitParameters?: (ctx: ParametersContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.binary_operator`.
   * @param ctx the parse tree
   */
  enterBinary_operator?: (ctx: Binary_operatorContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.binary_operator`.
   * @param ctx the parse tree
   */
  exitBinary_operator?: (ctx: Binary_operatorContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.unary_operator`.
   * @param ctx the parse tree
   */
  enterUnary_operator?: (ctx: Unary_operatorContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.unary_operator`.
   * @param ctx the parse tree
   */
  exitUnary_operator?: (ctx: Unary_operatorContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.binary_logical_operator`.
   * @param ctx the parse tree
   */
  enterBinary_logical_operator?: (ctx: Binary_logical_operatorContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.binary_logical_operator`.
   * @param ctx the parse tree
   */
  exitBinary_logical_operator?: (ctx: Binary_logical_operatorContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.literal`.
   * @param ctx the parse tree
   */
  enterLiteral?: (ctx: LiteralContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.literal`.
   * @param ctx the parse tree
   */
  exitLiteral?: (ctx: LiteralContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.integer_literal`.
   * @param ctx the parse tree
   */
  enterInteger_literal?: (ctx: Integer_literalContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.integer_literal`.
   * @param ctx the parse tree
   */
  exitInteger_literal?: (ctx: Integer_literalContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.float_literal`.
   * @param ctx the parse tree
   */
  enterFloat_literal?: (ctx: Float_literalContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.float_literal`.
   * @param ctx the parse tree
   */
  exitFloat_literal?: (ctx: Float_literalContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.boolean_literal`.
   * @param ctx the parse tree
   */
  enterBoolean_literal?: (ctx: Boolean_literalContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.boolean_literal`.
   * @param ctx the parse tree
   */
  exitBoolean_literal?: (ctx: Boolean_literalContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.string_literal`.
   * @param ctx the parse tree
   */
  enterString_literal?: (ctx: String_literalContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.string_literal`.
   * @param ctx the parse tree
   */
  exitString_literal?: (ctx: String_literalContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.string_characters`.
   * @param ctx the parse tree
   */
  enterString_characters?: (ctx: String_charactersContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.string_characters`.
   * @param ctx the parse tree
   */
  exitString_characters?: (ctx: String_charactersContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.type`.
   * @param ctx the parse tree
   */
  enterType?: (ctx: TypeContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.type`.
   * @param ctx the parse tree
   */
  exitType?: (ctx: TypeContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.custom_type`.
   * @param ctx the parse tree
   */
  enterCustom_type?: (ctx: Custom_typeContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.custom_type`.
   * @param ctx the parse tree
   */
  exitCustom_type?: (ctx: Custom_typeContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.print_macro`.
   * @param ctx the parse tree
   */
  enterPrint_macro?: (ctx: Print_macroContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.print_macro`.
   * @param ctx the parse tree
   */
  exitPrint_macro?: (ctx: Print_macroContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.name`.
   * @param ctx the parse tree
   */
  enterName?: (ctx: NameContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.name`.
   * @param ctx the parse tree
   */
  exitName?: (ctx: NameContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.const_name`.
   * @param ctx the parse tree
   */
  enterConst_name?: (ctx: Const_nameContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.const_name`.
   * @param ctx the parse tree
   */
  exitConst_name?: (ctx: Const_nameContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.var_name`.
   * @param ctx the parse tree
   */
  enterVar_name?: (ctx: Var_nameContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.var_name`.
   * @param ctx the parse tree
   */
  exitVar_name?: (ctx: Var_nameContext) => void;

  /**
   * Enter a parse tree produced by `Rust2Parser.function_name`.
   * @param ctx the parse tree
   */
  enterFunction_name?: (ctx: Function_nameContext) => void;
  /**
   * Exit a parse tree produced by `Rust2Parser.function_name`.
   * @param ctx the parse tree
   */
  exitFunction_name?: (ctx: Function_nameContext) => void;
}
