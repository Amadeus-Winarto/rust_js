// Generated from grammars/Rust1.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { Rust1Listener } from "./Rust1Listener";
import { Rust1Visitor } from "./Rust1Visitor";

export class Rust1Parser extends Parser {
  public static readonly T__0 = 1;
  public static readonly T__1 = 2;
  public static readonly T__2 = 3;
  public static readonly T__3 = 4;
  public static readonly T__4 = 5;
  public static readonly T__5 = 6;
  public static readonly T__6 = 7;
  public static readonly T__7 = 8;
  public static readonly T__8 = 9;
  public static readonly T__9 = 10;
  public static readonly T__10 = 11;
  public static readonly T__11 = 12;
  public static readonly T__12 = 13;
  public static readonly T__13 = 14;
  public static readonly T__14 = 15;
  public static readonly T__15 = 16;
  public static readonly T__16 = 17;
  public static readonly T__17 = 18;
  public static readonly T__18 = 19;
  public static readonly T__19 = 20;
  public static readonly T__20 = 21;
  public static readonly T__21 = 22;
  public static readonly T__22 = 23;
  public static readonly T__23 = 24;
  public static readonly T__24 = 25;
  public static readonly T__25 = 26;
  public static readonly T__26 = 27;
  public static readonly T__27 = 28;
  public static readonly T__28 = 29;
  public static readonly T__29 = 30;
  public static readonly T__30 = 31;
  public static readonly T__31 = 32;
  public static readonly T__32 = 33;
  public static readonly T__33 = 34;
  public static readonly T__34 = 35;
  public static readonly T__35 = 36;
  public static readonly T__36 = 37;
  public static readonly T__37 = 38;
  public static readonly T__38 = 39;
  public static readonly T__39 = 40;
  public static readonly JUNK = 41;
  public static readonly NUMBER = 42;
  public static readonly IDENTIFIER = 43;
  public static readonly RULE_program = 0;
  public static readonly RULE_program_element = 1;
  public static readonly RULE_statement = 2;
  public static readonly RULE_constant_declaration = 3;
  public static readonly RULE_variable_declaration = 4;
  public static readonly RULE_function_declaration = 5;
  public static readonly RULE_return_expression = 6;
  public static readonly RULE_expression = 7;
  public static readonly RULE_parens_expression = 8;
  public static readonly RULE_if_expression = 9;
  public static readonly RULE_cond_expr = 10;
  public static readonly RULE_args_list = 11;
  public static readonly RULE_args = 12;
  public static readonly RULE_function_application = 13;
  public static readonly RULE_block = 14;
  public static readonly RULE_function_body = 15;
  public static readonly RULE_parameter_list = 16;
  public static readonly RULE_parameter = 17;
  public static readonly RULE_parameters = 18;
  public static readonly RULE_binary_operator = 19;
  public static readonly RULE_unary_operator = 20;
  public static readonly RULE_binary_logical_operator = 21;
  public static readonly RULE_literal = 22;
  public static readonly RULE_integer_literal = 23;
  public static readonly RULE_float_literal = 24;
  public static readonly RULE_boolean_literal = 25;
  public static readonly RULE_string_literal = 26;
  public static readonly RULE_string_characters = 27;
  public static readonly RULE_type = 28;
  public static readonly RULE_custom_type = 29;
  public static readonly RULE_print_macro = 30;
  public static readonly RULE_name = 31;
  public static readonly RULE_const_name = 32;
  public static readonly RULE_var_name = 33;
  public static readonly RULE_function_name = 34;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "program",
    "program_element",
    "statement",
    "constant_declaration",
    "variable_declaration",
    "function_declaration",
    "return_expression",
    "expression",
    "parens_expression",
    "if_expression",
    "cond_expr",
    "args_list",
    "args",
    "function_application",
    "block",
    "function_body",
    "parameter_list",
    "parameter",
    "parameters",
    "binary_operator",
    "unary_operator",
    "binary_logical_operator",
    "literal",
    "integer_literal",
    "float_literal",
    "boolean_literal",
    "string_literal",
    "string_characters",
    "type",
    "custom_type",
    "print_macro",
    "name",
    "const_name",
    "var_name",
    "function_name",
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "';'",
    "'const'",
    "':'",
    "'='",
    "'let'",
    "'fn'",
    "'->'",
    "'return'",
    "'('",
    "')'",
    "'if'",
    "'else'",
    "'()'",
    "','",
    "'{'",
    "'}'",
    "'+'",
    "'-'",
    "'*'",
    "'/'",
    "'%'",
    "'=='",
    "'!='",
    "'<'",
    "'>'",
    "'<='",
    "'>='",
    "'!'",
    "'&&'",
    "'||'",
    "'.'",
    "'true'",
    "'false'",
    "'\"'",
    "'\\'",
    "'i32'",
    "'f32'",
    "'bool'",
    "'char'",
    "'println!'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "JUNK",
    "NUMBER",
    "IDENTIFIER",
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    Rust1Parser._LITERAL_NAMES,
    Rust1Parser._SYMBOLIC_NAMES,
    [],
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return Rust1Parser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return "Rust1.g4";
  }

  // @Override
  public get ruleNames(): string[] {
    return Rust1Parser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return Rust1Parser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string,
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(Rust1Parser._ATN, this);
  }
  // @RuleVersion(0)
  public program(): ProgramContext {
    let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, Rust1Parser.RULE_program);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 70;
        this.program_element();
        this.state = 74;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === Rust1Parser.T__1 || _la === Rust1Parser.T__5) {
          {
            {
              this.state = 71;
              this.program_element();
            }
          }
          this.state = 76;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 77;
        this.match(Rust1Parser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public program_element(): Program_elementContext {
    let _localctx: Program_elementContext = new Program_elementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 2, Rust1Parser.RULE_program_element);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 81;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Rust1Parser.T__1:
            {
              this.state = 79;
              this.constant_declaration();
            }
            break;
          case Rust1Parser.T__5:
            {
              this.state = 80;
              this.function_declaration();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public statement(): StatementContext {
    let _localctx: StatementContext = new StatementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 4, Rust1Parser.RULE_statement);
    try {
      this.state = 91;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust1Parser.T__1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 83;
            this.constant_declaration();
          }
          break;
        case Rust1Parser.T__4:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 84;
            this.variable_declaration();
          }
          break;
        case Rust1Parser.T__7:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 85;
            this.return_expression();
            this.state = 86;
            this.match(Rust1Parser.T__0);
          }
          break;
        case Rust1Parser.T__8:
        case Rust1Parser.T__10:
        case Rust1Parser.T__14:
        case Rust1Parser.T__17:
        case Rust1Parser.T__27:
        case Rust1Parser.T__31:
        case Rust1Parser.T__32:
        case Rust1Parser.T__33:
        case Rust1Parser.T__39:
        case Rust1Parser.NUMBER:
        case Rust1Parser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 88;
            this.expression(0);
            this.state = 89;
            this.match(Rust1Parser.T__0);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public constant_declaration(): Constant_declarationContext {
    let _localctx: Constant_declarationContext =
      new Constant_declarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, Rust1Parser.RULE_constant_declaration);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 93;
        this.match(Rust1Parser.T__1);
        this.state = 94;
        this.const_name();
        this.state = 95;
        this.match(Rust1Parser.T__2);
        this.state = 96;
        this.type();
        this.state = 97;
        this.match(Rust1Parser.T__3);
        this.state = 98;
        this.expression(0);
        this.state = 99;
        this.match(Rust1Parser.T__0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public variable_declaration(): Variable_declarationContext {
    let _localctx: Variable_declarationContext =
      new Variable_declarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, Rust1Parser.RULE_variable_declaration);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 101;
        this.match(Rust1Parser.T__4);
        this.state = 102;
        this.var_name();
        this.state = 103;
        this.match(Rust1Parser.T__2);
        this.state = 104;
        this.type();
        this.state = 105;
        this.match(Rust1Parser.T__3);
        this.state = 106;
        this.expression(0);
        this.state = 107;
        this.match(Rust1Parser.T__0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public function_declaration(): Function_declarationContext {
    let _localctx: Function_declarationContext =
      new Function_declarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, Rust1Parser.RULE_function_declaration);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 109;
        this.match(Rust1Parser.T__5);
        this.state = 110;
        this.function_name();
        this.state = 111;
        this.parameter_list();
        this.state = 112;
        this.match(Rust1Parser.T__6);
        this.state = 113;
        this.type();
        this.state = 114;
        this.function_body();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public return_expression(): Return_expressionContext {
    let _localctx: Return_expressionContext = new Return_expressionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 12, Rust1Parser.RULE_return_expression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 116;
        this.match(Rust1Parser.T__7);
        this.state = 117;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public expression(): ExpressionContext;
  public expression(_p: number): ExpressionContext;
  // @RuleVersion(0)
  public expression(_p?: number): ExpressionContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: ExpressionContext = new ExpressionContext(
      this._ctx,
      _parentState,
    );
    let _prevctx: ExpressionContext = _localctx;
    let _startState: number = 14;
    this.enterRecursionRule(_localctx, 14, Rust1Parser.RULE_expression, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 129;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
          case 1:
            {
              this.state = 120;
              this.literal();
            }
            break;

          case 2:
            {
              this.state = 121;
              this.name();
            }
            break;

          case 3:
            {
              this.state = 122;
              this.block();
            }
            break;

          case 4:
            {
              this.state = 123;
              this.unary_operator();
              this.state = 124;
              this.expression(4);
            }
            break;

          case 5:
            {
              this.state = 126;
              this.function_application();
            }
            break;

          case 6:
            {
              this.state = 127;
              this.parens_expression();
            }
            break;

          case 7:
            {
              this.state = 128;
              this.if_expression();
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 141;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 139;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 4, this._ctx)
              ) {
                case 1:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      Rust1Parser.RULE_expression,
                    );
                    this.state = 131;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 6)",
                      );
                    }
                    this.state = 132;
                    this.binary_operator();
                    this.state = 133;
                    this.expression(7);
                  }
                  break;

                case 2:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      Rust1Parser.RULE_expression,
                    );
                    this.state = 135;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 5)",
                      );
                    }
                    this.state = 136;
                    this.binary_logical_operator();
                    this.state = 137;
                    this.expression(6);
                  }
                  break;
              }
            }
          }
          this.state = 143;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public parens_expression(): Parens_expressionContext {
    let _localctx: Parens_expressionContext = new Parens_expressionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 16, Rust1Parser.RULE_parens_expression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 144;
        this.match(Rust1Parser.T__8);
        this.state = 145;
        this.expression(0);
        this.state = 146;
        this.match(Rust1Parser.T__9);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public if_expression(): If_expressionContext {
    let _localctx: If_expressionContext = new If_expressionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 18, Rust1Parser.RULE_if_expression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 148;
        this.match(Rust1Parser.T__10);
        this.state = 149;
        this.cond_expr();
        this.state = 150;
        this.block();
        this.state = 156;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
          case 1:
            {
              this.state = 151;
              this.match(Rust1Parser.T__11);
              this.state = 154;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case Rust1Parser.T__14:
                  {
                    this.state = 152;
                    this.block();
                  }
                  break;
                case Rust1Parser.T__10:
                  {
                    this.state = 153;
                    this.if_expression();
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public cond_expr(): Cond_exprContext {
    let _localctx: Cond_exprContext = new Cond_exprContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 20, Rust1Parser.RULE_cond_expr);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 158;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public args_list(): Args_listContext {
    let _localctx: Args_listContext = new Args_listContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 22, Rust1Parser.RULE_args_list);
    try {
      this.state = 165;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust1Parser.T__12:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 160;
            this.match(Rust1Parser.T__12);
          }
          break;
        case Rust1Parser.T__8:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 161;
            this.match(Rust1Parser.T__8);
            this.state = 162;
            this.args();
            this.state = 163;
            this.match(Rust1Parser.T__9);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public args(): ArgsContext {
    let _localctx: ArgsContext = new ArgsContext(this._ctx, this.state);
    this.enterRule(_localctx, 24, Rust1Parser.RULE_args);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 175;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << Rust1Parser.T__8) |
                (1 << Rust1Parser.T__10) |
                (1 << Rust1Parser.T__14) |
                (1 << Rust1Parser.T__17) |
                (1 << Rust1Parser.T__27))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (Rust1Parser.T__31 - 32)) |
                (1 << (Rust1Parser.T__32 - 32)) |
                (1 << (Rust1Parser.T__33 - 32)) |
                (1 << (Rust1Parser.T__39 - 32)) |
                (1 << (Rust1Parser.NUMBER - 32)) |
                (1 << (Rust1Parser.IDENTIFIER - 32)))) !==
              0)
        ) {
          {
            this.state = 167;
            this.expression(0);
            this.state = 172;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === Rust1Parser.T__13) {
              {
                {
                  this.state = 168;
                  this.match(Rust1Parser.T__13);
                  this.state = 169;
                  this.expression(0);
                }
              }
              this.state = 174;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public function_application(): Function_applicationContext {
    let _localctx: Function_applicationContext =
      new Function_applicationContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, Rust1Parser.RULE_function_application);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 177;
        this.function_name();
        this.state = 178;
        this.args_list();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public block(): BlockContext {
    let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
    this.enterRule(_localctx, 28, Rust1Parser.RULE_block);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 180;
        this.match(Rust1Parser.T__14);
        this.state = 184;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 181;
                this.statement();
              }
            }
          }
          this.state = 186;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
        }
        this.state = 188;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << Rust1Parser.T__8) |
                (1 << Rust1Parser.T__10) |
                (1 << Rust1Parser.T__14) |
                (1 << Rust1Parser.T__17) |
                (1 << Rust1Parser.T__27))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (Rust1Parser.T__31 - 32)) |
                (1 << (Rust1Parser.T__32 - 32)) |
                (1 << (Rust1Parser.T__33 - 32)) |
                (1 << (Rust1Parser.T__39 - 32)) |
                (1 << (Rust1Parser.NUMBER - 32)) |
                (1 << (Rust1Parser.IDENTIFIER - 32)))) !==
              0)
        ) {
          {
            this.state = 187;
            this.expression(0);
          }
        }

        this.state = 190;
        this.match(Rust1Parser.T__15);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public function_body(): Function_bodyContext {
    let _localctx: Function_bodyContext = new Function_bodyContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 30, Rust1Parser.RULE_function_body);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 192;
        this.block();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public parameter_list(): Parameter_listContext {
    let _localctx: Parameter_listContext = new Parameter_listContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 32, Rust1Parser.RULE_parameter_list);
    try {
      this.state = 199;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust1Parser.T__12:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 194;
            this.match(Rust1Parser.T__12);
          }
          break;
        case Rust1Parser.T__8:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 195;
            this.match(Rust1Parser.T__8);
            this.state = 196;
            this.parameters();
            this.state = 197;
            this.match(Rust1Parser.T__9);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public parameter(): ParameterContext {
    let _localctx: ParameterContext = new ParameterContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 34, Rust1Parser.RULE_parameter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 201;
        this.match(Rust1Parser.IDENTIFIER);
        this.state = 202;
        this.match(Rust1Parser.T__2);
        this.state = 203;
        this.type();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public parameters(): ParametersContext {
    let _localctx: ParametersContext = new ParametersContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 36, Rust1Parser.RULE_parameters);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 213;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Rust1Parser.IDENTIFIER) {
          {
            this.state = 205;
            this.parameter();
            this.state = 210;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === Rust1Parser.T__13) {
              {
                {
                  this.state = 206;
                  this.match(Rust1Parser.T__13);
                  this.state = 207;
                  this.parameter();
                }
              }
              this.state = 212;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public binary_operator(): Binary_operatorContext {
    let _localctx: Binary_operatorContext = new Binary_operatorContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 38, Rust1Parser.RULE_binary_operator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 215;
        _la = this._input.LA(1);
        if (
          !(
            (_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << Rust1Parser.T__16) |
                (1 << Rust1Parser.T__17) |
                (1 << Rust1Parser.T__18) |
                (1 << Rust1Parser.T__19) |
                (1 << Rust1Parser.T__20) |
                (1 << Rust1Parser.T__21) |
                (1 << Rust1Parser.T__22) |
                (1 << Rust1Parser.T__23) |
                (1 << Rust1Parser.T__24) |
                (1 << Rust1Parser.T__25) |
                (1 << Rust1Parser.T__26))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public unary_operator(): Unary_operatorContext {
    let _localctx: Unary_operatorContext = new Unary_operatorContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 40, Rust1Parser.RULE_unary_operator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 217;
        _la = this._input.LA(1);
        if (!(_la === Rust1Parser.T__17 || _la === Rust1Parser.T__27)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public binary_logical_operator(): Binary_logical_operatorContext {
    let _localctx: Binary_logical_operatorContext =
      new Binary_logical_operatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 42, Rust1Parser.RULE_binary_logical_operator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 219;
        _la = this._input.LA(1);
        if (!(_la === Rust1Parser.T__28 || _la === Rust1Parser.T__29)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public literal(): LiteralContext {
    let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
    this.enterRule(_localctx, 44, Rust1Parser.RULE_literal);
    try {
      this.state = 225;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 221;
            this.integer_literal();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 222;
            this.float_literal();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 223;
            this.boolean_literal();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 224;
            this.string_literal();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public integer_literal(): Integer_literalContext {
    let _localctx: Integer_literalContext = new Integer_literalContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 46, Rust1Parser.RULE_integer_literal);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 227;
        this.match(Rust1Parser.NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public float_literal(): Float_literalContext {
    let _localctx: Float_literalContext = new Float_literalContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 48, Rust1Parser.RULE_float_literal);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 229;
        this.match(Rust1Parser.NUMBER);
        this.state = 230;
        this.match(Rust1Parser.T__30);
        this.state = 231;
        this.match(Rust1Parser.NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public boolean_literal(): Boolean_literalContext {
    let _localctx: Boolean_literalContext = new Boolean_literalContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 50, Rust1Parser.RULE_boolean_literal);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 233;
        _la = this._input.LA(1);
        if (!(_la === Rust1Parser.T__31 || _la === Rust1Parser.T__32)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public string_literal(): String_literalContext {
    let _localctx: String_literalContext = new String_literalContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 52, Rust1Parser.RULE_string_literal);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 235;
        this.match(Rust1Parser.T__33);
        this.state = 239;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << Rust1Parser.T__0) |
                (1 << Rust1Parser.T__1) |
                (1 << Rust1Parser.T__2) |
                (1 << Rust1Parser.T__3) |
                (1 << Rust1Parser.T__4) |
                (1 << Rust1Parser.T__5) |
                (1 << Rust1Parser.T__6) |
                (1 << Rust1Parser.T__7) |
                (1 << Rust1Parser.T__8) |
                (1 << Rust1Parser.T__9) |
                (1 << Rust1Parser.T__10) |
                (1 << Rust1Parser.T__11) |
                (1 << Rust1Parser.T__12) |
                (1 << Rust1Parser.T__13) |
                (1 << Rust1Parser.T__14) |
                (1 << Rust1Parser.T__15) |
                (1 << Rust1Parser.T__16) |
                (1 << Rust1Parser.T__17) |
                (1 << Rust1Parser.T__18) |
                (1 << Rust1Parser.T__19) |
                (1 << Rust1Parser.T__20) |
                (1 << Rust1Parser.T__21) |
                (1 << Rust1Parser.T__22) |
                (1 << Rust1Parser.T__23) |
                (1 << Rust1Parser.T__24) |
                (1 << Rust1Parser.T__25) |
                (1 << Rust1Parser.T__26) |
                (1 << Rust1Parser.T__27) |
                (1 << Rust1Parser.T__28) |
                (1 << Rust1Parser.T__29) |
                (1 << Rust1Parser.T__30))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (Rust1Parser.T__31 - 32)) |
                (1 << (Rust1Parser.T__32 - 32)) |
                (1 << (Rust1Parser.T__35 - 32)) |
                (1 << (Rust1Parser.T__36 - 32)) |
                (1 << (Rust1Parser.T__37 - 32)) |
                (1 << (Rust1Parser.T__38 - 32)) |
                (1 << (Rust1Parser.T__39 - 32)) |
                (1 << (Rust1Parser.JUNK - 32)) |
                (1 << (Rust1Parser.NUMBER - 32)) |
                (1 << (Rust1Parser.IDENTIFIER - 32)))) !==
              0)
        ) {
          {
            {
              this.state = 236;
              this.string_characters();
            }
          }
          this.state = 241;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 242;
        this.match(Rust1Parser.T__33);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public string_characters(): String_charactersContext {
    let _localctx: String_charactersContext = new String_charactersContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 54, Rust1Parser.RULE_string_characters);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 244;
        _la = this._input.LA(1);
        if (
          _la <= 0 ||
          _la === Rust1Parser.T__33 ||
          _la === Rust1Parser.T__34
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public type(): TypeContext {
    let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
    this.enterRule(_localctx, 56, Rust1Parser.RULE_type);
    try {
      this.state = 252;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust1Parser.T__35:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 246;
            this.match(Rust1Parser.T__35);
          }
          break;
        case Rust1Parser.T__36:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 247;
            this.match(Rust1Parser.T__36);
          }
          break;
        case Rust1Parser.T__37:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 248;
            this.match(Rust1Parser.T__37);
          }
          break;
        case Rust1Parser.T__38:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 249;
            this.match(Rust1Parser.T__38);
          }
          break;
        case Rust1Parser.T__12:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 250;
            this.match(Rust1Parser.T__12);
          }
          break;
        case Rust1Parser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 251;
            this.custom_type();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public custom_type(): Custom_typeContext {
    let _localctx: Custom_typeContext = new Custom_typeContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 58, Rust1Parser.RULE_custom_type);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 254;
        this.match(Rust1Parser.IDENTIFIER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public print_macro(): Print_macroContext {
    let _localctx: Print_macroContext = new Print_macroContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 60, Rust1Parser.RULE_print_macro);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 256;
        this.match(Rust1Parser.T__39);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public name(): NameContext {
    let _localctx: NameContext = new NameContext(this._ctx, this.state);
    this.enterRule(_localctx, 62, Rust1Parser.RULE_name);
    try {
      this.state = 262;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 258;
            this.const_name();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 259;
            this.var_name();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 260;
            this.function_name();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 261;
            this.print_macro();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public const_name(): Const_nameContext {
    let _localctx: Const_nameContext = new Const_nameContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 64, Rust1Parser.RULE_const_name);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 264;
        this.match(Rust1Parser.IDENTIFIER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public var_name(): Var_nameContext {
    let _localctx: Var_nameContext = new Var_nameContext(this._ctx, this.state);
    this.enterRule(_localctx, 66, Rust1Parser.RULE_var_name);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 266;
        this.match(Rust1Parser.IDENTIFIER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public function_name(): Function_nameContext {
    let _localctx: Function_nameContext = new Function_nameContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 68, Rust1Parser.RULE_function_name);
    try {
      this.state = 270;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust1Parser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 268;
            this.match(Rust1Parser.IDENTIFIER);
          }
          break;
        case Rust1Parser.T__39:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 269;
            this.print_macro();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public sempred(
    _localctx: RuleContext,
    ruleIndex: number,
    predIndex: number,
  ): boolean {
    switch (ruleIndex) {
      case 7:
        return this.expression_sempred(
          _localctx as ExpressionContext,
          predIndex,
        );
    }
    return true;
  }
  private expression_sempred(
    _localctx: ExpressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 6);

      case 1:
        return this.precpred(this._ctx, 5);
    }
    return true;
  }

  public static readonly _serializedATN: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03-\u0113\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    "\t#\x04$\t$\x03\x02\x03\x02\x07\x02K\n\x02\f\x02\x0E\x02N\v\x02\x03\x02" +
    "\x03\x02\x03\x03\x03\x03\x05\x03T\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
    "\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04^\n\x04\x03\x05\x03\x05\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
    "\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
    "\x03\t\x03\t\x03\t\x03\t\x05\t\x84\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
    "\t\x03\t\x03\t\x07\t\x8E\n\t\f\t\x0E\t\x91\v\t\x03\n\x03\n\x03\n\x03\n" +
    "\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\x9D\n\v\x05\v\x9F\n\v\x03\f" +
    "\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xA8\n\r\x03\x0E\x03\x0E\x03" +
    "\x0E\x07\x0E\xAD\n\x0E\f\x0E\x0E\x0E\xB0\v\x0E\x05\x0E\xB2\n\x0E\x03\x0F" +
    "\x03\x0F\x03\x0F\x03\x10\x03\x10\x07\x10\xB9\n\x10\f\x10\x0E\x10\xBC\v" +
    "\x10\x03\x10\x05\x10\xBF\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12" +
    "\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xCA\n\x12\x03\x13\x03\x13\x03" +
    "\x13\x03\x13\x03\x14\x03\x14\x03\x14\x07\x14\xD3\n\x14\f\x14\x0E\x14\xD6" +
    "\v\x14\x05\x14\xD8\n\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17" +
    "\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\xE4\n\x18\x03\x19\x03\x19\x03" +
    "\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x07\x1C\xF0" +
    "\n\x1C\f\x1C\x0E\x1C\xF3\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E" +
    "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\xFF\n\x1E\x03\x1F\x03" +
    '\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x05!\u0109\n!\x03"\x03"\x03#\x03' +
    "#\x03$\x03$\x05$\u0111\n$\x03$\x02\x02\x03\x10%\x02\x02\x04\x02\x06\x02" +
    "\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
    '\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02' +
    "4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02\x02\x07\x03\x02\x13" +
    '\x1D\x04\x02\x14\x14\x1E\x1E\x03\x02\x1F \x03\x02"#\x03\x02$%\x02\u0113' +
    "\x02H\x03\x02\x02\x02\x04S\x03\x02\x02\x02\x06]\x03\x02\x02\x02\b_\x03" +
    "\x02\x02\x02\ng\x03\x02\x02\x02\fo\x03\x02\x02\x02\x0Ev\x03\x02\x02\x02" +
    "\x10\x83\x03\x02\x02\x02\x12\x92\x03\x02\x02\x02\x14\x96\x03\x02\x02\x02" +
    "\x16\xA0\x03\x02\x02\x02\x18\xA7\x03\x02\x02\x02\x1A\xB1\x03\x02\x02\x02" +
    "\x1C\xB3\x03\x02\x02\x02\x1E\xB6\x03\x02\x02\x02 \xC2\x03\x02\x02\x02" +
    '"\xC9\x03\x02\x02\x02$\xCB\x03\x02\x02\x02&\xD7\x03\x02\x02\x02(\xD9' +
    "\x03\x02\x02\x02*\xDB\x03\x02\x02\x02,\xDD\x03\x02\x02\x02.\xE3\x03\x02" +
    "\x02\x020\xE5\x03\x02\x02\x022\xE7\x03\x02\x02\x024\xEB\x03\x02\x02\x02" +
    "6\xED\x03\x02\x02\x028\xF6\x03\x02\x02\x02:\xFE\x03\x02\x02\x02<\u0100" +
    "\x03\x02\x02\x02>\u0102\x03\x02\x02\x02@\u0108\x03\x02\x02\x02B\u010A" +
    "\x03\x02\x02\x02D\u010C\x03\x02\x02\x02F\u0110\x03\x02\x02\x02HL\x05\x04" +
    "\x03\x02IK\x05\x04\x03\x02JI\x03\x02\x02\x02KN\x03\x02\x02\x02LJ\x03\x02" +
    "\x02\x02LM\x03\x02\x02\x02MO\x03\x02\x02\x02NL\x03\x02\x02\x02OP\x07\x02" +
    "\x02\x03P\x03\x03\x02\x02\x02QT\x05\b\x05\x02RT\x05\f\x07\x02SQ\x03\x02" +
    "\x02\x02SR\x03\x02\x02\x02T\x05\x03\x02\x02\x02U^\x05\b\x05\x02V^\x05" +
    "\n\x06\x02WX\x05\x0E\b\x02XY\x07\x03\x02\x02Y^\x03\x02\x02\x02Z[\x05\x10" +
    "\t\x02[\\\x07\x03\x02\x02\\^\x03\x02\x02\x02]U\x03\x02\x02\x02]V\x03\x02" +
    "\x02\x02]W\x03\x02\x02\x02]Z\x03\x02\x02\x02^\x07\x03\x02\x02\x02_`\x07" +
    '\x04\x02\x02`a\x05B"\x02ab\x07\x05\x02\x02bc\x05:\x1E\x02cd\x07\x06\x02' +
    "\x02de\x05\x10\t\x02ef\x07\x03\x02\x02f\t\x03\x02\x02\x02gh\x07\x07\x02" +
    "\x02hi\x05D#\x02ij\x07\x05\x02\x02jk\x05:\x1E\x02kl\x07\x06\x02\x02lm" +
    "\x05\x10\t\x02mn\x07\x03\x02\x02n\v\x03\x02\x02\x02op\x07\b\x02\x02pq" +
    '\x05F$\x02qr\x05"\x12\x02rs\x07\t\x02\x02st\x05:\x1E\x02tu\x05 \x11\x02' +
    "u\r\x03\x02\x02\x02vw\x07\n\x02\x02wx\x05\x10\t\x02x\x0F\x03\x02\x02\x02" +
    "yz\b\t\x01\x02z\x84\x05.\x18\x02{\x84\x05@!\x02|\x84\x05\x1E\x10\x02}" +
    "~\x05*\x16\x02~\x7F\x05\x10\t\x06\x7F\x84\x03\x02\x02\x02\x80\x84\x05" +
    "\x1C\x0F\x02\x81\x84\x05\x12\n\x02\x82\x84\x05\x14\v\x02\x83y\x03\x02" +
    "\x02\x02\x83{\x03\x02\x02\x02\x83|\x03\x02\x02\x02\x83}\x03\x02\x02\x02" +
    "\x83\x80\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83\x82\x03\x02\x02\x02" +
    "\x84\x8F\x03\x02\x02\x02\x85\x86\f\b\x02\x02\x86\x87\x05(\x15\x02\x87" +
    "\x88\x05\x10\t\t\x88\x8E\x03\x02\x02\x02\x89\x8A\f\x07\x02\x02\x8A\x8B" +
    "\x05,\x17\x02\x8B\x8C\x05\x10\t\b\x8C\x8E\x03\x02\x02\x02\x8D\x85\x03" +
    "\x02\x02\x02\x8D\x89\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03" +
    "\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x11\x03\x02\x02\x02\x91\x8F\x03" +
    "\x02\x02\x02\x92\x93\x07\v\x02\x02\x93\x94\x05\x10\t\x02\x94\x95\x07\f" +
    "\x02\x02\x95\x13\x03\x02\x02\x02\x96\x97\x07\r\x02\x02\x97\x98\x05\x16" +
    "\f\x02\x98\x9E\x05\x1E\x10\x02\x99\x9C\x07\x0E\x02\x02\x9A\x9D\x05\x1E" +
    "\x10\x02\x9B\x9D\x05\x14\v\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9B\x03\x02" +
    "\x02\x02\x9D\x9F\x03\x02\x02\x02\x9E\x99\x03\x02\x02\x02\x9E\x9F\x03\x02" +
    "\x02\x02\x9F\x15\x03\x02\x02\x02\xA0\xA1\x05\x10\t\x02\xA1\x17\x03\x02" +
    "\x02\x02\xA2\xA8\x07\x0F\x02\x02\xA3\xA4\x07\v\x02\x02\xA4\xA5\x05\x1A" +
    "\x0E\x02\xA5\xA6\x07\f\x02\x02\xA6\xA8\x03\x02\x02\x02\xA7\xA2\x03\x02" +
    "\x02\x02\xA7\xA3\x03\x02\x02\x02\xA8\x19\x03\x02\x02\x02\xA9\xAE\x05\x10" +
    "\t\x02\xAA\xAB\x07\x10\x02\x02\xAB\xAD\x05\x10\t\x02\xAC\xAA\x03\x02\x02" +
    "\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02" +
    "\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xA9\x03\x02\x02" +
    "\x02\xB1\xB2\x03\x02\x02\x02\xB2\x1B\x03\x02\x02\x02\xB3\xB4\x05F$\x02" +
    "\xB4\xB5\x05\x18\r\x02\xB5\x1D\x03\x02\x02\x02\xB6\xBA\x07\x11\x02\x02" +
    "\xB7\xB9\x05\x06\x04\x02\xB8\xB7\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02" +
    "\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBE\x03\x02\x02\x02" +
    "\xBC\xBA\x03\x02\x02\x02\xBD\xBF\x05\x10\t\x02\xBE\xBD\x03\x02\x02\x02" +
    "\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC1\x07\x12\x02\x02" +
    "\xC1\x1F\x03\x02\x02\x02\xC2\xC3\x05\x1E\x10\x02\xC3!\x03\x02\x02\x02" +
    "\xC4\xCA\x07\x0F\x02\x02\xC5\xC6\x07\v\x02\x02\xC6\xC7\x05&\x14\x02\xC7" +
    "\xC8\x07\f\x02\x02\xC8\xCA\x03\x02\x02\x02\xC9\xC4\x03\x02\x02\x02\xC9" +
    "\xC5\x03\x02\x02\x02\xCA#\x03\x02\x02\x02\xCB\xCC\x07-\x02\x02\xCC\xCD" +
    "\x07\x05\x02\x02\xCD\xCE\x05:\x1E\x02\xCE%\x03\x02\x02\x02\xCF\xD4\x05" +
    "$\x13\x02\xD0\xD1\x07\x10\x02\x02\xD1\xD3\x05$\x13\x02\xD2\xD0\x03\x02" +
    "\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02" +
    "\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7\xCF\x03\x02" +
    "\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8'\x03\x02\x02\x02\xD9\xDA\t\x02\x02" +
    "\x02\xDA)\x03\x02\x02\x02\xDB\xDC\t\x03\x02\x02\xDC+\x03\x02\x02\x02\xDD" +
    "\xDE\t\x04\x02\x02\xDE-\x03\x02\x02\x02\xDF\xE4\x050\x19\x02\xE0\xE4\x05" +
    "2\x1A\x02\xE1\xE4\x054\x1B\x02\xE2\xE4\x056\x1C\x02\xE3\xDF\x03\x02\x02" +
    "\x02\xE3\xE0\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE2\x03\x02\x02" +
    "\x02\xE4/\x03\x02\x02\x02\xE5\xE6\x07,\x02\x02\xE61\x03\x02\x02\x02\xE7" +
    "\xE8\x07,\x02\x02\xE8\xE9\x07!\x02\x02\xE9\xEA\x07,\x02\x02\xEA3\x03\x02" +
    "\x02\x02\xEB\xEC\t\x05\x02\x02\xEC5\x03\x02\x02\x02\xED\xF1\x07$\x02\x02" +
    "\xEE\xF0\x058\x1D\x02\xEF\xEE\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02" +
    "\xF1\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF4\x03\x02\x02\x02" +
    "\xF3\xF1\x03\x02\x02\x02\xF4\xF5\x07$\x02\x02\xF57\x03\x02\x02\x02\xF6" +
    "\xF7\n\x06\x02\x02\xF79\x03\x02\x02\x02\xF8\xFF\x07&\x02\x02\xF9\xFF\x07" +
    "'\x02\x02\xFA\xFF\x07(\x02\x02\xFB\xFF\x07)\x02\x02\xFC\xFF\x07\x0F\x02" +
    "\x02\xFD\xFF\x05<\x1F\x02\xFE\xF8\x03\x02\x02\x02\xFE\xF9\x03\x02\x02" +
    "\x02\xFE\xFA\x03\x02\x02\x02\xFE\xFB\x03\x02\x02\x02\xFE\xFC\x03\x02\x02" +
    "\x02\xFE\xFD\x03\x02\x02\x02\xFF;\x03\x02\x02\x02\u0100\u0101\x07-\x02" +
    "\x02\u0101=\x03\x02\x02\x02\u0102\u0103\x07*\x02\x02\u0103?\x03\x02\x02" +
    '\x02\u0104\u0109\x05B"\x02\u0105\u0109\x05D#\x02\u0106\u0109\x05F$\x02' +
    "\u0107\u0109\x05> \x02\u0108\u0104\x03\x02\x02\x02\u0108\u0105\x03\x02" +
    "\x02\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0107\x03\x02\x02\x02\u0109" +
    "A\x03\x02\x02\x02\u010A\u010B\x07-\x02\x02\u010BC\x03\x02\x02\x02\u010C" +
    "\u010D\x07-\x02\x02\u010DE\x03\x02\x02\x02\u010E\u0111\x07-\x02\x02\u010F" +
    "\u0111\x05> \x02\u0110\u010E\x03\x02\x02\x02\u0110\u010F\x03\x02\x02\x02" +
    "\u0111G\x03\x02\x02\x02\x17LS]\x83\x8D\x8F\x9C\x9E\xA7\xAE\xB1\xBA\xBE" +
    "\xC9\xD4\xD7\xE3\xF1\xFE\u0108\u0110";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!Rust1Parser.__ATN) {
      Rust1Parser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(Rust1Parser._serializedATN),
      );
    }

    return Rust1Parser.__ATN;
  }
}

export class ProgramContext extends ParserRuleContext {
  public program_element(): Program_elementContext[];
  public program_element(i: number): Program_elementContext;
  public program_element(
    i?: number,
  ): Program_elementContext | Program_elementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Program_elementContext);
    } else {
      return this.getRuleContext(i, Program_elementContext);
    }
  }
  public EOF(): TerminalNode {
    return this.getToken(Rust1Parser.EOF, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_program;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterProgram) {
      listener.enterProgram(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitProgram) {
      listener.exitProgram(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitProgram) {
      return visitor.visitProgram(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Program_elementContext extends ParserRuleContext {
  public constant_declaration(): Constant_declarationContext | undefined {
    return this.tryGetRuleContext(0, Constant_declarationContext);
  }
  public function_declaration(): Function_declarationContext | undefined {
    return this.tryGetRuleContext(0, Function_declarationContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_program_element;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterProgram_element) {
      listener.enterProgram_element(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitProgram_element) {
      listener.exitProgram_element(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitProgram_element) {
      return visitor.visitProgram_element(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StatementContext extends ParserRuleContext {
  public constant_declaration(): Constant_declarationContext | undefined {
    return this.tryGetRuleContext(0, Constant_declarationContext);
  }
  public variable_declaration(): Variable_declarationContext | undefined {
    return this.tryGetRuleContext(0, Variable_declarationContext);
  }
  public return_expression(): Return_expressionContext | undefined {
    return this.tryGetRuleContext(0, Return_expressionContext);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_statement;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterStatement) {
      listener.enterStatement(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitStatement) {
      listener.exitStatement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitStatement) {
      return visitor.visitStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Constant_declarationContext extends ParserRuleContext {
  public const_name(): Const_nameContext {
    return this.getRuleContext(0, Const_nameContext);
  }
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_constant_declaration;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterConstant_declaration) {
      listener.enterConstant_declaration(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitConstant_declaration) {
      listener.exitConstant_declaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitConstant_declaration) {
      return visitor.visitConstant_declaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Variable_declarationContext extends ParserRuleContext {
  public var_name(): Var_nameContext {
    return this.getRuleContext(0, Var_nameContext);
  }
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_variable_declaration;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterVariable_declaration) {
      listener.enterVariable_declaration(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitVariable_declaration) {
      listener.exitVariable_declaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitVariable_declaration) {
      return visitor.visitVariable_declaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Function_declarationContext extends ParserRuleContext {
  public function_name(): Function_nameContext {
    return this.getRuleContext(0, Function_nameContext);
  }
  public parameter_list(): Parameter_listContext {
    return this.getRuleContext(0, Parameter_listContext);
  }
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext);
  }
  public function_body(): Function_bodyContext {
    return this.getRuleContext(0, Function_bodyContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_function_declaration;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterFunction_declaration) {
      listener.enterFunction_declaration(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitFunction_declaration) {
      listener.exitFunction_declaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitFunction_declaration) {
      return visitor.visitFunction_declaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Return_expressionContext extends ParserRuleContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_return_expression;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterReturn_expression) {
      listener.enterReturn_expression(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitReturn_expression) {
      listener.exitReturn_expression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitReturn_expression) {
      return visitor.visitReturn_expression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  public literal(): LiteralContext | undefined {
    return this.tryGetRuleContext(0, LiteralContext);
  }
  public name(): NameContext | undefined {
    return this.tryGetRuleContext(0, NameContext);
  }
  public block(): BlockContext | undefined {
    return this.tryGetRuleContext(0, BlockContext);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  public binary_operator(): Binary_operatorContext | undefined {
    return this.tryGetRuleContext(0, Binary_operatorContext);
  }
  public binary_logical_operator(): Binary_logical_operatorContext | undefined {
    return this.tryGetRuleContext(0, Binary_logical_operatorContext);
  }
  public unary_operator(): Unary_operatorContext | undefined {
    return this.tryGetRuleContext(0, Unary_operatorContext);
  }
  public function_application(): Function_applicationContext | undefined {
    return this.tryGetRuleContext(0, Function_applicationContext);
  }
  public parens_expression(): Parens_expressionContext | undefined {
    return this.tryGetRuleContext(0, Parens_expressionContext);
  }
  public if_expression(): If_expressionContext | undefined {
    return this.tryGetRuleContext(0, If_expressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_expression;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterExpression) {
      listener.enterExpression(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitExpression) {
      listener.exitExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitExpression) {
      return visitor.visitExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Parens_expressionContext extends ParserRuleContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_parens_expression;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterParens_expression) {
      listener.enterParens_expression(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitParens_expression) {
      listener.exitParens_expression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitParens_expression) {
      return visitor.visitParens_expression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class If_expressionContext extends ParserRuleContext {
  public cond_expr(): Cond_exprContext {
    return this.getRuleContext(0, Cond_exprContext);
  }
  public block(): BlockContext[];
  public block(i: number): BlockContext;
  public block(i?: number): BlockContext | BlockContext[] {
    if (i === undefined) {
      return this.getRuleContexts(BlockContext);
    } else {
      return this.getRuleContext(i, BlockContext);
    }
  }
  public if_expression(): If_expressionContext | undefined {
    return this.tryGetRuleContext(0, If_expressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_if_expression;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterIf_expression) {
      listener.enterIf_expression(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitIf_expression) {
      listener.exitIf_expression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitIf_expression) {
      return visitor.visitIf_expression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Cond_exprContext extends ParserRuleContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_cond_expr;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterCond_expr) {
      listener.enterCond_expr(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitCond_expr) {
      listener.exitCond_expr(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitCond_expr) {
      return visitor.visitCond_expr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Args_listContext extends ParserRuleContext {
  public args(): ArgsContext | undefined {
    return this.tryGetRuleContext(0, ArgsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_args_list;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterArgs_list) {
      listener.enterArgs_list(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitArgs_list) {
      listener.exitArgs_list(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitArgs_list) {
      return visitor.visitArgs_list(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ArgsContext extends ParserRuleContext {
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_args;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterArgs) {
      listener.enterArgs(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitArgs) {
      listener.exitArgs(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitArgs) {
      return visitor.visitArgs(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Function_applicationContext extends ParserRuleContext {
  public function_name(): Function_nameContext {
    return this.getRuleContext(0, Function_nameContext);
  }
  public args_list(): Args_listContext {
    return this.getRuleContext(0, Args_listContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_function_application;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterFunction_application) {
      listener.enterFunction_application(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitFunction_application) {
      listener.exitFunction_application(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitFunction_application) {
      return visitor.visitFunction_application(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BlockContext extends ParserRuleContext {
  public statement(): StatementContext[];
  public statement(i: number): StatementContext;
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext);
    } else {
      return this.getRuleContext(i, StatementContext);
    }
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_block;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterBlock) {
      listener.enterBlock(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitBlock) {
      listener.exitBlock(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitBlock) {
      return visitor.visitBlock(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Function_bodyContext extends ParserRuleContext {
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_function_body;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterFunction_body) {
      listener.enterFunction_body(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitFunction_body) {
      listener.exitFunction_body(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitFunction_body) {
      return visitor.visitFunction_body(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Parameter_listContext extends ParserRuleContext {
  public parameters(): ParametersContext | undefined {
    return this.tryGetRuleContext(0, ParametersContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_parameter_list;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterParameter_list) {
      listener.enterParameter_list(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitParameter_list) {
      listener.exitParameter_list(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitParameter_list) {
      return visitor.visitParameter_list(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ParameterContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode {
    return this.getToken(Rust1Parser.IDENTIFIER, 0);
  }
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_parameter;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterParameter) {
      listener.enterParameter(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitParameter) {
      listener.exitParameter(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitParameter) {
      return visitor.visitParameter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ParametersContext extends ParserRuleContext {
  public parameter(): ParameterContext[];
  public parameter(i: number): ParameterContext;
  public parameter(i?: number): ParameterContext | ParameterContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ParameterContext);
    } else {
      return this.getRuleContext(i, ParameterContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_parameters;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterParameters) {
      listener.enterParameters(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitParameters) {
      listener.exitParameters(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitParameters) {
      return visitor.visitParameters(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Binary_operatorContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_binary_operator;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterBinary_operator) {
      listener.enterBinary_operator(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitBinary_operator) {
      listener.exitBinary_operator(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitBinary_operator) {
      return visitor.visitBinary_operator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Unary_operatorContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_unary_operator;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterUnary_operator) {
      listener.enterUnary_operator(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitUnary_operator) {
      listener.exitUnary_operator(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitUnary_operator) {
      return visitor.visitUnary_operator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Binary_logical_operatorContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_binary_logical_operator;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterBinary_logical_operator) {
      listener.enterBinary_logical_operator(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitBinary_logical_operator) {
      listener.exitBinary_logical_operator(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitBinary_logical_operator) {
      return visitor.visitBinary_logical_operator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LiteralContext extends ParserRuleContext {
  public integer_literal(): Integer_literalContext | undefined {
    return this.tryGetRuleContext(0, Integer_literalContext);
  }
  public float_literal(): Float_literalContext | undefined {
    return this.tryGetRuleContext(0, Float_literalContext);
  }
  public boolean_literal(): Boolean_literalContext | undefined {
    return this.tryGetRuleContext(0, Boolean_literalContext);
  }
  public string_literal(): String_literalContext | undefined {
    return this.tryGetRuleContext(0, String_literalContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_literal;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterLiteral) {
      listener.enterLiteral(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitLiteral) {
      listener.exitLiteral(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitLiteral) {
      return visitor.visitLiteral(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Integer_literalContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(Rust1Parser.NUMBER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_integer_literal;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterInteger_literal) {
      listener.enterInteger_literal(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitInteger_literal) {
      listener.exitInteger_literal(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitInteger_literal) {
      return visitor.visitInteger_literal(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Float_literalContext extends ParserRuleContext {
  public NUMBER(): TerminalNode[];
  public NUMBER(i: number): TerminalNode;
  public NUMBER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(Rust1Parser.NUMBER);
    } else {
      return this.getToken(Rust1Parser.NUMBER, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_float_literal;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterFloat_literal) {
      listener.enterFloat_literal(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitFloat_literal) {
      listener.exitFloat_literal(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitFloat_literal) {
      return visitor.visitFloat_literal(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Boolean_literalContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_boolean_literal;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterBoolean_literal) {
      listener.enterBoolean_literal(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitBoolean_literal) {
      listener.exitBoolean_literal(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitBoolean_literal) {
      return visitor.visitBoolean_literal(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class String_literalContext extends ParserRuleContext {
  public string_characters(): String_charactersContext[];
  public string_characters(i: number): String_charactersContext;
  public string_characters(
    i?: number,
  ): String_charactersContext | String_charactersContext[] {
    if (i === undefined) {
      return this.getRuleContexts(String_charactersContext);
    } else {
      return this.getRuleContext(i, String_charactersContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_string_literal;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterString_literal) {
      listener.enterString_literal(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitString_literal) {
      listener.exitString_literal(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitString_literal) {
      return visitor.visitString_literal(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class String_charactersContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_string_characters;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterString_characters) {
      listener.enterString_characters(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitString_characters) {
      listener.exitString_characters(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitString_characters) {
      return visitor.visitString_characters(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TypeContext extends ParserRuleContext {
  public custom_type(): Custom_typeContext | undefined {
    return this.tryGetRuleContext(0, Custom_typeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_type;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterType) {
      listener.enterType(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitType) {
      listener.exitType(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitType) {
      return visitor.visitType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Custom_typeContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode {
    return this.getToken(Rust1Parser.IDENTIFIER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_custom_type;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterCustom_type) {
      listener.enterCustom_type(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitCustom_type) {
      listener.exitCustom_type(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitCustom_type) {
      return visitor.visitCustom_type(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Print_macroContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_print_macro;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterPrint_macro) {
      listener.enterPrint_macro(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitPrint_macro) {
      listener.exitPrint_macro(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitPrint_macro) {
      return visitor.visitPrint_macro(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class NameContext extends ParserRuleContext {
  public const_name(): Const_nameContext | undefined {
    return this.tryGetRuleContext(0, Const_nameContext);
  }
  public var_name(): Var_nameContext | undefined {
    return this.tryGetRuleContext(0, Var_nameContext);
  }
  public function_name(): Function_nameContext | undefined {
    return this.tryGetRuleContext(0, Function_nameContext);
  }
  public print_macro(): Print_macroContext | undefined {
    return this.tryGetRuleContext(0, Print_macroContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_name;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterName) {
      listener.enterName(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitName) {
      listener.exitName(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitName) {
      return visitor.visitName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Const_nameContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode {
    return this.getToken(Rust1Parser.IDENTIFIER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_const_name;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterConst_name) {
      listener.enterConst_name(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitConst_name) {
      listener.exitConst_name(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitConst_name) {
      return visitor.visitConst_name(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Var_nameContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode {
    return this.getToken(Rust1Parser.IDENTIFIER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_var_name;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterVar_name) {
      listener.enterVar_name(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitVar_name) {
      listener.exitVar_name(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitVar_name) {
      return visitor.visitVar_name(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Function_nameContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(Rust1Parser.IDENTIFIER, 0);
  }
  public print_macro(): Print_macroContext | undefined {
    return this.tryGetRuleContext(0, Print_macroContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust1Parser.RULE_function_name;
  }
  // @Override
  public enterRule(listener: Rust1Listener): void {
    if (listener.enterFunction_name) {
      listener.enterFunction_name(this);
    }
  }
  // @Override
  public exitRule(listener: Rust1Listener): void {
    if (listener.exitFunction_name) {
      listener.exitFunction_name(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust1Visitor<Result>): Result {
    if (visitor.visitFunction_name) {
      return visitor.visitFunction_name(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
