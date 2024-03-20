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
	public static readonly JUNK = 39;
	public static readonly NUMBER = 40;
	public static readonly IDENTIFIER = 41;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_constant_declaration = 2;
	public static readonly RULE_variable_declaration = 3;
	public static readonly RULE_function_declaration = 4;
	public static readonly RULE_return_expression = 5;
	public static readonly RULE_expression = 6;
	public static readonly RULE_if_expression = 7;
	public static readonly RULE_cond_expr = 8;
	public static readonly RULE_function_application = 9;
	public static readonly RULE_block = 10;
	public static readonly RULE_parameters = 11;
	public static readonly RULE_parameter = 12;
	public static readonly RULE_binary_operator = 13;
	public static readonly RULE_unary_operator = 14;
	public static readonly RULE_binary_logical_operator = 15;
	public static readonly RULE_literal = 16;
	public static readonly RULE_integer_literal = 17;
	public static readonly RULE_float_literal = 18;
	public static readonly RULE_boolean_literal = 19;
	public static readonly RULE_string_literal = 20;
	public static readonly RULE_string_characters = 21;
	public static readonly RULE_type = 22;
	public static readonly RULE_custom_type = 23;
	public static readonly RULE_print_macro = 24;
	public static readonly RULE_name = 25;
	public static readonly RULE_const_name = 26;
	public static readonly RULE_var_name = 27;
	public static readonly RULE_function_name = 28;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "constant_declaration", "variable_declaration", 
		"function_declaration", "return_expression", "expression", "if_expression", 
		"cond_expr", "function_application", "block", "parameters", "parameter", 
		"binary_operator", "unary_operator", "binary_logical_operator", "literal", 
		"integer_literal", "float_literal", "boolean_literal", "string_literal", 
		"string_characters", "type", "custom_type", "print_macro", "name", "const_name", 
		"var_name", "function_name",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'const'", "':'", "'='", "'let'", "'fn'", "'('", "')'", 
		"'->'", "'return'", "'if'", "'else'", "','", "'{'", "'}'", "'+'", "'-'", 
		"'*'", "'/'", "'=='", "'!='", "'<'", "'>'", "'<='", "'>='", "'!'", "'&&'", 
		"'||'", "'.'", "'true'", "'false'", "'\"'", "'\\'", "'i32'", "'f32'", 
		"'bool'", "'char'", "'println!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "JUNK", "NUMBER", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Rust1Parser._LITERAL_NAMES, Rust1Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Rust1Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Rust1.g4"; }

	// @Override
	public get ruleNames(): string[] { return Rust1Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Rust1Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
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
			this.state = 58;
			this.statement();
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Rust1Parser.T__1) | (1 << Rust1Parser.T__4) | (1 << Rust1Parser.T__5) | (1 << Rust1Parser.T__6) | (1 << Rust1Parser.T__9) | (1 << Rust1Parser.T__10) | (1 << Rust1Parser.T__13) | (1 << Rust1Parser.T__16) | (1 << Rust1Parser.T__25) | (1 << Rust1Parser.T__29) | (1 << Rust1Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Rust1Parser.T__31 - 32)) | (1 << (Rust1Parser.T__37 - 32)) | (1 << (Rust1Parser.NUMBER - 32)) | (1 << (Rust1Parser.IDENTIFIER - 32)))) !== 0)) {
				{
				{
				this.state = 59;
				this.statement();
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 65;
			this.match(Rust1Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Rust1Parser.RULE_statement);
		try {
			this.state = 78;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Rust1Parser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 67;
				this.constant_declaration();
				}
				break;
			case Rust1Parser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 68;
				this.variable_declaration();
				}
				break;
			case Rust1Parser.T__5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 69;
				this.function_declaration();
				}
				break;
			case Rust1Parser.T__10:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 70;
				this.if_expression();
				}
				break;
			case Rust1Parser.T__9:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 71;
				this.return_expression();
				this.state = 72;
				this.match(Rust1Parser.T__0);
				}
				break;
			case Rust1Parser.T__13:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 74;
				this.block();
				}
				break;
			case Rust1Parser.T__6:
			case Rust1Parser.T__16:
			case Rust1Parser.T__25:
			case Rust1Parser.T__29:
			case Rust1Parser.T__30:
			case Rust1Parser.T__31:
			case Rust1Parser.T__37:
			case Rust1Parser.NUMBER:
			case Rust1Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 75;
				this.expression(0);
				this.state = 76;
				this.match(Rust1Parser.T__0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant_declaration(): Constant_declarationContext {
		let _localctx: Constant_declarationContext = new Constant_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Rust1Parser.RULE_constant_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(Rust1Parser.T__1);
			this.state = 81;
			this.const_name();
			this.state = 82;
			this.match(Rust1Parser.T__2);
			this.state = 83;
			this.type();
			this.state = 84;
			this.match(Rust1Parser.T__3);
			this.state = 85;
			this.expression(0);
			this.state = 86;
			this.match(Rust1Parser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable_declaration(): Variable_declarationContext {
		let _localctx: Variable_declarationContext = new Variable_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Rust1Parser.RULE_variable_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(Rust1Parser.T__4);
			this.state = 89;
			this.var_name();
			this.state = 90;
			this.match(Rust1Parser.T__2);
			this.state = 91;
			this.type();
			this.state = 92;
			this.match(Rust1Parser.T__3);
			this.state = 93;
			this.expression(0);
			this.state = 94;
			this.match(Rust1Parser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_declaration(): Function_declarationContext {
		let _localctx: Function_declarationContext = new Function_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Rust1Parser.RULE_function_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.match(Rust1Parser.T__5);
			this.state = 97;
			this.function_name();
			this.state = 98;
			this.match(Rust1Parser.T__6);
			this.state = 99;
			this.parameters();
			this.state = 100;
			this.match(Rust1Parser.T__7);
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Rust1Parser.T__8) {
				{
				this.state = 101;
				this.match(Rust1Parser.T__8);
				this.state = 102;
				this.type();
				}
			}

			this.state = 105;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public return_expression(): Return_expressionContext {
		let _localctx: Return_expressionContext = new Return_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Rust1Parser.RULE_return_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.match(Rust1Parser.T__9);
			this.state = 108;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, Rust1Parser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 111;
				this.literal();
				}
				break;

			case 2:
				{
				this.state = 112;
				this.name();
				}
				break;

			case 3:
				{
				this.state = 113;
				this.unary_operator();
				this.state = 114;
				this.expression(3);
				}
				break;

			case 4:
				{
				this.state = 116;
				this.function_application();
				}
				break;

			case 5:
				{
				this.state = 117;
				this.match(Rust1Parser.T__6);
				this.state = 118;
				this.expression(0);
				this.state = 119;
				this.match(Rust1Parser.T__7);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 133;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 131;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Rust1Parser.RULE_expression);
						this.state = 123;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 124;
						this.binary_operator();
						this.state = 125;
						this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Rust1Parser.RULE_expression);
						this.state = 127;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 128;
						this.binary_logical_operator();
						this.state = 129;
						this.expression(5);
						}
						break;
					}
					}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_expression(): If_expressionContext {
		let _localctx: If_expressionContext = new If_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Rust1Parser.RULE_if_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(Rust1Parser.T__10);
			this.state = 137;
			this.cond_expr();
			this.state = 138;
			this.block();
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Rust1Parser.T__11) {
				{
				this.state = 139;
				this.match(Rust1Parser.T__11);
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Rust1Parser.T__10) {
					{
					{
					this.state = 140;
					this.match(Rust1Parser.T__10);
					this.state = 141;
					this.cond_expr();
					this.state = 142;
					this.block();
					}
					}
					this.state = 148;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 149;
				this.match(Rust1Parser.T__11);
				this.state = 150;
				this.block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cond_expr(): Cond_exprContext {
		let _localctx: Cond_exprContext = new Cond_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Rust1Parser.RULE_cond_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_application(): Function_applicationContext {
		let _localctx: Function_applicationContext = new Function_applicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Rust1Parser.RULE_function_application);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.function_name();
			this.state = 156;
			this.match(Rust1Parser.T__6);
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Rust1Parser.T__6) | (1 << Rust1Parser.T__16) | (1 << Rust1Parser.T__25) | (1 << Rust1Parser.T__29) | (1 << Rust1Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Rust1Parser.T__31 - 32)) | (1 << (Rust1Parser.T__37 - 32)) | (1 << (Rust1Parser.NUMBER - 32)) | (1 << (Rust1Parser.IDENTIFIER - 32)))) !== 0)) {
				{
				this.state = 157;
				this.expression(0);
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Rust1Parser.T__12) {
					{
					{
					this.state = 158;
					this.match(Rust1Parser.T__12);
					this.state = 159;
					this.expression(0);
					}
					}
					this.state = 164;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 167;
			this.match(Rust1Parser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Rust1Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.match(Rust1Parser.T__13);
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Rust1Parser.T__1) | (1 << Rust1Parser.T__4) | (1 << Rust1Parser.T__5) | (1 << Rust1Parser.T__6) | (1 << Rust1Parser.T__9) | (1 << Rust1Parser.T__10) | (1 << Rust1Parser.T__13) | (1 << Rust1Parser.T__16) | (1 << Rust1Parser.T__25) | (1 << Rust1Parser.T__29) | (1 << Rust1Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Rust1Parser.T__31 - 32)) | (1 << (Rust1Parser.T__37 - 32)) | (1 << (Rust1Parser.NUMBER - 32)) | (1 << (Rust1Parser.IDENTIFIER - 32)))) !== 0)) {
				{
				{
				this.state = 170;
				this.statement();
				}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 176;
			this.match(Rust1Parser.T__14);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Rust1Parser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Rust1Parser.IDENTIFIER) {
				{
				this.state = 178;
				this.parameter();
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Rust1Parser.T__12) {
					{
					{
					this.state = 179;
					this.match(Rust1Parser.T__12);
					this.state = 180;
					this.parameter();
					}
					}
					this.state = 185;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Rust1Parser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.match(Rust1Parser.IDENTIFIER);
			this.state = 189;
			this.match(Rust1Parser.T__2);
			this.state = 190;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binary_operator(): Binary_operatorContext {
		let _localctx: Binary_operatorContext = new Binary_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Rust1Parser.RULE_binary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Rust1Parser.T__15) | (1 << Rust1Parser.T__16) | (1 << Rust1Parser.T__17) | (1 << Rust1Parser.T__18) | (1 << Rust1Parser.T__19) | (1 << Rust1Parser.T__20) | (1 << Rust1Parser.T__21) | (1 << Rust1Parser.T__22) | (1 << Rust1Parser.T__23) | (1 << Rust1Parser.T__24))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unary_operator(): Unary_operatorContext {
		let _localctx: Unary_operatorContext = new Unary_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Rust1Parser.RULE_unary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			_la = this._input.LA(1);
			if (!(_la === Rust1Parser.T__16 || _la === Rust1Parser.T__25)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binary_logical_operator(): Binary_logical_operatorContext {
		let _localctx: Binary_logical_operatorContext = new Binary_logical_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Rust1Parser.RULE_binary_logical_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			_la = this._input.LA(1);
			if (!(_la === Rust1Parser.T__26 || _la === Rust1Parser.T__27)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Rust1Parser.RULE_literal);
		try {
			this.state = 202;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 198;
				this.integer_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 199;
				this.float_literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 200;
				this.boolean_literal();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 201;
				this.string_literal();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer_literal(): Integer_literalContext {
		let _localctx: Integer_literalContext = new Integer_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Rust1Parser.RULE_integer_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.match(Rust1Parser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public float_literal(): Float_literalContext {
		let _localctx: Float_literalContext = new Float_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Rust1Parser.RULE_float_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(Rust1Parser.NUMBER);
			this.state = 207;
			this.match(Rust1Parser.T__28);
			this.state = 208;
			this.match(Rust1Parser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolean_literal(): Boolean_literalContext {
		let _localctx: Boolean_literalContext = new Boolean_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Rust1Parser.RULE_boolean_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			_la = this._input.LA(1);
			if (!(_la === Rust1Parser.T__29 || _la === Rust1Parser.T__30)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_literal(): String_literalContext {
		let _localctx: String_literalContext = new String_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Rust1Parser.RULE_string_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(Rust1Parser.T__31);
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Rust1Parser.T__0) | (1 << Rust1Parser.T__1) | (1 << Rust1Parser.T__2) | (1 << Rust1Parser.T__3) | (1 << Rust1Parser.T__4) | (1 << Rust1Parser.T__5) | (1 << Rust1Parser.T__6) | (1 << Rust1Parser.T__7) | (1 << Rust1Parser.T__8) | (1 << Rust1Parser.T__9) | (1 << Rust1Parser.T__10) | (1 << Rust1Parser.T__11) | (1 << Rust1Parser.T__12) | (1 << Rust1Parser.T__13) | (1 << Rust1Parser.T__14) | (1 << Rust1Parser.T__15) | (1 << Rust1Parser.T__16) | (1 << Rust1Parser.T__17) | (1 << Rust1Parser.T__18) | (1 << Rust1Parser.T__19) | (1 << Rust1Parser.T__20) | (1 << Rust1Parser.T__21) | (1 << Rust1Parser.T__22) | (1 << Rust1Parser.T__23) | (1 << Rust1Parser.T__24) | (1 << Rust1Parser.T__25) | (1 << Rust1Parser.T__26) | (1 << Rust1Parser.T__27) | (1 << Rust1Parser.T__28) | (1 << Rust1Parser.T__29) | (1 << Rust1Parser.T__30))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Rust1Parser.T__33 - 34)) | (1 << (Rust1Parser.T__34 - 34)) | (1 << (Rust1Parser.T__35 - 34)) | (1 << (Rust1Parser.T__36 - 34)) | (1 << (Rust1Parser.T__37 - 34)) | (1 << (Rust1Parser.JUNK - 34)) | (1 << (Rust1Parser.NUMBER - 34)) | (1 << (Rust1Parser.IDENTIFIER - 34)))) !== 0)) {
				{
				{
				this.state = 213;
				this.string_characters();
				}
				}
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 219;
			this.match(Rust1Parser.T__31);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_characters(): String_charactersContext {
		let _localctx: String_charactersContext = new String_charactersContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Rust1Parser.RULE_string_characters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			_la = this._input.LA(1);
			if (_la <= 0 || (_la === Rust1Parser.T__31 || _la === Rust1Parser.T__32)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Rust1Parser.RULE_type);
		try {
			this.state = 228;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Rust1Parser.T__33:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 223;
				this.match(Rust1Parser.T__33);
				}
				break;
			case Rust1Parser.T__34:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 224;
				this.match(Rust1Parser.T__34);
				}
				break;
			case Rust1Parser.T__35:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 225;
				this.match(Rust1Parser.T__35);
				}
				break;
			case Rust1Parser.T__36:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 226;
				this.match(Rust1Parser.T__36);
				}
				break;
			case Rust1Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 227;
				this.custom_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public custom_type(): Custom_typeContext {
		let _localctx: Custom_typeContext = new Custom_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Rust1Parser.RULE_custom_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.match(Rust1Parser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public print_macro(): Print_macroContext {
		let _localctx: Print_macroContext = new Print_macroContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Rust1Parser.RULE_print_macro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(Rust1Parser.T__37);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Rust1Parser.RULE_name);
		try {
			this.state = 238;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 234;
				this.const_name();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 235;
				this.var_name();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 236;
				this.function_name();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 237;
				this.print_macro();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public const_name(): Const_nameContext {
		let _localctx: Const_nameContext = new Const_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, Rust1Parser.RULE_const_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(Rust1Parser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_name(): Var_nameContext {
		let _localctx: Var_nameContext = new Var_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Rust1Parser.RULE_var_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(Rust1Parser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_name(): Function_nameContext {
		let _localctx: Function_nameContext = new Function_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, Rust1Parser.RULE_function_name);
		try {
			this.state = 246;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Rust1Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 244;
				this.match(Rust1Parser.IDENTIFIER);
				}
				break;
			case Rust1Parser.T__37:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 245;
				this.print_macro();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03+\xFB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x03\x02\x07\x02?\n\x02\f\x02\x0E\x02" +
		"B\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03Q\n\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06j\n\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x05\b|\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\x86" +
		"\n\b\f\b\x0E\b\x89\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x07\t\x93\n\t\f\t\x0E\t\x96\v\t\x03\t\x03\t\x05\t\x9A\n\t\x03\n\x03\n" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xA3\n\v\f\v\x0E\v\xA6\v\v\x05\v\xA8" +
		"\n\v\x03\v\x03\v\x03\f\x03\f\x07\f\xAE\n\f\f\f\x0E\f\xB1\v\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x07\r\xB8\n\r\f\r\x0E\r\xBB\v\r\x05\r\xBD\n\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xCD\n\x12\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x07\x16" +
		"\xD9\n\x16\f\x16\x0E\x16\xDC\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\xE7\n\x18\x03\x19\x03\x19" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\xF1\n\x1B\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x05\x1E\xF9\n\x1E\x03\x1E" +
		"\x02\x02\x03\x0E\x1F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02\x02" +
		"\x07\x03\x02\x12\x1B\x04\x02\x13\x13\x1C\x1C\x03\x02\x1D\x1E\x03\x02 " +
		"!\x03\x02\"#\x02\xFE\x02<\x03\x02\x02\x02\x04P\x03\x02\x02\x02\x06R\x03" +
		"\x02\x02\x02\bZ\x03\x02\x02\x02\nb\x03\x02\x02\x02\fm\x03\x02\x02\x02" +
		"\x0E{\x03\x02\x02\x02\x10\x8A\x03\x02\x02\x02\x12\x9B\x03\x02\x02\x02" +
		"\x14\x9D\x03\x02\x02\x02\x16\xAB\x03\x02\x02\x02\x18\xBC\x03\x02\x02\x02" +
		"\x1A\xBE\x03\x02\x02\x02\x1C\xC2\x03\x02\x02\x02\x1E\xC4\x03\x02\x02\x02" +
		" \xC6\x03\x02\x02\x02\"\xCC\x03\x02\x02\x02$\xCE\x03\x02\x02\x02&\xD0" +
		"\x03\x02\x02\x02(\xD4\x03\x02\x02\x02*\xD6\x03\x02\x02\x02,\xDF\x03\x02" +
		"\x02\x02.\xE6\x03\x02\x02\x020\xE8\x03\x02\x02\x022\xEA\x03\x02\x02\x02" +
		"4\xF0\x03\x02\x02\x026\xF2\x03\x02\x02\x028\xF4\x03\x02\x02\x02:\xF8\x03" +
		"\x02\x02\x02<@\x05\x04\x03\x02=?\x05\x04\x03\x02>=\x03\x02\x02\x02?B\x03" +
		"\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02\x02\x02B@\x03" +
		"\x02\x02\x02CD\x07\x02\x02\x03D\x03\x03\x02\x02\x02EQ\x05\x06\x04\x02" +
		"FQ\x05\b\x05\x02GQ\x05\n\x06\x02HQ\x05\x10\t\x02IJ\x05\f\x07\x02JK\x07" +
		"\x03\x02\x02KQ\x03\x02\x02\x02LQ\x05\x16\f\x02MN\x05\x0E\b\x02NO\x07\x03" +
		"\x02\x02OQ\x03\x02\x02\x02PE\x03\x02\x02\x02PF\x03\x02\x02\x02PG\x03\x02" +
		"\x02\x02PH\x03\x02\x02\x02PI\x03\x02\x02\x02PL\x03\x02\x02\x02PM\x03\x02" +
		"\x02\x02Q\x05\x03\x02\x02\x02RS\x07\x04\x02\x02ST\x056\x1C\x02TU\x07\x05" +
		"\x02\x02UV\x05.\x18\x02VW\x07\x06\x02\x02WX\x05\x0E\b\x02XY\x07\x03\x02" +
		"\x02Y\x07\x03\x02\x02\x02Z[\x07\x07\x02\x02[\\\x058\x1D\x02\\]\x07\x05" +
		"\x02\x02]^\x05.\x18\x02^_\x07\x06\x02\x02_`\x05\x0E\b\x02`a\x07\x03\x02" +
		"\x02a\t\x03\x02\x02\x02bc\x07\b\x02\x02cd\x05:\x1E\x02de\x07\t\x02\x02" +
		"ef\x05\x18\r\x02fi\x07\n\x02\x02gh\x07\v\x02\x02hj\x05.\x18\x02ig\x03" +
		"\x02\x02\x02ij\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x05\x16\f\x02l\v\x03" +
		"\x02\x02\x02mn\x07\f\x02\x02no\x05\x0E\b\x02o\r\x03\x02\x02\x02pq\b\b" +
		"\x01\x02q|\x05\"\x12\x02r|\x054\x1B\x02st\x05\x1E\x10\x02tu\x05\x0E\b" +
		"\x05u|\x03\x02\x02\x02v|\x05\x14\v\x02wx\x07\t\x02\x02xy\x05\x0E\b\x02" +
		"yz\x07\n\x02\x02z|\x03\x02\x02\x02{p\x03\x02\x02\x02{r\x03\x02\x02\x02" +
		"{s\x03\x02\x02\x02{v\x03\x02\x02\x02{w\x03\x02\x02\x02|\x87\x03\x02\x02" +
		"\x02}~\f\x07\x02\x02~\x7F\x05\x1C\x0F\x02\x7F\x80\x05\x0E\b\b\x80\x86" +
		"\x03\x02\x02\x02\x81\x82\f\x06\x02\x02\x82\x83\x05 \x11\x02\x83\x84\x05" +
		"\x0E\b\x07\x84\x86\x03\x02\x02\x02\x85}\x03\x02\x02\x02\x85\x81\x03\x02" +
		"\x02\x02\x86\x89\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02" +
		"\x02\x02\x88\x0F\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x8A\x8B\x07\r" +
		"\x02\x02\x8B\x8C\x05\x12\n\x02\x8C\x99\x05\x16\f\x02\x8D\x94\x07\x0E\x02" +
		"\x02\x8E\x8F\x07\r\x02\x02\x8F\x90\x05\x12\n\x02\x90\x91\x05\x16\f\x02" +
		"\x91\x93\x03\x02\x02\x02\x92\x8E\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02" +
		"\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x97\x03\x02\x02\x02" +
		"\x96\x94\x03\x02\x02\x02\x97\x98\x07\x0E\x02\x02\x98\x9A\x05\x16\f\x02" +
		"\x99\x8D\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x11\x03\x02\x02\x02" +
		"\x9B\x9C\x05\x0E\b\x02\x9C\x13\x03\x02\x02\x02\x9D\x9E\x05:\x1E\x02\x9E" +
		"\xA7\x07\t\x02\x02\x9F\xA4\x05\x0E\b\x02\xA0\xA1\x07\x0F\x02\x02\xA1\xA3" +
		"\x05\x0E\b\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4\xA2" +
		"\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4" +
		"\x03\x02\x02\x02\xA7\x9F\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xA9" +
		"\x03\x02\x02\x02\xA9\xAA\x07\n\x02\x02\xAA\x15\x03\x02\x02\x02\xAB\xAF" +
		"\x07\x10\x02\x02\xAC\xAE\x05\x04\x03\x02\xAD\xAC\x03\x02\x02\x02\xAE\xB1" +
		"\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB2" +
		"\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB3\x07\x11\x02\x02\xB3\x17" +
		"\x03\x02\x02\x02\xB4\xB9\x05\x1A\x0E\x02\xB5\xB6\x07\x0F\x02\x02\xB6\xB8" +
		"\x05\x1A\x0E\x02\xB7\xB5\x03\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7" +
		"\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBD\x03\x02\x02\x02\xBB\xB9" +
		"\x03\x02\x02\x02\xBC\xB4\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\x19" +
		"\x03\x02\x02\x02\xBE\xBF\x07+\x02\x02\xBF\xC0\x07\x05\x02\x02\xC0\xC1" +
		"\x05.\x18\x02\xC1\x1B\x03\x02\x02\x02\xC2\xC3\t\x02\x02\x02\xC3\x1D\x03" +
		"\x02\x02\x02\xC4\xC5\t\x03\x02\x02\xC5\x1F\x03\x02\x02\x02\xC6\xC7\t\x04" +
		"\x02\x02\xC7!\x03\x02\x02\x02\xC8\xCD\x05$\x13\x02\xC9\xCD\x05&\x14\x02" +
		"\xCA\xCD\x05(\x15\x02\xCB\xCD\x05*\x16\x02\xCC\xC8\x03\x02\x02\x02\xCC" +
		"\xC9\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD" +
		"#\x03\x02\x02\x02\xCE\xCF\x07*\x02\x02\xCF%\x03\x02\x02\x02\xD0\xD1\x07" +
		"*\x02\x02\xD1\xD2\x07\x1F\x02\x02\xD2\xD3\x07*\x02\x02\xD3\'\x03\x02\x02" +
		"\x02\xD4\xD5\t\x05\x02\x02\xD5)\x03\x02\x02\x02\xD6\xDA\x07\"\x02\x02" +
		"\xD7\xD9\x05,\x17\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDC\x03\x02\x02\x02" +
		"\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDD\x03\x02\x02\x02" +
		"\xDC\xDA\x03\x02\x02\x02\xDD\xDE\x07\"\x02\x02\xDE+\x03\x02\x02\x02\xDF" +
		"\xE0\n\x06\x02\x02\xE0-\x03\x02\x02\x02\xE1\xE7\x07$\x02\x02\xE2\xE7\x07" +
		"%\x02\x02\xE3\xE7\x07&\x02\x02\xE4\xE7\x07\'\x02\x02\xE5\xE7\x050\x19" +
		"\x02\xE6\xE1\x03\x02\x02\x02\xE6\xE2\x03\x02\x02\x02\xE6\xE3\x03\x02\x02" +
		"\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE5\x03\x02\x02\x02\xE7/\x03\x02\x02" +
		"\x02\xE8\xE9\x07+\x02\x02\xE91\x03\x02\x02\x02\xEA\xEB\x07(\x02\x02\xEB" +
		"3\x03\x02\x02\x02\xEC\xF1\x056\x1C\x02\xED\xF1\x058\x1D\x02\xEE\xF1\x05" +
		":\x1E\x02\xEF\xF1\x052\x1A\x02\xF0\xEC\x03\x02\x02\x02\xF0\xED\x03\x02" +
		"\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xEF\x03\x02\x02\x02\xF15\x03\x02" +
		"\x02\x02\xF2\xF3\x07+\x02\x02\xF37\x03\x02\x02\x02\xF4\xF5\x07+\x02\x02" +
		"\xF59\x03\x02\x02\x02\xF6\xF9\x07+\x02\x02\xF7\xF9\x052\x1A\x02\xF8\xF6" +
		"\x03\x02\x02\x02\xF8\xF7\x03\x02\x02\x02\xF9;\x03\x02\x02\x02\x14@Pi{" +
		"\x85\x87\x94\x99\xA4\xA7\xAF\xB9\xBC\xCC\xDA\xE6\xF0\xF8";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Rust1Parser.__ATN) {
			Rust1Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Rust1Parser._serializedATN));
		}

		return Rust1Parser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public EOF(): TerminalNode { return this.getToken(Rust1Parser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Rust1Parser.RULE_program; }
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


export class StatementContext extends ParserRuleContext {
	public constant_declaration(): Constant_declarationContext | undefined {
		return this.tryGetRuleContext(0, Constant_declarationContext);
	}
	public variable_declaration(): Variable_declarationContext | undefined {
		return this.tryGetRuleContext(0, Variable_declarationContext);
	}
	public function_declaration(): Function_declarationContext | undefined {
		return this.tryGetRuleContext(0, Function_declarationContext);
	}
	public if_expression(): If_expressionContext | undefined {
		return this.tryGetRuleContext(0, If_expressionContext);
	}
	public return_expression(): Return_expressionContext | undefined {
		return this.tryGetRuleContext(0, Return_expressionContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Rust1Parser.RULE_statement; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_constant_declaration; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_variable_declaration; }
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
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Rust1Parser.RULE_function_declaration; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_return_expression; }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Rust1Parser.RULE_expression; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_if_expression; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_cond_expr; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_function_application; }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Rust1Parser.RULE_block; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_parameters; }
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


export class ParameterContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(Rust1Parser.IDENTIFIER, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Rust1Parser.RULE_parameter; }
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


export class Binary_operatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Rust1Parser.RULE_binary_operator; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_unary_operator; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_binary_logical_operator; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_literal; }
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
	public NUMBER(): TerminalNode { return this.getToken(Rust1Parser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Rust1Parser.RULE_integer_literal; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_float_literal; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_boolean_literal; }
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
	public string_characters(i?: number): String_charactersContext | String_charactersContext[] {
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
	public get ruleIndex(): number { return Rust1Parser.RULE_string_literal; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_string_characters; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_type; }
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
	public IDENTIFIER(): TerminalNode { return this.getToken(Rust1Parser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Rust1Parser.RULE_custom_type; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_print_macro; }
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
	public get ruleIndex(): number { return Rust1Parser.RULE_name; }
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
	public IDENTIFIER(): TerminalNode { return this.getToken(Rust1Parser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Rust1Parser.RULE_const_name; }
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
	public IDENTIFIER(): TerminalNode { return this.getToken(Rust1Parser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Rust1Parser.RULE_var_name; }
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
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(Rust1Parser.IDENTIFIER, 0); }
	public print_macro(): Print_macroContext | undefined {
		return this.tryGetRuleContext(0, Print_macroContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Rust1Parser.RULE_function_name; }
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


