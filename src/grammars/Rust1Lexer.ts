// Generated from grammars/Rust1.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class Rust1Lexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "JUNK", "NUMBER", 
		"IDENTIFIER", "LETTER", "DIGIT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'const'", "':'", "'='", "'let'", "'fn'", "'->'", "'return'", 
		"'('", "')'", "'if'", "'else'", "','", "'{'", "'}'", "'()'", "'+'", "'-'", 
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
		undefined, undefined, undefined, undefined, undefined, "JUNK", "NUMBER", 
		"IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Rust1Lexer._LITERAL_NAMES, Rust1Lexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Rust1Lexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(Rust1Lexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Rust1.g4"; }

	// @Override
	public get ruleNames(): string[] { return Rust1Lexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return Rust1Lexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return Rust1Lexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return Rust1Lexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02,\xF2\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03" +
		"\x1F\x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03\"\x03" +
		"\"\x03#\x03#\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03" +
		"&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03)\x06)\xDB\n)\r)\x0E)\xDC\x03)\x03)\x03*\x06*\xE2\n*\r" +
		"*\x0E*\xE3\x03+\x03+\x03+\x03+\x07+\xEA\n+\f+\x0E+\xED\v+\x03,\x03,\x03" +
		"-\x03-\x02\x02\x02.\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02" +
		"\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02" +
		"\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'" +
		"\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C" +
		"7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02" +
		"&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02\x02Y\x02\x02\x03\x02\x05\x05" +
		"\x02\v\f\x0F\x0F\"\"\x04\x02C\\c|\x03\x022;\x02\xF4\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
		"\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02" +
		"\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02" +
		"\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02" +
		"\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)" +
		"\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03" +
		"\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02" +
		"\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02" +
		"K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02" +
		"\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x03[\x03\x02\x02\x02" +
		"\x05]\x03\x02\x02\x02\x07c\x03\x02\x02\x02\te\x03\x02\x02\x02\vg\x03\x02" +
		"\x02\x02\rk\x03\x02\x02\x02\x0Fn\x03\x02\x02\x02\x11q\x03\x02\x02\x02" +
		"\x13x\x03\x02\x02\x02\x15z\x03\x02\x02\x02\x17|\x03\x02\x02\x02\x19\x7F" +
		"\x03\x02\x02\x02\x1B\x84\x03\x02\x02\x02\x1D\x86\x03\x02\x02\x02\x1F\x88" +
		"\x03\x02\x02\x02!\x8A\x03\x02\x02\x02#\x8D\x03\x02\x02\x02%\x8F\x03\x02" +
		"\x02\x02\'\x91\x03\x02\x02\x02)\x93\x03\x02\x02\x02+\x95\x03\x02\x02\x02" +
		"-\x98\x03\x02\x02\x02/\x9B\x03\x02\x02\x021\x9D\x03\x02\x02\x023\x9F\x03" +
		"\x02\x02\x025\xA2\x03\x02\x02\x027\xA5\x03\x02\x02\x029\xA7\x03\x02\x02" +
		"\x02;\xAA\x03\x02\x02\x02=\xAD\x03\x02\x02\x02?\xAF\x03\x02\x02\x02A\xB4" +
		"\x03\x02\x02\x02C\xBA\x03\x02\x02\x02E\xBC\x03\x02\x02\x02G\xBE\x03\x02" +
		"\x02\x02I\xC2\x03\x02\x02\x02K\xC6\x03\x02\x02\x02M\xCB\x03\x02\x02\x02" +
		"O\xD0\x03\x02\x02\x02Q\xDA\x03\x02\x02\x02S\xE1\x03\x02\x02\x02U\xE5\x03" +
		"\x02\x02\x02W\xEE\x03\x02\x02\x02Y\xF0\x03\x02\x02\x02[\\\x07=\x02\x02" +
		"\\\x04\x03\x02\x02\x02]^\x07e\x02\x02^_\x07q\x02\x02_`\x07p\x02\x02`a" +
		"\x07u\x02\x02ab\x07v\x02\x02b\x06\x03\x02\x02\x02cd\x07<\x02\x02d\b\x03" +
		"\x02\x02\x02ef\x07?\x02\x02f\n\x03\x02\x02\x02gh\x07n\x02\x02hi\x07g\x02" +
		"\x02ij\x07v\x02\x02j\f\x03\x02\x02\x02kl\x07h\x02\x02lm\x07p\x02\x02m" +
		"\x0E\x03\x02\x02\x02no\x07/\x02\x02op\x07@\x02\x02p\x10\x03\x02\x02\x02" +
		"qr\x07t\x02\x02rs\x07g\x02\x02st\x07v\x02\x02tu\x07w\x02\x02uv\x07t\x02" +
		"\x02vw\x07p\x02\x02w\x12\x03\x02\x02\x02xy\x07*\x02\x02y\x14\x03\x02\x02" +
		"\x02z{\x07+\x02\x02{\x16\x03\x02\x02\x02|}\x07k\x02\x02}~\x07h\x02\x02" +
		"~\x18\x03\x02\x02\x02\x7F\x80\x07g\x02\x02\x80\x81\x07n\x02\x02\x81\x82" +
		"\x07u\x02\x02\x82\x83\x07g\x02\x02\x83\x1A\x03\x02\x02\x02\x84\x85\x07" +
		".\x02\x02\x85\x1C\x03\x02\x02\x02\x86\x87\x07}\x02\x02\x87\x1E\x03\x02" +
		"\x02\x02\x88\x89\x07\x7F\x02\x02\x89 \x03\x02\x02\x02\x8A\x8B\x07*\x02" +
		"\x02\x8B\x8C\x07+\x02\x02\x8C\"\x03\x02\x02\x02\x8D\x8E\x07-\x02\x02\x8E" +
		"$\x03\x02\x02\x02\x8F\x90\x07/\x02\x02\x90&\x03\x02\x02\x02\x91\x92\x07" +
		",\x02\x02\x92(\x03\x02\x02\x02\x93\x94\x071\x02\x02\x94*\x03\x02\x02\x02" +
		"\x95\x96\x07?\x02\x02\x96\x97\x07?\x02\x02\x97,\x03\x02\x02\x02\x98\x99" +
		"\x07#\x02\x02\x99\x9A\x07?\x02\x02\x9A.\x03\x02\x02\x02\x9B\x9C\x07>\x02" +
		"\x02\x9C0\x03\x02\x02\x02\x9D\x9E\x07@\x02\x02\x9E2\x03\x02\x02\x02\x9F" +
		"\xA0\x07>\x02\x02\xA0\xA1\x07?\x02\x02\xA14\x03\x02\x02\x02\xA2\xA3\x07" +
		"@\x02\x02\xA3\xA4\x07?\x02\x02\xA46\x03\x02\x02\x02\xA5\xA6\x07#\x02\x02" +
		"\xA68\x03\x02\x02\x02\xA7\xA8\x07(\x02\x02\xA8\xA9\x07(\x02\x02\xA9:\x03" +
		"\x02\x02\x02\xAA\xAB\x07~\x02\x02\xAB\xAC\x07~\x02\x02\xAC<\x03\x02\x02" +
		"\x02\xAD\xAE\x070\x02\x02\xAE>\x03\x02\x02\x02\xAF\xB0\x07v\x02\x02\xB0" +
		"\xB1\x07t\x02\x02\xB1\xB2\x07w\x02\x02\xB2\xB3\x07g\x02\x02\xB3@\x03\x02" +
		"\x02\x02\xB4\xB5\x07h\x02\x02\xB5\xB6\x07c\x02\x02\xB6\xB7\x07n\x02\x02" +
		"\xB7\xB8\x07u\x02\x02\xB8\xB9\x07g\x02\x02\xB9B\x03\x02\x02\x02\xBA\xBB" +
		"\x07$\x02\x02\xBBD\x03\x02\x02\x02\xBC\xBD\x07^\x02\x02\xBDF\x03\x02\x02" +
		"\x02\xBE\xBF\x07k\x02\x02\xBF\xC0\x075\x02\x02\xC0\xC1\x074\x02\x02\xC1" +
		"H\x03\x02\x02\x02\xC2\xC3\x07h\x02\x02\xC3\xC4\x075\x02\x02\xC4\xC5\x07" +
		"4\x02\x02\xC5J\x03\x02\x02\x02\xC6\xC7\x07d\x02\x02\xC7\xC8\x07q\x02\x02" +
		"\xC8\xC9\x07q\x02\x02\xC9\xCA\x07n\x02\x02\xCAL\x03\x02\x02\x02\xCB\xCC" +
		"\x07e\x02\x02\xCC\xCD\x07j\x02\x02\xCD\xCE\x07c\x02\x02\xCE\xCF\x07t\x02" +
		"\x02\xCFN\x03\x02\x02\x02\xD0\xD1\x07r\x02\x02\xD1\xD2\x07t\x02\x02\xD2" +
		"\xD3\x07k\x02\x02\xD3\xD4\x07p\x02\x02\xD4\xD5\x07v\x02\x02\xD5\xD6\x07" +
		"n\x02\x02\xD6\xD7\x07p\x02\x02\xD7\xD8\x07#\x02\x02\xD8P\x03\x02\x02\x02" +
		"\xD9\xDB\t\x02\x02\x02\xDA\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02" +
		"\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02" +
		"\xDE\xDF\b)\x02\x02\xDFR\x03\x02\x02\x02\xE0\xE2\x05Y-\x02\xE1\xE0\x03" +
		"\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03" +
		"\x02\x02\x02\xE4T\x03\x02\x02\x02\xE5\xEB\x05W,\x02\xE6\xEA\x05W,\x02" +
		"\xE7\xEA\x05Y-\x02\xE8\xEA\x07a\x02\x02\xE9\xE6\x03\x02\x02\x02\xE9\xE7" +
		"\x03\x02\x02\x02\xE9\xE8\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9" +
		"\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xECV\x03\x02\x02\x02\xED\xEB" +
		"\x03\x02\x02\x02\xEE\xEF\t\x03\x02\x02\xEFX\x03\x02\x02\x02\xF0\xF1\t" +
		"\x04\x02\x02\xF1Z\x03\x02\x02\x02\x07\x02\xDC\xE3\xE9\xEB\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Rust1Lexer.__ATN) {
			Rust1Lexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Rust1Lexer._serializedATN));
		}

		return Rust1Lexer.__ATN;
	}

}

