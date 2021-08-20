// Generated from src/grammar/Document.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var DocumentListener = require('./DocumentListener').DocumentListener;
var DocumentVisitor = require('./DocumentVisitor').DocumentVisitor;

var grammarFileName = "Document.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003a\u022d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
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
    ":\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004\u0087\n\u0004\u0005\u0004\u0089",
    "\n\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u009f\n\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0006\u0007\u00aa\n\u0007\r\u0007\u000e",
    "\u0007\u00ab\u0005\u0007\u00ae\n\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0005\t\u00b7\n\t\u0003\t\u0003\t\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0005\n\u00bf\n\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0005\r\u00ce\n\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013",
    "\u00f1\n\u0013\f\u0013\u000e\u0013\u00f4\u000b\u0013\u0003\u0013\u0003",
    "\u0013\u0005\u0013\u00f8\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0006\u0014\u0101\n",
    "\u0014\r\u0014\u000e\u0014\u0102\u0003\u0014\u0003\u0014\u0005\u0014",
    "\u0107\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0005\u0015\u010e\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0005\u0019\u0121\n\u0019\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0005\u001b\u0128\n\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u0145\n\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0007\u001d\u0167\n\u001d\f\u001d\u000e\u001d\u016a",
    "\u000b\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 ",
    "\u0003 \u0003!\u0003!\u0003!\u0007!\u0175\n!\f!\u000e!\u0178\u000b!",
    "\u0003!\u0005!\u017b\n!\u0003\"\u0003\"\u0003\"\u0007\"\u0180\n\"\f",
    "\"\u000e\"\u0183\u000b\"\u0003#\u0003#\u0005#\u0187\n#\u0003#\u0005",
    "#\u018a\n#\u0003$\u0003$\u0003$\u0003$\u0005$\u0190\n$\u0003%\u0005",
    "%\u0193\n%\u0003%\u0003%\u0005%\u0197\n%\u0003&\u0003&\u0003&\u0003",
    "&\u0003\'\u0003\'\u0005\'\u019f\n\'\u0003(\u0003(\u0003(\u0003(\u0003",
    ")\u0003)\u0003)\u0007)\u01a8\n)\f)\u000e)\u01ab\u000b)\u0003)\u0003",
    ")\u0003)\u0003)\u0007)\u01b1\n)\f)\u000e)\u01b4\u000b)\u0003)\u0005",
    ")\u01b7\n)\u0003*\u0003*\u0003*\u0007*\u01bc\n*\f*\u000e*\u01bf\u000b",
    "*\u0003*\u0003*\u0003*\u0003*\u0007*\u01c5\n*\f*\u000e*\u01c8\u000b",
    "*\u0003*\u0005*\u01cb\n*\u0003+\u0003+\u0003+\u0003+\u0003,\u0003,\u0003",
    ",\u0003,\u0003-\u0003-\u0003-\u0007-\u01d8\n-\f-\u000e-\u01db\u000b",
    "-\u0003-\u0003-\u0003-\u0003-\u0007-\u01e1\n-\f-\u000e-\u01e4\u000b",
    "-\u0003-\u0005-\u01e7\n-\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u0005/\u01fa\n/\u00030\u00030\u00031\u00031\u00032\u00032\u00033\u0003",
    "3\u00034\u00034\u00035\u00035\u00036\u00036\u00036\u00036\u00036\u0003",
    "6\u00036\u00036\u00036\u00036\u00036\u00036\u00036\u00056\u0215\n6\u0003",
    "6\u00056\u0218\n6\u00037\u00037\u00038\u00038\u00039\u00039\u00039\u0005",
    "9\u0221\n9\u0003:\u0003:\u0003;\u0003;\u0003<\u0003<\u0003=\u0003=\u0003",
    ">\u0003>\u0003>\u0002\u00038?\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ",
    "\\^`bdfhjlnprtvxz\u0002\u000b\u0003\u0002^_\u0003\u0002.0\u0003\u0002",
    ".2\u0003\u000248\u0003\u0002:=\u0003\u0002)*\u0003\u0002CD\u0004\u0002",
    "KLWW\u0003\u0002Z[\u0002\u024b\u0002|\u0003\u0002\u0002\u0002\u0004",
    "\u007f\u0003\u0002\u0002\u0002\u0006\u0088\u0003\u0002\u0002\u0002\b",
    "\u008a\u0003\u0002\u0002\u0002\n\u009e\u0003\u0002\u0002\u0002\f\u00a0",
    "\u0003\u0002\u0002\u0002\u000e\u00af\u0003\u0002\u0002\u0002\u0010\u00b6",
    "\u0003\u0002\u0002\u0002\u0012\u00ba\u0003\u0002\u0002\u0002\u0014\u00c0",
    "\u0003\u0002\u0002\u0002\u0016\u00c3\u0003\u0002\u0002\u0002\u0018\u00c8",
    "\u0003\u0002\u0002\u0002\u001a\u00d3\u0003\u0002\u0002\u0002\u001c\u00d6",
    "\u0003\u0002\u0002\u0002\u001e\u00db\u0003\u0002\u0002\u0002 \u00e0",
    "\u0003\u0002\u0002\u0002\"\u00e3\u0003\u0002\u0002\u0002$\u00e6\u0003",
    "\u0002\u0002\u0002&\u00f9\u0003\u0002\u0002\u0002(\u0108\u0003\u0002",
    "\u0002\u0002*\u0113\u0003\u0002\u0002\u0002,\u0118\u0003\u0002\u0002",
    "\u0002.\u011b\u0003\u0002\u0002\u00020\u011e\u0003\u0002\u0002\u0002",
    "2\u0122\u0003\u0002\u0002\u00024\u0127\u0003\u0002\u0002\u00026\u0129",
    "\u0003\u0002\u0002\u00028\u0144\u0003\u0002\u0002\u0002:\u016b\u0003",
    "\u0002\u0002\u0002<\u016d\u0003\u0002\u0002\u0002>\u016f\u0003\u0002",
    "\u0002\u0002@\u017a\u0003\u0002\u0002\u0002B\u017c\u0003\u0002\u0002",
    "\u0002D\u0184\u0003\u0002\u0002\u0002F\u018f\u0003\u0002\u0002\u0002",
    "H\u0192\u0003\u0002\u0002\u0002J\u0198\u0003\u0002\u0002\u0002L\u019e",
    "\u0003\u0002\u0002\u0002N\u01a0\u0003\u0002\u0002\u0002P\u01b6\u0003",
    "\u0002\u0002\u0002R\u01ca\u0003\u0002\u0002\u0002T\u01cc\u0003\u0002",
    "\u0002\u0002V\u01d0\u0003\u0002\u0002\u0002X\u01e6\u0003\u0002\u0002",
    "\u0002Z\u01e8\u0003\u0002\u0002\u0002\\\u01f9\u0003\u0002\u0002\u0002",
    "^\u01fb\u0003\u0002\u0002\u0002`\u01fd\u0003\u0002\u0002\u0002b\u01ff",
    "\u0003\u0002\u0002\u0002d\u0201\u0003\u0002\u0002\u0002f\u0203\u0003",
    "\u0002\u0002\u0002h\u0205\u0003\u0002\u0002\u0002j\u0217\u0003\u0002",
    "\u0002\u0002l\u0219\u0003\u0002\u0002\u0002n\u021b\u0003\u0002\u0002",
    "\u0002p\u0220\u0003\u0002\u0002\u0002r\u0222\u0003\u0002\u0002\u0002",
    "t\u0224\u0003\u0002\u0002\u0002v\u0226\u0003\u0002\u0002\u0002x\u0228",
    "\u0003\u0002\u0002\u0002z\u022a\u0003\u0002\u0002\u0002|}\u0005D#\u0002",
    "}~\u0007\u0002\u0002\u0003~\u0003\u0003\u0002\u0002\u0002\u007f\u0080",
    "\u0005D#\u0002\u0080\u0081\u0007`\u0002\u0002\u0081\u0082\u0007\u0002",
    "\u0002\u0003\u0082\u0005\u0003\u0002\u0002\u0002\u0083\u0089\u0005\b",
    "\u0005\u0002\u0084\u0086\u0005\n\u0006\u0002\u0085\u0087\u0005\f\u0007",
    "\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002",
    "\u0002\u0087\u0089\u0003\u0002\u0002\u0002\u0088\u0083\u0003\u0002\u0002",
    "\u0002\u0088\u0084\u0003\u0002\u0002\u0002\u0089\u0007\u0003\u0002\u0002",
    "\u0002\u008a\u008b\t\u0002\u0002\u0002\u008b\t\u0003\u0002\u0002\u0002",
    "\u008c\u009f\u0005\u0010\t\u0002\u008d\u009f\u0005\u0012\n\u0002\u008e",
    "\u009f\u0005\u0014\u000b\u0002\u008f\u009f\u0005\u0016\f\u0002\u0090",
    "\u009f\u0005\u0018\r\u0002\u0091\u009f\u0005\u001a\u000e\u0002\u0092",
    "\u009f\u0005\u001c\u000f\u0002\u0093\u009f\u0005\u001e\u0010\u0002\u0094",
    "\u009f\u0005 \u0011\u0002\u0095\u009f\u0005\"\u0012\u0002\u0096\u009f",
    "\u0005$\u0013\u0002\u0097\u009f\u0005&\u0014\u0002\u0098\u009f\u0005",
    "(\u0015\u0002\u0099\u009f\u0005*\u0016\u0002\u009a\u009f\u0005,\u0017",
    "\u0002\u009b\u009f\u0005.\u0018\u0002\u009c\u009f\u00050\u0019\u0002",
    "\u009d\u009f\u00052\u001a\u0002\u009e\u008c\u0003\u0002\u0002\u0002",
    "\u009e\u008d\u0003\u0002\u0002\u0002\u009e\u008e\u0003\u0002\u0002\u0002",
    "\u009e\u008f\u0003\u0002\u0002\u0002\u009e\u0090\u0003\u0002\u0002\u0002",
    "\u009e\u0091\u0003\u0002\u0002\u0002\u009e\u0092\u0003\u0002\u0002\u0002",
    "\u009e\u0093\u0003\u0002\u0002\u0002\u009e\u0094\u0003\u0002\u0002\u0002",
    "\u009e\u0095\u0003\u0002\u0002\u0002\u009e\u0096\u0003\u0002\u0002\u0002",
    "\u009e\u0097\u0003\u0002\u0002\u0002\u009e\u0098\u0003\u0002\u0002\u0002",
    "\u009e\u0099\u0003\u0002\u0002\u0002\u009e\u009a\u0003\u0002\u0002\u0002",
    "\u009e\u009b\u0003\u0002\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002",
    "\u009e\u009d\u0003\u0002\u0002\u0002\u009f\u000b\u0003\u0002\u0002\u0002",
    "\u00a0\u00a1\u0007\u0003\u0002\u0002\u00a1\u00ad\u0005t;\u0002\u00a2",
    "\u00a3\u0007\u0004\u0002\u0002\u00a3\u00ae\u0005\u000e\b\u0002\u00a4",
    "\u00a5\u0007\u0005\u0002\u0002\u00a5\u00a6\u00058\u001d\u0002\u00a6",
    "\u00a7\u0007\u0004\u0002\u0002\u00a7\u00a8\u0005\u000e\b\u0002\u00a8",
    "\u00aa\u0003\u0002\u0002\u0002\u00a9\u00a4\u0003\u0002\u0002\u0002\u00aa",
    "\u00ab\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ab",
    "\u00ac\u0003\u0002\u0002\u0002\u00ac\u00ae\u0003\u0002\u0002\u0002\u00ad",
    "\u00a2\u0003\u0002\u0002\u0002\u00ad\u00a9\u0003\u0002\u0002\u0002\u00ae",
    "\r\u0003\u0002\u0002\u0002\u00af\u00b0\u0007\u0006\u0002\u0002\u00b0",
    "\u00b1\u0005X-\u0002\u00b1\u00b2\u0007\u0007\u0002\u0002\u00b2\u000f",
    "\u0003\u0002\u0002\u0002\u00b3\u00b4\u00054\u001b\u0002\u00b4\u00b5",
    "\u0007\b\u0002\u0002\u00b5\u00b7\u0003\u0002\u0002\u0002\u00b6\u00b3",
    "\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b8",
    "\u0003\u0002\u0002\u0002\u00b8\u00b9\u00058\u001d\u0002\u00b9\u0011",
    "\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\t\u0002\u0002\u00bb\u00be",
    "\u00058\u001d\u0002\u00bc\u00bd\u0007\n\u0002\u0002\u00bd\u00bf\u0005",
    "4\u001b\u0002\u00be\u00bc\u0003\u0002\u0002\u0002\u00be\u00bf\u0003",
    "\u0002\u0002\u0002\u00bf\u0013\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007",
    "\u000b\u0002\u0002\u00c1\u00c2\u00058\u001d\u0002\u00c2\u0015\u0003",
    "\u0002\u0002\u0002\u00c3\u00c4\u0007\f\u0002\u0002\u00c4\u00c5\u0005",
    "8\u001d\u0002\u00c5\u00c6\u0007\n\u0002\u0002\u00c6\u00c7\u00058\u001d",
    "\u0002\u00c7\u0017\u0003\u0002\u0002\u0002\u00c8\u00cd\u0007\r\u0002",
    "\u0002\u00c9\u00ca\u0007\u000e\u0002\u0002\u00ca\u00cb\u00058\u001d",
    "\u0002\u00cb\u00cc\u0007\u000f\u0002\u0002\u00cc\u00ce\u0003\u0002\u0002",
    "\u0002\u00cd\u00c9\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002",
    "\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u00d0\u00054\u001b",
    "\u0002\u00d0\u00d1\u0007\u0010\u0002\u0002\u00d1\u00d2\u00058\u001d",
    "\u0002\u00d2\u0019\u0003\u0002\u0002\u0002\u00d3\u00d4\u0007\u0011\u0002",
    "\u0002\u00d4\u00d5\u00058\u001d\u0002\u00d5\u001b\u0003\u0002\u0002",
    "\u0002\u00d6\u00d7\u0007\u0012\u0002\u0002\u00d7\u00d8\u00058\u001d",
    "\u0002\u00d8\u00d9\u0007\u0013\u0002\u0002\u00d9\u00da\u00058\u001d",
    "\u0002\u00da\u001d\u0003\u0002\u0002\u0002\u00db\u00dc\u0007\u0014\u0002",
    "\u0002\u00dc\u00dd\u00054\u001b\u0002\u00dd\u00de\u0007\u0010\u0002",
    "\u0002\u00de\u00df\u00058\u001d\u0002\u00df\u001f\u0003\u0002\u0002",
    "\u0002\u00e0\u00e1\u0007\u0015\u0002\u0002\u00e1\u00e2\u00058\u001d",
    "\u0002\u00e2!\u0003\u0002\u0002\u0002\u00e3\u00e4\u0007\u0016\u0002",
    "\u0002\u00e4\u00e5\u00058\u001d\u0002\u00e5#\u0003\u0002\u0002\u0002",
    "\u00e6\u00e7\u0007\u0017\u0002\u0002\u00e7\u00e8\u00058\u001d\u0002",
    "\u00e8\u00e9\u0007\u0018\u0002\u0002\u00e9\u00f2\u0005\u000e\b\u0002",
    "\u00ea\u00eb\u0007\u0019\u0002\u0002\u00eb\u00ec\u0007\u0017\u0002\u0002",
    "\u00ec\u00ed\u00058\u001d\u0002\u00ed\u00ee\u0007\u0018\u0002\u0002",
    "\u00ee\u00ef\u0005\u000e\b\u0002\u00ef\u00f1\u0003\u0002\u0002\u0002",
    "\u00f0\u00ea\u0003\u0002\u0002\u0002\u00f1\u00f4\u0003\u0002\u0002\u0002",
    "\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002",
    "\u00f3\u00f7\u0003\u0002\u0002\u0002\u00f4\u00f2\u0003\u0002\u0002\u0002",
    "\u00f5\u00f6\u0007\u0019\u0002\u0002\u00f6\u00f8\u0005\u000e\b\u0002",
    "\u00f7\u00f5\u0003\u0002\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002",
    "\u00f8%\u0003\u0002\u0002\u0002\u00f9\u00fa\u0007\u001a\u0002\u0002",
    "\u00fa\u00fb\u00058\u001d\u0002\u00fb\u0100\u0007\u0010\u0002\u0002",
    "\u00fc\u00fd\u00058\u001d\u0002\u00fd\u00fe\u0007\u001b\u0002\u0002",
    "\u00fe\u00ff\u0005\u000e\b\u0002\u00ff\u0101\u0003\u0002\u0002\u0002",
    "\u0100\u00fc\u0003\u0002\u0002\u0002\u0101\u0102\u0003\u0002\u0002\u0002",
    "\u0102\u0100\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002\u0002\u0002",
    "\u0103\u0106\u0003\u0002\u0002\u0002\u0104\u0105\u0007\u0019\u0002\u0002",
    "\u0105\u0107\u0005\u000e\b\u0002\u0106\u0104\u0003\u0002\u0002\u0002",
    "\u0106\u0107\u0003\u0002\u0002\u0002\u0107\'\u0003\u0002\u0002\u0002",
    "\u0108\u010d\u0007\u0004\u0002\u0002\u0109\u010a\u0007\u001c\u0002\u0002",
    "\u010a\u010b\u0005t;\u0002\u010b\u010c\u0007\u001d\u0002\u0002\u010c",
    "\u010e\u0003\u0002\u0002\u0002\u010d\u0109\u0003\u0002\u0002\u0002\u010d",
    "\u010e\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002\u010f",
    "\u0110\u00058\u001d\u0002\u0110\u0111\u0007\u001b\u0002\u0002\u0111",
    "\u0112\u0005\u000e\b\u0002\u0112)\u0003\u0002\u0002\u0002\u0113\u0114",
    "\u0007\u001e\u0002\u0002\u0114\u0115\u00058\u001d\u0002\u0115\u0116",
    "\u0007\u001b\u0002\u0002\u0116\u0117\u0005\u000e\b\u0002\u0117+\u0003",
    "\u0002\u0002\u0002\u0118\u0119\u0007\u001f\u0002\u0002\u0119\u011a\u0007",
    " \u0002\u0002\u011a-\u0003\u0002\u0002\u0002\u011b\u011c\u0007!\u0002",
    "\u0002\u011c\u011d\u0007 \u0002\u0002\u011d/\u0003\u0002\u0002\u0002",
    "\u011e\u0120\u0007\"\u0002\u0002\u011f\u0121\u00058\u001d\u0002\u0120",
    "\u011f\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002\u0002\u0002\u0121",
    "1\u0003\u0002\u0002\u0002\u0122\u0123\u0007#\u0002\u0002\u0123\u0124",
    "\u00058\u001d\u0002\u01243\u0003\u0002\u0002\u0002\u0125\u0128\u0005",
    "t;\u0002\u0126\u0128\u00056\u001c\u0002\u0127\u0125\u0003\u0002\u0002",
    "\u0002\u0127\u0126\u0003\u0002\u0002\u0002\u01285\u0003\u0002\u0002",
    "\u0002\u0129\u012a\u0005:\u001e\u0002\u012a\u012b\u0007$\u0002\u0002",
    "\u012b\u012c\u0005B\"\u0002\u012c\u012d\u0007%\u0002\u0002\u012d7\u0003",
    "\u0002\u0002\u0002\u012e\u012f\b\u001d\u0001\u0002\u012f\u0145\u0005",
    "D#\u0002\u0130\u0145\u0005:\u001e\u0002\u0131\u0132\u0005<\u001f\u0002",
    "\u0132\u0133\u0007&\u0002\u0002\u0133\u0134\u0005@!\u0002\u0134\u0135",
    "\u0007\'\u0002\u0002\u0135\u0145\u0003\u0002\u0002\u0002\u0136\u0137",
    "\u0007&\u0002\u0002\u0137\u0138\u00058\u001d\u0002\u0138\u0139\u0007",
    "\'\u0002\u0002\u0139\u0145\u0003\u0002\u0002\u0002\u013a\u013b\u0007",
    "(\u0002\u0002\u013b\u0145\u00058\u001d\u000f\u013c\u013d\t\u0003\u0002",
    "\u0002\u013d\u0145\u00058\u001d\t\u013e\u013f\u00073\u0002\u0002\u013f",
    "\u0140\u00058\u001d\u0002\u0140\u0141\u00073\u0002\u0002\u0141\u0145",
    "\u0003\u0002\u0002\u0002\u0142\u0143\u00079\u0002\u0002\u0143\u0145",
    "\u00058\u001d\u0005\u0144\u012e\u0003\u0002\u0002\u0002\u0144\u0130",
    "\u0003\u0002\u0002\u0002\u0144\u0131\u0003\u0002\u0002\u0002\u0144\u0136",
    "\u0003\u0002\u0002\u0002\u0144\u013a\u0003\u0002\u0002\u0002\u0144\u013c",
    "\u0003\u0002\u0002\u0002\u0144\u013e\u0003\u0002\u0002\u0002\u0144\u0142",
    "\u0003\u0002\u0002\u0002\u0145\u0168\u0003\u0002\u0002\u0002\u0146\u0147",
    "\f\f\u0002\u0002\u0147\u0148\u0007+\u0002\u0002\u0148\u0167\u00058\u001d",
    "\r\u0149\u014a\f\n\u0002\u0002\u014a\u014b\u0007-\u0002\u0002\u014b",
    "\u0167\u00058\u001d\n\u014c\u014d\f\b\u0002\u0002\u014d\u014e\t\u0004",
    "\u0002\u0002\u014e\u0167\u00058\u001d\t\u014f\u0150\f\u0006\u0002\u0002",
    "\u0150\u0151\t\u0005\u0002\u0002\u0151\u0167\u00058\u001d\u0007\u0152",
    "\u0153\f\u0004\u0002\u0002\u0153\u0154\t\u0006\u0002\u0002\u0154\u0167",
    "\u00058\u001d\u0005\u0155\u0156\f\u0003\u0002\u0002\u0156\u0157\u0007",
    ">\u0002\u0002\u0157\u0167\u00058\u001d\u0004\u0158\u0159\f\u000e\u0002",
    "\u0002\u0159\u015a\t\u0007\u0002\u0002\u015a\u015b\u0005> \u0002\u015b",
    "\u015c\u0007&\u0002\u0002\u015c\u015d\u0005@!\u0002\u015d\u015e\u0007",
    "\'\u0002\u0002\u015e\u0167\u0003\u0002\u0002\u0002\u015f\u0160\f\r\u0002",
    "\u0002\u0160\u0161\u0007$\u0002\u0002\u0161\u0162\u0005B\"\u0002\u0162",
    "\u0163\u0007%\u0002\u0002\u0163\u0167\u0003\u0002\u0002\u0002\u0164",
    "\u0165\f\u000b\u0002\u0002\u0165\u0167\u0007,\u0002\u0002\u0166\u0146",
    "\u0003\u0002\u0002\u0002\u0166\u0149\u0003\u0002\u0002\u0002\u0166\u014c",
    "\u0003\u0002\u0002\u0002\u0166\u014f\u0003\u0002\u0002\u0002\u0166\u0152",
    "\u0003\u0002\u0002\u0002\u0166\u0155\u0003\u0002\u0002\u0002\u0166\u0158",
    "\u0003\u0002\u0002\u0002\u0166\u015f\u0003\u0002\u0002\u0002\u0166\u0164",
    "\u0003\u0002\u0002\u0002\u0167\u016a\u0003\u0002\u0002\u0002\u0168\u0166",
    "\u0003\u0002\u0002\u0002\u0168\u0169\u0003\u0002\u0002\u0002\u01699",
    "\u0003\u0002\u0002\u0002\u016a\u0168\u0003\u0002\u0002\u0002\u016b\u016c",
    "\u0007]\u0002\u0002\u016c;\u0003\u0002\u0002\u0002\u016d\u016e\u0007",
    "]\u0002\u0002\u016e=\u0003\u0002\u0002\u0002\u016f\u0170\u0007]\u0002",
    "\u0002\u0170?\u0003\u0002\u0002\u0002\u0171\u0176\u00058\u001d\u0002",
    "\u0172\u0173\u0007?\u0002\u0002\u0173\u0175\u00058\u001d\u0002\u0174",
    "\u0172\u0003\u0002\u0002\u0002\u0175\u0178\u0003\u0002\u0002\u0002\u0176",
    "\u0174\u0003\u0002\u0002\u0002\u0176\u0177\u0003\u0002\u0002\u0002\u0177",
    "\u017b\u0003\u0002\u0002\u0002\u0178\u0176\u0003\u0002\u0002\u0002\u0179",
    "\u017b\u0003\u0002\u0002\u0002\u017a\u0171\u0003\u0002\u0002\u0002\u017a",
    "\u0179\u0003\u0002\u0002\u0002\u017bA\u0003\u0002\u0002\u0002\u017c",
    "\u0181\u00058\u001d\u0002\u017d\u017e\u0007?\u0002\u0002\u017e\u0180",
    "\u00058\u001d\u0002\u017f\u017d\u0003\u0002\u0002\u0002\u0180\u0183",
    "\u0003\u0002\u0002\u0002\u0181\u017f\u0003\u0002\u0002\u0002\u0181\u0182",
    "\u0003\u0002\u0002\u0002\u0182C\u0003\u0002\u0002\u0002\u0183\u0181",
    "\u0003\u0002\u0002\u0002\u0184\u0186\u0005F$\u0002\u0185\u0187\u0005",
    "N(\u0002\u0186\u0185\u0003\u0002\u0002\u0002\u0186\u0187\u0003\u0002",
    "\u0002\u0002\u0187\u0189\u0003\u0002\u0002\u0002\u0188\u018a\u0005Z",
    ".\u0002\u0189\u0188\u0003\u0002\u0002\u0002\u0189\u018a\u0003\u0002",
    "\u0002\u0002\u018aE\u0003\u0002\u0002\u0002\u018b\u0190\u0005\\/\u0002",
    "\u018c\u0190\u0005H%\u0002\u018d\u0190\u0005J&\u0002\u018e\u0190\u0005",
    "V,\u0002\u018f\u018b\u0003\u0002\u0002\u0002\u018f\u018c\u0003\u0002",
    "\u0002\u0002\u018f\u018d\u0003\u0002\u0002\u0002\u018f\u018e\u0003\u0002",
    "\u0002\u0002\u0190G\u0003\u0002\u0002\u0002\u0191\u0193\u0005\\/\u0002",
    "\u0192\u0191\u0003\u0002\u0002\u0002\u0192\u0193\u0003\u0002\u0002\u0002",
    "\u0193\u0194\u0003\u0002\u0002\u0002\u0194\u0196\u0007@\u0002\u0002",
    "\u0195\u0197\u0005\\/\u0002\u0196\u0195\u0003\u0002\u0002\u0002\u0196",
    "\u0197\u0003\u0002\u0002\u0002\u0197I\u0003\u0002\u0002\u0002\u0198",
    "\u0199\u0007$\u0002\u0002\u0199\u019a\u0005L\'\u0002\u019a\u019b\u0007",
    "%\u0002\u0002\u019bK\u0003\u0002\u0002\u0002\u019c\u019f\u0005P)\u0002",
    "\u019d\u019f\u0005R*\u0002\u019e\u019c\u0003\u0002\u0002\u0002\u019e",
    "\u019d\u0003\u0002\u0002\u0002\u019fM\u0003\u0002\u0002\u0002\u01a0",
    "\u01a1\u0007&\u0002\u0002\u01a1\u01a2\u0005R*\u0002\u01a2\u01a3\u0007",
    "\'\u0002\u0002\u01a3O\u0003\u0002\u0002\u0002\u01a4\u01a9\u0005D#\u0002",
    "\u01a5\u01a6\u0007?\u0002\u0002\u01a6\u01a8\u0005D#\u0002\u01a7\u01a5",
    "\u0003\u0002\u0002\u0002\u01a8\u01ab\u0003\u0002\u0002\u0002\u01a9\u01a7",
    "\u0003\u0002\u0002\u0002\u01a9\u01aa\u0003\u0002\u0002\u0002\u01aa\u01b7",
    "\u0003\u0002\u0002\u0002\u01ab\u01a9\u0003\u0002\u0002\u0002\u01ac\u01b2",
    "\u0007`\u0002\u0002\u01ad\u01ae\u0005D#\u0002\u01ae\u01af\u0007`\u0002",
    "\u0002\u01af\u01b1\u0003\u0002\u0002\u0002\u01b0\u01ad\u0003\u0002\u0002",
    "\u0002\u01b1\u01b4\u0003\u0002\u0002\u0002\u01b2\u01b0\u0003\u0002\u0002",
    "\u0002\u01b2\u01b3\u0003\u0002\u0002\u0002\u01b3\u01b7\u0003\u0002\u0002",
    "\u0002\u01b4\u01b2\u0003\u0002\u0002\u0002\u01b5\u01b7\u0003\u0002\u0002",
    "\u0002\u01b6\u01a4\u0003\u0002\u0002\u0002\u01b6\u01ac\u0003\u0002\u0002",
    "\u0002\u01b6\u01b5\u0003\u0002\u0002\u0002\u01b7Q\u0003\u0002\u0002",
    "\u0002\u01b8\u01bd\u0005T+\u0002\u01b9\u01ba\u0007?\u0002\u0002\u01ba",
    "\u01bc\u0005T+\u0002\u01bb\u01b9\u0003\u0002\u0002\u0002\u01bc\u01bf",
    "\u0003\u0002\u0002\u0002\u01bd\u01bb\u0003\u0002\u0002\u0002\u01bd\u01be",
    "\u0003\u0002\u0002\u0002\u01be\u01cb\u0003\u0002\u0002\u0002\u01bf\u01bd",
    "\u0003\u0002\u0002\u0002\u01c0\u01c6\u0007`\u0002\u0002\u01c1\u01c2",
    "\u0005T+\u0002\u01c2\u01c3\u0007`\u0002\u0002\u01c3\u01c5\u0003\u0002",
    "\u0002\u0002\u01c4\u01c1\u0003\u0002\u0002\u0002\u01c5\u01c8\u0003\u0002",
    "\u0002\u0002\u01c6\u01c4\u0003\u0002\u0002\u0002\u01c6\u01c7\u0003\u0002",
    "\u0002\u0002\u01c7\u01cb\u0003\u0002\u0002\u0002\u01c8\u01c6\u0003\u0002",
    "\u0002\u0002\u01c9\u01cb\u0007A\u0002\u0002\u01ca\u01b8\u0003\u0002",
    "\u0002\u0002\u01ca\u01c0\u0003\u0002\u0002\u0002\u01ca\u01c9\u0003\u0002",
    "\u0002\u0002\u01cbS\u0003\u0002\u0002\u0002\u01cc\u01cd\u0005\\/\u0002",
    "\u01cd\u01ce\u0007A\u0002\u0002\u01ce\u01cf\u0005D#\u0002\u01cfU\u0003",
    "\u0002\u0002\u0002\u01d0\u01d1\u0007\u0006\u0002\u0002\u01d1\u01d2\u0005",
    "X-\u0002\u01d2\u01d3\u0007\u0007\u0002\u0002\u01d3W\u0003\u0002\u0002",
    "\u0002\u01d4\u01d9\u0005\u0006\u0004\u0002\u01d5\u01d6\u0007B\u0002",
    "\u0002\u01d6\u01d8\u0005\u0006\u0004\u0002\u01d7\u01d5\u0003\u0002\u0002",
    "\u0002\u01d8\u01db\u0003\u0002\u0002\u0002\u01d9\u01d7\u0003\u0002\u0002",
    "\u0002\u01d9\u01da\u0003\u0002\u0002\u0002\u01da\u01e7\u0003\u0002\u0002",
    "\u0002\u01db\u01d9\u0003\u0002\u0002\u0002\u01dc\u01e2\u0007`\u0002",
    "\u0002\u01dd\u01de\u0005\u0006\u0004\u0002\u01de\u01df\u0007`\u0002",
    "\u0002\u01df\u01e1\u0003\u0002\u0002\u0002\u01e0\u01dd\u0003\u0002\u0002",
    "\u0002\u01e1\u01e4\u0003\u0002\u0002\u0002\u01e2\u01e0\u0003\u0002\u0002",
    "\u0002\u01e2\u01e3\u0003\u0002\u0002\u0002\u01e3\u01e7\u0003\u0002\u0002",
    "\u0002\u01e4\u01e2\u0003\u0002\u0002\u0002\u01e5\u01e7\u0003\u0002\u0002",
    "\u0002\u01e6\u01d4\u0003\u0002\u0002\u0002\u01e6\u01dc\u0003\u0002\u0002",
    "\u0002\u01e6\u01e5\u0003\u0002\u0002\u0002\u01e7Y\u0003\u0002\u0002",
    "\u0002\u01e8\u01e9\u0007^\u0002\u0002\u01e9[\u0003\u0002\u0002\u0002",
    "\u01ea\u01fa\u0005^0\u0002\u01eb\u01fa\u0005`1\u0002\u01ec\u01fa\u0005",
    "b2\u0002\u01ed\u01fa\u0005d3\u0002\u01ee\u01fa\u0005f4\u0002\u01ef\u01fa",
    "\u0005h5\u0002\u01f0\u01fa\u0005j6\u0002\u01f1\u01fa\u0005l7\u0002\u01f2",
    "\u01fa\u0005n8\u0002\u01f3\u01fa\u0005p9\u0002\u01f4\u01fa\u0005r:\u0002",
    "\u01f5\u01fa\u0005t;\u0002\u01f6\u01fa\u0005v<\u0002\u01f7\u01fa\u0005",
    "x=\u0002\u01f8\u01fa\u0005z>\u0002\u01f9\u01ea\u0003\u0002\u0002\u0002",
    "\u01f9\u01eb\u0003\u0002\u0002\u0002\u01f9\u01ec\u0003\u0002\u0002\u0002",
    "\u01f9\u01ed\u0003\u0002\u0002\u0002\u01f9\u01ee\u0003\u0002\u0002\u0002",
    "\u01f9\u01ef\u0003\u0002\u0002\u0002\u01f9\u01f0\u0003\u0002\u0002\u0002",
    "\u01f9\u01f1\u0003\u0002\u0002\u0002\u01f9\u01f2\u0003\u0002\u0002\u0002",
    "\u01f9\u01f3\u0003\u0002\u0002\u0002\u01f9\u01f4\u0003\u0002\u0002\u0002",
    "\u01f9\u01f5\u0003\u0002\u0002\u0002\u01f9\u01f6\u0003\u0002\u0002\u0002",
    "\u01f9\u01f7\u0003\u0002\u0002\u0002\u01f9\u01f8\u0003\u0002\u0002\u0002",
    "\u01fa]\u0003\u0002\u0002\u0002\u01fb\u01fc\u0007M\u0002\u0002\u01fc",
    "_\u0003\u0002\u0002\u0002\u01fd\u01fe\u0007N\u0002\u0002\u01fea\u0003",
    "\u0002\u0002\u0002\u01ff\u0200\t\b\u0002\u0002\u0200c\u0003\u0002\u0002",
    "\u0002\u0201\u0202\u0007O\u0002\u0002\u0202e\u0003\u0002\u0002\u0002",
    "\u0203\u0204\u0007R\u0002\u0002\u0204g\u0003\u0002\u0002\u0002\u0205",
    "\u0206\u0007S\u0002\u0002\u0206i\u0003\u0002\u0002\u0002\u0207\u0218",
    "\u0007E\u0002\u0002\u0208\u0218\u0007F\u0002\u0002\u0209\u0218\u0007",
    "G\u0002\u0002\u020a\u0218\u0007H\u0002\u0002\u020b\u0218\u0007V\u0002",
    "\u0002\u020c\u0218\u0007Q\u0002\u0002\u020d\u020e\u0007&\u0002\u0002",
    "\u020e\u0214\u0007V\u0002\u0002\u020f\u0210\u0007?\u0002\u0002\u0210",
    "\u0215\u0007Q\u0002\u0002\u0211\u0212\u0007I\u0002\u0002\u0212\u0213",
    "\u0007M\u0002\u0002\u0213\u0215\u0007J\u0002\u0002\u0214\u020f\u0003",
    "\u0002\u0002\u0002\u0214\u0211\u0003\u0002\u0002\u0002\u0215\u0216\u0003",
    "\u0002\u0002\u0002\u0216\u0218\u0007\'\u0002\u0002\u0217\u0207\u0003",
    "\u0002\u0002\u0002\u0217\u0208\u0003\u0002\u0002\u0002\u0217\u0209\u0003",
    "\u0002\u0002\u0002\u0217\u020a\u0003\u0002\u0002\u0002\u0217\u020b\u0003",
    "\u0002\u0002\u0002\u0217\u020c\u0003\u0002\u0002\u0002\u0217\u020d\u0003",
    "\u0002\u0002\u0002\u0218k\u0003\u0002\u0002\u0002\u0219\u021a\t\t\u0002",
    "\u0002\u021am\u0003\u0002\u0002\u0002\u021b\u021c\u0007T\u0002\u0002",
    "\u021co\u0003\u0002\u0002\u0002\u021d\u0221\u0007P\u0002\u0002\u021e",
    "\u021f\u0007V\u0002\u0002\u021f\u0221\u0007)\u0002\u0002\u0220\u021d",
    "\u0003\u0002\u0002\u0002\u0220\u021e\u0003\u0002\u0002\u0002\u0221q",
    "\u0003\u0002\u0002\u0002\u0222\u0223\u0007U\u0002\u0002\u0223s\u0003",
    "\u0002\u0002\u0002\u0224\u0225\u0007X\u0002\u0002\u0225u\u0003\u0002",
    "\u0002\u0002\u0226\u0227\u0007Y\u0002\u0002\u0227w\u0003\u0002\u0002",
    "\u0002\u0228\u0229\t\n\u0002\u0002\u0229y\u0003\u0002\u0002\u0002\u022a",
    "\u022b\u0007\\\u0002\u0002\u022b{\u0003\u0002\u0002\u0002*\u0086\u0088",
    "\u009e\u00ab\u00ad\u00b6\u00be\u00cd\u00f2\u00f7\u0102\u0106\u010d\u0120",
    "\u0127\u0144\u0166\u0168\u0176\u017a\u0181\u0186\u0189\u018f\u0192\u0196",
    "\u019e\u01a9\u01b2\u01b6\u01bd\u01c6\u01ca\u01d9\u01e2\u01e6\u01f9\u0214",
    "\u0217\u0220"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'handle'", "'with'", "'matching'", "'{'", "'}'", 
                     "':='", "'save'", "'as'", "'discard'", "'sign'", "'checkout'", 
                     "'level'", "'of'", "'from'", "'publish'", "'post'", 
                     "'to'", "'retrieve'", "'accept'", "'reject'", "'if'", 
                     "'then'", "'else'", "'select'", "'do'", "'each'", "'in'", 
                     "'while'", "'continue'", "'loop'", "'break'", "'return'", 
                     "'throw'", "'['", "']'", "'('", "')'", "'@'", "'.'", 
                     "'<-'", "'&'", "'!'", "'^'", "'-'", "'/'", "'*'", "'//'", 
                     "'+'", "'|'", "'<'", "'='", "'>'", "'IS'", "'MATCHES'", 
                     "'NOT'", "'AND'", "'SANS'", "'XOR'", "'OR'", "'?'", 
                     "','", "'..'", "':'", "';'", "'false'", "'true'", "'undefined'", 
                     "'0'", "'\u221E'", "'infinity'", "'e^'", "'i'", "'none'", 
                     "'any'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, "ANGLE", "BINARY", "DURATION", "FRACTION", 
                      "IMAGINARY", "MOMENT", "NAME", "PERCENTAGE", "RESOURCE", 
                      "REAL", "REGEX", "SYMBOL", "TAG", "NARRATIVE", "QUOTE", 
                      "VERSION", "IDENTIFIER", "NOTE", "COMMENT", "EOL", 
                      "SPACE" ];

var ruleNames =  [ "source", "document", "statement", "comment", "mainClause", 
                   "handleClause", "block", "evaluateClause", "saveClause", 
                   "discardClause", "signClause", "checkoutClause", "publishClause", 
                   "postClause", "retrieveClause", "acceptClause", "rejectClause", 
                   "ifClause", "selectClause", "withClause", "whileClause", 
                   "continueClause", "breakClause", "returnClause", "throwClause", 
                   "recipient", "attribute", "expression", "variable", "funcxion", 
                   "message", "arguments", "indices", "component", "value", 
                   "range", "sequence", "collection", "parameters", "list", 
                   "catalog", "association", "procedure", "code", "note", 
                   "element", "angle", "binary", "bulean", "duration", "moment", 
                   "name", "number", "pattern", "percentage", "probability", 
                   "resource", "symbol", "tag", "text", "version" ];

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
DocumentParser.T__69 = 70;
DocumentParser.T__70 = 71;
DocumentParser.T__71 = 72;
DocumentParser.T__72 = 73;
DocumentParser.T__73 = 74;
DocumentParser.ANGLE = 75;
DocumentParser.BINARY = 76;
DocumentParser.DURATION = 77;
DocumentParser.FRACTION = 78;
DocumentParser.IMAGINARY = 79;
DocumentParser.MOMENT = 80;
DocumentParser.NAME = 81;
DocumentParser.PERCENTAGE = 82;
DocumentParser.RESOURCE = 83;
DocumentParser.REAL = 84;
DocumentParser.REGEX = 85;
DocumentParser.SYMBOL = 86;
DocumentParser.TAG = 87;
DocumentParser.NARRATIVE = 88;
DocumentParser.QUOTE = 89;
DocumentParser.VERSION = 90;
DocumentParser.IDENTIFIER = 91;
DocumentParser.NOTE = 92;
DocumentParser.COMMENT = 93;
DocumentParser.EOL = 94;
DocumentParser.SPACE = 95;

DocumentParser.RULE_source = 0;
DocumentParser.RULE_document = 1;
DocumentParser.RULE_statement = 2;
DocumentParser.RULE_comment = 3;
DocumentParser.RULE_mainClause = 4;
DocumentParser.RULE_handleClause = 5;
DocumentParser.RULE_block = 6;
DocumentParser.RULE_evaluateClause = 7;
DocumentParser.RULE_saveClause = 8;
DocumentParser.RULE_discardClause = 9;
DocumentParser.RULE_signClause = 10;
DocumentParser.RULE_checkoutClause = 11;
DocumentParser.RULE_publishClause = 12;
DocumentParser.RULE_postClause = 13;
DocumentParser.RULE_retrieveClause = 14;
DocumentParser.RULE_acceptClause = 15;
DocumentParser.RULE_rejectClause = 16;
DocumentParser.RULE_ifClause = 17;
DocumentParser.RULE_selectClause = 18;
DocumentParser.RULE_withClause = 19;
DocumentParser.RULE_whileClause = 20;
DocumentParser.RULE_continueClause = 21;
DocumentParser.RULE_breakClause = 22;
DocumentParser.RULE_returnClause = 23;
DocumentParser.RULE_throwClause = 24;
DocumentParser.RULE_recipient = 25;
DocumentParser.RULE_attribute = 26;
DocumentParser.RULE_expression = 27;
DocumentParser.RULE_variable = 28;
DocumentParser.RULE_funcxion = 29;
DocumentParser.RULE_message = 30;
DocumentParser.RULE_arguments = 31;
DocumentParser.RULE_indices = 32;
DocumentParser.RULE_component = 33;
DocumentParser.RULE_value = 34;
DocumentParser.RULE_range = 35;
DocumentParser.RULE_sequence = 36;
DocumentParser.RULE_collection = 37;
DocumentParser.RULE_parameters = 38;
DocumentParser.RULE_list = 39;
DocumentParser.RULE_catalog = 40;
DocumentParser.RULE_association = 41;
DocumentParser.RULE_procedure = 42;
DocumentParser.RULE_code = 43;
DocumentParser.RULE_note = 44;
DocumentParser.RULE_element = 45;
DocumentParser.RULE_angle = 46;
DocumentParser.RULE_binary = 47;
DocumentParser.RULE_bulean = 48;
DocumentParser.RULE_duration = 49;
DocumentParser.RULE_moment = 50;
DocumentParser.RULE_name = 51;
DocumentParser.RULE_number = 52;
DocumentParser.RULE_pattern = 53;
DocumentParser.RULE_percentage = 54;
DocumentParser.RULE_probability = 55;
DocumentParser.RULE_resource = 56;
DocumentParser.RULE_symbol = 57;
DocumentParser.RULE_tag = 58;
DocumentParser.RULE_text = 59;
DocumentParser.RULE_version = 60;


function SourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_source;
    return this;
}

SourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceContext.prototype.constructor = SourceContext;

SourceContext.prototype.component = function() {
    return this.getTypedRuleContext(ComponentContext,0);
};

SourceContext.prototype.EOF = function() {
    return this.getToken(DocumentParser.EOF, 0);
};

SourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterSource(this);
	}
};

SourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitSource(this);
	}
};

SourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.SourceContext = SourceContext;

DocumentParser.prototype.source = function() {

    var localctx = new SourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, DocumentParser.RULE_source);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.component();
        this.state = 123;
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

DocumentContext.prototype.EOL = function() {
    return this.getToken(DocumentParser.EOL, 0);
};

DocumentContext.prototype.EOF = function() {
    return this.getToken(DocumentParser.EOF, 0);
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
    this.enterRule(localctx, 2, DocumentParser.RULE_document);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.component();
        this.state = 126;
        this.match(DocumentParser.EOL);
        this.state = 127;
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

StatementContext.prototype.comment = function() {
    return this.getTypedRuleContext(CommentContext,0);
};

StatementContext.prototype.mainClause = function() {
    return this.getTypedRuleContext(MainClauseContext,0);
};

StatementContext.prototype.handleClause = function() {
    return this.getTypedRuleContext(HandleClauseContext,0);
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
    this.enterRule(localctx, 4, DocumentParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 134;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.NOTE:
        case DocumentParser.COMMENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 129;
            this.comment();
            break;
        case DocumentParser.T__1:
        case DocumentParser.T__3:
        case DocumentParser.T__6:
        case DocumentParser.T__8:
        case DocumentParser.T__9:
        case DocumentParser.T__10:
        case DocumentParser.T__14:
        case DocumentParser.T__15:
        case DocumentParser.T__17:
        case DocumentParser.T__18:
        case DocumentParser.T__19:
        case DocumentParser.T__20:
        case DocumentParser.T__23:
        case DocumentParser.T__27:
        case DocumentParser.T__28:
        case DocumentParser.T__30:
        case DocumentParser.T__31:
        case DocumentParser.T__32:
        case DocumentParser.T__33:
        case DocumentParser.T__35:
        case DocumentParser.T__37:
        case DocumentParser.T__43:
        case DocumentParser.T__44:
        case DocumentParser.T__45:
        case DocumentParser.T__48:
        case DocumentParser.T__54:
        case DocumentParser.T__61:
        case DocumentParser.T__64:
        case DocumentParser.T__65:
        case DocumentParser.T__66:
        case DocumentParser.T__67:
        case DocumentParser.T__68:
        case DocumentParser.T__69:
        case DocumentParser.T__72:
        case DocumentParser.T__73:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENTAGE:
        case DocumentParser.RESOURCE:
        case DocumentParser.REAL:
        case DocumentParser.REGEX:
        case DocumentParser.SYMBOL:
        case DocumentParser.TAG:
        case DocumentParser.NARRATIVE:
        case DocumentParser.QUOTE:
        case DocumentParser.VERSION:
        case DocumentParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 130;
            this.mainClause();
            this.state = 132;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===DocumentParser.T__0) {
                this.state = 131;
                this.handleClause();
            }

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


function CommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_comment;
    return this;
}

CommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentContext.prototype.constructor = CommentContext;

CommentContext.prototype.NOTE = function() {
    return this.getToken(DocumentParser.NOTE, 0);
};

CommentContext.prototype.COMMENT = function() {
    return this.getToken(DocumentParser.COMMENT, 0);
};

CommentContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterComment(this);
	}
};

CommentContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitComment(this);
	}
};

CommentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitComment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.CommentContext = CommentContext;

DocumentParser.prototype.comment = function() {

    var localctx = new CommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, DocumentParser.RULE_comment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        _la = this._input.LA(1);
        if(!(_la===DocumentParser.NOTE || _la===DocumentParser.COMMENT)) {
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

MainClauseContext.prototype.saveClause = function() {
    return this.getTypedRuleContext(SaveClauseContext,0);
};

MainClauseContext.prototype.discardClause = function() {
    return this.getTypedRuleContext(DiscardClauseContext,0);
};

MainClauseContext.prototype.signClause = function() {
    return this.getTypedRuleContext(SignClauseContext,0);
};

MainClauseContext.prototype.checkoutClause = function() {
    return this.getTypedRuleContext(CheckoutClauseContext,0);
};

MainClauseContext.prototype.publishClause = function() {
    return this.getTypedRuleContext(PublishClauseContext,0);
};

MainClauseContext.prototype.postClause = function() {
    return this.getTypedRuleContext(PostClauseContext,0);
};

MainClauseContext.prototype.retrieveClause = function() {
    return this.getTypedRuleContext(RetrieveClauseContext,0);
};

MainClauseContext.prototype.acceptClause = function() {
    return this.getTypedRuleContext(AcceptClauseContext,0);
};

MainClauseContext.prototype.rejectClause = function() {
    return this.getTypedRuleContext(RejectClauseContext,0);
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
    this.enterRule(localctx, 8, DocumentParser.RULE_mainClause);
    try {
        this.state = 156;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__3:
        case DocumentParser.T__33:
        case DocumentParser.T__35:
        case DocumentParser.T__37:
        case DocumentParser.T__43:
        case DocumentParser.T__44:
        case DocumentParser.T__45:
        case DocumentParser.T__48:
        case DocumentParser.T__54:
        case DocumentParser.T__61:
        case DocumentParser.T__64:
        case DocumentParser.T__65:
        case DocumentParser.T__66:
        case DocumentParser.T__67:
        case DocumentParser.T__68:
        case DocumentParser.T__69:
        case DocumentParser.T__72:
        case DocumentParser.T__73:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENTAGE:
        case DocumentParser.RESOURCE:
        case DocumentParser.REAL:
        case DocumentParser.REGEX:
        case DocumentParser.SYMBOL:
        case DocumentParser.TAG:
        case DocumentParser.NARRATIVE:
        case DocumentParser.QUOTE:
        case DocumentParser.VERSION:
        case DocumentParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 138;
            this.evaluateClause();
            break;
        case DocumentParser.T__6:
            this.enterOuterAlt(localctx, 2);
            this.state = 139;
            this.saveClause();
            break;
        case DocumentParser.T__8:
            this.enterOuterAlt(localctx, 3);
            this.state = 140;
            this.discardClause();
            break;
        case DocumentParser.T__9:
            this.enterOuterAlt(localctx, 4);
            this.state = 141;
            this.signClause();
            break;
        case DocumentParser.T__10:
            this.enterOuterAlt(localctx, 5);
            this.state = 142;
            this.checkoutClause();
            break;
        case DocumentParser.T__14:
            this.enterOuterAlt(localctx, 6);
            this.state = 143;
            this.publishClause();
            break;
        case DocumentParser.T__15:
            this.enterOuterAlt(localctx, 7);
            this.state = 144;
            this.postClause();
            break;
        case DocumentParser.T__17:
            this.enterOuterAlt(localctx, 8);
            this.state = 145;
            this.retrieveClause();
            break;
        case DocumentParser.T__18:
            this.enterOuterAlt(localctx, 9);
            this.state = 146;
            this.acceptClause();
            break;
        case DocumentParser.T__19:
            this.enterOuterAlt(localctx, 10);
            this.state = 147;
            this.rejectClause();
            break;
        case DocumentParser.T__20:
            this.enterOuterAlt(localctx, 11);
            this.state = 148;
            this.ifClause();
            break;
        case DocumentParser.T__23:
            this.enterOuterAlt(localctx, 12);
            this.state = 149;
            this.selectClause();
            break;
        case DocumentParser.T__1:
            this.enterOuterAlt(localctx, 13);
            this.state = 150;
            this.withClause();
            break;
        case DocumentParser.T__27:
            this.enterOuterAlt(localctx, 14);
            this.state = 151;
            this.whileClause();
            break;
        case DocumentParser.T__28:
            this.enterOuterAlt(localctx, 15);
            this.state = 152;
            this.continueClause();
            break;
        case DocumentParser.T__30:
            this.enterOuterAlt(localctx, 16);
            this.state = 153;
            this.breakClause();
            break;
        case DocumentParser.T__31:
            this.enterOuterAlt(localctx, 17);
            this.state = 154;
            this.returnClause();
            break;
        case DocumentParser.T__32:
            this.enterOuterAlt(localctx, 18);
            this.state = 155;
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

HandleClauseContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

HandleClauseContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
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
    this.enterRule(localctx, 10, DocumentParser.RULE_handleClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.match(DocumentParser.T__0);
        this.state = 159;
        this.symbol();
        this.state = 171;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__1:
            this.state = 160;
            this.match(DocumentParser.T__1);
            this.state = 161;
            this.block();
            break;
        case DocumentParser.T__2:
            this.state = 167; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 162;
                this.match(DocumentParser.T__2);
                this.state = 163;
                this.expression(0);
                this.state = 164;
                this.match(DocumentParser.T__1);
                this.state = 165;
                this.block();
                this.state = 169; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===DocumentParser.T__2);
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

BlockContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
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
    this.enterRule(localctx, 12, DocumentParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(DocumentParser.T__3);
        this.state = 174;
        this.code();
        this.state = 175;
        this.match(DocumentParser.T__4);
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
    this.enterRule(localctx, 14, DocumentParser.RULE_evaluateClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        if(la_===1) {
            this.state = 177;
            this.recipient();
            this.state = 178;
            this.match(DocumentParser.T__5);

        }
        this.state = 182;
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

SaveClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

SaveClauseContext.prototype.recipient = function() {
    return this.getTypedRuleContext(RecipientContext,0);
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
    this.enterRule(localctx, 16, DocumentParser.RULE_saveClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.match(DocumentParser.T__6);
        this.state = 185;
        this.expression(0);
        this.state = 188;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__7) {
            this.state = 186;
            this.match(DocumentParser.T__7);
            this.state = 187;
            this.recipient();
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
    this.enterRule(localctx, 18, DocumentParser.RULE_discardClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(DocumentParser.T__8);
        this.state = 191;
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


function SignClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_signClause;
    return this;
}

SignClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignClauseContext.prototype.constructor = SignClauseContext;

SignClauseContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

SignClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterSignClause(this);
	}
};

SignClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitSignClause(this);
	}
};

SignClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitSignClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.SignClauseContext = SignClauseContext;

DocumentParser.prototype.signClause = function() {

    var localctx = new SignClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, DocumentParser.RULE_signClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.match(DocumentParser.T__9);
        this.state = 194;
        this.expression(0);
        this.state = 195;
        this.match(DocumentParser.T__7);
        this.state = 196;
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

CheckoutClauseContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
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
    this.enterRule(localctx, 22, DocumentParser.RULE_checkoutClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.match(DocumentParser.T__10);
        this.state = 203;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__11) {
            this.state = 199;
            this.match(DocumentParser.T__11);
            this.state = 200;
            this.expression(0);
            this.state = 201;
            this.match(DocumentParser.T__12);
        }

        this.state = 205;
        this.recipient();
        this.state = 206;
        this.match(DocumentParser.T__13);
        this.state = 207;
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
    this.enterRule(localctx, 24, DocumentParser.RULE_publishClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this.match(DocumentParser.T__14);
        this.state = 210;
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


function PostClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_postClause;
    return this;
}

PostClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PostClauseContext.prototype.constructor = PostClauseContext;

PostClauseContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

PostClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterPostClause(this);
	}
};

PostClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitPostClause(this);
	}
};

PostClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitPostClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.PostClauseContext = PostClauseContext;

DocumentParser.prototype.postClause = function() {

    var localctx = new PostClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, DocumentParser.RULE_postClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this.match(DocumentParser.T__15);
        this.state = 213;
        this.expression(0);
        this.state = 214;
        this.match(DocumentParser.T__16);
        this.state = 215;
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


function RetrieveClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_retrieveClause;
    return this;
}

RetrieveClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RetrieveClauseContext.prototype.constructor = RetrieveClauseContext;

RetrieveClauseContext.prototype.recipient = function() {
    return this.getTypedRuleContext(RecipientContext,0);
};

RetrieveClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RetrieveClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterRetrieveClause(this);
	}
};

RetrieveClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitRetrieveClause(this);
	}
};

RetrieveClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitRetrieveClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.RetrieveClauseContext = RetrieveClauseContext;

DocumentParser.prototype.retrieveClause = function() {

    var localctx = new RetrieveClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, DocumentParser.RULE_retrieveClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this.match(DocumentParser.T__17);
        this.state = 218;
        this.recipient();
        this.state = 219;
        this.match(DocumentParser.T__13);
        this.state = 220;
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


function AcceptClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_acceptClause;
    return this;
}

AcceptClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AcceptClauseContext.prototype.constructor = AcceptClauseContext;

AcceptClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AcceptClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterAcceptClause(this);
	}
};

AcceptClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitAcceptClause(this);
	}
};

AcceptClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitAcceptClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.AcceptClauseContext = AcceptClauseContext;

DocumentParser.prototype.acceptClause = function() {

    var localctx = new AcceptClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, DocumentParser.RULE_acceptClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 222;
        this.match(DocumentParser.T__18);
        this.state = 223;
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


function RejectClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_rejectClause;
    return this;
}

RejectClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RejectClauseContext.prototype.constructor = RejectClauseContext;

RejectClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RejectClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterRejectClause(this);
	}
};

RejectClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitRejectClause(this);
	}
};

RejectClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitRejectClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.RejectClauseContext = RejectClauseContext;

DocumentParser.prototype.rejectClause = function() {

    var localctx = new RejectClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, DocumentParser.RULE_rejectClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.match(DocumentParser.T__19);
        this.state = 226;
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
    this.enterRule(localctx, 34, DocumentParser.RULE_ifClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 228;
        this.match(DocumentParser.T__20);
        this.state = 229;
        this.expression(0);
        this.state = 230;
        this.match(DocumentParser.T__21);
        this.state = 231;
        this.block();
        this.state = 240;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 232;
                this.match(DocumentParser.T__22);
                this.state = 233;
                this.match(DocumentParser.T__20);
                this.state = 234;
                this.expression(0);
                this.state = 235;
                this.match(DocumentParser.T__21);
                this.state = 236;
                this.block(); 
            }
            this.state = 242;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

        this.state = 245;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__22) {
            this.state = 243;
            this.match(DocumentParser.T__22);
            this.state = 244;
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
    this.enterRule(localctx, 36, DocumentParser.RULE_selectClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 247;
        this.match(DocumentParser.T__23);
        this.state = 248;
        this.expression(0);
        this.state = 249;
        this.match(DocumentParser.T__13);
        this.state = 254; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 250;
            this.expression(0);
            this.state = 251;
            this.match(DocumentParser.T__24);
            this.state = 252;
            this.block();
            this.state = 256; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===DocumentParser.T__3 || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (DocumentParser.T__33 - 34)) | (1 << (DocumentParser.T__35 - 34)) | (1 << (DocumentParser.T__37 - 34)) | (1 << (DocumentParser.T__43 - 34)) | (1 << (DocumentParser.T__44 - 34)) | (1 << (DocumentParser.T__45 - 34)) | (1 << (DocumentParser.T__48 - 34)) | (1 << (DocumentParser.T__54 - 34)) | (1 << (DocumentParser.T__61 - 34)) | (1 << (DocumentParser.T__64 - 34)))) !== 0) || ((((_la - 66)) & ~0x1f) == 0 && ((1 << (_la - 66)) & ((1 << (DocumentParser.T__65 - 66)) | (1 << (DocumentParser.T__66 - 66)) | (1 << (DocumentParser.T__67 - 66)) | (1 << (DocumentParser.T__68 - 66)) | (1 << (DocumentParser.T__69 - 66)) | (1 << (DocumentParser.T__72 - 66)) | (1 << (DocumentParser.T__73 - 66)) | (1 << (DocumentParser.ANGLE - 66)) | (1 << (DocumentParser.BINARY - 66)) | (1 << (DocumentParser.DURATION - 66)) | (1 << (DocumentParser.FRACTION - 66)) | (1 << (DocumentParser.IMAGINARY - 66)) | (1 << (DocumentParser.MOMENT - 66)) | (1 << (DocumentParser.NAME - 66)) | (1 << (DocumentParser.PERCENTAGE - 66)) | (1 << (DocumentParser.RESOURCE - 66)) | (1 << (DocumentParser.REAL - 66)) | (1 << (DocumentParser.REGEX - 66)) | (1 << (DocumentParser.SYMBOL - 66)) | (1 << (DocumentParser.TAG - 66)) | (1 << (DocumentParser.NARRATIVE - 66)) | (1 << (DocumentParser.QUOTE - 66)) | (1 << (DocumentParser.VERSION - 66)) | (1 << (DocumentParser.IDENTIFIER - 66)))) !== 0));
        this.state = 260;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__22) {
            this.state = 258;
            this.match(DocumentParser.T__22);
            this.state = 259;
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
    this.enterRule(localctx, 38, DocumentParser.RULE_withClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 262;
        this.match(DocumentParser.T__1);
        this.state = 267;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__25) {
            this.state = 263;
            this.match(DocumentParser.T__25);
            this.state = 264;
            this.symbol();
            this.state = 265;
            this.match(DocumentParser.T__26);
        }

        this.state = 269;
        this.expression(0);
        this.state = 270;
        this.match(DocumentParser.T__24);
        this.state = 271;
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
    this.enterRule(localctx, 40, DocumentParser.RULE_whileClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.match(DocumentParser.T__27);
        this.state = 274;
        this.expression(0);
        this.state = 275;
        this.match(DocumentParser.T__24);
        this.state = 276;
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
    this.enterRule(localctx, 42, DocumentParser.RULE_continueClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
        this.match(DocumentParser.T__28);
        this.state = 279;
        this.match(DocumentParser.T__29);
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
    this.enterRule(localctx, 44, DocumentParser.RULE_breakClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this.match(DocumentParser.T__30);
        this.state = 282;
        this.match(DocumentParser.T__29);
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
    this.enterRule(localctx, 46, DocumentParser.RULE_returnClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this.match(DocumentParser.T__31);
        this.state = 286;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__3 || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (DocumentParser.T__33 - 34)) | (1 << (DocumentParser.T__35 - 34)) | (1 << (DocumentParser.T__37 - 34)) | (1 << (DocumentParser.T__43 - 34)) | (1 << (DocumentParser.T__44 - 34)) | (1 << (DocumentParser.T__45 - 34)) | (1 << (DocumentParser.T__48 - 34)) | (1 << (DocumentParser.T__54 - 34)) | (1 << (DocumentParser.T__61 - 34)) | (1 << (DocumentParser.T__64 - 34)))) !== 0) || ((((_la - 66)) & ~0x1f) == 0 && ((1 << (_la - 66)) & ((1 << (DocumentParser.T__65 - 66)) | (1 << (DocumentParser.T__66 - 66)) | (1 << (DocumentParser.T__67 - 66)) | (1 << (DocumentParser.T__68 - 66)) | (1 << (DocumentParser.T__69 - 66)) | (1 << (DocumentParser.T__72 - 66)) | (1 << (DocumentParser.T__73 - 66)) | (1 << (DocumentParser.ANGLE - 66)) | (1 << (DocumentParser.BINARY - 66)) | (1 << (DocumentParser.DURATION - 66)) | (1 << (DocumentParser.FRACTION - 66)) | (1 << (DocumentParser.IMAGINARY - 66)) | (1 << (DocumentParser.MOMENT - 66)) | (1 << (DocumentParser.NAME - 66)) | (1 << (DocumentParser.PERCENTAGE - 66)) | (1 << (DocumentParser.RESOURCE - 66)) | (1 << (DocumentParser.REAL - 66)) | (1 << (DocumentParser.REGEX - 66)) | (1 << (DocumentParser.SYMBOL - 66)) | (1 << (DocumentParser.TAG - 66)) | (1 << (DocumentParser.NARRATIVE - 66)) | (1 << (DocumentParser.QUOTE - 66)) | (1 << (DocumentParser.VERSION - 66)) | (1 << (DocumentParser.IDENTIFIER - 66)))) !== 0)) {
            this.state = 285;
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
    this.enterRule(localctx, 48, DocumentParser.RULE_throwClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 288;
        this.match(DocumentParser.T__32);
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

RecipientContext.prototype.attribute = function() {
    return this.getTypedRuleContext(AttributeContext,0);
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
    this.enterRule(localctx, 50, DocumentParser.RULE_recipient);
    try {
        this.state = 293;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.SYMBOL:
            this.enterOuterAlt(localctx, 1);
            this.state = 291;
            this.symbol();
            break;
        case DocumentParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 292;
            this.attribute();
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


function AttributeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_attribute;
    return this;
}

AttributeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributeContext.prototype.constructor = AttributeContext;

AttributeContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

AttributeContext.prototype.indices = function() {
    return this.getTypedRuleContext(IndicesContext,0);
};

AttributeContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterAttribute(this);
	}
};

AttributeContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitAttribute(this);
	}
};

AttributeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitAttribute(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.AttributeContext = AttributeContext;

DocumentParser.prototype.attribute = function() {

    var localctx = new AttributeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, DocumentParser.RULE_attribute);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        this.variable();
        this.state = 296;
        this.match(DocumentParser.T__33);
        this.state = 297;
        this.indices();
        this.state = 298;
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
    this.op = null; // Token;
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


function AttributeExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AttributeExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AttributeExpressionContext.prototype.constructor = AttributeExpressionContext;

DocumentParser.AttributeExpressionContext = AttributeExpressionContext;

AttributeExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AttributeExpressionContext.prototype.indices = function() {
    return this.getTypedRuleContext(IndicesContext,0);
};
AttributeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterAttributeExpression(this);
	}
};

AttributeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitAttributeExpression(this);
	}
};

AttributeExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitAttributeExpression(this);
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
    var _startState = 54;
    this.enterRecursionRule(localctx, 54, DocumentParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 322;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ComponentExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 301;
            this.component();
            break;

        case 2:
            localctx = new VariableExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 302;
            this.variable();
            break;

        case 3:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 303;
            this.funcxion();
            this.state = 304;
            this.match(DocumentParser.T__35);
            this.state = 305;
            this.arguments();
            this.state = 306;
            this.match(DocumentParser.T__36);
            break;

        case 4:
            localctx = new PrecedenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 308;
            this.match(DocumentParser.T__35);
            this.state = 309;
            this.expression(0);
            this.state = 310;
            this.match(DocumentParser.T__36);
            break;

        case 5:
            localctx = new DereferenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 312;
            this.match(DocumentParser.T__37);
            this.state = 313;
            this.expression(13);
            break;

        case 6:
            localctx = new InversionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 314;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (DocumentParser.T__43 - 44)) | (1 << (DocumentParser.T__44 - 44)) | (1 << (DocumentParser.T__45 - 44)))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 315;
            this.expression(7);
            break;

        case 7:
            localctx = new MagnitudeExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 316;
            this.match(DocumentParser.T__48);
            this.state = 317;
            this.expression(0);
            this.state = 318;
            this.match(DocumentParser.T__48);
            break;

        case 8:
            localctx = new ComplementExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 320;
            this.match(DocumentParser.T__54);
            this.state = 321;
            this.expression(3);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 358;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 356;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ConcatenationExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 324;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 325;
                    this.match(DocumentParser.T__40);
                    this.state = 326;
                    this.expression(11);
                    break;

                case 2:
                    localctx = new ExponentialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 327;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 328;
                    this.match(DocumentParser.T__42);
                    this.state = 329;
                    this.expression(8);
                    break;

                case 3:
                    localctx = new ArithmeticExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 330;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 331;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (DocumentParser.T__43 - 44)) | (1 << (DocumentParser.T__44 - 44)) | (1 << (DocumentParser.T__45 - 44)) | (1 << (DocumentParser.T__46 - 44)) | (1 << (DocumentParser.T__47 - 44)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 332;
                    this.expression(7);
                    break;

                case 4:
                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 333;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 334;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 50)) & ~0x1f) == 0 && ((1 << (_la - 50)) & ((1 << (DocumentParser.T__49 - 50)) | (1 << (DocumentParser.T__50 - 50)) | (1 << (DocumentParser.T__51 - 50)) | (1 << (DocumentParser.T__52 - 50)) | (1 << (DocumentParser.T__53 - 50)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 335;
                    this.expression(5);
                    break;

                case 5:
                    localctx = new LogicalExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 336;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 337;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (DocumentParser.T__55 - 56)) | (1 << (DocumentParser.T__56 - 56)) | (1 << (DocumentParser.T__57 - 56)) | (1 << (DocumentParser.T__58 - 56)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 338;
                    this.expression(3);
                    break;

                case 6:
                    localctx = new DefaultExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 339;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 340;
                    this.match(DocumentParser.T__59);
                    this.state = 341;
                    this.expression(2);
                    break;

                case 7:
                    localctx = new MessageExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 342;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 343;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===DocumentParser.T__38 || _la===DocumentParser.T__39)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 344;
                    this.message();
                    this.state = 345;
                    this.match(DocumentParser.T__35);
                    this.state = 346;
                    this.arguments();
                    this.state = 347;
                    this.match(DocumentParser.T__36);
                    break;

                case 8:
                    localctx = new AttributeExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 349;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 350;
                    this.match(DocumentParser.T__33);
                    this.state = 351;
                    this.indices();
                    this.state = 352;
                    this.match(DocumentParser.T__34);
                    break;

                case 9:
                    localctx = new FactorialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 354;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 355;
                    this.match(DocumentParser.T__41);
                    break;

                } 
            }
            this.state = 360;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
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
    this.enterRule(localctx, 56, DocumentParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 361;
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
    this.enterRule(localctx, 58, DocumentParser.RULE_funcxion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 363;
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
    this.enterRule(localctx, 60, DocumentParser.RULE_message);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 365;
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

ArgumentsContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
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
    this.enterRule(localctx, 62, DocumentParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.state = 376;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__3:
        case DocumentParser.T__33:
        case DocumentParser.T__35:
        case DocumentParser.T__37:
        case DocumentParser.T__43:
        case DocumentParser.T__44:
        case DocumentParser.T__45:
        case DocumentParser.T__48:
        case DocumentParser.T__54:
        case DocumentParser.T__61:
        case DocumentParser.T__64:
        case DocumentParser.T__65:
        case DocumentParser.T__66:
        case DocumentParser.T__67:
        case DocumentParser.T__68:
        case DocumentParser.T__69:
        case DocumentParser.T__72:
        case DocumentParser.T__73:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENTAGE:
        case DocumentParser.RESOURCE:
        case DocumentParser.REAL:
        case DocumentParser.REGEX:
        case DocumentParser.SYMBOL:
        case DocumentParser.TAG:
        case DocumentParser.NARRATIVE:
        case DocumentParser.QUOTE:
        case DocumentParser.VERSION:
        case DocumentParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 367;
            this.expression(0);
            this.state = 372;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===DocumentParser.T__60) {
                this.state = 368;
                this.match(DocumentParser.T__60);
                this.state = 369;
                this.expression(0);
                this.state = 374;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.T__36:
            this.enterOuterAlt(localctx, 2);

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

IndicesContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
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
    this.enterRule(localctx, 64, DocumentParser.RULE_indices);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 378;
        this.expression(0);
        this.state = 383;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DocumentParser.T__60) {
            this.state = 379;
            this.match(DocumentParser.T__60);
            this.state = 380;
            this.expression(0);
            this.state = 385;
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

ComponentContext.prototype.note = function() {
    return this.getTypedRuleContext(NoteContext,0);
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
    this.enterRule(localctx, 66, DocumentParser.RULE_component);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 386;
        this.value();
        this.state = 388;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        if(la_===1) {
            this.state = 387;
            this.parameters();

        }
        this.state = 391;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        if(la_===1) {
            this.state = 390;
            this.note();

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

ValueContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

ValueContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
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
    this.enterRule(localctx, 68, DocumentParser.RULE_value);
    try {
        this.state = 397;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 393;
            this.element();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 394;
            this.range();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 395;
            this.sequence();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 396;
            this.procedure();
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
    this.ruleIndex = DocumentParser.RULE_range;
    return this;
}

RangeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RangeContext.prototype.constructor = RangeContext;

RangeContext.prototype.element = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementContext);
    } else {
        return this.getTypedRuleContext(ElementContext,i);
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
    this.enterRule(localctx, 70, DocumentParser.RULE_range);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 400;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (DocumentParser.T__35 - 36)) | (1 << (DocumentParser.T__64 - 36)) | (1 << (DocumentParser.T__65 - 36)) | (1 << (DocumentParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (DocumentParser.T__67 - 68)) | (1 << (DocumentParser.T__68 - 68)) | (1 << (DocumentParser.T__69 - 68)) | (1 << (DocumentParser.T__72 - 68)) | (1 << (DocumentParser.T__73 - 68)) | (1 << (DocumentParser.ANGLE - 68)) | (1 << (DocumentParser.BINARY - 68)) | (1 << (DocumentParser.DURATION - 68)) | (1 << (DocumentParser.FRACTION - 68)) | (1 << (DocumentParser.IMAGINARY - 68)) | (1 << (DocumentParser.MOMENT - 68)) | (1 << (DocumentParser.NAME - 68)) | (1 << (DocumentParser.PERCENTAGE - 68)) | (1 << (DocumentParser.RESOURCE - 68)) | (1 << (DocumentParser.REAL - 68)) | (1 << (DocumentParser.REGEX - 68)) | (1 << (DocumentParser.SYMBOL - 68)) | (1 << (DocumentParser.TAG - 68)) | (1 << (DocumentParser.NARRATIVE - 68)) | (1 << (DocumentParser.QUOTE - 68)) | (1 << (DocumentParser.VERSION - 68)))) !== 0)) {
            this.state = 399;
            this.element();
        }

        this.state = 402;
        this.match(DocumentParser.T__61);
        this.state = 404;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        if(la_===1) {
            this.state = 403;
            this.element();

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

SequenceContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
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
    this.enterRule(localctx, 72, DocumentParser.RULE_sequence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 406;
        this.match(DocumentParser.T__33);
        this.state = 407;
        this.collection();
        this.state = 408;
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

CollectionContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

CollectionContext.prototype.catalog = function() {
    return this.getTypedRuleContext(CatalogContext,0);
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
    this.enterRule(localctx, 74, DocumentParser.RULE_collection);
    try {
        this.state = 412;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 410;
            this.list();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 411;
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
    this.enterRule(localctx, 76, DocumentParser.RULE_parameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 414;
        this.match(DocumentParser.T__35);
        this.state = 415;
        this.catalog();
        this.state = 416;
        this.match(DocumentParser.T__36);
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

ListContext.prototype.component = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ComponentContext);
    } else {
        return this.getTypedRuleContext(ComponentContext,i);
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
    this.enterRule(localctx, 78, DocumentParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.state = 436;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__3:
        case DocumentParser.T__33:
        case DocumentParser.T__35:
        case DocumentParser.T__61:
        case DocumentParser.T__64:
        case DocumentParser.T__65:
        case DocumentParser.T__66:
        case DocumentParser.T__67:
        case DocumentParser.T__68:
        case DocumentParser.T__69:
        case DocumentParser.T__72:
        case DocumentParser.T__73:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENTAGE:
        case DocumentParser.RESOURCE:
        case DocumentParser.REAL:
        case DocumentParser.REGEX:
        case DocumentParser.SYMBOL:
        case DocumentParser.TAG:
        case DocumentParser.NARRATIVE:
        case DocumentParser.QUOTE:
        case DocumentParser.VERSION:
            this.enterOuterAlt(localctx, 1);
            this.state = 418;
            this.component();
            this.state = 423;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===DocumentParser.T__60) {
                this.state = 419;
                this.match(DocumentParser.T__60);
                this.state = 420;
                this.component();
                this.state = 425;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.EOL:
            this.enterOuterAlt(localctx, 2);
            this.state = 426;
            this.match(DocumentParser.EOL);
            this.state = 432;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===DocumentParser.T__3 || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (DocumentParser.T__33 - 34)) | (1 << (DocumentParser.T__35 - 34)) | (1 << (DocumentParser.T__61 - 34)) | (1 << (DocumentParser.T__64 - 34)))) !== 0) || ((((_la - 66)) & ~0x1f) == 0 && ((1 << (_la - 66)) & ((1 << (DocumentParser.T__65 - 66)) | (1 << (DocumentParser.T__66 - 66)) | (1 << (DocumentParser.T__67 - 66)) | (1 << (DocumentParser.T__68 - 66)) | (1 << (DocumentParser.T__69 - 66)) | (1 << (DocumentParser.T__72 - 66)) | (1 << (DocumentParser.T__73 - 66)) | (1 << (DocumentParser.ANGLE - 66)) | (1 << (DocumentParser.BINARY - 66)) | (1 << (DocumentParser.DURATION - 66)) | (1 << (DocumentParser.FRACTION - 66)) | (1 << (DocumentParser.IMAGINARY - 66)) | (1 << (DocumentParser.MOMENT - 66)) | (1 << (DocumentParser.NAME - 66)) | (1 << (DocumentParser.PERCENTAGE - 66)) | (1 << (DocumentParser.RESOURCE - 66)) | (1 << (DocumentParser.REAL - 66)) | (1 << (DocumentParser.REGEX - 66)) | (1 << (DocumentParser.SYMBOL - 66)) | (1 << (DocumentParser.TAG - 66)) | (1 << (DocumentParser.NARRATIVE - 66)) | (1 << (DocumentParser.QUOTE - 66)) | (1 << (DocumentParser.VERSION - 66)))) !== 0)) {
                this.state = 427;
                this.component();
                this.state = 428;
                this.match(DocumentParser.EOL);
                this.state = 434;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.T__34:
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
    this.enterRule(localctx, 80, DocumentParser.RULE_catalog);
    var _la = 0; // Token type
    try {
        this.state = 456;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__35:
        case DocumentParser.T__64:
        case DocumentParser.T__65:
        case DocumentParser.T__66:
        case DocumentParser.T__67:
        case DocumentParser.T__68:
        case DocumentParser.T__69:
        case DocumentParser.T__72:
        case DocumentParser.T__73:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENTAGE:
        case DocumentParser.RESOURCE:
        case DocumentParser.REAL:
        case DocumentParser.REGEX:
        case DocumentParser.SYMBOL:
        case DocumentParser.TAG:
        case DocumentParser.NARRATIVE:
        case DocumentParser.QUOTE:
        case DocumentParser.VERSION:
            this.enterOuterAlt(localctx, 1);
            this.state = 438;
            this.association();
            this.state = 443;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===DocumentParser.T__60) {
                this.state = 439;
                this.match(DocumentParser.T__60);
                this.state = 440;
                this.association();
                this.state = 445;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.EOL:
            this.enterOuterAlt(localctx, 2);
            this.state = 446;
            this.match(DocumentParser.EOL);
            this.state = 452;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (DocumentParser.T__35 - 36)) | (1 << (DocumentParser.T__64 - 36)) | (1 << (DocumentParser.T__65 - 36)) | (1 << (DocumentParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (DocumentParser.T__67 - 68)) | (1 << (DocumentParser.T__68 - 68)) | (1 << (DocumentParser.T__69 - 68)) | (1 << (DocumentParser.T__72 - 68)) | (1 << (DocumentParser.T__73 - 68)) | (1 << (DocumentParser.ANGLE - 68)) | (1 << (DocumentParser.BINARY - 68)) | (1 << (DocumentParser.DURATION - 68)) | (1 << (DocumentParser.FRACTION - 68)) | (1 << (DocumentParser.IMAGINARY - 68)) | (1 << (DocumentParser.MOMENT - 68)) | (1 << (DocumentParser.NAME - 68)) | (1 << (DocumentParser.PERCENTAGE - 68)) | (1 << (DocumentParser.RESOURCE - 68)) | (1 << (DocumentParser.REAL - 68)) | (1 << (DocumentParser.REGEX - 68)) | (1 << (DocumentParser.SYMBOL - 68)) | (1 << (DocumentParser.TAG - 68)) | (1 << (DocumentParser.NARRATIVE - 68)) | (1 << (DocumentParser.QUOTE - 68)) | (1 << (DocumentParser.VERSION - 68)))) !== 0)) {
                this.state = 447;
                this.association();
                this.state = 448;
                this.match(DocumentParser.EOL);
                this.state = 454;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.T__62:
            this.enterOuterAlt(localctx, 3);
            this.state = 455;
            this.match(DocumentParser.T__62);
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

AssociationContext.prototype.element = function() {
    return this.getTypedRuleContext(ElementContext,0);
};

AssociationContext.prototype.component = function() {
    return this.getTypedRuleContext(ComponentContext,0);
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
    this.enterRule(localctx, 82, DocumentParser.RULE_association);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 458;
        this.element();
        this.state = 459;
        this.match(DocumentParser.T__62);
        this.state = 460;
        this.component();
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

ProcedureContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
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
    this.enterRule(localctx, 84, DocumentParser.RULE_procedure);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 462;
        this.match(DocumentParser.T__3);
        this.state = 463;
        this.code();
        this.state = 464;
        this.match(DocumentParser.T__4);
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


function CodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_code;
    return this;
}

CodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeContext.prototype.constructor = CodeContext;

CodeContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

CodeContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DocumentParser.EOL);
    } else {
        return this.getToken(DocumentParser.EOL, i);
    }
};


CodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterCode(this);
	}
};

CodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitCode(this);
	}
};

CodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.CodeContext = CodeContext;

DocumentParser.prototype.code = function() {

    var localctx = new CodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, DocumentParser.RULE_code);
    var _la = 0; // Token type
    try {
        this.state = 484;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__1:
        case DocumentParser.T__3:
        case DocumentParser.T__6:
        case DocumentParser.T__8:
        case DocumentParser.T__9:
        case DocumentParser.T__10:
        case DocumentParser.T__14:
        case DocumentParser.T__15:
        case DocumentParser.T__17:
        case DocumentParser.T__18:
        case DocumentParser.T__19:
        case DocumentParser.T__20:
        case DocumentParser.T__23:
        case DocumentParser.T__27:
        case DocumentParser.T__28:
        case DocumentParser.T__30:
        case DocumentParser.T__31:
        case DocumentParser.T__32:
        case DocumentParser.T__33:
        case DocumentParser.T__35:
        case DocumentParser.T__37:
        case DocumentParser.T__43:
        case DocumentParser.T__44:
        case DocumentParser.T__45:
        case DocumentParser.T__48:
        case DocumentParser.T__54:
        case DocumentParser.T__61:
        case DocumentParser.T__64:
        case DocumentParser.T__65:
        case DocumentParser.T__66:
        case DocumentParser.T__67:
        case DocumentParser.T__68:
        case DocumentParser.T__69:
        case DocumentParser.T__72:
        case DocumentParser.T__73:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENTAGE:
        case DocumentParser.RESOURCE:
        case DocumentParser.REAL:
        case DocumentParser.REGEX:
        case DocumentParser.SYMBOL:
        case DocumentParser.TAG:
        case DocumentParser.NARRATIVE:
        case DocumentParser.QUOTE:
        case DocumentParser.VERSION:
        case DocumentParser.IDENTIFIER:
        case DocumentParser.NOTE:
        case DocumentParser.COMMENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 466;
            this.statement();
            this.state = 471;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===DocumentParser.T__63) {
                this.state = 467;
                this.match(DocumentParser.T__63);
                this.state = 468;
                this.statement();
                this.state = 473;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.EOL:
            this.enterOuterAlt(localctx, 2);
            this.state = 474;
            this.match(DocumentParser.EOL);
            this.state = 480;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DocumentParser.T__1) | (1 << DocumentParser.T__3) | (1 << DocumentParser.T__6) | (1 << DocumentParser.T__8) | (1 << DocumentParser.T__9) | (1 << DocumentParser.T__10) | (1 << DocumentParser.T__14) | (1 << DocumentParser.T__15) | (1 << DocumentParser.T__17) | (1 << DocumentParser.T__18) | (1 << DocumentParser.T__19) | (1 << DocumentParser.T__20) | (1 << DocumentParser.T__23) | (1 << DocumentParser.T__27) | (1 << DocumentParser.T__28) | (1 << DocumentParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (DocumentParser.T__31 - 32)) | (1 << (DocumentParser.T__32 - 32)) | (1 << (DocumentParser.T__33 - 32)) | (1 << (DocumentParser.T__35 - 32)) | (1 << (DocumentParser.T__37 - 32)) | (1 << (DocumentParser.T__43 - 32)) | (1 << (DocumentParser.T__44 - 32)) | (1 << (DocumentParser.T__45 - 32)) | (1 << (DocumentParser.T__48 - 32)) | (1 << (DocumentParser.T__54 - 32)) | (1 << (DocumentParser.T__61 - 32)))) !== 0) || ((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (DocumentParser.T__64 - 65)) | (1 << (DocumentParser.T__65 - 65)) | (1 << (DocumentParser.T__66 - 65)) | (1 << (DocumentParser.T__67 - 65)) | (1 << (DocumentParser.T__68 - 65)) | (1 << (DocumentParser.T__69 - 65)) | (1 << (DocumentParser.T__72 - 65)) | (1 << (DocumentParser.T__73 - 65)) | (1 << (DocumentParser.ANGLE - 65)) | (1 << (DocumentParser.BINARY - 65)) | (1 << (DocumentParser.DURATION - 65)) | (1 << (DocumentParser.FRACTION - 65)) | (1 << (DocumentParser.IMAGINARY - 65)) | (1 << (DocumentParser.MOMENT - 65)) | (1 << (DocumentParser.NAME - 65)) | (1 << (DocumentParser.PERCENTAGE - 65)) | (1 << (DocumentParser.RESOURCE - 65)) | (1 << (DocumentParser.REAL - 65)) | (1 << (DocumentParser.REGEX - 65)) | (1 << (DocumentParser.SYMBOL - 65)) | (1 << (DocumentParser.TAG - 65)) | (1 << (DocumentParser.NARRATIVE - 65)) | (1 << (DocumentParser.QUOTE - 65)) | (1 << (DocumentParser.VERSION - 65)) | (1 << (DocumentParser.IDENTIFIER - 65)) | (1 << (DocumentParser.NOTE - 65)) | (1 << (DocumentParser.COMMENT - 65)))) !== 0)) {
                this.state = 475;
                this.statement();
                this.state = 476;
                this.match(DocumentParser.EOL);
                this.state = 482;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.T__4:
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


function NoteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_note;
    return this;
}

NoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteContext.prototype.constructor = NoteContext;

NoteContext.prototype.NOTE = function() {
    return this.getToken(DocumentParser.NOTE, 0);
};

NoteContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterNote(this);
	}
};

NoteContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitNote(this);
	}
};

NoteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitNote(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.NoteContext = NoteContext;

DocumentParser.prototype.note = function() {

    var localctx = new NoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, DocumentParser.RULE_note);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 486;
        this.match(DocumentParser.NOTE);
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

ElementContext.prototype.bulean = function() {
    return this.getTypedRuleContext(BuleanContext,0);
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

ElementContext.prototype.percentage = function() {
    return this.getTypedRuleContext(PercentageContext,0);
};

ElementContext.prototype.probability = function() {
    return this.getTypedRuleContext(ProbabilityContext,0);
};

ElementContext.prototype.resource = function() {
    return this.getTypedRuleContext(ResourceContext,0);
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
    this.enterRule(localctx, 90, DocumentParser.RULE_element);
    try {
        this.state = 503;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 488;
            this.angle();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 489;
            this.binary();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 490;
            this.bulean();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 491;
            this.duration();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 492;
            this.moment();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 493;
            this.name();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 494;
            this.number();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 495;
            this.pattern();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 496;
            this.percentage();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 497;
            this.probability();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 498;
            this.resource();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 499;
            this.symbol();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 500;
            this.tag();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 501;
            this.text();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 502;
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
    this.enterRule(localctx, 92, DocumentParser.RULE_angle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 505;
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
    this.enterRule(localctx, 94, DocumentParser.RULE_binary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 507;
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


function BuleanContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_bulean;
    return this;
}

BuleanContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BuleanContext.prototype.constructor = BuleanContext;


BuleanContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterBulean(this);
	}
};

BuleanContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitBulean(this);
	}
};

BuleanContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitBulean(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.BuleanContext = BuleanContext;

DocumentParser.prototype.bulean = function() {

    var localctx = new BuleanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, DocumentParser.RULE_bulean);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 509;
        _la = this._input.LA(1);
        if(!(_la===DocumentParser.T__64 || _la===DocumentParser.T__65)) {
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
    this.enterRule(localctx, 98, DocumentParser.RULE_duration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 511;
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
    this.enterRule(localctx, 100, DocumentParser.RULE_moment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 513;
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
    this.enterRule(localctx, 102, DocumentParser.RULE_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 515;
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

NumberContext.prototype.REAL = function() {
    return this.getToken(DocumentParser.REAL, 0);
};

NumberContext.prototype.IMAGINARY = function() {
    return this.getToken(DocumentParser.IMAGINARY, 0);
};

NumberContext.prototype.ANGLE = function() {
    return this.getToken(DocumentParser.ANGLE, 0);
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
    this.enterRule(localctx, 104, DocumentParser.RULE_number);
    try {
        this.state = 533;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__66:
            this.enterOuterAlt(localctx, 1);
            this.state = 517;
            this.match(DocumentParser.T__66);
            break;
        case DocumentParser.T__67:
            this.enterOuterAlt(localctx, 2);
            this.state = 518;
            this.match(DocumentParser.T__67);
            break;
        case DocumentParser.T__68:
            this.enterOuterAlt(localctx, 3);
            this.state = 519;
            this.match(DocumentParser.T__68);
            break;
        case DocumentParser.T__69:
            this.enterOuterAlt(localctx, 4);
            this.state = 520;
            this.match(DocumentParser.T__69);
            break;
        case DocumentParser.REAL:
            this.enterOuterAlt(localctx, 5);
            this.state = 521;
            this.match(DocumentParser.REAL);
            break;
        case DocumentParser.IMAGINARY:
            this.enterOuterAlt(localctx, 6);
            this.state = 522;
            this.match(DocumentParser.IMAGINARY);
            break;
        case DocumentParser.T__35:
            this.enterOuterAlt(localctx, 7);
            this.state = 523;
            this.match(DocumentParser.T__35);
            this.state = 524;
            this.match(DocumentParser.REAL);
            this.state = 530;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case DocumentParser.T__60:
                this.state = 525;
                this.match(DocumentParser.T__60);
                this.state = 526;
                this.match(DocumentParser.IMAGINARY);
                break;
            case DocumentParser.T__70:
                this.state = 527;
                this.match(DocumentParser.T__70);
                this.state = 528;
                this.match(DocumentParser.ANGLE);
                this.state = 529;
                this.match(DocumentParser.T__71);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 532;
            this.match(DocumentParser.T__36);
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
    this.enterRule(localctx, 106, DocumentParser.RULE_pattern);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 535;
        _la = this._input.LA(1);
        if(!(((((_la - 73)) & ~0x1f) == 0 && ((1 << (_la - 73)) & ((1 << (DocumentParser.T__72 - 73)) | (1 << (DocumentParser.T__73 - 73)) | (1 << (DocumentParser.REGEX - 73)))) !== 0))) {
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


function PercentageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_percentage;
    return this;
}

PercentageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PercentageContext.prototype.constructor = PercentageContext;

PercentageContext.prototype.PERCENTAGE = function() {
    return this.getToken(DocumentParser.PERCENTAGE, 0);
};

PercentageContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterPercentage(this);
	}
};

PercentageContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitPercentage(this);
	}
};

PercentageContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitPercentage(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.PercentageContext = PercentageContext;

DocumentParser.prototype.percentage = function() {

    var localctx = new PercentageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, DocumentParser.RULE_percentage);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 537;
        this.match(DocumentParser.PERCENTAGE);
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

ProbabilityContext.prototype.REAL = function() {
    return this.getToken(DocumentParser.REAL, 0);
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
    this.enterRule(localctx, 110, DocumentParser.RULE_probability);
    try {
        this.state = 542;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.FRACTION:
            this.enterOuterAlt(localctx, 1);
            this.state = 539;
            this.match(DocumentParser.FRACTION);
            break;
        case DocumentParser.REAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 540;
            this.match(DocumentParser.REAL);
            this.state = 541;
            this.match(DocumentParser.T__38);
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


function ResourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DocumentParser.RULE_resource;
    return this;
}

ResourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResourceContext.prototype.constructor = ResourceContext;

ResourceContext.prototype.RESOURCE = function() {
    return this.getToken(DocumentParser.RESOURCE, 0);
};

ResourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.enterResource(this);
	}
};

ResourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof DocumentListener ) {
        listener.exitResource(this);
	}
};

ResourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DocumentVisitor ) {
        return visitor.visitResource(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DocumentParser.ResourceContext = ResourceContext;

DocumentParser.prototype.resource = function() {

    var localctx = new ResourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, DocumentParser.RULE_resource);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 544;
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
    this.enterRule(localctx, 114, DocumentParser.RULE_symbol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 546;
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
    this.enterRule(localctx, 116, DocumentParser.RULE_tag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 548;
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

TextContext.prototype.QUOTE = function() {
    return this.getToken(DocumentParser.QUOTE, 0);
};

TextContext.prototype.NARRATIVE = function() {
    return this.getToken(DocumentParser.NARRATIVE, 0);
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
    this.enterRule(localctx, 118, DocumentParser.RULE_text);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 550;
        _la = this._input.LA(1);
        if(!(_la===DocumentParser.NARRATIVE || _la===DocumentParser.QUOTE)) {
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
    this.enterRule(localctx, 120, DocumentParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 552;
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
	case 27:
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
