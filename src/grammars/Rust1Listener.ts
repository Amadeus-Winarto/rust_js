// Generated from grammars/Rust1.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./Rust1Parser";
import { StatementContext } from "./Rust1Parser";
import { Constant_declarationContext } from "./Rust1Parser";
import { Variable_declarationContext } from "./Rust1Parser";
import { Function_declarationContext } from "./Rust1Parser";
import { Return_expressionContext } from "./Rust1Parser";
import { ExpressionContext } from "./Rust1Parser";
import { Parens_expressionContext } from "./Rust1Parser";
import { If_expressionContext } from "./Rust1Parser";
import { Cond_exprContext } from "./Rust1Parser";
import { Function_applicationContext } from "./Rust1Parser";
import { BlockContext } from "./Rust1Parser";
import { Function_bodyContext } from "./Rust1Parser";
import { Parameter_listContext } from "./Rust1Parser";
import { ParameterContext } from "./Rust1Parser";
import { ParametersContext } from "./Rust1Parser";
import { Binary_operatorContext } from "./Rust1Parser";
import { Unary_operatorContext } from "./Rust1Parser";
import { Binary_logical_operatorContext } from "./Rust1Parser";
import { LiteralContext } from "./Rust1Parser";
import { Integer_literalContext } from "./Rust1Parser";
import { Float_literalContext } from "./Rust1Parser";
import { Boolean_literalContext } from "./Rust1Parser";
import { String_literalContext } from "./Rust1Parser";
import { String_charactersContext } from "./Rust1Parser";
import { TypeContext } from "./Rust1Parser";
import { Custom_typeContext } from "./Rust1Parser";
import { Print_macroContext } from "./Rust1Parser";
import { NameContext } from "./Rust1Parser";
import { Const_nameContext } from "./Rust1Parser";
import { Var_nameContext } from "./Rust1Parser";
import { Function_nameContext } from "./Rust1Parser";

/**
 * This interface defines a complete listener for a parse tree produced by
 * `Rust1Parser`.
 */
export interface Rust1Listener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `Rust1Parser.program`.
   * @param ctx the parse tree
   */
  enterProgram?: (ctx: ProgramContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.program`.
   * @param ctx the parse tree
   */
  exitProgram?: (ctx: ProgramContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.statement`.
   * @param ctx the parse tree
   */
  enterStatement?: (ctx: StatementContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.statement`.
   * @param ctx the parse tree
   */
  exitStatement?: (ctx: StatementContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.constant_declaration`.
   * @param ctx the parse tree
   */
  enterConstant_declaration?: (ctx: Constant_declarationContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.constant_declaration`.
   * @param ctx the parse tree
   */
  exitConstant_declaration?: (ctx: Constant_declarationContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.variable_declaration`.
   * @param ctx the parse tree
   */
  enterVariable_declaration?: (ctx: Variable_declarationContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.variable_declaration`.
   * @param ctx the parse tree
   */
  exitVariable_declaration?: (ctx: Variable_declarationContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.function_declaration`.
   * @param ctx the parse tree
   */
  enterFunction_declaration?: (ctx: Function_declarationContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.function_declaration`.
   * @param ctx the parse tree
   */
  exitFunction_declaration?: (ctx: Function_declarationContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.return_expression`.
   * @param ctx the parse tree
   */
  enterReturn_expression?: (ctx: Return_expressionContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.return_expression`.
   * @param ctx the parse tree
   */
  exitReturn_expression?: (ctx: Return_expressionContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.parens_expression`.
   * @param ctx the parse tree
   */
  enterParens_expression?: (ctx: Parens_expressionContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.parens_expression`.
   * @param ctx the parse tree
   */
  exitParens_expression?: (ctx: Parens_expressionContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.if_expression`.
   * @param ctx the parse tree
   */
  enterIf_expression?: (ctx: If_expressionContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.if_expression`.
   * @param ctx the parse tree
   */
  exitIf_expression?: (ctx: If_expressionContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.cond_expr`.
   * @param ctx the parse tree
   */
  enterCond_expr?: (ctx: Cond_exprContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.cond_expr`.
   * @param ctx the parse tree
   */
  exitCond_expr?: (ctx: Cond_exprContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.function_application`.
   * @param ctx the parse tree
   */
  enterFunction_application?: (ctx: Function_applicationContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.function_application`.
   * @param ctx the parse tree
   */
  exitFunction_application?: (ctx: Function_applicationContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.block`.
   * @param ctx the parse tree
   */
  enterBlock?: (ctx: BlockContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.block`.
   * @param ctx the parse tree
   */
  exitBlock?: (ctx: BlockContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.function_body`.
   * @param ctx the parse tree
   */
  enterFunction_body?: (ctx: Function_bodyContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.function_body`.
   * @param ctx the parse tree
   */
  exitFunction_body?: (ctx: Function_bodyContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.parameter_list`.
   * @param ctx the parse tree
   */
  enterParameter_list?: (ctx: Parameter_listContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.parameter_list`.
   * @param ctx the parse tree
   */
  exitParameter_list?: (ctx: Parameter_listContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.parameter`.
   * @param ctx the parse tree
   */
  enterParameter?: (ctx: ParameterContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.parameter`.
   * @param ctx the parse tree
   */
  exitParameter?: (ctx: ParameterContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.parameters`.
   * @param ctx the parse tree
   */
  enterParameters?: (ctx: ParametersContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.parameters`.
   * @param ctx the parse tree
   */
  exitParameters?: (ctx: ParametersContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.binary_operator`.
   * @param ctx the parse tree
   */
  enterBinary_operator?: (ctx: Binary_operatorContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.binary_operator`.
   * @param ctx the parse tree
   */
  exitBinary_operator?: (ctx: Binary_operatorContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.unary_operator`.
   * @param ctx the parse tree
   */
  enterUnary_operator?: (ctx: Unary_operatorContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.unary_operator`.
   * @param ctx the parse tree
   */
  exitUnary_operator?: (ctx: Unary_operatorContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.binary_logical_operator`.
   * @param ctx the parse tree
   */
  enterBinary_logical_operator?: (ctx: Binary_logical_operatorContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.binary_logical_operator`.
   * @param ctx the parse tree
   */
  exitBinary_logical_operator?: (ctx: Binary_logical_operatorContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.literal`.
   * @param ctx the parse tree
   */
  enterLiteral?: (ctx: LiteralContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.literal`.
   * @param ctx the parse tree
   */
  exitLiteral?: (ctx: LiteralContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.integer_literal`.
   * @param ctx the parse tree
   */
  enterInteger_literal?: (ctx: Integer_literalContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.integer_literal`.
   * @param ctx the parse tree
   */
  exitInteger_literal?: (ctx: Integer_literalContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.float_literal`.
   * @param ctx the parse tree
   */
  enterFloat_literal?: (ctx: Float_literalContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.float_literal`.
   * @param ctx the parse tree
   */
  exitFloat_literal?: (ctx: Float_literalContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.boolean_literal`.
   * @param ctx the parse tree
   */
  enterBoolean_literal?: (ctx: Boolean_literalContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.boolean_literal`.
   * @param ctx the parse tree
   */
  exitBoolean_literal?: (ctx: Boolean_literalContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.string_literal`.
   * @param ctx the parse tree
   */
  enterString_literal?: (ctx: String_literalContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.string_literal`.
   * @param ctx the parse tree
   */
  exitString_literal?: (ctx: String_literalContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.string_characters`.
   * @param ctx the parse tree
   */
  enterString_characters?: (ctx: String_charactersContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.string_characters`.
   * @param ctx the parse tree
   */
  exitString_characters?: (ctx: String_charactersContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.type`.
   * @param ctx the parse tree
   */
  enterType?: (ctx: TypeContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.type`.
   * @param ctx the parse tree
   */
  exitType?: (ctx: TypeContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.custom_type`.
   * @param ctx the parse tree
   */
  enterCustom_type?: (ctx: Custom_typeContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.custom_type`.
   * @param ctx the parse tree
   */
  exitCustom_type?: (ctx: Custom_typeContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.print_macro`.
   * @param ctx the parse tree
   */
  enterPrint_macro?: (ctx: Print_macroContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.print_macro`.
   * @param ctx the parse tree
   */
  exitPrint_macro?: (ctx: Print_macroContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.name`.
   * @param ctx the parse tree
   */
  enterName?: (ctx: NameContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.name`.
   * @param ctx the parse tree
   */
  exitName?: (ctx: NameContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.const_name`.
   * @param ctx the parse tree
   */
  enterConst_name?: (ctx: Const_nameContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.const_name`.
   * @param ctx the parse tree
   */
  exitConst_name?: (ctx: Const_nameContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.var_name`.
   * @param ctx the parse tree
   */
  enterVar_name?: (ctx: Var_nameContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.var_name`.
   * @param ctx the parse tree
   */
  exitVar_name?: (ctx: Var_nameContext) => void;

  /**
   * Enter a parse tree produced by `Rust1Parser.function_name`.
   * @param ctx the parse tree
   */
  enterFunction_name?: (ctx: Function_nameContext) => void;
  /**
   * Exit a parse tree produced by `Rust1Parser.function_name`.
   * @param ctx the parse tree
   */
  exitFunction_name?: (ctx: Function_nameContext) => void;
}
