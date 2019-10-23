// Generated from src/grammar/Document.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var DocumentListener = require('./DocumentListener').DocumentListener;
var DocumentVisitor = require('./DocumentVisitor').DocumentVisitor;

var grammarFileName = "Document.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003]\u0203\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
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
    ":\t:\u0004;\t;\u0004<\t<\u0003\u0002\u0007\u0002z\n\u0002\f\u0002\u000e",
    "\u0002}\u000b\u0002\u0003\u0002\u0003\u0002\u0007\u0002\u0081\n\u0002",
    "\f\u0002\u000e\u0002\u0084\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u008a\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004\u008f\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u0098",
    "\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\t\u00a5\n\t\f\t\u000e",
    "\t\u00a8\u000b\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00ae\n\t\f",
    "\t\u000e\t\u00b1\u000b\t\u0003\t\u0005\t\u00b4\n\t\u0003\n\u0003\n\u0003",
    "\n\u0007\n\u00b9\n\n\f\n\u000e\n\u00bc\u000b\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0007\n\u00c2\n\n\f\n\u000e\n\u00c5\u000b\n\u0003\n\u0005",
    "\n\u00c8\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0007\r\u00d5\n\r\f",
    "\r\u000e\r\u00d8\u000b\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u00de",
    "\n\r\f\r\u000e\r\u00e1\u000b\r\u0003\r\u0005\r\u00e4\n\r\u0003\u000e",
    "\u0003\u000e\u0007\u000e\u00e8\n\u000e\f\u000e\u000e\u000e\u00eb\u000b",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00fd",
    "\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u010d\n\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0007\u001a\u013b\n\u001a\f\u001a\u000e\u001a\u013e",
    "\u000b\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u0142\n\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0006\u001b\u014b\n\u001b\r\u001b\u000e\u001b\u014c\u0003\u001b",
    "\u0003\u001b\u0005\u001b\u0151\n\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u0158\n\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0005 \u016b\n \u0003!\u0003",
    "!\u0003!\u0003\"\u0003\"\u0005\"\u0172\n\"\u0003#\u0003#\u0003#\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0005",
    "$\u018b\n$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0007$\u01a8",
    "\n$\f$\u000e$\u01ab\u000b$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003",
    "\'\u0003(\u0003(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)\u0003*\u0003",
    "*\u0005*\u01bd\n*\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0005+\u01ce\n+\u0003",
    ",\u0003,\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u00030\u00030\u0003",
    "1\u00031\u00032\u00032\u00033\u00033\u00033\u00033\u00033\u00033\u0003",
    "3\u00033\u00033\u00033\u00033\u00033\u00033\u00053\u01eb\n3\u00033\u0003",
    "3\u00053\u01ef\n3\u00034\u00034\u00035\u00035\u00036\u00036\u00037\u0003",
    "7\u00038\u00038\u00039\u00039\u0003:\u0003:\u0003;\u0003;\u0003<\u0003",
    "<\u0003<\u0002\u0003F=\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bd",
    "fhjlnprtv\u0002\t\u0003\u0002./\u0003\u0002.2\u0003\u000248\u0003\u0002",
    ":=\u0004\u0002?@SS\u0004\u0002FGKK\u0003\u0002VW\u0002\u0217\u0002{",
    "\u0003\u0002\u0002\u0002\u0004\u0087\u0003\u0002\u0002\u0002\u0006\u008e",
    "\u0003\u0002\u0002\u0002\b\u0090\u0003\u0002\u0002\u0002\n\u0097\u0003",
    "\u0002\u0002\u0002\f\u0099\u0003\u0002\u0002\u0002\u000e\u009d\u0003",
    "\u0002\u0002\u0002\u0010\u00b3\u0003\u0002\u0002\u0002\u0012\u00c7\u0003",
    "\u0002\u0002\u0002\u0014\u00c9\u0003\u0002\u0002\u0002\u0016\u00cd\u0003",
    "\u0002\u0002\u0002\u0018\u00e3\u0003\u0002\u0002\u0002\u001a\u00e5\u0003",
    "\u0002\u0002\u0002\u001c\u00fc\u0003\u0002\u0002\u0002\u001e\u00fe\u0003",
    "\u0002\u0002\u0002 \u0105\u0003\u0002\u0002\u0002\"\u010c\u0003\u0002",
    "\u0002\u0002$\u0110\u0003\u0002\u0002\u0002&\u0115\u0003\u0002\u0002",
    "\u0002(\u011a\u0003\u0002\u0002\u0002*\u011d\u0003\u0002\u0002\u0002",
    ",\u0122\u0003\u0002\u0002\u0002.\u0125\u0003\u0002\u0002\u00020\u012a",
    "\u0003\u0002\u0002\u00022\u0130\u0003\u0002\u0002\u00024\u0143\u0003",
    "\u0002\u0002\u00026\u0152\u0003\u0002\u0002\u00028\u015d\u0003\u0002",
    "\u0002\u0002:\u0162\u0003\u0002\u0002\u0002<\u0165\u0003\u0002\u0002",
    "\u0002>\u0168\u0003\u0002\u0002\u0002@\u016c\u0003\u0002\u0002\u0002",
    "B\u0171\u0003\u0002\u0002\u0002D\u0173\u0003\u0002\u0002\u0002F\u018a",
    "\u0003\u0002\u0002\u0002H\u01ac\u0003\u0002\u0002\u0002J\u01ae\u0003",
    "\u0002\u0002\u0002L\u01b0\u0003\u0002\u0002\u0002N\u01b2\u0003\u0002",
    "\u0002\u0002P\u01b6\u0003\u0002\u0002\u0002R\u01bc\u0003\u0002\u0002",
    "\u0002T\u01cd\u0003\u0002\u0002\u0002V\u01cf\u0003\u0002\u0002\u0002",
    "X\u01d1\u0003\u0002\u0002\u0002Z\u01d3\u0003\u0002\u0002\u0002\\\u01d5",
    "\u0003\u0002\u0002\u0002^\u01d7\u0003\u0002\u0002\u0002`\u01d9\u0003",
    "\u0002\u0002\u0002b\u01db\u0003\u0002\u0002\u0002d\u01ee\u0003\u0002",
    "\u0002\u0002f\u01f0\u0003\u0002\u0002\u0002h\u01f2\u0003\u0002\u0002",
    "\u0002j\u01f4\u0003\u0002\u0002\u0002l\u01f6\u0003\u0002\u0002\u0002",
    "n\u01f8\u0003\u0002\u0002\u0002p\u01fa\u0003\u0002\u0002\u0002r\u01fc",
    "\u0003\u0002\u0002\u0002t\u01fe\u0003\u0002\u0002\u0002v\u0200\u0003",
    "\u0002\u0002\u0002xz\u0007Z\u0002\u0002yx\u0003\u0002\u0002\u0002z}",
    "\u0003\u0002\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002",
    "\u0002|~\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002~\u0082\u0005",
    "\u0004\u0003\u0002\u007f\u0081\u0007Z\u0002\u0002\u0080\u007f\u0003",
    "\u0002\u0002\u0002\u0081\u0084\u0003\u0002\u0002\u0002\u0082\u0080\u0003",
    "\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0085\u0003",
    "\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0085\u0086\u0007",
    "\u0002\u0002\u0003\u0086\u0003\u0003\u0002\u0002\u0002\u0087\u0089\u0005",
    "\u0006\u0004\u0002\u0088\u008a\u0005\f\u0007\u0002\u0089\u0088\u0003",
    "\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u0005\u0003",
    "\u0002\u0002\u0002\u008b\u008f\u0005T+\u0002\u008c\u008f\u0005\b\u0005",
    "\u0002\u008d\u008f\u0005\u0016\f\u0002\u008e\u008b\u0003\u0002\u0002",
    "\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008e\u008d\u0003\u0002\u0002",
    "\u0002\u008f\u0007\u0003\u0002\u0002\u0002\u0090\u0091\u0007\u0003\u0002",
    "\u0002\u0091\u0092\u0005\n\u0006\u0002\u0092\u0093\u0007\u0004\u0002",
    "\u0002\u0093\t\u0003\u0002\u0002\u0002\u0094\u0098\u0005\u000e\b\u0002",
    "\u0095\u0098\u0005\u0010\t\u0002\u0096\u0098\u0005\u0012\n\u0002\u0097",
    "\u0094\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0097",
    "\u0096\u0003\u0002\u0002\u0002\u0098\u000b\u0003\u0002\u0002\u0002\u0099",
    "\u009a\u0007\u0005\u0002\u0002\u009a\u009b\u0005\u0012\n\u0002\u009b",
    "\u009c\u0007\u0006\u0002\u0002\u009c\r\u0003\u0002\u0002\u0002\u009d",
    "\u009e\u0005F$\u0002\u009e\u009f\u0007\u0007\u0002\u0002\u009f\u00a0",
    "\u0005F$\u0002\u00a0\u000f\u0003\u0002\u0002\u0002\u00a1\u00a6\u0005",
    "F$\u0002\u00a2\u00a3\u0007\b\u0002\u0002\u00a3\u00a5\u0005F$\u0002\u00a4",
    "\u00a2\u0003\u0002\u0002\u0002\u00a5\u00a8\u0003\u0002\u0002\u0002\u00a6",
    "\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002\u00a7",
    "\u00b4\u0003\u0002\u0002\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a9",
    "\u00af\u0007Z\u0002\u0002\u00aa\u00ab\u0005F$\u0002\u00ab\u00ac\u0007",
    "Z\u0002\u0002\u00ac\u00ae\u0003\u0002\u0002\u0002\u00ad\u00aa\u0003",
    "\u0002\u0002\u0002\u00ae\u00b1\u0003\u0002\u0002\u0002\u00af\u00ad\u0003",
    "\u0002\u0002\u0002\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0\u00b4\u0003",
    "\u0002\u0002\u0002\u00b1\u00af\u0003\u0002\u0002\u0002\u00b2\u00b4\u0003",
    "\u0002\u0002\u0002\u00b3\u00a1\u0003\u0002\u0002\u0002\u00b3\u00a9\u0003",
    "\u0002\u0002\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002\u00b4\u0011\u0003",
    "\u0002\u0002\u0002\u00b5\u00ba\u0005\u0014\u000b\u0002\u00b6\u00b7\u0007",
    "\b\u0002\u0002\u00b7\u00b9\u0005\u0014\u000b\u0002\u00b8\u00b6\u0003",
    "\u0002\u0002\u0002\u00b9\u00bc\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003",
    "\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u00c8\u0003",
    "\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bd\u00c3\u0007",
    "Z\u0002\u0002\u00be\u00bf\u0005\u0014\u000b\u0002\u00bf\u00c0\u0007",
    "Z\u0002\u0002\u00c0\u00c2\u0003\u0002\u0002\u0002\u00c1\u00be\u0003",
    "\u0002\u0002\u0002\u00c2\u00c5\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003",
    "\u0002\u0002\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4\u00c8\u0003",
    "\u0002\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c6\u00c8\u0007",
    "\t\u0002\u0002\u00c7\u00b5\u0003\u0002\u0002\u0002\u00c7\u00bd\u0003",
    "\u0002\u0002\u0002\u00c7\u00c6\u0003\u0002\u0002\u0002\u00c8\u0013\u0003",
    "\u0002\u0002\u0002\u00c9\u00ca\u0005\u0004\u0003\u0002\u00ca\u00cb\u0007",
    "\t\u0002\u0002\u00cb\u00cc\u0005F$\u0002\u00cc\u0015\u0003\u0002\u0002",
    "\u0002\u00cd\u00ce\u0007\n\u0002\u0002\u00ce\u00cf\u0005\u0018\r\u0002",
    "\u00cf\u00d0\u0007\u000b\u0002\u0002\u00d0\u0017\u0003\u0002\u0002\u0002",
    "\u00d1\u00d6\u0005\u001a\u000e\u0002\u00d2\u00d3\u0007\f\u0002\u0002",
    "\u00d3\u00d5\u0005\u001a\u000e\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002",
    "\u00d5\u00d8\u0003\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002",
    "\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00e4\u0003\u0002\u0002\u0002",
    "\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d9\u00df\u0007Z\u0002\u0002",
    "\u00da\u00db\u0005\u001a\u000e\u0002\u00db\u00dc\u0007Z\u0002\u0002",
    "\u00dc\u00de\u0003\u0002\u0002\u0002\u00dd\u00da\u0003\u0002\u0002\u0002",
    "\u00de\u00e1\u0003\u0002\u0002\u0002\u00df\u00dd\u0003\u0002\u0002\u0002",
    "\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e4\u0003\u0002\u0002\u0002",
    "\u00e1\u00df\u0003\u0002\u0002\u0002\u00e2\u00e4\u0003\u0002\u0002\u0002",
    "\u00e3\u00d1\u0003\u0002\u0002\u0002\u00e3\u00d9\u0003\u0002\u0002\u0002",
    "\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e4\u0019\u0003\u0002\u0002\u0002",
    "\u00e5\u00e9\u0005\u001c\u000f\u0002\u00e6\u00e8\u0005\u001e\u0010\u0002",
    "\u00e7\u00e6\u0003\u0002\u0002\u0002\u00e8\u00eb\u0003\u0002\u0002\u0002",
    "\u00e9\u00e7\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002",
    "\u00ea\u001b\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002",
    "\u00ec\u00fd\u0005\"\u0012\u0002\u00ed\u00fd\u0005$\u0013\u0002\u00ee",
    "\u00fd\u0005&\u0014\u0002\u00ef\u00fd\u0005(\u0015\u0002\u00f0\u00fd",
    "\u0005*\u0016\u0002\u00f1\u00fd\u0005,\u0017\u0002\u00f2\u00fd\u0005",
    ".\u0018\u0002\u00f3\u00fd\u00050\u0019\u0002\u00f4\u00fd\u00052\u001a",
    "\u0002\u00f5\u00fd\u00054\u001b\u0002\u00f6\u00fd\u00056\u001c\u0002",
    "\u00f7\u00fd\u00058\u001d\u0002\u00f8\u00fd\u0005:\u001e\u0002\u00f9",
    "\u00fd\u0005<\u001f\u0002\u00fa\u00fd\u0005> \u0002\u00fb\u00fd\u0005",
    "@!\u0002\u00fc\u00ec\u0003\u0002\u0002\u0002\u00fc\u00ed\u0003\u0002",
    "\u0002\u0002\u00fc\u00ee\u0003\u0002\u0002\u0002\u00fc\u00ef\u0003\u0002",
    "\u0002\u0002\u00fc\u00f0\u0003\u0002\u0002\u0002\u00fc\u00f1\u0003\u0002",
    "\u0002\u0002\u00fc\u00f2\u0003\u0002\u0002\u0002\u00fc\u00f3\u0003\u0002",
    "\u0002\u0002\u00fc\u00f4\u0003\u0002\u0002\u0002\u00fc\u00f5\u0003\u0002",
    "\u0002\u0002\u00fc\u00f6\u0003\u0002\u0002\u0002\u00fc\u00f7\u0003\u0002",
    "\u0002\u0002\u00fc\u00f8\u0003\u0002\u0002\u0002\u00fc\u00f9\u0003\u0002",
    "\u0002\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002\u00fc\u00fb\u0003\u0002",
    "\u0002\u0002\u00fd\u001d\u0003\u0002\u0002\u0002\u00fe\u00ff\u0007\r",
    "\u0002\u0002\u00ff\u0100\u0005p9\u0002\u0100\u0101\u0007\u000e\u0002",
    "\u0002\u0101\u0102\u0005F$\u0002\u0102\u0103\u0007\u000f\u0002\u0002",
    "\u0103\u0104\u0005 \u0011\u0002\u0104\u001f\u0003\u0002\u0002\u0002",
    "\u0105\u0106\u0007\n\u0002\u0002\u0106\u0107\u0005\u0018\r\u0002\u0107",
    "\u0108\u0007\u000b\u0002\u0002\u0108!\u0003\u0002\u0002\u0002\u0109",
    "\u010a\u0005B\"\u0002\u010a\u010b\u0007\u0010\u0002\u0002\u010b\u010d",
    "\u0003\u0002\u0002\u0002\u010c\u0109\u0003\u0002\u0002\u0002\u010c\u010d",
    "\u0003\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002\u0002\u010e\u010f",
    "\u0005F$\u0002\u010f#\u0003\u0002\u0002\u0002\u0110\u0111\u0007\u0011",
    "\u0002\u0002\u0111\u0112\u0005B\"\u0002\u0112\u0113\u0007\u0012\u0002",
    "\u0002\u0113\u0114\u0005F$\u0002\u0114%\u0003\u0002\u0002\u0002\u0115",
    "\u0116\u0007\u0013\u0002\u0002\u0116\u0117\u0005F$\u0002\u0117\u0118",
    "\u0007\u0014\u0002\u0002\u0118\u0119\u0005F$\u0002\u0119\'\u0003\u0002",
    "\u0002\u0002\u011a\u011b\u0007\u0015\u0002\u0002\u011b\u011c\u0005F",
    "$\u0002\u011c)\u0003\u0002\u0002\u0002\u011d\u011e\u0007\u0016\u0002",
    "\u0002\u011e\u011f\u0005F$\u0002\u011f\u0120\u0007\u0014\u0002\u0002",
    "\u0120\u0121\u0005F$\u0002\u0121+\u0003\u0002\u0002\u0002\u0122\u0123",
    "\u0007\u0017\u0002\u0002\u0123\u0124\u0005F$\u0002\u0124-\u0003\u0002",
    "\u0002\u0002\u0125\u0126\u0007\u0018\u0002\u0002\u0126\u0127\u0005F",
    "$\u0002\u0127\u0128\u0007\u0019\u0002\u0002\u0128\u0129\u0005F$\u0002",
    "\u0129/\u0003\u0002\u0002\u0002\u012a\u012b\u0007\u001a\u0002\u0002",
    "\u012b\u012c\u0007\u001b\u0002\u0002\u012c\u012d\u0005B\"\u0002\u012d",
    "\u012e\u0007\u0012\u0002\u0002\u012e\u012f\u0005F$\u0002\u012f1\u0003",
    "\u0002\u0002\u0002\u0130\u0131\u0007\u001c\u0002\u0002\u0131\u0132\u0005",
    "F$\u0002\u0132\u0133\u0007\u001d\u0002\u0002\u0133\u013c\u0005 \u0011",
    "\u0002\u0134\u0135\u0007\u001e\u0002\u0002\u0135\u0136\u0007\u001c\u0002",
    "\u0002\u0136\u0137\u0005F$\u0002\u0137\u0138\u0007\u001d\u0002\u0002",
    "\u0138\u0139\u0005 \u0011\u0002\u0139\u013b\u0003\u0002\u0002\u0002",
    "\u013a\u0134\u0003\u0002\u0002\u0002\u013b\u013e\u0003\u0002\u0002\u0002",
    "\u013c\u013a\u0003\u0002\u0002\u0002\u013c\u013d\u0003\u0002\u0002\u0002",
    "\u013d\u0141\u0003\u0002\u0002\u0002\u013e\u013c\u0003\u0002\u0002\u0002",
    "\u013f\u0140\u0007\u001e\u0002\u0002\u0140\u0142\u0005 \u0011\u0002",
    "\u0141\u013f\u0003\u0002\u0002\u0002\u0141\u0142\u0003\u0002\u0002\u0002",
    "\u01423\u0003\u0002\u0002\u0002\u0143\u0144\u0007\u001f\u0002\u0002",
    "\u0144\u0145\u0005F$\u0002\u0145\u014a\u0007\u0012\u0002\u0002\u0146",
    "\u0147\u0005F$\u0002\u0147\u0148\u0007 \u0002\u0002\u0148\u0149\u0005",
    " \u0011\u0002\u0149\u014b\u0003\u0002\u0002\u0002\u014a\u0146\u0003",
    "\u0002\u0002\u0002\u014b\u014c\u0003\u0002\u0002\u0002\u014c\u014a\u0003",
    "\u0002\u0002\u0002\u014c\u014d\u0003\u0002\u0002\u0002\u014d\u0150\u0003",
    "\u0002\u0002\u0002\u014e\u014f\u0007\u001e\u0002\u0002\u014f\u0151\u0005",
    " \u0011\u0002\u0150\u014e\u0003\u0002\u0002\u0002\u0150\u0151\u0003",
    "\u0002\u0002\u0002\u01515\u0003\u0002\u0002\u0002\u0152\u0157\u0007",
    "\u000f\u0002\u0002\u0153\u0154\u0007!\u0002\u0002\u0154\u0155\u0005",
    "p9\u0002\u0155\u0156\u0007\"\u0002\u0002\u0156\u0158\u0003\u0002\u0002",
    "\u0002\u0157\u0153\u0003\u0002\u0002\u0002\u0157\u0158\u0003\u0002\u0002",
    "\u0002\u0158\u0159\u0003\u0002\u0002\u0002\u0159\u015a\u0005F$\u0002",
    "\u015a\u015b\u0007 \u0002\u0002\u015b\u015c\u0005 \u0011\u0002\u015c",
    "7\u0003\u0002\u0002\u0002\u015d\u015e\u0007#\u0002\u0002\u015e\u015f",
    "\u0005F$\u0002\u015f\u0160\u0007 \u0002\u0002\u0160\u0161\u0005 \u0011",
    "\u0002\u01619\u0003\u0002\u0002\u0002\u0162\u0163\u0007$\u0002\u0002",
    "\u0163\u0164\u0007%\u0002\u0002\u0164;\u0003\u0002\u0002\u0002\u0165",
    "\u0166\u0007&\u0002\u0002\u0166\u0167\u0007%\u0002\u0002\u0167=\u0003",
    "\u0002\u0002\u0002\u0168\u016a\u0007\'\u0002\u0002\u0169\u016b\u0005",
    "F$\u0002\u016a\u0169\u0003\u0002\u0002\u0002\u016a\u016b\u0003\u0002",
    "\u0002\u0002\u016b?\u0003\u0002\u0002\u0002\u016c\u016d\u0007(\u0002",
    "\u0002\u016d\u016e\u0005F$\u0002\u016eA\u0003\u0002\u0002\u0002\u016f",
    "\u0172\u0005p9\u0002\u0170\u0172\u0005D#\u0002\u0171\u016f\u0003\u0002",
    "\u0002\u0002\u0171\u0170\u0003\u0002\u0002\u0002\u0172C\u0003\u0002",
    "\u0002\u0002\u0173\u0174\u0005H%\u0002\u0174\u0175\u0005P)\u0002\u0175",
    "E\u0003\u0002\u0002\u0002\u0176\u0177\b$\u0001\u0002\u0177\u018b\u0005",
    "\u0004\u0003\u0002\u0178\u018b\u0005H%\u0002\u0179\u017a\u0005J&\u0002",
    "\u017a\u017b\u0005N(\u0002\u017b\u018b\u0003\u0002\u0002\u0002\u017c",
    "\u017d\u0007\u0005\u0002\u0002\u017d\u017e\u0005F$\u0002\u017e\u017f",
    "\u0007\u0006\u0002\u0002\u017f\u018b\u0003\u0002\u0002\u0002\u0180\u0181",
    "\u0007)\u0002\u0002\u0181\u018b\u0005F$\u000f\u0182\u0183\t\u0002\u0002",
    "\u0002\u0183\u018b\u0005F$\t\u0184\u0185\u00073\u0002\u0002\u0185\u0186",
    "\u0005F$\u0002\u0186\u0187\u00073\u0002\u0002\u0187\u018b\u0003\u0002",
    "\u0002\u0002\u0188\u0189\u00079\u0002\u0002\u0189\u018b\u0005F$\u0005",
    "\u018a\u0176\u0003\u0002\u0002\u0002\u018a\u0178\u0003\u0002\u0002\u0002",
    "\u018a\u0179\u0003\u0002\u0002\u0002\u018a\u017c\u0003\u0002\u0002\u0002",
    "\u018a\u0180\u0003\u0002\u0002\u0002\u018a\u0182\u0003\u0002\u0002\u0002",
    "\u018a\u0184\u0003\u0002\u0002\u0002\u018a\u0188\u0003\u0002\u0002\u0002",
    "\u018b\u01a9\u0003\u0002\u0002\u0002\u018c\u018d\f\f\u0002\u0002\u018d",
    "\u018e\u0007+\u0002\u0002\u018e\u01a8\u0005F$\r\u018f\u0190\f\n\u0002",
    "\u0002\u0190\u0191\u0007-\u0002\u0002\u0191\u01a8\u0005F$\n\u0192\u0193",
    "\f\b\u0002\u0002\u0193\u0194\t\u0003\u0002\u0002\u0194\u01a8\u0005F",
    "$\t\u0195\u0196\f\u0006\u0002\u0002\u0196\u0197\t\u0004\u0002\u0002",
    "\u0197\u01a8\u0005F$\u0007\u0198\u0199\f\u0004\u0002\u0002\u0199\u019a",
    "\t\u0005\u0002\u0002\u019a\u01a8\u0005F$\u0005\u019b\u019c\f\u0003\u0002",
    "\u0002\u019c\u019d\u0007>\u0002\u0002\u019d\u01a8\u0005F$\u0004\u019e",
    "\u019f\f\u000e\u0002\u0002\u019f\u01a0\u0007*\u0002\u0002\u01a0\u01a1",
    "\u0005L\'\u0002\u01a1\u01a2\u0005N(\u0002\u01a2\u01a8\u0003\u0002\u0002",
    "\u0002\u01a3\u01a4\f\r\u0002\u0002\u01a4\u01a8\u0005P)\u0002\u01a5\u01a6",
    "\f\u000b\u0002\u0002\u01a6\u01a8\u0007,\u0002\u0002\u01a7\u018c\u0003",
    "\u0002\u0002\u0002\u01a7\u018f\u0003\u0002\u0002\u0002\u01a7\u0192\u0003",
    "\u0002\u0002\u0002\u01a7\u0195\u0003\u0002\u0002\u0002\u01a7\u0198\u0003",
    "\u0002\u0002\u0002\u01a7\u019b\u0003\u0002\u0002\u0002\u01a7\u019e\u0003",
    "\u0002\u0002\u0002\u01a7\u01a3\u0003\u0002\u0002\u0002\u01a7\u01a5\u0003",
    "\u0002\u0002\u0002\u01a8\u01ab\u0003\u0002\u0002\u0002\u01a9\u01a7\u0003",
    "\u0002\u0002\u0002\u01a9\u01aa\u0003\u0002\u0002\u0002\u01aaG\u0003",
    "\u0002\u0002\u0002\u01ab\u01a9\u0003\u0002\u0002\u0002\u01ac\u01ad\u0007",
    "Y\u0002\u0002\u01adI\u0003\u0002\u0002\u0002\u01ae\u01af\u0007Y\u0002",
    "\u0002\u01afK\u0003\u0002\u0002\u0002\u01b0\u01b1\u0007Y\u0002\u0002",
    "\u01b1M\u0003\u0002\u0002\u0002\u01b2\u01b3\u0007\u0005\u0002\u0002",
    "\u01b3\u01b4\u0005\u0010\t\u0002\u01b4\u01b5\u0007\u0006\u0002\u0002",
    "\u01b5O\u0003\u0002\u0002\u0002\u01b6\u01b7\u0007\u0003\u0002\u0002",
    "\u01b7\u01b8\u0005R*\u0002\u01b8\u01b9\u0007\u0004\u0002\u0002\u01b9",
    "Q\u0003\u0002\u0002\u0002\u01ba\u01bd\u0005\u000e\b\u0002\u01bb\u01bd",
    "\u0005\u0010\t\u0002\u01bc\u01ba\u0003\u0002\u0002\u0002\u01bc\u01bb",
    "\u0003\u0002\u0002\u0002\u01bdS\u0003\u0002\u0002\u0002\u01be\u01ce",
    "\u0005V,\u0002\u01bf\u01ce\u0005X-\u0002\u01c0\u01ce\u0005Z.\u0002\u01c1",
    "\u01ce\u0005`1\u0002\u01c2\u01ce\u0005b2\u0002\u01c3\u01ce\u0005d3\u0002",
    "\u01c4\u01ce\u0005\\/\u0002\u01c5\u01ce\u0005f4\u0002\u01c6\u01ce\u0005",
    "h5\u0002\u01c7\u01ce\u0005l7\u0002\u01c8\u01ce\u0005n8\u0002\u01c9\u01ce",
    "\u0005p9\u0002\u01ca\u01ce\u0005r:\u0002\u01cb\u01ce\u0005t;\u0002\u01cc",
    "\u01ce\u0005v<\u0002\u01cd\u01be\u0003\u0002\u0002\u0002\u01cd\u01bf",
    "\u0003\u0002\u0002\u0002\u01cd\u01c0\u0003\u0002\u0002\u0002\u01cd\u01c1",
    "\u0003\u0002\u0002\u0002\u01cd\u01c2\u0003\u0002\u0002\u0002\u01cd\u01c3",
    "\u0003\u0002\u0002\u0002\u01cd\u01c4\u0003\u0002\u0002\u0002\u01cd\u01c5",
    "\u0003\u0002\u0002\u0002\u01cd\u01c6\u0003\u0002\u0002\u0002\u01cd\u01c7",
    "\u0003\u0002\u0002\u0002\u01cd\u01c8\u0003\u0002\u0002\u0002\u01cd\u01c9",
    "\u0003\u0002\u0002\u0002\u01cd\u01ca\u0003\u0002\u0002\u0002\u01cd\u01cb",
    "\u0003\u0002\u0002\u0002\u01cd\u01cc\u0003\u0002\u0002\u0002\u01ceU",
    "\u0003\u0002\u0002\u0002\u01cf\u01d0\u0007H\u0002\u0002\u01d0W\u0003",
    "\u0002\u0002\u0002\u01d1\u01d2\u0007I\u0002\u0002\u01d2Y\u0003\u0002",
    "\u0002\u0002\u01d3\u01d4\u0007J\u0002\u0002\u01d4[\u0003\u0002\u0002",
    "\u0002\u01d5\u01d6\t\u0006\u0002\u0002\u01d6]\u0003\u0002\u0002\u0002",
    "\u01d7\u01d8\u0007L\u0002\u0002\u01d8_\u0003\u0002\u0002\u0002\u01d9",
    "\u01da\u0007M\u0002\u0002\u01daa\u0003\u0002\u0002\u0002\u01db\u01dc",
    "\u0007N\u0002\u0002\u01dcc\u0003\u0002\u0002\u0002\u01dd\u01ef\u0007",
    "A\u0002\u0002\u01de\u01ef\u0007B\u0002\u0002\u01df\u01ef\u0007C\u0002",
    "\u0002\u01e0\u01ef\u0005j6\u0002\u01e1\u01ef\u0005^0\u0002\u01e2\u01e3",
    "\u0007\u0005\u0002\u0002\u01e3\u01ea\u0005j6\u0002\u01e4\u01e5\u0007",
    "\b\u0002\u0002\u01e5\u01eb\u0005^0\u0002\u01e6\u01e7\u0007D\u0002\u0002",
    "\u01e7\u01e8\u0005V,\u0002\u01e8\u01e9\u0007E\u0002\u0002\u01e9\u01eb",
    "\u0003\u0002\u0002\u0002\u01ea\u01e4\u0003\u0002\u0002\u0002\u01ea\u01e6",
    "\u0003\u0002\u0002\u0002\u01eb\u01ec\u0003\u0002\u0002\u0002\u01ec\u01ed",
    "\u0007\u0006\u0002\u0002\u01ed\u01ef\u0003\u0002\u0002\u0002\u01ee\u01dd",
    "\u0003\u0002\u0002\u0002\u01ee\u01de\u0003\u0002\u0002\u0002\u01ee\u01df",
    "\u0003\u0002\u0002\u0002\u01ee\u01e0\u0003\u0002\u0002\u0002\u01ee\u01e1",
    "\u0003\u0002\u0002\u0002\u01ee\u01e2\u0003\u0002\u0002\u0002\u01efe",
    "\u0003\u0002\u0002\u0002\u01f0\u01f1\u0007O\u0002\u0002\u01f1g\u0003",
    "\u0002\u0002\u0002\u01f2\u01f3\t\u0007\u0002\u0002\u01f3i\u0003\u0002",
    "\u0002\u0002\u01f4\u01f5\u0007R\u0002\u0002\u01f5k\u0003\u0002\u0002",
    "\u0002\u01f6\u01f7\u0007Q\u0002\u0002\u01f7m\u0003\u0002\u0002\u0002",
    "\u01f8\u01f9\u0007P\u0002\u0002\u01f9o\u0003\u0002\u0002\u0002\u01fa",
    "\u01fb\u0007T\u0002\u0002\u01fbq\u0003\u0002\u0002\u0002\u01fc\u01fd",
    "\u0007U\u0002\u0002\u01fds\u0003\u0002\u0002\u0002\u01fe\u01ff\t\b\u0002",
    "\u0002\u01ffu\u0003\u0002\u0002\u0002\u0200\u0201\u0007X\u0002\u0002",
    "\u0201w\u0003\u0002\u0002\u0002!{\u0082\u0089\u008e\u0097\u00a6\u00af",
    "\u00b3\u00ba\u00c3\u00c7\u00d6\u00df\u00e3\u00e9\u00fc\u010c\u013c\u0141",
    "\u014c\u0150\u0157\u016a\u0171\u018a\u01a7\u01a9\u01bc\u01cd\u01ea\u01ee"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'['", "']'", "'('", "')'", "'..'", "','", "':'", 
                     "'{'", "'}'", "';'", "'handle'", "'matching'", "'with'", 
                     "':='", "'checkout'", "'from'", "'save'", "'to'", "'discard'", 
                     "'commit'", "'publish'", "'queue'", "'on'", "'wait'", 
                     "'for'", "'if'", "'then'", "'else'", "'select'", "'do'", 
                     "'each'", "'in'", "'while'", "'continue'", "'loop'", 
                     "'break'", "'return'", "'throw'", "'@'", "'.'", "'&'", 
                     "'!'", "'^'", "'-'", "'*'", "'/'", "'//'", "'+'", "'|'", 
                     "'<'", "'='", "'>'", "'is'", "'matches'", "'not'", 
                     "'and'", "'sans'", "'xor'", "'or'", "'?'", "'none'", 
                     "'any'", "'undefined'", "'infinity'", "'\u221E'", "'e^'", 
                     "'i'", "'false'", "'true'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "ANGLE", 
                      "BINARY", "DURATION", "FRACTION", "IMAGINARY", "MOMENT", 
                      "NAME", "PERCENT", "RESERVED", "RESOURCE", "REAL", 
                      "REGEX", "SYMBOL", "TAG", "TEXT_BLOCK", "TEXT", "VERSION", 
                      "IDENTIFIER", "EOL", "SPACE", "COMMENT_BLOCK", "COMMENT" ];

var ruleNames =  [ "document", "component", "value", "collection", "sequence", 
                   "parameters", "range", "list", "catalog", "association", 
                   "procedure", "statements", "statement", "mainClause", 
                   "handleClause", "block", "evaluateClause", "checkoutClause", 
                   "saveClause", "discardClause", "commitClause", "publishClause", 
                   "queueClause", "waitClause", "ifClause", "selectClause", 
                   "withClause", "whileClause", "continueClause", "breakClause", 
                   "returnClause", "throwClause", "recipient", "subcomponent", 
                   "expression", "variable", "funcxion", "message", "arguments", 
                   "indices", "keys", "element", "angle", "binary", "duration", 
                   "pattern", "imaginary", "moment", "name", "number", "percent", 
                   "probability", "real", "reference", "reserved", "symbol", 
                   "tag", "text", "version" ];

function DocumentParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

DocumentParser.prototype = Object.create(antlr4.Parser.prototype);
DocumentParser.prototype.constructor = DocumentParser;

Object.defineProperty(DocumentParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

DocumentParser.EOF = antlr4.Token.EOF;
DocumentParser.T__0 = 1;
DocumentParser.T__1 = 2;
DocumentParser.T__2 = 3;
DocumentParser.T__3 = 4;
DocumentParser.T__4 = 5;
DocumentParser.T__5 = 6;
DocumentParser.T__6 = 7;
DocumentParser.T__7 = 8;
DocumentParser.T__8 = 9;
DocumentParser.T__9 = 10;
DocumentParser.T__10 = 11;
DocumentParser.T__11 = 12;
DocumentParser.T__12 = 13;
DocumentParser.T__13 = 14;
DocumentParser.T__14 = 15;
DocumentParser.T__15 = 16;
DocumentParser.T__16 = 17;
DocumentParser.T__17 = 18;
DocumentParser.T__18 = 19;
DocumentParser.T__19 = 20;
DocumentParser.T__20 = 21;
DocumentParser.T__21 = 22;
DocumentParser.T__22 = 23;
DocumentParser.T__23 = 24;
DocumentParser.T__24 = 25;
DocumentParser.T__25 = 26;
DocumentParser.T__26 = 27;
DocumentParser.T__27 = 28;
DocumentParser.T__28 = 29;
DocumentParser.T__29 = 30;
DocumentParser.T__30 = 31;
DocumentParser.T__31 = 32;
DocumentParser.T__32 = 33;
DocumentParser.T__33 = 34;
DocumentParser.T__34 = 35;
DocumentParser.T__35 = 36;
DocumentParser.T__36 = 37;
DocumentParser.T__37 = 38;
DocumentParser.T__38 = 39;
DocumentParser.T__39 = 40;
DocumentParser.T__40 = 41;
DocumentParser.T__41 = 42;
DocumentParser.T__42 = 43;
DocumentParser.T__43 = 44;
DocumentParser.T__44 = 45;
DocumentParser.T__45 = 46;
DocumentParser.T__46 = 47;
DocumentParser.T__47 = 48;
DocumentParser.T__48 = 49;
DocumentParser.T__49 = 50;
DocumentParser.T__50 = 51;
DocumentParser.T__51 = 52;
DocumentParser.T__52 = 53;
DocumentParser.T__53 = 54;
DocumentParser.T__54 = 55;
DocumentParser.T__55 = 56;
DocumentParser.T__56 = 57;
DocumentParser.T__57 = 58;
DocumentParser.T__58 = 59;
DocumentParser.T__59 = 60;
DocumentParser.T__60 = 61;
DocumentParser.T__61 = 62;
DocumentParser.T__62 = 63;
DocumentParser.T__63 = 64;
DocumentParser.T__64 = 65;
DocumentParser.T__65 = 66;
DocumentParser.T__66 = 67;
DocumentParser.T__67 = 68;
DocumentParser.T__68 = 69;
DocumentParser.ANGLE = 70;
DocumentParser.BINARY = 71;
DocumentParser.DURATION = 72;
DocumentParser.FRACTION = 73;
DocumentParser.IMAGINARY = 74;
DocumentParser.MOMENT = 75;
DocumentParser.NAME = 76;
DocumentParser.PERCENT = 77;
DocumentParser.RESERVED = 78;
DocumentParser.RESOURCE = 79;
DocumentParser.REAL = 80;
DocumentParser.REGEX = 81;
DocumentParser.SYMBOL = 82;
DocumentParser.TAG = 83;
DocumentParser.TEXT_BLOCK = 84;
DocumentParser.TEXT = 85;
DocumentParser.VERSION = 86;
DocumentParser.IDENTIFIER = 87;
DocumentParser.EOL = 88;
DocumentParser.SPACE = 89;
DocumentParser.COMMENT_BLOCK = 90;
DocumentParser.COMMENT = 91;

DocumentParser.RULE_document = 0;
DocumentParser.RULE_component = 1;
DocumentParser.RULE_value = 2;
DocumentParser.RULE_collection = 3;
DocumentParser.RULE_sequence = 4;
DocumentParser.RULE_parameters = 5;
DocumentParser.RULE_range = 6;
DocumentParser.RULE_list = 7;
DocumentParser.RULE_catalog = 8;
DocumentParser.RULE_association = 9;
DocumentParser.RULE_procedure = 10;
DocumentParser.RULE_statements = 11;
DocumentParser.RULE_statement = 12;
DocumentParser.RULE_mainClause = 13;
DocumentParser.RULE_handleClause = 14;
DocumentParser.RULE_block = 15;
DocumentParser.RULE_evaluateClause = 16;
DocumentParser.RULE_checkoutClause = 17;
DocumentParser.RULE_saveClause = 18;
DocumentParser.RULE_discardClause = 19;
DocumentParser.RULE_commitClause = 20;
DocumentParser.RULE_publishClause = 21;
DocumentParser.RULE_queueClause = 22;
DocumentParser.RULE_waitClause = 23;
DocumentParser.RULE_ifClause = 24;
DocumentParser.RULE_selectClause = 25;
DocumentParser.RULE_withClause = 26;
DocumentParser.RULE_whileClause = 27;
DocumentParser.RULE_continueClause = 28;
DocumentParser.RULE_breakClause = 29;
DocumentParser.RULE_returnClause = 30;
DocumentParser.RULE_throwClause = 31;
DocumentParser.RULE_recipient = 32;
DocumentParser.RULE_subcomponent = 33;
DocumentParser.RULE_expression = 34;
DocumentParser.RULE_variable = 35;
DocumentParser.RULE_funcxion = 36;
DocumentParser.RULE_message = 37;
DocumentParser.RULE_arguments = 38;
DocumentParser.RULE_indices = 39;
DocumentParser.RULE_keys = 40;
DocumentParser.RULE_element = 41;
DocumentParser.RULE_angle = 42;
DocumentParser.RULE_binary = 43;
DocumentParser.RULE_duration = 44;
DocumentParser.RULE_pattern = 45;
DocumentParser.RULE_imaginary = 46;
DocumentParser.RULE_moment = 47;
DocumentParser.RULE_name = 48;
DocumentParser.RULE_number = 49;
DocumentParser.RULE_percent = 50;
DocumentParser.RULE_probability = 51;
DocumentParser.RULE_real = 52;
DocumentParser.RULE_reference = 53;
DocumentParser.RULE_reserved = 54;
DocumentParser.RULE_symbol = 55;
DocumentParser.RULE_tag = 56;
DocumentParser.RULE_text = 57;
DocumentParser.RULE_version = 58;

function DocumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_document;
    return this;
}

DocumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocumentContext.prototype.constructor = DocumentContext;

DocumentContext.prototype.component = function() {
    return this.getTypedRuleContext(ComponentContext,0);
};

DocumentContext.prototype.EOF = function() {
    return this.getToken(DocumentParser.EOF, 0);
};

DocumentContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DocumentParser.EOL);
    } else {
        return this.getToken(DocumentParser.EOL, i);
    }
};


DocumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterDocument(this);
	}
};

DocumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitDocument(this);
	}
};

DocumentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitDocument(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.DocumentContext = DocumentContext;

DocumentParser.prototype.document = function() {

    var localctx = new DocumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, DocumentParser.RULE_document);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DocumentParser.EOL) {
            this.state = 118;
            this.match(DocumentParser.EOL);
            this.state = 123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 124;
        this.component();
        this.state = 128;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DocumentParser.EOL) {
            this.state = 125;
            this.match(DocumentParser.EOL);
            this.state = 130;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 131;
        this.match(DocumentParser.EOF);
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
    this.ruleIndex = DocumentParser.RULE_component;
    return this;
}

ComponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComponentContext.prototype.constructor = ComponentContext;

ComponentContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

ComponentContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

ComponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterComponent(this);
	}
};

ComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitComponent(this);
	}
};

ComponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitComponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.ComponentContext = ComponentContext;

DocumentParser.prototype.component = function() {

    var localctx = new ComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, DocumentParser.RULE_component);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.value();
        this.state = 135;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        if(la_===1) {
            this.state = 134;
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

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.element = function() {
    return this.getTypedRuleContext(ElementContext,0);
};

ValueContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

ValueContext.prototype.procedure = function() {
    return this.getTypedRuleContext(ProcedureContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.ValueContext = ValueContext;

DocumentParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, DocumentParser.RULE_value);
    try {
        this.state = 140;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__2:
        case DocumentParser.T__60:
        case DocumentParser.T__61:
        case DocumentParser.T__62:
        case DocumentParser.T__63:
        case DocumentParser.T__64:
        case DocumentParser.T__67:
        case DocumentParser.T__68:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENT:
        case DocumentParser.RESERVED:
        case DocumentParser.RESOURCE:
        case DocumentParser.REAL:
        case DocumentParser.REGEX:
        case DocumentParser.SYMBOL:
        case DocumentParser.TAG:
        case DocumentParser.TEXT_BLOCK:
        case DocumentParser.TEXT:
        case DocumentParser.VERSION:
            this.enterOuterAlt(localctx, 1);
            this.state = 137;
            this.element();
            break;
        case DocumentParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 138;
            this.collection();
            break;
        case DocumentParser.T__7:
            this.enterOuterAlt(localctx, 3);
            this.state = 139;
            this.procedure();
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

function CollectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_collection;
    return this;
}

CollectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CollectionContext.prototype.constructor = CollectionContext;

CollectionContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
};

CollectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterCollection(this);
	}
};

CollectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitCollection(this);
	}
};

CollectionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitCollection(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.CollectionContext = CollectionContext;

DocumentParser.prototype.collection = function() {

    var localctx = new CollectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, DocumentParser.RULE_collection);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(DocumentParser.T__0);
        this.state = 143;
        this.sequence();
        this.state = 144;
        this.match(DocumentParser.T__1);
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
    this.ruleIndex = DocumentParser.RULE_sequence;
    return this;
}

SequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SequenceContext.prototype.constructor = SequenceContext;

SequenceContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

SequenceContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

SequenceContext.prototype.catalog = function() {
    return this.getTypedRuleContext(CatalogContext,0);
};

SequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterSequence(this);
	}
};

SequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitSequence(this);
	}
};

SequenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitSequence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.SequenceContext = SequenceContext;

DocumentParser.prototype.sequence = function() {

    var localctx = new SequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, DocumentParser.RULE_sequence);
    try {
        this.state = 149;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 146;
            this.range();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 147;
            this.list();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 148;
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

function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.catalog = function() {
    return this.getTypedRuleContext(CatalogContext,0);
};

ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitParameters(this);
	}
};

ParametersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitParameters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.ParametersContext = ParametersContext;

DocumentParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, DocumentParser.RULE_parameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(DocumentParser.T__2);
        this.state = 152;
        this.catalog();
        this.state = 153;
        this.match(DocumentParser.T__3);
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
    this.ruleIndex = DocumentParser.RULE_range;
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
    if(listener instanceof DocumentListener ) {
        listener.enterRange(this);
	}
};

RangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitRange(this);
	}
};

RangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitRange(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.RangeContext = RangeContext;

DocumentParser.prototype.range = function() {

    var localctx = new RangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, DocumentParser.RULE_range);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.expression(0);
        this.state = 156;
        this.match(DocumentParser.T__4);
        this.state = 157;
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
    this.ruleIndex = DocumentParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ListContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DocumentParser.EOL);
    } else {
        return this.getToken(DocumentParser.EOL, i);
    }
};


ListContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterList(this);
	}
};

ListContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitList(this);
	}
};

ListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.ListContext = ListContext;

DocumentParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, DocumentParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.state = 177;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__0:
        case DocumentParser.T__2:
        case DocumentParser.T__7:
        case DocumentParser.T__38:
        case DocumentParser.T__43:
        case DocumentParser.T__44:
        case DocumentParser.T__48:
        case DocumentParser.T__54:
        case DocumentParser.T__60:
        case DocumentParser.T__61:
        case DocumentParser.T__62:
        case DocumentParser.T__63:
        case DocumentParser.T__64:
        case DocumentParser.T__67:
        case DocumentParser.T__68:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENT:
        case DocumentParser.RESERVED:
        case DocumentParser.RESOURCE:
        case DocumentParser.REAL:
        case DocumentParser.REGEX:
        case DocumentParser.SYMBOL:
        case DocumentParser.TAG:
        case DocumentParser.TEXT_BLOCK:
        case DocumentParser.TEXT:
        case DocumentParser.VERSION:
        case DocumentParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 159;
            this.expression(0);
            this.state = 164;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===DocumentParser.T__5) {
                this.state = 160;
                this.match(DocumentParser.T__5);
                this.state = 161;
                this.expression(0);
                this.state = 166;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.EOL:
            this.enterOuterAlt(localctx, 2);
            this.state = 167;
            this.match(DocumentParser.EOL);
            this.state = 173;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DocumentParser.T__0) | (1 << DocumentParser.T__2) | (1 << DocumentParser.T__7))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (DocumentParser.T__38 - 39)) | (1 << (DocumentParser.T__43 - 39)) | (1 << (DocumentParser.T__44 - 39)) | (1 << (DocumentParser.T__48 - 39)) | (1 << (DocumentParser.T__54 - 39)) | (1 << (DocumentParser.T__60 - 39)) | (1 << (DocumentParser.T__61 - 39)) | (1 << (DocumentParser.T__62 - 39)) | (1 << (DocumentParser.T__63 - 39)) | (1 << (DocumentParser.T__64 - 39)) | (1 << (DocumentParser.T__67 - 39)) | (1 << (DocumentParser.T__68 - 39)) | (1 << (DocumentParser.ANGLE - 39)))) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (DocumentParser.BINARY - 71)) | (1 << (DocumentParser.DURATION - 71)) | (1 << (DocumentParser.FRACTION - 71)) | (1 << (DocumentParser.IMAGINARY - 71)) | (1 << (DocumentParser.MOMENT - 71)) | (1 << (DocumentParser.NAME - 71)) | (1 << (DocumentParser.PERCENT - 71)) | (1 << (DocumentParser.RESERVED - 71)) | (1 << (DocumentParser.RESOURCE - 71)) | (1 << (DocumentParser.REAL - 71)) | (1 << (DocumentParser.REGEX - 71)) | (1 << (DocumentParser.SYMBOL - 71)) | (1 << (DocumentParser.TAG - 71)) | (1 << (DocumentParser.TEXT_BLOCK - 71)) | (1 << (DocumentParser.TEXT - 71)) | (1 << (DocumentParser.VERSION - 71)) | (1 << (DocumentParser.IDENTIFIER - 71)))) !== 0)) {
                this.state = 168;
                this.expression(0);
                this.state = 169;
                this.match(DocumentParser.EOL);
                this.state = 175;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.T__1:
        case DocumentParser.T__3:
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
    this.ruleIndex = DocumentParser.RULE_catalog;
    return this;
}

CatalogContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CatalogContext.prototype.constructor = CatalogContext;

CatalogContext.prototype.association = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssociationContext);
    } else {
        return this.getTypedRuleContext(AssociationContext,i);
    }
};

CatalogContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DocumentParser.EOL);
    } else {
        return this.getToken(DocumentParser.EOL, i);
    }
};


CatalogContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterCatalog(this);
	}
};

CatalogContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitCatalog(this);
	}
};

CatalogContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitCatalog(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.CatalogContext = CatalogContext;

DocumentParser.prototype.catalog = function() {

    var localctx = new CatalogContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, DocumentParser.RULE_catalog);
    var _la = 0; // Token type
    try {
        this.state = 197;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__0:
        case DocumentParser.T__2:
        case DocumentParser.T__7:
        case DocumentParser.T__60:
        case DocumentParser.T__61:
        case DocumentParser.T__62:
        case DocumentParser.T__63:
        case DocumentParser.T__64:
        case DocumentParser.T__67:
        case DocumentParser.T__68:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENT:
        case DocumentParser.RESERVED:
        case DocumentParser.RESOURCE:
        case DocumentParser.REAL:
        case DocumentParser.REGEX:
        case DocumentParser.SYMBOL:
        case DocumentParser.TAG:
        case DocumentParser.TEXT_BLOCK:
        case DocumentParser.TEXT:
        case DocumentParser.VERSION:
            this.enterOuterAlt(localctx, 1);
            this.state = 179;
            this.association();
            this.state = 184;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===DocumentParser.T__5) {
                this.state = 180;
                this.match(DocumentParser.T__5);
                this.state = 181;
                this.association();
                this.state = 186;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.EOL:
            this.enterOuterAlt(localctx, 2);
            this.state = 187;
            this.match(DocumentParser.EOL);
            this.state = 193;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DocumentParser.T__0) | (1 << DocumentParser.T__2) | (1 << DocumentParser.T__7))) !== 0) || ((((_la - 61)) & ~0x1f) == 0 && ((1 << (_la - 61)) & ((1 << (DocumentParser.T__60 - 61)) | (1 << (DocumentParser.T__61 - 61)) | (1 << (DocumentParser.T__62 - 61)) | (1 << (DocumentParser.T__63 - 61)) | (1 << (DocumentParser.T__64 - 61)) | (1 << (DocumentParser.T__67 - 61)) | (1 << (DocumentParser.T__68 - 61)) | (1 << (DocumentParser.ANGLE - 61)) | (1 << (DocumentParser.BINARY - 61)) | (1 << (DocumentParser.DURATION - 61)) | (1 << (DocumentParser.FRACTION - 61)) | (1 << (DocumentParser.IMAGINARY - 61)) | (1 << (DocumentParser.MOMENT - 61)) | (1 << (DocumentParser.NAME - 61)) | (1 << (DocumentParser.PERCENT - 61)) | (1 << (DocumentParser.RESERVED - 61)) | (1 << (DocumentParser.RESOURCE - 61)) | (1 << (DocumentParser.REAL - 61)) | (1 << (DocumentParser.REGEX - 61)) | (1 << (DocumentParser.SYMBOL - 61)) | (1 << (DocumentParser.TAG - 61)) | (1 << (DocumentParser.TEXT_BLOCK - 61)) | (1 << (DocumentParser.TEXT - 61)) | (1 << (DocumentParser.VERSION - 61)))) !== 0)) {
                this.state = 188;
                this.association();
                this.state = 189;
                this.match(DocumentParser.EOL);
                this.state = 195;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.T__6:
            this.enterOuterAlt(localctx, 3);
            this.state = 196;
            this.match(DocumentParser.T__6);
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
    this.ruleIndex = DocumentParser.RULE_association;
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
    if(listener instanceof DocumentListener ) {
        listener.enterAssociation(this);
	}
};

AssociationContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitAssociation(this);
	}
};

AssociationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitAssociation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.AssociationContext = AssociationContext;

DocumentParser.prototype.association = function() {

    var localctx = new AssociationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, DocumentParser.RULE_association);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.component();
        this.state = 200;
        this.match(DocumentParser.T__6);
        this.state = 201;
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

function ProcedureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_procedure;
    return this;
}

ProcedureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcedureContext.prototype.constructor = ProcedureContext;

ProcedureContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

ProcedureContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterProcedure(this);
	}
};

ProcedureContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitProcedure(this);
	}
};

ProcedureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitProcedure(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.ProcedureContext = ProcedureContext;

DocumentParser.prototype.procedure = function() {

    var localctx = new ProcedureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, DocumentParser.RULE_procedure);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        this.match(DocumentParser.T__7);
        this.state = 204;
        this.statements();
        this.state = 205;
        this.match(DocumentParser.T__8);
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
    this.ruleIndex = DocumentParser.RULE_statements;
    return this;
}

StatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementsContext.prototype.constructor = StatementsContext;

StatementsContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementsContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DocumentParser.EOL);
    } else {
        return this.getToken(DocumentParser.EOL, i);
    }
};


StatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterStatements(this);
	}
};

StatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitStatements(this);
	}
};

StatementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitStatements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.StatementsContext = StatementsContext;

DocumentParser.prototype.statements = function() {

    var localctx = new StatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, DocumentParser.RULE_statements);
    var _la = 0; // Token type
    try {
        this.state = 225;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__0:
        case DocumentParser.T__2:
        case DocumentParser.T__7:
        case DocumentParser.T__12:
        case DocumentParser.T__14:
        case DocumentParser.T__16:
        case DocumentParser.T__18:
        case DocumentParser.T__19:
        case DocumentParser.T__20:
        case DocumentParser.T__21:
        case DocumentParser.T__23:
        case DocumentParser.T__25:
        case DocumentParser.T__28:
        case DocumentParser.T__32:
        case DocumentParser.T__33:
        case DocumentParser.T__35:
        case DocumentParser.T__36:
        case DocumentParser.T__37:
        case DocumentParser.T__38:
        case DocumentParser.T__43:
        case DocumentParser.T__44:
        case DocumentParser.T__48:
        case DocumentParser.T__54:
        case DocumentParser.T__60:
        case DocumentParser.T__61:
        case DocumentParser.T__62:
        case DocumentParser.T__63:
        case DocumentParser.T__64:
        case DocumentParser.T__67:
        case DocumentParser.T__68:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENT:
        case DocumentParser.RESERVED:
        case DocumentParser.RESOURCE:
        case DocumentParser.REAL:
        case DocumentParser.REGEX:
        case DocumentParser.SYMBOL:
        case DocumentParser.TAG:
        case DocumentParser.TEXT_BLOCK:
        case DocumentParser.TEXT:
        case DocumentParser.VERSION:
        case DocumentParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 207;
            this.statement();
            this.state = 212;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===DocumentParser.T__9) {
                this.state = 208;
                this.match(DocumentParser.T__9);
                this.state = 209;
                this.statement();
                this.state = 214;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.EOL:
            this.enterOuterAlt(localctx, 2);
            this.state = 215;
            this.match(DocumentParser.EOL);
            this.state = 221;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DocumentParser.T__0) | (1 << DocumentParser.T__2) | (1 << DocumentParser.T__7) | (1 << DocumentParser.T__12) | (1 << DocumentParser.T__14) | (1 << DocumentParser.T__16) | (1 << DocumentParser.T__18) | (1 << DocumentParser.T__19) | (1 << DocumentParser.T__20) | (1 << DocumentParser.T__21) | (1 << DocumentParser.T__23) | (1 << DocumentParser.T__25) | (1 << DocumentParser.T__28))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (DocumentParser.T__32 - 33)) | (1 << (DocumentParser.T__33 - 33)) | (1 << (DocumentParser.T__35 - 33)) | (1 << (DocumentParser.T__36 - 33)) | (1 << (DocumentParser.T__37 - 33)) | (1 << (DocumentParser.T__38 - 33)) | (1 << (DocumentParser.T__43 - 33)) | (1 << (DocumentParser.T__44 - 33)) | (1 << (DocumentParser.T__48 - 33)) | (1 << (DocumentParser.T__54 - 33)) | (1 << (DocumentParser.T__60 - 33)) | (1 << (DocumentParser.T__61 - 33)) | (1 << (DocumentParser.T__62 - 33)) | (1 << (DocumentParser.T__63 - 33)))) !== 0) || ((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (DocumentParser.T__64 - 65)) | (1 << (DocumentParser.T__67 - 65)) | (1 << (DocumentParser.T__68 - 65)) | (1 << (DocumentParser.ANGLE - 65)) | (1 << (DocumentParser.BINARY - 65)) | (1 << (DocumentParser.DURATION - 65)) | (1 << (DocumentParser.FRACTION - 65)) | (1 << (DocumentParser.IMAGINARY - 65)) | (1 << (DocumentParser.MOMENT - 65)) | (1 << (DocumentParser.NAME - 65)) | (1 << (DocumentParser.PERCENT - 65)) | (1 << (DocumentParser.RESERVED - 65)) | (1 << (DocumentParser.RESOURCE - 65)) | (1 << (DocumentParser.REAL - 65)) | (1 << (DocumentParser.REGEX - 65)) | (1 << (DocumentParser.SYMBOL - 65)) | (1 << (DocumentParser.TAG - 65)) | (1 << (DocumentParser.TEXT_BLOCK - 65)) | (1 << (DocumentParser.TEXT - 65)) | (1 << (DocumentParser.VERSION - 65)) | (1 << (DocumentParser.IDENTIFIER - 65)))) !== 0)) {
                this.state = 216;
                this.statement();
                this.state = 217;
                this.match(DocumentParser.EOL);
                this.state = 223;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.T__8:
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
    this.ruleIndex = DocumentParser.RULE_statement;
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
    if(listener instanceof DocumentListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.StatementContext = StatementContext;

DocumentParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, DocumentParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.mainClause();
        this.state = 231;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DocumentParser.T__10) {
            this.state = 228;
            this.handleClause();
            this.state = 233;
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
    this.ruleIndex = DocumentParser.RULE_mainClause;
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

MainClauseContext.prototype.withClause = function() {
    return this.getTypedRuleContext(WithClauseContext,0);
};

MainClauseContext.prototype.whileClause = function() {
    return this.getTypedRuleContext(WhileClauseContext,0);
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
    if(listener instanceof DocumentListener ) {
        listener.enterMainClause(this);
	}
};

MainClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitMainClause(this);
	}
};

MainClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitMainClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.MainClauseContext = MainClauseContext;

DocumentParser.prototype.mainClause = function() {

    var localctx = new MainClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, DocumentParser.RULE_mainClause);
    try {
        this.state = 250;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__0:
        case DocumentParser.T__2:
        case DocumentParser.T__7:
        case DocumentParser.T__38:
        case DocumentParser.T__43:
        case DocumentParser.T__44:
        case DocumentParser.T__48:
        case DocumentParser.T__54:
        case DocumentParser.T__60:
        case DocumentParser.T__61:
        case DocumentParser.T__62:
        case DocumentParser.T__63:
        case DocumentParser.T__64:
        case DocumentParser.T__67:
        case DocumentParser.T__68:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENT:
        case DocumentParser.RESERVED:
        case DocumentParser.RESOURCE:
        case DocumentParser.REAL:
        case DocumentParser.REGEX:
        case DocumentParser.SYMBOL:
        case DocumentParser.TAG:
        case DocumentParser.TEXT_BLOCK:
        case DocumentParser.TEXT:
        case DocumentParser.VERSION:
        case DocumentParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 234;
            this.evaluateClause();
            break;
        case DocumentParser.T__14:
            this.enterOuterAlt(localctx, 2);
            this.state = 235;
            this.checkoutClause();
            break;
        case DocumentParser.T__16:
            this.enterOuterAlt(localctx, 3);
            this.state = 236;
            this.saveClause();
            break;
        case DocumentParser.T__18:
            this.enterOuterAlt(localctx, 4);
            this.state = 237;
            this.discardClause();
            break;
        case DocumentParser.T__19:
            this.enterOuterAlt(localctx, 5);
            this.state = 238;
            this.commitClause();
            break;
        case DocumentParser.T__20:
            this.enterOuterAlt(localctx, 6);
            this.state = 239;
            this.publishClause();
            break;
        case DocumentParser.T__21:
            this.enterOuterAlt(localctx, 7);
            this.state = 240;
            this.queueClause();
            break;
        case DocumentParser.T__23:
            this.enterOuterAlt(localctx, 8);
            this.state = 241;
            this.waitClause();
            break;
        case DocumentParser.T__25:
            this.enterOuterAlt(localctx, 9);
            this.state = 242;
            this.ifClause();
            break;
        case DocumentParser.T__28:
            this.enterOuterAlt(localctx, 10);
            this.state = 243;
            this.selectClause();
            break;
        case DocumentParser.T__12:
            this.enterOuterAlt(localctx, 11);
            this.state = 244;
            this.withClause();
            break;
        case DocumentParser.T__32:
            this.enterOuterAlt(localctx, 12);
            this.state = 245;
            this.whileClause();
            break;
        case DocumentParser.T__33:
            this.enterOuterAlt(localctx, 13);
            this.state = 246;
            this.continueClause();
            break;
        case DocumentParser.T__35:
            this.enterOuterAlt(localctx, 14);
            this.state = 247;
            this.breakClause();
            break;
        case DocumentParser.T__36:
            this.enterOuterAlt(localctx, 15);
            this.state = 248;
            this.returnClause();
            break;
        case DocumentParser.T__37:
            this.enterOuterAlt(localctx, 16);
            this.state = 249;
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

function HandleClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_handleClause;
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
    if(listener instanceof DocumentListener ) {
        listener.enterHandleClause(this);
	}
};

HandleClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitHandleClause(this);
	}
};

HandleClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitHandleClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.HandleClauseContext = HandleClauseContext;

DocumentParser.prototype.handleClause = function() {

    var localctx = new HandleClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, DocumentParser.RULE_handleClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        this.match(DocumentParser.T__10);
        this.state = 253;
        this.symbol();
        this.state = 254;
        this.match(DocumentParser.T__11);
        this.state = 255;
        this.expression(0);
        this.state = 256;
        this.match(DocumentParser.T__12);
        this.state = 257;
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

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.BlockContext = BlockContext;

DocumentParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, DocumentParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        this.match(DocumentParser.T__7);
        this.state = 260;
        this.statements();
        this.state = 261;
        this.match(DocumentParser.T__8);
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
    this.ruleIndex = DocumentParser.RULE_evaluateClause;
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
    if(listener instanceof DocumentListener ) {
        listener.enterEvaluateClause(this);
	}
};

EvaluateClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitEvaluateClause(this);
	}
};

EvaluateClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitEvaluateClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.EvaluateClauseContext = EvaluateClauseContext;

DocumentParser.prototype.evaluateClause = function() {

    var localctx = new EvaluateClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, DocumentParser.RULE_evaluateClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 266;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 263;
            this.recipient();
            this.state = 264;
            this.match(DocumentParser.T__13);

        }
        this.state = 268;
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
    this.ruleIndex = DocumentParser.RULE_checkoutClause;
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
    if(listener instanceof DocumentListener ) {
        listener.enterCheckoutClause(this);
	}
};

CheckoutClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitCheckoutClause(this);
	}
};

CheckoutClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitCheckoutClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.CheckoutClauseContext = CheckoutClauseContext;

DocumentParser.prototype.checkoutClause = function() {

    var localctx = new CheckoutClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, DocumentParser.RULE_checkoutClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.match(DocumentParser.T__14);
        this.state = 271;
        this.recipient();
        this.state = 272;
        this.match(DocumentParser.T__15);
        this.state = 273;
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
    this.ruleIndex = DocumentParser.RULE_saveClause;
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
    if(listener instanceof DocumentListener ) {
        listener.enterSaveClause(this);
	}
};

SaveClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitSaveClause(this);
	}
};

SaveClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitSaveClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.SaveClauseContext = SaveClauseContext;

DocumentParser.prototype.saveClause = function() {

    var localctx = new SaveClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, DocumentParser.RULE_saveClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 275;
        this.match(DocumentParser.T__16);
        this.state = 276;
        this.expression(0);
        this.state = 277;
        this.match(DocumentParser.T__17);
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

function DiscardClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_discardClause;
    return this;
}

DiscardClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DiscardClauseContext.prototype.constructor = DiscardClauseContext;

DiscardClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DiscardClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterDiscardClause(this);
	}
};

DiscardClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitDiscardClause(this);
	}
};

DiscardClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitDiscardClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.DiscardClauseContext = DiscardClauseContext;

DocumentParser.prototype.discardClause = function() {

    var localctx = new DiscardClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, DocumentParser.RULE_discardClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        this.match(DocumentParser.T__18);
        this.state = 281;
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
    this.ruleIndex = DocumentParser.RULE_commitClause;
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
    if(listener instanceof DocumentListener ) {
        listener.enterCommitClause(this);
	}
};

CommitClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitCommitClause(this);
	}
};

CommitClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitCommitClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.CommitClauseContext = CommitClauseContext;

DocumentParser.prototype.commitClause = function() {

    var localctx = new CommitClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, DocumentParser.RULE_commitClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.match(DocumentParser.T__19);
        this.state = 284;
        this.expression(0);
        this.state = 285;
        this.match(DocumentParser.T__17);
        this.state = 286;
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
    this.ruleIndex = DocumentParser.RULE_publishClause;
    return this;
}

PublishClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PublishClauseContext.prototype.constructor = PublishClauseContext;

PublishClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PublishClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterPublishClause(this);
	}
};

PublishClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitPublishClause(this);
	}
};

PublishClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitPublishClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.PublishClauseContext = PublishClauseContext;

DocumentParser.prototype.publishClause = function() {

    var localctx = new PublishClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, DocumentParser.RULE_publishClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 288;
        this.match(DocumentParser.T__20);
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

function QueueClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_queueClause;
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
    if(listener instanceof DocumentListener ) {
        listener.enterQueueClause(this);
	}
};

QueueClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitQueueClause(this);
	}
};

QueueClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitQueueClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.QueueClauseContext = QueueClauseContext;

DocumentParser.prototype.queueClause = function() {

    var localctx = new QueueClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, DocumentParser.RULE_queueClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 291;
        this.match(DocumentParser.T__21);
        this.state = 292;
        this.expression(0);
        this.state = 293;
        this.match(DocumentParser.T__22);
        this.state = 294;
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
    this.ruleIndex = DocumentParser.RULE_waitClause;
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
    if(listener instanceof DocumentListener ) {
        listener.enterWaitClause(this);
	}
};

WaitClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitWaitClause(this);
	}
};

WaitClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitWaitClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.WaitClauseContext = WaitClauseContext;

DocumentParser.prototype.waitClause = function() {

    var localctx = new WaitClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, DocumentParser.RULE_waitClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        this.match(DocumentParser.T__23);
        this.state = 297;
        this.match(DocumentParser.T__24);
        this.state = 298;
        this.recipient();
        this.state = 299;
        this.match(DocumentParser.T__15);
        this.state = 300;
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
    this.ruleIndex = DocumentParser.RULE_ifClause;
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
    if(listener instanceof DocumentListener ) {
        listener.enterIfClause(this);
	}
};

IfClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitIfClause(this);
	}
};

IfClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitIfClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.IfClauseContext = IfClauseContext;

DocumentParser.prototype.ifClause = function() {

    var localctx = new IfClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, DocumentParser.RULE_ifClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 302;
        this.match(DocumentParser.T__25);
        this.state = 303;
        this.expression(0);
        this.state = 304;
        this.match(DocumentParser.T__26);
        this.state = 305;
        this.block();
        this.state = 314;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 306;
                this.match(DocumentParser.T__27);
                this.state = 307;
                this.match(DocumentParser.T__25);
                this.state = 308;
                this.expression(0);
                this.state = 309;
                this.match(DocumentParser.T__26);
                this.state = 310;
                this.block(); 
            }
            this.state = 316;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
        }

        this.state = 319;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__27) {
            this.state = 317;
            this.match(DocumentParser.T__27);
            this.state = 318;
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
    this.ruleIndex = DocumentParser.RULE_selectClause;
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
    if(listener instanceof DocumentListener ) {
        listener.enterSelectClause(this);
	}
};

SelectClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitSelectClause(this);
	}
};

SelectClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitSelectClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.SelectClauseContext = SelectClauseContext;

DocumentParser.prototype.selectClause = function() {

    var localctx = new SelectClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, DocumentParser.RULE_selectClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 321;
        this.match(DocumentParser.T__28);
        this.state = 322;
        this.expression(0);
        this.state = 323;
        this.match(DocumentParser.T__15);
        this.state = 328; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 324;
            this.expression(0);
            this.state = 325;
            this.match(DocumentParser.T__29);
            this.state = 326;
            this.block();
            this.state = 330; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DocumentParser.T__0) | (1 << DocumentParser.T__2) | (1 << DocumentParser.T__7))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (DocumentParser.T__38 - 39)) | (1 << (DocumentParser.T__43 - 39)) | (1 << (DocumentParser.T__44 - 39)) | (1 << (DocumentParser.T__48 - 39)) | (1 << (DocumentParser.T__54 - 39)) | (1 << (DocumentParser.T__60 - 39)) | (1 << (DocumentParser.T__61 - 39)) | (1 << (DocumentParser.T__62 - 39)) | (1 << (DocumentParser.T__63 - 39)) | (1 << (DocumentParser.T__64 - 39)) | (1 << (DocumentParser.T__67 - 39)) | (1 << (DocumentParser.T__68 - 39)) | (1 << (DocumentParser.ANGLE - 39)))) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (DocumentParser.BINARY - 71)) | (1 << (DocumentParser.DURATION - 71)) | (1 << (DocumentParser.FRACTION - 71)) | (1 << (DocumentParser.IMAGINARY - 71)) | (1 << (DocumentParser.MOMENT - 71)) | (1 << (DocumentParser.NAME - 71)) | (1 << (DocumentParser.PERCENT - 71)) | (1 << (DocumentParser.RESERVED - 71)) | (1 << (DocumentParser.RESOURCE - 71)) | (1 << (DocumentParser.REAL - 71)) | (1 << (DocumentParser.REGEX - 71)) | (1 << (DocumentParser.SYMBOL - 71)) | (1 << (DocumentParser.TAG - 71)) | (1 << (DocumentParser.TEXT_BLOCK - 71)) | (1 << (DocumentParser.TEXT - 71)) | (1 << (DocumentParser.VERSION - 71)) | (1 << (DocumentParser.IDENTIFIER - 71)))) !== 0));
        this.state = 334;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__27) {
            this.state = 332;
            this.match(DocumentParser.T__27);
            this.state = 333;
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

function WithClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_withClause;
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
    if(listener instanceof DocumentListener ) {
        listener.enterWithClause(this);
	}
};

WithClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitWithClause(this);
	}
};

WithClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitWithClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.WithClauseContext = WithClauseContext;

DocumentParser.prototype.withClause = function() {

    var localctx = new WithClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, DocumentParser.RULE_withClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 336;
        this.match(DocumentParser.T__12);
        this.state = 341;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__30) {
            this.state = 337;
            this.match(DocumentParser.T__30);
            this.state = 338;
            this.symbol();
            this.state = 339;
            this.match(DocumentParser.T__31);
        }

        this.state = 343;
        this.expression(0);
        this.state = 344;
        this.match(DocumentParser.T__29);
        this.state = 345;
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

function WhileClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_whileClause;
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
    if(listener instanceof DocumentListener ) {
        listener.enterWhileClause(this);
	}
};

WhileClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitWhileClause(this);
	}
};

WhileClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitWhileClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.WhileClauseContext = WhileClauseContext;

DocumentParser.prototype.whileClause = function() {

    var localctx = new WhileClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, DocumentParser.RULE_whileClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 347;
        this.match(DocumentParser.T__32);
        this.state = 348;
        this.expression(0);
        this.state = 349;
        this.match(DocumentParser.T__29);
        this.state = 350;
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
    this.ruleIndex = DocumentParser.RULE_continueClause;
    return this;
}

ContinueClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContinueClauseContext.prototype.constructor = ContinueClauseContext;


ContinueClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterContinueClause(this);
	}
};

ContinueClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitContinueClause(this);
	}
};

ContinueClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitContinueClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.ContinueClauseContext = ContinueClauseContext;

DocumentParser.prototype.continueClause = function() {

    var localctx = new ContinueClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, DocumentParser.RULE_continueClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
        this.match(DocumentParser.T__33);
        this.state = 353;
        this.match(DocumentParser.T__34);
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
    this.ruleIndex = DocumentParser.RULE_breakClause;
    return this;
}

BreakClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BreakClauseContext.prototype.constructor = BreakClauseContext;


BreakClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterBreakClause(this);
	}
};

BreakClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitBreakClause(this);
	}
};

BreakClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitBreakClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.BreakClauseContext = BreakClauseContext;

DocumentParser.prototype.breakClause = function() {

    var localctx = new BreakClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, DocumentParser.RULE_breakClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 355;
        this.match(DocumentParser.T__35);
        this.state = 356;
        this.match(DocumentParser.T__34);
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
    this.ruleIndex = DocumentParser.RULE_returnClause;
    return this;
}

ReturnClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnClauseContext.prototype.constructor = ReturnClauseContext;

ReturnClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ReturnClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterReturnClause(this);
	}
};

ReturnClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitReturnClause(this);
	}
};

ReturnClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitReturnClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.ReturnClauseContext = ReturnClauseContext;

DocumentParser.prototype.returnClause = function() {

    var localctx = new ReturnClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, DocumentParser.RULE_returnClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 358;
        this.match(DocumentParser.T__36);
        this.state = 360;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DocumentParser.T__0) | (1 << DocumentParser.T__2) | (1 << DocumentParser.T__7))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (DocumentParser.T__38 - 39)) | (1 << (DocumentParser.T__43 - 39)) | (1 << (DocumentParser.T__44 - 39)) | (1 << (DocumentParser.T__48 - 39)) | (1 << (DocumentParser.T__54 - 39)) | (1 << (DocumentParser.T__60 - 39)) | (1 << (DocumentParser.T__61 - 39)) | (1 << (DocumentParser.T__62 - 39)) | (1 << (DocumentParser.T__63 - 39)) | (1 << (DocumentParser.T__64 - 39)) | (1 << (DocumentParser.T__67 - 39)) | (1 << (DocumentParser.T__68 - 39)) | (1 << (DocumentParser.ANGLE - 39)))) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (DocumentParser.BINARY - 71)) | (1 << (DocumentParser.DURATION - 71)) | (1 << (DocumentParser.FRACTION - 71)) | (1 << (DocumentParser.IMAGINARY - 71)) | (1 << (DocumentParser.MOMENT - 71)) | (1 << (DocumentParser.NAME - 71)) | (1 << (DocumentParser.PERCENT - 71)) | (1 << (DocumentParser.RESERVED - 71)) | (1 << (DocumentParser.RESOURCE - 71)) | (1 << (DocumentParser.REAL - 71)) | (1 << (DocumentParser.REGEX - 71)) | (1 << (DocumentParser.SYMBOL - 71)) | (1 << (DocumentParser.TAG - 71)) | (1 << (DocumentParser.TEXT_BLOCK - 71)) | (1 << (DocumentParser.TEXT - 71)) | (1 << (DocumentParser.VERSION - 71)) | (1 << (DocumentParser.IDENTIFIER - 71)))) !== 0)) {
            this.state = 359;
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
    this.ruleIndex = DocumentParser.RULE_throwClause;
    return this;
}

ThrowClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThrowClauseContext.prototype.constructor = ThrowClauseContext;

ThrowClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ThrowClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterThrowClause(this);
	}
};

ThrowClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitThrowClause(this);
	}
};

ThrowClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitThrowClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.ThrowClauseContext = ThrowClauseContext;

DocumentParser.prototype.throwClause = function() {

    var localctx = new ThrowClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, DocumentParser.RULE_throwClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 362;
        this.match(DocumentParser.T__37);
        this.state = 363;
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

function RecipientContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_recipient;
    return this;
}

RecipientContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RecipientContext.prototype.constructor = RecipientContext;

RecipientContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

RecipientContext.prototype.subcomponent = function() {
    return this.getTypedRuleContext(SubcomponentContext,0);
};

RecipientContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterRecipient(this);
	}
};

RecipientContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitRecipient(this);
	}
};

RecipientContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitRecipient(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.RecipientContext = RecipientContext;

DocumentParser.prototype.recipient = function() {

    var localctx = new RecipientContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, DocumentParser.RULE_recipient);
    try {
        this.state = 367;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.SYMBOL:
            this.enterOuterAlt(localctx, 1);
            this.state = 365;
            this.symbol();
            break;
        case DocumentParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 366;
            this.subcomponent();
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

function SubcomponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_subcomponent;
    return this;
}

SubcomponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubcomponentContext.prototype.constructor = SubcomponentContext;

SubcomponentContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

SubcomponentContext.prototype.indices = function() {
    return this.getTypedRuleContext(IndicesContext,0);
};

SubcomponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterSubcomponent(this);
	}
};

SubcomponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitSubcomponent(this);
	}
};

SubcomponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitSubcomponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.SubcomponentContext = SubcomponentContext;

DocumentParser.prototype.subcomponent = function() {

    var localctx = new SubcomponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, DocumentParser.RULE_subcomponent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 369;
        this.variable();
        this.state = 370;
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

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_expression;
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

DocumentParser.DefaultExpressionContext = DefaultExpressionContext;

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
    if(listener instanceof DocumentListener ) {
        listener.enterDefaultExpression(this);
	}
};

DefaultExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitDefaultExpression(this);
	}
};

DefaultExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
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

DocumentParser.MessageExpressionContext = MessageExpressionContext;

MessageExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

MessageExpressionContext.prototype.message = function() {
    return this.getTypedRuleContext(MessageContext,0);
};

MessageExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
MessageExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterMessageExpression(this);
	}
};

MessageExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitMessageExpression(this);
	}
};

MessageExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
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

DocumentParser.SubcomponentExpressionContext = SubcomponentExpressionContext;

SubcomponentExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

SubcomponentExpressionContext.prototype.indices = function() {
    return this.getTypedRuleContext(IndicesContext,0);
};
SubcomponentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterSubcomponentExpression(this);
	}
};

SubcomponentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitSubcomponentExpression(this);
	}
};

SubcomponentExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
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

DocumentParser.ComparisonExpressionContext = ComparisonExpressionContext;

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
    if(listener instanceof DocumentListener ) {
        listener.enterComparisonExpression(this);
	}
};

ComparisonExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitComparisonExpression(this);
	}
};

ComparisonExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
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

DocumentParser.ArithmeticExpressionContext = ArithmeticExpressionContext;

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
    if(listener instanceof DocumentListener ) {
        listener.enterArithmeticExpression(this);
	}
};

ArithmeticExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitArithmeticExpression(this);
	}
};

ArithmeticExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
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

DocumentParser.MagnitudeExpressionContext = MagnitudeExpressionContext;

MagnitudeExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
MagnitudeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterMagnitudeExpression(this);
	}
};

MagnitudeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitMagnitudeExpression(this);
	}
};

MagnitudeExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
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

DocumentParser.LogicalExpressionContext = LogicalExpressionContext;

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
    if(listener instanceof DocumentListener ) {
        listener.enterLogicalExpression(this);
	}
};

LogicalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitLogicalExpression(this);
	}
};

LogicalExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
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

DocumentParser.FactorialExpressionContext = FactorialExpressionContext;

FactorialExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
FactorialExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterFactorialExpression(this);
	}
};

FactorialExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitFactorialExpression(this);
	}
};

FactorialExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
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

DocumentParser.VariableExpressionContext = VariableExpressionContext;

VariableExpressionContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
VariableExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterVariableExpression(this);
	}
};

VariableExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitVariableExpression(this);
	}
};

VariableExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
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

DocumentParser.FunctionExpressionContext = FunctionExpressionContext;

FunctionExpressionContext.prototype.funcxion = function() {
    return this.getTypedRuleContext(FuncxionContext,0);
};

FunctionExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
FunctionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
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

DocumentParser.PrecedenceExpressionContext = PrecedenceExpressionContext;

PrecedenceExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PrecedenceExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterPrecedenceExpression(this);
	}
};

PrecedenceExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitPrecedenceExpression(this);
	}
};

PrecedenceExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
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

DocumentParser.ExponentialExpressionContext = ExponentialExpressionContext;

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
    if(listener instanceof DocumentListener ) {
        listener.enterExponentialExpression(this);
	}
};

ExponentialExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitExponentialExpression(this);
	}
};

ExponentialExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
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

DocumentParser.ComponentExpressionContext = ComponentExpressionContext;

ComponentExpressionContext.prototype.component = function() {
    return this.getTypedRuleContext(ComponentContext,0);
};
ComponentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterComponentExpression(this);
	}
};

ComponentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitComponentExpression(this);
	}
};

ComponentExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
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

DocumentParser.InversionExpressionContext = InversionExpressionContext;

InversionExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
InversionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterInversionExpression(this);
	}
};

InversionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitInversionExpression(this);
	}
};

InversionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
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

DocumentParser.DereferenceExpressionContext = DereferenceExpressionContext;

DereferenceExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
DereferenceExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterDereferenceExpression(this);
	}
};

DereferenceExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitDereferenceExpression(this);
	}
};

DereferenceExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
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

DocumentParser.ComplementExpressionContext = ComplementExpressionContext;

ComplementExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ComplementExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterComplementExpression(this);
	}
};

ComplementExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitComplementExpression(this);
	}
};

ComplementExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitComplementExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConcatenationExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConcatenationExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ConcatenationExpressionContext.prototype.constructor = ConcatenationExpressionContext;

DocumentParser.ConcatenationExpressionContext = ConcatenationExpressionContext;

ConcatenationExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
ConcatenationExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterConcatenationExpression(this);
	}
};

ConcatenationExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitConcatenationExpression(this);
	}
};

ConcatenationExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitConcatenationExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



DocumentParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 68;
    this.enterRecursionRule(localctx, 68, DocumentParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 392;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ComponentExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 373;
            this.component();
            break;

        case 2:
            localctx = new VariableExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 374;
            this.variable();
            break;

        case 3:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 375;
            this.funcxion();
            this.state = 376;
            this.arguments();
            break;

        case 4:
            localctx = new PrecedenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 378;
            this.match(DocumentParser.T__2);
            this.state = 379;
            this.expression(0);
            this.state = 380;
            this.match(DocumentParser.T__3);
            break;

        case 5:
            localctx = new DereferenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 382;
            this.match(DocumentParser.T__38);
            this.state = 383;
            this.expression(13);
            break;

        case 6:
            localctx = new InversionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 384;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===DocumentParser.T__43 || _la===DocumentParser.T__44)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 385;
            this.expression(7);
            break;

        case 7:
            localctx = new MagnitudeExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 386;
            this.match(DocumentParser.T__48);
            this.state = 387;
            this.expression(0);
            this.state = 388;
            this.match(DocumentParser.T__48);
            break;

        case 8:
            localctx = new ComplementExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 390;
            this.match(DocumentParser.T__54);
            this.state = 391;
            this.expression(3);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 423;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 421;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ConcatenationExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 394;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 395;
                    this.match(DocumentParser.T__40);
                    this.state = 396;
                    this.expression(11);
                    break;

                case 2:
                    localctx = new ExponentialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 397;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 398;
                    this.match(DocumentParser.T__42);
                    this.state = 399;
                    this.expression(8);
                    break;

                case 3:
                    localctx = new ArithmeticExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 400;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 401;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (DocumentParser.T__43 - 44)) | (1 << (DocumentParser.T__44 - 44)) | (1 << (DocumentParser.T__45 - 44)) | (1 << (DocumentParser.T__46 - 44)) | (1 << (DocumentParser.T__47 - 44)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 402;
                    this.expression(7);
                    break;

                case 4:
                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 403;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 404;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 50)) & ~0x1f) == 0 && ((1 << (_la - 50)) & ((1 << (DocumentParser.T__49 - 50)) | (1 << (DocumentParser.T__50 - 50)) | (1 << (DocumentParser.T__51 - 50)) | (1 << (DocumentParser.T__52 - 50)) | (1 << (DocumentParser.T__53 - 50)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 405;
                    this.expression(5);
                    break;

                case 5:
                    localctx = new LogicalExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 406;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 407;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (DocumentParser.T__55 - 56)) | (1 << (DocumentParser.T__56 - 56)) | (1 << (DocumentParser.T__57 - 56)) | (1 << (DocumentParser.T__58 - 56)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 408;
                    this.expression(3);
                    break;

                case 6:
                    localctx = new DefaultExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 409;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 410;
                    this.match(DocumentParser.T__59);
                    this.state = 411;
                    this.expression(2);
                    break;

                case 7:
                    localctx = new MessageExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 412;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 413;
                    this.match(DocumentParser.T__39);
                    this.state = 414;
                    this.message();
                    this.state = 415;
                    this.arguments();
                    break;

                case 8:
                    localctx = new SubcomponentExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 417;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 418;
                    this.indices();
                    break;

                case 9:
                    localctx = new FactorialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 419;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 420;
                    this.match(DocumentParser.T__41);
                    break;

                } 
            }
            this.state = 425;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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
    this.ruleIndex = DocumentParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.IDENTIFIER = function() {
    return this.getToken(DocumentParser.IDENTIFIER, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.VariableContext = VariableContext;

DocumentParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, DocumentParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 426;
        this.match(DocumentParser.IDENTIFIER);
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

function FuncxionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_funcxion;
    return this;
}

FuncxionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncxionContext.prototype.constructor = FuncxionContext;

FuncxionContext.prototype.IDENTIFIER = function() {
    return this.getToken(DocumentParser.IDENTIFIER, 0);
};

FuncxionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterFuncxion(this);
	}
};

FuncxionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitFuncxion(this);
	}
};

FuncxionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitFuncxion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.FuncxionContext = FuncxionContext;

DocumentParser.prototype.funcxion = function() {

    var localctx = new FuncxionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, DocumentParser.RULE_funcxion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 428;
        this.match(DocumentParser.IDENTIFIER);
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
    this.ruleIndex = DocumentParser.RULE_message;
    return this;
}

MessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageContext.prototype.constructor = MessageContext;

MessageContext.prototype.IDENTIFIER = function() {
    return this.getToken(DocumentParser.IDENTIFIER, 0);
};

MessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterMessage(this);
	}
};

MessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitMessage(this);
	}
};

MessageContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitMessage(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.MessageContext = MessageContext;

DocumentParser.prototype.message = function() {

    var localctx = new MessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, DocumentParser.RULE_message);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 430;
        this.match(DocumentParser.IDENTIFIER);
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

function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitArguments(this);
	}
};

ArgumentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitArguments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.ArgumentsContext = ArgumentsContext;

DocumentParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, DocumentParser.RULE_arguments);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 432;
        this.match(DocumentParser.T__2);
        this.state = 433;
        this.list();
        this.state = 434;
        this.match(DocumentParser.T__3);
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
    this.ruleIndex = DocumentParser.RULE_indices;
    return this;
}

IndicesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IndicesContext.prototype.constructor = IndicesContext;

IndicesContext.prototype.keys = function() {
    return this.getTypedRuleContext(KeysContext,0);
};

IndicesContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterIndices(this);
	}
};

IndicesContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitIndices(this);
	}
};

IndicesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitIndices(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.IndicesContext = IndicesContext;

DocumentParser.prototype.indices = function() {

    var localctx = new IndicesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, DocumentParser.RULE_indices);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 436;
        this.match(DocumentParser.T__0);
        this.state = 437;
        this.keys();
        this.state = 438;
        this.match(DocumentParser.T__1);
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

function KeysContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_keys;
    return this;
}

KeysContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeysContext.prototype.constructor = KeysContext;

KeysContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

KeysContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

KeysContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterKeys(this);
	}
};

KeysContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitKeys(this);
	}
};

KeysContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitKeys(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.KeysContext = KeysContext;

DocumentParser.prototype.keys = function() {

    var localctx = new KeysContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, DocumentParser.RULE_keys);
    try {
        this.state = 442;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 440;
            this.range();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 441;
            this.list();
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

function ElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_element;
    return this;
}

ElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementContext.prototype.constructor = ElementContext;

ElementContext.prototype.angle = function() {
    return this.getTypedRuleContext(AngleContext,0);
};

ElementContext.prototype.binary = function() {
    return this.getTypedRuleContext(BinaryContext,0);
};

ElementContext.prototype.duration = function() {
    return this.getTypedRuleContext(DurationContext,0);
};

ElementContext.prototype.moment = function() {
    return this.getTypedRuleContext(MomentContext,0);
};

ElementContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

ElementContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ElementContext.prototype.pattern = function() {
    return this.getTypedRuleContext(PatternContext,0);
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

ElementContext.prototype.reserved = function() {
    return this.getTypedRuleContext(ReservedContext,0);
};

ElementContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

ElementContext.prototype.tag = function() {
    return this.getTypedRuleContext(TagContext,0);
};

ElementContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

ElementContext.prototype.version = function() {
    return this.getTypedRuleContext(VersionContext,0);
};

ElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterElement(this);
	}
};

ElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitElement(this);
	}
};

ElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.ElementContext = ElementContext;

DocumentParser.prototype.element = function() {

    var localctx = new ElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, DocumentParser.RULE_element);
    try {
        this.state = 459;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.ANGLE:
            this.enterOuterAlt(localctx, 1);
            this.state = 444;
            this.angle();
            break;
        case DocumentParser.BINARY:
            this.enterOuterAlt(localctx, 2);
            this.state = 445;
            this.binary();
            break;
        case DocumentParser.DURATION:
            this.enterOuterAlt(localctx, 3);
            this.state = 446;
            this.duration();
            break;
        case DocumentParser.MOMENT:
            this.enterOuterAlt(localctx, 4);
            this.state = 447;
            this.moment();
            break;
        case DocumentParser.NAME:
            this.enterOuterAlt(localctx, 5);
            this.state = 448;
            this.name();
            break;
        case DocumentParser.T__2:
        case DocumentParser.T__62:
        case DocumentParser.T__63:
        case DocumentParser.T__64:
        case DocumentParser.IMAGINARY:
        case DocumentParser.REAL:
            this.enterOuterAlt(localctx, 6);
            this.state = 449;
            this.number();
            break;
        case DocumentParser.T__60:
        case DocumentParser.T__61:
        case DocumentParser.REGEX:
            this.enterOuterAlt(localctx, 7);
            this.state = 450;
            this.pattern();
            break;
        case DocumentParser.PERCENT:
            this.enterOuterAlt(localctx, 8);
            this.state = 451;
            this.percent();
            break;
        case DocumentParser.T__67:
        case DocumentParser.T__68:
        case DocumentParser.FRACTION:
            this.enterOuterAlt(localctx, 9);
            this.state = 452;
            this.probability();
            break;
        case DocumentParser.RESOURCE:
            this.enterOuterAlt(localctx, 10);
            this.state = 453;
            this.reference();
            break;
        case DocumentParser.RESERVED:
            this.enterOuterAlt(localctx, 11);
            this.state = 454;
            this.reserved();
            break;
        case DocumentParser.SYMBOL:
            this.enterOuterAlt(localctx, 12);
            this.state = 455;
            this.symbol();
            break;
        case DocumentParser.TAG:
            this.enterOuterAlt(localctx, 13);
            this.state = 456;
            this.tag();
            break;
        case DocumentParser.TEXT_BLOCK:
        case DocumentParser.TEXT:
            this.enterOuterAlt(localctx, 14);
            this.state = 457;
            this.text();
            break;
        case DocumentParser.VERSION:
            this.enterOuterAlt(localctx, 15);
            this.state = 458;
            this.version();
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

function AngleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_angle;
    return this;
}

AngleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AngleContext.prototype.constructor = AngleContext;

AngleContext.prototype.ANGLE = function() {
    return this.getToken(DocumentParser.ANGLE, 0);
};

AngleContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterAngle(this);
	}
};

AngleContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitAngle(this);
	}
};

AngleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitAngle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.AngleContext = AngleContext;

DocumentParser.prototype.angle = function() {

    var localctx = new AngleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, DocumentParser.RULE_angle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 461;
        this.match(DocumentParser.ANGLE);
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
    this.ruleIndex = DocumentParser.RULE_binary;
    return this;
}

BinaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinaryContext.prototype.constructor = BinaryContext;

BinaryContext.prototype.BINARY = function() {
    return this.getToken(DocumentParser.BINARY, 0);
};

BinaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterBinary(this);
	}
};

BinaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitBinary(this);
	}
};

BinaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitBinary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.BinaryContext = BinaryContext;

DocumentParser.prototype.binary = function() {

    var localctx = new BinaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, DocumentParser.RULE_binary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 463;
        this.match(DocumentParser.BINARY);
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
    this.ruleIndex = DocumentParser.RULE_duration;
    return this;
}

DurationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DurationContext.prototype.constructor = DurationContext;

DurationContext.prototype.DURATION = function() {
    return this.getToken(DocumentParser.DURATION, 0);
};

DurationContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterDuration(this);
	}
};

DurationContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitDuration(this);
	}
};

DurationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitDuration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.DurationContext = DurationContext;

DocumentParser.prototype.duration = function() {

    var localctx = new DurationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, DocumentParser.RULE_duration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 465;
        this.match(DocumentParser.DURATION);
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

function PatternContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_pattern;
    return this;
}

PatternContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PatternContext.prototype.constructor = PatternContext;

PatternContext.prototype.REGEX = function() {
    return this.getToken(DocumentParser.REGEX, 0);
};

PatternContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterPattern(this);
	}
};

PatternContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitPattern(this);
	}
};

PatternContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitPattern(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.PatternContext = PatternContext;

DocumentParser.prototype.pattern = function() {

    var localctx = new PatternContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, DocumentParser.RULE_pattern);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 467;
        _la = this._input.LA(1);
        if(!(((((_la - 61)) & ~0x1f) == 0 && ((1 << (_la - 61)) & ((1 << (DocumentParser.T__60 - 61)) | (1 << (DocumentParser.T__61 - 61)) | (1 << (DocumentParser.REGEX - 61)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
    this.ruleIndex = DocumentParser.RULE_imaginary;
    return this;
}

ImaginaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImaginaryContext.prototype.constructor = ImaginaryContext;

ImaginaryContext.prototype.IMAGINARY = function() {
    return this.getToken(DocumentParser.IMAGINARY, 0);
};

ImaginaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterImaginary(this);
	}
};

ImaginaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitImaginary(this);
	}
};

ImaginaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitImaginary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.ImaginaryContext = ImaginaryContext;

DocumentParser.prototype.imaginary = function() {

    var localctx = new ImaginaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, DocumentParser.RULE_imaginary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 469;
        this.match(DocumentParser.IMAGINARY);
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
    this.ruleIndex = DocumentParser.RULE_moment;
    return this;
}

MomentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MomentContext.prototype.constructor = MomentContext;

MomentContext.prototype.MOMENT = function() {
    return this.getToken(DocumentParser.MOMENT, 0);
};

MomentContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterMoment(this);
	}
};

MomentContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitMoment(this);
	}
};

MomentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitMoment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.MomentContext = MomentContext;

DocumentParser.prototype.moment = function() {

    var localctx = new MomentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, DocumentParser.RULE_moment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 471;
        this.match(DocumentParser.MOMENT);
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

function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.NAME = function() {
    return this.getToken(DocumentParser.NAME, 0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitName(this);
	}
};

NameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.NameContext = NameContext;

DocumentParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, DocumentParser.RULE_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 473;
        this.match(DocumentParser.NAME);
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
    this.ruleIndex = DocumentParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.real = function() {
    return this.getTypedRuleContext(RealContext,0);
};

NumberContext.prototype.imaginary = function() {
    return this.getTypedRuleContext(ImaginaryContext,0);
};

NumberContext.prototype.angle = function() {
    return this.getTypedRuleContext(AngleContext,0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.NumberContext = NumberContext;

DocumentParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, DocumentParser.RULE_number);
    try {
        this.state = 492;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__62:
            this.enterOuterAlt(localctx, 1);
            this.state = 475;
            this.match(DocumentParser.T__62);
            break;
        case DocumentParser.T__63:
            this.enterOuterAlt(localctx, 2);
            this.state = 476;
            this.match(DocumentParser.T__63);
            break;
        case DocumentParser.T__64:
            this.enterOuterAlt(localctx, 3);
            this.state = 477;
            this.match(DocumentParser.T__64);
            break;
        case DocumentParser.REAL:
            this.enterOuterAlt(localctx, 4);
            this.state = 478;
            this.real();
            break;
        case DocumentParser.IMAGINARY:
            this.enterOuterAlt(localctx, 5);
            this.state = 479;
            this.imaginary();
            break;
        case DocumentParser.T__2:
            this.enterOuterAlt(localctx, 6);
            this.state = 480;
            this.match(DocumentParser.T__2);
            this.state = 481;
            this.real();
            this.state = 488;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case DocumentParser.T__5:
                this.state = 482;
                this.match(DocumentParser.T__5);
                this.state = 483;
                this.imaginary();
                break;
            case DocumentParser.T__65:
                this.state = 484;
                this.match(DocumentParser.T__65);
                this.state = 485;
                this.angle();
                this.state = 486;
                this.match(DocumentParser.T__66);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 490;
            this.match(DocumentParser.T__3);
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
    this.ruleIndex = DocumentParser.RULE_percent;
    return this;
}

PercentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PercentContext.prototype.constructor = PercentContext;

PercentContext.prototype.PERCENT = function() {
    return this.getToken(DocumentParser.PERCENT, 0);
};

PercentContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterPercent(this);
	}
};

PercentContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitPercent(this);
	}
};

PercentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitPercent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.PercentContext = PercentContext;

DocumentParser.prototype.percent = function() {

    var localctx = new PercentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, DocumentParser.RULE_percent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 494;
        this.match(DocumentParser.PERCENT);
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
    this.ruleIndex = DocumentParser.RULE_probability;
    return this;
}

ProbabilityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProbabilityContext.prototype.constructor = ProbabilityContext;

ProbabilityContext.prototype.FRACTION = function() {
    return this.getToken(DocumentParser.FRACTION, 0);
};

ProbabilityContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterProbability(this);
	}
};

ProbabilityContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitProbability(this);
	}
};

ProbabilityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitProbability(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.ProbabilityContext = ProbabilityContext;

DocumentParser.prototype.probability = function() {

    var localctx = new ProbabilityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, DocumentParser.RULE_probability);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 496;
        _la = this._input.LA(1);
        if(!(((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (DocumentParser.T__67 - 68)) | (1 << (DocumentParser.T__68 - 68)) | (1 << (DocumentParser.FRACTION - 68)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
    this.ruleIndex = DocumentParser.RULE_real;
    return this;
}

RealContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RealContext.prototype.constructor = RealContext;

RealContext.prototype.REAL = function() {
    return this.getToken(DocumentParser.REAL, 0);
};

RealContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterReal(this);
	}
};

RealContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitReal(this);
	}
};

RealContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitReal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.RealContext = RealContext;

DocumentParser.prototype.real = function() {

    var localctx = new RealContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, DocumentParser.RULE_real);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 498;
        this.match(DocumentParser.REAL);
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
    this.ruleIndex = DocumentParser.RULE_reference;
    return this;
}

ReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReferenceContext.prototype.constructor = ReferenceContext;

ReferenceContext.prototype.RESOURCE = function() {
    return this.getToken(DocumentParser.RESOURCE, 0);
};

ReferenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterReference(this);
	}
};

ReferenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitReference(this);
	}
};

ReferenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitReference(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.ReferenceContext = ReferenceContext;

DocumentParser.prototype.reference = function() {

    var localctx = new ReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, DocumentParser.RULE_reference);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 500;
        this.match(DocumentParser.RESOURCE);
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

function ReservedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_reserved;
    return this;
}

ReservedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReservedContext.prototype.constructor = ReservedContext;

ReservedContext.prototype.RESERVED = function() {
    return this.getToken(DocumentParser.RESERVED, 0);
};

ReservedContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterReserved(this);
	}
};

ReservedContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitReserved(this);
	}
};

ReservedContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitReserved(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.ReservedContext = ReservedContext;

DocumentParser.prototype.reserved = function() {

    var localctx = new ReservedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, DocumentParser.RULE_reserved);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 502;
        this.match(DocumentParser.RESERVED);
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
    this.ruleIndex = DocumentParser.RULE_symbol;
    return this;
}

SymbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolContext.prototype.constructor = SymbolContext;

SymbolContext.prototype.SYMBOL = function() {
    return this.getToken(DocumentParser.SYMBOL, 0);
};

SymbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterSymbol(this);
	}
};

SymbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitSymbol(this);
	}
};

SymbolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitSymbol(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.SymbolContext = SymbolContext;

DocumentParser.prototype.symbol = function() {

    var localctx = new SymbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, DocumentParser.RULE_symbol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 504;
        this.match(DocumentParser.SYMBOL);
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
    this.ruleIndex = DocumentParser.RULE_tag;
    return this;
}

TagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagContext.prototype.constructor = TagContext;

TagContext.prototype.TAG = function() {
    return this.getToken(DocumentParser.TAG, 0);
};

TagContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterTag(this);
	}
};

TagContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitTag(this);
	}
};

TagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitTag(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.TagContext = TagContext;

DocumentParser.prototype.tag = function() {

    var localctx = new TagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, DocumentParser.RULE_tag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 506;
        this.match(DocumentParser.TAG);
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
    this.ruleIndex = DocumentParser.RULE_text;
    return this;
}

TextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextContext.prototype.constructor = TextContext;

TextContext.prototype.TEXT = function() {
    return this.getToken(DocumentParser.TEXT, 0);
};

TextContext.prototype.TEXT_BLOCK = function() {
    return this.getToken(DocumentParser.TEXT_BLOCK, 0);
};

TextContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterText(this);
	}
};

TextContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitText(this);
	}
};

TextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitText(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.TextContext = TextContext;

DocumentParser.prototype.text = function() {

    var localctx = new TextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, DocumentParser.RULE_text);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 508;
        _la = this._input.LA(1);
        if(!(_la===DocumentParser.TEXT_BLOCK || _la===DocumentParser.TEXT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
    this.ruleIndex = DocumentParser.RULE_version;
    return this;
}

VersionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionContext.prototype.constructor = VersionContext;

VersionContext.prototype.VERSION = function() {
    return this.getToken(DocumentParser.VERSION, 0);
};

VersionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterVersion(this);
	}
};

VersionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitVersion(this);
	}
};

VersionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitVersion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.VersionContext = VersionContext;

DocumentParser.prototype.version = function() {

    var localctx = new VersionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, DocumentParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 510;
        this.match(DocumentParser.VERSION);
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


DocumentParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 34:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

DocumentParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);
		case 1:
			return this.precpred(this._ctx, 8);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 4);
		case 4:
			return this.precpred(this._ctx, 2);
		case 5:
			return this.precpred(this._ctx, 1);
		case 6:
			return this.precpred(this._ctx, 12);
		case 7:
			return this.precpred(this._ctx, 11);
		case 8:
			return this.precpred(this._ctx, 9);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.DocumentParser = DocumentParser;
