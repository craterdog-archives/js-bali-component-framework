// Generated from grammar/BaliComponent.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BaliComponentListener = require('./BaliComponentListener').BaliComponentListener;
var BaliComponentVisitor = require('./BaliComponentVisitor').BaliComponentVisitor;

var grammarFileName = "BaliComponent.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003W\u01db\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
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
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0003\u0002\u0003\u0002",
    "\u0005\u0002q\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "v\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006\u0083\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0007\b\u008c\n\b\f\b\u000e\b\u008f\u000b",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u0095\n\b\f\b\u000e\b\u0098",
    "\u000b\b\u0003\b\u0005\b\u009b\n\b\u0003\t\u0003\t\u0003\t\u0007\t\u00a0",
    "\n\t\f\t\u000e\t\u00a3\u000b\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007",
    "\t\u00a9\n\t\f\t\u000e\t\u00ac\u000b\t\u0003\t\u0005\t\u00af\n\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0007\f\u00bc\n\f\f\f\u000e\f\u00bf\u000b",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u00c5\n\f\f\f\u000e\f\u00c8",
    "\u000b\f\u0003\f\u0005\f\u00cb\n\f\u0003\r\u0003\r\u0007\r\u00cf\n\r",
    "\f\r\u000e\r\u00d2\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u00e4\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011",
    "\u00f4\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u0122\n\u0019",
    "\f\u0019\u000e\u0019\u0125\u000b\u0019\u0003\u0019\u0003\u0019\u0005",
    "\u0019\u0129\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0006\u001a\u0132\n\u001a\r\u001a",
    "\u000e\u001a\u0133\u0003\u001a\u0003\u001a\u0005\u001a\u0138\n\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b",
    "\u013f\n\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0005\u001f\u0152\n\u001f\u0003 \u0003 \u0003 \u0003!\u0003!",
    "\u0005!\u0159\n!\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0005#\u0172\n#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0007#\u018c\n#\f#\u000e#\u018f\u000b#\u0003$\u0003",
    "$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0005(\u01a8\n(\u0003)\u0003)\u0003)\u0003*\u0003*\u0003",
    "+\u0003+\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003.\u0005.\u01bf\n.\u0003/\u0003/\u0003",
    "/\u00030\u00030\u00030\u00050\u01c7\n0\u00031\u00031\u00032\u00032\u0003",
    "3\u00033\u00034\u00034\u00035\u00035\u00055\u01d3\n5\u00036\u00036\u0005",
    "6\u01d7\n6\u00037\u00037\u00037\u0002\u0003D8\u0002\u0004\u0006\b\n",
    "\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02",
    "468:<>@BDFHJLNPRTVXZ\\^`bdfhjl\u0002\b\u0003\u0002-/\u0003\u0002-1\u0003",
    "\u000237\u0003\u00029<\u0004\u0002\b\bAA\u0004\u0002EELL\u0002\u01f0",
    "\u0002n\u0003\u0002\u0002\u0002\u0004u\u0003\u0002\u0002\u0002\u0006",
    "w\u0003\u0002\u0002\u0002\b{\u0003\u0002\u0002\u0002\n\u0082\u0003\u0002",
    "\u0002\u0002\f\u0084\u0003\u0002\u0002\u0002\u000e\u009a\u0003\u0002",
    "\u0002\u0002\u0010\u00ae\u0003\u0002\u0002\u0002\u0012\u00b0\u0003\u0002",
    "\u0002\u0002\u0014\u00b4\u0003\u0002\u0002\u0002\u0016\u00ca\u0003\u0002",
    "\u0002\u0002\u0018\u00cc\u0003\u0002\u0002\u0002\u001a\u00e3\u0003\u0002",
    "\u0002\u0002\u001c\u00e5\u0003\u0002\u0002\u0002\u001e\u00ec\u0003\u0002",
    "\u0002\u0002 \u00f3\u0003\u0002\u0002\u0002\"\u00f7\u0003\u0002\u0002",
    "\u0002$\u00fc\u0003\u0002\u0002\u0002&\u0101\u0003\u0002\u0002\u0002",
    "(\u0104\u0003\u0002\u0002\u0002*\u0109\u0003\u0002\u0002\u0002,\u010c",
    "\u0003\u0002\u0002\u0002.\u0111\u0003\u0002\u0002\u00020\u0117\u0003",
    "\u0002\u0002\u00022\u012a\u0003\u0002\u0002\u00024\u0139\u0003\u0002",
    "\u0002\u00026\u0144\u0003\u0002\u0002\u00028\u0149\u0003\u0002\u0002",
    "\u0002:\u014c\u0003\u0002\u0002\u0002<\u014f\u0003\u0002\u0002\u0002",
    ">\u0153\u0003\u0002\u0002\u0002@\u0158\u0003\u0002\u0002\u0002B\u015a",
    "\u0003\u0002\u0002\u0002D\u0171\u0003\u0002\u0002\u0002F\u0190\u0003",
    "\u0002\u0002\u0002H\u0192\u0003\u0002\u0002\u0002J\u0194\u0003\u0002",
    "\u0002\u0002L\u0196\u0003\u0002\u0002\u0002N\u01a7\u0003\u0002\u0002",
    "\u0002P\u01a9\u0003\u0002\u0002\u0002R\u01ac\u0003\u0002\u0002\u0002",
    "T\u01ae\u0003\u0002\u0002\u0002V\u01b0\u0003\u0002\u0002\u0002X\u01b2",
    "\u0003\u0002\u0002\u0002Z\u01be\u0003\u0002\u0002\u0002\\\u01c0\u0003",
    "\u0002\u0002\u0002^\u01c6\u0003\u0002\u0002\u0002`\u01c8\u0003\u0002",
    "\u0002\u0002b\u01ca\u0003\u0002\u0002\u0002d\u01cc\u0003\u0002\u0002",
    "\u0002f\u01ce\u0003\u0002\u0002\u0002h\u01d2\u0003\u0002\u0002\u0002",
    "j\u01d6\u0003\u0002\u0002\u0002l\u01d8\u0003\u0002\u0002\u0002np\u0005",
    "\u0004\u0003\u0002oq\u0005\b\u0005\u0002po\u0003\u0002\u0002\u0002p",
    "q\u0003\u0002\u0002\u0002q\u0003\u0003\u0002\u0002\u0002rv\u0005N(\u0002",
    "sv\u0005\u0006\u0004\u0002tv\u0005\u0014\u000b\u0002ur\u0003\u0002\u0002",
    "\u0002us\u0003\u0002\u0002\u0002ut\u0003\u0002\u0002\u0002v\u0005\u0003",
    "\u0002\u0002\u0002wx\u0007\u0003\u0002\u0002xy\u0005\n\u0006\u0002y",
    "z\u0007\u0004\u0002\u0002z\u0007\u0003\u0002\u0002\u0002{|\u0007\u0005",
    "\u0002\u0002|}\u0005\n\u0006\u0002}~\u0007\u0006\u0002\u0002~\t\u0003",
    "\u0002\u0002\u0002\u007f\u0083\u0005\f\u0007\u0002\u0080\u0083\u0005",
    "\u000e\b\u0002\u0081\u0083\u0005\u0010\t\u0002\u0082\u007f\u0003\u0002",
    "\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0082\u0081\u0003\u0002",
    "\u0002\u0002\u0083\u000b\u0003\u0002\u0002\u0002\u0084\u0085\u0005D",
    "#\u0002\u0085\u0086\u0007\u0007\u0002\u0002\u0086\u0087\u0005D#\u0002",
    "\u0087\r\u0003\u0002\u0002\u0002\u0088\u008d\u0005D#\u0002\u0089\u008a",
    "\u0007\b\u0002\u0002\u008a\u008c\u0005D#\u0002\u008b\u0089\u0003\u0002",
    "\u0002\u0002\u008c\u008f\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002",
    "\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u009b\u0003\u0002",
    "\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u0090\u0096\u0007V",
    "\u0002\u0002\u0091\u0092\u0005D#\u0002\u0092\u0093\u0007V\u0002\u0002",
    "\u0093\u0095\u0003\u0002\u0002\u0002\u0094\u0091\u0003\u0002\u0002\u0002",
    "\u0095\u0098\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002",
    "\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u009b\u0003\u0002\u0002\u0002",
    "\u0098\u0096\u0003\u0002\u0002\u0002\u0099\u009b\u0003\u0002\u0002\u0002",
    "\u009a\u0088\u0003\u0002\u0002\u0002\u009a\u0090\u0003\u0002\u0002\u0002",
    "\u009a\u0099\u0003\u0002\u0002\u0002\u009b\u000f\u0003\u0002\u0002\u0002",
    "\u009c\u00a1\u0005\u0012\n\u0002\u009d\u009e\u0007\b\u0002\u0002\u009e",
    "\u00a0\u0005\u0012\n\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u00a0",
    "\u00a3\u0003\u0002\u0002\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a1",
    "\u00a2\u0003\u0002\u0002\u0002\u00a2\u00af\u0003\u0002\u0002\u0002\u00a3",
    "\u00a1\u0003\u0002\u0002\u0002\u00a4\u00aa\u0007V\u0002\u0002\u00a5",
    "\u00a6\u0005\u0012\n\u0002\u00a6\u00a7\u0007V\u0002\u0002\u00a7\u00a9",
    "\u0003\u0002\u0002\u0002\u00a8\u00a5\u0003\u0002\u0002\u0002\u00a9\u00ac",
    "\u0003\u0002\u0002\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab",
    "\u0003\u0002\u0002\u0002\u00ab\u00af\u0003\u0002\u0002\u0002\u00ac\u00aa",
    "\u0003\u0002\u0002\u0002\u00ad\u00af\u0007\t\u0002\u0002\u00ae\u009c",
    "\u0003\u0002\u0002\u0002\u00ae\u00a4\u0003\u0002\u0002\u0002\u00ae\u00ad",
    "\u0003\u0002\u0002\u0002\u00af\u0011\u0003\u0002\u0002\u0002\u00b0\u00b1",
    "\u0005\u0002\u0002\u0002\u00b1\u00b2\u0007\t\u0002\u0002\u00b2\u00b3",
    "\u0005D#\u0002\u00b3\u0013\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007",
    "\n\u0002\u0002\u00b5\u00b6\u0005\u0016\f\u0002\u00b6\u00b7\u0007\u000b",
    "\u0002\u0002\u00b7\u0015\u0003\u0002\u0002\u0002\u00b8\u00bd\u0005\u0018",
    "\r\u0002\u00b9\u00ba\u0007\f\u0002\u0002\u00ba\u00bc\u0005\u0018\r\u0002",
    "\u00bb\u00b9\u0003\u0002\u0002\u0002\u00bc\u00bf\u0003\u0002\u0002\u0002",
    "\u00bd\u00bb\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002",
    "\u00be\u00cb\u0003\u0002\u0002\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002",
    "\u00c0\u00c6\u0007V\u0002\u0002\u00c1\u00c2\u0005\u0018\r\u0002\u00c2",
    "\u00c3\u0007V\u0002\u0002\u00c3\u00c5\u0003\u0002\u0002\u0002\u00c4",
    "\u00c1\u0003\u0002\u0002\u0002\u00c5\u00c8\u0003\u0002\u0002\u0002\u00c6",
    "\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7",
    "\u00cb\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002\u00c9",
    "\u00cb\u0003\u0002\u0002\u0002\u00ca\u00b8\u0003\u0002\u0002\u0002\u00ca",
    "\u00c0\u0003\u0002\u0002\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002\u00cb",
    "\u0017\u0003\u0002\u0002\u0002\u00cc\u00d0\u0005\u001a\u000e\u0002\u00cd",
    "\u00cf\u0005\u001c\u000f\u0002\u00ce\u00cd\u0003\u0002\u0002\u0002\u00cf",
    "\u00d2\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d0",
    "\u00d1\u0003\u0002\u0002\u0002\u00d1\u0019\u0003\u0002\u0002\u0002\u00d2",
    "\u00d0\u0003\u0002\u0002\u0002\u00d3\u00e4\u0005 \u0011\u0002\u00d4",
    "\u00e4\u0005\"\u0012\u0002\u00d5\u00e4\u0005$\u0013\u0002\u00d6\u00e4",
    "\u0005&\u0014\u0002\u00d7\u00e4\u0005(\u0015\u0002\u00d8\u00e4\u0005",
    "*\u0016\u0002\u00d9\u00e4\u0005,\u0017\u0002\u00da\u00e4\u0005.\u0018",
    "\u0002\u00db\u00e4\u00050\u0019\u0002\u00dc\u00e4\u00052\u001a\u0002",
    "\u00dd\u00e4\u00054\u001b\u0002\u00de\u00e4\u00056\u001c\u0002\u00df",
    "\u00e4\u00058\u001d\u0002\u00e0\u00e4\u0005:\u001e\u0002\u00e1\u00e4",
    "\u0005<\u001f\u0002\u00e2\u00e4\u0005> \u0002\u00e3\u00d3\u0003\u0002",
    "\u0002\u0002\u00e3\u00d4\u0003\u0002\u0002\u0002\u00e3\u00d5\u0003\u0002",
    "\u0002\u0002\u00e3\u00d6\u0003\u0002\u0002\u0002\u00e3\u00d7\u0003\u0002",
    "\u0002\u0002\u00e3\u00d8\u0003\u0002\u0002\u0002\u00e3\u00d9\u0003\u0002",
    "\u0002\u0002\u00e3\u00da\u0003\u0002\u0002\u0002\u00e3\u00db\u0003\u0002",
    "\u0002\u0002\u00e3\u00dc\u0003\u0002\u0002\u0002\u00e3\u00dd\u0003\u0002",
    "\u0002\u0002\u00e3\u00de\u0003\u0002\u0002\u0002\u00e3\u00df\u0003\u0002",
    "\u0002\u0002\u00e3\u00e0\u0003\u0002\u0002\u0002\u00e3\u00e1\u0003\u0002",
    "\u0002\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e4\u001b\u0003\u0002",
    "\u0002\u0002\u00e5\u00e6\u0007\r\u0002\u0002\u00e6\u00e7\u0005d3\u0002",
    "\u00e7\u00e8\u0007\u000e\u0002\u0002\u00e8\u00e9\u0005D#\u0002\u00e9",
    "\u00ea\u0007\u000f\u0002\u0002\u00ea\u00eb\u0005\u001e\u0010\u0002\u00eb",
    "\u001d\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007\n\u0002\u0002\u00ed",
    "\u00ee\u0005\u0016\f\u0002\u00ee\u00ef\u0007\u000b\u0002\u0002\u00ef",
    "\u001f\u0003\u0002\u0002\u0002\u00f0\u00f1\u0005@!\u0002\u00f1\u00f2",
    "\u0007\u0010\u0002\u0002\u00f2\u00f4\u0003\u0002\u0002\u0002\u00f3\u00f0",
    "\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4\u00f5",
    "\u0003\u0002\u0002\u0002\u00f5\u00f6\u0005D#\u0002\u00f6!\u0003\u0002",
    "\u0002\u0002\u00f7\u00f8\u0007\u0011\u0002\u0002\u00f8\u00f9\u0005@",
    "!\u0002\u00f9\u00fa\u0007\u0012\u0002\u0002\u00fa\u00fb\u0005D#\u0002",
    "\u00fb#\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007\u0013\u0002\u0002",
    "\u00fd\u00fe\u0005D#\u0002\u00fe\u00ff\u0007\u0014\u0002\u0002\u00ff",
    "\u0100\u0005D#\u0002\u0100%\u0003\u0002\u0002\u0002\u0101\u0102\u0007",
    "\u0015\u0002\u0002\u0102\u0103\u0005D#\u0002\u0103\'\u0003\u0002\u0002",
    "\u0002\u0104\u0105\u0007\u0016\u0002\u0002\u0105\u0106\u0005D#\u0002",
    "\u0106\u0107\u0007\u0014\u0002\u0002\u0107\u0108\u0005D#\u0002\u0108",
    ")\u0003\u0002\u0002\u0002\u0109\u010a\u0007\u0017\u0002\u0002\u010a",
    "\u010b\u0005D#\u0002\u010b+\u0003\u0002\u0002\u0002\u010c\u010d\u0007",
    "\u0018\u0002\u0002\u010d\u010e\u0005D#\u0002\u010e\u010f\u0007\u0019",
    "\u0002\u0002\u010f\u0110\u0005D#\u0002\u0110-\u0003\u0002\u0002\u0002",
    "\u0111\u0112\u0007\u001a\u0002\u0002\u0112\u0113\u0007\u001b\u0002\u0002",
    "\u0113\u0114\u0005@!\u0002\u0114\u0115\u0007\u0012\u0002\u0002\u0115",
    "\u0116\u0005D#\u0002\u0116/\u0003\u0002\u0002\u0002\u0117\u0118\u0007",
    "\u001c\u0002\u0002\u0118\u0119\u0005D#\u0002\u0119\u011a\u0007\u001d",
    "\u0002\u0002\u011a\u0123\u0005\u001e\u0010\u0002\u011b\u011c\u0007\u001e",
    "\u0002\u0002\u011c\u011d\u0007\u001c\u0002\u0002\u011d\u011e\u0005D",
    "#\u0002\u011e\u011f\u0007\u001d\u0002\u0002\u011f\u0120\u0005\u001e",
    "\u0010\u0002\u0120\u0122\u0003\u0002\u0002\u0002\u0121\u011b\u0003\u0002",
    "\u0002\u0002\u0122\u0125\u0003\u0002\u0002\u0002\u0123\u0121\u0003\u0002",
    "\u0002\u0002\u0123\u0124\u0003\u0002\u0002\u0002\u0124\u0128\u0003\u0002",
    "\u0002\u0002\u0125\u0123\u0003\u0002\u0002\u0002\u0126\u0127\u0007\u001e",
    "\u0002\u0002\u0127\u0129\u0005\u001e\u0010\u0002\u0128\u0126\u0003\u0002",
    "\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002\u01291\u0003\u0002",
    "\u0002\u0002\u012a\u012b\u0007\u001f\u0002\u0002\u012b\u012c\u0005D",
    "#\u0002\u012c\u0131\u0007\u0012\u0002\u0002\u012d\u012e\u0005D#\u0002",
    "\u012e\u012f\u0007 \u0002\u0002\u012f\u0130\u0005\u001e\u0010\u0002",
    "\u0130\u0132\u0003\u0002\u0002\u0002\u0131\u012d\u0003\u0002\u0002\u0002",
    "\u0132\u0133\u0003\u0002\u0002\u0002\u0133\u0131\u0003\u0002\u0002\u0002",
    "\u0133\u0134\u0003\u0002\u0002\u0002\u0134\u0137\u0003\u0002\u0002\u0002",
    "\u0135\u0136\u0007\u001e\u0002\u0002\u0136\u0138\u0005\u001e\u0010\u0002",
    "\u0137\u0135\u0003\u0002\u0002\u0002\u0137\u0138\u0003\u0002\u0002\u0002",
    "\u01383\u0003\u0002\u0002\u0002\u0139\u013e\u0007\u000f\u0002\u0002",
    "\u013a\u013b\u0007!\u0002\u0002\u013b\u013c\u0005d3\u0002\u013c\u013d",
    "\u0007\"\u0002\u0002\u013d\u013f\u0003\u0002\u0002\u0002\u013e\u013a",
    "\u0003\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002\u013f\u0140",
    "\u0003\u0002\u0002\u0002\u0140\u0141\u0005D#\u0002\u0141\u0142\u0007",
    " \u0002\u0002\u0142\u0143\u0005\u001e\u0010\u0002\u01435\u0003\u0002",
    "\u0002\u0002\u0144\u0145\u0007#\u0002\u0002\u0145\u0146\u0005D#\u0002",
    "\u0146\u0147\u0007 \u0002\u0002\u0147\u0148\u0005\u001e\u0010\u0002",
    "\u01487\u0003\u0002\u0002\u0002\u0149\u014a\u0007$\u0002\u0002\u014a",
    "\u014b\u0007%\u0002\u0002\u014b9\u0003\u0002\u0002\u0002\u014c\u014d",
    "\u0007&\u0002\u0002\u014d\u014e\u0007%\u0002\u0002\u014e;\u0003\u0002",
    "\u0002\u0002\u014f\u0151\u0007\'\u0002\u0002\u0150\u0152\u0005D#\u0002",
    "\u0151\u0150\u0003\u0002\u0002\u0002\u0151\u0152\u0003\u0002\u0002\u0002",
    "\u0152=\u0003\u0002\u0002\u0002\u0153\u0154\u0007(\u0002\u0002\u0154",
    "\u0155\u0005D#\u0002\u0155?\u0003\u0002\u0002\u0002\u0156\u0159\u0005",
    "d3\u0002\u0157\u0159\u0005B\"\u0002\u0158\u0156\u0003\u0002\u0002\u0002",
    "\u0158\u0157\u0003\u0002\u0002\u0002\u0159A\u0003\u0002\u0002\u0002",
    "\u015a\u015b\u0005F$\u0002\u015b\u015c\u0005L\'\u0002\u015cC\u0003\u0002",
    "\u0002\u0002\u015d\u015e\b#\u0001\u0002\u015e\u0172\u0005\u0002\u0002",
    "\u0002\u015f\u0172\u0005F$\u0002\u0160\u0161\u0005H%\u0002\u0161\u0162",
    "\u0005\b\u0005\u0002\u0162\u0172\u0003\u0002\u0002\u0002\u0163\u0164",
    "\u0007\u0005\u0002\u0002\u0164\u0165\u0005D#\u0002\u0165\u0166\u0007",
    "\u0006\u0002\u0002\u0166\u0172\u0003\u0002\u0002\u0002\u0167\u0168\u0007",
    ")\u0002\u0002\u0168\u0172\u0005D#\u000e\u0169\u016a\t\u0002\u0002\u0002",
    "\u016a\u0172\u0005D#\t\u016b\u016c\u00072\u0002\u0002\u016c\u016d\u0005",
    "D#\u0002\u016d\u016e\u00072\u0002\u0002\u016e\u0172\u0003\u0002\u0002",
    "\u0002\u016f\u0170\u00078\u0002\u0002\u0170\u0172\u0005D#\u0005\u0171",
    "\u015d\u0003\u0002\u0002\u0002\u0171\u015f\u0003\u0002\u0002\u0002\u0171",
    "\u0160\u0003\u0002\u0002\u0002\u0171\u0163\u0003\u0002\u0002\u0002\u0171",
    "\u0167\u0003\u0002\u0002\u0002\u0171\u0169\u0003\u0002\u0002\u0002\u0171",
    "\u016b\u0003\u0002\u0002\u0002\u0171\u016f\u0003\u0002\u0002\u0002\u0172",
    "\u018d\u0003\u0002\u0002\u0002\u0173\u0174\f\n\u0002\u0002\u0174\u0175",
    "\u0007,\u0002\u0002\u0175\u018c\u0005D#\n\u0176\u0177\f\b\u0002\u0002",
    "\u0177\u0178\t\u0003\u0002\u0002\u0178\u018c\u0005D#\t\u0179\u017a\f",
    "\u0006\u0002\u0002\u017a\u017b\t\u0004\u0002\u0002\u017b\u018c\u0005",
    "D#\u0007\u017c\u017d\f\u0004\u0002\u0002\u017d\u017e\t\u0005\u0002\u0002",
    "\u017e\u018c\u0005D#\u0005\u017f\u0180\f\u0003\u0002\u0002\u0180\u0181",
    "\u0007=\u0002\u0002\u0181\u018c\u0005D#\u0004\u0182\u0183\f\r\u0002",
    "\u0002\u0183\u0184\u0007*\u0002\u0002\u0184\u0185\u0005J&\u0002\u0185",
    "\u0186\u0005\b\u0005\u0002\u0186\u018c\u0003\u0002\u0002\u0002\u0187",
    "\u0188\f\f\u0002\u0002\u0188\u018c\u0005L\'\u0002\u0189\u018a\f\u000b",
    "\u0002\u0002\u018a\u018c\u0007+\u0002\u0002\u018b\u0173\u0003\u0002",
    "\u0002\u0002\u018b\u0176\u0003\u0002\u0002\u0002\u018b\u0179\u0003\u0002",
    "\u0002\u0002\u018b\u017c\u0003\u0002\u0002\u0002\u018b\u017f\u0003\u0002",
    "\u0002\u0002\u018b\u0182\u0003\u0002\u0002\u0002\u018b\u0187\u0003\u0002",
    "\u0002\u0002\u018b\u0189\u0003\u0002\u0002\u0002\u018c\u018f\u0003\u0002",
    "\u0002\u0002\u018d\u018b\u0003\u0002\u0002\u0002\u018d\u018e\u0003\u0002",
    "\u0002\u0002\u018eE\u0003\u0002\u0002\u0002\u018f\u018d\u0003\u0002",
    "\u0002\u0002\u0190\u0191\u0007U\u0002\u0002\u0191G\u0003\u0002\u0002",
    "\u0002\u0192\u0193\u0007U\u0002\u0002\u0193I\u0003\u0002\u0002\u0002",
    "\u0194\u0195\u0007U\u0002\u0002\u0195K\u0003\u0002\u0002\u0002\u0196",
    "\u0197\u0007\u0003\u0002\u0002\u0197\u0198\u0005\u000e\b\u0002\u0198",
    "\u0199\u0007\u0004\u0002\u0002\u0199M\u0003\u0002\u0002\u0002\u019a",
    "\u01a8\u0005P)\u0002\u019b\u01a8\u0005R*\u0002\u019c\u01a8\u0005T+\u0002",
    "\u019d\u01a8\u0005X-\u0002\u019e\u01a8\u0005Z.\u0002\u019f\u01a8\u0005",
    "\\/\u0002\u01a0\u01a8\u0005^0\u0002\u01a1\u01a8\u0005b2\u0002\u01a2",
    "\u01a8\u0005d3\u0002\u01a3\u01a8\u0005f4\u0002\u01a4\u01a8\u0005h5\u0002",
    "\u01a5\u01a8\u0005j6\u0002\u01a6\u01a8\u0005l7\u0002\u01a7\u019a\u0003",
    "\u0002\u0002\u0002\u01a7\u019b\u0003\u0002\u0002\u0002\u01a7\u019c\u0003",
    "\u0002\u0002\u0002\u01a7\u019d\u0003\u0002\u0002\u0002\u01a7\u019e\u0003",
    "\u0002\u0002\u0002\u01a7\u019f\u0003\u0002\u0002\u0002\u01a7\u01a0\u0003",
    "\u0002\u0002\u0002\u01a7\u01a1\u0003\u0002\u0002\u0002\u01a7\u01a2\u0003",
    "\u0002\u0002\u0002\u01a7\u01a3\u0003\u0002\u0002\u0002\u01a7\u01a4\u0003",
    "\u0002\u0002\u0002\u01a7\u01a5\u0003\u0002\u0002\u0002\u01a7\u01a6\u0003",
    "\u0002\u0002\u0002\u01a8O\u0003\u0002\u0002\u0002\u01a9\u01aa\u0007",
    ">\u0002\u0002\u01aa\u01ab\u0005`1\u0002\u01abQ\u0003\u0002\u0002\u0002",
    "\u01ac\u01ad\u0007R\u0002\u0002\u01adS\u0003\u0002\u0002\u0002\u01ae",
    "\u01af\u0007O\u0002\u0002\u01afU\u0003\u0002\u0002\u0002\u01b0\u01b1",
    "\u0007M\u0002\u0002\u01b1W\u0003\u0002\u0002\u0002\u01b2\u01b3\u0007",
    "N\u0002\u0002\u01b3Y\u0003\u0002\u0002\u0002\u01b4\u01bf\u0007?\u0002",
    "\u0002\u01b5\u01bf\u0007@\u0002\u0002\u01b6\u01bf\u0005`1\u0002\u01b7",
    "\u01bf\u0005V,\u0002\u01b8\u01b9\u0007\u0005\u0002\u0002\u01b9\u01ba",
    "\u0005`1\u0002\u01ba\u01bb\t\u0006\u0002\u0002\u01bb\u01bc\u0005V,\u0002",
    "\u01bc\u01bd\u0007\u0006\u0002\u0002\u01bd\u01bf\u0003\u0002\u0002\u0002",
    "\u01be\u01b4\u0003\u0002\u0002\u0002\u01be\u01b5\u0003\u0002\u0002\u0002",
    "\u01be\u01b6\u0003\u0002\u0002\u0002\u01be\u01b7\u0003\u0002\u0002\u0002",
    "\u01be\u01b8\u0003\u0002\u0002\u0002\u01bf[\u0003\u0002\u0002\u0002",
    "\u01c0\u01c1\u0005`1\u0002\u01c1\u01c2\u0007B\u0002\u0002\u01c2]\u0003",
    "\u0002\u0002\u0002\u01c3\u01c7\u0007C\u0002\u0002\u01c4\u01c7\u0007",
    "K\u0002\u0002\u01c5\u01c7\u0007D\u0002\u0002\u01c6\u01c3\u0003\u0002",
    "\u0002\u0002\u01c6\u01c4\u0003\u0002\u0002\u0002\u01c6\u01c5\u0003\u0002",
    "\u0002\u0002\u01c7_\u0003\u0002\u0002\u0002\u01c8\u01c9\t\u0007\u0002",
    "\u0002\u01c9a\u0003\u0002\u0002\u0002\u01ca\u01cb\u0007P\u0002\u0002",
    "\u01cbc\u0003\u0002\u0002\u0002\u01cc\u01cd\u0007J\u0002\u0002\u01cd",
    "e\u0003\u0002\u0002\u0002\u01ce\u01cf\u0007I\u0002\u0002\u01cfg\u0003",
    "\u0002\u0002\u0002\u01d0\u01d3\u0007F\u0002\u0002\u01d1\u01d3\u0007",
    "G\u0002\u0002\u01d2\u01d0\u0003\u0002\u0002\u0002\u01d2\u01d1\u0003",
    "\u0002\u0002\u0002\u01d3i\u0003\u0002\u0002\u0002\u01d4\u01d7\u0007",
    "T\u0002\u0002\u01d5\u01d7\u0007S\u0002\u0002\u01d6\u01d4\u0003\u0002",
    "\u0002\u0002\u01d6\u01d5\u0003\u0002\u0002\u0002\u01d7k\u0003\u0002",
    "\u0002\u0002\u01d8\u01d9\u0007Q\u0002\u0002\u01d9m\u0003\u0002\u0002",
    "\u0002 pu\u0082\u008d\u0096\u009a\u00a1\u00aa\u00ae\u00bd\u00c6\u00ca",
    "\u00d0\u00e3\u00f3\u0123\u0128\u0133\u0137\u013e\u0151\u0158\u0171\u018b",
    "\u018d\u01a7\u01be\u01c6\u01d2\u01d6"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'['", "']'", "'('", "')'", "'..'", "','", "':'", 
                     "'{'", "'}'", "';'", "'handle'", "'matching'", "'with'", 
                     "':='", "'checkout'", "'from'", "'save'", "'to'", "'discard'", 
                     "'commit'", "'publish'", "'queue'", "'on'", "'wait'", 
                     "'for'", "'if'", "'then'", "'else'", "'select'", "'do'", 
                     "'each'", "'in'", "'while'", "'continue'", "'loop'", 
                     "'break'", "'return'", "'throw'", "'@'", "'.'", "'!'", 
                     "'^'", "'-'", "'/'", "'*'", "'//'", "'+'", "'|'", "'<'", 
                     "'='", "'>'", "'is'", "'matches'", "'not'", "'and'", 
                     "'sans'", "'xor'", "'or'", "'?'", "'~'", "'undefined'", 
                     "'infinity'", "'e^~'", "'%'", "'false'", "'true'", 
                     "'0'", "'none'", "'any'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "SHELL", 
                      "TAG", "SYMBOL", "FRACTION", "REAL", "IMAGINARY", 
                      "MOMENT", "DURATION", "RESOURCE", "VERSION", "BINARY", 
                      "TEXT_BLOCK", "TEXT", "IDENTIFIER", "NEWLINE", "SPACE" ];

var ruleNames =  [ "component", "value", "structure", "parameters", "collection", 
                   "range", "list", "catalog", "association", "source", 
                   "procedure", "statement", "mainClause", "handleClause", 
                   "block", "evaluateClause", "checkoutClause", "saveClause", 
                   "discardClause", "commitClause", "publishClause", "queueClause", 
                   "waitClause", "ifClause", "selectClause", "withClause", 
                   "whileClause", "continueClause", "breakClause", "returnClause", 
                   "throwClause", "recipient", "subcomponent", "expression", 
                   "variable", "funxtion", "message", "indices", "element", 
                   "angle", "binary", "duration", "imaginary", "moment", 
                   "number", "percent", "probability", "real", "reference", 
                   "symbol", "tag", "template", "text", "version" ];

function BaliComponentParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

BaliComponentParser.prototype = Object.create(antlr4.Parser.prototype);
BaliComponentParser.prototype.constructor = BaliComponentParser;

Object.defineProperty(BaliComponentParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

BaliComponentParser.EOF = antlr4.Token.EOF;
BaliComponentParser.T__0 = 1;
BaliComponentParser.T__1 = 2;
BaliComponentParser.T__2 = 3;
BaliComponentParser.T__3 = 4;
BaliComponentParser.T__4 = 5;
BaliComponentParser.T__5 = 6;
BaliComponentParser.T__6 = 7;
BaliComponentParser.T__7 = 8;
BaliComponentParser.T__8 = 9;
BaliComponentParser.T__9 = 10;
BaliComponentParser.T__10 = 11;
BaliComponentParser.T__11 = 12;
BaliComponentParser.T__12 = 13;
BaliComponentParser.T__13 = 14;
BaliComponentParser.T__14 = 15;
BaliComponentParser.T__15 = 16;
BaliComponentParser.T__16 = 17;
BaliComponentParser.T__17 = 18;
BaliComponentParser.T__18 = 19;
BaliComponentParser.T__19 = 20;
BaliComponentParser.T__20 = 21;
BaliComponentParser.T__21 = 22;
BaliComponentParser.T__22 = 23;
BaliComponentParser.T__23 = 24;
BaliComponentParser.T__24 = 25;
BaliComponentParser.T__25 = 26;
BaliComponentParser.T__26 = 27;
BaliComponentParser.T__27 = 28;
BaliComponentParser.T__28 = 29;
BaliComponentParser.T__29 = 30;
BaliComponentParser.T__30 = 31;
BaliComponentParser.T__31 = 32;
BaliComponentParser.T__32 = 33;
BaliComponentParser.T__33 = 34;
BaliComponentParser.T__34 = 35;
BaliComponentParser.T__35 = 36;
BaliComponentParser.T__36 = 37;
BaliComponentParser.T__37 = 38;
BaliComponentParser.T__38 = 39;
BaliComponentParser.T__39 = 40;
BaliComponentParser.T__40 = 41;
BaliComponentParser.T__41 = 42;
BaliComponentParser.T__42 = 43;
BaliComponentParser.T__43 = 44;
BaliComponentParser.T__44 = 45;
BaliComponentParser.T__45 = 46;
BaliComponentParser.T__46 = 47;
BaliComponentParser.T__47 = 48;
BaliComponentParser.T__48 = 49;
BaliComponentParser.T__49 = 50;
BaliComponentParser.T__50 = 51;
BaliComponentParser.T__51 = 52;
BaliComponentParser.T__52 = 53;
BaliComponentParser.T__53 = 54;
BaliComponentParser.T__54 = 55;
BaliComponentParser.T__55 = 56;
BaliComponentParser.T__56 = 57;
BaliComponentParser.T__57 = 58;
BaliComponentParser.T__58 = 59;
BaliComponentParser.T__59 = 60;
BaliComponentParser.T__60 = 61;
BaliComponentParser.T__61 = 62;
BaliComponentParser.T__62 = 63;
BaliComponentParser.T__63 = 64;
BaliComponentParser.T__64 = 65;
BaliComponentParser.T__65 = 66;
BaliComponentParser.T__66 = 67;
BaliComponentParser.T__67 = 68;
BaliComponentParser.T__68 = 69;
BaliComponentParser.SHELL = 70;
BaliComponentParser.TAG = 71;
BaliComponentParser.SYMBOL = 72;
BaliComponentParser.FRACTION = 73;
BaliComponentParser.REAL = 74;
BaliComponentParser.IMAGINARY = 75;
BaliComponentParser.MOMENT = 76;
BaliComponentParser.DURATION = 77;
BaliComponentParser.RESOURCE = 78;
BaliComponentParser.VERSION = 79;
BaliComponentParser.BINARY = 80;
BaliComponentParser.TEXT_BLOCK = 81;
BaliComponentParser.TEXT = 82;
BaliComponentParser.IDENTIFIER = 83;
BaliComponentParser.NEWLINE = 84;
BaliComponentParser.SPACE = 85;

BaliComponentParser.RULE_component = 0;
BaliComponentParser.RULE_value = 1;
BaliComponentParser.RULE_structure = 2;
BaliComponentParser.RULE_parameters = 3;
BaliComponentParser.RULE_collection = 4;
BaliComponentParser.RULE_range = 5;
BaliComponentParser.RULE_list = 6;
BaliComponentParser.RULE_catalog = 7;
BaliComponentParser.RULE_association = 8;
BaliComponentParser.RULE_source = 9;
BaliComponentParser.RULE_procedure = 10;
BaliComponentParser.RULE_statement = 11;
BaliComponentParser.RULE_mainClause = 12;
BaliComponentParser.RULE_handleClause = 13;
BaliComponentParser.RULE_block = 14;
BaliComponentParser.RULE_evaluateClause = 15;
BaliComponentParser.RULE_checkoutClause = 16;
BaliComponentParser.RULE_saveClause = 17;
BaliComponentParser.RULE_discardClause = 18;
BaliComponentParser.RULE_commitClause = 19;
BaliComponentParser.RULE_publishClause = 20;
BaliComponentParser.RULE_queueClause = 21;
BaliComponentParser.RULE_waitClause = 22;
BaliComponentParser.RULE_ifClause = 23;
BaliComponentParser.RULE_selectClause = 24;
BaliComponentParser.RULE_withClause = 25;
BaliComponentParser.RULE_whileClause = 26;
BaliComponentParser.RULE_continueClause = 27;
BaliComponentParser.RULE_breakClause = 28;
BaliComponentParser.RULE_returnClause = 29;
BaliComponentParser.RULE_throwClause = 30;
BaliComponentParser.RULE_recipient = 31;
BaliComponentParser.RULE_subcomponent = 32;
BaliComponentParser.RULE_expression = 33;
BaliComponentParser.RULE_variable = 34;
BaliComponentParser.RULE_funxtion = 35;
BaliComponentParser.RULE_message = 36;
BaliComponentParser.RULE_indices = 37;
BaliComponentParser.RULE_element = 38;
BaliComponentParser.RULE_angle = 39;
BaliComponentParser.RULE_binary = 40;
BaliComponentParser.RULE_duration = 41;
BaliComponentParser.RULE_imaginary = 42;
BaliComponentParser.RULE_moment = 43;
BaliComponentParser.RULE_number = 44;
BaliComponentParser.RULE_percent = 45;
BaliComponentParser.RULE_probability = 46;
BaliComponentParser.RULE_real = 47;
BaliComponentParser.RULE_reference = 48;
BaliComponentParser.RULE_symbol = 49;
BaliComponentParser.RULE_tag = 50;
BaliComponentParser.RULE_template = 51;
BaliComponentParser.RULE_text = 52;
BaliComponentParser.RULE_version = 53;

function ComponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliComponentParser.RULE_component;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterComponent(this);
	}
};

ComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitComponent(this);
	}
};

ComponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitComponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.ComponentContext = ComponentContext;

BaliComponentParser.prototype.component = function() {

    var localctx = new ComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BaliComponentParser.RULE_component);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.value();
        this.state = 110;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        if(la_===1) {
            this.state = 109;
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
    this.ruleIndex = BaliComponentParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.element = function() {
    return this.getTypedRuleContext(ElementContext,0);
};

ValueContext.prototype.structure = function() {
    return this.getTypedRuleContext(StructureContext,0);
};

ValueContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.ValueContext = ValueContext;

BaliComponentParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, BaliComponentParser.RULE_value);
    try {
        this.state = 115;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliComponentParser.T__2:
        case BaliComponentParser.T__59:
        case BaliComponentParser.T__60:
        case BaliComponentParser.T__61:
        case BaliComponentParser.T__64:
        case BaliComponentParser.T__65:
        case BaliComponentParser.T__66:
        case BaliComponentParser.T__67:
        case BaliComponentParser.T__68:
        case BaliComponentParser.TAG:
        case BaliComponentParser.SYMBOL:
        case BaliComponentParser.FRACTION:
        case BaliComponentParser.REAL:
        case BaliComponentParser.IMAGINARY:
        case BaliComponentParser.MOMENT:
        case BaliComponentParser.DURATION:
        case BaliComponentParser.RESOURCE:
        case BaliComponentParser.VERSION:
        case BaliComponentParser.BINARY:
        case BaliComponentParser.TEXT_BLOCK:
        case BaliComponentParser.TEXT:
            this.enterOuterAlt(localctx, 1);
            this.state = 112;
            this.element();
            break;
        case BaliComponentParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 113;
            this.structure();
            break;
        case BaliComponentParser.T__7:
            this.enterOuterAlt(localctx, 3);
            this.state = 114;
            this.source();
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
    this.ruleIndex = BaliComponentParser.RULE_structure;
    return this;
}

StructureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructureContext.prototype.constructor = StructureContext;

StructureContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

StructureContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterStructure(this);
	}
};

StructureContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitStructure(this);
	}
};

StructureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitStructure(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.StructureContext = StructureContext;

BaliComponentParser.prototype.structure = function() {

    var localctx = new StructureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BaliComponentParser.RULE_structure);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(BaliComponentParser.T__0);
        this.state = 118;
        this.collection();
        this.state = 119;
        this.match(BaliComponentParser.T__1);
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
    this.ruleIndex = BaliComponentParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitParameters(this);
	}
};

ParametersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitParameters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.ParametersContext = ParametersContext;

BaliComponentParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, BaliComponentParser.RULE_parameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.match(BaliComponentParser.T__2);
        this.state = 122;
        this.collection();
        this.state = 123;
        this.match(BaliComponentParser.T__3);
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
    this.ruleIndex = BaliComponentParser.RULE_collection;
    return this;
}

CollectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CollectionContext.prototype.constructor = CollectionContext;

CollectionContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

CollectionContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

CollectionContext.prototype.catalog = function() {
    return this.getTypedRuleContext(CatalogContext,0);
};

CollectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterCollection(this);
	}
};

CollectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitCollection(this);
	}
};

CollectionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitCollection(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.CollectionContext = CollectionContext;

BaliComponentParser.prototype.collection = function() {

    var localctx = new CollectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, BaliComponentParser.RULE_collection);
    try {
        this.state = 128;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 125;
            this.range();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 126;
            this.list();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 127;
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
    this.ruleIndex = BaliComponentParser.RULE_range;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterRange(this);
	}
};

RangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitRange(this);
	}
};

RangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitRange(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.RangeContext = RangeContext;

BaliComponentParser.prototype.range = function() {

    var localctx = new RangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, BaliComponentParser.RULE_range);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.expression(0);
        this.state = 131;
        this.match(BaliComponentParser.T__4);
        this.state = 132;
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
    this.ruleIndex = BaliComponentParser.RULE_list;
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

BaliComponentParser.NewlineListContext = NewlineListContext;

NewlineListContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BaliComponentParser.NEWLINE);
    } else {
        return this.getToken(BaliComponentParser.NEWLINE, i);
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterNewlineList(this);
	}
};

NewlineListContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitNewlineList(this);
	}
};

NewlineListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.EmptyListContext = EmptyListContext;

EmptyListContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterEmptyList(this);
	}
};

EmptyListContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitEmptyList(this);
	}
};

EmptyListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.InlineListContext = InlineListContext;

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
    if(listener instanceof BaliComponentListener ) {
        listener.enterInlineList(this);
	}
};

InlineListContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitInlineList(this);
	}
};

InlineListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitInlineList(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliComponentParser.ListContext = ListContext;

BaliComponentParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, BaliComponentParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.state = 152;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliComponentParser.T__0:
        case BaliComponentParser.T__2:
        case BaliComponentParser.T__7:
        case BaliComponentParser.T__38:
        case BaliComponentParser.T__42:
        case BaliComponentParser.T__43:
        case BaliComponentParser.T__44:
        case BaliComponentParser.T__47:
        case BaliComponentParser.T__53:
        case BaliComponentParser.T__59:
        case BaliComponentParser.T__60:
        case BaliComponentParser.T__61:
        case BaliComponentParser.T__64:
        case BaliComponentParser.T__65:
        case BaliComponentParser.T__66:
        case BaliComponentParser.T__67:
        case BaliComponentParser.T__68:
        case BaliComponentParser.TAG:
        case BaliComponentParser.SYMBOL:
        case BaliComponentParser.FRACTION:
        case BaliComponentParser.REAL:
        case BaliComponentParser.IMAGINARY:
        case BaliComponentParser.MOMENT:
        case BaliComponentParser.DURATION:
        case BaliComponentParser.RESOURCE:
        case BaliComponentParser.VERSION:
        case BaliComponentParser.BINARY:
        case BaliComponentParser.TEXT_BLOCK:
        case BaliComponentParser.TEXT:
        case BaliComponentParser.IDENTIFIER:
            localctx = new InlineListContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 134;
            this.expression(0);
            this.state = 139;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliComponentParser.T__5) {
                this.state = 135;
                this.match(BaliComponentParser.T__5);
                this.state = 136;
                this.expression(0);
                this.state = 141;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliComponentParser.NEWLINE:
            localctx = new NewlineListContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 142;
            this.match(BaliComponentParser.NEWLINE);
            this.state = 148;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliComponentParser.T__0) | (1 << BaliComponentParser.T__2) | (1 << BaliComponentParser.T__7))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (BaliComponentParser.T__38 - 39)) | (1 << (BaliComponentParser.T__42 - 39)) | (1 << (BaliComponentParser.T__43 - 39)) | (1 << (BaliComponentParser.T__44 - 39)) | (1 << (BaliComponentParser.T__47 - 39)) | (1 << (BaliComponentParser.T__53 - 39)) | (1 << (BaliComponentParser.T__59 - 39)) | (1 << (BaliComponentParser.T__60 - 39)) | (1 << (BaliComponentParser.T__61 - 39)) | (1 << (BaliComponentParser.T__64 - 39)) | (1 << (BaliComponentParser.T__65 - 39)) | (1 << (BaliComponentParser.T__66 - 39)) | (1 << (BaliComponentParser.T__67 - 39)) | (1 << (BaliComponentParser.T__68 - 39)))) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (BaliComponentParser.TAG - 71)) | (1 << (BaliComponentParser.SYMBOL - 71)) | (1 << (BaliComponentParser.FRACTION - 71)) | (1 << (BaliComponentParser.REAL - 71)) | (1 << (BaliComponentParser.IMAGINARY - 71)) | (1 << (BaliComponentParser.MOMENT - 71)) | (1 << (BaliComponentParser.DURATION - 71)) | (1 << (BaliComponentParser.RESOURCE - 71)) | (1 << (BaliComponentParser.VERSION - 71)) | (1 << (BaliComponentParser.BINARY - 71)) | (1 << (BaliComponentParser.TEXT_BLOCK - 71)) | (1 << (BaliComponentParser.TEXT - 71)) | (1 << (BaliComponentParser.IDENTIFIER - 71)))) !== 0)) {
                this.state = 143;
                this.expression(0);
                this.state = 144;
                this.match(BaliComponentParser.NEWLINE);
                this.state = 150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliComponentParser.T__1:
        case BaliComponentParser.T__3:
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
    this.ruleIndex = BaliComponentParser.RULE_catalog;
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

BaliComponentParser.InlineCatalogContext = InlineCatalogContext;

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
    if(listener instanceof BaliComponentListener ) {
        listener.enterInlineCatalog(this);
	}
};

InlineCatalogContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitInlineCatalog(this);
	}
};

InlineCatalogContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.NewlineCatalogContext = NewlineCatalogContext;

NewlineCatalogContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BaliComponentParser.NEWLINE);
    } else {
        return this.getToken(BaliComponentParser.NEWLINE, i);
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterNewlineCatalog(this);
	}
};

NewlineCatalogContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitNewlineCatalog(this);
	}
};

NewlineCatalogContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.EmptyCatalogContext = EmptyCatalogContext;

EmptyCatalogContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterEmptyCatalog(this);
	}
};

EmptyCatalogContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitEmptyCatalog(this);
	}
};

EmptyCatalogContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitEmptyCatalog(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliComponentParser.CatalogContext = CatalogContext;

BaliComponentParser.prototype.catalog = function() {

    var localctx = new CatalogContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, BaliComponentParser.RULE_catalog);
    var _la = 0; // Token type
    try {
        this.state = 172;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliComponentParser.T__0:
        case BaliComponentParser.T__2:
        case BaliComponentParser.T__7:
        case BaliComponentParser.T__59:
        case BaliComponentParser.T__60:
        case BaliComponentParser.T__61:
        case BaliComponentParser.T__64:
        case BaliComponentParser.T__65:
        case BaliComponentParser.T__66:
        case BaliComponentParser.T__67:
        case BaliComponentParser.T__68:
        case BaliComponentParser.TAG:
        case BaliComponentParser.SYMBOL:
        case BaliComponentParser.FRACTION:
        case BaliComponentParser.REAL:
        case BaliComponentParser.IMAGINARY:
        case BaliComponentParser.MOMENT:
        case BaliComponentParser.DURATION:
        case BaliComponentParser.RESOURCE:
        case BaliComponentParser.VERSION:
        case BaliComponentParser.BINARY:
        case BaliComponentParser.TEXT_BLOCK:
        case BaliComponentParser.TEXT:
            localctx = new InlineCatalogContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 154;
            this.association();
            this.state = 159;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliComponentParser.T__5) {
                this.state = 155;
                this.match(BaliComponentParser.T__5);
                this.state = 156;
                this.association();
                this.state = 161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliComponentParser.NEWLINE:
            localctx = new NewlineCatalogContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 162;
            this.match(BaliComponentParser.NEWLINE);
            this.state = 168;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliComponentParser.T__0) | (1 << BaliComponentParser.T__2) | (1 << BaliComponentParser.T__7))) !== 0) || ((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (BaliComponentParser.T__59 - 60)) | (1 << (BaliComponentParser.T__60 - 60)) | (1 << (BaliComponentParser.T__61 - 60)) | (1 << (BaliComponentParser.T__64 - 60)) | (1 << (BaliComponentParser.T__65 - 60)) | (1 << (BaliComponentParser.T__66 - 60)) | (1 << (BaliComponentParser.T__67 - 60)) | (1 << (BaliComponentParser.T__68 - 60)) | (1 << (BaliComponentParser.TAG - 60)) | (1 << (BaliComponentParser.SYMBOL - 60)) | (1 << (BaliComponentParser.FRACTION - 60)) | (1 << (BaliComponentParser.REAL - 60)) | (1 << (BaliComponentParser.IMAGINARY - 60)) | (1 << (BaliComponentParser.MOMENT - 60)) | (1 << (BaliComponentParser.DURATION - 60)) | (1 << (BaliComponentParser.RESOURCE - 60)) | (1 << (BaliComponentParser.VERSION - 60)) | (1 << (BaliComponentParser.BINARY - 60)) | (1 << (BaliComponentParser.TEXT_BLOCK - 60)) | (1 << (BaliComponentParser.TEXT - 60)))) !== 0)) {
                this.state = 163;
                this.association();
                this.state = 164;
                this.match(BaliComponentParser.NEWLINE);
                this.state = 170;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliComponentParser.T__6:
            localctx = new EmptyCatalogContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 171;
            this.match(BaliComponentParser.T__6);
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
    this.ruleIndex = BaliComponentParser.RULE_association;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterAssociation(this);
	}
};

AssociationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitAssociation(this);
	}
};

AssociationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitAssociation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.AssociationContext = AssociationContext;

BaliComponentParser.prototype.association = function() {

    var localctx = new AssociationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, BaliComponentParser.RULE_association);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.component();
        this.state = 175;
        this.match(BaliComponentParser.T__6);
        this.state = 176;
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

function SourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliComponentParser.RULE_source;
    return this;
}

SourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceContext.prototype.constructor = SourceContext;

SourceContext.prototype.procedure = function() {
    return this.getTypedRuleContext(ProcedureContext,0);
};

SourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterSource(this);
	}
};

SourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitSource(this);
	}
};

SourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.SourceContext = SourceContext;

BaliComponentParser.prototype.source = function() {

    var localctx = new SourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, BaliComponentParser.RULE_source);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this.match(BaliComponentParser.T__7);
        this.state = 179;
        this.procedure();
        this.state = 180;
        this.match(BaliComponentParser.T__8);
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
    this.ruleIndex = BaliComponentParser.RULE_procedure;
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

BaliComponentParser.EmptyProcedureContext = EmptyProcedureContext;

EmptyProcedureContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterEmptyProcedure(this);
	}
};

EmptyProcedureContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitEmptyProcedure(this);
	}
};

EmptyProcedureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.NewlineProcedureContext = NewlineProcedureContext;

NewlineProcedureContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BaliComponentParser.NEWLINE);
    } else {
        return this.getToken(BaliComponentParser.NEWLINE, i);
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterNewlineProcedure(this);
	}
};

NewlineProcedureContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitNewlineProcedure(this);
	}
};

NewlineProcedureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.InlineProcedureContext = InlineProcedureContext;

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
    if(listener instanceof BaliComponentListener ) {
        listener.enterInlineProcedure(this);
	}
};

InlineProcedureContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitInlineProcedure(this);
	}
};

InlineProcedureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitInlineProcedure(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliComponentParser.ProcedureContext = ProcedureContext;

BaliComponentParser.prototype.procedure = function() {

    var localctx = new ProcedureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, BaliComponentParser.RULE_procedure);
    var _la = 0; // Token type
    try {
        this.state = 200;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliComponentParser.T__0:
        case BaliComponentParser.T__2:
        case BaliComponentParser.T__7:
        case BaliComponentParser.T__12:
        case BaliComponentParser.T__14:
        case BaliComponentParser.T__16:
        case BaliComponentParser.T__18:
        case BaliComponentParser.T__19:
        case BaliComponentParser.T__20:
        case BaliComponentParser.T__21:
        case BaliComponentParser.T__23:
        case BaliComponentParser.T__25:
        case BaliComponentParser.T__28:
        case BaliComponentParser.T__32:
        case BaliComponentParser.T__33:
        case BaliComponentParser.T__35:
        case BaliComponentParser.T__36:
        case BaliComponentParser.T__37:
        case BaliComponentParser.T__38:
        case BaliComponentParser.T__42:
        case BaliComponentParser.T__43:
        case BaliComponentParser.T__44:
        case BaliComponentParser.T__47:
        case BaliComponentParser.T__53:
        case BaliComponentParser.T__59:
        case BaliComponentParser.T__60:
        case BaliComponentParser.T__61:
        case BaliComponentParser.T__64:
        case BaliComponentParser.T__65:
        case BaliComponentParser.T__66:
        case BaliComponentParser.T__67:
        case BaliComponentParser.T__68:
        case BaliComponentParser.TAG:
        case BaliComponentParser.SYMBOL:
        case BaliComponentParser.FRACTION:
        case BaliComponentParser.REAL:
        case BaliComponentParser.IMAGINARY:
        case BaliComponentParser.MOMENT:
        case BaliComponentParser.DURATION:
        case BaliComponentParser.RESOURCE:
        case BaliComponentParser.VERSION:
        case BaliComponentParser.BINARY:
        case BaliComponentParser.TEXT_BLOCK:
        case BaliComponentParser.TEXT:
        case BaliComponentParser.IDENTIFIER:
            localctx = new InlineProcedureContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 182;
            this.statement();
            this.state = 187;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliComponentParser.T__9) {
                this.state = 183;
                this.match(BaliComponentParser.T__9);
                this.state = 184;
                this.statement();
                this.state = 189;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliComponentParser.NEWLINE:
            localctx = new NewlineProcedureContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 190;
            this.match(BaliComponentParser.NEWLINE);
            this.state = 196;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliComponentParser.T__0) | (1 << BaliComponentParser.T__2) | (1 << BaliComponentParser.T__7) | (1 << BaliComponentParser.T__12) | (1 << BaliComponentParser.T__14) | (1 << BaliComponentParser.T__16) | (1 << BaliComponentParser.T__18) | (1 << BaliComponentParser.T__19) | (1 << BaliComponentParser.T__20) | (1 << BaliComponentParser.T__21) | (1 << BaliComponentParser.T__23) | (1 << BaliComponentParser.T__25) | (1 << BaliComponentParser.T__28))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (BaliComponentParser.T__32 - 33)) | (1 << (BaliComponentParser.T__33 - 33)) | (1 << (BaliComponentParser.T__35 - 33)) | (1 << (BaliComponentParser.T__36 - 33)) | (1 << (BaliComponentParser.T__37 - 33)) | (1 << (BaliComponentParser.T__38 - 33)) | (1 << (BaliComponentParser.T__42 - 33)) | (1 << (BaliComponentParser.T__43 - 33)) | (1 << (BaliComponentParser.T__44 - 33)) | (1 << (BaliComponentParser.T__47 - 33)) | (1 << (BaliComponentParser.T__53 - 33)) | (1 << (BaliComponentParser.T__59 - 33)) | (1 << (BaliComponentParser.T__60 - 33)) | (1 << (BaliComponentParser.T__61 - 33)))) !== 0) || ((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (BaliComponentParser.T__64 - 65)) | (1 << (BaliComponentParser.T__65 - 65)) | (1 << (BaliComponentParser.T__66 - 65)) | (1 << (BaliComponentParser.T__67 - 65)) | (1 << (BaliComponentParser.T__68 - 65)) | (1 << (BaliComponentParser.TAG - 65)) | (1 << (BaliComponentParser.SYMBOL - 65)) | (1 << (BaliComponentParser.FRACTION - 65)) | (1 << (BaliComponentParser.REAL - 65)) | (1 << (BaliComponentParser.IMAGINARY - 65)) | (1 << (BaliComponentParser.MOMENT - 65)) | (1 << (BaliComponentParser.DURATION - 65)) | (1 << (BaliComponentParser.RESOURCE - 65)) | (1 << (BaliComponentParser.VERSION - 65)) | (1 << (BaliComponentParser.BINARY - 65)) | (1 << (BaliComponentParser.TEXT_BLOCK - 65)) | (1 << (BaliComponentParser.TEXT - 65)) | (1 << (BaliComponentParser.IDENTIFIER - 65)))) !== 0)) {
                this.state = 191;
                this.statement();
                this.state = 192;
                this.match(BaliComponentParser.NEWLINE);
                this.state = 198;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliComponentParser.T__8:
            localctx = new EmptyProcedureContext(this, localctx);
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
    this.ruleIndex = BaliComponentParser.RULE_statement;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.StatementContext = StatementContext;

BaliComponentParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, BaliComponentParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.mainClause();
        this.state = 206;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BaliComponentParser.T__10) {
            this.state = 203;
            this.handleClause();
            this.state = 208;
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
    this.ruleIndex = BaliComponentParser.RULE_mainClause;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterMainClause(this);
	}
};

MainClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitMainClause(this);
	}
};

MainClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitMainClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.MainClauseContext = MainClauseContext;

BaliComponentParser.prototype.mainClause = function() {

    var localctx = new MainClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, BaliComponentParser.RULE_mainClause);
    try {
        this.state = 225;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliComponentParser.T__0:
        case BaliComponentParser.T__2:
        case BaliComponentParser.T__7:
        case BaliComponentParser.T__38:
        case BaliComponentParser.T__42:
        case BaliComponentParser.T__43:
        case BaliComponentParser.T__44:
        case BaliComponentParser.T__47:
        case BaliComponentParser.T__53:
        case BaliComponentParser.T__59:
        case BaliComponentParser.T__60:
        case BaliComponentParser.T__61:
        case BaliComponentParser.T__64:
        case BaliComponentParser.T__65:
        case BaliComponentParser.T__66:
        case BaliComponentParser.T__67:
        case BaliComponentParser.T__68:
        case BaliComponentParser.TAG:
        case BaliComponentParser.SYMBOL:
        case BaliComponentParser.FRACTION:
        case BaliComponentParser.REAL:
        case BaliComponentParser.IMAGINARY:
        case BaliComponentParser.MOMENT:
        case BaliComponentParser.DURATION:
        case BaliComponentParser.RESOURCE:
        case BaliComponentParser.VERSION:
        case BaliComponentParser.BINARY:
        case BaliComponentParser.TEXT_BLOCK:
        case BaliComponentParser.TEXT:
        case BaliComponentParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 209;
            this.evaluateClause();
            break;
        case BaliComponentParser.T__14:
            this.enterOuterAlt(localctx, 2);
            this.state = 210;
            this.checkoutClause();
            break;
        case BaliComponentParser.T__16:
            this.enterOuterAlt(localctx, 3);
            this.state = 211;
            this.saveClause();
            break;
        case BaliComponentParser.T__18:
            this.enterOuterAlt(localctx, 4);
            this.state = 212;
            this.discardClause();
            break;
        case BaliComponentParser.T__19:
            this.enterOuterAlt(localctx, 5);
            this.state = 213;
            this.commitClause();
            break;
        case BaliComponentParser.T__20:
            this.enterOuterAlt(localctx, 6);
            this.state = 214;
            this.publishClause();
            break;
        case BaliComponentParser.T__21:
            this.enterOuterAlt(localctx, 7);
            this.state = 215;
            this.queueClause();
            break;
        case BaliComponentParser.T__23:
            this.enterOuterAlt(localctx, 8);
            this.state = 216;
            this.waitClause();
            break;
        case BaliComponentParser.T__25:
            this.enterOuterAlt(localctx, 9);
            this.state = 217;
            this.ifClause();
            break;
        case BaliComponentParser.T__28:
            this.enterOuterAlt(localctx, 10);
            this.state = 218;
            this.selectClause();
            break;
        case BaliComponentParser.T__12:
            this.enterOuterAlt(localctx, 11);
            this.state = 219;
            this.withClause();
            break;
        case BaliComponentParser.T__32:
            this.enterOuterAlt(localctx, 12);
            this.state = 220;
            this.whileClause();
            break;
        case BaliComponentParser.T__33:
            this.enterOuterAlt(localctx, 13);
            this.state = 221;
            this.continueClause();
            break;
        case BaliComponentParser.T__35:
            this.enterOuterAlt(localctx, 14);
            this.state = 222;
            this.breakClause();
            break;
        case BaliComponentParser.T__36:
            this.enterOuterAlt(localctx, 15);
            this.state = 223;
            this.returnClause();
            break;
        case BaliComponentParser.T__37:
            this.enterOuterAlt(localctx, 16);
            this.state = 224;
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
    this.ruleIndex = BaliComponentParser.RULE_handleClause;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterHandleClause(this);
	}
};

HandleClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitHandleClause(this);
	}
};

HandleClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitHandleClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.HandleClauseContext = HandleClauseContext;

BaliComponentParser.prototype.handleClause = function() {

    var localctx = new HandleClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, BaliComponentParser.RULE_handleClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.match(BaliComponentParser.T__10);
        this.state = 228;
        this.symbol();
        this.state = 229;
        this.match(BaliComponentParser.T__11);
        this.state = 230;
        this.expression(0);
        this.state = 231;
        this.match(BaliComponentParser.T__12);
        this.state = 232;
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
    this.ruleIndex = BaliComponentParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.procedure = function() {
    return this.getTypedRuleContext(ProcedureContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.BlockContext = BlockContext;

BaliComponentParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, BaliComponentParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        this.match(BaliComponentParser.T__7);
        this.state = 235;
        this.procedure();
        this.state = 236;
        this.match(BaliComponentParser.T__8);
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
    this.ruleIndex = BaliComponentParser.RULE_evaluateClause;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterEvaluateClause(this);
	}
};

EvaluateClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitEvaluateClause(this);
	}
};

EvaluateClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitEvaluateClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.EvaluateClauseContext = EvaluateClauseContext;

BaliComponentParser.prototype.evaluateClause = function() {

    var localctx = new EvaluateClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, BaliComponentParser.RULE_evaluateClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        if(la_===1) {
            this.state = 238;
            this.recipient();
            this.state = 239;
            this.match(BaliComponentParser.T__13);

        }
        this.state = 243;
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
    this.ruleIndex = BaliComponentParser.RULE_checkoutClause;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterCheckoutClause(this);
	}
};

CheckoutClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitCheckoutClause(this);
	}
};

CheckoutClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitCheckoutClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.CheckoutClauseContext = CheckoutClauseContext;

BaliComponentParser.prototype.checkoutClause = function() {

    var localctx = new CheckoutClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, BaliComponentParser.RULE_checkoutClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.match(BaliComponentParser.T__14);
        this.state = 246;
        this.recipient();
        this.state = 247;
        this.match(BaliComponentParser.T__15);
        this.state = 248;
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
    this.ruleIndex = BaliComponentParser.RULE_saveClause;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterSaveClause(this);
	}
};

SaveClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitSaveClause(this);
	}
};

SaveClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitSaveClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.SaveClauseContext = SaveClauseContext;

BaliComponentParser.prototype.saveClause = function() {

    var localctx = new SaveClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, BaliComponentParser.RULE_saveClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
        this.match(BaliComponentParser.T__16);
        this.state = 251;
        this.expression(0);
        this.state = 252;
        this.match(BaliComponentParser.T__17);
        this.state = 253;
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
    this.ruleIndex = BaliComponentParser.RULE_discardClause;
    return this;
}

DiscardClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DiscardClauseContext.prototype.constructor = DiscardClauseContext;

DiscardClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DiscardClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterDiscardClause(this);
	}
};

DiscardClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitDiscardClause(this);
	}
};

DiscardClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitDiscardClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.DiscardClauseContext = DiscardClauseContext;

BaliComponentParser.prototype.discardClause = function() {

    var localctx = new DiscardClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, BaliComponentParser.RULE_discardClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this.match(BaliComponentParser.T__18);
        this.state = 256;
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
    this.ruleIndex = BaliComponentParser.RULE_commitClause;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterCommitClause(this);
	}
};

CommitClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitCommitClause(this);
	}
};

CommitClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitCommitClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.CommitClauseContext = CommitClauseContext;

BaliComponentParser.prototype.commitClause = function() {

    var localctx = new CommitClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, BaliComponentParser.RULE_commitClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this.match(BaliComponentParser.T__19);
        this.state = 259;
        this.expression(0);
        this.state = 260;
        this.match(BaliComponentParser.T__17);
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

function PublishClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliComponentParser.RULE_publishClause;
    return this;
}

PublishClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PublishClauseContext.prototype.constructor = PublishClauseContext;

PublishClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PublishClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterPublishClause(this);
	}
};

PublishClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitPublishClause(this);
	}
};

PublishClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitPublishClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.PublishClauseContext = PublishClauseContext;

BaliComponentParser.prototype.publishClause = function() {

    var localctx = new PublishClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, BaliComponentParser.RULE_publishClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this.match(BaliComponentParser.T__20);
        this.state = 264;
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
    this.ruleIndex = BaliComponentParser.RULE_queueClause;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterQueueClause(this);
	}
};

QueueClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitQueueClause(this);
	}
};

QueueClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitQueueClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.QueueClauseContext = QueueClauseContext;

BaliComponentParser.prototype.queueClause = function() {

    var localctx = new QueueClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, BaliComponentParser.RULE_queueClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 266;
        this.match(BaliComponentParser.T__21);
        this.state = 267;
        this.expression(0);
        this.state = 268;
        this.match(BaliComponentParser.T__22);
        this.state = 269;
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
    this.ruleIndex = BaliComponentParser.RULE_waitClause;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterWaitClause(this);
	}
};

WaitClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitWaitClause(this);
	}
};

WaitClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitWaitClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.WaitClauseContext = WaitClauseContext;

BaliComponentParser.prototype.waitClause = function() {

    var localctx = new WaitClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, BaliComponentParser.RULE_waitClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this.match(BaliComponentParser.T__23);
        this.state = 272;
        this.match(BaliComponentParser.T__24);
        this.state = 273;
        this.recipient();
        this.state = 274;
        this.match(BaliComponentParser.T__15);
        this.state = 275;
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
    this.ruleIndex = BaliComponentParser.RULE_ifClause;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterIfClause(this);
	}
};

IfClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitIfClause(this);
	}
};

IfClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitIfClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.IfClauseContext = IfClauseContext;

BaliComponentParser.prototype.ifClause = function() {

    var localctx = new IfClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, BaliComponentParser.RULE_ifClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this.match(BaliComponentParser.T__25);
        this.state = 278;
        this.expression(0);
        this.state = 279;
        this.match(BaliComponentParser.T__26);
        this.state = 280;
        this.block();
        this.state = 289;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 281;
                this.match(BaliComponentParser.T__27);
                this.state = 282;
                this.match(BaliComponentParser.T__25);
                this.state = 283;
                this.expression(0);
                this.state = 284;
                this.match(BaliComponentParser.T__26);
                this.state = 285;
                this.block(); 
            }
            this.state = 291;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

        this.state = 294;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliComponentParser.T__27) {
            this.state = 292;
            this.match(BaliComponentParser.T__27);
            this.state = 293;
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
    this.ruleIndex = BaliComponentParser.RULE_selectClause;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterSelectClause(this);
	}
};

SelectClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitSelectClause(this);
	}
};

SelectClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitSelectClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.SelectClauseContext = SelectClauseContext;

BaliComponentParser.prototype.selectClause = function() {

    var localctx = new SelectClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, BaliComponentParser.RULE_selectClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        this.match(BaliComponentParser.T__28);
        this.state = 297;
        this.expression(0);
        this.state = 298;
        this.match(BaliComponentParser.T__15);
        this.state = 303; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 299;
            this.expression(0);
            this.state = 300;
            this.match(BaliComponentParser.T__29);
            this.state = 301;
            this.block();
            this.state = 305; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliComponentParser.T__0) | (1 << BaliComponentParser.T__2) | (1 << BaliComponentParser.T__7))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (BaliComponentParser.T__38 - 39)) | (1 << (BaliComponentParser.T__42 - 39)) | (1 << (BaliComponentParser.T__43 - 39)) | (1 << (BaliComponentParser.T__44 - 39)) | (1 << (BaliComponentParser.T__47 - 39)) | (1 << (BaliComponentParser.T__53 - 39)) | (1 << (BaliComponentParser.T__59 - 39)) | (1 << (BaliComponentParser.T__60 - 39)) | (1 << (BaliComponentParser.T__61 - 39)) | (1 << (BaliComponentParser.T__64 - 39)) | (1 << (BaliComponentParser.T__65 - 39)) | (1 << (BaliComponentParser.T__66 - 39)) | (1 << (BaliComponentParser.T__67 - 39)) | (1 << (BaliComponentParser.T__68 - 39)))) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (BaliComponentParser.TAG - 71)) | (1 << (BaliComponentParser.SYMBOL - 71)) | (1 << (BaliComponentParser.FRACTION - 71)) | (1 << (BaliComponentParser.REAL - 71)) | (1 << (BaliComponentParser.IMAGINARY - 71)) | (1 << (BaliComponentParser.MOMENT - 71)) | (1 << (BaliComponentParser.DURATION - 71)) | (1 << (BaliComponentParser.RESOURCE - 71)) | (1 << (BaliComponentParser.VERSION - 71)) | (1 << (BaliComponentParser.BINARY - 71)) | (1 << (BaliComponentParser.TEXT_BLOCK - 71)) | (1 << (BaliComponentParser.TEXT - 71)) | (1 << (BaliComponentParser.IDENTIFIER - 71)))) !== 0));
        this.state = 309;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliComponentParser.T__27) {
            this.state = 307;
            this.match(BaliComponentParser.T__27);
            this.state = 308;
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
    this.ruleIndex = BaliComponentParser.RULE_withClause;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterWithClause(this);
	}
};

WithClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitWithClause(this);
	}
};

WithClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitWithClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.WithClauseContext = WithClauseContext;

BaliComponentParser.prototype.withClause = function() {

    var localctx = new WithClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, BaliComponentParser.RULE_withClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
        this.match(BaliComponentParser.T__12);
        this.state = 316;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliComponentParser.T__30) {
            this.state = 312;
            this.match(BaliComponentParser.T__30);
            this.state = 313;
            this.symbol();
            this.state = 314;
            this.match(BaliComponentParser.T__31);
        }

        this.state = 318;
        this.expression(0);
        this.state = 319;
        this.match(BaliComponentParser.T__29);
        this.state = 320;
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
    this.ruleIndex = BaliComponentParser.RULE_whileClause;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterWhileClause(this);
	}
};

WhileClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitWhileClause(this);
	}
};

WhileClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitWhileClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.WhileClauseContext = WhileClauseContext;

BaliComponentParser.prototype.whileClause = function() {

    var localctx = new WhileClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, BaliComponentParser.RULE_whileClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 322;
        this.match(BaliComponentParser.T__32);
        this.state = 323;
        this.expression(0);
        this.state = 324;
        this.match(BaliComponentParser.T__29);
        this.state = 325;
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
    this.ruleIndex = BaliComponentParser.RULE_continueClause;
    return this;
}

ContinueClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContinueClauseContext.prototype.constructor = ContinueClauseContext;


ContinueClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterContinueClause(this);
	}
};

ContinueClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitContinueClause(this);
	}
};

ContinueClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitContinueClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.ContinueClauseContext = ContinueClauseContext;

BaliComponentParser.prototype.continueClause = function() {

    var localctx = new ContinueClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, BaliComponentParser.RULE_continueClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 327;
        this.match(BaliComponentParser.T__33);
        this.state = 328;
        this.match(BaliComponentParser.T__34);
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
    this.ruleIndex = BaliComponentParser.RULE_breakClause;
    return this;
}

BreakClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BreakClauseContext.prototype.constructor = BreakClauseContext;


BreakClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterBreakClause(this);
	}
};

BreakClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitBreakClause(this);
	}
};

BreakClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitBreakClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.BreakClauseContext = BreakClauseContext;

BaliComponentParser.prototype.breakClause = function() {

    var localctx = new BreakClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, BaliComponentParser.RULE_breakClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.match(BaliComponentParser.T__35);
        this.state = 331;
        this.match(BaliComponentParser.T__34);
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
    this.ruleIndex = BaliComponentParser.RULE_returnClause;
    return this;
}

ReturnClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnClauseContext.prototype.constructor = ReturnClauseContext;

ReturnClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ReturnClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterReturnClause(this);
	}
};

ReturnClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitReturnClause(this);
	}
};

ReturnClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitReturnClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.ReturnClauseContext = ReturnClauseContext;

BaliComponentParser.prototype.returnClause = function() {

    var localctx = new ReturnClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, BaliComponentParser.RULE_returnClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 333;
        this.match(BaliComponentParser.T__36);
        this.state = 335;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliComponentParser.T__0) | (1 << BaliComponentParser.T__2) | (1 << BaliComponentParser.T__7))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (BaliComponentParser.T__38 - 39)) | (1 << (BaliComponentParser.T__42 - 39)) | (1 << (BaliComponentParser.T__43 - 39)) | (1 << (BaliComponentParser.T__44 - 39)) | (1 << (BaliComponentParser.T__47 - 39)) | (1 << (BaliComponentParser.T__53 - 39)) | (1 << (BaliComponentParser.T__59 - 39)) | (1 << (BaliComponentParser.T__60 - 39)) | (1 << (BaliComponentParser.T__61 - 39)) | (1 << (BaliComponentParser.T__64 - 39)) | (1 << (BaliComponentParser.T__65 - 39)) | (1 << (BaliComponentParser.T__66 - 39)) | (1 << (BaliComponentParser.T__67 - 39)) | (1 << (BaliComponentParser.T__68 - 39)))) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (BaliComponentParser.TAG - 71)) | (1 << (BaliComponentParser.SYMBOL - 71)) | (1 << (BaliComponentParser.FRACTION - 71)) | (1 << (BaliComponentParser.REAL - 71)) | (1 << (BaliComponentParser.IMAGINARY - 71)) | (1 << (BaliComponentParser.MOMENT - 71)) | (1 << (BaliComponentParser.DURATION - 71)) | (1 << (BaliComponentParser.RESOURCE - 71)) | (1 << (BaliComponentParser.VERSION - 71)) | (1 << (BaliComponentParser.BINARY - 71)) | (1 << (BaliComponentParser.TEXT_BLOCK - 71)) | (1 << (BaliComponentParser.TEXT - 71)) | (1 << (BaliComponentParser.IDENTIFIER - 71)))) !== 0)) {
            this.state = 334;
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
    this.ruleIndex = BaliComponentParser.RULE_throwClause;
    return this;
}

ThrowClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThrowClauseContext.prototype.constructor = ThrowClauseContext;

ThrowClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ThrowClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterThrowClause(this);
	}
};

ThrowClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitThrowClause(this);
	}
};

ThrowClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitThrowClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.ThrowClauseContext = ThrowClauseContext;

BaliComponentParser.prototype.throwClause = function() {

    var localctx = new ThrowClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, BaliComponentParser.RULE_throwClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 337;
        this.match(BaliComponentParser.T__37);
        this.state = 338;
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
    this.ruleIndex = BaliComponentParser.RULE_recipient;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterRecipient(this);
	}
};

RecipientContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitRecipient(this);
	}
};

RecipientContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitRecipient(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.RecipientContext = RecipientContext;

BaliComponentParser.prototype.recipient = function() {

    var localctx = new RecipientContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, BaliComponentParser.RULE_recipient);
    try {
        this.state = 342;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliComponentParser.SYMBOL:
            this.enterOuterAlt(localctx, 1);
            this.state = 340;
            this.symbol();
            break;
        case BaliComponentParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 341;
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
    this.ruleIndex = BaliComponentParser.RULE_subcomponent;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterSubcomponent(this);
	}
};

SubcomponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitSubcomponent(this);
	}
};

SubcomponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitSubcomponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.SubcomponentContext = SubcomponentContext;

BaliComponentParser.prototype.subcomponent = function() {

    var localctx = new SubcomponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, BaliComponentParser.RULE_subcomponent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 344;
        this.variable();
        this.state = 345;
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
    this.ruleIndex = BaliComponentParser.RULE_expression;
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

BaliComponentParser.DefaultExpressionContext = DefaultExpressionContext;

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
    if(listener instanceof BaliComponentListener ) {
        listener.enterDefaultExpression(this);
	}
};

DefaultExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitDefaultExpression(this);
	}
};

DefaultExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.MessageExpressionContext = MessageExpressionContext;

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
    if(listener instanceof BaliComponentListener ) {
        listener.enterMessageExpression(this);
	}
};

MessageExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitMessageExpression(this);
	}
};

MessageExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.SubcomponentExpressionContext = SubcomponentExpressionContext;

SubcomponentExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

SubcomponentExpressionContext.prototype.indices = function() {
    return this.getTypedRuleContext(IndicesContext,0);
};
SubcomponentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterSubcomponentExpression(this);
	}
};

SubcomponentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitSubcomponentExpression(this);
	}
};

SubcomponentExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.ComparisonExpressionContext = ComparisonExpressionContext;

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
    if(listener instanceof BaliComponentListener ) {
        listener.enterComparisonExpression(this);
	}
};

ComparisonExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitComparisonExpression(this);
	}
};

ComparisonExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.ArithmeticExpressionContext = ArithmeticExpressionContext;

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
    if(listener instanceof BaliComponentListener ) {
        listener.enterArithmeticExpression(this);
	}
};

ArithmeticExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitArithmeticExpression(this);
	}
};

ArithmeticExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.MagnitudeExpressionContext = MagnitudeExpressionContext;

MagnitudeExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
MagnitudeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterMagnitudeExpression(this);
	}
};

MagnitudeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitMagnitudeExpression(this);
	}
};

MagnitudeExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.LogicalExpressionContext = LogicalExpressionContext;

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
    if(listener instanceof BaliComponentListener ) {
        listener.enterLogicalExpression(this);
	}
};

LogicalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitLogicalExpression(this);
	}
};

LogicalExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.FactorialExpressionContext = FactorialExpressionContext;

FactorialExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
FactorialExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterFactorialExpression(this);
	}
};

FactorialExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitFactorialExpression(this);
	}
};

FactorialExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.VariableExpressionContext = VariableExpressionContext;

VariableExpressionContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
VariableExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterVariableExpression(this);
	}
};

VariableExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitVariableExpression(this);
	}
};

VariableExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.FunctionExpressionContext = FunctionExpressionContext;

FunctionExpressionContext.prototype.funxtion = function() {
    return this.getTypedRuleContext(FunxtionContext,0);
};

FunctionExpressionContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};
FunctionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.PrecedenceExpressionContext = PrecedenceExpressionContext;

PrecedenceExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PrecedenceExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterPrecedenceExpression(this);
	}
};

PrecedenceExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitPrecedenceExpression(this);
	}
};

PrecedenceExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.ExponentialExpressionContext = ExponentialExpressionContext;

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
    if(listener instanceof BaliComponentListener ) {
        listener.enterExponentialExpression(this);
	}
};

ExponentialExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitExponentialExpression(this);
	}
};

ExponentialExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.ComponentExpressionContext = ComponentExpressionContext;

ComponentExpressionContext.prototype.component = function() {
    return this.getTypedRuleContext(ComponentContext,0);
};
ComponentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterComponentExpression(this);
	}
};

ComponentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitComponentExpression(this);
	}
};

ComponentExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.InversionExpressionContext = InversionExpressionContext;

InversionExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
InversionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterInversionExpression(this);
	}
};

InversionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitInversionExpression(this);
	}
};

InversionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.DereferenceExpressionContext = DereferenceExpressionContext;

DereferenceExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
DereferenceExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterDereferenceExpression(this);
	}
};

DereferenceExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitDereferenceExpression(this);
	}
};

DereferenceExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.ComplementExpressionContext = ComplementExpressionContext;

ComplementExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ComplementExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterComplementExpression(this);
	}
};

ComplementExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitComplementExpression(this);
	}
};

ComplementExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitComplementExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliComponentParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 66;
    this.enterRecursionRule(localctx, 66, BaliComponentParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ComponentExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 348;
            this.component();
            break;

        case 2:
            localctx = new VariableExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 349;
            this.variable();
            break;

        case 3:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 350;
            this.funxtion();
            this.state = 351;
            this.parameters();
            break;

        case 4:
            localctx = new PrecedenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 353;
            this.match(BaliComponentParser.T__2);
            this.state = 354;
            this.expression(0);
            this.state = 355;
            this.match(BaliComponentParser.T__3);
            break;

        case 5:
            localctx = new DereferenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 357;
            this.match(BaliComponentParser.T__38);
            this.state = 358;
            this.expression(12);
            break;

        case 6:
            localctx = new InversionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 359;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (BaliComponentParser.T__42 - 43)) | (1 << (BaliComponentParser.T__43 - 43)) | (1 << (BaliComponentParser.T__44 - 43)))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 360;
            this.expression(7);
            break;

        case 7:
            localctx = new MagnitudeExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 361;
            this.match(BaliComponentParser.T__47);
            this.state = 362;
            this.expression(0);
            this.state = 363;
            this.match(BaliComponentParser.T__47);
            break;

        case 8:
            localctx = new ComplementExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 365;
            this.match(BaliComponentParser.T__53);
            this.state = 366;
            this.expression(3);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 395;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 393;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExponentialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliComponentParser.RULE_expression);
                    this.state = 369;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 370;
                    this.match(BaliComponentParser.T__41);
                    this.state = 371;
                    this.expression(8);
                    break;

                case 2:
                    localctx = new ArithmeticExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliComponentParser.RULE_expression);
                    this.state = 372;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 373;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (BaliComponentParser.T__42 - 43)) | (1 << (BaliComponentParser.T__43 - 43)) | (1 << (BaliComponentParser.T__44 - 43)) | (1 << (BaliComponentParser.T__45 - 43)) | (1 << (BaliComponentParser.T__46 - 43)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 374;
                    this.expression(7);
                    break;

                case 3:
                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliComponentParser.RULE_expression);
                    this.state = 375;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 376;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (BaliComponentParser.T__48 - 49)) | (1 << (BaliComponentParser.T__49 - 49)) | (1 << (BaliComponentParser.T__50 - 49)) | (1 << (BaliComponentParser.T__51 - 49)) | (1 << (BaliComponentParser.T__52 - 49)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 377;
                    this.expression(5);
                    break;

                case 4:
                    localctx = new LogicalExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliComponentParser.RULE_expression);
                    this.state = 378;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 379;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (BaliComponentParser.T__54 - 55)) | (1 << (BaliComponentParser.T__55 - 55)) | (1 << (BaliComponentParser.T__56 - 55)) | (1 << (BaliComponentParser.T__57 - 55)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 380;
                    this.expression(3);
                    break;

                case 5:
                    localctx = new DefaultExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliComponentParser.RULE_expression);
                    this.state = 381;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 382;
                    this.match(BaliComponentParser.T__58);
                    this.state = 383;
                    this.expression(2);
                    break;

                case 6:
                    localctx = new MessageExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliComponentParser.RULE_expression);
                    this.state = 384;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 385;
                    this.match(BaliComponentParser.T__39);
                    this.state = 386;
                    this.message();
                    this.state = 387;
                    this.parameters();
                    break;

                case 7:
                    localctx = new SubcomponentExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliComponentParser.RULE_expression);
                    this.state = 389;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 390;
                    this.indices();
                    break;

                case 8:
                    localctx = new FactorialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliComponentParser.RULE_expression);
                    this.state = 391;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 392;
                    this.match(BaliComponentParser.T__40);
                    break;

                } 
            }
            this.state = 397;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
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
    this.ruleIndex = BaliComponentParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.IDENTIFIER = function() {
    return this.getToken(BaliComponentParser.IDENTIFIER, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.VariableContext = VariableContext;

BaliComponentParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, BaliComponentParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 398;
        this.match(BaliComponentParser.IDENTIFIER);
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

function FunxtionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliComponentParser.RULE_funxtion;
    return this;
}

FunxtionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunxtionContext.prototype.constructor = FunxtionContext;

FunxtionContext.prototype.IDENTIFIER = function() {
    return this.getToken(BaliComponentParser.IDENTIFIER, 0);
};

FunxtionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterFunxtion(this);
	}
};

FunxtionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitFunxtion(this);
	}
};

FunxtionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitFunxtion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.FunxtionContext = FunxtionContext;

BaliComponentParser.prototype.funxtion = function() {

    var localctx = new FunxtionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, BaliComponentParser.RULE_funxtion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 400;
        this.match(BaliComponentParser.IDENTIFIER);
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
    this.ruleIndex = BaliComponentParser.RULE_message;
    return this;
}

MessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageContext.prototype.constructor = MessageContext;

MessageContext.prototype.IDENTIFIER = function() {
    return this.getToken(BaliComponentParser.IDENTIFIER, 0);
};

MessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterMessage(this);
	}
};

MessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitMessage(this);
	}
};

MessageContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitMessage(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.MessageContext = MessageContext;

BaliComponentParser.prototype.message = function() {

    var localctx = new MessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, BaliComponentParser.RULE_message);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 402;
        this.match(BaliComponentParser.IDENTIFIER);
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
    this.ruleIndex = BaliComponentParser.RULE_indices;
    return this;
}

IndicesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IndicesContext.prototype.constructor = IndicesContext;

IndicesContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

IndicesContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterIndices(this);
	}
};

IndicesContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitIndices(this);
	}
};

IndicesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitIndices(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.IndicesContext = IndicesContext;

BaliComponentParser.prototype.indices = function() {

    var localctx = new IndicesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, BaliComponentParser.RULE_indices);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 404;
        this.match(BaliComponentParser.T__0);
        this.state = 405;
        this.list();
        this.state = 406;
        this.match(BaliComponentParser.T__1);
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
    this.ruleIndex = BaliComponentParser.RULE_element;
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
    if(listener instanceof BaliComponentListener ) {
        listener.enterElement(this);
	}
};

ElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitElement(this);
	}
};

ElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.ElementContext = ElementContext;

BaliComponentParser.prototype.element = function() {

    var localctx = new ElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, BaliComponentParser.RULE_element);
    try {
        this.state = 421;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 408;
            this.angle();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 409;
            this.binary();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 410;
            this.duration();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 411;
            this.moment();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 412;
            this.number();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 413;
            this.percent();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 414;
            this.probability();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 415;
            this.reference();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 416;
            this.symbol();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 417;
            this.tag();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 418;
            this.template();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 419;
            this.text();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 420;
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

function AngleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliComponentParser.RULE_angle;
    return this;
}

AngleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AngleContext.prototype.constructor = AngleContext;

AngleContext.prototype.real = function() {
    return this.getTypedRuleContext(RealContext,0);
};

AngleContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterAngle(this);
	}
};

AngleContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitAngle(this);
	}
};

AngleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitAngle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.AngleContext = AngleContext;

BaliComponentParser.prototype.angle = function() {

    var localctx = new AngleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, BaliComponentParser.RULE_angle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 423;
        this.match(BaliComponentParser.T__59);
        this.state = 424;
        this.real();
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
    this.ruleIndex = BaliComponentParser.RULE_binary;
    return this;
}

BinaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinaryContext.prototype.constructor = BinaryContext;

BinaryContext.prototype.BINARY = function() {
    return this.getToken(BaliComponentParser.BINARY, 0);
};

BinaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterBinary(this);
	}
};

BinaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitBinary(this);
	}
};

BinaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitBinary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.BinaryContext = BinaryContext;

BaliComponentParser.prototype.binary = function() {

    var localctx = new BinaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, BaliComponentParser.RULE_binary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 426;
        this.match(BaliComponentParser.BINARY);
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
    this.ruleIndex = BaliComponentParser.RULE_duration;
    return this;
}

DurationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DurationContext.prototype.constructor = DurationContext;

DurationContext.prototype.DURATION = function() {
    return this.getToken(BaliComponentParser.DURATION, 0);
};

DurationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterDuration(this);
	}
};

DurationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitDuration(this);
	}
};

DurationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitDuration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.DurationContext = DurationContext;

BaliComponentParser.prototype.duration = function() {

    var localctx = new DurationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, BaliComponentParser.RULE_duration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 428;
        this.match(BaliComponentParser.DURATION);
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
    this.ruleIndex = BaliComponentParser.RULE_imaginary;
    return this;
}

ImaginaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImaginaryContext.prototype.constructor = ImaginaryContext;

ImaginaryContext.prototype.IMAGINARY = function() {
    return this.getToken(BaliComponentParser.IMAGINARY, 0);
};

ImaginaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterImaginary(this);
	}
};

ImaginaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitImaginary(this);
	}
};

ImaginaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitImaginary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.ImaginaryContext = ImaginaryContext;

BaliComponentParser.prototype.imaginary = function() {

    var localctx = new ImaginaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, BaliComponentParser.RULE_imaginary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 430;
        this.match(BaliComponentParser.IMAGINARY);
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
    this.ruleIndex = BaliComponentParser.RULE_moment;
    return this;
}

MomentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MomentContext.prototype.constructor = MomentContext;

MomentContext.prototype.MOMENT = function() {
    return this.getToken(BaliComponentParser.MOMENT, 0);
};

MomentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterMoment(this);
	}
};

MomentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitMoment(this);
	}
};

MomentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitMoment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.MomentContext = MomentContext;

BaliComponentParser.prototype.moment = function() {

    var localctx = new MomentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, BaliComponentParser.RULE_moment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 432;
        this.match(BaliComponentParser.MOMENT);
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
    this.ruleIndex = BaliComponentParser.RULE_number;
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

BaliComponentParser.RealNumberContext = RealNumberContext;

RealNumberContext.prototype.real = function() {
    return this.getTypedRuleContext(RealContext,0);
};
RealNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterRealNumber(this);
	}
};

RealNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitRealNumber(this);
	}
};

RealNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.InfiniteNumberContext = InfiniteNumberContext;

InfiniteNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterInfiniteNumber(this);
	}
};

InfiniteNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitInfiniteNumber(this);
	}
};

InfiniteNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.UndefinedNumberContext = UndefinedNumberContext;

UndefinedNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterUndefinedNumber(this);
	}
};

UndefinedNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitUndefinedNumber(this);
	}
};

UndefinedNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.ComplexNumberContext = ComplexNumberContext;

ComplexNumberContext.prototype.real = function() {
    return this.getTypedRuleContext(RealContext,0);
};

ComplexNumberContext.prototype.imaginary = function() {
    return this.getTypedRuleContext(ImaginaryContext,0);
};
ComplexNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterComplexNumber(this);
	}
};

ComplexNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitComplexNumber(this);
	}
};

ComplexNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.ImaginaryNumberContext = ImaginaryNumberContext;

ImaginaryNumberContext.prototype.imaginary = function() {
    return this.getTypedRuleContext(ImaginaryContext,0);
};
ImaginaryNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterImaginaryNumber(this);
	}
};

ImaginaryNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitImaginaryNumber(this);
	}
};

ImaginaryNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitImaginaryNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliComponentParser.NumberContext = NumberContext;

BaliComponentParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, BaliComponentParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.state = 444;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliComponentParser.T__60:
            localctx = new UndefinedNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 434;
            this.match(BaliComponentParser.T__60);
            break;
        case BaliComponentParser.T__61:
            localctx = new InfiniteNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 435;
            this.match(BaliComponentParser.T__61);
            break;
        case BaliComponentParser.T__66:
        case BaliComponentParser.REAL:
            localctx = new RealNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 436;
            this.real();
            break;
        case BaliComponentParser.IMAGINARY:
            localctx = new ImaginaryNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 437;
            this.imaginary();
            break;
        case BaliComponentParser.T__2:
            localctx = new ComplexNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 438;
            this.match(BaliComponentParser.T__2);
            this.state = 439;
            this.real();
            this.state = 440;
            localctx.del = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===BaliComponentParser.T__5 || _la===BaliComponentParser.T__62)) {
                localctx.del = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 441;
            this.imaginary();
            this.state = 442;
            this.match(BaliComponentParser.T__3);
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
    this.ruleIndex = BaliComponentParser.RULE_percent;
    return this;
}

PercentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PercentContext.prototype.constructor = PercentContext;

PercentContext.prototype.real = function() {
    return this.getTypedRuleContext(RealContext,0);
};

PercentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterPercent(this);
	}
};

PercentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitPercent(this);
	}
};

PercentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitPercent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.PercentContext = PercentContext;

BaliComponentParser.prototype.percent = function() {

    var localctx = new PercentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, BaliComponentParser.RULE_percent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 446;
        this.real();
        this.state = 447;
        this.match(BaliComponentParser.T__63);
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
    this.ruleIndex = BaliComponentParser.RULE_probability;
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

BaliComponentParser.FalseProbabilityContext = FalseProbabilityContext;

FalseProbabilityContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterFalseProbability(this);
	}
};

FalseProbabilityContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitFalseProbability(this);
	}
};

FalseProbabilityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.TrueProbabilityContext = TrueProbabilityContext;

TrueProbabilityContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterTrueProbability(this);
	}
};

TrueProbabilityContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitTrueProbability(this);
	}
};

TrueProbabilityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.FractionalProbabilityContext = FractionalProbabilityContext;

FractionalProbabilityContext.prototype.FRACTION = function() {
    return this.getToken(BaliComponentParser.FRACTION, 0);
};
FractionalProbabilityContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterFractionalProbability(this);
	}
};

FractionalProbabilityContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitFractionalProbability(this);
	}
};

FractionalProbabilityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitFractionalProbability(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliComponentParser.ProbabilityContext = ProbabilityContext;

BaliComponentParser.prototype.probability = function() {

    var localctx = new ProbabilityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, BaliComponentParser.RULE_probability);
    try {
        this.state = 452;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliComponentParser.T__64:
            localctx = new FalseProbabilityContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 449;
            this.match(BaliComponentParser.T__64);
            break;
        case BaliComponentParser.FRACTION:
            localctx = new FractionalProbabilityContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 450;
            this.match(BaliComponentParser.FRACTION);
            break;
        case BaliComponentParser.T__65:
            localctx = new TrueProbabilityContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 451;
            this.match(BaliComponentParser.T__65);
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
    this.ruleIndex = BaliComponentParser.RULE_real;
    return this;
}

RealContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RealContext.prototype.constructor = RealContext;

RealContext.prototype.REAL = function() {
    return this.getToken(BaliComponentParser.REAL, 0);
};

RealContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterReal(this);
	}
};

RealContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitReal(this);
	}
};

RealContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitReal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.RealContext = RealContext;

BaliComponentParser.prototype.real = function() {

    var localctx = new RealContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, BaliComponentParser.RULE_real);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 454;
        _la = this._input.LA(1);
        if(!(_la===BaliComponentParser.T__66 || _la===BaliComponentParser.REAL)) {
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

function ReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliComponentParser.RULE_reference;
    return this;
}

ReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReferenceContext.prototype.constructor = ReferenceContext;

ReferenceContext.prototype.RESOURCE = function() {
    return this.getToken(BaliComponentParser.RESOURCE, 0);
};

ReferenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterReference(this);
	}
};

ReferenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitReference(this);
	}
};

ReferenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitReference(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.ReferenceContext = ReferenceContext;

BaliComponentParser.prototype.reference = function() {

    var localctx = new ReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, BaliComponentParser.RULE_reference);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 456;
        this.match(BaliComponentParser.RESOURCE);
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
    this.ruleIndex = BaliComponentParser.RULE_symbol;
    return this;
}

SymbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolContext.prototype.constructor = SymbolContext;

SymbolContext.prototype.SYMBOL = function() {
    return this.getToken(BaliComponentParser.SYMBOL, 0);
};

SymbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterSymbol(this);
	}
};

SymbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitSymbol(this);
	}
};

SymbolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitSymbol(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.SymbolContext = SymbolContext;

BaliComponentParser.prototype.symbol = function() {

    var localctx = new SymbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, BaliComponentParser.RULE_symbol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 458;
        this.match(BaliComponentParser.SYMBOL);
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
    this.ruleIndex = BaliComponentParser.RULE_tag;
    return this;
}

TagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagContext.prototype.constructor = TagContext;

TagContext.prototype.TAG = function() {
    return this.getToken(BaliComponentParser.TAG, 0);
};

TagContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterTag(this);
	}
};

TagContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitTag(this);
	}
};

TagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitTag(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.TagContext = TagContext;

BaliComponentParser.prototype.tag = function() {

    var localctx = new TagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, BaliComponentParser.RULE_tag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 460;
        this.match(BaliComponentParser.TAG);
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
    this.ruleIndex = BaliComponentParser.RULE_template;
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

BaliComponentParser.NoneTemplateContext = NoneTemplateContext;

NoneTemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterNoneTemplate(this);
	}
};

NoneTemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitNoneTemplate(this);
	}
};

NoneTemplateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.AnyTemplateContext = AnyTemplateContext;

AnyTemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterAnyTemplate(this);
	}
};

AnyTemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitAnyTemplate(this);
	}
};

AnyTemplateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitAnyTemplate(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliComponentParser.TemplateContext = TemplateContext;

BaliComponentParser.prototype.template = function() {

    var localctx = new TemplateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, BaliComponentParser.RULE_template);
    try {
        this.state = 464;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliComponentParser.T__67:
            localctx = new NoneTemplateContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 462;
            this.match(BaliComponentParser.T__67);
            break;
        case BaliComponentParser.T__68:
            localctx = new AnyTemplateContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 463;
            this.match(BaliComponentParser.T__68);
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
    this.ruleIndex = BaliComponentParser.RULE_text;
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

BaliComponentParser.InlineTextContext = InlineTextContext;

InlineTextContext.prototype.TEXT = function() {
    return this.getToken(BaliComponentParser.TEXT, 0);
};
InlineTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterInlineText(this);
	}
};

InlineTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitInlineText(this);
	}
};

InlineTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
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

BaliComponentParser.NewlineTextContext = NewlineTextContext;

NewlineTextContext.prototype.TEXT_BLOCK = function() {
    return this.getToken(BaliComponentParser.TEXT_BLOCK, 0);
};
NewlineTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterNewlineText(this);
	}
};

NewlineTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitNewlineText(this);
	}
};

NewlineTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitNewlineText(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliComponentParser.TextContext = TextContext;

BaliComponentParser.prototype.text = function() {

    var localctx = new TextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, BaliComponentParser.RULE_text);
    try {
        this.state = 468;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliComponentParser.TEXT:
            localctx = new InlineTextContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 466;
            this.match(BaliComponentParser.TEXT);
            break;
        case BaliComponentParser.TEXT_BLOCK:
            localctx = new NewlineTextContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 467;
            this.match(BaliComponentParser.TEXT_BLOCK);
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
    this.ruleIndex = BaliComponentParser.RULE_version;
    return this;
}

VersionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionContext.prototype.constructor = VersionContext;

VersionContext.prototype.VERSION = function() {
    return this.getToken(BaliComponentParser.VERSION, 0);
};

VersionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.enterVersion(this);
	}
};

VersionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliComponentListener ) {
        listener.exitVersion(this);
	}
};

VersionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliComponentVisitor ) {
        return visitor.visitVersion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliComponentParser.VersionContext = VersionContext;

BaliComponentParser.prototype.version = function() {

    var localctx = new VersionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, BaliComponentParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 470;
        this.match(BaliComponentParser.VERSION);
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


BaliComponentParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 33:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

BaliComponentParser.prototype.expression_sempred = function(localctx, predIndex) {
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


exports.BaliComponentParser = BaliComponentParser;
