// Generated from src/grammar/BaliLanguage.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BaliLanguageListener = require('./BaliLanguageListener').BaliLanguageListener;
var BaliLanguageVisitor = require('./BaliLanguageVisitor').BaliLanguageVisitor;

var grammarFileName = "BaliLanguage.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003_\u01fe\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
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
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0003\u0002\u0003\u0002\u0005\u0002",
    "}\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0082\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0093\n\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\t\u009c\n\t",
    "\f\t\u000e\t\u009f\u000b\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00a5",
    "\n\t\f\t\u000e\t\u00a8\u000b\t\u0003\t\u0005\t\u00ab\n\t\u0003\n\u0003",
    "\n\u0003\n\u0007\n\u00b0\n\n\f\n\u000e\n\u00b3\u000b\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0007\n\u00b9\n\n\f\n\u000e\n\u00bc\u000b\n\u0003",
    "\n\u0005\n\u00bf\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0005\f\u00c7\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00d0\n\u000e\f\u000e\u000e",
    "\u000e\u00d3\u000b\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0007\u000e\u00d9\n\u000e\f\u000e\u000e\u000e\u00dc\u000b\u000e\u0003",
    "\u000e\u0005\u000e\u00df\n\u000e\u0003\u000f\u0003\u000f\u0007\u000f",
    "\u00e3\n\u000f\f\u000f\u000e\u000f\u00e6\u000b\u000f\u0003\u000f\u0005",
    "\u000f\u00e9\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u0102\n\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0005\u0013\u0107\n\u0013\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u010d\n\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0005",
    "\u001c\u0129\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d",
    "\u012e\n\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0005",
    "\u001f\u0134\n\u001f\u0003 \u0003 \u0003!\u0003!\u0003!\u0003\"\u0003",
    "\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0007#\u0147\n#\f#\u000e#\u014a\u000b#\u0003#\u0003#\u0005#\u014e",
    "\n#\u0003$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0006",
    "%\u0159\n%\r%\u000e%\u015a\u0003%\u0003%\u0005%\u015f\n%\u0003&\u0003",
    "&\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0005(\u0168\n(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003)\u0003)\u0003)\u0005)\u0172\n)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0005)\u0179\n)\u0003)\u0003)\u0003)\u0003)\u0003",
    "*\u0003*\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0005",
    "+\u0193\n+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003+\u0007+\u01ab\n+\f+\u000e+\u01ae\u000b+\u0003",
    ",\u0003,\u0003-\u0003-\u0003-\u0003.\u0003.\u0003.\u0003/\u0003/\u0003",
    "/\u0003/\u00030\u00030\u00030\u00030\u00030\u00030\u00030\u00030\u0003",
    "0\u00030\u00030\u00050\u01c7\n0\u00031\u00031\u00051\u01cb\n1\u0003",
    "2\u00032\u00033\u00033\u00034\u00034\u00035\u00035\u00036\u00036\u0003",
    "7\u00037\u00057\u01d9\n7\u00038\u00038\u00039\u00039\u00039\u00059\u01e0",
    "\n9\u0003:\u0003:\u0003:\u0003;\u0005;\u01e6\n;\u0003;\u0003;\u0005",
    ";\u01ea\n;\u0003<\u0003<\u0005<\u01ee\n<\u0003<\u0003<\u0003=\u0003",
    "=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0005=\u01fc",
    "\n=\u0003=\u0002\u0003T>\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bd",
    "fhjlnprtvx\u0002\t\u0003\u0002\u0011\u001c\u0003\u000235\u0003\u0002",
    "37\u0003\u00029=\u0003\u0002?B\u0003\u0002IK\u0004\u0002\n\nOO\u0211",
    "\u0002z\u0003\u0002\u0002\u0002\u0004\u0081\u0003\u0002\u0002\u0002",
    "\u0006\u0083\u0003\u0002\u0002\u0002\b\u0087\u0003\u0002\u0002\u0002",
    "\n\u008b\u0003\u0002\u0002\u0002\f\u0092\u0003\u0002\u0002\u0002\u000e",
    "\u0094\u0003\u0002\u0002\u0002\u0010\u00aa\u0003\u0002\u0002\u0002\u0012",
    "\u00be\u0003\u0002\u0002\u0002\u0014\u00c0\u0003\u0002\u0002\u0002\u0016",
    "\u00c4\u0003\u0002\u0002\u0002\u0018\u00c8\u0003\u0002\u0002\u0002\u001a",
    "\u00de\u0003\u0002\u0002\u0002\u001c\u00e0\u0003\u0002\u0002\u0002\u001e",
    "\u00ea\u0003\u0002\u0002\u0002 \u00f1\u0003\u0002\u0002\u0002\"\u0101",
    "\u0003\u0002\u0002\u0002$\u0106\u0003\u0002\u0002\u0002&\u010c\u0003",
    "\u0002\u0002\u0002(\u010e\u0003\u0002\u0002\u0002*\u0110\u0003\u0002",
    "\u0002\u0002,\u0113\u0003\u0002\u0002\u0002.\u0118\u0003\u0002\u0002",
    "\u00020\u011a\u0003\u0002\u0002\u00022\u011d\u0003\u0002\u0002\u0002",
    "4\u0123\u0003\u0002\u0002\u00026\u0125\u0003\u0002\u0002\u00028\u012a",
    "\u0003\u0002\u0002\u0002:\u012f\u0003\u0002\u0002\u0002<\u0131\u0003",
    "\u0002\u0002\u0002>\u0135\u0003\u0002\u0002\u0002@\u0137\u0003\u0002",
    "\u0002\u0002B\u013a\u0003\u0002\u0002\u0002D\u013c\u0003\u0002\u0002",
    "\u0002F\u014f\u0003\u0002\u0002\u0002H\u0151\u0003\u0002\u0002\u0002",
    "J\u0160\u0003\u0002\u0002\u0002L\u0162\u0003\u0002\u0002\u0002N\u0167",
    "\u0003\u0002\u0002\u0002P\u0171\u0003\u0002\u0002\u0002R\u017e\u0003",
    "\u0002\u0002\u0002T\u0192\u0003\u0002\u0002\u0002V\u01af\u0003\u0002",
    "\u0002\u0002X\u01b1\u0003\u0002\u0002\u0002Z\u01b4\u0003\u0002\u0002",
    "\u0002\\\u01b7\u0003\u0002\u0002\u0002^\u01c6\u0003\u0002\u0002\u0002",
    "`\u01ca\u0003\u0002\u0002\u0002b\u01cc\u0003\u0002\u0002\u0002d\u01ce",
    "\u0003\u0002\u0002\u0002f\u01d0\u0003\u0002\u0002\u0002h\u01d2\u0003",
    "\u0002\u0002\u0002j\u01d4\u0003\u0002\u0002\u0002l\u01d8\u0003\u0002",
    "\u0002\u0002n\u01da\u0003\u0002\u0002\u0002p\u01df\u0003\u0002\u0002",
    "\u0002r\u01e1\u0003\u0002\u0002\u0002t\u01e9\u0003\u0002\u0002\u0002",
    "v\u01ed\u0003\u0002\u0002\u0002x\u01fb\u0003\u0002\u0002\u0002z|\u0005",
    "\u0004\u0003\u0002{}\u0005\u0006\u0004\u0002|{\u0003\u0002\u0002\u0002",
    "|}\u0003\u0002\u0002\u0002}\u0003\u0003\u0002\u0002\u0002~\u0082\u0005",
    "^0\u0002\u007f\u0082\u0005\b\u0005\u0002\u0080\u0082\u0005\n\u0006\u0002",
    "\u0081~\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002",
    "\u0081\u0080\u0003\u0002\u0002\u0002\u0082\u0005\u0003\u0002\u0002\u0002",
    "\u0083\u0084\u0007\u0003\u0002\u0002\u0084\u0085\u0005\f\u0007\u0002",
    "\u0085\u0086\u0007\u0004\u0002\u0002\u0086\u0007\u0003\u0002\u0002\u0002",
    "\u0087\u0088\u0007\u0005\u0002\u0002\u0088\u0089\u0005\f\u0007\u0002",
    "\u0089\u008a\u0007\u0006\u0002\u0002\u008a\t\u0003\u0002\u0002\u0002",
    "\u008b\u008c\u0007\u0007\u0002\u0002\u008c\u008d\u0005\u001a\u000e\u0002",
    "\u008d\u008e\u0007\b\u0002\u0002\u008e\u000b\u0003\u0002\u0002\u0002",
    "\u008f\u0093\u0005\u000e\b\u0002\u0090\u0093\u0005\u0010\t\u0002\u0091",
    "\u0093\u0005\u0012\n\u0002\u0092\u008f\u0003\u0002\u0002\u0002\u0092",
    "\u0090\u0003\u0002\u0002\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0093",
    "\r\u0003\u0002\u0002\u0002\u0094\u0095\u0005T+\u0002\u0095\u0096\u0007",
    "\t\u0002\u0002\u0096\u0097\u0005T+\u0002\u0097\u000f\u0003\u0002\u0002",
    "\u0002\u0098\u009d\u0005T+\u0002\u0099\u009a\u0007\n\u0002\u0002\u009a",
    "\u009c\u0005T+\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009c\u009f",
    "\u0003\u0002\u0002\u0002\u009d\u009b\u0003\u0002\u0002\u0002\u009d\u009e",
    "\u0003\u0002\u0002\u0002\u009e\u00ab\u0003\u0002\u0002\u0002\u009f\u009d",
    "\u0003\u0002\u0002\u0002\u00a0\u00a6\u0007^\u0002\u0002\u00a1\u00a2",
    "\u0005T+\u0002\u00a2\u00a3\u0007^\u0002\u0002\u00a3\u00a5\u0003\u0002",
    "\u0002\u0002\u00a4\u00a1\u0003\u0002\u0002\u0002\u00a5\u00a8\u0003\u0002",
    "\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002",
    "\u0002\u0002\u00a7\u00ab\u0003\u0002\u0002\u0002\u00a8\u00a6\u0003\u0002",
    "\u0002\u0002\u00a9\u00ab\u0003\u0002\u0002\u0002\u00aa\u0098\u0003\u0002",
    "\u0002\u0002\u00aa\u00a0\u0003\u0002\u0002\u0002\u00aa\u00a9\u0003\u0002",
    "\u0002\u0002\u00ab\u0011\u0003\u0002\u0002\u0002\u00ac\u00b1\u0005\u0014",
    "\u000b\u0002\u00ad\u00ae\u0007\n\u0002\u0002\u00ae\u00b0\u0005\u0014",
    "\u000b\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00b0\u00b3\u0003\u0002",
    "\u0002\u0002\u00b1\u00af\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002",
    "\u0002\u0002\u00b2\u00bf\u0003\u0002\u0002\u0002\u00b3\u00b1\u0003\u0002",
    "\u0002\u0002\u00b4\u00ba\u0007^\u0002\u0002\u00b5\u00b6\u0005\u0014",
    "\u000b\u0002\u00b6\u00b7\u0007^\u0002\u0002\u00b7\u00b9\u0003\u0002",
    "\u0002\u0002\u00b8\u00b5\u0003\u0002\u0002\u0002\u00b9\u00bc\u0003\u0002",
    "\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002",
    "\u0002\u0002\u00bb\u00bf\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002",
    "\u0002\u0002\u00bd\u00bf\u0007\u000b\u0002\u0002\u00be\u00ac\u0003\u0002",
    "\u0002\u0002\u00be\u00b4\u0003\u0002\u0002\u0002\u00be\u00bd\u0003\u0002",
    "\u0002\u0002\u00bf\u0013\u0003\u0002\u0002\u0002\u00c0\u00c1\u0005\u0016",
    "\f\u0002\u00c1\u00c2\u0007\u000b\u0002\u0002\u00c2\u00c3\u0005T+\u0002",
    "\u00c3\u0015\u0003\u0002\u0002\u0002\u00c4\u00c6\u0005^0\u0002\u00c5",
    "\u00c7\u0005\u0006\u0004\u0002\u00c6\u00c5\u0003\u0002\u0002\u0002\u00c6",
    "\u00c7\u0003\u0002\u0002\u0002\u00c7\u0017\u0003\u0002\u0002\u0002\u00c8",
    "\u00c9\u0007P\u0002\u0002\u00c9\u00ca\u0005\u001a\u000e\u0002\u00ca",
    "\u00cb\u0007\u0002\u0002\u0003\u00cb\u0019\u0003\u0002\u0002\u0002\u00cc",
    "\u00d1\u0005\u001c\u000f\u0002\u00cd\u00ce\u0007\f\u0002\u0002\u00ce",
    "\u00d0\u0005\u001c\u000f\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00d0",
    "\u00d3\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d1",
    "\u00d2\u0003\u0002\u0002\u0002\u00d2\u00df\u0003\u0002\u0002\u0002\u00d3",
    "\u00d1\u0003\u0002\u0002\u0002\u00d4\u00da\u0007^\u0002\u0002\u00d5",
    "\u00d6\u0005\u001c\u000f\u0002\u00d6\u00d7\u0007^\u0002\u0002\u00d7",
    "\u00d9\u0003\u0002\u0002\u0002\u00d8\u00d5\u0003\u0002\u0002\u0002\u00d9",
    "\u00dc\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002\u00da",
    "\u00db\u0003\u0002\u0002\u0002\u00db\u00df\u0003\u0002\u0002\u0002\u00dc",
    "\u00da\u0003\u0002\u0002\u0002\u00dd\u00df\u0003\u0002\u0002\u0002\u00de",
    "\u00cc\u0003\u0002\u0002\u0002\u00de\u00d4\u0003\u0002\u0002\u0002\u00de",
    "\u00dd\u0003\u0002\u0002\u0002\u00df\u001b\u0003\u0002\u0002\u0002\u00e0",
    "\u00e4\u0005\"\u0012\u0002\u00e1\u00e3\u0005\u001e\u0010\u0002\u00e2",
    "\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e6\u0003\u0002\u0002\u0002\u00e4",
    "\u00e2\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5",
    "\u00e8\u0003\u0002\u0002\u0002\u00e6\u00e4\u0003\u0002\u0002\u0002\u00e7",
    "\u00e9\u0005 \u0011\u0002\u00e8\u00e7\u0003\u0002\u0002\u0002\u00e8",
    "\u00e9\u0003\u0002\u0002\u0002\u00e9\u001d\u0003\u0002\u0002\u0002\u00ea",
    "\u00eb\u0007\r\u0002\u0002\u00eb\u00ec\u0005d3\u0002\u00ec\u00ed\u0007",
    "\u000e\u0002\u0002\u00ed\u00ee\u0005B\"\u0002\u00ee\u00ef\u0007\u000f",
    "\u0002\u0002\u00ef\u00f0\u0005\n\u0006\u0002\u00f0\u001f\u0003\u0002",
    "\u0002\u0002\u00f1\u00f2\u0007\u0010\u0002\u0002\u00f2\u00f3\u0007\u000f",
    "\u0002\u0002\u00f3\u00f4\u0005\n\u0006\u0002\u00f4!\u0003\u0002\u0002",
    "\u0002\u00f5\u0102\u0005$\u0013\u0002\u00f6\u0102\u0005,\u0017\u0002",
    "\u00f7\u0102\u00050\u0019\u0002\u00f8\u0102\u00052\u001a\u0002\u00f9",
    "\u0102\u00056\u001c\u0002\u00fa\u0102\u00058\u001d\u0002\u00fb\u0102",
    "\u0005<\u001f\u0002\u00fc\u0102\u0005@!\u0002\u00fd\u0102\u0005D#\u0002",
    "\u00fe\u0102\u0005H%\u0002\u00ff\u0102\u0005N(\u0002\u0100\u0102\u0005",
    "P)\u0002\u0101\u00f5\u0003\u0002\u0002\u0002\u0101\u00f6\u0003\u0002",
    "\u0002\u0002\u0101\u00f7\u0003\u0002\u0002\u0002\u0101\u00f8\u0003\u0002",
    "\u0002\u0002\u0101\u00f9\u0003\u0002\u0002\u0002\u0101\u00fa\u0003\u0002",
    "\u0002\u0002\u0101\u00fb\u0003\u0002\u0002\u0002\u0101\u00fc\u0003\u0002",
    "\u0002\u0002\u0101\u00fd\u0003\u0002\u0002\u0002\u0101\u00fe\u0003\u0002",
    "\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0101\u0100\u0003\u0002",
    "\u0002\u0002\u0102#\u0003\u0002\u0002\u0002\u0103\u0104\u0005&\u0014",
    "\u0002\u0104\u0105\t\u0002\u0002\u0002\u0105\u0107\u0003\u0002\u0002",
    "\u0002\u0106\u0103\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002",
    "\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u0109\u0005T+\u0002",
    "\u0109%\u0003\u0002\u0002\u0002\u010a\u010d\u0005(\u0015\u0002\u010b",
    "\u010d\u0005*\u0016\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010c",
    "\u010b\u0003\u0002\u0002\u0002\u010d\'\u0003\u0002\u0002\u0002\u010e",
    "\u010f\u0005d3\u0002\u010f)\u0003\u0002\u0002\u0002\u0110\u0111\u0005",
    "V,\u0002\u0111\u0112\u0005\\/\u0002\u0112+\u0003\u0002\u0002\u0002\u0113",
    "\u0114\u0007\u001d\u0002\u0002\u0114\u0115\u0005Z.\u0002\u0115\u0116",
    "\u0007\u001e\u0002\u0002\u0116\u0117\u0005.\u0018\u0002\u0117-\u0003",
    "\u0002\u0002\u0002\u0118\u0119\u0005T+\u0002\u0119/\u0003\u0002\u0002",
    "\u0002\u011a\u011b\u0007\u001f\u0002\u0002\u011b\u011c\u00054\u001b",
    "\u0002\u011c1\u0003\u0002\u0002\u0002\u011d\u011e\u0007 \u0002\u0002",
    "\u011e\u011f\u0007\u001e\u0002\u0002\u011f\u0120\u0005d3\u0002\u0120",
    "\u0121\u0007\u000e\u0002\u0002\u0121\u0122\u00054\u001b\u0002\u0122",
    "3\u0003\u0002\u0002\u0002\u0123\u0124\u0005T+\u0002\u01245\u0003\u0002",
    "\u0002\u0002\u0125\u0128\u0007!\u0002\u0002\u0126\u0127\u0007\"\u0002",
    "\u0002\u0127\u0129\u0005:\u001e\u0002\u0128\u0126\u0003\u0002\u0002",
    "\u0002\u0128\u0129\u0003\u0002\u0002\u0002\u01297\u0003\u0002\u0002",
    "\u0002\u012a\u012d\u0007#\u0002\u0002\u012b\u012c\u0007$\u0002\u0002",
    "\u012c\u012e\u0005:\u001e\u0002\u012d\u012b\u0003\u0002\u0002\u0002",
    "\u012d\u012e\u0003\u0002\u0002\u0002\u012e9\u0003\u0002\u0002\u0002",
    "\u012f\u0130\u0007]\u0002\u0002\u0130;\u0003\u0002\u0002\u0002\u0131",
    "\u0133\u0007%\u0002\u0002\u0132\u0134\u0005> \u0002\u0133\u0132\u0003",
    "\u0002\u0002\u0002\u0133\u0134\u0003\u0002\u0002\u0002\u0134=\u0003",
    "\u0002\u0002\u0002\u0135\u0136\u0005T+\u0002\u0136?\u0003\u0002\u0002",
    "\u0002\u0137\u0138\u0007&\u0002\u0002\u0138\u0139\u0005B\"\u0002\u0139",
    "A\u0003\u0002\u0002\u0002\u013a\u013b\u0005T+\u0002\u013bC\u0003\u0002",
    "\u0002\u0002\u013c\u013d\u0007\'\u0002\u0002\u013d\u013e\u0005F$\u0002",
    "\u013e\u013f\u0007(\u0002\u0002\u013f\u0148\u0005\n\u0006\u0002\u0140",
    "\u0141\u0007)\u0002\u0002\u0141\u0142\u0007\'\u0002\u0002\u0142\u0143",
    "\u0005F$\u0002\u0143\u0144\u0007(\u0002\u0002\u0144\u0145\u0005\n\u0006",
    "\u0002\u0145\u0147\u0003\u0002\u0002\u0002\u0146\u0140\u0003\u0002\u0002",
    "\u0002\u0147\u014a\u0003\u0002\u0002\u0002\u0148\u0146\u0003\u0002\u0002",
    "\u0002\u0148\u0149\u0003\u0002\u0002\u0002\u0149\u014d\u0003\u0002\u0002",
    "\u0002\u014a\u0148\u0003\u0002\u0002\u0002\u014b\u014c\u0007)\u0002",
    "\u0002\u014c\u014e\u0005\n\u0006\u0002\u014d\u014b\u0003\u0002\u0002",
    "\u0002\u014d\u014e\u0003\u0002\u0002\u0002\u014eE\u0003\u0002\u0002",
    "\u0002\u014f\u0150\u0005T+\u0002\u0150G\u0003\u0002\u0002\u0002\u0151",
    "\u0152\u0007*\u0002\u0002\u0152\u0153\u0005J&\u0002\u0153\u0158\u0007",
    "$\u0002\u0002\u0154\u0155\u0005L\'\u0002\u0155\u0156\u0007+\u0002\u0002",
    "\u0156\u0157\u0005\n\u0006\u0002\u0157\u0159\u0003\u0002\u0002\u0002",
    "\u0158\u0154\u0003\u0002\u0002\u0002\u0159\u015a\u0003\u0002\u0002\u0002",
    "\u015a\u0158\u0003\u0002\u0002\u0002\u015a\u015b\u0003\u0002\u0002\u0002",
    "\u015b\u015e\u0003\u0002\u0002\u0002\u015c\u015d\u0007)\u0002\u0002",
    "\u015d\u015f\u0005\n\u0006\u0002\u015e\u015c\u0003\u0002\u0002\u0002",
    "\u015e\u015f\u0003\u0002\u0002\u0002\u015fI\u0003\u0002\u0002\u0002",
    "\u0160\u0161\u0005T+\u0002\u0161K\u0003\u0002\u0002\u0002\u0162\u0163",
    "\u0005T+\u0002\u0163M\u0003\u0002\u0002\u0002\u0164\u0165\u0005:\u001e",
    "\u0002\u0165\u0166\u0007\u000b\u0002\u0002\u0166\u0168\u0003\u0002\u0002",
    "\u0002\u0167\u0164\u0003\u0002\u0002\u0002\u0167\u0168\u0003\u0002\u0002",
    "\u0002\u0168\u0169\u0003\u0002\u0002\u0002\u0169\u016a\u0007,\u0002",
    "\u0002\u016a\u016b\u0005F$\u0002\u016b\u016c\u0007+\u0002\u0002\u016c",
    "\u016d\u0005\n\u0006\u0002\u016dO\u0003\u0002\u0002\u0002\u016e\u016f",
    "\u0005:\u001e\u0002\u016f\u0170\u0007\u000b\u0002\u0002\u0170\u0172",
    "\u0003\u0002\u0002\u0002\u0171\u016e\u0003\u0002\u0002\u0002\u0171\u0172",
    "\u0003\u0002\u0002\u0002\u0172\u0173\u0003\u0002\u0002\u0002\u0173\u0178",
    "\u0007\u000f\u0002\u0002\u0174\u0175\u0007-\u0002\u0002\u0175\u0176",
    "\u0005d3\u0002\u0176\u0177\u0007.\u0002\u0002\u0177\u0179\u0003\u0002",
    "\u0002\u0002\u0178\u0174\u0003\u0002\u0002\u0002\u0178\u0179\u0003\u0002",
    "\u0002\u0002\u0179\u017a\u0003\u0002\u0002\u0002\u017a\u017b\u0005R",
    "*\u0002\u017b\u017c\u0007+\u0002\u0002\u017c\u017d\u0005\n\u0006\u0002",
    "\u017dQ\u0003\u0002\u0002\u0002\u017e\u017f\u0005T+\u0002\u017fS\u0003",
    "\u0002\u0002\u0002\u0180\u0181\b+\u0001\u0002\u0181\u0182\u0007/\u0002",
    "\u0002\u0182\u0193\u0005T+\u000e\u0183\u0184\t\u0003\u0002\u0002\u0184",
    "\u0193\u0005T+\t\u0185\u0186\u0007>\u0002\u0002\u0186\u0193\u0005T+",
    "\u0005\u0187\u0193\u0005\u0002\u0002\u0002\u0188\u0193\u0005V,\u0002",
    "\u0189\u0193\u0005X-\u0002\u018a\u018b\u0007\u0003\u0002\u0002\u018b",
    "\u018c\u0005T+\u0002\u018c\u018d\u0007\u0004\u0002\u0002\u018d\u0193",
    "\u0003\u0002\u0002\u0002\u018e\u018f\u00078\u0002\u0002\u018f\u0190",
    "\u0005T+\u0002\u0190\u0191\u00078\u0002\u0002\u0191\u0193\u0003\u0002",
    "\u0002\u0002\u0192\u0180\u0003\u0002\u0002\u0002\u0192\u0183\u0003\u0002",
    "\u0002\u0002\u0192\u0185\u0003\u0002\u0002\u0002\u0192\u0187\u0003\u0002",
    "\u0002\u0002\u0192\u0188\u0003\u0002\u0002\u0002\u0192\u0189\u0003\u0002",
    "\u0002\u0002\u0192\u018a\u0003\u0002\u0002\u0002\u0192\u018e\u0003\u0002",
    "\u0002\u0002\u0193\u01ac\u0003\u0002\u0002\u0002\u0194\u0195\f\n\u0002",
    "\u0002\u0195\u0196\u00072\u0002\u0002\u0196\u01ab\u0005T+\n\u0197\u0198",
    "\f\b\u0002\u0002\u0198\u0199\t\u0004\u0002\u0002\u0199\u01ab\u0005T",
    "+\t\u019a\u019b\f\u0006\u0002\u0002\u019b\u019c\t\u0005\u0002\u0002",
    "\u019c\u01ab\u0005T+\u0007\u019d\u019e\f\u0004\u0002\u0002\u019e\u019f",
    "\t\u0006\u0002\u0002\u019f\u01ab\u0005T+\u0005\u01a0\u01a1\f\u0003\u0002",
    "\u0002\u01a1\u01a2\u0007C\u0002\u0002\u01a2\u01ab\u0005T+\u0004\u01a3",
    "\u01a4\f\r\u0002\u0002\u01a4\u01ab\u0005\\/\u0002\u01a5\u01a6\f\f\u0002",
    "\u0002\u01a6\u01a7\u00070\u0002\u0002\u01a7\u01ab\u0005Z.\u0002\u01a8",
    "\u01a9\f\u000b\u0002\u0002\u01a9\u01ab\u00071\u0002\u0002\u01aa\u0194",
    "\u0003\u0002\u0002\u0002\u01aa\u0197\u0003\u0002\u0002\u0002\u01aa\u019a",
    "\u0003\u0002\u0002\u0002\u01aa\u019d\u0003\u0002\u0002\u0002\u01aa\u01a0",
    "\u0003\u0002\u0002\u0002\u01aa\u01a3\u0003\u0002\u0002\u0002\u01aa\u01a5",
    "\u0003\u0002\u0002\u0002\u01aa\u01a8\u0003\u0002\u0002\u0002\u01ab\u01ae",
    "\u0003\u0002\u0002\u0002\u01ac\u01aa\u0003\u0002\u0002\u0002\u01ac\u01ad",
    "\u0003\u0002\u0002\u0002\u01adU\u0003\u0002\u0002\u0002\u01ae\u01ac",
    "\u0003\u0002\u0002\u0002\u01af\u01b0\u0007]\u0002\u0002\u01b0W\u0003",
    "\u0002\u0002\u0002\u01b1\u01b2\u0007]\u0002\u0002\u01b2\u01b3\u0005",
    "\u0006\u0004\u0002\u01b3Y\u0003\u0002\u0002\u0002\u01b4\u01b5\u0007",
    "]\u0002\u0002\u01b5\u01b6\u0005\u0006\u0004\u0002\u01b6[\u0003\u0002",
    "\u0002\u0002\u01b7\u01b8\u0007\u0005\u0002\u0002\u01b8\u01b9\u0005\u0010",
    "\t\u0002\u01b9\u01ba\u0007\u0006\u0002\u0002\u01ba]\u0003\u0002\u0002",
    "\u0002\u01bb\u01c7\u0005`1\u0002\u01bc\u01c7\u0005b2\u0002\u01bd\u01c7",
    "\u0005d3\u0002\u01be\u01c7\u0005f4\u0002\u01bf\u01c7\u0005h5\u0002\u01c0",
    "\u01c7\u0005j6\u0002\u01c1\u01c7\u0005l7\u0002\u01c2\u01c7\u0005n8\u0002",
    "\u01c3\u01c7\u0005p9\u0002\u01c4\u01c7\u0005r:\u0002\u01c5\u01c7\u0005",
    "x=\u0002\u01c6\u01bb\u0003\u0002\u0002\u0002\u01c6\u01bc\u0003\u0002",
    "\u0002\u0002\u01c6\u01bd\u0003\u0002\u0002\u0002\u01c6\u01be\u0003\u0002",
    "\u0002\u0002\u01c6\u01bf\u0003\u0002\u0002\u0002\u01c6\u01c0\u0003\u0002",
    "\u0002\u0002\u01c6\u01c1\u0003\u0002\u0002\u0002\u01c6\u01c2\u0003\u0002",
    "\u0002\u0002\u01c6\u01c3\u0003\u0002\u0002\u0002\u01c6\u01c4\u0003\u0002",
    "\u0002\u0002\u01c6\u01c5\u0003\u0002\u0002\u0002\u01c7_\u0003\u0002",
    "\u0002\u0002\u01c8\u01cb\u0007D\u0002\u0002\u01c9\u01cb\u0007E\u0002",
    "\u0002\u01ca\u01c8\u0003\u0002\u0002\u0002\u01ca\u01c9\u0003\u0002\u0002",
    "\u0002\u01cba\u0003\u0002\u0002\u0002\u01cc\u01cd\u0007S\u0002\u0002",
    "\u01cdc\u0003\u0002\u0002\u0002\u01ce\u01cf\u0007T\u0002\u0002\u01cf",
    "e\u0003\u0002\u0002\u0002\u01d0\u01d1\u0007W\u0002\u0002\u01d1g\u0003",
    "\u0002\u0002\u0002\u01d2\u01d3\u0007X\u0002\u0002\u01d3i\u0003\u0002",
    "\u0002\u0002\u01d4\u01d5\u0007Y\u0002\u0002\u01d5k\u0003\u0002\u0002",
    "\u0002\u01d6\u01d9\u0007\\\u0002\u0002\u01d7\u01d9\u0007[\u0002\u0002",
    "\u01d8\u01d6\u0003\u0002\u0002\u0002\u01d8\u01d7\u0003\u0002\u0002\u0002",
    "\u01d9m\u0003\u0002\u0002\u0002\u01da\u01db\u0007Z\u0002\u0002\u01db",
    "o\u0003\u0002\u0002\u0002\u01dc\u01e0\u0007F\u0002\u0002\u01dd\u01e0",
    "\u0007G\u0002\u0002\u01de\u01e0\u0007U\u0002\u0002\u01df\u01dc\u0003",
    "\u0002\u0002\u0002\u01df\u01dd\u0003\u0002\u0002\u0002\u01df\u01de\u0003",
    "\u0002\u0002\u0002\u01e0q\u0003\u0002\u0002\u0002\u01e1\u01e2\u0005",
    "t;\u0002\u01e2\u01e3\u0007H\u0002\u0002\u01e3s\u0003\u0002\u0002\u0002",
    "\u01e4\u01e6\u00073\u0002\u0002\u01e5\u01e4\u0003\u0002\u0002\u0002",
    "\u01e5\u01e6\u0003\u0002\u0002\u0002\u01e6\u01e7\u0003\u0002\u0002\u0002",
    "\u01e7\u01ea\t\u0007\u0002\u0002\u01e8\u01ea\u0007V\u0002\u0002\u01e9",
    "\u01e5\u0003\u0002\u0002\u0002\u01e9\u01e8\u0003\u0002\u0002\u0002\u01ea",
    "u\u0003\u0002\u0002\u0002\u01eb\u01ee\u0005t;\u0002\u01ec\u01ee\u0007",
    "3\u0002\u0002\u01ed\u01eb\u0003\u0002\u0002\u0002\u01ed\u01ec\u0003",
    "\u0002\u0002\u0002\u01ed\u01ee\u0003\u0002\u0002\u0002\u01ee\u01ef\u0003",
    "\u0002\u0002\u0002\u01ef\u01f0\u0007L\u0002\u0002\u01f0w\u0003\u0002",
    "\u0002\u0002\u01f1\u01fc\u0007M\u0002\u0002\u01f2\u01fc\u0007N\u0002",
    "\u0002\u01f3\u01fc\u0005t;\u0002\u01f4\u01fc\u0005v<\u0002\u01f5\u01f6",
    "\u0007\u0003\u0002\u0002\u01f6\u01f7\u0005t;\u0002\u01f7\u01f8\t\b\u0002",
    "\u0002\u01f8\u01f9\u0005v<\u0002\u01f9\u01fa\u0007\u0004\u0002\u0002",
    "\u01fa\u01fc\u0003\u0002\u0002\u0002\u01fb\u01f1\u0003\u0002\u0002\u0002",
    "\u01fb\u01f2\u0003\u0002\u0002\u0002\u01fb\u01f3\u0003\u0002\u0002\u0002",
    "\u01fb\u01f4\u0003\u0002\u0002\u0002\u01fb\u01f5\u0003\u0002\u0002\u0002",
    "\u01fcy\u0003\u0002\u0002\u0002)|\u0081\u0092\u009d\u00a6\u00aa\u00b1",
    "\u00ba\u00be\u00c6\u00d1\u00da\u00de\u00e4\u00e8\u0101\u0106\u010c\u0128",
    "\u012d\u0133\u0148\u014d\u015a\u015e\u0167\u0171\u0178\u0192\u01aa\u01ac",
    "\u01c6\u01ca\u01d8\u01df\u01e5\u01e9\u01ed\u01fb"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'('", "')'", "'['", "']'", "'{'", "'}'", "'..'", 
                     "','", "':'", "';'", "'catch'", "'matching'", "'with'", 
                     "'finish'", "':='", "'?='", "'+='", "'-='", "'*='", 
                     "'/='", "'//='", "'^='", "'a='", "'s='", "'o='", "'x='", 
                     "'queue'", "'for'", "'publish'", "'wait'", "'continue'", 
                     "'to'", "'break'", "'from'", "'return'", "'throw'", 
                     "'if'", "'then'", "'else'", "'select'", "'do'", "'while'", 
                     "'each'", "'in'", "'@'", "'.'", "'!'", "'^'", "'-'", 
                     "'/'", "'*'", "'//'", "'+'", "'|'", "'<'", "'='", "'>'", 
                     "'is'", "'matches'", "'not'", "'and'", "'sans'", "'xor'", 
                     "'or'", "'?'", "'none'", "'any'", "'true'", "'false'", 
                     "'%'", "'e'", "'pi'", "'phi'", "'i'", "'undefined'", 
                     "'infinity'", "'e^'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', "SHELL", "COMMENT", "COMMENT_BLOCK", "TAG", 
                      "SYMBOL", "FRACTION", "FLOAT", "MOMENT", "RESOURCE", 
                      "VERSION", "BINARY", "TEXT_BLOCK", "TEXT", "IDENTIFIER", 
                      "NEWLINE", "SPACE" ];

var ruleNames =  [ "document", "literal", "parameters", "structure", "block", 
                   "composite", "range", "array", "table", "association", 
                   "key", "script", "statements", "statement", "exceptionClause", 
                   "finalClause", "mainClause", "evaluateExpression", "assignee", 
                   "target", "component", "queueMessage", "recipient", "publishEvent", 
                   "waitForEvent", "event", "continueTo", "breakFrom", "label", 
                   "returnResult", "result", "throwException", "xception", 
                   "ifThen", "condition", "selectFrom", "selection", "option", 
                   "whileLoop", "withLoop", "sequence", "expression", "variable", 
                   "funxion", "message", "indices", "element", "any", "tag", 
                   "symbol", "moment", "reference", "version", "text", "binary", 
                   "probability", "percent", "real", "imaginary", "number" ];

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
BaliLanguageParser.T__68 = 69;
BaliLanguageParser.T__69 = 70;
BaliLanguageParser.T__70 = 71;
BaliLanguageParser.T__71 = 72;
BaliLanguageParser.T__72 = 73;
BaliLanguageParser.T__73 = 74;
BaliLanguageParser.T__74 = 75;
BaliLanguageParser.T__75 = 76;
BaliLanguageParser.T__76 = 77;
BaliLanguageParser.SHELL = 78;
BaliLanguageParser.COMMENT = 79;
BaliLanguageParser.COMMENT_BLOCK = 80;
BaliLanguageParser.TAG = 81;
BaliLanguageParser.SYMBOL = 82;
BaliLanguageParser.FRACTION = 83;
BaliLanguageParser.FLOAT = 84;
BaliLanguageParser.MOMENT = 85;
BaliLanguageParser.RESOURCE = 86;
BaliLanguageParser.VERSION = 87;
BaliLanguageParser.BINARY = 88;
BaliLanguageParser.TEXT_BLOCK = 89;
BaliLanguageParser.TEXT = 90;
BaliLanguageParser.IDENTIFIER = 91;
BaliLanguageParser.NEWLINE = 92;
BaliLanguageParser.SPACE = 93;

BaliLanguageParser.RULE_document = 0;
BaliLanguageParser.RULE_literal = 1;
BaliLanguageParser.RULE_parameters = 2;
BaliLanguageParser.RULE_structure = 3;
BaliLanguageParser.RULE_block = 4;
BaliLanguageParser.RULE_composite = 5;
BaliLanguageParser.RULE_range = 6;
BaliLanguageParser.RULE_array = 7;
BaliLanguageParser.RULE_table = 8;
BaliLanguageParser.RULE_association = 9;
BaliLanguageParser.RULE_key = 10;
BaliLanguageParser.RULE_script = 11;
BaliLanguageParser.RULE_statements = 12;
BaliLanguageParser.RULE_statement = 13;
BaliLanguageParser.RULE_exceptionClause = 14;
BaliLanguageParser.RULE_finalClause = 15;
BaliLanguageParser.RULE_mainClause = 16;
BaliLanguageParser.RULE_evaluateExpression = 17;
BaliLanguageParser.RULE_assignee = 18;
BaliLanguageParser.RULE_target = 19;
BaliLanguageParser.RULE_component = 20;
BaliLanguageParser.RULE_queueMessage = 21;
BaliLanguageParser.RULE_recipient = 22;
BaliLanguageParser.RULE_publishEvent = 23;
BaliLanguageParser.RULE_waitForEvent = 24;
BaliLanguageParser.RULE_event = 25;
BaliLanguageParser.RULE_continueTo = 26;
BaliLanguageParser.RULE_breakFrom = 27;
BaliLanguageParser.RULE_label = 28;
BaliLanguageParser.RULE_returnResult = 29;
BaliLanguageParser.RULE_result = 30;
BaliLanguageParser.RULE_throwException = 31;
BaliLanguageParser.RULE_xception = 32;
BaliLanguageParser.RULE_ifThen = 33;
BaliLanguageParser.RULE_condition = 34;
BaliLanguageParser.RULE_selectFrom = 35;
BaliLanguageParser.RULE_selection = 36;
BaliLanguageParser.RULE_option = 37;
BaliLanguageParser.RULE_whileLoop = 38;
BaliLanguageParser.RULE_withLoop = 39;
BaliLanguageParser.RULE_sequence = 40;
BaliLanguageParser.RULE_expression = 41;
BaliLanguageParser.RULE_variable = 42;
BaliLanguageParser.RULE_funxion = 43;
BaliLanguageParser.RULE_message = 44;
BaliLanguageParser.RULE_indices = 45;
BaliLanguageParser.RULE_element = 46;
BaliLanguageParser.RULE_any = 47;
BaliLanguageParser.RULE_tag = 48;
BaliLanguageParser.RULE_symbol = 49;
BaliLanguageParser.RULE_moment = 50;
BaliLanguageParser.RULE_reference = 51;
BaliLanguageParser.RULE_version = 52;
BaliLanguageParser.RULE_text = 53;
BaliLanguageParser.RULE_binary = 54;
BaliLanguageParser.RULE_probability = 55;
BaliLanguageParser.RULE_percent = 56;
BaliLanguageParser.RULE_real = 57;
BaliLanguageParser.RULE_imaginary = 58;
BaliLanguageParser.RULE_number = 59;

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

DocumentContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

DocumentContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        this.literal();
        this.state = 122;
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        if(la_===1) {
            this.state = 121;
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

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.element = function() {
    return this.getTypedRuleContext(ElementContext,0);
};

LiteralContext.prototype.structure = function() {
    return this.getTypedRuleContext(StructureContext,0);
};

LiteralContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.LiteralContext = LiteralContext;

BaliLanguageParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, BaliLanguageParser.RULE_literal);
    try {
        this.state = 127;
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__0:
        case BaliLanguageParser.T__48:
        case BaliLanguageParser.T__65:
        case BaliLanguageParser.T__66:
        case BaliLanguageParser.T__67:
        case BaliLanguageParser.T__68:
        case BaliLanguageParser.T__70:
        case BaliLanguageParser.T__71:
        case BaliLanguageParser.T__72:
        case BaliLanguageParser.T__73:
        case BaliLanguageParser.T__74:
        case BaliLanguageParser.T__75:
        case BaliLanguageParser.TAG:
        case BaliLanguageParser.SYMBOL:
        case BaliLanguageParser.FRACTION:
        case BaliLanguageParser.FLOAT:
        case BaliLanguageParser.MOMENT:
        case BaliLanguageParser.RESOURCE:
        case BaliLanguageParser.VERSION:
        case BaliLanguageParser.BINARY:
        case BaliLanguageParser.TEXT_BLOCK:
        case BaliLanguageParser.TEXT:
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            this.element();
            break;
        case BaliLanguageParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 125;
            this.structure();
            break;
        case BaliLanguageParser.T__4:
            this.enterOuterAlt(localctx, 3);
            this.state = 126;
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
    this.enterRule(localctx, 4, BaliLanguageParser.RULE_parameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(BaliLanguageParser.T__0);
        this.state = 130;
        this.composite();
        this.state = 131;
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
        this.state = 133;
        this.match(BaliLanguageParser.T__2);
        this.state = 134;
        this.composite();
        this.state = 135;
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

BlockContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
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
    this.enterRule(localctx, 8, BaliLanguageParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(BaliLanguageParser.T__4);
        this.state = 138;
        this.statements();
        this.state = 139;
        this.match(BaliLanguageParser.T__5);
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

CompositeContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

CompositeContext.prototype.table = function() {
    return this.getTypedRuleContext(TableContext,0);
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
        this.state = 144;
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 141;
            this.range();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 142;
            this.array();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 143;
            this.table();
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
        this.state = 146;
        this.expression(0);
        this.state = 147;
        this.match(BaliLanguageParser.T__6);
        this.state = 148;
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

function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;


 
ArrayContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function InlineArrayContext(parser, ctx) {
	ArrayContext.call(this, parser);
    ArrayContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InlineArrayContext.prototype = Object.create(ArrayContext.prototype);
InlineArrayContext.prototype.constructor = InlineArrayContext;

BaliLanguageParser.InlineArrayContext = InlineArrayContext;

InlineArrayContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
InlineArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterInlineArray(this);
	}
};

InlineArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitInlineArray(this);
	}
};

InlineArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitInlineArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NewlineArrayContext(parser, ctx) {
	ArrayContext.call(this, parser);
    ArrayContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewlineArrayContext.prototype = Object.create(ArrayContext.prototype);
NewlineArrayContext.prototype.constructor = NewlineArrayContext;

BaliLanguageParser.NewlineArrayContext = NewlineArrayContext;

NewlineArrayContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BaliLanguageParser.NEWLINE);
    } else {
        return this.getToken(BaliLanguageParser.NEWLINE, i);
    }
};


NewlineArrayContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
NewlineArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterNewlineArray(this);
	}
};

NewlineArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitNewlineArray(this);
	}
};

NewlineArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitNewlineArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EmptyArrayContext(parser, ctx) {
	ArrayContext.call(this, parser);
    ArrayContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EmptyArrayContext.prototype = Object.create(ArrayContext.prototype);
EmptyArrayContext.prototype.constructor = EmptyArrayContext;

BaliLanguageParser.EmptyArrayContext = EmptyArrayContext;

EmptyArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterEmptyArray(this);
	}
};

EmptyArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitEmptyArray(this);
	}
};

EmptyArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitEmptyArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.ArrayContext = ArrayContext;

BaliLanguageParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, BaliLanguageParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.state = 168;
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__0:
        case BaliLanguageParser.T__2:
        case BaliLanguageParser.T__4:
        case BaliLanguageParser.T__44:
        case BaliLanguageParser.T__48:
        case BaliLanguageParser.T__49:
        case BaliLanguageParser.T__50:
        case BaliLanguageParser.T__53:
        case BaliLanguageParser.T__59:
        case BaliLanguageParser.T__65:
        case BaliLanguageParser.T__66:
        case BaliLanguageParser.T__67:
        case BaliLanguageParser.T__68:
        case BaliLanguageParser.T__70:
        case BaliLanguageParser.T__71:
        case BaliLanguageParser.T__72:
        case BaliLanguageParser.T__73:
        case BaliLanguageParser.T__74:
        case BaliLanguageParser.T__75:
        case BaliLanguageParser.TAG:
        case BaliLanguageParser.SYMBOL:
        case BaliLanguageParser.FRACTION:
        case BaliLanguageParser.FLOAT:
        case BaliLanguageParser.MOMENT:
        case BaliLanguageParser.RESOURCE:
        case BaliLanguageParser.VERSION:
        case BaliLanguageParser.BINARY:
        case BaliLanguageParser.TEXT_BLOCK:
        case BaliLanguageParser.TEXT:
        case BaliLanguageParser.IDENTIFIER:
            localctx = new InlineArrayContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 150;
            this.expression(0);
            this.state = 155;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliLanguageParser.T__7) {
                this.state = 151;
                this.match(BaliLanguageParser.T__7);
                this.state = 152;
                this.expression(0);
                this.state = 157;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliLanguageParser.NEWLINE:
            localctx = new NewlineArrayContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 158;
            this.match(BaliLanguageParser.NEWLINE);
            this.state = 164;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliLanguageParser.T__0) | (1 << BaliLanguageParser.T__2) | (1 << BaliLanguageParser.T__4))) !== 0) || ((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (BaliLanguageParser.T__44 - 45)) | (1 << (BaliLanguageParser.T__48 - 45)) | (1 << (BaliLanguageParser.T__49 - 45)) | (1 << (BaliLanguageParser.T__50 - 45)) | (1 << (BaliLanguageParser.T__53 - 45)) | (1 << (BaliLanguageParser.T__59 - 45)) | (1 << (BaliLanguageParser.T__65 - 45)) | (1 << (BaliLanguageParser.T__66 - 45)) | (1 << (BaliLanguageParser.T__67 - 45)) | (1 << (BaliLanguageParser.T__68 - 45)) | (1 << (BaliLanguageParser.T__70 - 45)) | (1 << (BaliLanguageParser.T__71 - 45)) | (1 << (BaliLanguageParser.T__72 - 45)) | (1 << (BaliLanguageParser.T__73 - 45)) | (1 << (BaliLanguageParser.T__74 - 45)) | (1 << (BaliLanguageParser.T__75 - 45)))) !== 0) || ((((_la - 81)) & ~0x1f) == 0 && ((1 << (_la - 81)) & ((1 << (BaliLanguageParser.TAG - 81)) | (1 << (BaliLanguageParser.SYMBOL - 81)) | (1 << (BaliLanguageParser.FRACTION - 81)) | (1 << (BaliLanguageParser.FLOAT - 81)) | (1 << (BaliLanguageParser.MOMENT - 81)) | (1 << (BaliLanguageParser.RESOURCE - 81)) | (1 << (BaliLanguageParser.VERSION - 81)) | (1 << (BaliLanguageParser.BINARY - 81)) | (1 << (BaliLanguageParser.TEXT_BLOCK - 81)) | (1 << (BaliLanguageParser.TEXT - 81)) | (1 << (BaliLanguageParser.IDENTIFIER - 81)))) !== 0)) {
                this.state = 159;
                this.expression(0);
                this.state = 160;
                this.match(BaliLanguageParser.NEWLINE);
                this.state = 166;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliLanguageParser.T__1:
        case BaliLanguageParser.T__3:
            localctx = new EmptyArrayContext(this, localctx);
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

function TableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_table;
    return this;
}

TableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TableContext.prototype.constructor = TableContext;


 
TableContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function EmptyTableContext(parser, ctx) {
	TableContext.call(this, parser);
    TableContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EmptyTableContext.prototype = Object.create(TableContext.prototype);
EmptyTableContext.prototype.constructor = EmptyTableContext;

BaliLanguageParser.EmptyTableContext = EmptyTableContext;

EmptyTableContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterEmptyTable(this);
	}
};

EmptyTableContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitEmptyTable(this);
	}
};

EmptyTableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitEmptyTable(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NewlineTableContext(parser, ctx) {
	TableContext.call(this, parser);
    TableContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewlineTableContext.prototype = Object.create(TableContext.prototype);
NewlineTableContext.prototype.constructor = NewlineTableContext;

BaliLanguageParser.NewlineTableContext = NewlineTableContext;

NewlineTableContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BaliLanguageParser.NEWLINE);
    } else {
        return this.getToken(BaliLanguageParser.NEWLINE, i);
    }
};


NewlineTableContext.prototype.association = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssociationContext);
    } else {
        return this.getTypedRuleContext(AssociationContext,i);
    }
};
NewlineTableContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterNewlineTable(this);
	}
};

NewlineTableContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitNewlineTable(this);
	}
};

NewlineTableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitNewlineTable(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InlineTableContext(parser, ctx) {
	TableContext.call(this, parser);
    TableContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InlineTableContext.prototype = Object.create(TableContext.prototype);
InlineTableContext.prototype.constructor = InlineTableContext;

BaliLanguageParser.InlineTableContext = InlineTableContext;

InlineTableContext.prototype.association = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssociationContext);
    } else {
        return this.getTypedRuleContext(AssociationContext,i);
    }
};
InlineTableContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterInlineTable(this);
	}
};

InlineTableContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitInlineTable(this);
	}
};

InlineTableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitInlineTable(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.TableContext = TableContext;

BaliLanguageParser.prototype.table = function() {

    var localctx = new TableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, BaliLanguageParser.RULE_table);
    var _la = 0; // Token type
    try {
        this.state = 188;
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__0:
        case BaliLanguageParser.T__48:
        case BaliLanguageParser.T__65:
        case BaliLanguageParser.T__66:
        case BaliLanguageParser.T__67:
        case BaliLanguageParser.T__68:
        case BaliLanguageParser.T__70:
        case BaliLanguageParser.T__71:
        case BaliLanguageParser.T__72:
        case BaliLanguageParser.T__73:
        case BaliLanguageParser.T__74:
        case BaliLanguageParser.T__75:
        case BaliLanguageParser.TAG:
        case BaliLanguageParser.SYMBOL:
        case BaliLanguageParser.FRACTION:
        case BaliLanguageParser.FLOAT:
        case BaliLanguageParser.MOMENT:
        case BaliLanguageParser.RESOURCE:
        case BaliLanguageParser.VERSION:
        case BaliLanguageParser.BINARY:
        case BaliLanguageParser.TEXT_BLOCK:
        case BaliLanguageParser.TEXT:
            localctx = new InlineTableContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 170;
            this.association();
            this.state = 175;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliLanguageParser.T__7) {
                this.state = 171;
                this.match(BaliLanguageParser.T__7);
                this.state = 172;
                this.association();
                this.state = 177;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliLanguageParser.NEWLINE:
            localctx = new NewlineTableContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 178;
            this.match(BaliLanguageParser.NEWLINE);
            this.state = 184;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliLanguageParser.T__0 || ((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (BaliLanguageParser.T__48 - 49)) | (1 << (BaliLanguageParser.T__65 - 49)) | (1 << (BaliLanguageParser.T__66 - 49)) | (1 << (BaliLanguageParser.T__67 - 49)) | (1 << (BaliLanguageParser.T__68 - 49)) | (1 << (BaliLanguageParser.T__70 - 49)) | (1 << (BaliLanguageParser.T__71 - 49)) | (1 << (BaliLanguageParser.T__72 - 49)) | (1 << (BaliLanguageParser.T__73 - 49)) | (1 << (BaliLanguageParser.T__74 - 49)) | (1 << (BaliLanguageParser.T__75 - 49)))) !== 0) || ((((_la - 81)) & ~0x1f) == 0 && ((1 << (_la - 81)) & ((1 << (BaliLanguageParser.TAG - 81)) | (1 << (BaliLanguageParser.SYMBOL - 81)) | (1 << (BaliLanguageParser.FRACTION - 81)) | (1 << (BaliLanguageParser.FLOAT - 81)) | (1 << (BaliLanguageParser.MOMENT - 81)) | (1 << (BaliLanguageParser.RESOURCE - 81)) | (1 << (BaliLanguageParser.VERSION - 81)) | (1 << (BaliLanguageParser.BINARY - 81)) | (1 << (BaliLanguageParser.TEXT_BLOCK - 81)) | (1 << (BaliLanguageParser.TEXT - 81)))) !== 0)) {
                this.state = 179;
                this.association();
                this.state = 180;
                this.match(BaliLanguageParser.NEWLINE);
                this.state = 186;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliLanguageParser.T__8:
            localctx = new EmptyTableContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 187;
            this.match(BaliLanguageParser.T__8);
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

AssociationContext.prototype.key = function() {
    return this.getTypedRuleContext(KeyContext,0);
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
        this.state = 190;
        this.key();
        this.state = 191;
        this.match(BaliLanguageParser.T__8);
        this.state = 192;
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

function KeyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_key;
    return this;
}

KeyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyContext.prototype.constructor = KeyContext;

KeyContext.prototype.element = function() {
    return this.getTypedRuleContext(ElementContext,0);
};

KeyContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

KeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterKey(this);
	}
};

KeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitKey(this);
	}
};

KeyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitKey(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.KeyContext = KeyContext;

BaliLanguageParser.prototype.key = function() {

    var localctx = new KeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, BaliLanguageParser.RULE_key);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this.element();
        this.state = 196;
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__0) {
            this.state = 195;
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

function ScriptContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_script;
    return this;
}

ScriptContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScriptContext.prototype.constructor = ScriptContext;

ScriptContext.prototype.SHELL = function() {
    return this.getToken(BaliLanguageParser.SHELL, 0);
};

ScriptContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

ScriptContext.prototype.EOF = function() {
    return this.getToken(BaliLanguageParser.EOF, 0);
};

ScriptContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterScript(this);
	}
};

ScriptContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitScript(this);
	}
};

ScriptContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitScript(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ScriptContext = ScriptContext;

BaliLanguageParser.prototype.script = function() {

    var localctx = new ScriptContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, BaliLanguageParser.RULE_script);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.match(BaliLanguageParser.SHELL);
        this.state = 199;
        this.statements();
        this.state = 200;
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

function StatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_statements;
    return this;
}

StatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementsContext.prototype.constructor = StatementsContext;


 
StatementsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function InlineStatementsContext(parser, ctx) {
	StatementsContext.call(this, parser);
    StatementsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InlineStatementsContext.prototype = Object.create(StatementsContext.prototype);
InlineStatementsContext.prototype.constructor = InlineStatementsContext;

BaliLanguageParser.InlineStatementsContext = InlineStatementsContext;

InlineStatementsContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};
InlineStatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterInlineStatements(this);
	}
};

InlineStatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitInlineStatements(this);
	}
};

InlineStatementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitInlineStatements(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EmptyStatementsContext(parser, ctx) {
	StatementsContext.call(this, parser);
    StatementsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EmptyStatementsContext.prototype = Object.create(StatementsContext.prototype);
EmptyStatementsContext.prototype.constructor = EmptyStatementsContext;

BaliLanguageParser.EmptyStatementsContext = EmptyStatementsContext;

EmptyStatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterEmptyStatements(this);
	}
};

EmptyStatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitEmptyStatements(this);
	}
};

EmptyStatementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitEmptyStatements(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NewlineStatementsContext(parser, ctx) {
	StatementsContext.call(this, parser);
    StatementsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewlineStatementsContext.prototype = Object.create(StatementsContext.prototype);
NewlineStatementsContext.prototype.constructor = NewlineStatementsContext;

BaliLanguageParser.NewlineStatementsContext = NewlineStatementsContext;

NewlineStatementsContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BaliLanguageParser.NEWLINE);
    } else {
        return this.getToken(BaliLanguageParser.NEWLINE, i);
    }
};


NewlineStatementsContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};
NewlineStatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterNewlineStatements(this);
	}
};

NewlineStatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitNewlineStatements(this);
	}
};

NewlineStatementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitNewlineStatements(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.StatementsContext = StatementsContext;

BaliLanguageParser.prototype.statements = function() {

    var localctx = new StatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, BaliLanguageParser.RULE_statements);
    var _la = 0; // Token type
    try {
        this.state = 220;
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__0:
        case BaliLanguageParser.T__2:
        case BaliLanguageParser.T__4:
        case BaliLanguageParser.T__12:
        case BaliLanguageParser.T__26:
        case BaliLanguageParser.T__28:
        case BaliLanguageParser.T__29:
        case BaliLanguageParser.T__30:
        case BaliLanguageParser.T__32:
        case BaliLanguageParser.T__34:
        case BaliLanguageParser.T__35:
        case BaliLanguageParser.T__36:
        case BaliLanguageParser.T__39:
        case BaliLanguageParser.T__41:
        case BaliLanguageParser.T__44:
        case BaliLanguageParser.T__48:
        case BaliLanguageParser.T__49:
        case BaliLanguageParser.T__50:
        case BaliLanguageParser.T__53:
        case BaliLanguageParser.T__59:
        case BaliLanguageParser.T__65:
        case BaliLanguageParser.T__66:
        case BaliLanguageParser.T__67:
        case BaliLanguageParser.T__68:
        case BaliLanguageParser.T__70:
        case BaliLanguageParser.T__71:
        case BaliLanguageParser.T__72:
        case BaliLanguageParser.T__73:
        case BaliLanguageParser.T__74:
        case BaliLanguageParser.T__75:
        case BaliLanguageParser.TAG:
        case BaliLanguageParser.SYMBOL:
        case BaliLanguageParser.FRACTION:
        case BaliLanguageParser.FLOAT:
        case BaliLanguageParser.MOMENT:
        case BaliLanguageParser.RESOURCE:
        case BaliLanguageParser.VERSION:
        case BaliLanguageParser.BINARY:
        case BaliLanguageParser.TEXT_BLOCK:
        case BaliLanguageParser.TEXT:
        case BaliLanguageParser.IDENTIFIER:
            localctx = new InlineStatementsContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 202;
            this.statement();
            this.state = 207;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliLanguageParser.T__9) {
                this.state = 203;
                this.match(BaliLanguageParser.T__9);
                this.state = 204;
                this.statement();
                this.state = 209;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliLanguageParser.NEWLINE:
            localctx = new NewlineStatementsContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 210;
            this.match(BaliLanguageParser.NEWLINE);
            this.state = 216;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliLanguageParser.T__0) | (1 << BaliLanguageParser.T__2) | (1 << BaliLanguageParser.T__4) | (1 << BaliLanguageParser.T__12) | (1 << BaliLanguageParser.T__26) | (1 << BaliLanguageParser.T__28) | (1 << BaliLanguageParser.T__29) | (1 << BaliLanguageParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (BaliLanguageParser.T__32 - 33)) | (1 << (BaliLanguageParser.T__34 - 33)) | (1 << (BaliLanguageParser.T__35 - 33)) | (1 << (BaliLanguageParser.T__36 - 33)) | (1 << (BaliLanguageParser.T__39 - 33)) | (1 << (BaliLanguageParser.T__41 - 33)) | (1 << (BaliLanguageParser.T__44 - 33)) | (1 << (BaliLanguageParser.T__48 - 33)) | (1 << (BaliLanguageParser.T__49 - 33)) | (1 << (BaliLanguageParser.T__50 - 33)) | (1 << (BaliLanguageParser.T__53 - 33)) | (1 << (BaliLanguageParser.T__59 - 33)))) !== 0) || ((((_la - 66)) & ~0x1f) == 0 && ((1 << (_la - 66)) & ((1 << (BaliLanguageParser.T__65 - 66)) | (1 << (BaliLanguageParser.T__66 - 66)) | (1 << (BaliLanguageParser.T__67 - 66)) | (1 << (BaliLanguageParser.T__68 - 66)) | (1 << (BaliLanguageParser.T__70 - 66)) | (1 << (BaliLanguageParser.T__71 - 66)) | (1 << (BaliLanguageParser.T__72 - 66)) | (1 << (BaliLanguageParser.T__73 - 66)) | (1 << (BaliLanguageParser.T__74 - 66)) | (1 << (BaliLanguageParser.T__75 - 66)) | (1 << (BaliLanguageParser.TAG - 66)) | (1 << (BaliLanguageParser.SYMBOL - 66)) | (1 << (BaliLanguageParser.FRACTION - 66)) | (1 << (BaliLanguageParser.FLOAT - 66)) | (1 << (BaliLanguageParser.MOMENT - 66)) | (1 << (BaliLanguageParser.RESOURCE - 66)) | (1 << (BaliLanguageParser.VERSION - 66)) | (1 << (BaliLanguageParser.BINARY - 66)) | (1 << (BaliLanguageParser.TEXT_BLOCK - 66)) | (1 << (BaliLanguageParser.TEXT - 66)) | (1 << (BaliLanguageParser.IDENTIFIER - 66)))) !== 0)) {
                this.state = 211;
                this.statement();
                this.state = 212;
                this.match(BaliLanguageParser.NEWLINE);
                this.state = 218;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliLanguageParser.EOF:
        case BaliLanguageParser.T__5:
            localctx = new EmptyStatementsContext(this, localctx);
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

StatementContext.prototype.exceptionClause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExceptionClauseContext);
    } else {
        return this.getTypedRuleContext(ExceptionClauseContext,i);
    }
};

StatementContext.prototype.finalClause = function() {
    return this.getTypedRuleContext(FinalClauseContext,0);
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
        this.state = 222;
        this.mainClause();
        this.state = 226;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BaliLanguageParser.T__10) {
            this.state = 223;
            this.exceptionClause();
            this.state = 228;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 230;
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__13) {
            this.state = 229;
            this.finalClause();
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

function ExceptionClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_exceptionClause;
    return this;
}

ExceptionClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExceptionClauseContext.prototype.constructor = ExceptionClauseContext;

ExceptionClauseContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

ExceptionClauseContext.prototype.xception = function() {
    return this.getTypedRuleContext(XceptionContext,0);
};

ExceptionClauseContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ExceptionClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterExceptionClause(this);
	}
};

ExceptionClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitExceptionClause(this);
	}
};

ExceptionClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitExceptionClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ExceptionClauseContext = ExceptionClauseContext;

BaliLanguageParser.prototype.exceptionClause = function() {

    var localctx = new ExceptionClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, BaliLanguageParser.RULE_exceptionClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.match(BaliLanguageParser.T__10);
        this.state = 233;
        this.symbol();
        this.state = 234;
        this.match(BaliLanguageParser.T__11);
        this.state = 235;
        this.xception();
        this.state = 236;
        this.match(BaliLanguageParser.T__12);
        this.state = 237;
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

function FinalClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_finalClause;
    return this;
}

FinalClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FinalClauseContext.prototype.constructor = FinalClauseContext;

FinalClauseContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FinalClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterFinalClause(this);
	}
};

FinalClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitFinalClause(this);
	}
};

FinalClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitFinalClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.FinalClauseContext = FinalClauseContext;

BaliLanguageParser.prototype.finalClause = function() {

    var localctx = new FinalClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, BaliLanguageParser.RULE_finalClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 239;
        this.match(BaliLanguageParser.T__13);
        this.state = 240;
        this.match(BaliLanguageParser.T__12);
        this.state = 241;
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

MainClauseContext.prototype.evaluateExpression = function() {
    return this.getTypedRuleContext(EvaluateExpressionContext,0);
};

MainClauseContext.prototype.queueMessage = function() {
    return this.getTypedRuleContext(QueueMessageContext,0);
};

MainClauseContext.prototype.publishEvent = function() {
    return this.getTypedRuleContext(PublishEventContext,0);
};

MainClauseContext.prototype.waitForEvent = function() {
    return this.getTypedRuleContext(WaitForEventContext,0);
};

MainClauseContext.prototype.continueTo = function() {
    return this.getTypedRuleContext(ContinueToContext,0);
};

MainClauseContext.prototype.breakFrom = function() {
    return this.getTypedRuleContext(BreakFromContext,0);
};

MainClauseContext.prototype.returnResult = function() {
    return this.getTypedRuleContext(ReturnResultContext,0);
};

MainClauseContext.prototype.throwException = function() {
    return this.getTypedRuleContext(ThrowExceptionContext,0);
};

MainClauseContext.prototype.ifThen = function() {
    return this.getTypedRuleContext(IfThenContext,0);
};

MainClauseContext.prototype.selectFrom = function() {
    return this.getTypedRuleContext(SelectFromContext,0);
};

MainClauseContext.prototype.whileLoop = function() {
    return this.getTypedRuleContext(WhileLoopContext,0);
};

MainClauseContext.prototype.withLoop = function() {
    return this.getTypedRuleContext(WithLoopContext,0);
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
    this.enterRule(localctx, 32, BaliLanguageParser.RULE_mainClause);
    try {
        this.state = 255;
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 243;
            this.evaluateExpression();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 244;
            this.queueMessage();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 245;
            this.publishEvent();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 246;
            this.waitForEvent();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 247;
            this.continueTo();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 248;
            this.breakFrom();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 249;
            this.returnResult();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 250;
            this.throwException();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 251;
            this.ifThen();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 252;
            this.selectFrom();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 253;
            this.whileLoop();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 254;
            this.withLoop();
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

function EvaluateExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_evaluateExpression;
    this.op = null; // Token
    return this;
}

EvaluateExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EvaluateExpressionContext.prototype.constructor = EvaluateExpressionContext;

EvaluateExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

EvaluateExpressionContext.prototype.assignee = function() {
    return this.getTypedRuleContext(AssigneeContext,0);
};

EvaluateExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterEvaluateExpression(this);
	}
};

EvaluateExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitEvaluateExpression(this);
	}
};

EvaluateExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitEvaluateExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.EvaluateExpressionContext = EvaluateExpressionContext;

BaliLanguageParser.prototype.evaluateExpression = function() {

    var localctx = new EvaluateExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, BaliLanguageParser.RULE_evaluateExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 260;
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 257;
            this.assignee();
            this.state = 258;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliLanguageParser.T__14) | (1 << BaliLanguageParser.T__15) | (1 << BaliLanguageParser.T__16) | (1 << BaliLanguageParser.T__17) | (1 << BaliLanguageParser.T__18) | (1 << BaliLanguageParser.T__19) | (1 << BaliLanguageParser.T__20) | (1 << BaliLanguageParser.T__21) | (1 << BaliLanguageParser.T__22) | (1 << BaliLanguageParser.T__23) | (1 << BaliLanguageParser.T__24) | (1 << BaliLanguageParser.T__25))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }

        }
        this.state = 262;
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

function AssigneeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_assignee;
    return this;
}

AssigneeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssigneeContext.prototype.constructor = AssigneeContext;

AssigneeContext.prototype.target = function() {
    return this.getTypedRuleContext(TargetContext,0);
};

AssigneeContext.prototype.component = function() {
    return this.getTypedRuleContext(ComponentContext,0);
};

AssigneeContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterAssignee(this);
	}
};

AssigneeContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitAssignee(this);
	}
};

AssigneeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitAssignee(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.AssigneeContext = AssigneeContext;

BaliLanguageParser.prototype.assignee = function() {

    var localctx = new AssigneeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, BaliLanguageParser.RULE_assignee);
    try {
        this.state = 266;
        switch(this._input.LA(1)) {
        case BaliLanguageParser.SYMBOL:
            this.enterOuterAlt(localctx, 1);
            this.state = 264;
            this.target();
            break;
        case BaliLanguageParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 265;
            this.component();
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

function TargetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_target;
    return this;
}

TargetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TargetContext.prototype.constructor = TargetContext;

TargetContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

TargetContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterTarget(this);
	}
};

TargetContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitTarget(this);
	}
};

TargetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitTarget(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.TargetContext = TargetContext;

BaliLanguageParser.prototype.target = function() {

    var localctx = new TargetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, BaliLanguageParser.RULE_target);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        this.symbol();
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

ComponentContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

ComponentContext.prototype.indices = function() {
    return this.getTypedRuleContext(IndicesContext,0);
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
    this.enterRule(localctx, 40, BaliLanguageParser.RULE_component);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.variable();
        this.state = 271;
        this.indices();
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

function QueueMessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_queueMessage;
    return this;
}

QueueMessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueueMessageContext.prototype.constructor = QueueMessageContext;

QueueMessageContext.prototype.message = function() {
    return this.getTypedRuleContext(MessageContext,0);
};

QueueMessageContext.prototype.recipient = function() {
    return this.getTypedRuleContext(RecipientContext,0);
};

QueueMessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterQueueMessage(this);
	}
};

QueueMessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitQueueMessage(this);
	}
};

QueueMessageContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitQueueMessage(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.QueueMessageContext = QueueMessageContext;

BaliLanguageParser.prototype.queueMessage = function() {

    var localctx = new QueueMessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, BaliLanguageParser.RULE_queueMessage);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.match(BaliLanguageParser.T__26);
        this.state = 274;
        this.message();
        this.state = 275;
        this.match(BaliLanguageParser.T__27);
        this.state = 276;
        this.recipient();
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

RecipientContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
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
    this.enterRule(localctx, 44, BaliLanguageParser.RULE_recipient);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
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

function PublishEventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_publishEvent;
    return this;
}

PublishEventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PublishEventContext.prototype.constructor = PublishEventContext;

PublishEventContext.prototype.event = function() {
    return this.getTypedRuleContext(EventContext,0);
};

PublishEventContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterPublishEvent(this);
	}
};

PublishEventContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitPublishEvent(this);
	}
};

PublishEventContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitPublishEvent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.PublishEventContext = PublishEventContext;

BaliLanguageParser.prototype.publishEvent = function() {

    var localctx = new PublishEventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, BaliLanguageParser.RULE_publishEvent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        this.match(BaliLanguageParser.T__28);
        this.state = 281;
        this.event();
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

function WaitForEventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_waitForEvent;
    return this;
}

WaitForEventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WaitForEventContext.prototype.constructor = WaitForEventContext;

WaitForEventContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

WaitForEventContext.prototype.event = function() {
    return this.getTypedRuleContext(EventContext,0);
};

WaitForEventContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterWaitForEvent(this);
	}
};

WaitForEventContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitWaitForEvent(this);
	}
};

WaitForEventContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitWaitForEvent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.WaitForEventContext = WaitForEventContext;

BaliLanguageParser.prototype.waitForEvent = function() {

    var localctx = new WaitForEventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, BaliLanguageParser.RULE_waitForEvent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.match(BaliLanguageParser.T__29);
        this.state = 284;
        this.match(BaliLanguageParser.T__27);
        this.state = 285;
        this.symbol();
        this.state = 286;
        this.match(BaliLanguageParser.T__11);
        this.state = 287;
        this.event();
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

function EventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_event;
    return this;
}

EventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EventContext.prototype.constructor = EventContext;

EventContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

EventContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterEvent(this);
	}
};

EventContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitEvent(this);
	}
};

EventContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitEvent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.EventContext = EventContext;

BaliLanguageParser.prototype.event = function() {

    var localctx = new EventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, BaliLanguageParser.RULE_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 289;
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

function ContinueToContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_continueTo;
    return this;
}

ContinueToContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContinueToContext.prototype.constructor = ContinueToContext;

ContinueToContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

ContinueToContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterContinueTo(this);
	}
};

ContinueToContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitContinueTo(this);
	}
};

ContinueToContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitContinueTo(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ContinueToContext = ContinueToContext;

BaliLanguageParser.prototype.continueTo = function() {

    var localctx = new ContinueToContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, BaliLanguageParser.RULE_continueTo);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 291;
        this.match(BaliLanguageParser.T__30);
        this.state = 294;
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__31) {
            this.state = 292;
            this.match(BaliLanguageParser.T__31);
            this.state = 293;
            this.label();
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

function BreakFromContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_breakFrom;
    return this;
}

BreakFromContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BreakFromContext.prototype.constructor = BreakFromContext;

BreakFromContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

BreakFromContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterBreakFrom(this);
	}
};

BreakFromContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitBreakFrom(this);
	}
};

BreakFromContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitBreakFrom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.BreakFromContext = BreakFromContext;

BaliLanguageParser.prototype.breakFrom = function() {

    var localctx = new BreakFromContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, BaliLanguageParser.RULE_breakFrom);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        this.match(BaliLanguageParser.T__32);
        this.state = 299;
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__33) {
            this.state = 297;
            this.match(BaliLanguageParser.T__33);
            this.state = 298;
            this.label();
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

function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.IDENTIFIER = function() {
    return this.getToken(BaliLanguageParser.IDENTIFIER, 0);
};

LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitLabel(this);
	}
};

LabelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitLabel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.LabelContext = LabelContext;

BaliLanguageParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, BaliLanguageParser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
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

function ReturnResultContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_returnResult;
    return this;
}

ReturnResultContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnResultContext.prototype.constructor = ReturnResultContext;

ReturnResultContext.prototype.result = function() {
    return this.getTypedRuleContext(ResultContext,0);
};

ReturnResultContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterReturnResult(this);
	}
};

ReturnResultContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitReturnResult(this);
	}
};

ReturnResultContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitReturnResult(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ReturnResultContext = ReturnResultContext;

BaliLanguageParser.prototype.returnResult = function() {

    var localctx = new ReturnResultContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, BaliLanguageParser.RULE_returnResult);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        this.match(BaliLanguageParser.T__34);
        this.state = 305;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliLanguageParser.T__0) | (1 << BaliLanguageParser.T__2) | (1 << BaliLanguageParser.T__4))) !== 0) || ((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (BaliLanguageParser.T__44 - 45)) | (1 << (BaliLanguageParser.T__48 - 45)) | (1 << (BaliLanguageParser.T__49 - 45)) | (1 << (BaliLanguageParser.T__50 - 45)) | (1 << (BaliLanguageParser.T__53 - 45)) | (1 << (BaliLanguageParser.T__59 - 45)) | (1 << (BaliLanguageParser.T__65 - 45)) | (1 << (BaliLanguageParser.T__66 - 45)) | (1 << (BaliLanguageParser.T__67 - 45)) | (1 << (BaliLanguageParser.T__68 - 45)) | (1 << (BaliLanguageParser.T__70 - 45)) | (1 << (BaliLanguageParser.T__71 - 45)) | (1 << (BaliLanguageParser.T__72 - 45)) | (1 << (BaliLanguageParser.T__73 - 45)) | (1 << (BaliLanguageParser.T__74 - 45)) | (1 << (BaliLanguageParser.T__75 - 45)))) !== 0) || ((((_la - 81)) & ~0x1f) == 0 && ((1 << (_la - 81)) & ((1 << (BaliLanguageParser.TAG - 81)) | (1 << (BaliLanguageParser.SYMBOL - 81)) | (1 << (BaliLanguageParser.FRACTION - 81)) | (1 << (BaliLanguageParser.FLOAT - 81)) | (1 << (BaliLanguageParser.MOMENT - 81)) | (1 << (BaliLanguageParser.RESOURCE - 81)) | (1 << (BaliLanguageParser.VERSION - 81)) | (1 << (BaliLanguageParser.BINARY - 81)) | (1 << (BaliLanguageParser.TEXT_BLOCK - 81)) | (1 << (BaliLanguageParser.TEXT - 81)) | (1 << (BaliLanguageParser.IDENTIFIER - 81)))) !== 0)) {
            this.state = 304;
            this.result();
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

function ResultContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_result;
    return this;
}

ResultContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResultContext.prototype.constructor = ResultContext;

ResultContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ResultContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterResult(this);
	}
};

ResultContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitResult(this);
	}
};

ResultContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitResult(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ResultContext = ResultContext;

BaliLanguageParser.prototype.result = function() {

    var localctx = new ResultContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, BaliLanguageParser.RULE_result);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
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

function ThrowExceptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_throwException;
    return this;
}

ThrowExceptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThrowExceptionContext.prototype.constructor = ThrowExceptionContext;

ThrowExceptionContext.prototype.xception = function() {
    return this.getTypedRuleContext(XceptionContext,0);
};

ThrowExceptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterThrowException(this);
	}
};

ThrowExceptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitThrowException(this);
	}
};

ThrowExceptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitThrowException(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ThrowExceptionContext = ThrowExceptionContext;

BaliLanguageParser.prototype.throwException = function() {

    var localctx = new ThrowExceptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, BaliLanguageParser.RULE_throwException);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        this.match(BaliLanguageParser.T__35);
        this.state = 310;
        this.xception();
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

function XceptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_xception;
    return this;
}

XceptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
XceptionContext.prototype.constructor = XceptionContext;

XceptionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

XceptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterXception(this);
	}
};

XceptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitXception(this);
	}
};

XceptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitXception(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.XceptionContext = XceptionContext;

BaliLanguageParser.prototype.xception = function() {

    var localctx = new XceptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, BaliLanguageParser.RULE_xception);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 312;
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

function IfThenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_ifThen;
    return this;
}

IfThenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfThenContext.prototype.constructor = IfThenContext;

IfThenContext.prototype.condition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionContext);
    } else {
        return this.getTypedRuleContext(ConditionContext,i);
    }
};

IfThenContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

IfThenContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterIfThen(this);
	}
};

IfThenContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitIfThen(this);
	}
};

IfThenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitIfThen(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.IfThenContext = IfThenContext;

BaliLanguageParser.prototype.ifThen = function() {

    var localctx = new IfThenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, BaliLanguageParser.RULE_ifThen);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        this.match(BaliLanguageParser.T__36);
        this.state = 315;
        this.condition();
        this.state = 316;
        this.match(BaliLanguageParser.T__37);
        this.state = 317;
        this.block();
        this.state = 326;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 318;
                this.match(BaliLanguageParser.T__38);
                this.state = 319;
                this.match(BaliLanguageParser.T__36);
                this.state = 320;
                this.condition();
                this.state = 321;
                this.match(BaliLanguageParser.T__37);
                this.state = 322;
                this.block(); 
            }
            this.state = 328;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
        }

        this.state = 331;
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__38) {
            this.state = 329;
            this.match(BaliLanguageParser.T__38);
            this.state = 330;
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

function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitCondition(this);
	}
};

ConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.ConditionContext = ConditionContext;

BaliLanguageParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, BaliLanguageParser.RULE_condition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 333;
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

function SelectFromContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_selectFrom;
    return this;
}

SelectFromContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectFromContext.prototype.constructor = SelectFromContext;

SelectFromContext.prototype.selection = function() {
    return this.getTypedRuleContext(SelectionContext,0);
};

SelectFromContext.prototype.option = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OptionContext);
    } else {
        return this.getTypedRuleContext(OptionContext,i);
    }
};

SelectFromContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

SelectFromContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterSelectFrom(this);
	}
};

SelectFromContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitSelectFrom(this);
	}
};

SelectFromContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitSelectFrom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.SelectFromContext = SelectFromContext;

BaliLanguageParser.prototype.selectFrom = function() {

    var localctx = new SelectFromContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, BaliLanguageParser.RULE_selectFrom);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 335;
        this.match(BaliLanguageParser.T__39);
        this.state = 336;
        this.selection();
        this.state = 337;
        this.match(BaliLanguageParser.T__33);
        this.state = 342; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 338;
            this.option();
            this.state = 339;
            this.match(BaliLanguageParser.T__40);
            this.state = 340;
            this.block();
            this.state = 344; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliLanguageParser.T__0) | (1 << BaliLanguageParser.T__2) | (1 << BaliLanguageParser.T__4))) !== 0) || ((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (BaliLanguageParser.T__44 - 45)) | (1 << (BaliLanguageParser.T__48 - 45)) | (1 << (BaliLanguageParser.T__49 - 45)) | (1 << (BaliLanguageParser.T__50 - 45)) | (1 << (BaliLanguageParser.T__53 - 45)) | (1 << (BaliLanguageParser.T__59 - 45)) | (1 << (BaliLanguageParser.T__65 - 45)) | (1 << (BaliLanguageParser.T__66 - 45)) | (1 << (BaliLanguageParser.T__67 - 45)) | (1 << (BaliLanguageParser.T__68 - 45)) | (1 << (BaliLanguageParser.T__70 - 45)) | (1 << (BaliLanguageParser.T__71 - 45)) | (1 << (BaliLanguageParser.T__72 - 45)) | (1 << (BaliLanguageParser.T__73 - 45)) | (1 << (BaliLanguageParser.T__74 - 45)) | (1 << (BaliLanguageParser.T__75 - 45)))) !== 0) || ((((_la - 81)) & ~0x1f) == 0 && ((1 << (_la - 81)) & ((1 << (BaliLanguageParser.TAG - 81)) | (1 << (BaliLanguageParser.SYMBOL - 81)) | (1 << (BaliLanguageParser.FRACTION - 81)) | (1 << (BaliLanguageParser.FLOAT - 81)) | (1 << (BaliLanguageParser.MOMENT - 81)) | (1 << (BaliLanguageParser.RESOURCE - 81)) | (1 << (BaliLanguageParser.VERSION - 81)) | (1 << (BaliLanguageParser.BINARY - 81)) | (1 << (BaliLanguageParser.TEXT_BLOCK - 81)) | (1 << (BaliLanguageParser.TEXT - 81)) | (1 << (BaliLanguageParser.IDENTIFIER - 81)))) !== 0));
        this.state = 348;
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__38) {
            this.state = 346;
            this.match(BaliLanguageParser.T__38);
            this.state = 347;
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

function SelectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_selection;
    return this;
}

SelectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectionContext.prototype.constructor = SelectionContext;

SelectionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

SelectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterSelection(this);
	}
};

SelectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitSelection(this);
	}
};

SelectionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitSelection(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.SelectionContext = SelectionContext;

BaliLanguageParser.prototype.selection = function() {

    var localctx = new SelectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, BaliLanguageParser.RULE_selection);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
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

function OptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_option;
    return this;
}

OptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptionContext.prototype.constructor = OptionContext;

OptionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

OptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterOption(this);
	}
};

OptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitOption(this);
	}
};

OptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitOption(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.OptionContext = OptionContext;

BaliLanguageParser.prototype.option = function() {

    var localctx = new OptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, BaliLanguageParser.RULE_option);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
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

function WhileLoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_whileLoop;
    return this;
}

WhileLoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileLoopContext.prototype.constructor = WhileLoopContext;

WhileLoopContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

WhileLoopContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

WhileLoopContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

WhileLoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterWhileLoop(this);
	}
};

WhileLoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitWhileLoop(this);
	}
};

WhileLoopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitWhileLoop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.WhileLoopContext = WhileLoopContext;

BaliLanguageParser.prototype.whileLoop = function() {

    var localctx = new WhileLoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, BaliLanguageParser.RULE_whileLoop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357;
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.IDENTIFIER) {
            this.state = 354;
            this.label();
            this.state = 355;
            this.match(BaliLanguageParser.T__8);
        }

        this.state = 359;
        this.match(BaliLanguageParser.T__41);
        this.state = 360;
        this.condition();
        this.state = 361;
        this.match(BaliLanguageParser.T__40);
        this.state = 362;
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

function WithLoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_withLoop;
    return this;
}

WithLoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WithLoopContext.prototype.constructor = WithLoopContext;

WithLoopContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
};

WithLoopContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

WithLoopContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

WithLoopContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

WithLoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterWithLoop(this);
	}
};

WithLoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitWithLoop(this);
	}
};

WithLoopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitWithLoop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.WithLoopContext = WithLoopContext;

BaliLanguageParser.prototype.withLoop = function() {

    var localctx = new WithLoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, BaliLanguageParser.RULE_withLoop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367;
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.IDENTIFIER) {
            this.state = 364;
            this.label();
            this.state = 365;
            this.match(BaliLanguageParser.T__8);
        }

        this.state = 369;
        this.match(BaliLanguageParser.T__12);
        this.state = 374;
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__42) {
            this.state = 370;
            this.match(BaliLanguageParser.T__42);
            this.state = 371;
            this.symbol();
            this.state = 372;
            this.match(BaliLanguageParser.T__43);
        }

        this.state = 376;
        this.sequence();
        this.state = 377;
        this.match(BaliLanguageParser.T__40);
        this.state = 378;
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

function SequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_sequence;
    return this;
}

SequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SequenceContext.prototype.constructor = SequenceContext;

SequenceContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

SequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterSequence(this);
	}
};

SequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitSequence(this);
	}
};

SequenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitSequence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.SequenceContext = SequenceContext;

BaliLanguageParser.prototype.sequence = function() {

    var localctx = new SequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, BaliLanguageParser.RULE_sequence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 380;
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

function DocumentExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DocumentExpressionContext.prototype = Object.create(ExpressionContext.prototype);
DocumentExpressionContext.prototype.constructor = DocumentExpressionContext;

BaliLanguageParser.DocumentExpressionContext = DocumentExpressionContext;

DocumentExpressionContext.prototype.document = function() {
    return this.getTypedRuleContext(DocumentContext,0);
};
DocumentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterDocumentExpression(this);
	}
};

DocumentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitDocumentExpression(this);
	}
};

DocumentExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitDocumentExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
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


function FunxionExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunxionExpressionContext.prototype = Object.create(ExpressionContext.prototype);
FunxionExpressionContext.prototype.constructor = FunxionExpressionContext;

BaliLanguageParser.FunxionExpressionContext = FunxionExpressionContext;

FunxionExpressionContext.prototype.funxion = function() {
    return this.getTypedRuleContext(FunxionContext,0);
};
FunxionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterFunxionExpression(this);
	}
};

FunxionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitFunxionExpression(this);
	}
};

FunxionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitFunxionExpression(this);
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

ComponentExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ComponentExpressionContext.prototype.indices = function() {
    return this.getTypedRuleContext(IndicesContext,0);
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
    var _startState = 82;
    this.enterRecursionRule(localctx, 82, BaliLanguageParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 400;
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            localctx = new DereferenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 383;
            this.match(BaliLanguageParser.T__44);
            this.state = 384;
            this.expression(12);
            break;

        case 2:
            localctx = new InversionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 385;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (BaliLanguageParser.T__48 - 49)) | (1 << (BaliLanguageParser.T__49 - 49)) | (1 << (BaliLanguageParser.T__50 - 49)))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 386;
            this.expression(7);
            break;

        case 3:
            localctx = new ComplementExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 387;
            this.match(BaliLanguageParser.T__59);
            this.state = 388;
            this.expression(3);
            break;

        case 4:
            localctx = new DocumentExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 389;
            this.document();
            break;

        case 5:
            localctx = new VariableExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 390;
            this.variable();
            break;

        case 6:
            localctx = new FunxionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 391;
            this.funxion();
            break;

        case 7:
            localctx = new PrecedenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 392;
            this.match(BaliLanguageParser.T__0);
            this.state = 393;
            this.expression(0);
            this.state = 394;
            this.match(BaliLanguageParser.T__1);
            break;

        case 8:
            localctx = new MagnitudeExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 396;
            this.match(BaliLanguageParser.T__53);
            this.state = 397;
            this.expression(0);
            this.state = 398;
            this.match(BaliLanguageParser.T__53);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 426;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 424;
                var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExponentialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 402;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 403;
                    this.match(BaliLanguageParser.T__47);
                    this.state = 404;
                    this.expression(8);
                    break;

                case 2:
                    localctx = new ArithmeticExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 405;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 406;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (BaliLanguageParser.T__48 - 49)) | (1 << (BaliLanguageParser.T__49 - 49)) | (1 << (BaliLanguageParser.T__50 - 49)) | (1 << (BaliLanguageParser.T__51 - 49)) | (1 << (BaliLanguageParser.T__52 - 49)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 407;
                    this.expression(7);
                    break;

                case 3:
                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 408;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 409;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (BaliLanguageParser.T__54 - 55)) | (1 << (BaliLanguageParser.T__55 - 55)) | (1 << (BaliLanguageParser.T__56 - 55)) | (1 << (BaliLanguageParser.T__57 - 55)) | (1 << (BaliLanguageParser.T__58 - 55)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 410;
                    this.expression(5);
                    break;

                case 4:
                    localctx = new LogicalExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 411;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 412;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 61)) & ~0x1f) == 0 && ((1 << (_la - 61)) & ((1 << (BaliLanguageParser.T__60 - 61)) | (1 << (BaliLanguageParser.T__61 - 61)) | (1 << (BaliLanguageParser.T__62 - 61)) | (1 << (BaliLanguageParser.T__63 - 61)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 413;
                    this.expression(3);
                    break;

                case 5:
                    localctx = new DefaultExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 414;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 415;
                    this.match(BaliLanguageParser.T__64);
                    this.state = 416;
                    this.expression(2);
                    break;

                case 6:
                    localctx = new ComponentExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 417;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 418;
                    this.indices();
                    break;

                case 7:
                    localctx = new MessageExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 419;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 420;
                    this.match(BaliLanguageParser.T__45);
                    this.state = 421;
                    this.message();
                    break;

                case 8:
                    localctx = new FactorialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 422;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 423;
                    this.match(BaliLanguageParser.T__46);
                    break;

                } 
            }
            this.state = 428;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
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
    this.enterRule(localctx, 84, BaliLanguageParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 429;
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

function FunxionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_funxion;
    return this;
}

FunxionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunxionContext.prototype.constructor = FunxionContext;

FunxionContext.prototype.IDENTIFIER = function() {
    return this.getToken(BaliLanguageParser.IDENTIFIER, 0);
};

FunxionContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

FunxionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterFunxion(this);
	}
};

FunxionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitFunxion(this);
	}
};

FunxionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitFunxion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.FunxionContext = FunxionContext;

BaliLanguageParser.prototype.funxion = function() {

    var localctx = new FunxionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, BaliLanguageParser.RULE_funxion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 431;
        this.match(BaliLanguageParser.IDENTIFIER);
        this.state = 432;
        this.parameters();
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

MessageContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
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
    this.enterRule(localctx, 88, BaliLanguageParser.RULE_message);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 434;
        this.match(BaliLanguageParser.IDENTIFIER);
        this.state = 435;
        this.parameters();
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

IndicesContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
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
    this.enterRule(localctx, 90, BaliLanguageParser.RULE_indices);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 437;
        this.match(BaliLanguageParser.T__2);
        this.state = 438;
        this.array();
        this.state = 439;
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

ElementContext.prototype.any = function() {
    return this.getTypedRuleContext(AnyContext,0);
};

ElementContext.prototype.tag = function() {
    return this.getTypedRuleContext(TagContext,0);
};

ElementContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

ElementContext.prototype.moment = function() {
    return this.getTypedRuleContext(MomentContext,0);
};

ElementContext.prototype.reference = function() {
    return this.getTypedRuleContext(ReferenceContext,0);
};

ElementContext.prototype.version = function() {
    return this.getTypedRuleContext(VersionContext,0);
};

ElementContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

ElementContext.prototype.binary = function() {
    return this.getTypedRuleContext(BinaryContext,0);
};

ElementContext.prototype.probability = function() {
    return this.getTypedRuleContext(ProbabilityContext,0);
};

ElementContext.prototype.percent = function() {
    return this.getTypedRuleContext(PercentContext,0);
};

ElementContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
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
    this.enterRule(localctx, 92, BaliLanguageParser.RULE_element);
    try {
        this.state = 452;
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 441;
            this.any();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 442;
            this.tag();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 443;
            this.symbol();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 444;
            this.moment();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 445;
            this.reference();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 446;
            this.version();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 447;
            this.text();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 448;
            this.binary();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 449;
            this.probability();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 450;
            this.percent();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 451;
            this.number();
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

function AnyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_any;
    return this;
}

AnyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnyContext.prototype.constructor = AnyContext;


 
AnyContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NoneAnyContext(parser, ctx) {
	AnyContext.call(this, parser);
    AnyContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NoneAnyContext.prototype = Object.create(AnyContext.prototype);
NoneAnyContext.prototype.constructor = NoneAnyContext;

BaliLanguageParser.NoneAnyContext = NoneAnyContext;

NoneAnyContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterNoneAny(this);
	}
};

NoneAnyContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitNoneAny(this);
	}
};

NoneAnyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitNoneAny(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AnyAnyContext(parser, ctx) {
	AnyContext.call(this, parser);
    AnyContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AnyAnyContext.prototype = Object.create(AnyContext.prototype);
AnyAnyContext.prototype.constructor = AnyAnyContext;

BaliLanguageParser.AnyAnyContext = AnyAnyContext;

AnyAnyContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterAnyAny(this);
	}
};

AnyAnyContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitAnyAny(this);
	}
};

AnyAnyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitAnyAny(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.AnyContext = AnyContext;

BaliLanguageParser.prototype.any = function() {

    var localctx = new AnyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, BaliLanguageParser.RULE_any);
    try {
        this.state = 456;
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__65:
            localctx = new NoneAnyContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 454;
            this.match(BaliLanguageParser.T__65);
            break;
        case BaliLanguageParser.T__66:
            localctx = new AnyAnyContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 455;
            this.match(BaliLanguageParser.T__66);
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
    this.enterRule(localctx, 96, BaliLanguageParser.RULE_tag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 458;
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
    this.enterRule(localctx, 98, BaliLanguageParser.RULE_symbol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 460;
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
    this.enterRule(localctx, 100, BaliLanguageParser.RULE_moment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 462;
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
    this.enterRule(localctx, 102, BaliLanguageParser.RULE_reference);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 464;
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
        this.state = 466;
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


function BlockTextContext(parser, ctx) {
	TextContext.call(this, parser);
    TextContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BlockTextContext.prototype = Object.create(TextContext.prototype);
BlockTextContext.prototype.constructor = BlockTextContext;

BaliLanguageParser.BlockTextContext = BlockTextContext;

BlockTextContext.prototype.TEXT_BLOCK = function() {
    return this.getToken(BaliLanguageParser.TEXT_BLOCK, 0);
};
BlockTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterBlockText(this);
	}
};

BlockTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitBlockText(this);
	}
};

BlockTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitBlockText(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.TextContext = TextContext;

BaliLanguageParser.prototype.text = function() {

    var localctx = new TextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, BaliLanguageParser.RULE_text);
    try {
        this.state = 470;
        switch(this._input.LA(1)) {
        case BaliLanguageParser.TEXT:
            localctx = new InlineTextContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 468;
            this.match(BaliLanguageParser.TEXT);
            break;
        case BaliLanguageParser.TEXT_BLOCK:
            localctx = new BlockTextContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 469;
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
    this.enterRule(localctx, 108, BaliLanguageParser.RULE_binary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 472;
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
    this.enterRule(localctx, 110, BaliLanguageParser.RULE_probability);
    try {
        this.state = 477;
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__67:
            localctx = new TrueProbabilityContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 474;
            this.match(BaliLanguageParser.T__67);
            break;
        case BaliLanguageParser.T__68:
            localctx = new FalseProbabilityContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 475;
            this.match(BaliLanguageParser.T__68);
            break;
        case BaliLanguageParser.FRACTION:
            localctx = new FractionalProbabilityContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 476;
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
    this.enterRule(localctx, 112, BaliLanguageParser.RULE_percent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 479;
        this.real();
        this.state = 480;
        this.match(BaliLanguageParser.T__69);
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
    this.con = null; // Token;
    RealContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstantRealContext.prototype = Object.create(RealContext.prototype);
ConstantRealContext.prototype.constructor = ConstantRealContext;

BaliLanguageParser.ConstantRealContext = ConstantRealContext;

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
    this.enterRule(localctx, 114, BaliLanguageParser.RULE_real);
    var _la = 0; // Token type
    try {
        this.state = 487;
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__48:
        case BaliLanguageParser.T__70:
        case BaliLanguageParser.T__71:
        case BaliLanguageParser.T__72:
            localctx = new ConstantRealContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 483;
            _la = this._input.LA(1);
            if(_la===BaliLanguageParser.T__48) {
                this.state = 482;
                localctx.sign = this.match(BaliLanguageParser.T__48);
            }

            this.state = 485;
            localctx.con = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (BaliLanguageParser.T__70 - 71)) | (1 << (BaliLanguageParser.T__71 - 71)) | (1 << (BaliLanguageParser.T__72 - 71)))) !== 0))) {
                localctx.con = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            break;
        case BaliLanguageParser.FLOAT:
            localctx = new VariableRealContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 486;
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
    this.enterRule(localctx, 116, BaliLanguageParser.RULE_imaginary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 491;
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        if(la_===1) {
            this.state = 489;
            this.real();

        } else if(la_===2) {
            this.state = 490;
            localctx.sign = this.match(BaliLanguageParser.T__48);

        }
        this.state = 493;
        this.match(BaliLanguageParser.T__73);
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
    this.enterRule(localctx, 118, BaliLanguageParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.state = 505;
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UndefinedNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 495;
            this.match(BaliLanguageParser.T__74);
            break;

        case 2:
            localctx = new InfiniteNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 496;
            this.match(BaliLanguageParser.T__75);
            break;

        case 3:
            localctx = new RealNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 497;
            this.real();
            break;

        case 4:
            localctx = new ImaginaryNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 498;
            this.imaginary();
            break;

        case 5:
            localctx = new ComplexNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 499;
            this.match(BaliLanguageParser.T__0);
            this.state = 500;
            this.real();
            this.state = 501;
            localctx.del = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===BaliLanguageParser.T__7 || _la===BaliLanguageParser.T__76)) {
                localctx.del = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 502;
            this.imaginary();
            this.state = 503;
            this.match(BaliLanguageParser.T__1);
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


BaliLanguageParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 41:
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
