// Generated from grammars/Rust2.g4 by ANTLR 4.9.0-SNAPSHOT

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

import { Rust2Listener } from "./Rust2Listener";
import { Rust2Visitor } from "./Rust2Visitor";

export class Rust2Parser extends Parser {
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
  public static readonly T__40 = 41;
  public static readonly T__41 = 42;
  public static readonly T__42 = 43;
  public static readonly T__43 = 44;
  public static readonly T__44 = 45;
  public static readonly STRING = 46;
  public static readonly JUNK = 47;
  public static readonly NUMBER = 48;
  public static readonly IDENTIFIER = 49;
  public static readonly COMMENT = 50;
  public static readonly MULTILINE_COMMENT = 51;
  public static readonly RULE_program = 0;
  public static readonly RULE_program_element = 1;
  public static readonly RULE_statement = 2;
  public static readonly RULE_constant_declaration = 3;
  public static readonly RULE_variable_declaration = 4;
  public static readonly RULE_mutable = 5;
  public static readonly RULE_function_declaration = 6;
  public static readonly RULE_return_expression = 7;
  public static readonly RULE_expression = 8;
  public static readonly RULE_loop_expression = 9;
  public static readonly RULE_infinite_loop = 10;
  public static readonly RULE_while_loop = 11;
  public static readonly RULE_refed_name = 12;
  public static readonly RULE_immutable_refed_name = 13;
  public static readonly RULE_mutable_refed_name = 14;
  public static readonly RULE_derefed_name = 15;
  public static readonly RULE_assignment = 16;
  public static readonly RULE_closure = 17;
  public static readonly RULE_closure_parameter_list = 18;
  public static readonly RULE_immediate_closure_application = 19;
  public static readonly RULE_parens_expression = 20;
  public static readonly RULE_if_expression = 21;
  public static readonly RULE_cond_expr = 22;
  public static readonly RULE_args_list = 23;
  public static readonly RULE_args = 24;
  public static readonly RULE_function_application = 25;
  public static readonly RULE_block = 26;
  public static readonly RULE_function_body = 27;
  public static readonly RULE_parameter_list = 28;
  public static readonly RULE_parameter = 29;
  public static readonly RULE_parameters = 30;
  public static readonly RULE_binary_operator = 31;
  public static readonly RULE_unary_operator = 32;
  public static readonly RULE_binary_logical_operator = 33;
  public static readonly RULE_literal = 34;
  public static readonly RULE_integer_literal = 35;
  public static readonly RULE_float_literal = 36;
  public static readonly RULE_boolean_literal = 37;
  public static readonly RULE_string_literal = 38;
  public static readonly RULE_type = 39;
  public static readonly RULE_primitive_type = 40;
  public static readonly RULE_generic_mutex_type = 41;
  public static readonly RULE_borrowed_type = 42;
  public static readonly RULE_borrowed_mutable_type = 43;
  public static readonly RULE_print_macro = 44;
  public static readonly RULE_name = 45;
  public static readonly RULE_const_name = 46;
  public static readonly RULE_var_name = 47;
  public static readonly RULE_function_name = 48;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "program",
    "program_element",
    "statement",
    "constant_declaration",
    "variable_declaration",
    "mutable",
    "function_declaration",
    "return_expression",
    "expression",
    "loop_expression",
    "infinite_loop",
    "while_loop",
    "refed_name",
    "immutable_refed_name",
    "mutable_refed_name",
    "derefed_name",
    "assignment",
    "closure",
    "closure_parameter_list",
    "immediate_closure_application",
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
    "type",
    "primitive_type",
    "generic_mutex_type",
    "borrowed_type",
    "borrowed_mutable_type",
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
    "'mut'",
    "'fn'",
    "'->'",
    "'return'",
    "'loop'",
    "'while'",
    "'&'",
    "'&mut'",
    "'*'",
    "'||'",
    "'|'",
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
    "'.'",
    "'true'",
    "'false'",
    "'i32'",
    "'f32'",
    "'bool'",
    "'str'",
    "'Mutex<'",
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
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "STRING",
    "JUNK",
    "NUMBER",
    "IDENTIFIER",
    "COMMENT",
    "MULTILINE_COMMENT",
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    Rust2Parser._LITERAL_NAMES,
    Rust2Parser._SYMBOLIC_NAMES,
    [],
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return Rust2Parser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return "Rust2.g4";
  }

  // @Override
  public get ruleNames(): string[] {
    return Rust2Parser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return Rust2Parser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string,
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(Rust2Parser._ATN, this);
  }
  // @RuleVersion(0)
  public program(): ProgramContext {
    let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, Rust2Parser.RULE_program);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 98;
        this.program_element();
        this.state = 102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === Rust2Parser.T__1 || _la === Rust2Parser.T__6) {
          {
            {
              this.state = 99;
              this.program_element();
            }
          }
          this.state = 104;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 105;
        this.match(Rust2Parser.EOF);
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
    this.enterRule(_localctx, 2, Rust2Parser.RULE_program_element);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 109;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Rust2Parser.T__1:
            {
              this.state = 107;
              this.constant_declaration();
            }
            break;
          case Rust2Parser.T__6:
            {
              this.state = 108;
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
    this.enterRule(_localctx, 4, Rust2Parser.RULE_statement);
    try {
      this.state = 119;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust2Parser.T__1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 111;
            this.constant_declaration();
          }
          break;
        case Rust2Parser.T__4:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 112;
            this.variable_declaration();
          }
          break;
        case Rust2Parser.T__8:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 113;
            this.return_expression();
            this.state = 114;
            this.match(Rust2Parser.T__0);
          }
          break;
        case Rust2Parser.T__9:
        case Rust2Parser.T__10:
        case Rust2Parser.T__11:
        case Rust2Parser.T__12:
        case Rust2Parser.T__13:
        case Rust2Parser.T__14:
        case Rust2Parser.T__15:
        case Rust2Parser.T__16:
        case Rust2Parser.T__18:
        case Rust2Parser.T__22:
        case Rust2Parser.T__25:
        case Rust2Parser.T__34:
        case Rust2Parser.T__37:
        case Rust2Parser.T__38:
        case Rust2Parser.T__44:
        case Rust2Parser.STRING:
        case Rust2Parser.NUMBER:
        case Rust2Parser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 116;
            this.expression(0);
            this.state = 117;
            this.match(Rust2Parser.T__0);
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
    this.enterRule(_localctx, 6, Rust2Parser.RULE_constant_declaration);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 121;
        this.match(Rust2Parser.T__1);
        this.state = 122;
        this.const_name();
        this.state = 123;
        this.match(Rust2Parser.T__2);
        this.state = 124;
        this.type();
        this.state = 125;
        this.match(Rust2Parser.T__3);
        this.state = 126;
        this.expression(0);
        this.state = 127;
        this.match(Rust2Parser.T__0);
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
    this.enterRule(_localctx, 8, Rust2Parser.RULE_variable_declaration);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 129;
        this.match(Rust2Parser.T__4);
        this.state = 130;
        this.mutable();
        this.state = 131;
        this.var_name();
        this.state = 134;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Rust2Parser.T__2) {
          {
            this.state = 132;
            this.match(Rust2Parser.T__2);
            this.state = 133;
            this.type();
          }
        }

        this.state = 136;
        this.match(Rust2Parser.T__3);
        this.state = 137;
        this.expression(0);
        this.state = 138;
        this.match(Rust2Parser.T__0);
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
  public mutable(): MutableContext {
    let _localctx: MutableContext = new MutableContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, Rust2Parser.RULE_mutable);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 141;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Rust2Parser.T__5) {
          {
            this.state = 140;
            this.match(Rust2Parser.T__5);
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
  public function_declaration(): Function_declarationContext {
    let _localctx: Function_declarationContext =
      new Function_declarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, Rust2Parser.RULE_function_declaration);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 143;
        this.match(Rust2Parser.T__6);
        this.state = 144;
        this.function_name();
        this.state = 145;
        this.parameter_list();
        this.state = 146;
        this.match(Rust2Parser.T__7);
        this.state = 147;
        this.type();
        this.state = 148;
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
    this.enterRule(_localctx, 14, Rust2Parser.RULE_return_expression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 150;
        this.match(Rust2Parser.T__8);
        this.state = 151;
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
    let _startState: number = 16;
    this.enterRecursionRule(_localctx, 16, Rust2Parser.RULE_expression, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 169;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
          case 1:
            {
              this.state = 154;
              this.literal();
            }
            break;

          case 2:
            {
              this.state = 155;
              this.name();
            }
            break;

          case 3:
            {
              this.state = 156;
              this.refed_name();
            }
            break;

          case 4:
            {
              this.state = 157;
              this.derefed_name();
            }
            break;

          case 5:
            {
              this.state = 158;
              this.block();
            }
            break;

          case 6:
            {
              this.state = 159;
              this.assignment();
            }
            break;

          case 7:
            {
              this.state = 160;
              this.closure();
            }
            break;

          case 8:
            {
              this.state = 161;
              this.unary_operator();
              this.state = 162;
              this.expression(6);
            }
            break;

          case 9:
            {
              this.state = 164;
              this.function_application();
            }
            break;

          case 10:
            {
              this.state = 165;
              this.immediate_closure_application();
            }
            break;

          case 11:
            {
              this.state = 166;
              this.parens_expression();
            }
            break;

          case 12:
            {
              this.state = 167;
              this.if_expression();
            }
            break;

          case 13:
            {
              this.state = 168;
              this.loop_expression();
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 181;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 179;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 6, this._ctx)
              ) {
                case 1:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      Rust2Parser.RULE_expression,
                    );
                    this.state = 171;
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 8)",
                      );
                    }
                    this.state = 172;
                    this.binary_operator();
                    this.state = 173;
                    this.expression(9);
                  }
                  break;

                case 2:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      Rust2Parser.RULE_expression,
                    );
                    this.state = 175;
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 7)",
                      );
                    }
                    this.state = 176;
                    this.binary_logical_operator();
                    this.state = 177;
                    this.expression(8);
                  }
                  break;
              }
            }
          }
          this.state = 183;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
  public loop_expression(): Loop_expressionContext {
    let _localctx: Loop_expressionContext = new Loop_expressionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 18, Rust2Parser.RULE_loop_expression);
    try {
      this.state = 186;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust2Parser.T__9:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 184;
            this.infinite_loop();
          }
          break;
        case Rust2Parser.T__10:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 185;
            this.while_loop();
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
  public infinite_loop(): Infinite_loopContext {
    let _localctx: Infinite_loopContext = new Infinite_loopContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 20, Rust2Parser.RULE_infinite_loop);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 188;
        this.match(Rust2Parser.T__9);
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
  public while_loop(): While_loopContext {
    let _localctx: While_loopContext = new While_loopContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 22, Rust2Parser.RULE_while_loop);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 191;
        this.match(Rust2Parser.T__10);
        this.state = 192;
        this.cond_expr();
        this.state = 193;
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
  public refed_name(): Refed_nameContext {
    let _localctx: Refed_nameContext = new Refed_nameContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 24, Rust2Parser.RULE_refed_name);
    try {
      this.state = 197;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust2Parser.T__11:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 195;
            this.immutable_refed_name();
          }
          break;
        case Rust2Parser.T__12:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 196;
            this.mutable_refed_name();
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
  public immutable_refed_name(): Immutable_refed_nameContext {
    let _localctx: Immutable_refed_nameContext =
      new Immutable_refed_nameContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, Rust2Parser.RULE_immutable_refed_name);
    try {
      this.state = 203;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 199;
            this.match(Rust2Parser.T__11);
            this.state = 200;
            this.name();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 201;
            this.match(Rust2Parser.T__11);
            this.state = 202;
            this.refed_name();
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
  public mutable_refed_name(): Mutable_refed_nameContext {
    let _localctx: Mutable_refed_nameContext = new Mutable_refed_nameContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 28, Rust2Parser.RULE_mutable_refed_name);
    try {
      this.state = 209;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 205;
            this.match(Rust2Parser.T__12);
            this.state = 206;
            this.name();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 207;
            this.match(Rust2Parser.T__12);
            this.state = 208;
            this.refed_name();
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
  public derefed_name(): Derefed_nameContext {
    let _localctx: Derefed_nameContext = new Derefed_nameContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 30, Rust2Parser.RULE_derefed_name);
    try {
      this.state = 215;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 211;
            this.match(Rust2Parser.T__13);
            this.state = 212;
            this.name();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 213;
            this.match(Rust2Parser.T__13);
            this.state = 214;
            this.derefed_name();
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
  public assignment(): AssignmentContext {
    let _localctx: AssignmentContext = new AssignmentContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 32, Rust2Parser.RULE_assignment);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 219;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case Rust2Parser.T__44:
          case Rust2Parser.IDENTIFIER:
            {
              this.state = 217;
              this.name();
            }
            break;
          case Rust2Parser.T__13:
            {
              this.state = 218;
              this.derefed_name();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 221;
        this.match(Rust2Parser.T__3);
        this.state = 222;
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
  public closure(): ClosureContext {
    let _localctx: ClosureContext = new ClosureContext(this._ctx, this.state);
    this.enterRule(_localctx, 34, Rust2Parser.RULE_closure);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 224;
        this.closure_parameter_list();
        this.state = 225;
        this.match(Rust2Parser.T__7);
        this.state = 226;
        this.type();
        this.state = 227;
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
  public closure_parameter_list(): Closure_parameter_listContext {
    let _localctx: Closure_parameter_listContext =
      new Closure_parameter_listContext(this._ctx, this.state);
    this.enterRule(_localctx, 36, Rust2Parser.RULE_closure_parameter_list);
    try {
      this.state = 234;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust2Parser.T__14:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 229;
            this.match(Rust2Parser.T__14);
          }
          break;
        case Rust2Parser.T__15:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 230;
            this.match(Rust2Parser.T__15);
            this.state = 231;
            this.parameters();
            this.state = 232;
            this.match(Rust2Parser.T__15);
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
  public immediate_closure_application(): Immediate_closure_applicationContext {
    let _localctx: Immediate_closure_applicationContext =
      new Immediate_closure_applicationContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      38,
      Rust2Parser.RULE_immediate_closure_application,
    );
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 236;
        this.closure();
        this.state = 237;
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
  public parens_expression(): Parens_expressionContext {
    let _localctx: Parens_expressionContext = new Parens_expressionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 40, Rust2Parser.RULE_parens_expression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 239;
        this.match(Rust2Parser.T__16);
        this.state = 240;
        this.expression(0);
        this.state = 241;
        this.match(Rust2Parser.T__17);
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
    this.enterRule(_localctx, 42, Rust2Parser.RULE_if_expression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 243;
        this.match(Rust2Parser.T__18);
        this.state = 244;
        this.cond_expr();
        this.state = 245;
        this.block();
        this.state = 251;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
          case 1:
            {
              this.state = 246;
              this.match(Rust2Parser.T__19);
              this.state = 249;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case Rust2Parser.T__22:
                  {
                    this.state = 247;
                    this.block();
                  }
                  break;
                case Rust2Parser.T__18:
                  {
                    this.state = 248;
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
    this.enterRule(_localctx, 44, Rust2Parser.RULE_cond_expr);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 253;
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
    this.enterRule(_localctx, 46, Rust2Parser.RULE_args_list);
    try {
      this.state = 260;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust2Parser.T__20:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 255;
            this.match(Rust2Parser.T__20);
          }
          break;
        case Rust2Parser.T__16:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 256;
            this.match(Rust2Parser.T__16);
            this.state = 257;
            this.args();
            this.state = 258;
            this.match(Rust2Parser.T__17);
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
    this.enterRule(_localctx, 48, Rust2Parser.RULE_args);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 270;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << Rust2Parser.T__9) |
                (1 << Rust2Parser.T__10) |
                (1 << Rust2Parser.T__11) |
                (1 << Rust2Parser.T__12) |
                (1 << Rust2Parser.T__13) |
                (1 << Rust2Parser.T__14) |
                (1 << Rust2Parser.T__15) |
                (1 << Rust2Parser.T__16) |
                (1 << Rust2Parser.T__18) |
                (1 << Rust2Parser.T__22) |
                (1 << Rust2Parser.T__25))) !==
              0) ||
          (((_la - 35) & ~0x1f) === 0 &&
            ((1 << (_la - 35)) &
              ((1 << (Rust2Parser.T__34 - 35)) |
                (1 << (Rust2Parser.T__37 - 35)) |
                (1 << (Rust2Parser.T__38 - 35)) |
                (1 << (Rust2Parser.T__44 - 35)) |
                (1 << (Rust2Parser.STRING - 35)) |
                (1 << (Rust2Parser.NUMBER - 35)) |
                (1 << (Rust2Parser.IDENTIFIER - 35)))) !==
              0)
        ) {
          {
            this.state = 262;
            this.expression(0);
            this.state = 267;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === Rust2Parser.T__21) {
              {
                {
                  this.state = 263;
                  this.match(Rust2Parser.T__21);
                  this.state = 264;
                  this.expression(0);
                }
              }
              this.state = 269;
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
    this.enterRule(_localctx, 50, Rust2Parser.RULE_function_application);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 272;
        this.function_name();
        this.state = 273;
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
    this.enterRule(_localctx, 52, Rust2Parser.RULE_block);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 275;
        this.match(Rust2Parser.T__22);
        this.state = 279;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 276;
                this.statement();
              }
            }
          }
          this.state = 281;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
        }
        this.state = 283;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << Rust2Parser.T__9) |
                (1 << Rust2Parser.T__10) |
                (1 << Rust2Parser.T__11) |
                (1 << Rust2Parser.T__12) |
                (1 << Rust2Parser.T__13) |
                (1 << Rust2Parser.T__14) |
                (1 << Rust2Parser.T__15) |
                (1 << Rust2Parser.T__16) |
                (1 << Rust2Parser.T__18) |
                (1 << Rust2Parser.T__22) |
                (1 << Rust2Parser.T__25))) !==
              0) ||
          (((_la - 35) & ~0x1f) === 0 &&
            ((1 << (_la - 35)) &
              ((1 << (Rust2Parser.T__34 - 35)) |
                (1 << (Rust2Parser.T__37 - 35)) |
                (1 << (Rust2Parser.T__38 - 35)) |
                (1 << (Rust2Parser.T__44 - 35)) |
                (1 << (Rust2Parser.STRING - 35)) |
                (1 << (Rust2Parser.NUMBER - 35)) |
                (1 << (Rust2Parser.IDENTIFIER - 35)))) !==
              0)
        ) {
          {
            this.state = 282;
            this.expression(0);
          }
        }

        this.state = 285;
        this.match(Rust2Parser.T__23);
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
    this.enterRule(_localctx, 54, Rust2Parser.RULE_function_body);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 287;
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
    this.enterRule(_localctx, 56, Rust2Parser.RULE_parameter_list);
    try {
      this.state = 294;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust2Parser.T__20:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 289;
            this.match(Rust2Parser.T__20);
          }
          break;
        case Rust2Parser.T__16:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 290;
            this.match(Rust2Parser.T__16);
            this.state = 291;
            this.parameters();
            this.state = 292;
            this.match(Rust2Parser.T__17);
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
    this.enterRule(_localctx, 58, Rust2Parser.RULE_parameter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 296;
        this.match(Rust2Parser.IDENTIFIER);
        this.state = 297;
        this.match(Rust2Parser.T__2);
        this.state = 298;
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
    this.enterRule(_localctx, 60, Rust2Parser.RULE_parameters);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 308;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === Rust2Parser.IDENTIFIER) {
          {
            this.state = 300;
            this.parameter();
            this.state = 305;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === Rust2Parser.T__21) {
              {
                {
                  this.state = 301;
                  this.match(Rust2Parser.T__21);
                  this.state = 302;
                  this.parameter();
                }
              }
              this.state = 307;
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
    this.enterRule(_localctx, 62, Rust2Parser.RULE_binary_operator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 310;
        _la = this._input.LA(1);
        if (
          !(
            ((_la - 14) & ~0x1f) === 0 &&
            ((1 << (_la - 14)) &
              ((1 << (Rust2Parser.T__13 - 14)) |
                (1 << (Rust2Parser.T__24 - 14)) |
                (1 << (Rust2Parser.T__25 - 14)) |
                (1 << (Rust2Parser.T__26 - 14)) |
                (1 << (Rust2Parser.T__27 - 14)) |
                (1 << (Rust2Parser.T__28 - 14)) |
                (1 << (Rust2Parser.T__29 - 14)) |
                (1 << (Rust2Parser.T__30 - 14)) |
                (1 << (Rust2Parser.T__31 - 14)) |
                (1 << (Rust2Parser.T__32 - 14)) |
                (1 << (Rust2Parser.T__33 - 14)))) !==
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
    this.enterRule(_localctx, 64, Rust2Parser.RULE_unary_operator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 312;
        _la = this._input.LA(1);
        if (!(_la === Rust2Parser.T__25 || _la === Rust2Parser.T__34)) {
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
    this.enterRule(_localctx, 66, Rust2Parser.RULE_binary_logical_operator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 314;
        _la = this._input.LA(1);
        if (!(_la === Rust2Parser.T__14 || _la === Rust2Parser.T__35)) {
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
    this.enterRule(_localctx, 68, Rust2Parser.RULE_literal);
    try {
      this.state = 320;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 316;
            this.integer_literal();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 317;
            this.float_literal();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 318;
            this.boolean_literal();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 319;
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
    this.enterRule(_localctx, 70, Rust2Parser.RULE_integer_literal);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 322;
        this.match(Rust2Parser.NUMBER);
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
    this.enterRule(_localctx, 72, Rust2Parser.RULE_float_literal);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 324;
        this.match(Rust2Parser.NUMBER);
        this.state = 325;
        this.match(Rust2Parser.T__36);
        this.state = 326;
        this.match(Rust2Parser.NUMBER);
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
    this.enterRule(_localctx, 74, Rust2Parser.RULE_boolean_literal);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 328;
        _la = this._input.LA(1);
        if (!(_la === Rust2Parser.T__37 || _la === Rust2Parser.T__38)) {
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
    this.enterRule(_localctx, 76, Rust2Parser.RULE_string_literal);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 330;
        this.match(Rust2Parser.STRING);
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
    this.enterRule(_localctx, 78, Rust2Parser.RULE_type);
    try {
      this.state = 335;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust2Parser.T__20:
        case Rust2Parser.T__39:
        case Rust2Parser.T__40:
        case Rust2Parser.T__41:
        case Rust2Parser.T__42:
        case Rust2Parser.T__43:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 332;
            this.primitive_type();
          }
          break;
        case Rust2Parser.T__11:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 333;
            this.borrowed_type();
          }
          break;
        case Rust2Parser.T__12:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 334;
            this.borrowed_mutable_type();
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
  public primitive_type(): Primitive_typeContext {
    let _localctx: Primitive_typeContext = new Primitive_typeContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 80, Rust2Parser.RULE_primitive_type);
    try {
      this.state = 343;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust2Parser.T__39:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 337;
            this.match(Rust2Parser.T__39);
          }
          break;
        case Rust2Parser.T__40:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 338;
            this.match(Rust2Parser.T__40);
          }
          break;
        case Rust2Parser.T__41:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 339;
            this.match(Rust2Parser.T__41);
          }
          break;
        case Rust2Parser.T__42:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 340;
            this.match(Rust2Parser.T__42);
          }
          break;
        case Rust2Parser.T__20:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 341;
            this.match(Rust2Parser.T__20);
          }
          break;
        case Rust2Parser.T__43:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 342;
            this.generic_mutex_type();
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
  public generic_mutex_type(): Generic_mutex_typeContext {
    let _localctx: Generic_mutex_typeContext = new Generic_mutex_typeContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 82, Rust2Parser.RULE_generic_mutex_type);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 345;
        this.match(Rust2Parser.T__43);
        this.state = 346;
        this.type();
        this.state = 347;
        this.match(Rust2Parser.T__31);
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
  public borrowed_type(): Borrowed_typeContext {
    let _localctx: Borrowed_typeContext = new Borrowed_typeContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 84, Rust2Parser.RULE_borrowed_type);
    try {
      this.state = 353;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 349;
            this.match(Rust2Parser.T__11);
            this.state = 350;
            this.primitive_type();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 351;
            this.match(Rust2Parser.T__11);
            this.state = 352;
            this.type();
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
  public borrowed_mutable_type(): Borrowed_mutable_typeContext {
    let _localctx: Borrowed_mutable_typeContext =
      new Borrowed_mutable_typeContext(this._ctx, this.state);
    this.enterRule(_localctx, 86, Rust2Parser.RULE_borrowed_mutable_type);
    try {
      this.state = 359;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 355;
            this.match(Rust2Parser.T__12);
            this.state = 356;
            this.primitive_type();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 357;
            this.match(Rust2Parser.T__12);
            this.state = 358;
            this.type();
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
  public print_macro(): Print_macroContext {
    let _localctx: Print_macroContext = new Print_macroContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 88, Rust2Parser.RULE_print_macro);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 361;
        this.match(Rust2Parser.T__44);
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
    this.enterRule(_localctx, 90, Rust2Parser.RULE_name);
    try {
      this.state = 367;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 363;
            this.const_name();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 364;
            this.var_name();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 365;
            this.function_name();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 366;
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
    this.enterRule(_localctx, 92, Rust2Parser.RULE_const_name);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 369;
        this.match(Rust2Parser.IDENTIFIER);
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
    this.enterRule(_localctx, 94, Rust2Parser.RULE_var_name);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 371;
        this.match(Rust2Parser.IDENTIFIER);
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
    this.enterRule(_localctx, 96, Rust2Parser.RULE_function_name);
    try {
      this.state = 375;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case Rust2Parser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 373;
            this.match(Rust2Parser.IDENTIFIER);
          }
          break;
        case Rust2Parser.T__44:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 374;
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
      case 8:
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
        return this.precpred(this._ctx, 8);

      case 1:
        return this.precpred(this._ctx, 7);
    }
    return true;
  }

  public static readonly _serializedATN: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x035\u017C\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x03\x02\x03\x02" +
    "\x07\x02g\n\x02\f\x02\x0E\x02j\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05" +
    "\x03p\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
    "\x04\x05\x04z\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
    "\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x89\n\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x05\x07\x90\n\x07\x03\b\x03\b" +
    "\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x05\n\xAC\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n" +
    "\xB6\n\n\f\n\x0E\n\xB9\v\n\x03\v\x03\v\x05\v\xBD\n\v\x03\f\x03\f\x03\f" +
    "\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\xC8\n\x0E\x03\x0F\x03" +
    "\x0F\x03\x0F\x03\x0F\x05\x0F\xCE\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
    "\x05\x10\xD4\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xDA\n\x11\x03" +
    "\x12\x03\x12\x05\x12\xDE\n\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
    "\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
    "\xED\n\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
    "\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\xFC\n\x17\x05\x17" +
    "\xFE\n\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05" +
    "\x19\u0107\n\x19\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u010C\n\x1A\f\x1A\x0E" +
    "\x1A\u010F\v\x1A\x05\x1A\u0111\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03" +
    "\x1C\x07\x1C\u0118\n\x1C\f\x1C\x0E\x1C\u011B\v\x1C\x03\x1C\x05\x1C\u011E" +
    "\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
    "\x03\x1E\x05\x1E\u0129\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03" +
    ' \x03 \x07 \u0132\n \f \x0E \u0135\v \x05 \u0137\n \x03!\x03!\x03"\x03' +
    '"\x03#\x03#\x03$\x03$\x03$\x03$\x05$\u0143\n$\x03%\x03%\x03&\x03&\x03' +
    "&\x03&\x03'\x03'\x03(\x03(\x03)\x03)\x03)\x05)\u0152\n)\x03*\x03*\x03" +
    "*\x03*\x03*\x03*\x05*\u015A\n*\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03" +
    ",\x05,\u0164\n,\x03-\x03-\x03-\x03-\x05-\u016A\n-\x03.\x03.\x03/\x03/" +
    "\x03/\x03/\x05/\u0172\n/\x030\x030\x031\x031\x032\x032\x052\u017A\n2\x03" +
    "2\x02\x02\x03\x123\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
    '\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02' +
    "$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
    "@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
    "\\\x02^\x02`\x02b\x02\x02\x06\x04\x02\x10\x10\x1B$\x04\x02\x1C\x1C%%\x04" +
    "\x02\x11\x11&&\x03\x02()\x02\u0180\x02d\x03\x02\x02\x02\x04o\x03\x02\x02" +
    "\x02\x06y\x03\x02\x02\x02\b{\x03\x02\x02\x02\n\x83\x03\x02\x02\x02\f\x8F" +
    "\x03\x02\x02\x02\x0E\x91\x03\x02\x02\x02\x10\x98\x03\x02\x02\x02\x12\xAB" +
    "\x03\x02\x02\x02\x14\xBC\x03\x02\x02\x02\x16\xBE\x03\x02\x02\x02\x18\xC1" +
    "\x03\x02\x02\x02\x1A\xC7\x03\x02\x02\x02\x1C\xCD\x03\x02\x02\x02\x1E\xD3" +
    '\x03\x02\x02\x02 \xD9\x03\x02\x02\x02"\xDD\x03\x02\x02\x02$\xE2\x03\x02' +
    "\x02\x02&\xEC\x03\x02\x02\x02(\xEE\x03\x02\x02\x02*\xF1\x03\x02\x02\x02" +
    ",\xF5\x03\x02\x02\x02.\xFF\x03\x02\x02\x020\u0106\x03\x02\x02\x022\u0110" +
    "\x03\x02\x02\x024\u0112\x03\x02\x02\x026\u0115\x03\x02\x02\x028\u0121" +
    "\x03\x02\x02\x02:\u0128\x03\x02\x02\x02<\u012A\x03\x02\x02\x02>\u0136" +
    "\x03\x02\x02\x02@\u0138\x03\x02\x02\x02B\u013A\x03\x02\x02\x02D\u013C" +
    "\x03\x02\x02\x02F\u0142\x03\x02\x02\x02H\u0144\x03\x02\x02\x02J\u0146" +
    "\x03\x02\x02\x02L\u014A\x03\x02\x02\x02N\u014C\x03\x02\x02\x02P\u0151" +
    "\x03\x02\x02\x02R\u0159\x03\x02\x02\x02T\u015B\x03\x02\x02\x02V\u0163" +
    "\x03\x02\x02\x02X\u0169\x03\x02\x02\x02Z\u016B\x03\x02\x02\x02\\\u0171" +
    "\x03\x02\x02\x02^\u0173\x03\x02\x02\x02`\u0175\x03\x02\x02\x02b\u0179" +
    "\x03\x02\x02\x02dh\x05\x04\x03\x02eg\x05\x04\x03\x02fe\x03\x02\x02\x02" +
    "gj\x03\x02\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02ik\x03\x02\x02\x02" +
    "jh\x03\x02\x02\x02kl\x07\x02\x02\x03l\x03\x03\x02\x02\x02mp\x05\b\x05" +
    "\x02np\x05\x0E\b\x02om\x03\x02\x02\x02on\x03\x02\x02\x02p\x05\x03\x02" +
    "\x02\x02qz\x05\b\x05\x02rz\x05\n\x06\x02st\x05\x10\t\x02tu\x07\x03\x02" +
    "\x02uz\x03\x02\x02\x02vw\x05\x12\n\x02wx\x07\x03\x02\x02xz\x03\x02\x02" +
    "\x02yq\x03\x02\x02\x02yr\x03\x02\x02\x02ys\x03\x02\x02\x02yv\x03\x02\x02" +
    "\x02z\x07\x03\x02\x02\x02{|\x07\x04\x02\x02|}\x05^0\x02}~\x07\x05\x02" +
    "\x02~\x7F\x05P)\x02\x7F\x80\x07\x06\x02\x02\x80\x81\x05\x12\n\x02\x81" +
    "\x82\x07\x03\x02\x02\x82\t\x03\x02\x02\x02\x83\x84\x07\x07\x02\x02\x84" +
    "\x85\x05\f\x07\x02\x85\x88\x05`1\x02\x86\x87\x07\x05\x02\x02\x87\x89\x05" +
    "P)\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A\x03\x02" +
    "\x02\x02\x8A\x8B\x07\x06\x02\x02\x8B\x8C\x05\x12\n\x02\x8C\x8D\x07\x03" +
    "\x02\x02\x8D\v\x03\x02\x02\x02\x8E\x90\x07\b\x02\x02\x8F\x8E\x03\x02\x02" +
    "\x02\x8F\x90\x03\x02\x02\x02\x90\r\x03\x02\x02\x02\x91\x92\x07\t\x02\x02" +
    "\x92\x93\x05b2\x02\x93\x94\x05:\x1E\x02\x94\x95\x07\n\x02\x02\x95\x96" +
    "\x05P)\x02\x96\x97\x058\x1D\x02\x97\x0F\x03\x02\x02\x02\x98\x99\x07\v" +
    "\x02\x02\x99\x9A\x05\x12\n\x02\x9A\x11\x03\x02\x02\x02\x9B\x9C\b\n\x01" +
    "\x02\x9C\xAC\x05F$\x02\x9D\xAC\x05\\/\x02\x9E\xAC\x05\x1A\x0E\x02\x9F" +
    '\xAC\x05 \x11\x02\xA0\xAC\x056\x1C\x02\xA1\xAC\x05"\x12\x02\xA2\xAC\x05' +
    '$\x13\x02\xA3\xA4\x05B"\x02\xA4\xA5\x05\x12\n\b\xA5\xAC\x03\x02\x02\x02' +
    "\xA6\xAC\x054\x1B\x02\xA7\xAC\x05(\x15\x02\xA8\xAC\x05*\x16\x02\xA9\xAC" +
    "\x05,\x17\x02\xAA\xAC\x05\x14\v\x02\xAB\x9B\x03\x02\x02\x02\xAB\x9D\x03" +
    "\x02\x02\x02\xAB\x9E\x03\x02\x02\x02\xAB\x9F\x03\x02\x02\x02\xAB\xA0\x03" +
    "\x02\x02\x02\xAB\xA1\x03\x02\x02\x02\xAB\xA2\x03\x02\x02\x02\xAB\xA3\x03" +
    "\x02\x02\x02\xAB\xA6\x03\x02\x02\x02\xAB\xA7\x03\x02\x02\x02\xAB\xA8\x03" +
    "\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAA\x03\x02\x02\x02\xAC\xB7\x03" +
    "\x02\x02\x02\xAD\xAE\f\n\x02\x02\xAE\xAF\x05@!\x02\xAF\xB0\x05\x12\n\v" +
    "\xB0\xB6\x03\x02\x02\x02\xB1\xB2\f\t\x02\x02\xB2\xB3\x05D#\x02\xB3\xB4" +
    "\x05\x12\n\n\xB4\xB6\x03\x02\x02\x02\xB5\xAD\x03\x02\x02\x02\xB5\xB1\x03" +
    "\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03" +
    "\x02\x02\x02\xB8\x13\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBD\x05" +
    "\x16\f\x02\xBB\xBD\x05\x18\r\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBB\x03\x02" +
    "\x02\x02\xBD\x15\x03\x02\x02\x02\xBE\xBF\x07\f\x02\x02\xBF\xC0\x056\x1C" +
    "\x02\xC0\x17\x03\x02\x02\x02\xC1\xC2\x07\r\x02\x02\xC2\xC3\x05.\x18\x02" +
    "\xC3\xC4\x056\x1C\x02\xC4\x19\x03\x02\x02\x02\xC5\xC8\x05\x1C\x0F\x02" +
    "\xC6\xC8\x05\x1E\x10\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC6\x03\x02\x02\x02" +
    "\xC8\x1B\x03\x02\x02\x02\xC9\xCA\x07\x0E\x02\x02\xCA\xCE\x05\\/\x02\xCB" +
    "\xCC\x07\x0E\x02\x02\xCC\xCE\x05\x1A\x0E\x02\xCD\xC9\x03\x02\x02\x02\xCD" +
    "\xCB\x03\x02\x02\x02\xCE\x1D\x03\x02\x02\x02\xCF\xD0\x07\x0F\x02\x02\xD0" +
    "\xD4\x05\\/\x02\xD1\xD2\x07\x0F\x02\x02\xD2\xD4\x05\x1A\x0E\x02\xD3\xCF" +
    "\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\x1F\x03\x02\x02\x02\xD5\xD6" +
    "\x07\x10\x02\x02\xD6\xDA\x05\\/\x02\xD7\xD8\x07\x10\x02\x02\xD8\xDA\x05" +
    " \x11\x02\xD9\xD5\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA!\x03\x02" +
    "\x02\x02\xDB\xDE\x05\\/\x02\xDC\xDE\x05 \x11\x02\xDD\xDB\x03\x02\x02\x02" +
    "\xDD\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x07\x06\x02\x02" +
    "\xE0\xE1\x05\x12\n\x02\xE1#\x03\x02\x02\x02\xE2\xE3\x05&\x14\x02\xE3\xE4" +
    "\x07\n\x02\x02\xE4\xE5\x05P)\x02\xE5\xE6\x058\x1D\x02\xE6%\x03\x02\x02" +
    "\x02\xE7\xED\x07\x11\x02\x02\xE8\xE9\x07\x12\x02\x02\xE9\xEA\x05> \x02" +
    "\xEA\xEB\x07\x12\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xE7\x03\x02\x02\x02" +
    "\xEC\xE8\x03\x02\x02\x02\xED'\x03\x02\x02\x02\xEE\xEF\x05$\x13\x02\xEF" +
    "\xF0\x050\x19\x02\xF0)\x03\x02\x02\x02\xF1\xF2\x07\x13\x02\x02\xF2\xF3" +
    "\x05\x12\n\x02\xF3\xF4\x07\x14\x02\x02\xF4+\x03\x02\x02\x02\xF5\xF6\x07" +
    "\x15\x02\x02\xF6\xF7\x05.\x18\x02\xF7\xFD\x056\x1C\x02\xF8\xFB\x07\x16" +
    "\x02\x02\xF9\xFC\x056\x1C\x02\xFA\xFC\x05,\x17\x02\xFB\xF9\x03\x02\x02" +
    "\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFE\x03\x02\x02\x02\xFD\xF8\x03\x02\x02" +
    "\x02\xFD\xFE\x03\x02\x02\x02\xFE-\x03\x02\x02\x02\xFF\u0100\x05\x12\n" +
    "\x02\u0100/\x03\x02\x02\x02\u0101\u0107\x07\x17\x02\x02\u0102\u0103\x07" +
    "\x13\x02\x02\u0103\u0104\x052\x1A\x02\u0104\u0105\x07\x14\x02\x02\u0105" +
    "\u0107\x03\x02\x02\x02\u0106\u0101\x03\x02\x02\x02\u0106\u0102\x03\x02" +
    "\x02\x02\u01071\x03\x02\x02\x02\u0108\u010D\x05\x12\n\x02\u0109\u010A" +
    "\x07\x18\x02\x02\u010A\u010C\x05\x12\n\x02\u010B\u0109\x03\x02\x02\x02" +
    "\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03" +
    "\x02\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u0110" +
    "\u0108\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u01113\x03\x02\x02" +
    "\x02\u0112\u0113\x05b2\x02\u0113\u0114\x050\x19\x02\u01145\x03\x02\x02" +
    "\x02\u0115\u0119\x07\x19\x02\x02\u0116\u0118\x05\x06\x04\x02\u0117\u0116" +
    "\x03\x02\x02\x02\u0118\u011B\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02" +
    "\u0119\u011A\x03\x02\x02\x02\u011A\u011D\x03\x02\x02\x02\u011B\u0119\x03" +
    "\x02\x02\x02\u011C\u011E\x05\x12\n\x02\u011D\u011C\x03\x02\x02\x02\u011D" +
    "\u011E\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0120\x07\x1A" +
    "\x02\x02\u01207\x03\x02\x02\x02\u0121\u0122\x056\x1C\x02\u01229\x03\x02" +
    "\x02\x02\u0123\u0129\x07\x17\x02\x02\u0124\u0125\x07\x13\x02\x02\u0125" +
    "\u0126\x05> \x02\u0126\u0127\x07\x14\x02\x02\u0127\u0129\x03\x02\x02\x02" +
    "\u0128\u0123\x03\x02\x02\x02\u0128\u0124\x03\x02\x02\x02\u0129;\x03\x02" +
    "\x02\x02\u012A\u012B\x073\x02\x02\u012B\u012C\x07\x05\x02\x02\u012C\u012D" +
    "\x05P)\x02\u012D=\x03\x02\x02\x02\u012E\u0133\x05<\x1F\x02\u012F\u0130" +
    "\x07\x18\x02\x02\u0130\u0132\x05<\x1F\x02\u0131\u012F\x03\x02\x02\x02" +
    "\u0132\u0135\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03" +
    "\x02\x02\x02\u0134\u0137\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0136" +
    "\u012E\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137?\x03\x02\x02" +
    "\x02\u0138\u0139\t\x02\x02\x02\u0139A\x03\x02\x02\x02\u013A\u013B\t\x03" +
    "\x02\x02\u013BC\x03\x02\x02\x02\u013C\u013D\t\x04\x02\x02\u013DE\x03\x02" +
    "\x02\x02\u013E\u0143\x05H%\x02\u013F\u0143\x05J&\x02\u0140\u0143\x05L" +
    "'\x02\u0141\u0143\x05N(\x02\u0142\u013E\x03\x02\x02\x02\u0142\u013F\x03" +
    "\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0141\x03\x02\x02\x02\u0143" +
    "G\x03\x02\x02\x02\u0144\u0145\x072\x02\x02\u0145I\x03\x02\x02\x02\u0146" +
    "\u0147\x072\x02\x02\u0147\u0148\x07'\x02\x02\u0148\u0149\x072\x02\x02" +
    "\u0149K\x03\x02\x02\x02\u014A\u014B\t\x05\x02\x02\u014BM\x03\x02\x02\x02" +
    "\u014C\u014D\x070\x02\x02\u014DO\x03\x02\x02\x02\u014E\u0152\x05R*\x02" +
    "\u014F\u0152\x05V,\x02\u0150\u0152\x05X-\x02\u0151\u014E\x03\x02\x02\x02" +
    "\u0151\u014F\x03\x02\x02\x02\u0151\u0150\x03\x02\x02\x02\u0152Q\x03\x02" +
    "\x02\x02\u0153\u015A\x07*\x02\x02\u0154\u015A\x07+\x02\x02\u0155\u015A" +
    "\x07,\x02\x02\u0156\u015A\x07-\x02\x02\u0157\u015A\x07\x17\x02\x02\u0158" +
    "\u015A\x05T+\x02\u0159\u0153\x03\x02\x02\x02\u0159\u0154\x03\x02\x02\x02" +
    "\u0159\u0155\x03\x02\x02\x02\u0159\u0156\x03\x02\x02\x02\u0159\u0157\x03" +
    "\x02\x02\x02\u0159\u0158\x03\x02\x02\x02\u015AS\x03\x02\x02\x02\u015B" +
    '\u015C\x07.\x02\x02\u015C\u015D\x05P)\x02\u015D\u015E\x07"\x02\x02\u015E' +
    "U\x03\x02\x02\x02\u015F\u0160\x07\x0E\x02\x02\u0160\u0164\x05R*\x02\u0161" +
    "\u0162\x07\x0E\x02\x02\u0162\u0164\x05P)\x02\u0163\u015F\x03\x02\x02\x02" +
    "\u0163\u0161\x03\x02\x02\x02\u0164W\x03\x02\x02\x02\u0165\u0166\x07\x0F" +
    "\x02\x02\u0166\u016A\x05R*\x02\u0167\u0168\x07\x0F\x02\x02\u0168\u016A" +
    "\x05P)\x02\u0169\u0165\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A" +
    "Y\x03\x02\x02\x02\u016B\u016C\x07/\x02\x02\u016C[\x03\x02\x02\x02\u016D" +
    "\u0172\x05^0\x02\u016E\u0172\x05`1\x02\u016F\u0172\x05b2\x02\u0170\u0172" +
    "\x05Z.\x02\u0171\u016D\x03\x02\x02\x02\u0171\u016E\x03\x02\x02\x02\u0171" +
    "\u016F\x03\x02\x02\x02\u0171\u0170\x03\x02\x02\x02\u0172]\x03\x02\x02" +
    "\x02\u0173\u0174\x073\x02\x02\u0174_\x03\x02\x02\x02\u0175\u0176\x073" +
    "\x02\x02\u0176a\x03\x02\x02\x02\u0177\u017A\x073\x02\x02\u0178\u017A\x05" +
    "Z.\x02\u0179\u0177\x03\x02\x02\x02\u0179\u0178\x03\x02\x02\x02\u017Ac" +
    '\x03\x02\x02\x02"hoy\x88\x8F\xAB\xB5\xB7\xBC\xC7\xCD\xD3\xD9\xDD\xEC' +
    "\xFB\xFD\u0106\u010D\u0110\u0119\u011D\u0128\u0133\u0136\u0142\u0151\u0159" +
    "\u0163\u0169\u0171\u0179";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!Rust2Parser.__ATN) {
      Rust2Parser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(Rust2Parser._serializedATN),
      );
    }

    return Rust2Parser.__ATN;
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
    return this.getToken(Rust2Parser.EOF, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_program;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterProgram) {
      listener.enterProgram(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitProgram) {
      listener.exitProgram(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_program_element;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterProgram_element) {
      listener.enterProgram_element(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitProgram_element) {
      listener.exitProgram_element(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_statement;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterStatement) {
      listener.enterStatement(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitStatement) {
      listener.exitStatement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_constant_declaration;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterConstant_declaration) {
      listener.enterConstant_declaration(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitConstant_declaration) {
      listener.exitConstant_declaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitConstant_declaration) {
      return visitor.visitConstant_declaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Variable_declarationContext extends ParserRuleContext {
  public mutable(): MutableContext {
    return this.getRuleContext(0, MutableContext);
  }
  public var_name(): Var_nameContext {
    return this.getRuleContext(0, Var_nameContext);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public type(): TypeContext | undefined {
    return this.tryGetRuleContext(0, TypeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_variable_declaration;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterVariable_declaration) {
      listener.enterVariable_declaration(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitVariable_declaration) {
      listener.exitVariable_declaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitVariable_declaration) {
      return visitor.visitVariable_declaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class MutableContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_mutable;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterMutable) {
      listener.enterMutable(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitMutable) {
      listener.exitMutable(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitMutable) {
      return visitor.visitMutable(this);
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
    return Rust2Parser.RULE_function_declaration;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterFunction_declaration) {
      listener.enterFunction_declaration(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitFunction_declaration) {
      listener.exitFunction_declaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_return_expression;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterReturn_expression) {
      listener.enterReturn_expression(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitReturn_expression) {
      listener.exitReturn_expression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
  public refed_name(): Refed_nameContext | undefined {
    return this.tryGetRuleContext(0, Refed_nameContext);
  }
  public derefed_name(): Derefed_nameContext | undefined {
    return this.tryGetRuleContext(0, Derefed_nameContext);
  }
  public block(): BlockContext | undefined {
    return this.tryGetRuleContext(0, BlockContext);
  }
  public assignment(): AssignmentContext | undefined {
    return this.tryGetRuleContext(0, AssignmentContext);
  }
  public closure(): ClosureContext | undefined {
    return this.tryGetRuleContext(0, ClosureContext);
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
  public immediate_closure_application():
    | Immediate_closure_applicationContext
    | undefined {
    return this.tryGetRuleContext(0, Immediate_closure_applicationContext);
  }
  public parens_expression(): Parens_expressionContext | undefined {
    return this.tryGetRuleContext(0, Parens_expressionContext);
  }
  public if_expression(): If_expressionContext | undefined {
    return this.tryGetRuleContext(0, If_expressionContext);
  }
  public loop_expression(): Loop_expressionContext | undefined {
    return this.tryGetRuleContext(0, Loop_expressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_expression;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterExpression) {
      listener.enterExpression(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitExpression) {
      listener.exitExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitExpression) {
      return visitor.visitExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Loop_expressionContext extends ParserRuleContext {
  public infinite_loop(): Infinite_loopContext | undefined {
    return this.tryGetRuleContext(0, Infinite_loopContext);
  }
  public while_loop(): While_loopContext | undefined {
    return this.tryGetRuleContext(0, While_loopContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_loop_expression;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterLoop_expression) {
      listener.enterLoop_expression(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitLoop_expression) {
      listener.exitLoop_expression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitLoop_expression) {
      return visitor.visitLoop_expression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Infinite_loopContext extends ParserRuleContext {
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_infinite_loop;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterInfinite_loop) {
      listener.enterInfinite_loop(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitInfinite_loop) {
      listener.exitInfinite_loop(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitInfinite_loop) {
      return visitor.visitInfinite_loop(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class While_loopContext extends ParserRuleContext {
  public cond_expr(): Cond_exprContext {
    return this.getRuleContext(0, Cond_exprContext);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_while_loop;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterWhile_loop) {
      listener.enterWhile_loop(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitWhile_loop) {
      listener.exitWhile_loop(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitWhile_loop) {
      return visitor.visitWhile_loop(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Refed_nameContext extends ParserRuleContext {
  public immutable_refed_name(): Immutable_refed_nameContext | undefined {
    return this.tryGetRuleContext(0, Immutable_refed_nameContext);
  }
  public mutable_refed_name(): Mutable_refed_nameContext | undefined {
    return this.tryGetRuleContext(0, Mutable_refed_nameContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_refed_name;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterRefed_name) {
      listener.enterRefed_name(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitRefed_name) {
      listener.exitRefed_name(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitRefed_name) {
      return visitor.visitRefed_name(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Immutable_refed_nameContext extends ParserRuleContext {
  public name(): NameContext | undefined {
    return this.tryGetRuleContext(0, NameContext);
  }
  public refed_name(): Refed_nameContext | undefined {
    return this.tryGetRuleContext(0, Refed_nameContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_immutable_refed_name;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterImmutable_refed_name) {
      listener.enterImmutable_refed_name(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitImmutable_refed_name) {
      listener.exitImmutable_refed_name(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitImmutable_refed_name) {
      return visitor.visitImmutable_refed_name(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Mutable_refed_nameContext extends ParserRuleContext {
  public name(): NameContext | undefined {
    return this.tryGetRuleContext(0, NameContext);
  }
  public refed_name(): Refed_nameContext | undefined {
    return this.tryGetRuleContext(0, Refed_nameContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_mutable_refed_name;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterMutable_refed_name) {
      listener.enterMutable_refed_name(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitMutable_refed_name) {
      listener.exitMutable_refed_name(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitMutable_refed_name) {
      return visitor.visitMutable_refed_name(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Derefed_nameContext extends ParserRuleContext {
  public name(): NameContext | undefined {
    return this.tryGetRuleContext(0, NameContext);
  }
  public derefed_name(): Derefed_nameContext | undefined {
    return this.tryGetRuleContext(0, Derefed_nameContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_derefed_name;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterDerefed_name) {
      listener.enterDerefed_name(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitDerefed_name) {
      listener.exitDerefed_name(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitDerefed_name) {
      return visitor.visitDerefed_name(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AssignmentContext extends ParserRuleContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public name(): NameContext | undefined {
    return this.tryGetRuleContext(0, NameContext);
  }
  public derefed_name(): Derefed_nameContext | undefined {
    return this.tryGetRuleContext(0, Derefed_nameContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_assignment;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterAssignment) {
      listener.enterAssignment(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitAssignment) {
      listener.exitAssignment(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitAssignment) {
      return visitor.visitAssignment(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ClosureContext extends ParserRuleContext {
  public closure_parameter_list(): Closure_parameter_listContext {
    return this.getRuleContext(0, Closure_parameter_listContext);
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
    return Rust2Parser.RULE_closure;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterClosure) {
      listener.enterClosure(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitClosure) {
      listener.exitClosure(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitClosure) {
      return visitor.visitClosure(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Closure_parameter_listContext extends ParserRuleContext {
  public parameters(): ParametersContext | undefined {
    return this.tryGetRuleContext(0, ParametersContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_closure_parameter_list;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterClosure_parameter_list) {
      listener.enterClosure_parameter_list(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitClosure_parameter_list) {
      listener.exitClosure_parameter_list(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitClosure_parameter_list) {
      return visitor.visitClosure_parameter_list(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Immediate_closure_applicationContext extends ParserRuleContext {
  public closure(): ClosureContext {
    return this.getRuleContext(0, ClosureContext);
  }
  public args_list(): Args_listContext {
    return this.getRuleContext(0, Args_listContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_immediate_closure_application;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterImmediate_closure_application) {
      listener.enterImmediate_closure_application(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitImmediate_closure_application) {
      listener.exitImmediate_closure_application(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitImmediate_closure_application) {
      return visitor.visitImmediate_closure_application(this);
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
    return Rust2Parser.RULE_parens_expression;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterParens_expression) {
      listener.enterParens_expression(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitParens_expression) {
      listener.exitParens_expression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_if_expression;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterIf_expression) {
      listener.enterIf_expression(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitIf_expression) {
      listener.exitIf_expression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_cond_expr;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterCond_expr) {
      listener.enterCond_expr(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitCond_expr) {
      listener.exitCond_expr(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_args_list;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterArgs_list) {
      listener.enterArgs_list(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitArgs_list) {
      listener.exitArgs_list(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_args;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterArgs) {
      listener.enterArgs(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitArgs) {
      listener.exitArgs(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_function_application;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterFunction_application) {
      listener.enterFunction_application(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitFunction_application) {
      listener.exitFunction_application(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_block;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterBlock) {
      listener.enterBlock(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitBlock) {
      listener.exitBlock(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_function_body;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterFunction_body) {
      listener.enterFunction_body(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitFunction_body) {
      listener.exitFunction_body(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_parameter_list;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterParameter_list) {
      listener.enterParameter_list(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitParameter_list) {
      listener.exitParameter_list(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitParameter_list) {
      return visitor.visitParameter_list(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ParameterContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode {
    return this.getToken(Rust2Parser.IDENTIFIER, 0);
  }
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_parameter;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterParameter) {
      listener.enterParameter(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitParameter) {
      listener.exitParameter(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_parameters;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterParameters) {
      listener.enterParameters(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitParameters) {
      listener.exitParameters(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_binary_operator;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterBinary_operator) {
      listener.enterBinary_operator(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitBinary_operator) {
      listener.exitBinary_operator(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_unary_operator;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterUnary_operator) {
      listener.enterUnary_operator(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitUnary_operator) {
      listener.exitUnary_operator(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_binary_logical_operator;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterBinary_logical_operator) {
      listener.enterBinary_logical_operator(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitBinary_logical_operator) {
      listener.exitBinary_logical_operator(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_literal;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterLiteral) {
      listener.enterLiteral(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitLiteral) {
      listener.exitLiteral(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitLiteral) {
      return visitor.visitLiteral(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Integer_literalContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(Rust2Parser.NUMBER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_integer_literal;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterInteger_literal) {
      listener.enterInteger_literal(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitInteger_literal) {
      listener.exitInteger_literal(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
      return this.getTokens(Rust2Parser.NUMBER);
    } else {
      return this.getToken(Rust2Parser.NUMBER, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_float_literal;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterFloat_literal) {
      listener.enterFloat_literal(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitFloat_literal) {
      listener.exitFloat_literal(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_boolean_literal;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterBoolean_literal) {
      listener.enterBoolean_literal(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitBoolean_literal) {
      listener.exitBoolean_literal(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitBoolean_literal) {
      return visitor.visitBoolean_literal(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class String_literalContext extends ParserRuleContext {
  public STRING(): TerminalNode {
    return this.getToken(Rust2Parser.STRING, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_string_literal;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterString_literal) {
      listener.enterString_literal(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitString_literal) {
      listener.exitString_literal(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitString_literal) {
      return visitor.visitString_literal(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TypeContext extends ParserRuleContext {
  public primitive_type(): Primitive_typeContext | undefined {
    return this.tryGetRuleContext(0, Primitive_typeContext);
  }
  public borrowed_type(): Borrowed_typeContext | undefined {
    return this.tryGetRuleContext(0, Borrowed_typeContext);
  }
  public borrowed_mutable_type(): Borrowed_mutable_typeContext | undefined {
    return this.tryGetRuleContext(0, Borrowed_mutable_typeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_type;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterType) {
      listener.enterType(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitType) {
      listener.exitType(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitType) {
      return visitor.visitType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Primitive_typeContext extends ParserRuleContext {
  public generic_mutex_type(): Generic_mutex_typeContext | undefined {
    return this.tryGetRuleContext(0, Generic_mutex_typeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_primitive_type;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterPrimitive_type) {
      listener.enterPrimitive_type(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitPrimitive_type) {
      listener.exitPrimitive_type(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitPrimitive_type) {
      return visitor.visitPrimitive_type(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Generic_mutex_typeContext extends ParserRuleContext {
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_generic_mutex_type;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterGeneric_mutex_type) {
      listener.enterGeneric_mutex_type(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitGeneric_mutex_type) {
      listener.exitGeneric_mutex_type(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitGeneric_mutex_type) {
      return visitor.visitGeneric_mutex_type(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Borrowed_typeContext extends ParserRuleContext {
  public primitive_type(): Primitive_typeContext | undefined {
    return this.tryGetRuleContext(0, Primitive_typeContext);
  }
  public type(): TypeContext | undefined {
    return this.tryGetRuleContext(0, TypeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_borrowed_type;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterBorrowed_type) {
      listener.enterBorrowed_type(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitBorrowed_type) {
      listener.exitBorrowed_type(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitBorrowed_type) {
      return visitor.visitBorrowed_type(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Borrowed_mutable_typeContext extends ParserRuleContext {
  public primitive_type(): Primitive_typeContext | undefined {
    return this.tryGetRuleContext(0, Primitive_typeContext);
  }
  public type(): TypeContext | undefined {
    return this.tryGetRuleContext(0, TypeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_borrowed_mutable_type;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterBorrowed_mutable_type) {
      listener.enterBorrowed_mutable_type(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitBorrowed_mutable_type) {
      listener.exitBorrowed_mutable_type(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitBorrowed_mutable_type) {
      return visitor.visitBorrowed_mutable_type(this);
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
    return Rust2Parser.RULE_print_macro;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterPrint_macro) {
      listener.enterPrint_macro(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitPrint_macro) {
      listener.exitPrint_macro(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
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
    return Rust2Parser.RULE_name;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterName) {
      listener.enterName(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitName) {
      listener.exitName(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitName) {
      return visitor.visitName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Const_nameContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode {
    return this.getToken(Rust2Parser.IDENTIFIER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_const_name;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterConst_name) {
      listener.enterConst_name(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitConst_name) {
      listener.exitConst_name(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitConst_name) {
      return visitor.visitConst_name(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Var_nameContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode {
    return this.getToken(Rust2Parser.IDENTIFIER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_var_name;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterVar_name) {
      listener.enterVar_name(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitVar_name) {
      listener.exitVar_name(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitVar_name) {
      return visitor.visitVar_name(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Function_nameContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(Rust2Parser.IDENTIFIER, 0);
  }
  public print_macro(): Print_macroContext | undefined {
    return this.tryGetRuleContext(0, Print_macroContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return Rust2Parser.RULE_function_name;
  }
  // @Override
  public enterRule(listener: Rust2Listener): void {
    if (listener.enterFunction_name) {
      listener.enterFunction_name(this);
    }
  }
  // @Override
  public exitRule(listener: Rust2Listener): void {
    if (listener.exitFunction_name) {
      listener.exitFunction_name(this);
    }
  }
  // @Override
  public accept<Result>(visitor: Rust2Visitor<Result>): Result {
    if (visitor.visitFunction_name) {
      return visitor.visitFunction_name(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
