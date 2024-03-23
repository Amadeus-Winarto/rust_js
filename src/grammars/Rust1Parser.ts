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
  public static readonly JUNK = 40;
  public static readonly NUMBER = 41;
  public static readonly IDENTIFIER = 42;
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
  public static readonly RULE_function_application = 11;
  public static readonly RULE_block = 12;
  public static readonly RULE_function_body = 13;
  public static readonly RULE_parameter_list = 14;
  public static readonly RULE_parameter = 15;
  public static readonly RULE_parameters = 16;
  public static readonly RULE_binary_operator = 17;
  public static readonly RULE_unary_operator = 18;
  public static readonly RULE_binary_logical_operator = 19;
  public static readonly RULE_literal = 20;
  public static readonly RULE_integer_literal = 21;
  public static readonly RULE_float_literal = 22;
  public static readonly RULE_boolean_literal = 23;
  public static readonly RULE_string_literal = 24;
  public static readonly RULE_string_characters = 25;
  public static readonly RULE_type = 26;
  public static readonly RULE_custom_type = 27;
  public static readonly RULE_print_macro = 28;
  public static readonly RULE_name = 29;
  public static readonly RULE_const_name = 30;
  public static readonly RULE_var_name = 31;
  public static readonly RULE_function_name = 32;
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
    "','",
    "'{'",
    "'}'",
    "'()'",
    "'+'",
    "'-'",
    "'*'",
    "'/'",
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
        this.state = 66;
        this.program_element();
        this.state = 70;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === Rust1Parser.T__1 || _la === Rust1Parser.T__5) {
          {
            {
              this.state = 67;
              this.program_element();
            }
          }
          this.state = 72;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 73;
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
        this.state = 77;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Rust1Parser.T__1:
            {
              this.state = 75;
              this.constant_declaration();
            }
            break;
          case Rust1Parser.T__5:
            {
              this.state = 76;
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
      this.state = 87;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust1Parser.T__1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 79;
            this.constant_declaration();
          }
          break;
        case Rust1Parser.T__4:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 80;
            this.variable_declaration();
          }
          break;
        case Rust1Parser.T__7:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 81;
            this.return_expression();
            this.state = 82;
            this.match(Rust1Parser.T__0);
          }
          break;
        case Rust1Parser.T__8:
        case Rust1Parser.T__10:
        case Rust1Parser.T__13:
        case Rust1Parser.T__17:
        case Rust1Parser.T__26:
        case Rust1Parser.T__30:
        case Rust1Parser.T__31:
        case Rust1Parser.T__32:
        case Rust1Parser.T__38:
        case Rust1Parser.NUMBER:
        case Rust1Parser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 84;
            this.expression(0);
            this.state = 85;
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
        this.state = 89;
        this.match(Rust1Parser.T__1);
        this.state = 90;
        this.const_name();
        this.state = 91;
        this.match(Rust1Parser.T__2);
        this.state = 92;
        this.type();
        this.state = 93;
        this.match(Rust1Parser.T__3);
        this.state = 94;
        this.expression(0);
        this.state = 95;
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
        this.state = 97;
        this.match(Rust1Parser.T__4);
        this.state = 98;
        this.var_name();
        this.state = 99;
        this.match(Rust1Parser.T__2);
        this.state = 100;
        this.type();
        this.state = 101;
        this.match(Rust1Parser.T__3);
        this.state = 102;
        this.expression(0);
        this.state = 103;
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
        this.state = 105;
        this.match(Rust1Parser.T__5);
        this.state = 106;
        this.function_name();
        this.state = 107;
        this.parameter_list();
        this.state = 108;
        this.match(Rust1Parser.T__6);
        this.state = 109;
        this.type();
        this.state = 110;
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
        this.state = 112;
        this.match(Rust1Parser.T__7);
        this.state = 113;
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
        this.state = 125;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
          case 1:
            {
              this.state = 116;
              this.literal();
            }
            break;

          case 2:
            {
              this.state = 117;
              this.name();
            }
            break;

          case 3:
            {
              this.state = 118;
              this.block();
            }
            break;

          case 4:
            {
              this.state = 119;
              this.unary_operator();
              this.state = 120;
              this.expression(4);
            }
            break;

          case 5:
            {
              this.state = 122;
              this.function_application();
            }
            break;

          case 6:
            {
              this.state = 123;
              this.parens_expression();
            }
            break;

          case 7:
            {
              this.state = 124;
              this.if_expression();
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 137;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 135;
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
                    this.state = 127;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 6)",
                      );
                    }
                    this.state = 128;
                    this.binary_operator();
                    this.state = 129;
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
                    this.state = 131;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 5)",
                      );
                    }
                    this.state = 132;
                    this.binary_logical_operator();
                    this.state = 133;
                    this.expression(6);
                  }
                  break;
              }
            }
          }
          this.state = 139;
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
        this.state = 140;
        this.match(Rust1Parser.T__8);
        this.state = 141;
        this.expression(0);
        this.state = 142;
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
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 144;
        this.match(Rust1Parser.T__10);
        this.state = 145;
        this.cond_expr();
        this.state = 146;
        this.block();
        this.state = 159;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
          case 1:
            {
              this.state = 154;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                6,
                this._ctx,
              );
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 147;
                      this.match(Rust1Parser.T__11);
                      this.state = 148;
                      this.match(Rust1Parser.T__10);
                      this.state = 149;
                      this.cond_expr();
                      this.state = 150;
                      this.block();
                    }
                  }
                }
                this.state = 156;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(
                  this._input,
                  6,
                  this._ctx,
                );
              }
              this.state = 157;
              this.match(Rust1Parser.T__11);
              this.state = 158;
              this.block();
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
        this.state = 161;
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
  public function_application(): Function_applicationContext {
    let _localctx: Function_applicationContext =
      new Function_applicationContext(this._ctx, this.state);
    this.enterRule(_localctx, 22, Rust1Parser.RULE_function_application);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 163;
        this.function_name();
        this.state = 164;
        this.match(Rust1Parser.T__8);
        this.state = 173;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << Rust1Parser.T__8) |
                (1 << Rust1Parser.T__10) |
                (1 << Rust1Parser.T__13) |
                (1 << Rust1Parser.T__17) |
                (1 << Rust1Parser.T__26) |
                (1 << Rust1Parser.T__30))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (Rust1Parser.T__31 - 32)) |
                (1 << (Rust1Parser.T__32 - 32)) |
                (1 << (Rust1Parser.T__38 - 32)) |
                (1 << (Rust1Parser.NUMBER - 32)) |
                (1 << (Rust1Parser.IDENTIFIER - 32)))) !==
              0)
        ) {
          {
            this.state = 165;
            this.expression(0);
            this.state = 170;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === Rust1Parser.T__12) {
              {
                {
                  this.state = 166;
                  this.match(Rust1Parser.T__12);
                  this.state = 167;
                  this.expression(0);
                }
              }
              this.state = 172;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }

        this.state = 175;
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
  public block(): BlockContext {
    let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
    this.enterRule(_localctx, 24, Rust1Parser.RULE_block);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 177;
        this.match(Rust1Parser.T__13);
        this.state = 181;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 178;
                this.statement();
              }
            }
          }
          this.state = 183;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
        }
        this.state = 185;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << Rust1Parser.T__8) |
                (1 << Rust1Parser.T__10) |
                (1 << Rust1Parser.T__13) |
                (1 << Rust1Parser.T__17) |
                (1 << Rust1Parser.T__26) |
                (1 << Rust1Parser.T__30))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (Rust1Parser.T__31 - 32)) |
                (1 << (Rust1Parser.T__32 - 32)) |
                (1 << (Rust1Parser.T__38 - 32)) |
                (1 << (Rust1Parser.NUMBER - 32)) |
                (1 << (Rust1Parser.IDENTIFIER - 32)))) !==
              0)
        ) {
          {
            this.state = 184;
            this.expression(0);
          }
        }

        this.state = 187;
        this.match(Rust1Parser.T__14);
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
    this.enterRule(_localctx, 26, Rust1Parser.RULE_function_body);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 189;
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
    this.enterRule(_localctx, 28, Rust1Parser.RULE_parameter_list);
    try {
      this.state = 196;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust1Parser.T__15:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 191;
            this.match(Rust1Parser.T__15);
          }
          break;
        case Rust1Parser.T__8:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 192;
            this.match(Rust1Parser.T__8);
            this.state = 193;
            this.parameters();
            this.state = 194;
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
    this.enterRule(_localctx, 30, Rust1Parser.RULE_parameter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 198;
        this.match(Rust1Parser.IDENTIFIER);
        this.state = 199;
        this.match(Rust1Parser.T__2);
        this.state = 200;
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
    this.enterRule(_localctx, 32, Rust1Parser.RULE_parameters);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 210;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Rust1Parser.IDENTIFIER) {
          {
            this.state = 202;
            this.parameter();
            this.state = 207;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === Rust1Parser.T__12) {
              {
                {
                  this.state = 203;
                  this.match(Rust1Parser.T__12);
                  this.state = 204;
                  this.parameter();
                }
              }
              this.state = 209;
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
    this.enterRule(_localctx, 34, Rust1Parser.RULE_binary_operator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 212;
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
                (1 << Rust1Parser.T__25))) !==
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
    this.enterRule(_localctx, 36, Rust1Parser.RULE_unary_operator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 214;
        _la = this._input.LA(1);
        if (!(_la === Rust1Parser.T__17 || _la === Rust1Parser.T__26)) {
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
    this.enterRule(_localctx, 38, Rust1Parser.RULE_binary_logical_operator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 216;
        _la = this._input.LA(1);
        if (!(_la === Rust1Parser.T__27 || _la === Rust1Parser.T__28)) {
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
    this.enterRule(_localctx, 40, Rust1Parser.RULE_literal);
    try {
      this.state = 222;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 218;
            this.integer_literal();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 219;
            this.float_literal();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 220;
            this.boolean_literal();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 221;
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
    this.enterRule(_localctx, 42, Rust1Parser.RULE_integer_literal);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 224;
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
    this.enterRule(_localctx, 44, Rust1Parser.RULE_float_literal);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 226;
        this.match(Rust1Parser.NUMBER);
        this.state = 227;
        this.match(Rust1Parser.T__29);
        this.state = 228;
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
    this.enterRule(_localctx, 46, Rust1Parser.RULE_boolean_literal);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 230;
        _la = this._input.LA(1);
        if (!(_la === Rust1Parser.T__30 || _la === Rust1Parser.T__31)) {
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
    this.enterRule(_localctx, 48, Rust1Parser.RULE_string_literal);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 232;
        this.match(Rust1Parser.T__32);
        this.state = 236;
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
                (1 << (Rust1Parser.T__34 - 32)) |
                (1 << (Rust1Parser.T__35 - 32)) |
                (1 << (Rust1Parser.T__36 - 32)) |
                (1 << (Rust1Parser.T__37 - 32)) |
                (1 << (Rust1Parser.T__38 - 32)) |
                (1 << (Rust1Parser.JUNK - 32)) |
                (1 << (Rust1Parser.NUMBER - 32)) |
                (1 << (Rust1Parser.IDENTIFIER - 32)))) !==
              0)
        ) {
          {
            {
              this.state = 233;
              this.string_characters();
            }
          }
          this.state = 238;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 239;
        this.match(Rust1Parser.T__32);
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
    this.enterRule(_localctx, 50, Rust1Parser.RULE_string_characters);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 241;
        _la = this._input.LA(1);
        if (
          _la <= 0 ||
          _la === Rust1Parser.T__32 ||
          _la === Rust1Parser.T__33
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
    this.enterRule(_localctx, 52, Rust1Parser.RULE_type);
    try {
      this.state = 249;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust1Parser.T__34:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 243;
            this.match(Rust1Parser.T__34);
          }
          break;
        case Rust1Parser.T__35:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 244;
            this.match(Rust1Parser.T__35);
          }
          break;
        case Rust1Parser.T__36:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 245;
            this.match(Rust1Parser.T__36);
          }
          break;
        case Rust1Parser.T__37:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 246;
            this.match(Rust1Parser.T__37);
          }
          break;
        case Rust1Parser.T__15:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 247;
            this.match(Rust1Parser.T__15);
          }
          break;
        case Rust1Parser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 248;
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
    this.enterRule(_localctx, 54, Rust1Parser.RULE_custom_type);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 251;
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
    this.enterRule(_localctx, 56, Rust1Parser.RULE_print_macro);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 253;
        this.match(Rust1Parser.T__38);
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
    this.enterRule(_localctx, 58, Rust1Parser.RULE_name);
    try {
      this.state = 259;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 255;
            this.const_name();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 256;
            this.var_name();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 257;
            this.function_name();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 258;
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
    this.enterRule(_localctx, 60, Rust1Parser.RULE_const_name);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 261;
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
    this.enterRule(_localctx, 62, Rust1Parser.RULE_var_name);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 263;
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
    this.enterRule(_localctx, 64, Rust1Parser.RULE_function_name);
    try {
      this.state = 267;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust1Parser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 265;
            this.match(Rust1Parser.IDENTIFIER);
          }
          break;
        case Rust1Parser.T__38:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 266;
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
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03,\u0110\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x03\x02' +
    "\x03\x02\x07\x02G\n\x02\f\x02\x0E\x02J\v\x02\x03\x02\x03\x02\x03\x03\x03" +
    "\x03\x05\x03P\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
    "\x04\x03\x04\x05\x04Z\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
    "\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
    "\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
    "\t\x05\t\x80\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t" +
    "\x8A\n\t\f\t\x0E\t\x8D\v\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
    "\v\x03\v\x03\v\x03\v\x03\v\x07\v\x9B\n\v\f\v\x0E\v\x9E\v\v\x03\v\x03\v" +
    "\x05\v\xA2\n\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xAB\n\r" +
    "\f\r\x0E\r\xAE\v\r\x05\r\xB0\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x07\x0E\xB6" +
    "\n\x0E\f\x0E\x0E\x0E\xB9\v\x0E\x03\x0E\x05\x0E\xBC\n\x0E\x03\x0E\x03\x0E" +
    "\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xC7\n" +
    "\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\xD0" +
    "\n\x12\f\x12\x0E\x12\xD3\v\x12\x05\x12\xD5\n\x12\x03\x13\x03\x13\x03\x14" +
    "\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\xE1\n" +
    "\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
    "\x1A\x03\x1A\x07\x1A\xED\n\x1A\f\x1A\x0E\x1A\xF0\v\x1A\x03\x1A\x03\x1A" +
    "\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C" +
    "\xFC\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
    '\x1F\x05\x1F\u0106\n\x1F\x03 \x03 \x03!\x03!\x03"\x03"\x05"\u010E\n' +
    '"\x03"\x02\x02\x03\x10#\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E' +
    "\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
    '\x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02' +
    "<\x02>\x02@\x02B\x02\x02\x07\x03\x02\x13\x1C\x04\x02\x14\x14\x1D\x1D\x03" +
    '\x02\x1E\x1F\x03\x02!"\x03\x02#$\x02\u0111\x02D\x03\x02\x02\x02\x04O' +
    "\x03\x02\x02\x02\x06Y\x03\x02\x02\x02\b[\x03\x02\x02\x02\nc\x03\x02\x02" +
    "\x02\fk\x03\x02\x02\x02\x0Er\x03\x02\x02\x02\x10\x7F\x03\x02\x02\x02\x12" +
    "\x8E\x03\x02\x02\x02\x14\x92\x03\x02\x02\x02\x16\xA3\x03\x02\x02\x02\x18" +
    "\xA5\x03\x02\x02\x02\x1A\xB3\x03\x02\x02\x02\x1C\xBF\x03\x02\x02\x02\x1E" +
    '\xC6\x03\x02\x02\x02 \xC8\x03\x02\x02\x02"\xD4\x03\x02\x02\x02$\xD6\x03' +
    "\x02\x02\x02&\xD8\x03\x02\x02\x02(\xDA\x03\x02\x02\x02*\xE0\x03\x02\x02" +
    "\x02,\xE2\x03\x02\x02\x02.\xE4\x03\x02\x02\x020\xE8\x03\x02\x02\x022\xEA" +
    "\x03\x02\x02\x024\xF3\x03\x02\x02\x026\xFB\x03\x02\x02\x028\xFD\x03\x02" +
    "\x02\x02:\xFF\x03\x02\x02\x02<\u0105\x03\x02\x02\x02>\u0107\x03\x02\x02" +
    "\x02@\u0109\x03\x02\x02\x02B\u010D\x03\x02\x02\x02DH\x05\x04\x03\x02E" +
    "G\x05\x04\x03\x02FE\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02" +
    "HI\x03\x02\x02\x02IK\x03\x02\x02\x02JH\x03\x02\x02\x02KL\x07\x02\x02\x03" +
    "L\x03\x03\x02\x02\x02MP\x05\b\x05\x02NP\x05\f\x07\x02OM\x03\x02\x02\x02" +
    "ON\x03\x02\x02\x02P\x05\x03\x02\x02\x02QZ\x05\b\x05\x02RZ\x05\n\x06\x02" +
    "ST\x05\x0E\b\x02TU\x07\x03\x02\x02UZ\x03\x02\x02\x02VW\x05\x10\t\x02W" +
    "X\x07\x03\x02\x02XZ\x03\x02\x02\x02YQ\x03\x02\x02\x02YR\x03\x02\x02\x02" +
    "YS\x03\x02\x02\x02YV\x03\x02\x02\x02Z\x07\x03\x02\x02\x02[\\\x07\x04\x02" +
    "\x02\\]\x05> \x02]^\x07\x05\x02\x02^_\x056\x1C\x02_`\x07\x06\x02\x02`" +
    "a\x05\x10\t\x02ab\x07\x03\x02\x02b\t\x03\x02\x02\x02cd\x07\x07\x02\x02" +
    "de\x05@!\x02ef\x07\x05\x02\x02fg\x056\x1C\x02gh\x07\x06\x02\x02hi\x05" +
    "\x10\t\x02ij\x07\x03\x02\x02j\v\x03\x02\x02\x02kl\x07\b\x02\x02lm\x05" +
    'B"\x02mn\x05\x1E\x10\x02no\x07\t\x02\x02op\x056\x1C\x02pq\x05\x1C\x0F' +
    "\x02q\r\x03\x02\x02\x02rs\x07\n\x02\x02st\x05\x10\t\x02t\x0F\x03\x02\x02" +
    "\x02uv\b\t\x01\x02v\x80\x05*\x16\x02w\x80\x05<\x1F\x02x\x80\x05\x1A\x0E" +
    "\x02yz\x05&\x14\x02z{\x05\x10\t\x06{\x80\x03\x02\x02\x02|\x80\x05\x18" +
    "\r\x02}\x80\x05\x12\n\x02~\x80\x05\x14\v\x02\x7Fu\x03\x02\x02\x02\x7F" +
    "w\x03\x02\x02\x02\x7Fx\x03\x02\x02\x02\x7Fy\x03\x02\x02\x02\x7F|\x03\x02" +
    "\x02\x02\x7F}\x03\x02\x02\x02\x7F~\x03\x02\x02\x02\x80\x8B\x03\x02\x02" +
    "\x02\x81\x82\f\b\x02\x02\x82\x83\x05$\x13\x02\x83\x84\x05\x10\t\t\x84" +
    "\x8A\x03\x02\x02\x02\x85\x86\f\x07\x02\x02\x86\x87\x05(\x15\x02\x87\x88" +
    "\x05\x10\t\b\x88\x8A\x03\x02\x02\x02\x89\x81\x03\x02\x02\x02\x89\x85\x03" +
    "\x02\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03" +
    "\x02\x02\x02\x8C\x11\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E\x8F\x07" +
    "\v\x02\x02\x8F\x90\x05\x10\t\x02\x90\x91\x07\f\x02\x02\x91\x13\x03\x02" +
    "\x02\x02\x92\x93\x07\r\x02\x02\x93\x94\x05\x16\f\x02\x94\xA1\x05\x1A\x0E" +
    "\x02\x95\x96\x07\x0E\x02\x02\x96\x97\x07\r\x02\x02\x97\x98\x05\x16\f\x02" +
    "\x98\x99\x05\x1A\x0E\x02\x99\x9B\x03\x02\x02\x02\x9A\x95\x03\x02\x02\x02" +
    "\x9B\x9E\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02" +
    "\x9D\x9F\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA0\x07\x0E\x02\x02" +
    "\xA0\xA2\x05\x1A\x0E\x02\xA1\x9C\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02" +
    "\xA2\x15\x03\x02\x02\x02\xA3\xA4\x05\x10\t\x02\xA4\x17\x03\x02\x02\x02" +
    '\xA5\xA6\x05B"\x02\xA6\xAF\x07\v\x02\x02\xA7\xAC\x05\x10\t\x02\xA8\xA9' +
    "\x07\x0F\x02\x02\xA9\xAB\x05\x10\t\x02\xAA\xA8\x03\x02\x02\x02\xAB\xAE" +
    "\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xB0" +
    "\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAF\xA7\x03\x02\x02\x02\xAF\xB0" +
    "\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB2\x07\f\x02\x02\xB2\x19" +
    "\x03\x02\x02\x02\xB3\xB7\x07\x10\x02\x02\xB4\xB6\x05\x06\x04\x02\xB5\xB4" +
    "\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8" +
    "\x03\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBC" +
    "\x05\x10\t\x02\xBB\xBA\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD" +
    "\x03\x02\x02\x02\xBD\xBE\x07\x11\x02\x02\xBE\x1B\x03\x02\x02\x02\xBF\xC0" +
    "\x05\x1A\x0E\x02\xC0\x1D\x03\x02\x02\x02\xC1\xC7\x07\x12\x02\x02\xC2\xC3" +
    '\x07\v\x02\x02\xC3\xC4\x05"\x12\x02\xC4\xC5\x07\f\x02\x02\xC5\xC7\x03' +
    "\x02\x02\x02\xC6\xC1\x03\x02\x02\x02\xC6\xC2\x03\x02\x02\x02\xC7\x1F\x03" +
    "\x02\x02\x02\xC8\xC9\x07,\x02\x02\xC9\xCA\x07\x05\x02\x02\xCA\xCB\x05" +
    "6\x1C\x02\xCB!\x03\x02\x02\x02\xCC\xD1\x05 \x11\x02\xCD\xCE\x07\x0F\x02" +
    "\x02\xCE\xD0\x05 \x11\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD3\x03\x02\x02" +
    "\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD5\x03\x02\x02" +
    "\x02\xD3\xD1\x03\x02\x02\x02\xD4\xCC\x03\x02\x02\x02\xD4\xD5\x03\x02\x02" +
    "\x02\xD5#\x03\x02\x02\x02\xD6\xD7\t\x02\x02\x02\xD7%\x03\x02\x02\x02\xD8" +
    "\xD9\t\x03\x02\x02\xD9'\x03\x02\x02\x02\xDA\xDB\t\x04\x02\x02\xDB)\x03" +
    "\x02\x02\x02\xDC\xE1\x05,\x17\x02\xDD\xE1\x05.\x18\x02\xDE\xE1\x050\x19" +
    "\x02\xDF\xE1\x052\x1A\x02\xE0\xDC\x03\x02\x02\x02\xE0\xDD\x03\x02\x02" +
    "\x02\xE0\xDE\x03\x02\x02\x02\xE0\xDF\x03\x02\x02\x02\xE1+\x03\x02\x02" +
    "\x02\xE2\xE3\x07+\x02\x02\xE3-\x03\x02\x02\x02\xE4\xE5\x07+\x02\x02\xE5" +
    "\xE6\x07 \x02\x02\xE6\xE7\x07+\x02\x02\xE7/\x03\x02\x02\x02\xE8\xE9\t" +
    "\x05\x02\x02\xE91\x03\x02\x02\x02\xEA\xEE\x07#\x02\x02\xEB\xED\x054\x1B" +
    "\x02\xEC\xEB\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02" +
    "\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1\x03\x02\x02\x02\xF0\xEE\x03\x02\x02" +
    "\x02\xF1\xF2\x07#\x02\x02\xF23\x03\x02\x02\x02\xF3\xF4\n\x06\x02\x02\xF4" +
    "5\x03\x02\x02\x02\xF5\xFC\x07%\x02\x02\xF6\xFC\x07&\x02\x02\xF7\xFC\x07" +
    "'\x02\x02\xF8\xFC\x07(\x02\x02\xF9\xFC\x07\x12\x02\x02\xFA\xFC\x058\x1D" +
    "\x02\xFB\xF5\x03\x02\x02\x02\xFB\xF6\x03\x02\x02\x02\xFB\xF7\x03\x02\x02" +
    "\x02\xFB\xF8\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFA\x03\x02\x02" +
    "\x02\xFC7\x03\x02\x02\x02\xFD\xFE\x07,\x02\x02\xFE9\x03\x02\x02\x02\xFF" +
    "\u0100\x07)\x02\x02\u0100;\x03\x02\x02\x02\u0101\u0106\x05> \x02\u0102" +
    '\u0106\x05@!\x02\u0103\u0106\x05B"\x02\u0104\u0106\x05:\x1E\x02\u0105' +
    "\u0101\x03\x02\x02\x02\u0105\u0102\x03\x02\x02\x02\u0105\u0103\x03\x02" +
    "\x02\x02\u0105\u0104\x03\x02\x02\x02\u0106=\x03\x02\x02\x02\u0107\u0108" +
    "\x07,\x02\x02\u0108?\x03\x02\x02\x02\u0109\u010A\x07,\x02\x02\u010AA\x03" +
    "\x02\x02\x02\u010B\u010E\x07,\x02\x02\u010C\u010E\x05:\x1E\x02\u010D\u010B" +
    "\x03\x02\x02\x02\u010D\u010C\x03\x02\x02\x02\u010EC\x03\x02\x02\x02\x16" +
    "HOY\x7F\x89\x8B\x9C\xA1\xAC\xAF\xB7\xBB\xC6\xD1\xD4\xE0\xEE\xFB\u0105" +
    "\u010D";
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
  public cond_expr(): Cond_exprContext[];
  public cond_expr(i: number): Cond_exprContext;
  public cond_expr(i?: number): Cond_exprContext | Cond_exprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Cond_exprContext);
    } else {
      return this.getRuleContext(i, Cond_exprContext);
    }
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

export class Function_applicationContext extends ParserRuleContext {
  public function_name(): Function_nameContext {
    return this.getRuleContext(0, Function_nameContext);
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
