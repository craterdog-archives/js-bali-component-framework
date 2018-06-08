// Generated from grammar/BaliLanguage.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BaliLanguageListener = require('./BaliLanguageListener').BaliLanguageListener;
var BaliLanguageVisitor = require('./BaliLanguageVisitor').BaliLanguageVisitor;

var grammarFileName = "BaliLanguage.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003V\u01f8\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u0003\u0002\u0007\u0002n\n\u0002",
    "\f\u0002\u000e\u0002q\u000b\u0002\u0003\u0002\u0003\u0002\u0007\u0002",
    "u\n\u0002\f\u0002\u000e\u0002x\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0005\u0003~\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004\u0083\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007\u0090\n\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\t\u0099\n\t\f\t\u000e\t\u009c",
    "\u000b\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00a2\n\t\f\t\u000e",
    "\t\u00a5\u000b\t\u0003\t\u0005\t\u00a8\n\t\u0003\n\u0003\n\u0003\n\u0007",
    "\n\u00ad\n\n\f\n\u000e\n\u00b0\u000b\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0007\n\u00b6\n\n\f\n\u000e\n\u00b9\u000b\n\u0003\n\u0005\n\u00bc",
    "\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f",
    "\u0007\f\u00c4\n\f\f\f\u000e\f\u00c7\u000b\f\u0003\f\u0003\f\u0007\f",
    "\u00cb\n\f\f\f\u000e\f\u00ce\u000b\f\u0003\f\u0003\f\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00d9",
    "\n\u000e\f\u000e\u000e\u000e\u00dc\u000b\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0007\u000e\u00e2\n\u000e\f\u000e\u000e\u000e",
    "\u00e5\u000b\u000e\u0003\u000e\u0005\u000e\u00e8\n\u000e\u0003\u000f",
    "\u0003\u000f\u0007\u000f\u00ec\n\u000f\f\u000f\u000e\u000f\u00ef\u000b",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u0101",
    "\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u0106\n\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0007\u0019\u0134\n\u0019\f\u0019\u000e\u0019",
    "\u0137\u000b\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u013b\n\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0006\u001a\u0144\n\u001a\r\u001a\u000e\u001a\u0145\u0003",
    "\u001a\u0003\u001a\u0005\u001a\u014a\n\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0005\u001c\u0156\n\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0005\u001f\u0164",
    "\n\u001f\u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u0174\n\"\u0003#\u0003",
    "#\u0003$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0003%\u0003%\u0003%\u0005%\u0190\n%\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003",
    "%\u0007%\u01aa\n%\f%\u000e%\u01ad\u000b%\u0003&\u0003&\u0003\'\u0003",
    "\'\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0005(\u01bf\n(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003",
    "+\u0005+\u01c7\n+\u0003+\u0003+\u0003,\u0003,\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0005-\u01d7\n-\u0003.\u0003",
    ".\u0003.\u0003/\u0003/\u0003/\u0005/\u01df\n/\u00030\u00050\u01e2\n",
    "0\u00030\u00030\u00050\u01e6\n0\u00031\u00031\u00032\u00032\u00033\u0003",
    "3\u00034\u00034\u00054\u01f0\n4\u00035\u00035\u00055\u01f4\n5\u0003",
    "6\u00036\u00036\u0002\u0003H7\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ",
    "\\^`bdfhj\u0002\u0007\u0003\u0002-/\u0003\u0002-1\u0003\u000237\u0003",
    "\u00029<\u0004\u0002\b\bAA\u0002\u0215\u0002o\u0003\u0002\u0002\u0002",
    "\u0004{\u0003\u0002\u0002\u0002\u0006\u0082\u0003\u0002\u0002\u0002",
    "\b\u0084\u0003\u0002\u0002\u0002\n\u0088\u0003\u0002\u0002\u0002\f\u008f",
    "\u0003\u0002\u0002\u0002\u000e\u0091\u0003\u0002\u0002\u0002\u0010\u00a7",
    "\u0003\u0002\u0002\u0002\u0012\u00bb\u0003\u0002\u0002\u0002\u0014\u00bd",
    "\u0003\u0002\u0002\u0002\u0016\u00c1\u0003\u0002\u0002\u0002\u0018\u00d1",
    "\u0003\u0002\u0002\u0002\u001a\u00e7\u0003\u0002\u0002\u0002\u001c\u00e9",
    "\u0003\u0002\u0002\u0002\u001e\u0100\u0003\u0002\u0002\u0002 \u0105",
    "\u0003\u0002\u0002\u0002\"\u0109\u0003\u0002\u0002\u0002$\u010e\u0003",
    "\u0002\u0002\u0002&\u0113\u0003\u0002\u0002\u0002(\u0116\u0003\u0002",
    "\u0002\u0002*\u011b\u0003\u0002\u0002\u0002,\u011e\u0003\u0002\u0002",
    "\u0002.\u0123\u0003\u0002\u0002\u00020\u0129\u0003\u0002\u0002\u0002",
    "2\u013c\u0003\u0002\u0002\u00024\u014b\u0003\u0002\u0002\u00026\u0150",
    "\u0003\u0002\u0002\u00028\u015b\u0003\u0002\u0002\u0002:\u015e\u0003",
    "\u0002\u0002\u0002<\u0161\u0003\u0002\u0002\u0002>\u0165\u0003\u0002",
    "\u0002\u0002@\u0168\u0003\u0002\u0002\u0002B\u0173\u0003\u0002\u0002",
    "\u0002D\u0175\u0003\u0002\u0002\u0002F\u0177\u0003\u0002\u0002\u0002",
    "H\u018f\u0003\u0002\u0002\u0002J\u01ae\u0003\u0002\u0002\u0002L\u01b0",
    "\u0003\u0002\u0002\u0002N\u01be\u0003\u0002\u0002\u0002P\u01c0\u0003",
    "\u0002\u0002\u0002R\u01c2\u0003\u0002\u0002\u0002T\u01c6\u0003\u0002",
    "\u0002\u0002V\u01ca\u0003\u0002\u0002\u0002X\u01d6\u0003\u0002\u0002",
    "\u0002Z\u01d8\u0003\u0002\u0002\u0002\\\u01de\u0003\u0002\u0002\u0002",
    "^\u01e5\u0003\u0002\u0002\u0002`\u01e7\u0003\u0002\u0002\u0002b\u01e9",
    "\u0003\u0002\u0002\u0002d\u01eb\u0003\u0002\u0002\u0002f\u01ef\u0003",
    "\u0002\u0002\u0002h\u01f3\u0003\u0002\u0002\u0002j\u01f5\u0003\u0002",
    "\u0002\u0002ln\u0007U\u0002\u0002ml\u0003\u0002\u0002\u0002nq\u0003",
    "\u0002\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002",
    "pr\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002rv\u0005\u0004\u0003",
    "\u0002su\u0007U\u0002\u0002ts\u0003\u0002\u0002\u0002ux\u0003\u0002",
    "\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wy\u0003",
    "\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002yz\u0007\u0002\u0002\u0003",
    "z\u0003\u0003\u0002\u0002\u0002{}\u0005\u0006\u0004\u0002|~\u0005\n",
    "\u0006\u0002}|\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u0005",
    "\u0003\u0002\u0002\u0002\u007f\u0083\u0005N(\u0002\u0080\u0083\u0005",
    "\b\u0005\u0002\u0081\u0083\u0005\u0018\r\u0002\u0082\u007f\u0003\u0002",
    "\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0082\u0081\u0003\u0002",
    "\u0002\u0002\u0083\u0007\u0003\u0002\u0002\u0002\u0084\u0085\u0007\u0003",
    "\u0002\u0002\u0085\u0086\u0005\f\u0007\u0002\u0086\u0087\u0007\u0004",
    "\u0002\u0002\u0087\t\u0003\u0002\u0002\u0002\u0088\u0089\u0007\u0005",
    "\u0002\u0002\u0089\u008a\u0005\f\u0007\u0002\u008a\u008b\u0007\u0006",
    "\u0002\u0002\u008b\u000b\u0003\u0002\u0002\u0002\u008c\u0090\u0005\u000e",
    "\b\u0002\u008d\u0090\u0005\u0010\t\u0002\u008e\u0090\u0005\u0012\n\u0002",
    "\u008f\u008c\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002",
    "\u008f\u008e\u0003\u0002\u0002\u0002\u0090\r\u0003\u0002\u0002\u0002",
    "\u0091\u0092\u0005H%\u0002\u0092\u0093\u0007\u0007\u0002\u0002\u0093",
    "\u0094\u0005H%\u0002\u0094\u000f\u0003\u0002\u0002\u0002\u0095\u009a",
    "\u0005H%\u0002\u0096\u0097\u0007\b\u0002\u0002\u0097\u0099\u0005H%\u0002",
    "\u0098\u0096\u0003\u0002\u0002\u0002\u0099\u009c\u0003\u0002\u0002\u0002",
    "\u009a\u0098\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002",
    "\u009b\u00a8\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002",
    "\u009d\u00a3\u0007U\u0002\u0002\u009e\u009f\u0005H%\u0002\u009f\u00a0",
    "\u0007U\u0002\u0002\u00a0\u00a2\u0003\u0002\u0002\u0002\u00a1\u009e",
    "\u0003\u0002\u0002\u0002\u00a2\u00a5\u0003\u0002\u0002\u0002\u00a3\u00a1",
    "\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a8",
    "\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a8",
    "\u0003\u0002\u0002\u0002\u00a7\u0095\u0003\u0002\u0002\u0002\u00a7\u009d",
    "\u0003\u0002\u0002\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002\u00a8\u0011",
    "\u0003\u0002\u0002\u0002\u00a9\u00ae\u0005\u0014\u000b\u0002\u00aa\u00ab",
    "\u0007\b\u0002\u0002\u00ab\u00ad\u0005\u0014\u000b\u0002\u00ac\u00aa",
    "\u0003\u0002\u0002\u0002\u00ad\u00b0\u0003\u0002\u0002\u0002\u00ae\u00ac",
    "\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00bc",
    "\u0003\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b1\u00b7",
    "\u0007U\u0002\u0002\u00b2\u00b3\u0005\u0014\u000b\u0002\u00b3\u00b4",
    "\u0007U\u0002\u0002\u00b4\u00b6\u0003\u0002\u0002\u0002\u00b5\u00b2",
    "\u0003\u0002\u0002\u0002\u00b6\u00b9\u0003\u0002\u0002\u0002\u00b7\u00b5",
    "\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00bc",
    "\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00ba\u00bc",
    "\u0007\t\u0002\u0002\u00bb\u00a9\u0003\u0002\u0002\u0002\u00bb\u00b1",
    "\u0003\u0002\u0002\u0002\u00bb\u00ba\u0003\u0002\u0002\u0002\u00bc\u0013",
    "\u0003\u0002\u0002\u0002\u00bd\u00be\u0005\u0004\u0003\u0002\u00be\u00bf",
    "\u0007\t\u0002\u0002\u00bf\u00c0\u0005H%\u0002\u00c0\u0015\u0003\u0002",
    "\u0002\u0002\u00c1\u00c5\u0007G\u0002\u0002\u00c2\u00c4\u0007U\u0002",
    "\u0002\u00c3\u00c2\u0003\u0002\u0002\u0002\u00c4\u00c7\u0003\u0002\u0002",
    "\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002",
    "\u0002\u00c6\u00c8\u0003\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002",
    "\u0002\u00c8\u00cc\u0005\u001a\u000e\u0002\u00c9\u00cb\u0007U\u0002",
    "\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002\u00cb\u00ce\u0003\u0002\u0002",
    "\u0002\u00cc\u00ca\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002",
    "\u0002\u00cd\u00cf\u0003\u0002\u0002\u0002\u00ce\u00cc\u0003\u0002\u0002",
    "\u0002\u00cf\u00d0\u0007\u0002\u0002\u0003\u00d0\u0017\u0003\u0002\u0002",
    "\u0002\u00d1\u00d2\u0007\n\u0002\u0002\u00d2\u00d3\u0005\u001a\u000e",
    "\u0002\u00d3\u00d4\u0007\u000b\u0002\u0002\u00d4\u0019\u0003\u0002\u0002",
    "\u0002\u00d5\u00da\u0005\u001c\u000f\u0002\u00d6\u00d7\u0007\f\u0002",
    "\u0002\u00d7\u00d9\u0005\u001c\u000f\u0002\u00d8\u00d6\u0003\u0002\u0002",
    "\u0002\u00d9\u00dc\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002",
    "\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db\u00e8\u0003\u0002\u0002",
    "\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dd\u00e3\u0007U\u0002",
    "\u0002\u00de\u00df\u0005\u001c\u000f\u0002\u00df\u00e0\u0007U\u0002",
    "\u0002\u00e0\u00e2\u0003\u0002\u0002\u0002\u00e1\u00de\u0003\u0002\u0002",
    "\u0002\u00e2\u00e5\u0003\u0002\u0002\u0002\u00e3\u00e1\u0003\u0002\u0002",
    "\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e8\u0003\u0002\u0002",
    "\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e6\u00e8\u0003\u0002\u0002",
    "\u0002\u00e7\u00d5\u0003\u0002\u0002\u0002\u00e7\u00dd\u0003\u0002\u0002",
    "\u0002\u00e7\u00e6\u0003\u0002\u0002\u0002\u00e8\u001b\u0003\u0002\u0002",
    "\u0002\u00e9\u00ed\u0005\u001e\u0010\u0002\u00ea\u00ec\u0005@!\u0002",
    "\u00eb\u00ea\u0003\u0002\u0002\u0002\u00ec\u00ef\u0003\u0002\u0002\u0002",
    "\u00ed\u00eb\u0003\u0002\u0002\u0002\u00ed\u00ee\u0003\u0002\u0002\u0002",
    "\u00ee\u001d\u0003\u0002\u0002\u0002\u00ef\u00ed\u0003\u0002\u0002\u0002",
    "\u00f0\u0101\u0005 \u0011\u0002\u00f1\u0101\u0005\"\u0012\u0002\u00f2",
    "\u0101\u0005$\u0013\u0002\u00f3\u0101\u0005&\u0014\u0002\u00f4\u0101",
    "\u0005(\u0015\u0002\u00f5\u0101\u0005*\u0016\u0002\u00f6\u0101\u0005",
    ",\u0017\u0002\u00f7\u0101\u0005.\u0018\u0002\u00f8\u0101\u00050\u0019",
    "\u0002\u00f9\u0101\u00052\u001a\u0002\u00fa\u0101\u00054\u001b\u0002",
    "\u00fb\u0101\u00056\u001c\u0002\u00fc\u0101\u00058\u001d\u0002\u00fd",
    "\u0101\u0005:\u001e\u0002\u00fe\u0101\u0005<\u001f\u0002\u00ff\u0101",
    "\u0005> \u0002\u0100\u00f0\u0003\u0002\u0002\u0002\u0100\u00f1\u0003",
    "\u0002\u0002\u0002\u0100\u00f2\u0003\u0002\u0002\u0002\u0100\u00f3\u0003",
    "\u0002\u0002\u0002\u0100\u00f4\u0003\u0002\u0002\u0002\u0100\u00f5\u0003",
    "\u0002\u0002\u0002\u0100\u00f6\u0003\u0002\u0002\u0002\u0100\u00f7\u0003",
    "\u0002\u0002\u0002\u0100\u00f8\u0003\u0002\u0002\u0002\u0100\u00f9\u0003",
    "\u0002\u0002\u0002\u0100\u00fa\u0003\u0002\u0002\u0002\u0100\u00fb\u0003",
    "\u0002\u0002\u0002\u0100\u00fc\u0003\u0002\u0002\u0002\u0100\u00fd\u0003",
    "\u0002\u0002\u0002\u0100\u00fe\u0003\u0002\u0002\u0002\u0100\u00ff\u0003",
    "\u0002\u0002\u0002\u0101\u001f\u0003\u0002\u0002\u0002\u0102\u0103\u0005",
    "B\"\u0002\u0103\u0104\u0007\r\u0002\u0002\u0104\u0106\u0003\u0002\u0002",
    "\u0002\u0105\u0102\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002",
    "\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u0108\u0005H%\u0002",
    "\u0108!\u0003\u0002\u0002\u0002\u0109\u010a\u0007\u000e\u0002\u0002",
    "\u010a\u010b\u0005B\"\u0002\u010b\u010c\u0007\u000f\u0002\u0002\u010c",
    "\u010d\u0005H%\u0002\u010d#\u0003\u0002\u0002\u0002\u010e\u010f\u0007",
    "\u0010\u0002\u0002\u010f\u0110\u0005H%\u0002\u0110\u0111\u0007\u0011",
    "\u0002\u0002\u0111\u0112\u0005H%\u0002\u0112%\u0003\u0002\u0002\u0002",
    "\u0113\u0114\u0007\u0012\u0002\u0002\u0114\u0115\u0005H%\u0002\u0115",
    "\'\u0003\u0002\u0002\u0002\u0116\u0117\u0007\u0013\u0002\u0002\u0117",
    "\u0118\u0005H%\u0002\u0118\u0119\u0007\u0011\u0002\u0002\u0119\u011a",
    "\u0005H%\u0002\u011a)\u0003\u0002\u0002\u0002\u011b\u011c\u0007\u0014",
    "\u0002\u0002\u011c\u011d\u0005H%\u0002\u011d+\u0003\u0002\u0002\u0002",
    "\u011e\u011f\u0007\u0015\u0002\u0002\u011f\u0120\u0005H%\u0002\u0120",
    "\u0121\u0007\u0016\u0002\u0002\u0121\u0122\u0005H%\u0002\u0122-\u0003",
    "\u0002\u0002\u0002\u0123\u0124\u0007\u0017\u0002\u0002\u0124\u0125\u0007",
    "\u0018\u0002\u0002\u0125\u0126\u0005B\"\u0002\u0126\u0127\u0007\u000f",
    "\u0002\u0002\u0127\u0128\u0005H%\u0002\u0128/\u0003\u0002\u0002\u0002",
    "\u0129\u012a\u0007\u0019\u0002\u0002\u012a\u012b\u0005H%\u0002\u012b",
    "\u012c\u0007\u001a\u0002\u0002\u012c\u0135\u0005\u0018\r\u0002\u012d",
    "\u012e\u0007\u001b\u0002\u0002\u012e\u012f\u0007\u0019\u0002\u0002\u012f",
    "\u0130\u0005H%\u0002\u0130\u0131\u0007\u001a\u0002\u0002\u0131\u0132",
    "\u0005\u0018\r\u0002\u0132\u0134\u0003\u0002\u0002\u0002\u0133\u012d",
    "\u0003\u0002\u0002\u0002\u0134\u0137\u0003\u0002\u0002\u0002\u0135\u0133",
    "\u0003\u0002\u0002\u0002\u0135\u0136\u0003\u0002\u0002\u0002\u0136\u013a",
    "\u0003\u0002\u0002\u0002\u0137\u0135\u0003\u0002\u0002\u0002\u0138\u0139",
    "\u0007\u001b\u0002\u0002\u0139\u013b\u0005\u0018\r\u0002\u013a\u0138",
    "\u0003\u0002\u0002\u0002\u013a\u013b\u0003\u0002\u0002\u0002\u013b1",
    "\u0003\u0002\u0002\u0002\u013c\u013d\u0007\u001c\u0002\u0002\u013d\u013e",
    "\u0005H%\u0002\u013e\u0143\u0007\u000f\u0002\u0002\u013f\u0140\u0005",
    "H%\u0002\u0140\u0141\u0007\u001d\u0002\u0002\u0141\u0142\u0005\u0018",
    "\r\u0002\u0142\u0144\u0003\u0002\u0002\u0002\u0143\u013f\u0003\u0002",
    "\u0002\u0002\u0144\u0145\u0003\u0002\u0002\u0002\u0145\u0143\u0003\u0002",
    "\u0002\u0002\u0145\u0146\u0003\u0002\u0002\u0002\u0146\u0149\u0003\u0002",
    "\u0002\u0002\u0147\u0148\u0007\u001b\u0002\u0002\u0148\u014a\u0005\u0018",
    "\r\u0002\u0149\u0147\u0003\u0002\u0002\u0002\u0149\u014a\u0003\u0002",
    "\u0002\u0002\u014a3\u0003\u0002\u0002\u0002\u014b\u014c\u0007\u001e",
    "\u0002\u0002\u014c\u014d\u0005H%\u0002\u014d\u014e\u0007\u001d\u0002",
    "\u0002\u014e\u014f\u0005\u0018\r\u0002\u014f5\u0003\u0002\u0002\u0002",
    "\u0150\u0155\u0007\u001f\u0002\u0002\u0151\u0152\u0007 \u0002\u0002",
    "\u0152\u0153\u0005b2\u0002\u0153\u0154\u0007!\u0002\u0002\u0154\u0156",
    "\u0003\u0002\u0002\u0002\u0155\u0151\u0003\u0002\u0002\u0002\u0155\u0156",
    "\u0003\u0002\u0002\u0002\u0156\u0157\u0003\u0002\u0002\u0002\u0157\u0158",
    "\u0005H%\u0002\u0158\u0159\u0007\u001d\u0002\u0002\u0159\u015a\u0005",
    "\u0018\r\u0002\u015a7\u0003\u0002\u0002\u0002\u015b\u015c\u0007\"\u0002",
    "\u0002\u015c\u015d\u0007#\u0002\u0002\u015d9\u0003\u0002\u0002\u0002",
    "\u015e\u015f\u0007$\u0002\u0002\u015f\u0160\u0007#\u0002\u0002\u0160",
    ";\u0003\u0002\u0002\u0002\u0161\u0163\u0007%\u0002\u0002\u0162\u0164",
    "\u0005H%\u0002\u0163\u0162\u0003\u0002\u0002\u0002\u0163\u0164\u0003",
    "\u0002\u0002\u0002\u0164=\u0003\u0002\u0002\u0002\u0165\u0166\u0007",
    "&\u0002\u0002\u0166\u0167\u0005H%\u0002\u0167?\u0003\u0002\u0002\u0002",
    "\u0168\u0169\u0007\'\u0002\u0002\u0169\u016a\u0005b2\u0002\u016a\u016b",
    "\u0007(\u0002\u0002\u016b\u016c\u0005H%\u0002\u016c\u016d\u0007\u001f",
    "\u0002\u0002\u016d\u016e\u0005\u0018\r\u0002\u016eA\u0003\u0002\u0002",
    "\u0002\u016f\u0174\u0005b2\u0002\u0170\u0171\u0005D#\u0002\u0171\u0172",
    "\u0005F$\u0002\u0172\u0174\u0003\u0002\u0002\u0002\u0173\u016f\u0003",
    "\u0002\u0002\u0002\u0173\u0170\u0003\u0002\u0002\u0002\u0174C\u0003",
    "\u0002\u0002\u0002\u0175\u0176\u0007T\u0002\u0002\u0176E\u0003\u0002",
    "\u0002\u0002\u0177\u0178\u0007\u0003\u0002\u0002\u0178\u0179\u0005\u0010",
    "\t\u0002\u0179\u017a\u0007\u0004\u0002\u0002\u017aG\u0003\u0002\u0002",
    "\u0002\u017b\u017c\b%\u0001\u0002\u017c\u0190\u0005\u0004\u0003\u0002",
    "\u017d\u0190\u0005D#\u0002\u017e\u017f\u0005J&\u0002\u017f\u0180\u0005",
    "\n\u0006\u0002\u0180\u0190\u0003\u0002\u0002\u0002\u0181\u0182\u0007",
    "\u0005\u0002\u0002\u0182\u0183\u0005H%\u0002\u0183\u0184\u0007\u0006",
    "\u0002\u0002\u0184\u0190\u0003\u0002\u0002\u0002\u0185\u0186\u0007)",
    "\u0002\u0002\u0186\u0190\u0005H%\u000e\u0187\u0188\t\u0002\u0002\u0002",
    "\u0188\u0190\u0005H%\t\u0189\u018a\u00072\u0002\u0002\u018a\u018b\u0005",
    "H%\u0002\u018b\u018c\u00072\u0002\u0002\u018c\u0190\u0003\u0002\u0002",
    "\u0002\u018d\u018e\u00078\u0002\u0002\u018e\u0190\u0005H%\u0005\u018f",
    "\u017b\u0003\u0002\u0002\u0002\u018f\u017d\u0003\u0002\u0002\u0002\u018f",
    "\u017e\u0003\u0002\u0002\u0002\u018f\u0181\u0003\u0002\u0002\u0002\u018f",
    "\u0185\u0003\u0002\u0002\u0002\u018f\u0187\u0003\u0002\u0002\u0002\u018f",
    "\u0189\u0003\u0002\u0002\u0002\u018f\u018d\u0003\u0002\u0002\u0002\u0190",
    "\u01ab\u0003\u0002\u0002\u0002\u0191\u0192\f\n\u0002\u0002\u0192\u0193",
    "\u0007,\u0002\u0002\u0193\u01aa\u0005H%\n\u0194\u0195\f\b\u0002\u0002",
    "\u0195\u0196\t\u0003\u0002\u0002\u0196\u01aa\u0005H%\t\u0197\u0198\f",
    "\u0006\u0002\u0002\u0198\u0199\t\u0004\u0002\u0002\u0199\u01aa\u0005",
    "H%\u0007\u019a\u019b\f\u0004\u0002\u0002\u019b\u019c\t\u0005\u0002\u0002",
    "\u019c\u01aa\u0005H%\u0005\u019d\u019e\f\u0003\u0002\u0002\u019e\u019f",
    "\u0007=\u0002\u0002\u019f\u01aa\u0005H%\u0004\u01a0\u01a1\f\r\u0002",
    "\u0002\u01a1\u01a2\u0007*\u0002\u0002\u01a2\u01a3\u0005L\'\u0002\u01a3",
    "\u01a4\u0005\n\u0006\u0002\u01a4\u01aa\u0003\u0002\u0002\u0002\u01a5",
    "\u01a6\f\f\u0002\u0002\u01a6\u01aa\u0005F$\u0002\u01a7\u01a8\f\u000b",
    "\u0002\u0002\u01a8\u01aa\u0007+\u0002\u0002\u01a9\u0191\u0003\u0002",
    "\u0002\u0002\u01a9\u0194\u0003\u0002\u0002\u0002\u01a9\u0197\u0003\u0002",
    "\u0002\u0002\u01a9\u019a\u0003\u0002\u0002\u0002\u01a9\u019d\u0003\u0002",
    "\u0002\u0002\u01a9\u01a0\u0003\u0002\u0002\u0002\u01a9\u01a5\u0003\u0002",
    "\u0002\u0002\u01a9\u01a7\u0003\u0002\u0002\u0002\u01aa\u01ad\u0003\u0002",
    "\u0002\u0002\u01ab\u01a9\u0003\u0002\u0002\u0002\u01ab\u01ac\u0003\u0002",
    "\u0002\u0002\u01acI\u0003\u0002\u0002\u0002\u01ad\u01ab\u0003\u0002",
    "\u0002\u0002\u01ae\u01af\u0007T\u0002\u0002\u01afK\u0003\u0002\u0002",
    "\u0002\u01b0\u01b1\u0007T\u0002\u0002\u01b1M\u0003\u0002\u0002\u0002",
    "\u01b2\u01bf\u0005P)\u0002\u01b3\u01bf\u0005R*\u0002\u01b4\u01bf\u0005",
    "V,\u0002\u01b5\u01bf\u0005X-\u0002\u01b6\u01bf\u0005Z.\u0002\u01b7\u01bf",
    "\u0005\\/\u0002\u01b8\u01bf\u0005`1\u0002\u01b9\u01bf\u0005b2\u0002",
    "\u01ba\u01bf\u0005d3\u0002\u01bb\u01bf\u0005f4\u0002\u01bc\u01bf\u0005",
    "h5\u0002\u01bd\u01bf\u0005j6\u0002\u01be\u01b2\u0003\u0002\u0002\u0002",
    "\u01be\u01b3\u0003\u0002\u0002\u0002\u01be\u01b4\u0003\u0002\u0002\u0002",
    "\u01be\u01b5\u0003\u0002\u0002\u0002\u01be\u01b6\u0003\u0002\u0002\u0002",
    "\u01be\u01b7\u0003\u0002\u0002\u0002\u01be\u01b8\u0003\u0002\u0002\u0002",
    "\u01be\u01b9\u0003\u0002\u0002\u0002\u01be\u01ba\u0003\u0002\u0002\u0002",
    "\u01be\u01bb\u0003\u0002\u0002\u0002\u01be\u01bc\u0003\u0002\u0002\u0002",
    "\u01be\u01bd\u0003\u0002\u0002\u0002\u01bfO\u0003\u0002\u0002\u0002",
    "\u01c0\u01c1\u0007Q\u0002\u0002\u01c1Q\u0003\u0002\u0002\u0002\u01c2",
    "\u01c3\u0007N\u0002\u0002\u01c3S\u0003\u0002\u0002\u0002\u01c4\u01c7",
    "\u0005^0\u0002\u01c5\u01c7\u0007-\u0002\u0002\u01c6\u01c4\u0003\u0002",
    "\u0002\u0002\u01c6\u01c5\u0003\u0002\u0002\u0002\u01c6\u01c7\u0003\u0002",
    "\u0002\u0002\u01c7\u01c8\u0003\u0002\u0002\u0002\u01c8\u01c9\u0007>",
    "\u0002\u0002\u01c9U\u0003\u0002\u0002\u0002\u01ca\u01cb\u0007M\u0002",
    "\u0002\u01cbW\u0003\u0002\u0002\u0002\u01cc\u01d7\u0007?\u0002\u0002",
    "\u01cd\u01d7\u0007@\u0002\u0002\u01ce\u01d7\u0005^0\u0002\u01cf\u01d7",
    "\u0005T+\u0002\u01d0\u01d1\u0007\u0005\u0002\u0002\u01d1\u01d2\u0005",
    "^0\u0002\u01d2\u01d3\t\u0006\u0002\u0002\u01d3\u01d4\u0005T+\u0002\u01d4",
    "\u01d5\u0007\u0006\u0002\u0002\u01d5\u01d7\u0003\u0002\u0002\u0002\u01d6",
    "\u01cc\u0003\u0002\u0002\u0002\u01d6\u01cd\u0003\u0002\u0002\u0002\u01d6",
    "\u01ce\u0003\u0002\u0002\u0002\u01d6\u01cf\u0003\u0002\u0002\u0002\u01d6",
    "\u01d0\u0003\u0002\u0002\u0002\u01d7Y\u0003\u0002\u0002\u0002\u01d8",
    "\u01d9\u0005^0\u0002\u01d9\u01da\u0007B\u0002\u0002\u01da[\u0003\u0002",
    "\u0002\u0002\u01db\u01df\u0007C\u0002\u0002\u01dc\u01df\u0007D\u0002",
    "\u0002\u01dd\u01df\u0007J\u0002\u0002\u01de\u01db\u0003\u0002\u0002",
    "\u0002\u01de\u01dc\u0003\u0002\u0002\u0002\u01de\u01dd\u0003\u0002\u0002",
    "\u0002\u01df]\u0003\u0002\u0002\u0002\u01e0\u01e2\u0007-\u0002\u0002",
    "\u01e1\u01e0\u0003\u0002\u0002\u0002\u01e1\u01e2\u0003\u0002\u0002\u0002",
    "\u01e2\u01e3\u0003\u0002\u0002\u0002\u01e3\u01e6\u0007K\u0002\u0002",
    "\u01e4\u01e6\u0007L\u0002\u0002\u01e5\u01e1\u0003\u0002\u0002\u0002",
    "\u01e5\u01e4\u0003\u0002\u0002\u0002\u01e6_\u0003\u0002\u0002\u0002",
    "\u01e7\u01e8\u0007O\u0002\u0002\u01e8a\u0003\u0002\u0002\u0002\u01e9",
    "\u01ea\u0007I\u0002\u0002\u01eac\u0003\u0002\u0002\u0002\u01eb\u01ec",
    "\u0007H\u0002\u0002\u01ece\u0003\u0002\u0002\u0002\u01ed\u01f0\u0007",
    "E\u0002\u0002\u01ee\u01f0\u0007F\u0002\u0002\u01ef\u01ed\u0003\u0002",
    "\u0002\u0002\u01ef\u01ee\u0003\u0002\u0002\u0002\u01f0g\u0003\u0002",
    "\u0002\u0002\u01f1\u01f4\u0007S\u0002\u0002\u01f2\u01f4\u0007R\u0002",
    "\u0002\u01f3\u01f1\u0003\u0002\u0002\u0002\u01f3\u01f2\u0003\u0002\u0002",
    "\u0002\u01f4i\u0003\u0002\u0002\u0002\u01f5\u01f6\u0007P\u0002\u0002",
    "\u01f6k\u0003\u0002\u0002\u0002\'ov}\u0082\u008f\u009a\u00a3\u00a7\u00ae",
    "\u00b7\u00bb\u00c5\u00cc\u00da\u00e3\u00e7\u00ed\u0100\u0105\u0135\u013a",
    "\u0145\u0149\u0155\u0163\u0173\u018f\u01a9\u01ab\u01be\u01c6\u01d6\u01de",
    "\u01e1\u01e5\u01ef\u01f3"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'['", "']'", "'('", "')'", "'..'", "','", "':'", 
                     "'{'", "'}'", "';'", "':='", "'checkout'", "'from'", 
                     "'save'", "'to'", "'discard'", "'commit'", "'publish'", 
                     "'queue'", "'on'", "'wait'", "'for'", "'if'", "'then'", 
                     "'else'", "'select'", "'do'", "'while'", "'with'", 
                     "'each'", "'in'", "'continue'", "'loop'", "'break'", 
                     "'return'", "'throw'", "'handle'", "'matching'", "'@'", 
                     "'.'", "'!'", "'^'", "'-'", "'/'", "'*'", "'//'", "'+'", 
                     "'|'", "'<'", "'='", "'>'", "'is'", "'matches'", "'not'", 
                     "'and'", "'sans'", "'xor'", "'or'", "'?'", "'i'", "'undefined'", 
                     "'infinity'", "'e^'", "'%'", "'true'", "'false'", "'none'", 
                     "'any'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, "SHELL", "TAG", 
                      "SYMBOL", "FRACTION", "CONSTANT", "FLOAT", "MOMENT", 
                      "DURATION", "RESOURCE", "VERSION", "BINARY", "TEXT_BLOCK", 
                      "TEXT", "IDENTIFIER", "NEWLINE", "SPACE" ];

var ruleNames =  [ "document", "component", "item", "structure", "parameters", 
                   "composite", "range", "list", "catalog", "association", 
                   "task", "block", "procedure", "statement", "mainClause", 
                   "evaluateClause", "checkoutClause", "saveClause", "discardClause", 
                   "commitClause", "publishClause", "queueClause", "waitClause", 
                   "ifClause", "selectClause", "whileClause", "withClause", 
                   "continueClause", "breakClause", "returnClause", "throwClause", 
                   "handleClause", "recipient", "variable", "indices", "expression", 
                   "funxtion", "message", "element", "binary", "duration", 
                   "imaginary", "moment", "number", "percent", "probability", 
                   "real", "reference", "symbol", "tag", "template", "text", 
                   "version" ];

function BaliLanguageParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

BaliLanguageParser.prototype = Object.create(antlr4.Parser.prototype);
BaliLanguageParser.prototype.constructor = BaliLanguageParser;

Object.defineProperty(BaliLanguageParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

BaliLanguageParser.EOF = antlr4.Token.EOF;
BaliLanguageParser.T__0 = 1;
BaliLanguageParser.T__1 = 2;
BaliLanguageParser.T__2 = 3;
BaliLanguageParser.T__3 = 4;
BaliLanguageParser.T__4 = 5;
BaliLanguageParser.T__5 = 6;
BaliLanguageParser.T__6 = 7;
BaliLanguageParser.T__7 = 8;
BaliLanguageParser.T__8 = 9;
BaliLanguageParser.T__9 = 10;
BaliLanguageParser.T__10 = 11;
BaliLanguageParser.T__11 = 12;
BaliLanguageParser.T__12 = 13;
BaliLanguageParser.T__13 = 14;
BaliLanguageParser.T__14 = 15;
BaliLanguageParser.T__15 = 16;
BaliLanguageParser.T__16 = 17;
BaliLanguageParser.T__17 = 18;
BaliLanguageParser.T__18 = 19;
BaliLanguageParser.T__19 = 20;
BaliLanguageParser.T__20 = 21;
BaliLanguageParser.T__21 = 22;
BaliLanguageParser.T__22 = 23;
BaliLanguageParser.T__23 = 24;
BaliLanguageParser.T__24 = 25;
BaliLanguageParser.T__25 = 26;
BaliLanguageParser.T__26 = 27;
BaliLanguageParser.T__27 = 28;
BaliLanguageParser.T__28 = 29;
BaliLanguageParser.T__29 = 30;
BaliLanguageParser.T__30 = 31;
BaliLanguageParser.T__31 = 32;
BaliLanguageParser.T__32 = 33;
BaliLanguageParser.T__33 = 34;
BaliLanguageParser.T__34 = 35;
BaliLanguageParser.T__35 = 36;
BaliLanguageParser.T__36 = 37;
BaliLanguageParser.T__37 = 38;
BaliLanguageParser.T__38 = 39;
BaliLanguageParser.T__39 = 40;
BaliLanguageParser.T__40 = 41;
BaliLanguageParser.T__41 = 42;
BaliLanguageParser.T__42 = 43;
BaliLanguageParser.T__43 = 44;
BaliLanguageParser.T__44 = 45;
BaliLanguageParser.T__45 = 46;
BaliLanguageParser.T__46 = 47;
BaliLanguageParser.T__47 = 48;
BaliLanguageParser.T__48 = 49;
BaliLanguageParser.T__49 = 50;
BaliLanguageParser.T__50 = 51;
BaliLanguageParser.T__51 = 52;
BaliLanguageParser.T__52 = 53;
BaliLanguageParser.T__53 = 54;
BaliLanguageParser.T__54 = 55;
BaliLanguageParser.T__55 = 56;
BaliLanguageParser.T__56 = 57;
BaliLanguageParser.T__57 = 58;
BaliLanguageParser.T__58 = 59;
BaliLanguageParser.T__59 = 60;
BaliLanguageParser.T__60 = 61;
BaliLanguageParser.T__61 = 62;
BaliLanguageParser.T__62 = 63;
BaliLanguageParser.T__63 = 64;
BaliLanguageParser.T__64 = 65;
BaliLanguageParser.T__65 = 66;
BaliLanguageParser.T__66 = 67;
BaliLanguageParser.T__67 = 68;
BaliLanguageParser.SHELL = 69;
BaliLanguageParser.TAG = 70;
BaliLanguageParser.SYMBOL = 71;
BaliLanguageParser.FRACTION = 72;
BaliLanguageParser.CONSTANT = 73;
BaliLanguageParser.FLOAT = 74;
BaliLanguageParser.MOMENT = 75;
BaliLanguageParser.DURATION = 76;
BaliLanguageParser.RESOURCE = 77;
BaliLanguageParser.VERSION = 78;
BaliLanguageParser.BINARY = 79;
BaliLanguageParser.TEXT_BLOCK = 80;
BaliLanguageParser.TEXT = 81;
BaliLanguageParser.IDENTIFIER = 82;
BaliLanguageParser.NEWLINE = 83;
BaliLanguageParser.SPACE = 84;

BaliLanguageParser.RULE_document = 0;
BaliLanguageParser.RULE_component = 1;
BaliLanguageParser.RULE_item = 2;
BaliLanguageParser.RULE_structure = 3;
BaliLanguageParser.RULE_parameters = 4;
BaliLanguageParser.RULE_composite = 5;
BaliLanguageParser.RULE_range = 6;
BaliLanguageParser.RULE_list = 7;
BaliLanguageParser.RULE_catalog = 8;
BaliLanguageParser.RULE_association = 9;
BaliLanguageParser.RULE_task = 10;
BaliLanguageParser.RULE_block = 11;
BaliLanguageParser.RULE_procedure = 12;
BaliLanguageParser.RULE_statement = 13;
BaliLanguageParser.RULE_mainClause = 14;
BaliLanguageParser.RULE_evaluateClause = 15;
BaliLanguageParser.RULE_checkoutClause = 16;
BaliLanguageParser.RULE_saveClause = 17;
BaliLanguageParser.RULE_discardClause = 18;
BaliLanguageParser.RULE_commitClause = 19;
BaliLanguageParser.RULE_publishClause = 20;
BaliLanguageParser.RULE_queueClause = 21;
BaliLanguageParser.RULE_waitClause = 22;
BaliLanguageParser.RULE_ifClause = 23;
BaliLanguageParser.RULE_selectClause = 24;
BaliLanguageParser.RULE_whileClause = 25;
BaliLanguageParser.RULE_withClause = 26;
BaliLanguageParser.RULE_continueClause = 27;
BaliLanguageParser.RULE_breakClause = 28;
BaliLanguageParser.RULE_returnClause = 29;
BaliLanguageParser.RULE_throwClause = 30;
BaliLanguageParser.RULE_handleClause = 31;
BaliLanguageParser.RULE_recipient = 32;
BaliLanguageParser.RULE_variable = 33;
BaliLanguageParser.RULE_indices = 34;
BaliLanguageParser.RULE_expression = 35;
BaliLanguageParser.RULE_funxtion = 36;
BaliLanguageParser.RULE_message = 37;
BaliLanguageParser.RULE_element = 38;
BaliLanguageParser.RULE_binary = 39;
BaliLanguageParser.RULE_duration = 40;
BaliLanguageParser.RULE_imaginary = 41;
BaliLanguageParser.RULE_moment = 42;
BaliLanguageParser.RULE_number = 43;
BaliLanguageParser.RULE_percent = 44;
BaliLanguageParser.RULE_probability = 45;
BaliLanguageParser.RULE_real = 46;
BaliLanguageParser.RULE_reference = 47;
BaliLanguageParser.RULE_symbol = 48;
BaliLanguageParser.RULE_tag = 49;
BaliLanguageParser.RULE_template = 50;
BaliLanguageParser.RULE_text = 51;
BaliLanguageParser.RULE_version = 52;

function DocumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_document;
    return this;
}

DocumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocumentContext.prototype.constructor = DocumentContext;

DocumentContext.prototype.component = function() {
    return this.getTypedRuleContext(ComponentContext,0);
};

DocumentContext.prototype.EOF = function() {
    return this.getToken(BaliLanguageParser.EOF, 0);
};

DocumentContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BaliLanguageParser.NEWLINE);
    } else {
        return this.getToken(BaliLanguageParser.NEWLINE, i);
    }
};


DocumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterDocument(this);
	}
};

DocumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitDocument(this);
	}
};

DocumentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitDocument(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.DocumentContext = DocumentContext;

BaliLanguageParser.prototype.document = function() {

    var localctx = new DocumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BaliLanguageParser.RULE_document);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BaliLanguageParser.NEWLINE) {
            this.state = 106;
            this.match(BaliLanguageParser.NEWLINE);
            this.state = 111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 112;
        this.component();
        this.state = 116;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BaliLanguageParser.NEWLINE) {
            this.state = 113;
            this.match(BaliLanguageParser.NEWLINE);
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 119;
        this.match(BaliLanguageParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ComponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_component;
    return this;
}

ComponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComponentContext.prototype.constructor = ComponentContext;

ComponentContext.prototype.item = function() {
    return this.getTypedRuleContext(ItemContext,0);
};

ComponentContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

ComponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterComponent(this);
	}
};

ComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitComponent(this);
	}
};

ComponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitComponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ComponentContext = ComponentContext;

BaliLanguageParser.prototype.component = function() {

    var localctx = new ComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, BaliLanguageParser.RULE_component);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.item();
        this.state = 123;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        if(la_===1) {
            this.state = 122;
            this.parameters();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_item;
    return this;
}

ItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ItemContext.prototype.constructor = ItemContext;

ItemContext.prototype.element = function() {
    return this.getTypedRuleContext(ElementContext,0);
};

ItemContext.prototype.structure = function() {
    return this.getTypedRuleContext(StructureContext,0);
};

ItemContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterItem(this);
	}
};

ItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitItem(this);
	}
};

ItemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitItem(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ItemContext = ItemContext;

BaliLanguageParser.prototype.item = function() {

    var localctx = new ItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BaliLanguageParser.RULE_item);
    try {
        this.state = 128;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__2:
        case BaliLanguageParser.T__42:
        case BaliLanguageParser.T__59:
        case BaliLanguageParser.T__60:
        case BaliLanguageParser.T__61:
        case BaliLanguageParser.T__64:
        case BaliLanguageParser.T__65:
        case BaliLanguageParser.T__66:
        case BaliLanguageParser.T__67:
        case BaliLanguageParser.TAG:
        case BaliLanguageParser.SYMBOL:
        case BaliLanguageParser.FRACTION:
        case BaliLanguageParser.CONSTANT:
        case BaliLanguageParser.FLOAT:
        case BaliLanguageParser.MOMENT:
        case BaliLanguageParser.DURATION:
        case BaliLanguageParser.RESOURCE:
        case BaliLanguageParser.VERSION:
        case BaliLanguageParser.BINARY:
        case BaliLanguageParser.TEXT_BLOCK:
        case BaliLanguageParser.TEXT:
            this.enterOuterAlt(localctx, 1);
            this.state = 125;
            this.element();
            break;
        case BaliLanguageParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 126;
            this.structure();
            break;
        case BaliLanguageParser.T__7:
            this.enterOuterAlt(localctx, 3);
            this.state = 127;
            this.block();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StructureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_structure;
    return this;
}

StructureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructureContext.prototype.constructor = StructureContext;

StructureContext.prototype.composite = function() {
    return this.getTypedRuleContext(CompositeContext,0);
};

StructureContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterStructure(this);
	}
};

StructureContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitStructure(this);
	}
};

StructureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitStructure(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.StructureContext = StructureContext;

BaliLanguageParser.prototype.structure = function() {

    var localctx = new StructureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, BaliLanguageParser.RULE_structure);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.match(BaliLanguageParser.T__0);
        this.state = 131;
        this.composite();
        this.state = 132;
        this.match(BaliLanguageParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.composite = function() {
    return this.getTypedRuleContext(CompositeContext,0);
};

ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitParameters(this);
	}
};

ParametersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitParameters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ParametersContext = ParametersContext;

BaliLanguageParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, BaliLanguageParser.RULE_parameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(BaliLanguageParser.T__2);
        this.state = 135;
        this.composite();
        this.state = 136;
        this.match(BaliLanguageParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CompositeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_composite;
    return this;
}

CompositeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompositeContext.prototype.constructor = CompositeContext;

CompositeContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

CompositeContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

CompositeContext.prototype.catalog = function() {
    return this.getTypedRuleContext(CatalogContext,0);
};

CompositeContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterComposite(this);
	}
};

CompositeContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitComposite(this);
	}
};

CompositeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitComposite(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.CompositeContext = CompositeContext;

BaliLanguageParser.prototype.composite = function() {

    var localctx = new CompositeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, BaliLanguageParser.RULE_composite);
    try {
        this.state = 141;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 138;
            this.range();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 139;
            this.list();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 140;
            this.catalog();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RangeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_range;
    return this;
}

RangeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RangeContext.prototype.constructor = RangeContext;

RangeContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

RangeContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterRange(this);
	}
};

RangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitRange(this);
	}
};

RangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitRange(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.RangeContext = RangeContext;

BaliLanguageParser.prototype.range = function() {

    var localctx = new RangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, BaliLanguageParser.RULE_range);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.expression(0);
        this.state = 144;
        this.match(BaliLanguageParser.T__4);
        this.state = 145;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;


 
ListContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NewlineListContext(parser, ctx) {
	ListContext.call(this, parser);
    ListContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewlineListContext.prototype = Object.create(ListContext.prototype);
NewlineListContext.prototype.constructor = NewlineListContext;

BaliLanguageParser.NewlineListContext = NewlineListContext;

NewlineListContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BaliLanguageParser.NEWLINE);
    } else {
        return this.getToken(BaliLanguageParser.NEWLINE, i);
    }
};


NewlineListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
NewlineListContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterNewlineList(this);
	}
};

NewlineListContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitNewlineList(this);
	}
};

NewlineListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitNewlineList(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EmptyListContext(parser, ctx) {
	ListContext.call(this, parser);
    ListContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EmptyListContext.prototype = Object.create(ListContext.prototype);
EmptyListContext.prototype.constructor = EmptyListContext;

BaliLanguageParser.EmptyListContext = EmptyListContext;

EmptyListContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterEmptyList(this);
	}
};

EmptyListContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitEmptyList(this);
	}
};

EmptyListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitEmptyList(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InlineListContext(parser, ctx) {
	ListContext.call(this, parser);
    ListContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InlineListContext.prototype = Object.create(ListContext.prototype);
InlineListContext.prototype.constructor = InlineListContext;

BaliLanguageParser.InlineListContext = InlineListContext;

InlineListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
InlineListContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterInlineList(this);
	}
};

InlineListContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitInlineList(this);
	}
};

InlineListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitInlineList(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.ListContext = ListContext;

BaliLanguageParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, BaliLanguageParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.state = 165;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__0:
        case BaliLanguageParser.T__2:
        case BaliLanguageParser.T__7:
        case BaliLanguageParser.T__38:
        case BaliLanguageParser.T__42:
        case BaliLanguageParser.T__43:
        case BaliLanguageParser.T__44:
        case BaliLanguageParser.T__47:
        case BaliLanguageParser.T__53:
        case BaliLanguageParser.T__59:
        case BaliLanguageParser.T__60:
        case BaliLanguageParser.T__61:
        case BaliLanguageParser.T__64:
        case BaliLanguageParser.T__65:
        case BaliLanguageParser.T__66:
        case BaliLanguageParser.T__67:
        case BaliLanguageParser.TAG:
        case BaliLanguageParser.SYMBOL:
        case BaliLanguageParser.FRACTION:
        case BaliLanguageParser.CONSTANT:
        case BaliLanguageParser.FLOAT:
        case BaliLanguageParser.MOMENT:
        case BaliLanguageParser.DURATION:
        case BaliLanguageParser.RESOURCE:
        case BaliLanguageParser.VERSION:
        case BaliLanguageParser.BINARY:
        case BaliLanguageParser.TEXT_BLOCK:
        case BaliLanguageParser.TEXT:
        case BaliLanguageParser.IDENTIFIER:
            localctx = new InlineListContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 147;
            this.expression(0);
            this.state = 152;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliLanguageParser.T__5) {
                this.state = 148;
                this.match(BaliLanguageParser.T__5);
                this.state = 149;
                this.expression(0);
                this.state = 154;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliLanguageParser.NEWLINE:
            localctx = new NewlineListContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 155;
            this.match(BaliLanguageParser.NEWLINE);
            this.state = 161;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliLanguageParser.T__0) | (1 << BaliLanguageParser.T__2) | (1 << BaliLanguageParser.T__7))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (BaliLanguageParser.T__38 - 39)) | (1 << (BaliLanguageParser.T__42 - 39)) | (1 << (BaliLanguageParser.T__43 - 39)) | (1 << (BaliLanguageParser.T__44 - 39)) | (1 << (BaliLanguageParser.T__47 - 39)) | (1 << (BaliLanguageParser.T__53 - 39)) | (1 << (BaliLanguageParser.T__59 - 39)) | (1 << (BaliLanguageParser.T__60 - 39)) | (1 << (BaliLanguageParser.T__61 - 39)) | (1 << (BaliLanguageParser.T__64 - 39)) | (1 << (BaliLanguageParser.T__65 - 39)) | (1 << (BaliLanguageParser.T__66 - 39)) | (1 << (BaliLanguageParser.T__67 - 39)) | (1 << (BaliLanguageParser.TAG - 39)))) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (BaliLanguageParser.SYMBOL - 71)) | (1 << (BaliLanguageParser.FRACTION - 71)) | (1 << (BaliLanguageParser.CONSTANT - 71)) | (1 << (BaliLanguageParser.FLOAT - 71)) | (1 << (BaliLanguageParser.MOMENT - 71)) | (1 << (BaliLanguageParser.DURATION - 71)) | (1 << (BaliLanguageParser.RESOURCE - 71)) | (1 << (BaliLanguageParser.VERSION - 71)) | (1 << (BaliLanguageParser.BINARY - 71)) | (1 << (BaliLanguageParser.TEXT_BLOCK - 71)) | (1 << (BaliLanguageParser.TEXT - 71)) | (1 << (BaliLanguageParser.IDENTIFIER - 71)))) !== 0)) {
                this.state = 156;
                this.expression(0);
                this.state = 157;
                this.match(BaliLanguageParser.NEWLINE);
                this.state = 163;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliLanguageParser.T__1:
        case BaliLanguageParser.T__3:
            localctx = new EmptyListContext(this, localctx);
            this.enterOuterAlt(localctx, 3);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CatalogContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_catalog;
    return this;
}

CatalogContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CatalogContext.prototype.constructor = CatalogContext;


 
CatalogContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function InlineCatalogContext(parser, ctx) {
	CatalogContext.call(this, parser);
    CatalogContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InlineCatalogContext.prototype = Object.create(CatalogContext.prototype);
InlineCatalogContext.prototype.constructor = InlineCatalogContext;

BaliLanguageParser.InlineCatalogContext = InlineCatalogContext;

InlineCatalogContext.prototype.association = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssociationContext);
    } else {
        return this.getTypedRuleContext(AssociationContext,i);
    }
};
InlineCatalogContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterInlineCatalog(this);
	}
};

InlineCatalogContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitInlineCatalog(this);
	}
};

InlineCatalogContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitInlineCatalog(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NewlineCatalogContext(parser, ctx) {
	CatalogContext.call(this, parser);
    CatalogContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewlineCatalogContext.prototype = Object.create(CatalogContext.prototype);
NewlineCatalogContext.prototype.constructor = NewlineCatalogContext;

BaliLanguageParser.NewlineCatalogContext = NewlineCatalogContext;

NewlineCatalogContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BaliLanguageParser.NEWLINE);
    } else {
        return this.getToken(BaliLanguageParser.NEWLINE, i);
    }
};


NewlineCatalogContext.prototype.association = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssociationContext);
    } else {
        return this.getTypedRuleContext(AssociationContext,i);
    }
};
NewlineCatalogContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterNewlineCatalog(this);
	}
};

NewlineCatalogContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitNewlineCatalog(this);
	}
};

NewlineCatalogContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitNewlineCatalog(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EmptyCatalogContext(parser, ctx) {
	CatalogContext.call(this, parser);
    CatalogContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EmptyCatalogContext.prototype = Object.create(CatalogContext.prototype);
EmptyCatalogContext.prototype.constructor = EmptyCatalogContext;

BaliLanguageParser.EmptyCatalogContext = EmptyCatalogContext;

EmptyCatalogContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterEmptyCatalog(this);
	}
};

EmptyCatalogContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitEmptyCatalog(this);
	}
};

EmptyCatalogContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitEmptyCatalog(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.CatalogContext = CatalogContext;

BaliLanguageParser.prototype.catalog = function() {

    var localctx = new CatalogContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, BaliLanguageParser.RULE_catalog);
    var _la = 0; // Token type
    try {
        this.state = 185;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__0:
        case BaliLanguageParser.T__2:
        case BaliLanguageParser.T__7:
        case BaliLanguageParser.T__42:
        case BaliLanguageParser.T__59:
        case BaliLanguageParser.T__60:
        case BaliLanguageParser.T__61:
        case BaliLanguageParser.T__64:
        case BaliLanguageParser.T__65:
        case BaliLanguageParser.T__66:
        case BaliLanguageParser.T__67:
        case BaliLanguageParser.TAG:
        case BaliLanguageParser.SYMBOL:
        case BaliLanguageParser.FRACTION:
        case BaliLanguageParser.CONSTANT:
        case BaliLanguageParser.FLOAT:
        case BaliLanguageParser.MOMENT:
        case BaliLanguageParser.DURATION:
        case BaliLanguageParser.RESOURCE:
        case BaliLanguageParser.VERSION:
        case BaliLanguageParser.BINARY:
        case BaliLanguageParser.TEXT_BLOCK:
        case BaliLanguageParser.TEXT:
            localctx = new InlineCatalogContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 167;
            this.association();
            this.state = 172;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliLanguageParser.T__5) {
                this.state = 168;
                this.match(BaliLanguageParser.T__5);
                this.state = 169;
                this.association();
                this.state = 174;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliLanguageParser.NEWLINE:
            localctx = new NewlineCatalogContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 175;
            this.match(BaliLanguageParser.NEWLINE);
            this.state = 181;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliLanguageParser.T__0) | (1 << BaliLanguageParser.T__2) | (1 << BaliLanguageParser.T__7))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (BaliLanguageParser.T__42 - 43)) | (1 << (BaliLanguageParser.T__59 - 43)) | (1 << (BaliLanguageParser.T__60 - 43)) | (1 << (BaliLanguageParser.T__61 - 43)) | (1 << (BaliLanguageParser.T__64 - 43)) | (1 << (BaliLanguageParser.T__65 - 43)) | (1 << (BaliLanguageParser.T__66 - 43)) | (1 << (BaliLanguageParser.T__67 - 43)) | (1 << (BaliLanguageParser.TAG - 43)) | (1 << (BaliLanguageParser.SYMBOL - 43)) | (1 << (BaliLanguageParser.FRACTION - 43)) | (1 << (BaliLanguageParser.CONSTANT - 43)) | (1 << (BaliLanguageParser.FLOAT - 43)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (BaliLanguageParser.MOMENT - 75)) | (1 << (BaliLanguageParser.DURATION - 75)) | (1 << (BaliLanguageParser.RESOURCE - 75)) | (1 << (BaliLanguageParser.VERSION - 75)) | (1 << (BaliLanguageParser.BINARY - 75)) | (1 << (BaliLanguageParser.TEXT_BLOCK - 75)) | (1 << (BaliLanguageParser.TEXT - 75)))) !== 0)) {
                this.state = 176;
                this.association();
                this.state = 177;
                this.match(BaliLanguageParser.NEWLINE);
                this.state = 183;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliLanguageParser.T__6:
            localctx = new EmptyCatalogContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 184;
            this.match(BaliLanguageParser.T__6);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssociationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_association;
    return this;
}

AssociationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssociationContext.prototype.constructor = AssociationContext;

AssociationContext.prototype.component = function() {
    return this.getTypedRuleContext(ComponentContext,0);
};

AssociationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssociationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterAssociation(this);
	}
};

AssociationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitAssociation(this);
	}
};

AssociationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitAssociation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.AssociationContext = AssociationContext;

BaliLanguageParser.prototype.association = function() {

    var localctx = new AssociationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, BaliLanguageParser.RULE_association);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.component();
        this.state = 188;
        this.match(BaliLanguageParser.T__6);
        this.state = 189;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TaskContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_task;
    return this;
}

TaskContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TaskContext.prototype.constructor = TaskContext;

TaskContext.prototype.SHELL = function() {
    return this.getToken(BaliLanguageParser.SHELL, 0);
};

TaskContext.prototype.procedure = function() {
    return this.getTypedRuleContext(ProcedureContext,0);
};

TaskContext.prototype.EOF = function() {
    return this.getToken(BaliLanguageParser.EOF, 0);
};

TaskContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BaliLanguageParser.NEWLINE);
    } else {
        return this.getToken(BaliLanguageParser.NEWLINE, i);
    }
};


TaskContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterTask(this);
	}
};

TaskContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitTask(this);
	}
};

TaskContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitTask(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.TaskContext = TaskContext;

BaliLanguageParser.prototype.task = function() {

    var localctx = new TaskContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, BaliLanguageParser.RULE_task);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(BaliLanguageParser.SHELL);
        this.state = 195;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 192;
                this.match(BaliLanguageParser.NEWLINE); 
            }
            this.state = 197;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

        this.state = 198;
        this.procedure();
        this.state = 202;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BaliLanguageParser.NEWLINE) {
            this.state = 199;
            this.match(BaliLanguageParser.NEWLINE);
            this.state = 204;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 205;
        this.match(BaliLanguageParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.procedure = function() {
    return this.getTypedRuleContext(ProcedureContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.BlockContext = BlockContext;

BaliLanguageParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, BaliLanguageParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this.match(BaliLanguageParser.T__7);
        this.state = 208;
        this.procedure();
        this.state = 209;
        this.match(BaliLanguageParser.T__8);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ProcedureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_procedure;
    return this;
}

ProcedureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcedureContext.prototype.constructor = ProcedureContext;


 
ProcedureContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function EmptyProcedureContext(parser, ctx) {
	ProcedureContext.call(this, parser);
    ProcedureContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EmptyProcedureContext.prototype = Object.create(ProcedureContext.prototype);
EmptyProcedureContext.prototype.constructor = EmptyProcedureContext;

BaliLanguageParser.EmptyProcedureContext = EmptyProcedureContext;

EmptyProcedureContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterEmptyProcedure(this);
	}
};

EmptyProcedureContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitEmptyProcedure(this);
	}
};

EmptyProcedureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitEmptyProcedure(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NewlineProcedureContext(parser, ctx) {
	ProcedureContext.call(this, parser);
    ProcedureContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewlineProcedureContext.prototype = Object.create(ProcedureContext.prototype);
NewlineProcedureContext.prototype.constructor = NewlineProcedureContext;

BaliLanguageParser.NewlineProcedureContext = NewlineProcedureContext;

NewlineProcedureContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BaliLanguageParser.NEWLINE);
    } else {
        return this.getToken(BaliLanguageParser.NEWLINE, i);
    }
};


NewlineProcedureContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};
NewlineProcedureContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterNewlineProcedure(this);
	}
};

NewlineProcedureContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitNewlineProcedure(this);
	}
};

NewlineProcedureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitNewlineProcedure(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InlineProcedureContext(parser, ctx) {
	ProcedureContext.call(this, parser);
    ProcedureContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InlineProcedureContext.prototype = Object.create(ProcedureContext.prototype);
InlineProcedureContext.prototype.constructor = InlineProcedureContext;

BaliLanguageParser.InlineProcedureContext = InlineProcedureContext;

InlineProcedureContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};
InlineProcedureContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterInlineProcedure(this);
	}
};

InlineProcedureContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitInlineProcedure(this);
	}
};

InlineProcedureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitInlineProcedure(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.ProcedureContext = ProcedureContext;

BaliLanguageParser.prototype.procedure = function() {

    var localctx = new ProcedureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, BaliLanguageParser.RULE_procedure);
    var _la = 0; // Token type
    try {
        this.state = 229;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            localctx = new InlineProcedureContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 211;
            this.statement();
            this.state = 216;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliLanguageParser.T__9) {
                this.state = 212;
                this.match(BaliLanguageParser.T__9);
                this.state = 213;
                this.statement();
                this.state = 218;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            localctx = new NewlineProcedureContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 219;
            this.match(BaliLanguageParser.NEWLINE);
            this.state = 225;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliLanguageParser.T__0) | (1 << BaliLanguageParser.T__2) | (1 << BaliLanguageParser.T__7) | (1 << BaliLanguageParser.T__11) | (1 << BaliLanguageParser.T__13) | (1 << BaliLanguageParser.T__15) | (1 << BaliLanguageParser.T__16) | (1 << BaliLanguageParser.T__17) | (1 << BaliLanguageParser.T__18) | (1 << BaliLanguageParser.T__20) | (1 << BaliLanguageParser.T__22) | (1 << BaliLanguageParser.T__25) | (1 << BaliLanguageParser.T__27) | (1 << BaliLanguageParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (BaliLanguageParser.T__31 - 32)) | (1 << (BaliLanguageParser.T__33 - 32)) | (1 << (BaliLanguageParser.T__34 - 32)) | (1 << (BaliLanguageParser.T__35 - 32)) | (1 << (BaliLanguageParser.T__38 - 32)) | (1 << (BaliLanguageParser.T__42 - 32)) | (1 << (BaliLanguageParser.T__43 - 32)) | (1 << (BaliLanguageParser.T__44 - 32)) | (1 << (BaliLanguageParser.T__47 - 32)) | (1 << (BaliLanguageParser.T__53 - 32)) | (1 << (BaliLanguageParser.T__59 - 32)) | (1 << (BaliLanguageParser.T__60 - 32)) | (1 << (BaliLanguageParser.T__61 - 32)))) !== 0) || ((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (BaliLanguageParser.T__64 - 65)) | (1 << (BaliLanguageParser.T__65 - 65)) | (1 << (BaliLanguageParser.T__66 - 65)) | (1 << (BaliLanguageParser.T__67 - 65)) | (1 << (BaliLanguageParser.TAG - 65)) | (1 << (BaliLanguageParser.SYMBOL - 65)) | (1 << (BaliLanguageParser.FRACTION - 65)) | (1 << (BaliLanguageParser.CONSTANT - 65)) | (1 << (BaliLanguageParser.FLOAT - 65)) | (1 << (BaliLanguageParser.MOMENT - 65)) | (1 << (BaliLanguageParser.DURATION - 65)) | (1 << (BaliLanguageParser.RESOURCE - 65)) | (1 << (BaliLanguageParser.VERSION - 65)) | (1 << (BaliLanguageParser.BINARY - 65)) | (1 << (BaliLanguageParser.TEXT_BLOCK - 65)) | (1 << (BaliLanguageParser.TEXT - 65)) | (1 << (BaliLanguageParser.IDENTIFIER - 65)))) !== 0)) {
                this.state = 220;
                this.statement();
                this.state = 221;
                this.match(BaliLanguageParser.NEWLINE);
                this.state = 227;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 3:
            localctx = new EmptyProcedureContext(this, localctx);
            this.enterOuterAlt(localctx, 3);

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.mainClause = function() {
    return this.getTypedRuleContext(MainClauseContext,0);
};

StatementContext.prototype.handleClause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HandleClauseContext);
    } else {
        return this.getTypedRuleContext(HandleClauseContext,i);
    }
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.StatementContext = StatementContext;

BaliLanguageParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, BaliLanguageParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 231;
        this.mainClause();
        this.state = 235;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BaliLanguageParser.T__36) {
            this.state = 232;
            this.handleClause();
            this.state = 237;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MainClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_mainClause;
    return this;
}

MainClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MainClauseContext.prototype.constructor = MainClauseContext;

MainClauseContext.prototype.evaluateClause = function() {
    return this.getTypedRuleContext(EvaluateClauseContext,0);
};

MainClauseContext.prototype.checkoutClause = function() {
    return this.getTypedRuleContext(CheckoutClauseContext,0);
};

MainClauseContext.prototype.saveClause = function() {
    return this.getTypedRuleContext(SaveClauseContext,0);
};

MainClauseContext.prototype.discardClause = function() {
    return this.getTypedRuleContext(DiscardClauseContext,0);
};

MainClauseContext.prototype.commitClause = function() {
    return this.getTypedRuleContext(CommitClauseContext,0);
};

MainClauseContext.prototype.publishClause = function() {
    return this.getTypedRuleContext(PublishClauseContext,0);
};

MainClauseContext.prototype.queueClause = function() {
    return this.getTypedRuleContext(QueueClauseContext,0);
};

MainClauseContext.prototype.waitClause = function() {
    return this.getTypedRuleContext(WaitClauseContext,0);
};

MainClauseContext.prototype.ifClause = function() {
    return this.getTypedRuleContext(IfClauseContext,0);
};

MainClauseContext.prototype.selectClause = function() {
    return this.getTypedRuleContext(SelectClauseContext,0);
};

MainClauseContext.prototype.whileClause = function() {
    return this.getTypedRuleContext(WhileClauseContext,0);
};

MainClauseContext.prototype.withClause = function() {
    return this.getTypedRuleContext(WithClauseContext,0);
};

MainClauseContext.prototype.continueClause = function() {
    return this.getTypedRuleContext(ContinueClauseContext,0);
};

MainClauseContext.prototype.breakClause = function() {
    return this.getTypedRuleContext(BreakClauseContext,0);
};

MainClauseContext.prototype.returnClause = function() {
    return this.getTypedRuleContext(ReturnClauseContext,0);
};

MainClauseContext.prototype.throwClause = function() {
    return this.getTypedRuleContext(ThrowClauseContext,0);
};

MainClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterMainClause(this);
	}
};

MainClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitMainClause(this);
	}
};

MainClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitMainClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.MainClauseContext = MainClauseContext;

BaliLanguageParser.prototype.mainClause = function() {

    var localctx = new MainClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, BaliLanguageParser.RULE_mainClause);
    try {
        this.state = 254;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__0:
        case BaliLanguageParser.T__2:
        case BaliLanguageParser.T__7:
        case BaliLanguageParser.T__38:
        case BaliLanguageParser.T__42:
        case BaliLanguageParser.T__43:
        case BaliLanguageParser.T__44:
        case BaliLanguageParser.T__47:
        case BaliLanguageParser.T__53:
        case BaliLanguageParser.T__59:
        case BaliLanguageParser.T__60:
        case BaliLanguageParser.T__61:
        case BaliLanguageParser.T__64:
        case BaliLanguageParser.T__65:
        case BaliLanguageParser.T__66:
        case BaliLanguageParser.T__67:
        case BaliLanguageParser.TAG:
        case BaliLanguageParser.SYMBOL:
        case BaliLanguageParser.FRACTION:
        case BaliLanguageParser.CONSTANT:
        case BaliLanguageParser.FLOAT:
        case BaliLanguageParser.MOMENT:
        case BaliLanguageParser.DURATION:
        case BaliLanguageParser.RESOURCE:
        case BaliLanguageParser.VERSION:
        case BaliLanguageParser.BINARY:
        case BaliLanguageParser.TEXT_BLOCK:
        case BaliLanguageParser.TEXT:
        case BaliLanguageParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 238;
            this.evaluateClause();
            break;
        case BaliLanguageParser.T__11:
            this.enterOuterAlt(localctx, 2);
            this.state = 239;
            this.checkoutClause();
            break;
        case BaliLanguageParser.T__13:
            this.enterOuterAlt(localctx, 3);
            this.state = 240;
            this.saveClause();
            break;
        case BaliLanguageParser.T__15:
            this.enterOuterAlt(localctx, 4);
            this.state = 241;
            this.discardClause();
            break;
        case BaliLanguageParser.T__16:
            this.enterOuterAlt(localctx, 5);
            this.state = 242;
            this.commitClause();
            break;
        case BaliLanguageParser.T__17:
            this.enterOuterAlt(localctx, 6);
            this.state = 243;
            this.publishClause();
            break;
        case BaliLanguageParser.T__18:
            this.enterOuterAlt(localctx, 7);
            this.state = 244;
            this.queueClause();
            break;
        case BaliLanguageParser.T__20:
            this.enterOuterAlt(localctx, 8);
            this.state = 245;
            this.waitClause();
            break;
        case BaliLanguageParser.T__22:
            this.enterOuterAlt(localctx, 9);
            this.state = 246;
            this.ifClause();
            break;
        case BaliLanguageParser.T__25:
            this.enterOuterAlt(localctx, 10);
            this.state = 247;
            this.selectClause();
            break;
        case BaliLanguageParser.T__27:
            this.enterOuterAlt(localctx, 11);
            this.state = 248;
            this.whileClause();
            break;
        case BaliLanguageParser.T__28:
            this.enterOuterAlt(localctx, 12);
            this.state = 249;
            this.withClause();
            break;
        case BaliLanguageParser.T__31:
            this.enterOuterAlt(localctx, 13);
            this.state = 250;
            this.continueClause();
            break;
        case BaliLanguageParser.T__33:
            this.enterOuterAlt(localctx, 14);
            this.state = 251;
            this.breakClause();
            break;
        case BaliLanguageParser.T__34:
            this.enterOuterAlt(localctx, 15);
            this.state = 252;
            this.returnClause();
            break;
        case BaliLanguageParser.T__35:
            this.enterOuterAlt(localctx, 16);
            this.state = 253;
            this.throwClause();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EvaluateClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_evaluateClause;
    return this;
}

EvaluateClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EvaluateClauseContext.prototype.constructor = EvaluateClauseContext;

EvaluateClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

EvaluateClauseContext.prototype.recipient = function() {
    return this.getTypedRuleContext(RecipientContext,0);
};

EvaluateClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterEvaluateClause(this);
	}
};

EvaluateClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitEvaluateClause(this);
	}
};

EvaluateClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitEvaluateClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.EvaluateClauseContext = EvaluateClauseContext;

BaliLanguageParser.prototype.evaluateClause = function() {

    var localctx = new EvaluateClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, BaliLanguageParser.RULE_evaluateClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        if(la_===1) {
            this.state = 256;
            this.recipient();
            this.state = 257;
            this.match(BaliLanguageParser.T__10);

        }
        this.state = 261;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CheckoutClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_checkoutClause;
    return this;
}

CheckoutClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CheckoutClauseContext.prototype.constructor = CheckoutClauseContext;

CheckoutClauseContext.prototype.recipient = function() {
    return this.getTypedRuleContext(RecipientContext,0);
};

CheckoutClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

CheckoutClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterCheckoutClause(this);
	}
};

CheckoutClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitCheckoutClause(this);
	}
};

CheckoutClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitCheckoutClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.CheckoutClauseContext = CheckoutClauseContext;

BaliLanguageParser.prototype.checkoutClause = function() {

    var localctx = new CheckoutClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, BaliLanguageParser.RULE_checkoutClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this.match(BaliLanguageParser.T__11);
        this.state = 264;
        this.recipient();
        this.state = 265;
        this.match(BaliLanguageParser.T__12);
        this.state = 266;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SaveClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_saveClause;
    return this;
}

SaveClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SaveClauseContext.prototype.constructor = SaveClauseContext;

SaveClauseContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

SaveClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterSaveClause(this);
	}
};

SaveClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitSaveClause(this);
	}
};

SaveClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitSaveClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.SaveClauseContext = SaveClauseContext;

BaliLanguageParser.prototype.saveClause = function() {

    var localctx = new SaveClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, BaliLanguageParser.RULE_saveClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        this.match(BaliLanguageParser.T__13);
        this.state = 269;
        this.expression(0);
        this.state = 270;
        this.match(BaliLanguageParser.T__14);
        this.state = 271;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DiscardClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_discardClause;
    return this;
}

DiscardClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DiscardClauseContext.prototype.constructor = DiscardClauseContext;

DiscardClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DiscardClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterDiscardClause(this);
	}
};

DiscardClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitDiscardClause(this);
	}
};

DiscardClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitDiscardClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.DiscardClauseContext = DiscardClauseContext;

BaliLanguageParser.prototype.discardClause = function() {

    var localctx = new DiscardClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, BaliLanguageParser.RULE_discardClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.match(BaliLanguageParser.T__15);
        this.state = 274;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CommitClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_commitClause;
    return this;
}

CommitClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommitClauseContext.prototype.constructor = CommitClauseContext;

CommitClauseContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

CommitClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterCommitClause(this);
	}
};

CommitClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitCommitClause(this);
	}
};

CommitClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitCommitClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.CommitClauseContext = CommitClauseContext;

BaliLanguageParser.prototype.commitClause = function() {

    var localctx = new CommitClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, BaliLanguageParser.RULE_commitClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
        this.match(BaliLanguageParser.T__16);
        this.state = 277;
        this.expression(0);
        this.state = 278;
        this.match(BaliLanguageParser.T__14);
        this.state = 279;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PublishClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_publishClause;
    return this;
}

PublishClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PublishClauseContext.prototype.constructor = PublishClauseContext;

PublishClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PublishClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterPublishClause(this);
	}
};

PublishClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitPublishClause(this);
	}
};

PublishClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitPublishClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.PublishClauseContext = PublishClauseContext;

BaliLanguageParser.prototype.publishClause = function() {

    var localctx = new PublishClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, BaliLanguageParser.RULE_publishClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this.match(BaliLanguageParser.T__17);
        this.state = 282;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QueueClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_queueClause;
    return this;
}

QueueClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueueClauseContext.prototype.constructor = QueueClauseContext;

QueueClauseContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

QueueClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterQueueClause(this);
	}
};

QueueClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitQueueClause(this);
	}
};

QueueClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitQueueClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.QueueClauseContext = QueueClauseContext;

BaliLanguageParser.prototype.queueClause = function() {

    var localctx = new QueueClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, BaliLanguageParser.RULE_queueClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this.match(BaliLanguageParser.T__18);
        this.state = 285;
        this.expression(0);
        this.state = 286;
        this.match(BaliLanguageParser.T__19);
        this.state = 287;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WaitClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_waitClause;
    return this;
}

WaitClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WaitClauseContext.prototype.constructor = WaitClauseContext;

WaitClauseContext.prototype.recipient = function() {
    return this.getTypedRuleContext(RecipientContext,0);
};

WaitClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WaitClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterWaitClause(this);
	}
};

WaitClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitWaitClause(this);
	}
};

WaitClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitWaitClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.WaitClauseContext = WaitClauseContext;

BaliLanguageParser.prototype.waitClause = function() {

    var localctx = new WaitClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, BaliLanguageParser.RULE_waitClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 289;
        this.match(BaliLanguageParser.T__20);
        this.state = 290;
        this.match(BaliLanguageParser.T__21);
        this.state = 291;
        this.recipient();
        this.state = 292;
        this.match(BaliLanguageParser.T__12);
        this.state = 293;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_ifClause;
    return this;
}

IfClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfClauseContext.prototype.constructor = IfClauseContext;

IfClauseContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

IfClauseContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

IfClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterIfClause(this);
	}
};

IfClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitIfClause(this);
	}
};

IfClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitIfClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.IfClauseContext = IfClauseContext;

BaliLanguageParser.prototype.ifClause = function() {

    var localctx = new IfClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, BaliLanguageParser.RULE_ifClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        this.match(BaliLanguageParser.T__22);
        this.state = 296;
        this.expression(0);
        this.state = 297;
        this.match(BaliLanguageParser.T__23);
        this.state = 298;
        this.block();
        this.state = 307;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 299;
                this.match(BaliLanguageParser.T__24);
                this.state = 300;
                this.match(BaliLanguageParser.T__22);
                this.state = 301;
                this.expression(0);
                this.state = 302;
                this.match(BaliLanguageParser.T__23);
                this.state = 303;
                this.block(); 
            }
            this.state = 309;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
        }

        this.state = 312;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__24) {
            this.state = 310;
            this.match(BaliLanguageParser.T__24);
            this.state = 311;
            this.block();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SelectClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_selectClause;
    return this;
}

SelectClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectClauseContext.prototype.constructor = SelectClauseContext;

SelectClauseContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

SelectClauseContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

SelectClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterSelectClause(this);
	}
};

SelectClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitSelectClause(this);
	}
};

SelectClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitSelectClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.SelectClauseContext = SelectClauseContext;

BaliLanguageParser.prototype.selectClause = function() {

    var localctx = new SelectClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, BaliLanguageParser.RULE_selectClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        this.match(BaliLanguageParser.T__25);
        this.state = 315;
        this.expression(0);
        this.state = 316;
        this.match(BaliLanguageParser.T__12);
        this.state = 321; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 317;
            this.expression(0);
            this.state = 318;
            this.match(BaliLanguageParser.T__26);
            this.state = 319;
            this.block();
            this.state = 323; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliLanguageParser.T__0) | (1 << BaliLanguageParser.T__2) | (1 << BaliLanguageParser.T__7))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (BaliLanguageParser.T__38 - 39)) | (1 << (BaliLanguageParser.T__42 - 39)) | (1 << (BaliLanguageParser.T__43 - 39)) | (1 << (BaliLanguageParser.T__44 - 39)) | (1 << (BaliLanguageParser.T__47 - 39)) | (1 << (BaliLanguageParser.T__53 - 39)) | (1 << (BaliLanguageParser.T__59 - 39)) | (1 << (BaliLanguageParser.T__60 - 39)) | (1 << (BaliLanguageParser.T__61 - 39)) | (1 << (BaliLanguageParser.T__64 - 39)) | (1 << (BaliLanguageParser.T__65 - 39)) | (1 << (BaliLanguageParser.T__66 - 39)) | (1 << (BaliLanguageParser.T__67 - 39)) | (1 << (BaliLanguageParser.TAG - 39)))) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (BaliLanguageParser.SYMBOL - 71)) | (1 << (BaliLanguageParser.FRACTION - 71)) | (1 << (BaliLanguageParser.CONSTANT - 71)) | (1 << (BaliLanguageParser.FLOAT - 71)) | (1 << (BaliLanguageParser.MOMENT - 71)) | (1 << (BaliLanguageParser.DURATION - 71)) | (1 << (BaliLanguageParser.RESOURCE - 71)) | (1 << (BaliLanguageParser.VERSION - 71)) | (1 << (BaliLanguageParser.BINARY - 71)) | (1 << (BaliLanguageParser.TEXT_BLOCK - 71)) | (1 << (BaliLanguageParser.TEXT - 71)) | (1 << (BaliLanguageParser.IDENTIFIER - 71)))) !== 0));
        this.state = 327;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__24) {
            this.state = 325;
            this.match(BaliLanguageParser.T__24);
            this.state = 326;
            this.block();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhileClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_whileClause;
    return this;
}

WhileClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileClauseContext.prototype.constructor = WhileClauseContext;

WhileClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhileClauseContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

WhileClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterWhileClause(this);
	}
};

WhileClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitWhileClause(this);
	}
};

WhileClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitWhileClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.WhileClauseContext = WhileClauseContext;

BaliLanguageParser.prototype.whileClause = function() {

    var localctx = new WhileClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, BaliLanguageParser.RULE_whileClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 329;
        this.match(BaliLanguageParser.T__27);
        this.state = 330;
        this.expression(0);
        this.state = 331;
        this.match(BaliLanguageParser.T__26);
        this.state = 332;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WithClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_withClause;
    return this;
}

WithClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WithClauseContext.prototype.constructor = WithClauseContext;

WithClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WithClauseContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

WithClauseContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

WithClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterWithClause(this);
	}
};

WithClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitWithClause(this);
	}
};

WithClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitWithClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.WithClauseContext = WithClauseContext;

BaliLanguageParser.prototype.withClause = function() {

    var localctx = new WithClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, BaliLanguageParser.RULE_withClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 334;
        this.match(BaliLanguageParser.T__28);
        this.state = 339;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__29) {
            this.state = 335;
            this.match(BaliLanguageParser.T__29);
            this.state = 336;
            this.symbol();
            this.state = 337;
            this.match(BaliLanguageParser.T__30);
        }

        this.state = 341;
        this.expression(0);
        this.state = 342;
        this.match(BaliLanguageParser.T__26);
        this.state = 343;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContinueClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_continueClause;
    return this;
}

ContinueClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContinueClauseContext.prototype.constructor = ContinueClauseContext;


ContinueClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterContinueClause(this);
	}
};

ContinueClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitContinueClause(this);
	}
};

ContinueClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitContinueClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ContinueClauseContext = ContinueClauseContext;

BaliLanguageParser.prototype.continueClause = function() {

    var localctx = new ContinueClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, BaliLanguageParser.RULE_continueClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 345;
        this.match(BaliLanguageParser.T__31);
        this.state = 346;
        this.match(BaliLanguageParser.T__32);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BreakClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_breakClause;
    return this;
}

BreakClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BreakClauseContext.prototype.constructor = BreakClauseContext;


BreakClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterBreakClause(this);
	}
};

BreakClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitBreakClause(this);
	}
};

BreakClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitBreakClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.BreakClauseContext = BreakClauseContext;

BaliLanguageParser.prototype.breakClause = function() {

    var localctx = new BreakClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, BaliLanguageParser.RULE_breakClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 348;
        this.match(BaliLanguageParser.T__33);
        this.state = 349;
        this.match(BaliLanguageParser.T__32);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReturnClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_returnClause;
    return this;
}

ReturnClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnClauseContext.prototype.constructor = ReturnClauseContext;

ReturnClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ReturnClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterReturnClause(this);
	}
};

ReturnClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitReturnClause(this);
	}
};

ReturnClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitReturnClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ReturnClauseContext = ReturnClauseContext;

BaliLanguageParser.prototype.returnClause = function() {

    var localctx = new ReturnClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, BaliLanguageParser.RULE_returnClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 351;
        this.match(BaliLanguageParser.T__34);
        this.state = 353;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliLanguageParser.T__0) | (1 << BaliLanguageParser.T__2) | (1 << BaliLanguageParser.T__7))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (BaliLanguageParser.T__38 - 39)) | (1 << (BaliLanguageParser.T__42 - 39)) | (1 << (BaliLanguageParser.T__43 - 39)) | (1 << (BaliLanguageParser.T__44 - 39)) | (1 << (BaliLanguageParser.T__47 - 39)) | (1 << (BaliLanguageParser.T__53 - 39)) | (1 << (BaliLanguageParser.T__59 - 39)) | (1 << (BaliLanguageParser.T__60 - 39)) | (1 << (BaliLanguageParser.T__61 - 39)) | (1 << (BaliLanguageParser.T__64 - 39)) | (1 << (BaliLanguageParser.T__65 - 39)) | (1 << (BaliLanguageParser.T__66 - 39)) | (1 << (BaliLanguageParser.T__67 - 39)) | (1 << (BaliLanguageParser.TAG - 39)))) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (BaliLanguageParser.SYMBOL - 71)) | (1 << (BaliLanguageParser.FRACTION - 71)) | (1 << (BaliLanguageParser.CONSTANT - 71)) | (1 << (BaliLanguageParser.FLOAT - 71)) | (1 << (BaliLanguageParser.MOMENT - 71)) | (1 << (BaliLanguageParser.DURATION - 71)) | (1 << (BaliLanguageParser.RESOURCE - 71)) | (1 << (BaliLanguageParser.VERSION - 71)) | (1 << (BaliLanguageParser.BINARY - 71)) | (1 << (BaliLanguageParser.TEXT_BLOCK - 71)) | (1 << (BaliLanguageParser.TEXT - 71)) | (1 << (BaliLanguageParser.IDENTIFIER - 71)))) !== 0)) {
            this.state = 352;
            this.expression(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ThrowClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_throwClause;
    return this;
}

ThrowClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThrowClauseContext.prototype.constructor = ThrowClauseContext;

ThrowClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ThrowClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterThrowClause(this);
	}
};

ThrowClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitThrowClause(this);
	}
};

ThrowClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitThrowClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ThrowClauseContext = ThrowClauseContext;

BaliLanguageParser.prototype.throwClause = function() {

    var localctx = new ThrowClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, BaliLanguageParser.RULE_throwClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 355;
        this.match(BaliLanguageParser.T__35);
        this.state = 356;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HandleClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_handleClause;
    return this;
}

HandleClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HandleClauseContext.prototype.constructor = HandleClauseContext;

HandleClauseContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

HandleClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

HandleClauseContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

HandleClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterHandleClause(this);
	}
};

HandleClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitHandleClause(this);
	}
};

HandleClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitHandleClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.HandleClauseContext = HandleClauseContext;

BaliLanguageParser.prototype.handleClause = function() {

    var localctx = new HandleClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, BaliLanguageParser.RULE_handleClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 358;
        this.match(BaliLanguageParser.T__36);
        this.state = 359;
        this.symbol();
        this.state = 360;
        this.match(BaliLanguageParser.T__37);
        this.state = 361;
        this.expression(0);
        this.state = 362;
        this.match(BaliLanguageParser.T__28);
        this.state = 363;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RecipientContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_recipient;
    return this;
}

RecipientContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RecipientContext.prototype.constructor = RecipientContext;

RecipientContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

RecipientContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

RecipientContext.prototype.indices = function() {
    return this.getTypedRuleContext(IndicesContext,0);
};

RecipientContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterRecipient(this);
	}
};

RecipientContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitRecipient(this);
	}
};

RecipientContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitRecipient(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.RecipientContext = RecipientContext;

BaliLanguageParser.prototype.recipient = function() {

    var localctx = new RecipientContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, BaliLanguageParser.RULE_recipient);
    try {
        this.state = 369;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.SYMBOL:
            this.enterOuterAlt(localctx, 1);
            this.state = 365;
            this.symbol();
            break;
        case BaliLanguageParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 366;
            this.variable();
            this.state = 367;
            this.indices();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.IDENTIFIER = function() {
    return this.getToken(BaliLanguageParser.IDENTIFIER, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.VariableContext = VariableContext;

BaliLanguageParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, BaliLanguageParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 371;
        this.match(BaliLanguageParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IndicesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_indices;
    return this;
}

IndicesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IndicesContext.prototype.constructor = IndicesContext;

IndicesContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

IndicesContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterIndices(this);
	}
};

IndicesContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitIndices(this);
	}
};

IndicesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitIndices(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.IndicesContext = IndicesContext;

BaliLanguageParser.prototype.indices = function() {

    var localctx = new IndicesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, BaliLanguageParser.RULE_indices);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 373;
        this.match(BaliLanguageParser.T__0);
        this.state = 374;
        this.list();
        this.state = 375;
        this.match(BaliLanguageParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function DefaultExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DefaultExpressionContext.prototype = Object.create(ExpressionContext.prototype);
DefaultExpressionContext.prototype.constructor = DefaultExpressionContext;

BaliLanguageParser.DefaultExpressionContext = DefaultExpressionContext;

DefaultExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
DefaultExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterDefaultExpression(this);
	}
};

DefaultExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitDefaultExpression(this);
	}
};

DefaultExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitDefaultExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MessageExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MessageExpressionContext.prototype = Object.create(ExpressionContext.prototype);
MessageExpressionContext.prototype.constructor = MessageExpressionContext;

BaliLanguageParser.MessageExpressionContext = MessageExpressionContext;

MessageExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

MessageExpressionContext.prototype.message = function() {
    return this.getTypedRuleContext(MessageContext,0);
};

MessageExpressionContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};
MessageExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterMessageExpression(this);
	}
};

MessageExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitMessageExpression(this);
	}
};

MessageExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitMessageExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SubcomponentExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubcomponentExpressionContext.prototype = Object.create(ExpressionContext.prototype);
SubcomponentExpressionContext.prototype.constructor = SubcomponentExpressionContext;

BaliLanguageParser.SubcomponentExpressionContext = SubcomponentExpressionContext;

SubcomponentExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

SubcomponentExpressionContext.prototype.indices = function() {
    return this.getTypedRuleContext(IndicesContext,0);
};
SubcomponentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterSubcomponentExpression(this);
	}
};

SubcomponentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitSubcomponentExpression(this);
	}
};

SubcomponentExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitSubcomponentExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ComparisonExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComparisonExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ComparisonExpressionContext.prototype.constructor = ComparisonExpressionContext;

BaliLanguageParser.ComparisonExpressionContext = ComparisonExpressionContext;

ComparisonExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
ComparisonExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterComparisonExpression(this);
	}
};

ComparisonExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitComparisonExpression(this);
	}
};

ComparisonExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitComparisonExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArithmeticExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArithmeticExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ArithmeticExpressionContext.prototype.constructor = ArithmeticExpressionContext;

BaliLanguageParser.ArithmeticExpressionContext = ArithmeticExpressionContext;

ArithmeticExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
ArithmeticExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterArithmeticExpression(this);
	}
};

ArithmeticExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitArithmeticExpression(this);
	}
};

ArithmeticExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitArithmeticExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MagnitudeExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MagnitudeExpressionContext.prototype = Object.create(ExpressionContext.prototype);
MagnitudeExpressionContext.prototype.constructor = MagnitudeExpressionContext;

BaliLanguageParser.MagnitudeExpressionContext = MagnitudeExpressionContext;

MagnitudeExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
MagnitudeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterMagnitudeExpression(this);
	}
};

MagnitudeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitMagnitudeExpression(this);
	}
};

MagnitudeExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitMagnitudeExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalExpressionContext.prototype = Object.create(ExpressionContext.prototype);
LogicalExpressionContext.prototype.constructor = LogicalExpressionContext;

BaliLanguageParser.LogicalExpressionContext = LogicalExpressionContext;

LogicalExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
LogicalExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterLogicalExpression(this);
	}
};

LogicalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitLogicalExpression(this);
	}
};

LogicalExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitLogicalExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FactorialExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FactorialExpressionContext.prototype = Object.create(ExpressionContext.prototype);
FactorialExpressionContext.prototype.constructor = FactorialExpressionContext;

BaliLanguageParser.FactorialExpressionContext = FactorialExpressionContext;

FactorialExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
FactorialExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterFactorialExpression(this);
	}
};

FactorialExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitFactorialExpression(this);
	}
};

FactorialExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitFactorialExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VariableExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariableExpressionContext.prototype = Object.create(ExpressionContext.prototype);
VariableExpressionContext.prototype.constructor = VariableExpressionContext;

BaliLanguageParser.VariableExpressionContext = VariableExpressionContext;

VariableExpressionContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
VariableExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterVariableExpression(this);
	}
};

VariableExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitVariableExpression(this);
	}
};

VariableExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitVariableExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionExpressionContext.prototype = Object.create(ExpressionContext.prototype);
FunctionExpressionContext.prototype.constructor = FunctionExpressionContext;

BaliLanguageParser.FunctionExpressionContext = FunctionExpressionContext;

FunctionExpressionContext.prototype.funxtion = function() {
    return this.getTypedRuleContext(FunxtionContext,0);
};

FunctionExpressionContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};
FunctionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitFunctionExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrecedenceExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrecedenceExpressionContext.prototype = Object.create(ExpressionContext.prototype);
PrecedenceExpressionContext.prototype.constructor = PrecedenceExpressionContext;

BaliLanguageParser.PrecedenceExpressionContext = PrecedenceExpressionContext;

PrecedenceExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PrecedenceExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterPrecedenceExpression(this);
	}
};

PrecedenceExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitPrecedenceExpression(this);
	}
};

PrecedenceExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitPrecedenceExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExponentialExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExponentialExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ExponentialExpressionContext.prototype.constructor = ExponentialExpressionContext;

BaliLanguageParser.ExponentialExpressionContext = ExponentialExpressionContext;

ExponentialExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
ExponentialExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterExponentialExpression(this);
	}
};

ExponentialExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitExponentialExpression(this);
	}
};

ExponentialExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitExponentialExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ComponentExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComponentExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ComponentExpressionContext.prototype.constructor = ComponentExpressionContext;

BaliLanguageParser.ComponentExpressionContext = ComponentExpressionContext;

ComponentExpressionContext.prototype.component = function() {
    return this.getTypedRuleContext(ComponentContext,0);
};
ComponentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterComponentExpression(this);
	}
};

ComponentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitComponentExpression(this);
	}
};

ComponentExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitComponentExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InversionExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InversionExpressionContext.prototype = Object.create(ExpressionContext.prototype);
InversionExpressionContext.prototype.constructor = InversionExpressionContext;

BaliLanguageParser.InversionExpressionContext = InversionExpressionContext;

InversionExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
InversionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterInversionExpression(this);
	}
};

InversionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitInversionExpression(this);
	}
};

InversionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitInversionExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DereferenceExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DereferenceExpressionContext.prototype = Object.create(ExpressionContext.prototype);
DereferenceExpressionContext.prototype.constructor = DereferenceExpressionContext;

BaliLanguageParser.DereferenceExpressionContext = DereferenceExpressionContext;

DereferenceExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
DereferenceExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterDereferenceExpression(this);
	}
};

DereferenceExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitDereferenceExpression(this);
	}
};

DereferenceExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitDereferenceExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ComplementExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComplementExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ComplementExpressionContext.prototype.constructor = ComplementExpressionContext;

BaliLanguageParser.ComplementExpressionContext = ComplementExpressionContext;

ComplementExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ComplementExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterComplementExpression(this);
	}
};

ComplementExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitComplementExpression(this);
	}
};

ComplementExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitComplementExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 70;
    this.enterRecursionRule(localctx, 70, BaliLanguageParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 397;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ComponentExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 378;
            this.component();
            break;

        case 2:
            localctx = new VariableExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 379;
            this.variable();
            break;

        case 3:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 380;
            this.funxtion();
            this.state = 381;
            this.parameters();
            break;

        case 4:
            localctx = new PrecedenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 383;
            this.match(BaliLanguageParser.T__2);
            this.state = 384;
            this.expression(0);
            this.state = 385;
            this.match(BaliLanguageParser.T__3);
            break;

        case 5:
            localctx = new DereferenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 387;
            this.match(BaliLanguageParser.T__38);
            this.state = 388;
            this.expression(12);
            break;

        case 6:
            localctx = new InversionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 389;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (BaliLanguageParser.T__42 - 43)) | (1 << (BaliLanguageParser.T__43 - 43)) | (1 << (BaliLanguageParser.T__44 - 43)))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 390;
            this.expression(7);
            break;

        case 7:
            localctx = new MagnitudeExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 391;
            this.match(BaliLanguageParser.T__47);
            this.state = 392;
            this.expression(0);
            this.state = 393;
            this.match(BaliLanguageParser.T__47);
            break;

        case 8:
            localctx = new ComplementExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 395;
            this.match(BaliLanguageParser.T__53);
            this.state = 396;
            this.expression(3);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 425;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 423;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExponentialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 399;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 400;
                    this.match(BaliLanguageParser.T__41);
                    this.state = 401;
                    this.expression(8);
                    break;

                case 2:
                    localctx = new ArithmeticExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 402;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 403;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (BaliLanguageParser.T__42 - 43)) | (1 << (BaliLanguageParser.T__43 - 43)) | (1 << (BaliLanguageParser.T__44 - 43)) | (1 << (BaliLanguageParser.T__45 - 43)) | (1 << (BaliLanguageParser.T__46 - 43)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 404;
                    this.expression(7);
                    break;

                case 3:
                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 405;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 406;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (BaliLanguageParser.T__48 - 49)) | (1 << (BaliLanguageParser.T__49 - 49)) | (1 << (BaliLanguageParser.T__50 - 49)) | (1 << (BaliLanguageParser.T__51 - 49)) | (1 << (BaliLanguageParser.T__52 - 49)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 407;
                    this.expression(5);
                    break;

                case 4:
                    localctx = new LogicalExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 408;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 409;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (BaliLanguageParser.T__54 - 55)) | (1 << (BaliLanguageParser.T__55 - 55)) | (1 << (BaliLanguageParser.T__56 - 55)) | (1 << (BaliLanguageParser.T__57 - 55)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 410;
                    this.expression(3);
                    break;

                case 5:
                    localctx = new DefaultExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 411;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 412;
                    this.match(BaliLanguageParser.T__58);
                    this.state = 413;
                    this.expression(2);
                    break;

                case 6:
                    localctx = new MessageExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 414;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 415;
                    this.match(BaliLanguageParser.T__39);
                    this.state = 416;
                    this.message();
                    this.state = 417;
                    this.parameters();
                    break;

                case 7:
                    localctx = new SubcomponentExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 419;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 420;
                    this.indices();
                    break;

                case 8:
                    localctx = new FactorialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 421;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 422;
                    this.match(BaliLanguageParser.T__40);
                    break;

                } 
            }
            this.state = 427;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function FunxtionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_funxtion;
    return this;
}

FunxtionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunxtionContext.prototype.constructor = FunxtionContext;

FunxtionContext.prototype.IDENTIFIER = function() {
    return this.getToken(BaliLanguageParser.IDENTIFIER, 0);
};

FunxtionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterFunxtion(this);
	}
};

FunxtionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitFunxtion(this);
	}
};

FunxtionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitFunxtion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.FunxtionContext = FunxtionContext;

BaliLanguageParser.prototype.funxtion = function() {

    var localctx = new FunxtionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, BaliLanguageParser.RULE_funxtion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 428;
        this.match(BaliLanguageParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_message;
    return this;
}

MessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageContext.prototype.constructor = MessageContext;

MessageContext.prototype.IDENTIFIER = function() {
    return this.getToken(BaliLanguageParser.IDENTIFIER, 0);
};

MessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterMessage(this);
	}
};

MessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitMessage(this);
	}
};

MessageContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitMessage(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.MessageContext = MessageContext;

BaliLanguageParser.prototype.message = function() {

    var localctx = new MessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, BaliLanguageParser.RULE_message);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 430;
        this.match(BaliLanguageParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_element;
    return this;
}

ElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementContext.prototype.constructor = ElementContext;

ElementContext.prototype.binary = function() {
    return this.getTypedRuleContext(BinaryContext,0);
};

ElementContext.prototype.duration = function() {
    return this.getTypedRuleContext(DurationContext,0);
};

ElementContext.prototype.moment = function() {
    return this.getTypedRuleContext(MomentContext,0);
};

ElementContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ElementContext.prototype.percent = function() {
    return this.getTypedRuleContext(PercentContext,0);
};

ElementContext.prototype.probability = function() {
    return this.getTypedRuleContext(ProbabilityContext,0);
};

ElementContext.prototype.reference = function() {
    return this.getTypedRuleContext(ReferenceContext,0);
};

ElementContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

ElementContext.prototype.tag = function() {
    return this.getTypedRuleContext(TagContext,0);
};

ElementContext.prototype.template = function() {
    return this.getTypedRuleContext(TemplateContext,0);
};

ElementContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

ElementContext.prototype.version = function() {
    return this.getTypedRuleContext(VersionContext,0);
};

ElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterElement(this);
	}
};

ElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitElement(this);
	}
};

ElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ElementContext = ElementContext;

BaliLanguageParser.prototype.element = function() {

    var localctx = new ElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, BaliLanguageParser.RULE_element);
    try {
        this.state = 444;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 432;
            this.binary();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 433;
            this.duration();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 434;
            this.moment();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 435;
            this.number();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 436;
            this.percent();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 437;
            this.probability();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 438;
            this.reference();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 439;
            this.symbol();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 440;
            this.tag();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 441;
            this.template();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 442;
            this.text();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 443;
            this.version();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BinaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_binary;
    return this;
}

BinaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinaryContext.prototype.constructor = BinaryContext;

BinaryContext.prototype.BINARY = function() {
    return this.getToken(BaliLanguageParser.BINARY, 0);
};

BinaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterBinary(this);
	}
};

BinaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitBinary(this);
	}
};

BinaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitBinary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.BinaryContext = BinaryContext;

BaliLanguageParser.prototype.binary = function() {

    var localctx = new BinaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, BaliLanguageParser.RULE_binary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 446;
        this.match(BaliLanguageParser.BINARY);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DurationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_duration;
    return this;
}

DurationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DurationContext.prototype.constructor = DurationContext;

DurationContext.prototype.DURATION = function() {
    return this.getToken(BaliLanguageParser.DURATION, 0);
};

DurationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterDuration(this);
	}
};

DurationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitDuration(this);
	}
};

DurationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitDuration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.DurationContext = DurationContext;

BaliLanguageParser.prototype.duration = function() {

    var localctx = new DurationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, BaliLanguageParser.RULE_duration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 448;
        this.match(BaliLanguageParser.DURATION);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ImaginaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_imaginary;
    this.sign = null; // Token
    return this;
}

ImaginaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImaginaryContext.prototype.constructor = ImaginaryContext;

ImaginaryContext.prototype.real = function() {
    return this.getTypedRuleContext(RealContext,0);
};

ImaginaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterImaginary(this);
	}
};

ImaginaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitImaginary(this);
	}
};

ImaginaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitImaginary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ImaginaryContext = ImaginaryContext;

BaliLanguageParser.prototype.imaginary = function() {

    var localctx = new ImaginaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, BaliLanguageParser.RULE_imaginary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 452;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        if(la_===1) {
            this.state = 450;
            this.real();

        } else if(la_===2) {
            this.state = 451;
            localctx.sign = this.match(BaliLanguageParser.T__42);

        }
        this.state = 454;
        this.match(BaliLanguageParser.T__59);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MomentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_moment;
    return this;
}

MomentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MomentContext.prototype.constructor = MomentContext;

MomentContext.prototype.MOMENT = function() {
    return this.getToken(BaliLanguageParser.MOMENT, 0);
};

MomentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterMoment(this);
	}
};

MomentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitMoment(this);
	}
};

MomentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitMoment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.MomentContext = MomentContext;

BaliLanguageParser.prototype.moment = function() {

    var localctx = new MomentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, BaliLanguageParser.RULE_moment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 456;
        this.match(BaliLanguageParser.MOMENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;


 
NumberContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function RealNumberContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RealNumberContext.prototype = Object.create(NumberContext.prototype);
RealNumberContext.prototype.constructor = RealNumberContext;

BaliLanguageParser.RealNumberContext = RealNumberContext;

RealNumberContext.prototype.real = function() {
    return this.getTypedRuleContext(RealContext,0);
};
RealNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterRealNumber(this);
	}
};

RealNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitRealNumber(this);
	}
};

RealNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitRealNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InfiniteNumberContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InfiniteNumberContext.prototype = Object.create(NumberContext.prototype);
InfiniteNumberContext.prototype.constructor = InfiniteNumberContext;

BaliLanguageParser.InfiniteNumberContext = InfiniteNumberContext;

InfiniteNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterInfiniteNumber(this);
	}
};

InfiniteNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitInfiniteNumber(this);
	}
};

InfiniteNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitInfiniteNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UndefinedNumberContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UndefinedNumberContext.prototype = Object.create(NumberContext.prototype);
UndefinedNumberContext.prototype.constructor = UndefinedNumberContext;

BaliLanguageParser.UndefinedNumberContext = UndefinedNumberContext;

UndefinedNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterUndefinedNumber(this);
	}
};

UndefinedNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitUndefinedNumber(this);
	}
};

UndefinedNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitUndefinedNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ComplexNumberContext(parser, ctx) {
	NumberContext.call(this, parser);
    this.del = null; // Token;
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComplexNumberContext.prototype = Object.create(NumberContext.prototype);
ComplexNumberContext.prototype.constructor = ComplexNumberContext;

BaliLanguageParser.ComplexNumberContext = ComplexNumberContext;

ComplexNumberContext.prototype.real = function() {
    return this.getTypedRuleContext(RealContext,0);
};

ComplexNumberContext.prototype.imaginary = function() {
    return this.getTypedRuleContext(ImaginaryContext,0);
};
ComplexNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterComplexNumber(this);
	}
};

ComplexNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitComplexNumber(this);
	}
};

ComplexNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitComplexNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ImaginaryNumberContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ImaginaryNumberContext.prototype = Object.create(NumberContext.prototype);
ImaginaryNumberContext.prototype.constructor = ImaginaryNumberContext;

BaliLanguageParser.ImaginaryNumberContext = ImaginaryNumberContext;

ImaginaryNumberContext.prototype.imaginary = function() {
    return this.getTypedRuleContext(ImaginaryContext,0);
};
ImaginaryNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterImaginaryNumber(this);
	}
};

ImaginaryNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitImaginaryNumber(this);
	}
};

ImaginaryNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitImaginaryNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.NumberContext = NumberContext;

BaliLanguageParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, BaliLanguageParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.state = 468;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UndefinedNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 458;
            this.match(BaliLanguageParser.T__60);
            break;

        case 2:
            localctx = new InfiniteNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 459;
            this.match(BaliLanguageParser.T__61);
            break;

        case 3:
            localctx = new RealNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 460;
            this.real();
            break;

        case 4:
            localctx = new ImaginaryNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 461;
            this.imaginary();
            break;

        case 5:
            localctx = new ComplexNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 462;
            this.match(BaliLanguageParser.T__2);
            this.state = 463;
            this.real();
            this.state = 464;
            localctx.del = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===BaliLanguageParser.T__5 || _la===BaliLanguageParser.T__62)) {
                localctx.del = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 465;
            this.imaginary();
            this.state = 466;
            this.match(BaliLanguageParser.T__3);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PercentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_percent;
    return this;
}

PercentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PercentContext.prototype.constructor = PercentContext;

PercentContext.prototype.real = function() {
    return this.getTypedRuleContext(RealContext,0);
};

PercentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterPercent(this);
	}
};

PercentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitPercent(this);
	}
};

PercentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitPercent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.PercentContext = PercentContext;

BaliLanguageParser.prototype.percent = function() {

    var localctx = new PercentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, BaliLanguageParser.RULE_percent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 470;
        this.real();
        this.state = 471;
        this.match(BaliLanguageParser.T__63);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ProbabilityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_probability;
    return this;
}

ProbabilityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProbabilityContext.prototype.constructor = ProbabilityContext;


 
ProbabilityContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function FalseProbabilityContext(parser, ctx) {
	ProbabilityContext.call(this, parser);
    ProbabilityContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FalseProbabilityContext.prototype = Object.create(ProbabilityContext.prototype);
FalseProbabilityContext.prototype.constructor = FalseProbabilityContext;

BaliLanguageParser.FalseProbabilityContext = FalseProbabilityContext;

FalseProbabilityContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterFalseProbability(this);
	}
};

FalseProbabilityContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitFalseProbability(this);
	}
};

FalseProbabilityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitFalseProbability(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TrueProbabilityContext(parser, ctx) {
	ProbabilityContext.call(this, parser);
    ProbabilityContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TrueProbabilityContext.prototype = Object.create(ProbabilityContext.prototype);
TrueProbabilityContext.prototype.constructor = TrueProbabilityContext;

BaliLanguageParser.TrueProbabilityContext = TrueProbabilityContext;

TrueProbabilityContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterTrueProbability(this);
	}
};

TrueProbabilityContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitTrueProbability(this);
	}
};

TrueProbabilityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitTrueProbability(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FractionalProbabilityContext(parser, ctx) {
	ProbabilityContext.call(this, parser);
    ProbabilityContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FractionalProbabilityContext.prototype = Object.create(ProbabilityContext.prototype);
FractionalProbabilityContext.prototype.constructor = FractionalProbabilityContext;

BaliLanguageParser.FractionalProbabilityContext = FractionalProbabilityContext;

FractionalProbabilityContext.prototype.FRACTION = function() {
    return this.getToken(BaliLanguageParser.FRACTION, 0);
};
FractionalProbabilityContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterFractionalProbability(this);
	}
};

FractionalProbabilityContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitFractionalProbability(this);
	}
};

FractionalProbabilityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitFractionalProbability(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.ProbabilityContext = ProbabilityContext;

BaliLanguageParser.prototype.probability = function() {

    var localctx = new ProbabilityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, BaliLanguageParser.RULE_probability);
    try {
        this.state = 476;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__64:
            localctx = new TrueProbabilityContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 473;
            this.match(BaliLanguageParser.T__64);
            break;
        case BaliLanguageParser.T__65:
            localctx = new FalseProbabilityContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 474;
            this.match(BaliLanguageParser.T__65);
            break;
        case BaliLanguageParser.FRACTION:
            localctx = new FractionalProbabilityContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 475;
            this.match(BaliLanguageParser.FRACTION);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RealContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_real;
    return this;
}

RealContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RealContext.prototype.constructor = RealContext;


 
RealContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function VariableRealContext(parser, ctx) {
	RealContext.call(this, parser);
    RealContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariableRealContext.prototype = Object.create(RealContext.prototype);
VariableRealContext.prototype.constructor = VariableRealContext;

BaliLanguageParser.VariableRealContext = VariableRealContext;

VariableRealContext.prototype.FLOAT = function() {
    return this.getToken(BaliLanguageParser.FLOAT, 0);
};
VariableRealContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterVariableReal(this);
	}
};

VariableRealContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitVariableReal(this);
	}
};

VariableRealContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitVariableReal(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConstantRealContext(parser, ctx) {
	RealContext.call(this, parser);
    this.sign = null; // Token;
    RealContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstantRealContext.prototype = Object.create(RealContext.prototype);
ConstantRealContext.prototype.constructor = ConstantRealContext;

BaliLanguageParser.ConstantRealContext = ConstantRealContext;

ConstantRealContext.prototype.CONSTANT = function() {
    return this.getToken(BaliLanguageParser.CONSTANT, 0);
};
ConstantRealContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterConstantReal(this);
	}
};

ConstantRealContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitConstantReal(this);
	}
};

ConstantRealContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitConstantReal(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.RealContext = RealContext;

BaliLanguageParser.prototype.real = function() {

    var localctx = new RealContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, BaliLanguageParser.RULE_real);
    var _la = 0; // Token type
    try {
        this.state = 483;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__42:
        case BaliLanguageParser.CONSTANT:
            localctx = new ConstantRealContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 479;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===BaliLanguageParser.T__42) {
                this.state = 478;
                localctx.sign = this.match(BaliLanguageParser.T__42);
            }

            this.state = 481;
            this.match(BaliLanguageParser.CONSTANT);
            break;
        case BaliLanguageParser.FLOAT:
            localctx = new VariableRealContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 482;
            this.match(BaliLanguageParser.FLOAT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_reference;
    return this;
}

ReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReferenceContext.prototype.constructor = ReferenceContext;

ReferenceContext.prototype.RESOURCE = function() {
    return this.getToken(BaliLanguageParser.RESOURCE, 0);
};

ReferenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterReference(this);
	}
};

ReferenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitReference(this);
	}
};

ReferenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitReference(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ReferenceContext = ReferenceContext;

BaliLanguageParser.prototype.reference = function() {

    var localctx = new ReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, BaliLanguageParser.RULE_reference);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 485;
        this.match(BaliLanguageParser.RESOURCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SymbolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_symbol;
    return this;
}

SymbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolContext.prototype.constructor = SymbolContext;

SymbolContext.prototype.SYMBOL = function() {
    return this.getToken(BaliLanguageParser.SYMBOL, 0);
};

SymbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterSymbol(this);
	}
};

SymbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitSymbol(this);
	}
};

SymbolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitSymbol(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.SymbolContext = SymbolContext;

BaliLanguageParser.prototype.symbol = function() {

    var localctx = new SymbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, BaliLanguageParser.RULE_symbol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 487;
        this.match(BaliLanguageParser.SYMBOL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_tag;
    return this;
}

TagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagContext.prototype.constructor = TagContext;

TagContext.prototype.TAG = function() {
    return this.getToken(BaliLanguageParser.TAG, 0);
};

TagContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterTag(this);
	}
};

TagContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitTag(this);
	}
};

TagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitTag(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.TagContext = TagContext;

BaliLanguageParser.prototype.tag = function() {

    var localctx = new TagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, BaliLanguageParser.RULE_tag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 489;
        this.match(BaliLanguageParser.TAG);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TemplateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_template;
    return this;
}

TemplateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TemplateContext.prototype.constructor = TemplateContext;


 
TemplateContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NoneTemplateContext(parser, ctx) {
	TemplateContext.call(this, parser);
    TemplateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NoneTemplateContext.prototype = Object.create(TemplateContext.prototype);
NoneTemplateContext.prototype.constructor = NoneTemplateContext;

BaliLanguageParser.NoneTemplateContext = NoneTemplateContext;

NoneTemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterNoneTemplate(this);
	}
};

NoneTemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitNoneTemplate(this);
	}
};

NoneTemplateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitNoneTemplate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AnyTemplateContext(parser, ctx) {
	TemplateContext.call(this, parser);
    TemplateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AnyTemplateContext.prototype = Object.create(TemplateContext.prototype);
AnyTemplateContext.prototype.constructor = AnyTemplateContext;

BaliLanguageParser.AnyTemplateContext = AnyTemplateContext;

AnyTemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterAnyTemplate(this);
	}
};

AnyTemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitAnyTemplate(this);
	}
};

AnyTemplateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitAnyTemplate(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.TemplateContext = TemplateContext;

BaliLanguageParser.prototype.template = function() {

    var localctx = new TemplateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, BaliLanguageParser.RULE_template);
    try {
        this.state = 493;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__66:
            localctx = new NoneTemplateContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 491;
            this.match(BaliLanguageParser.T__66);
            break;
        case BaliLanguageParser.T__67:
            localctx = new AnyTemplateContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 492;
            this.match(BaliLanguageParser.T__67);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_text;
    return this;
}

TextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextContext.prototype.constructor = TextContext;


 
TextContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function InlineTextContext(parser, ctx) {
	TextContext.call(this, parser);
    TextContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InlineTextContext.prototype = Object.create(TextContext.prototype);
InlineTextContext.prototype.constructor = InlineTextContext;

BaliLanguageParser.InlineTextContext = InlineTextContext;

InlineTextContext.prototype.TEXT = function() {
    return this.getToken(BaliLanguageParser.TEXT, 0);
};
InlineTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterInlineText(this);
	}
};

InlineTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitInlineText(this);
	}
};

InlineTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitInlineText(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NewlineTextContext(parser, ctx) {
	TextContext.call(this, parser);
    TextContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewlineTextContext.prototype = Object.create(TextContext.prototype);
NewlineTextContext.prototype.constructor = NewlineTextContext;

BaliLanguageParser.NewlineTextContext = NewlineTextContext;

NewlineTextContext.prototype.TEXT_BLOCK = function() {
    return this.getToken(BaliLanguageParser.TEXT_BLOCK, 0);
};
NewlineTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterNewlineText(this);
	}
};

NewlineTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitNewlineText(this);
	}
};

NewlineTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitNewlineText(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.TextContext = TextContext;

BaliLanguageParser.prototype.text = function() {

    var localctx = new TextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, BaliLanguageParser.RULE_text);
    try {
        this.state = 497;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.TEXT:
            localctx = new InlineTextContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 495;
            this.match(BaliLanguageParser.TEXT);
            break;
        case BaliLanguageParser.TEXT_BLOCK:
            localctx = new NewlineTextContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 496;
            this.match(BaliLanguageParser.TEXT_BLOCK);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VersionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_version;
    return this;
}

VersionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionContext.prototype.constructor = VersionContext;

VersionContext.prototype.VERSION = function() {
    return this.getToken(BaliLanguageParser.VERSION, 0);
};

VersionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterVersion(this);
	}
};

VersionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitVersion(this);
	}
};

VersionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitVersion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.VersionContext = VersionContext;

BaliLanguageParser.prototype.version = function() {

    var localctx = new VersionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, BaliLanguageParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 499;
        this.match(BaliLanguageParser.VERSION);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


BaliLanguageParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 35:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

BaliLanguageParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 6);
		case 2:
			return this.precpred(this._ctx, 4);
		case 3:
			return this.precpred(this._ctx, 2);
		case 4:
			return this.precpred(this._ctx, 1);
		case 5:
			return this.precpred(this._ctx, 11);
		case 6:
			return this.precpred(this._ctx, 10);
		case 7:
			return this.precpred(this._ctx, 9);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.BaliLanguageParser = BaliLanguageParser;
