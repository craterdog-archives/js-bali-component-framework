// Generated from grammar/BaliDocument.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BaliDocumentListener = require('./BaliDocumentListener').BaliDocumentListener;
var BaliDocumentVisitor = require('./BaliDocumentVisitor').BaliDocumentVisitor;

var grammarFileName = "BaliDocument.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003W\u01e3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
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
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u0003\u0002\u0003",
    "\u0002\u0005\u0002s\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0005\u0003y\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004~\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007\u008b\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0007\t\u0094\n\t\f\t\u000e\t\u0097\u000b\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0007\t\u009d\n\t\f\t\u000e\t\u00a0\u000b",
    "\t\u0003\t\u0005\t\u00a3\n\t\u0003\n\u0003\n\u0003\n\u0007\n\u00a8\n",
    "\n\f\n\u000e\n\u00ab\u000b\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n",
    "\u00b1\n\n\f\n\u000e\n\u00b4\u000b\n\u0003\n\u0005\n\u00b7\n\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0007\r\u00c4\n\r\f\r\u000e\r\u00c7\u000b",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u00cd\n\r\f\r\u000e\r\u00d0",
    "\u000b\r\u0003\r\u0005\r\u00d3\n\r\u0003\u000e\u0003\u000e\u0007\u000e",
    "\u00d7\n\u000e\f\u000e\u000e\u000e\u00da\u000b\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00ec\n\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u00fc\n\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0007",
    "\u001a\u012a\n\u001a\f\u001a\u000e\u001a\u012d\u000b\u001a\u0003\u001a",
    "\u0003\u001a\u0005\u001a\u0131\n\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0006\u001b\u013a",
    "\n\u001b\r\u001b\u000e\u001b\u013b\u0003\u001b\u0003\u001b\u0005\u001b",
    "\u0140\n\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0005\u001c\u0147\n\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003 \u0003 \u0005 \u015a\n \u0003!\u0003!\u0003!\u0003\"\u0003\"",
    "\u0005\"\u0161\n\"\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$",
    "\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0005$\u017a\n$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0007$\u0194\n$\f$\u000e$\u0197\u000b$\u0003%\u0003",
    "%\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0005)\u01b0\n)\u0003*\u0003*\u0003*\u0003+\u0003+\u0003,\u0003",
    ",\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u0003/\u0003/\u0003/\u0003/\u0005/\u01c7\n/\u00030\u00030\u00030\u0003",
    "1\u00031\u00031\u00051\u01cf\n1\u00032\u00032\u00033\u00033\u00034\u0003",
    "4\u00035\u00035\u00036\u00036\u00056\u01db\n6\u00037\u00037\u00057\u01df",
    "\n7\u00038\u00038\u00038\u0002\u0003F9\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@B",
    "DFHJLNPRTVXZ\\^`bdfhjln\u0002\b\u0003\u0002-/\u0003\u0002-1\u0003\u0002",
    "37\u0003\u00029<\u0004\u0002\b\bAA\u0004\u0002EELL\u0002\u01f8\u0002",
    "r\u0003\u0002\u0002\u0002\u0004v\u0003\u0002\u0002\u0002\u0006}\u0003",
    "\u0002\u0002\u0002\b\u007f\u0003\u0002\u0002\u0002\n\u0083\u0003\u0002",
    "\u0002\u0002\f\u008a\u0003\u0002\u0002\u0002\u000e\u008c\u0003\u0002",
    "\u0002\u0002\u0010\u00a2\u0003\u0002\u0002\u0002\u0012\u00b6\u0003\u0002",
    "\u0002\u0002\u0014\u00b8\u0003\u0002\u0002\u0002\u0016\u00bc\u0003\u0002",
    "\u0002\u0002\u0018\u00d2\u0003\u0002\u0002\u0002\u001a\u00d4\u0003\u0002",
    "\u0002\u0002\u001c\u00eb\u0003\u0002\u0002\u0002\u001e\u00ed\u0003\u0002",
    "\u0002\u0002 \u00f4\u0003\u0002\u0002\u0002\"\u00fb\u0003\u0002\u0002",
    "\u0002$\u00ff\u0003\u0002\u0002\u0002&\u0104\u0003\u0002\u0002\u0002",
    "(\u0109\u0003\u0002\u0002\u0002*\u010c\u0003\u0002\u0002\u0002,\u0111",
    "\u0003\u0002\u0002\u0002.\u0114\u0003\u0002\u0002\u00020\u0119\u0003",
    "\u0002\u0002\u00022\u011f\u0003\u0002\u0002\u00024\u0132\u0003\u0002",
    "\u0002\u00026\u0141\u0003\u0002\u0002\u00028\u014c\u0003\u0002\u0002",
    "\u0002:\u0151\u0003\u0002\u0002\u0002<\u0154\u0003\u0002\u0002\u0002",
    ">\u0157\u0003\u0002\u0002\u0002@\u015b\u0003\u0002\u0002\u0002B\u0160",
    "\u0003\u0002\u0002\u0002D\u0162\u0003\u0002\u0002\u0002F\u0179\u0003",
    "\u0002\u0002\u0002H\u0198\u0003\u0002\u0002\u0002J\u019a\u0003\u0002",
    "\u0002\u0002L\u019c\u0003\u0002\u0002\u0002N\u019e\u0003\u0002\u0002",
    "\u0002P\u01af\u0003\u0002\u0002\u0002R\u01b1\u0003\u0002\u0002\u0002",
    "T\u01b4\u0003\u0002\u0002\u0002V\u01b6\u0003\u0002\u0002\u0002X\u01b8",
    "\u0003\u0002\u0002\u0002Z\u01ba\u0003\u0002\u0002\u0002\\\u01c6\u0003",
    "\u0002\u0002\u0002^\u01c8\u0003\u0002\u0002\u0002`\u01ce\u0003\u0002",
    "\u0002\u0002b\u01d0\u0003\u0002\u0002\u0002d\u01d2\u0003\u0002\u0002",
    "\u0002f\u01d4\u0003\u0002\u0002\u0002h\u01d6\u0003\u0002\u0002\u0002",
    "j\u01da\u0003\u0002\u0002\u0002l\u01de\u0003\u0002\u0002\u0002n\u01e0",
    "\u0003\u0002\u0002\u0002ps\u0005\u0004\u0003\u0002qs\u0005\u0018\r\u0002",
    "rp\u0003\u0002\u0002\u0002rq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002",
    "\u0002tu\u0007\u0002\u0002\u0003u\u0003\u0003\u0002\u0002\u0002vx\u0005",
    "\u0006\u0004\u0002wy\u0005\n\u0006\u0002xw\u0003\u0002\u0002\u0002x",
    "y\u0003\u0002\u0002\u0002y\u0005\u0003\u0002\u0002\u0002z~\u0005P)\u0002",
    "{~\u0005\b\u0005\u0002|~\u0005\u0016\f\u0002}z\u0003\u0002\u0002\u0002",
    "}{\u0003\u0002\u0002\u0002}|\u0003\u0002\u0002\u0002~\u0007\u0003\u0002",
    "\u0002\u0002\u007f\u0080\u0007\u0003\u0002\u0002\u0080\u0081\u0005\f",
    "\u0007\u0002\u0081\u0082\u0007\u0004\u0002\u0002\u0082\t\u0003\u0002",
    "\u0002\u0002\u0083\u0084\u0007\u0005\u0002\u0002\u0084\u0085\u0005\f",
    "\u0007\u0002\u0085\u0086\u0007\u0006\u0002\u0002\u0086\u000b\u0003\u0002",
    "\u0002\u0002\u0087\u008b\u0005\u000e\b\u0002\u0088\u008b\u0005\u0010",
    "\t\u0002\u0089\u008b\u0005\u0012\n\u0002\u008a\u0087\u0003\u0002\u0002",
    "\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008a\u0089\u0003\u0002\u0002",
    "\u0002\u008b\r\u0003\u0002\u0002\u0002\u008c\u008d\u0005F$\u0002\u008d",
    "\u008e\u0007\u0007\u0002\u0002\u008e\u008f\u0005F$\u0002\u008f\u000f",
    "\u0003\u0002\u0002\u0002\u0090\u0095\u0005F$\u0002\u0091\u0092\u0007",
    "\b\u0002\u0002\u0092\u0094\u0005F$\u0002\u0093\u0091\u0003\u0002\u0002",
    "\u0002\u0094\u0097\u0003\u0002\u0002\u0002\u0095\u0093\u0003\u0002\u0002",
    "\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u00a3\u0003\u0002\u0002",
    "\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0098\u009e\u0007V\u0002",
    "\u0002\u0099\u009a\u0005F$\u0002\u009a\u009b\u0007V\u0002\u0002\u009b",
    "\u009d\u0003\u0002\u0002\u0002\u009c\u0099\u0003\u0002\u0002\u0002\u009d",
    "\u00a0\u0003\u0002\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009e",
    "\u009f\u0003\u0002\u0002\u0002\u009f\u00a3\u0003\u0002\u0002\u0002\u00a0",
    "\u009e\u0003\u0002\u0002\u0002\u00a1\u00a3\u0003\u0002\u0002\u0002\u00a2",
    "\u0090\u0003\u0002\u0002\u0002\u00a2\u0098\u0003\u0002\u0002\u0002\u00a2",
    "\u00a1\u0003\u0002\u0002\u0002\u00a3\u0011\u0003\u0002\u0002\u0002\u00a4",
    "\u00a9\u0005\u0014\u000b\u0002\u00a5\u00a6\u0007\b\u0002\u0002\u00a6",
    "\u00a8\u0005\u0014\u000b\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a8",
    "\u00ab\u0003\u0002\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9",
    "\u00aa\u0003\u0002\u0002\u0002\u00aa\u00b7\u0003\u0002\u0002\u0002\u00ab",
    "\u00a9\u0003\u0002\u0002\u0002\u00ac\u00b2\u0007V\u0002\u0002\u00ad",
    "\u00ae\u0005\u0014\u000b\u0002\u00ae\u00af\u0007V\u0002\u0002\u00af",
    "\u00b1\u0003\u0002\u0002\u0002\u00b0\u00ad\u0003\u0002\u0002\u0002\u00b1",
    "\u00b4\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b2",
    "\u00b3\u0003\u0002\u0002\u0002\u00b3\u00b7\u0003\u0002\u0002\u0002\u00b4",
    "\u00b2\u0003\u0002\u0002\u0002\u00b5\u00b7\u0007\t\u0002\u0002\u00b6",
    "\u00a4\u0003\u0002\u0002\u0002\u00b6\u00ac\u0003\u0002\u0002\u0002\u00b6",
    "\u00b5\u0003\u0002\u0002\u0002\u00b7\u0013\u0003\u0002\u0002\u0002\u00b8",
    "\u00b9\u0005\u0004\u0003\u0002\u00b9\u00ba\u0007\t\u0002\u0002\u00ba",
    "\u00bb\u0005F$\u0002\u00bb\u0015\u0003\u0002\u0002\u0002\u00bc\u00bd",
    "\u0007\n\u0002\u0002\u00bd\u00be\u0005\u0018\r\u0002\u00be\u00bf\u0007",
    "\u000b\u0002\u0002\u00bf\u0017\u0003\u0002\u0002\u0002\u00c0\u00c5\u0005",
    "\u001a\u000e\u0002\u00c1\u00c2\u0007\f\u0002\u0002\u00c2\u00c4\u0005",
    "\u001a\u000e\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002\u00c4\u00c7\u0003",
    "\u0002\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003",
    "\u0002\u0002\u0002\u00c6\u00d3\u0003\u0002\u0002\u0002\u00c7\u00c5\u0003",
    "\u0002\u0002\u0002\u00c8\u00ce\u0007V\u0002\u0002\u00c9\u00ca\u0005",
    "\u001a\u000e\u0002\u00ca\u00cb\u0007V\u0002\u0002\u00cb\u00cd\u0003",
    "\u0002\u0002\u0002\u00cc\u00c9\u0003\u0002\u0002\u0002\u00cd\u00d0\u0003",
    "\u0002\u0002\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003",
    "\u0002\u0002\u0002\u00cf\u00d3\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003",
    "\u0002\u0002\u0002\u00d1\u00d3\u0003\u0002\u0002\u0002\u00d2\u00c0\u0003",
    "\u0002\u0002\u0002\u00d2\u00c8\u0003\u0002\u0002\u0002\u00d2\u00d1\u0003",
    "\u0002\u0002\u0002\u00d3\u0019\u0003\u0002\u0002\u0002\u00d4\u00d8\u0005",
    "\u001c\u000f\u0002\u00d5\u00d7\u0005\u001e\u0010\u0002\u00d6\u00d5\u0003",
    "\u0002\u0002\u0002\u00d7\u00da\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003",
    "\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9\u001b\u0003",
    "\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002\u00db\u00ec\u0005",
    "\"\u0012\u0002\u00dc\u00ec\u0005$\u0013\u0002\u00dd\u00ec\u0005&\u0014",
    "\u0002\u00de\u00ec\u0005(\u0015\u0002\u00df\u00ec\u0005*\u0016\u0002",
    "\u00e0\u00ec\u0005,\u0017\u0002\u00e1\u00ec\u0005.\u0018\u0002\u00e2",
    "\u00ec\u00050\u0019\u0002\u00e3\u00ec\u00052\u001a\u0002\u00e4\u00ec",
    "\u00054\u001b\u0002\u00e5\u00ec\u00056\u001c\u0002\u00e6\u00ec\u0005",
    "8\u001d\u0002\u00e7\u00ec\u0005:\u001e\u0002\u00e8\u00ec\u0005<\u001f",
    "\u0002\u00e9\u00ec\u0005> \u0002\u00ea\u00ec\u0005@!\u0002\u00eb\u00db",
    "\u0003\u0002\u0002\u0002\u00eb\u00dc\u0003\u0002\u0002\u0002\u00eb\u00dd",
    "\u0003\u0002\u0002\u0002\u00eb\u00de\u0003\u0002\u0002\u0002\u00eb\u00df",
    "\u0003\u0002\u0002\u0002\u00eb\u00e0\u0003\u0002\u0002\u0002\u00eb\u00e1",
    "\u0003\u0002\u0002\u0002\u00eb\u00e2\u0003\u0002\u0002\u0002\u00eb\u00e3",
    "\u0003\u0002\u0002\u0002\u00eb\u00e4\u0003\u0002\u0002\u0002\u00eb\u00e5",
    "\u0003\u0002\u0002\u0002\u00eb\u00e6\u0003\u0002\u0002\u0002\u00eb\u00e7",
    "\u0003\u0002\u0002\u0002\u00eb\u00e8\u0003\u0002\u0002\u0002\u00eb\u00e9",
    "\u0003\u0002\u0002\u0002\u00eb\u00ea\u0003\u0002\u0002\u0002\u00ec\u001d",
    "\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007\r\u0002\u0002\u00ee\u00ef",
    "\u0005f4\u0002\u00ef\u00f0\u0007\u000e\u0002\u0002\u00f0\u00f1\u0005",
    "F$\u0002\u00f1\u00f2\u0007\u000f\u0002\u0002\u00f2\u00f3\u0005 \u0011",
    "\u0002\u00f3\u001f\u0003\u0002\u0002\u0002\u00f4\u00f5\u0007\n\u0002",
    "\u0002\u00f5\u00f6\u0005\u0018\r\u0002\u00f6\u00f7\u0007\u000b\u0002",
    "\u0002\u00f7!\u0003\u0002\u0002\u0002\u00f8\u00f9\u0005B\"\u0002\u00f9",
    "\u00fa\u0007\u0010\u0002\u0002\u00fa\u00fc\u0003\u0002\u0002\u0002\u00fb",
    "\u00f8\u0003\u0002\u0002\u0002\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc",
    "\u00fd\u0003\u0002\u0002\u0002\u00fd\u00fe\u0005F$\u0002\u00fe#\u0003",
    "\u0002\u0002\u0002\u00ff\u0100\u0007\u0011\u0002\u0002\u0100\u0101\u0005",
    "B\"\u0002\u0101\u0102\u0007\u0012\u0002\u0002\u0102\u0103\u0005F$\u0002",
    "\u0103%\u0003\u0002\u0002\u0002\u0104\u0105\u0007\u0013\u0002\u0002",
    "\u0105\u0106\u0005F$\u0002\u0106\u0107\u0007\u0014\u0002\u0002\u0107",
    "\u0108\u0005F$\u0002\u0108\'\u0003\u0002\u0002\u0002\u0109\u010a\u0007",
    "\u0015\u0002\u0002\u010a\u010b\u0005F$\u0002\u010b)\u0003\u0002\u0002",
    "\u0002\u010c\u010d\u0007\u0016\u0002\u0002\u010d\u010e\u0005F$\u0002",
    "\u010e\u010f\u0007\u0014\u0002\u0002\u010f\u0110\u0005F$\u0002\u0110",
    "+\u0003\u0002\u0002\u0002\u0111\u0112\u0007\u0017\u0002\u0002\u0112",
    "\u0113\u0005F$\u0002\u0113-\u0003\u0002\u0002\u0002\u0114\u0115\u0007",
    "\u0018\u0002\u0002\u0115\u0116\u0005F$\u0002\u0116\u0117\u0007\u0019",
    "\u0002\u0002\u0117\u0118\u0005F$\u0002\u0118/\u0003\u0002\u0002\u0002",
    "\u0119\u011a\u0007\u001a\u0002\u0002\u011a\u011b\u0007\u001b\u0002\u0002",
    "\u011b\u011c\u0005B\"\u0002\u011c\u011d\u0007\u0012\u0002\u0002\u011d",
    "\u011e\u0005F$\u0002\u011e1\u0003\u0002\u0002\u0002\u011f\u0120\u0007",
    "\u001c\u0002\u0002\u0120\u0121\u0005F$\u0002\u0121\u0122\u0007\u001d",
    "\u0002\u0002\u0122\u012b\u0005 \u0011\u0002\u0123\u0124\u0007\u001e",
    "\u0002\u0002\u0124\u0125\u0007\u001c\u0002\u0002\u0125\u0126\u0005F",
    "$\u0002\u0126\u0127\u0007\u001d\u0002\u0002\u0127\u0128\u0005 \u0011",
    "\u0002\u0128\u012a\u0003\u0002\u0002\u0002\u0129\u0123\u0003\u0002\u0002",
    "\u0002\u012a\u012d\u0003\u0002\u0002\u0002\u012b\u0129\u0003\u0002\u0002",
    "\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c\u0130\u0003\u0002\u0002",
    "\u0002\u012d\u012b\u0003\u0002\u0002\u0002\u012e\u012f\u0007\u001e\u0002",
    "\u0002\u012f\u0131\u0005 \u0011\u0002\u0130\u012e\u0003\u0002\u0002",
    "\u0002\u0130\u0131\u0003\u0002\u0002\u0002\u01313\u0003\u0002\u0002",
    "\u0002\u0132\u0133\u0007\u001f\u0002\u0002\u0133\u0134\u0005F$\u0002",
    "\u0134\u0139\u0007\u0012\u0002\u0002\u0135\u0136\u0005F$\u0002\u0136",
    "\u0137\u0007 \u0002\u0002\u0137\u0138\u0005 \u0011\u0002\u0138\u013a",
    "\u0003\u0002\u0002\u0002\u0139\u0135\u0003\u0002\u0002\u0002\u013a\u013b",
    "\u0003\u0002\u0002\u0002\u013b\u0139\u0003\u0002\u0002\u0002\u013b\u013c",
    "\u0003\u0002\u0002\u0002\u013c\u013f\u0003\u0002\u0002\u0002\u013d\u013e",
    "\u0007\u001e\u0002\u0002\u013e\u0140\u0005 \u0011\u0002\u013f\u013d",
    "\u0003\u0002\u0002\u0002\u013f\u0140\u0003\u0002\u0002\u0002\u01405",
    "\u0003\u0002\u0002\u0002\u0141\u0146\u0007\u000f\u0002\u0002\u0142\u0143",
    "\u0007!\u0002\u0002\u0143\u0144\u0005f4\u0002\u0144\u0145\u0007\"\u0002",
    "\u0002\u0145\u0147\u0003\u0002\u0002\u0002\u0146\u0142\u0003\u0002\u0002",
    "\u0002\u0146\u0147\u0003\u0002\u0002\u0002\u0147\u0148\u0003\u0002\u0002",
    "\u0002\u0148\u0149\u0005F$\u0002\u0149\u014a\u0007 \u0002\u0002\u014a",
    "\u014b\u0005 \u0011\u0002\u014b7\u0003\u0002\u0002\u0002\u014c\u014d",
    "\u0007#\u0002\u0002\u014d\u014e\u0005F$\u0002\u014e\u014f\u0007 \u0002",
    "\u0002\u014f\u0150\u0005 \u0011\u0002\u01509\u0003\u0002\u0002\u0002",
    "\u0151\u0152\u0007$\u0002\u0002\u0152\u0153\u0007%\u0002\u0002\u0153",
    ";\u0003\u0002\u0002\u0002\u0154\u0155\u0007&\u0002\u0002\u0155\u0156",
    "\u0007%\u0002\u0002\u0156=\u0003\u0002\u0002\u0002\u0157\u0159\u0007",
    "\'\u0002\u0002\u0158\u015a\u0005F$\u0002\u0159\u0158\u0003\u0002\u0002",
    "\u0002\u0159\u015a\u0003\u0002\u0002\u0002\u015a?\u0003\u0002\u0002",
    "\u0002\u015b\u015c\u0007(\u0002\u0002\u015c\u015d\u0005F$\u0002\u015d",
    "A\u0003\u0002\u0002\u0002\u015e\u0161\u0005f4\u0002\u015f\u0161\u0005",
    "D#\u0002\u0160\u015e\u0003\u0002\u0002\u0002\u0160\u015f\u0003\u0002",
    "\u0002\u0002\u0161C\u0003\u0002\u0002\u0002\u0162\u0163\u0005H%\u0002",
    "\u0163\u0164\u0005N(\u0002\u0164E\u0003\u0002\u0002\u0002\u0165\u0166",
    "\b$\u0001\u0002\u0166\u017a\u0005\u0004\u0003\u0002\u0167\u017a\u0005",
    "H%\u0002\u0168\u0169\u0005J&\u0002\u0169\u016a\u0005\n\u0006\u0002\u016a",
    "\u017a\u0003\u0002\u0002\u0002\u016b\u016c\u0007\u0005\u0002\u0002\u016c",
    "\u016d\u0005F$\u0002\u016d\u016e\u0007\u0006\u0002\u0002\u016e\u017a",
    "\u0003\u0002\u0002\u0002\u016f\u0170\u0007)\u0002\u0002\u0170\u017a",
    "\u0005F$\u000e\u0171\u0172\t\u0002\u0002\u0002\u0172\u017a\u0005F$\t",
    "\u0173\u0174\u00072\u0002\u0002\u0174\u0175\u0005F$\u0002\u0175\u0176",
    "\u00072\u0002\u0002\u0176\u017a\u0003\u0002\u0002\u0002\u0177\u0178",
    "\u00078\u0002\u0002\u0178\u017a\u0005F$\u0005\u0179\u0165\u0003\u0002",
    "\u0002\u0002\u0179\u0167\u0003\u0002\u0002\u0002\u0179\u0168\u0003\u0002",
    "\u0002\u0002\u0179\u016b\u0003\u0002\u0002\u0002\u0179\u016f\u0003\u0002",
    "\u0002\u0002\u0179\u0171\u0003\u0002\u0002\u0002\u0179\u0173\u0003\u0002",
    "\u0002\u0002\u0179\u0177\u0003\u0002\u0002\u0002\u017a\u0195\u0003\u0002",
    "\u0002\u0002\u017b\u017c\f\n\u0002\u0002\u017c\u017d\u0007,\u0002\u0002",
    "\u017d\u0194\u0005F$\n\u017e\u017f\f\b\u0002\u0002\u017f\u0180\t\u0003",
    "\u0002\u0002\u0180\u0194\u0005F$\t\u0181\u0182\f\u0006\u0002\u0002\u0182",
    "\u0183\t\u0004\u0002\u0002\u0183\u0194\u0005F$\u0007\u0184\u0185\f\u0004",
    "\u0002\u0002\u0185\u0186\t\u0005\u0002\u0002\u0186\u0194\u0005F$\u0005",
    "\u0187\u0188\f\u0003\u0002\u0002\u0188\u0189\u0007=\u0002\u0002\u0189",
    "\u0194\u0005F$\u0004\u018a\u018b\f\r\u0002\u0002\u018b\u018c\u0007*",
    "\u0002\u0002\u018c\u018d\u0005L\'\u0002\u018d\u018e\u0005\n\u0006\u0002",
    "\u018e\u0194\u0003\u0002\u0002\u0002\u018f\u0190\f\f\u0002\u0002\u0190",
    "\u0194\u0005N(\u0002\u0191\u0192\f\u000b\u0002\u0002\u0192\u0194\u0007",
    "+\u0002\u0002\u0193\u017b\u0003\u0002\u0002\u0002\u0193\u017e\u0003",
    "\u0002\u0002\u0002\u0193\u0181\u0003\u0002\u0002\u0002\u0193\u0184\u0003",
    "\u0002\u0002\u0002\u0193\u0187\u0003\u0002\u0002\u0002\u0193\u018a\u0003",
    "\u0002\u0002\u0002\u0193\u018f\u0003\u0002\u0002\u0002\u0193\u0191\u0003",
    "\u0002\u0002\u0002\u0194\u0197\u0003\u0002\u0002\u0002\u0195\u0193\u0003",
    "\u0002\u0002\u0002\u0195\u0196\u0003\u0002\u0002\u0002\u0196G\u0003",
    "\u0002\u0002\u0002\u0197\u0195\u0003\u0002\u0002\u0002\u0198\u0199\u0007",
    "U\u0002\u0002\u0199I\u0003\u0002\u0002\u0002\u019a\u019b\u0007U\u0002",
    "\u0002\u019bK\u0003\u0002\u0002\u0002\u019c\u019d\u0007U\u0002\u0002",
    "\u019dM\u0003\u0002\u0002\u0002\u019e\u019f\u0007\u0003\u0002\u0002",
    "\u019f\u01a0\u0005\u0010\t\u0002\u01a0\u01a1\u0007\u0004\u0002\u0002",
    "\u01a1O\u0003\u0002\u0002\u0002\u01a2\u01b0\u0005R*\u0002\u01a3\u01b0",
    "\u0005T+\u0002\u01a4\u01b0\u0005V,\u0002\u01a5\u01b0\u0005Z.\u0002\u01a6",
    "\u01b0\u0005\\/\u0002\u01a7\u01b0\u0005^0\u0002\u01a8\u01b0\u0005`1",
    "\u0002\u01a9\u01b0\u0005d3\u0002\u01aa\u01b0\u0005f4\u0002\u01ab\u01b0",
    "\u0005h5\u0002\u01ac\u01b0\u0005j6\u0002\u01ad\u01b0\u0005l7\u0002\u01ae",
    "\u01b0\u0005n8\u0002\u01af\u01a2\u0003\u0002\u0002\u0002\u01af\u01a3",
    "\u0003\u0002\u0002\u0002\u01af\u01a4\u0003\u0002\u0002\u0002\u01af\u01a5",
    "\u0003\u0002\u0002\u0002\u01af\u01a6\u0003\u0002\u0002\u0002\u01af\u01a7",
    "\u0003\u0002\u0002\u0002\u01af\u01a8\u0003\u0002\u0002\u0002\u01af\u01a9",
    "\u0003\u0002\u0002\u0002\u01af\u01aa\u0003\u0002\u0002\u0002\u01af\u01ab",
    "\u0003\u0002\u0002\u0002\u01af\u01ac\u0003\u0002\u0002\u0002\u01af\u01ad",
    "\u0003\u0002\u0002\u0002\u01af\u01ae\u0003\u0002\u0002\u0002\u01b0Q",
    "\u0003\u0002\u0002\u0002\u01b1\u01b2\u0007>\u0002\u0002\u01b2\u01b3",
    "\u0005b2\u0002\u01b3S\u0003\u0002\u0002\u0002\u01b4\u01b5\u0007R\u0002",
    "\u0002\u01b5U\u0003\u0002\u0002\u0002\u01b6\u01b7\u0007O\u0002\u0002",
    "\u01b7W\u0003\u0002\u0002\u0002\u01b8\u01b9\u0007M\u0002\u0002\u01b9",
    "Y\u0003\u0002\u0002\u0002\u01ba\u01bb\u0007N\u0002\u0002\u01bb[\u0003",
    "\u0002\u0002\u0002\u01bc\u01c7\u0007?\u0002\u0002\u01bd\u01c7\u0007",
    "@\u0002\u0002\u01be\u01c7\u0005b2\u0002\u01bf\u01c7\u0005X-\u0002\u01c0",
    "\u01c1\u0007\u0005\u0002\u0002\u01c1\u01c2\u0005b2\u0002\u01c2\u01c3",
    "\t\u0006\u0002\u0002\u01c3\u01c4\u0005X-\u0002\u01c4\u01c5\u0007\u0006",
    "\u0002\u0002\u01c5\u01c7\u0003\u0002\u0002\u0002\u01c6\u01bc\u0003\u0002",
    "\u0002\u0002\u01c6\u01bd\u0003\u0002\u0002\u0002\u01c6\u01be\u0003\u0002",
    "\u0002\u0002\u01c6\u01bf\u0003\u0002\u0002\u0002\u01c6\u01c0\u0003\u0002",
    "\u0002\u0002\u01c7]\u0003\u0002\u0002\u0002\u01c8\u01c9\u0005b2\u0002",
    "\u01c9\u01ca\u0007B\u0002\u0002\u01ca_\u0003\u0002\u0002\u0002\u01cb",
    "\u01cf\u0007C\u0002\u0002\u01cc\u01cf\u0007K\u0002\u0002\u01cd\u01cf",
    "\u0007D\u0002\u0002\u01ce\u01cb\u0003\u0002\u0002\u0002\u01ce\u01cc",
    "\u0003\u0002\u0002\u0002\u01ce\u01cd\u0003\u0002\u0002\u0002\u01cfa",
    "\u0003\u0002\u0002\u0002\u01d0\u01d1\t\u0007\u0002\u0002\u01d1c\u0003",
    "\u0002\u0002\u0002\u01d2\u01d3\u0007P\u0002\u0002\u01d3e\u0003\u0002",
    "\u0002\u0002\u01d4\u01d5\u0007J\u0002\u0002\u01d5g\u0003\u0002\u0002",
    "\u0002\u01d6\u01d7\u0007I\u0002\u0002\u01d7i\u0003\u0002\u0002\u0002",
    "\u01d8\u01db\u0007F\u0002\u0002\u01d9\u01db\u0007G\u0002\u0002\u01da",
    "\u01d8\u0003\u0002\u0002\u0002\u01da\u01d9\u0003\u0002\u0002\u0002\u01db",
    "k\u0003\u0002\u0002\u0002\u01dc\u01df\u0007T\u0002\u0002\u01dd\u01df",
    "\u0007S\u0002\u0002\u01de\u01dc\u0003\u0002\u0002\u0002\u01de\u01dd",
    "\u0003\u0002\u0002\u0002\u01dfm\u0003\u0002\u0002\u0002\u01e0\u01e1",
    "\u0007Q\u0002\u0002\u01e1o\u0003\u0002\u0002\u0002!rx}\u008a\u0095\u009e",
    "\u00a2\u00a9\u00b2\u00b6\u00c5\u00ce\u00d2\u00d8\u00eb\u00fb\u012b\u0130",
    "\u013b\u013f\u0146\u0159\u0160\u0179\u0193\u0195\u01af\u01c6\u01ce\u01da",
    "\u01de"].join("");


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

var ruleNames =  [ "document", "component", "value", "structure", "parameters", 
                   "collection", "range", "list", "catalog", "association", 
                   "source", "procedure", "statement", "mainClause", "handleClause", 
                   "block", "evaluateClause", "checkoutClause", "saveClause", 
                   "discardClause", "commitClause", "publishClause", "queueClause", 
                   "waitClause", "ifClause", "selectClause", "withClause", 
                   "whileClause", "continueClause", "breakClause", "returnClause", 
                   "throwClause", "recipient", "subcomponent", "expression", 
                   "variable", "funxtion", "message", "indices", "element", 
                   "angle", "binary", "duration", "imaginary", "moment", 
                   "number", "percent", "probability", "real", "reference", 
                   "symbol", "tag", "template", "text", "version" ];

function BaliDocumentParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

BaliDocumentParser.prototype = Object.create(antlr4.Parser.prototype);
BaliDocumentParser.prototype.constructor = BaliDocumentParser;

Object.defineProperty(BaliDocumentParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

BaliDocumentParser.EOF = antlr4.Token.EOF;
BaliDocumentParser.T__0 = 1;
BaliDocumentParser.T__1 = 2;
BaliDocumentParser.T__2 = 3;
BaliDocumentParser.T__3 = 4;
BaliDocumentParser.T__4 = 5;
BaliDocumentParser.T__5 = 6;
BaliDocumentParser.T__6 = 7;
BaliDocumentParser.T__7 = 8;
BaliDocumentParser.T__8 = 9;
BaliDocumentParser.T__9 = 10;
BaliDocumentParser.T__10 = 11;
BaliDocumentParser.T__11 = 12;
BaliDocumentParser.T__12 = 13;
BaliDocumentParser.T__13 = 14;
BaliDocumentParser.T__14 = 15;
BaliDocumentParser.T__15 = 16;
BaliDocumentParser.T__16 = 17;
BaliDocumentParser.T__17 = 18;
BaliDocumentParser.T__18 = 19;
BaliDocumentParser.T__19 = 20;
BaliDocumentParser.T__20 = 21;
BaliDocumentParser.T__21 = 22;
BaliDocumentParser.T__22 = 23;
BaliDocumentParser.T__23 = 24;
BaliDocumentParser.T__24 = 25;
BaliDocumentParser.T__25 = 26;
BaliDocumentParser.T__26 = 27;
BaliDocumentParser.T__27 = 28;
BaliDocumentParser.T__28 = 29;
BaliDocumentParser.T__29 = 30;
BaliDocumentParser.T__30 = 31;
BaliDocumentParser.T__31 = 32;
BaliDocumentParser.T__32 = 33;
BaliDocumentParser.T__33 = 34;
BaliDocumentParser.T__34 = 35;
BaliDocumentParser.T__35 = 36;
BaliDocumentParser.T__36 = 37;
BaliDocumentParser.T__37 = 38;
BaliDocumentParser.T__38 = 39;
BaliDocumentParser.T__39 = 40;
BaliDocumentParser.T__40 = 41;
BaliDocumentParser.T__41 = 42;
BaliDocumentParser.T__42 = 43;
BaliDocumentParser.T__43 = 44;
BaliDocumentParser.T__44 = 45;
BaliDocumentParser.T__45 = 46;
BaliDocumentParser.T__46 = 47;
BaliDocumentParser.T__47 = 48;
BaliDocumentParser.T__48 = 49;
BaliDocumentParser.T__49 = 50;
BaliDocumentParser.T__50 = 51;
BaliDocumentParser.T__51 = 52;
BaliDocumentParser.T__52 = 53;
BaliDocumentParser.T__53 = 54;
BaliDocumentParser.T__54 = 55;
BaliDocumentParser.T__55 = 56;
BaliDocumentParser.T__56 = 57;
BaliDocumentParser.T__57 = 58;
BaliDocumentParser.T__58 = 59;
BaliDocumentParser.T__59 = 60;
BaliDocumentParser.T__60 = 61;
BaliDocumentParser.T__61 = 62;
BaliDocumentParser.T__62 = 63;
BaliDocumentParser.T__63 = 64;
BaliDocumentParser.T__64 = 65;
BaliDocumentParser.T__65 = 66;
BaliDocumentParser.T__66 = 67;
BaliDocumentParser.T__67 = 68;
BaliDocumentParser.T__68 = 69;
BaliDocumentParser.SHELL = 70;
BaliDocumentParser.TAG = 71;
BaliDocumentParser.SYMBOL = 72;
BaliDocumentParser.FRACTION = 73;
BaliDocumentParser.REAL = 74;
BaliDocumentParser.IMAGINARY = 75;
BaliDocumentParser.MOMENT = 76;
BaliDocumentParser.DURATION = 77;
BaliDocumentParser.RESOURCE = 78;
BaliDocumentParser.VERSION = 79;
BaliDocumentParser.BINARY = 80;
BaliDocumentParser.TEXT_BLOCK = 81;
BaliDocumentParser.TEXT = 82;
BaliDocumentParser.IDENTIFIER = 83;
BaliDocumentParser.NEWLINE = 84;
BaliDocumentParser.SPACE = 85;

BaliDocumentParser.RULE_document = 0;
BaliDocumentParser.RULE_component = 1;
BaliDocumentParser.RULE_value = 2;
BaliDocumentParser.RULE_structure = 3;
BaliDocumentParser.RULE_parameters = 4;
BaliDocumentParser.RULE_collection = 5;
BaliDocumentParser.RULE_range = 6;
BaliDocumentParser.RULE_list = 7;
BaliDocumentParser.RULE_catalog = 8;
BaliDocumentParser.RULE_association = 9;
BaliDocumentParser.RULE_source = 10;
BaliDocumentParser.RULE_procedure = 11;
BaliDocumentParser.RULE_statement = 12;
BaliDocumentParser.RULE_mainClause = 13;
BaliDocumentParser.RULE_handleClause = 14;
BaliDocumentParser.RULE_block = 15;
BaliDocumentParser.RULE_evaluateClause = 16;
BaliDocumentParser.RULE_checkoutClause = 17;
BaliDocumentParser.RULE_saveClause = 18;
BaliDocumentParser.RULE_discardClause = 19;
BaliDocumentParser.RULE_commitClause = 20;
BaliDocumentParser.RULE_publishClause = 21;
BaliDocumentParser.RULE_queueClause = 22;
BaliDocumentParser.RULE_waitClause = 23;
BaliDocumentParser.RULE_ifClause = 24;
BaliDocumentParser.RULE_selectClause = 25;
BaliDocumentParser.RULE_withClause = 26;
BaliDocumentParser.RULE_whileClause = 27;
BaliDocumentParser.RULE_continueClause = 28;
BaliDocumentParser.RULE_breakClause = 29;
BaliDocumentParser.RULE_returnClause = 30;
BaliDocumentParser.RULE_throwClause = 31;
BaliDocumentParser.RULE_recipient = 32;
BaliDocumentParser.RULE_subcomponent = 33;
BaliDocumentParser.RULE_expression = 34;
BaliDocumentParser.RULE_variable = 35;
BaliDocumentParser.RULE_funxtion = 36;
BaliDocumentParser.RULE_message = 37;
BaliDocumentParser.RULE_indices = 38;
BaliDocumentParser.RULE_element = 39;
BaliDocumentParser.RULE_angle = 40;
BaliDocumentParser.RULE_binary = 41;
BaliDocumentParser.RULE_duration = 42;
BaliDocumentParser.RULE_imaginary = 43;
BaliDocumentParser.RULE_moment = 44;
BaliDocumentParser.RULE_number = 45;
BaliDocumentParser.RULE_percent = 46;
BaliDocumentParser.RULE_probability = 47;
BaliDocumentParser.RULE_real = 48;
BaliDocumentParser.RULE_reference = 49;
BaliDocumentParser.RULE_symbol = 50;
BaliDocumentParser.RULE_tag = 51;
BaliDocumentParser.RULE_template = 52;
BaliDocumentParser.RULE_text = 53;
BaliDocumentParser.RULE_version = 54;

function DocumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliDocumentParser.RULE_document;
    return this;
}

DocumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocumentContext.prototype.constructor = DocumentContext;

DocumentContext.prototype.EOF = function() {
    return this.getToken(BaliDocumentParser.EOF, 0);
};

DocumentContext.prototype.component = function() {
    return this.getTypedRuleContext(ComponentContext,0);
};

DocumentContext.prototype.procedure = function() {
    return this.getTypedRuleContext(ProcedureContext,0);
};

DocumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterDocument(this);
	}
};

DocumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitDocument(this);
	}
};

DocumentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitDocument(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.DocumentContext = DocumentContext;

BaliDocumentParser.prototype.document = function() {

    var localctx = new DocumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BaliDocumentParser.RULE_document);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.state = 110;
            this.component();
            break;

        case 2:
            this.state = 111;
            this.procedure();
            break;

        }
        this.state = 114;
        this.match(BaliDocumentParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_component;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterComponent(this);
	}
};

ComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitComponent(this);
	}
};

ComponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitComponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.ComponentContext = ComponentContext;

BaliDocumentParser.prototype.component = function() {

    var localctx = new ComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, BaliDocumentParser.RULE_component);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this.value();
        this.state = 118;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        if(la_===1) {
            this.state = 117;
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
    this.ruleIndex = BaliDocumentParser.RULE_value;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.ValueContext = ValueContext;

BaliDocumentParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BaliDocumentParser.RULE_value);
    try {
        this.state = 123;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliDocumentParser.T__2:
        case BaliDocumentParser.T__59:
        case BaliDocumentParser.T__60:
        case BaliDocumentParser.T__61:
        case BaliDocumentParser.T__64:
        case BaliDocumentParser.T__65:
        case BaliDocumentParser.T__66:
        case BaliDocumentParser.T__67:
        case BaliDocumentParser.T__68:
        case BaliDocumentParser.TAG:
        case BaliDocumentParser.SYMBOL:
        case BaliDocumentParser.FRACTION:
        case BaliDocumentParser.REAL:
        case BaliDocumentParser.IMAGINARY:
        case BaliDocumentParser.MOMENT:
        case BaliDocumentParser.DURATION:
        case BaliDocumentParser.RESOURCE:
        case BaliDocumentParser.VERSION:
        case BaliDocumentParser.BINARY:
        case BaliDocumentParser.TEXT_BLOCK:
        case BaliDocumentParser.TEXT:
            this.enterOuterAlt(localctx, 1);
            this.state = 120;
            this.element();
            break;
        case BaliDocumentParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 121;
            this.structure();
            break;
        case BaliDocumentParser.T__7:
            this.enterOuterAlt(localctx, 3);
            this.state = 122;
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
    this.ruleIndex = BaliDocumentParser.RULE_structure;
    return this;
}

StructureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructureContext.prototype.constructor = StructureContext;

StructureContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

StructureContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterStructure(this);
	}
};

StructureContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitStructure(this);
	}
};

StructureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitStructure(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.StructureContext = StructureContext;

BaliDocumentParser.prototype.structure = function() {

    var localctx = new StructureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, BaliDocumentParser.RULE_structure);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(BaliDocumentParser.T__0);
        this.state = 126;
        this.collection();
        this.state = 127;
        this.match(BaliDocumentParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitParameters(this);
	}
};

ParametersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitParameters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.ParametersContext = ParametersContext;

BaliDocumentParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, BaliDocumentParser.RULE_parameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(BaliDocumentParser.T__2);
        this.state = 130;
        this.collection();
        this.state = 131;
        this.match(BaliDocumentParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_collection;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterCollection(this);
	}
};

CollectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitCollection(this);
	}
};

CollectionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitCollection(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.CollectionContext = CollectionContext;

BaliDocumentParser.prototype.collection = function() {

    var localctx = new CollectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, BaliDocumentParser.RULE_collection);
    try {
        this.state = 136;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 133;
            this.range();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 134;
            this.list();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 135;
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
    this.ruleIndex = BaliDocumentParser.RULE_range;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterRange(this);
	}
};

RangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitRange(this);
	}
};

RangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitRange(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.RangeContext = RangeContext;

BaliDocumentParser.prototype.range = function() {

    var localctx = new RangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, BaliDocumentParser.RULE_range);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this.expression(0);
        this.state = 139;
        this.match(BaliDocumentParser.T__4);
        this.state = 140;
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
    this.ruleIndex = BaliDocumentParser.RULE_list;
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

BaliDocumentParser.NewlineListContext = NewlineListContext;

NewlineListContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BaliDocumentParser.NEWLINE);
    } else {
        return this.getToken(BaliDocumentParser.NEWLINE, i);
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterNewlineList(this);
	}
};

NewlineListContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitNewlineList(this);
	}
};

NewlineListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.EmptyListContext = EmptyListContext;

EmptyListContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterEmptyList(this);
	}
};

EmptyListContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitEmptyList(this);
	}
};

EmptyListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.InlineListContext = InlineListContext;

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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterInlineList(this);
	}
};

InlineListContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitInlineList(this);
	}
};

InlineListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitInlineList(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliDocumentParser.ListContext = ListContext;

BaliDocumentParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, BaliDocumentParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.state = 160;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliDocumentParser.T__0:
        case BaliDocumentParser.T__2:
        case BaliDocumentParser.T__7:
        case BaliDocumentParser.T__38:
        case BaliDocumentParser.T__42:
        case BaliDocumentParser.T__43:
        case BaliDocumentParser.T__44:
        case BaliDocumentParser.T__47:
        case BaliDocumentParser.T__53:
        case BaliDocumentParser.T__59:
        case BaliDocumentParser.T__60:
        case BaliDocumentParser.T__61:
        case BaliDocumentParser.T__64:
        case BaliDocumentParser.T__65:
        case BaliDocumentParser.T__66:
        case BaliDocumentParser.T__67:
        case BaliDocumentParser.T__68:
        case BaliDocumentParser.TAG:
        case BaliDocumentParser.SYMBOL:
        case BaliDocumentParser.FRACTION:
        case BaliDocumentParser.REAL:
        case BaliDocumentParser.IMAGINARY:
        case BaliDocumentParser.MOMENT:
        case BaliDocumentParser.DURATION:
        case BaliDocumentParser.RESOURCE:
        case BaliDocumentParser.VERSION:
        case BaliDocumentParser.BINARY:
        case BaliDocumentParser.TEXT_BLOCK:
        case BaliDocumentParser.TEXT:
        case BaliDocumentParser.IDENTIFIER:
            localctx = new InlineListContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 142;
            this.expression(0);
            this.state = 147;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliDocumentParser.T__5) {
                this.state = 143;
                this.match(BaliDocumentParser.T__5);
                this.state = 144;
                this.expression(0);
                this.state = 149;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliDocumentParser.NEWLINE:
            localctx = new NewlineListContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 150;
            this.match(BaliDocumentParser.NEWLINE);
            this.state = 156;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliDocumentParser.T__0) | (1 << BaliDocumentParser.T__2) | (1 << BaliDocumentParser.T__7))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (BaliDocumentParser.T__38 - 39)) | (1 << (BaliDocumentParser.T__42 - 39)) | (1 << (BaliDocumentParser.T__43 - 39)) | (1 << (BaliDocumentParser.T__44 - 39)) | (1 << (BaliDocumentParser.T__47 - 39)) | (1 << (BaliDocumentParser.T__53 - 39)) | (1 << (BaliDocumentParser.T__59 - 39)) | (1 << (BaliDocumentParser.T__60 - 39)) | (1 << (BaliDocumentParser.T__61 - 39)) | (1 << (BaliDocumentParser.T__64 - 39)) | (1 << (BaliDocumentParser.T__65 - 39)) | (1 << (BaliDocumentParser.T__66 - 39)) | (1 << (BaliDocumentParser.T__67 - 39)) | (1 << (BaliDocumentParser.T__68 - 39)))) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (BaliDocumentParser.TAG - 71)) | (1 << (BaliDocumentParser.SYMBOL - 71)) | (1 << (BaliDocumentParser.FRACTION - 71)) | (1 << (BaliDocumentParser.REAL - 71)) | (1 << (BaliDocumentParser.IMAGINARY - 71)) | (1 << (BaliDocumentParser.MOMENT - 71)) | (1 << (BaliDocumentParser.DURATION - 71)) | (1 << (BaliDocumentParser.RESOURCE - 71)) | (1 << (BaliDocumentParser.VERSION - 71)) | (1 << (BaliDocumentParser.BINARY - 71)) | (1 << (BaliDocumentParser.TEXT_BLOCK - 71)) | (1 << (BaliDocumentParser.TEXT - 71)) | (1 << (BaliDocumentParser.IDENTIFIER - 71)))) !== 0)) {
                this.state = 151;
                this.expression(0);
                this.state = 152;
                this.match(BaliDocumentParser.NEWLINE);
                this.state = 158;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliDocumentParser.T__1:
        case BaliDocumentParser.T__3:
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
    this.ruleIndex = BaliDocumentParser.RULE_catalog;
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

BaliDocumentParser.InlineCatalogContext = InlineCatalogContext;

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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterInlineCatalog(this);
	}
};

InlineCatalogContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitInlineCatalog(this);
	}
};

InlineCatalogContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.NewlineCatalogContext = NewlineCatalogContext;

NewlineCatalogContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BaliDocumentParser.NEWLINE);
    } else {
        return this.getToken(BaliDocumentParser.NEWLINE, i);
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterNewlineCatalog(this);
	}
};

NewlineCatalogContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitNewlineCatalog(this);
	}
};

NewlineCatalogContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.EmptyCatalogContext = EmptyCatalogContext;

EmptyCatalogContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterEmptyCatalog(this);
	}
};

EmptyCatalogContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitEmptyCatalog(this);
	}
};

EmptyCatalogContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitEmptyCatalog(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliDocumentParser.CatalogContext = CatalogContext;

BaliDocumentParser.prototype.catalog = function() {

    var localctx = new CatalogContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, BaliDocumentParser.RULE_catalog);
    var _la = 0; // Token type
    try {
        this.state = 180;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliDocumentParser.T__0:
        case BaliDocumentParser.T__2:
        case BaliDocumentParser.T__7:
        case BaliDocumentParser.T__59:
        case BaliDocumentParser.T__60:
        case BaliDocumentParser.T__61:
        case BaliDocumentParser.T__64:
        case BaliDocumentParser.T__65:
        case BaliDocumentParser.T__66:
        case BaliDocumentParser.T__67:
        case BaliDocumentParser.T__68:
        case BaliDocumentParser.TAG:
        case BaliDocumentParser.SYMBOL:
        case BaliDocumentParser.FRACTION:
        case BaliDocumentParser.REAL:
        case BaliDocumentParser.IMAGINARY:
        case BaliDocumentParser.MOMENT:
        case BaliDocumentParser.DURATION:
        case BaliDocumentParser.RESOURCE:
        case BaliDocumentParser.VERSION:
        case BaliDocumentParser.BINARY:
        case BaliDocumentParser.TEXT_BLOCK:
        case BaliDocumentParser.TEXT:
            localctx = new InlineCatalogContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 162;
            this.association();
            this.state = 167;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliDocumentParser.T__5) {
                this.state = 163;
                this.match(BaliDocumentParser.T__5);
                this.state = 164;
                this.association();
                this.state = 169;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliDocumentParser.NEWLINE:
            localctx = new NewlineCatalogContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 170;
            this.match(BaliDocumentParser.NEWLINE);
            this.state = 176;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliDocumentParser.T__0) | (1 << BaliDocumentParser.T__2) | (1 << BaliDocumentParser.T__7))) !== 0) || ((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (BaliDocumentParser.T__59 - 60)) | (1 << (BaliDocumentParser.T__60 - 60)) | (1 << (BaliDocumentParser.T__61 - 60)) | (1 << (BaliDocumentParser.T__64 - 60)) | (1 << (BaliDocumentParser.T__65 - 60)) | (1 << (BaliDocumentParser.T__66 - 60)) | (1 << (BaliDocumentParser.T__67 - 60)) | (1 << (BaliDocumentParser.T__68 - 60)) | (1 << (BaliDocumentParser.TAG - 60)) | (1 << (BaliDocumentParser.SYMBOL - 60)) | (1 << (BaliDocumentParser.FRACTION - 60)) | (1 << (BaliDocumentParser.REAL - 60)) | (1 << (BaliDocumentParser.IMAGINARY - 60)) | (1 << (BaliDocumentParser.MOMENT - 60)) | (1 << (BaliDocumentParser.DURATION - 60)) | (1 << (BaliDocumentParser.RESOURCE - 60)) | (1 << (BaliDocumentParser.VERSION - 60)) | (1 << (BaliDocumentParser.BINARY - 60)) | (1 << (BaliDocumentParser.TEXT_BLOCK - 60)) | (1 << (BaliDocumentParser.TEXT - 60)))) !== 0)) {
                this.state = 171;
                this.association();
                this.state = 172;
                this.match(BaliDocumentParser.NEWLINE);
                this.state = 178;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliDocumentParser.T__6:
            localctx = new EmptyCatalogContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 179;
            this.match(BaliDocumentParser.T__6);
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
    this.ruleIndex = BaliDocumentParser.RULE_association;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterAssociation(this);
	}
};

AssociationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitAssociation(this);
	}
};

AssociationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitAssociation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.AssociationContext = AssociationContext;

BaliDocumentParser.prototype.association = function() {

    var localctx = new AssociationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, BaliDocumentParser.RULE_association);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.component();
        this.state = 183;
        this.match(BaliDocumentParser.T__6);
        this.state = 184;
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
    this.ruleIndex = BaliDocumentParser.RULE_source;
    return this;
}

SourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceContext.prototype.constructor = SourceContext;

SourceContext.prototype.procedure = function() {
    return this.getTypedRuleContext(ProcedureContext,0);
};

SourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterSource(this);
	}
};

SourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitSource(this);
	}
};

SourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.SourceContext = SourceContext;

BaliDocumentParser.prototype.source = function() {

    var localctx = new SourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, BaliDocumentParser.RULE_source);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(BaliDocumentParser.T__7);
        this.state = 187;
        this.procedure();
        this.state = 188;
        this.match(BaliDocumentParser.T__8);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_procedure;
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

BaliDocumentParser.EmptyProcedureContext = EmptyProcedureContext;

EmptyProcedureContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterEmptyProcedure(this);
	}
};

EmptyProcedureContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitEmptyProcedure(this);
	}
};

EmptyProcedureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.NewlineProcedureContext = NewlineProcedureContext;

NewlineProcedureContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BaliDocumentParser.NEWLINE);
    } else {
        return this.getToken(BaliDocumentParser.NEWLINE, i);
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterNewlineProcedure(this);
	}
};

NewlineProcedureContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitNewlineProcedure(this);
	}
};

NewlineProcedureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.InlineProcedureContext = InlineProcedureContext;

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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterInlineProcedure(this);
	}
};

InlineProcedureContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitInlineProcedure(this);
	}
};

InlineProcedureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitInlineProcedure(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliDocumentParser.ProcedureContext = ProcedureContext;

BaliDocumentParser.prototype.procedure = function() {

    var localctx = new ProcedureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, BaliDocumentParser.RULE_procedure);
    var _la = 0; // Token type
    try {
        this.state = 208;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliDocumentParser.T__0:
        case BaliDocumentParser.T__2:
        case BaliDocumentParser.T__7:
        case BaliDocumentParser.T__12:
        case BaliDocumentParser.T__14:
        case BaliDocumentParser.T__16:
        case BaliDocumentParser.T__18:
        case BaliDocumentParser.T__19:
        case BaliDocumentParser.T__20:
        case BaliDocumentParser.T__21:
        case BaliDocumentParser.T__23:
        case BaliDocumentParser.T__25:
        case BaliDocumentParser.T__28:
        case BaliDocumentParser.T__32:
        case BaliDocumentParser.T__33:
        case BaliDocumentParser.T__35:
        case BaliDocumentParser.T__36:
        case BaliDocumentParser.T__37:
        case BaliDocumentParser.T__38:
        case BaliDocumentParser.T__42:
        case BaliDocumentParser.T__43:
        case BaliDocumentParser.T__44:
        case BaliDocumentParser.T__47:
        case BaliDocumentParser.T__53:
        case BaliDocumentParser.T__59:
        case BaliDocumentParser.T__60:
        case BaliDocumentParser.T__61:
        case BaliDocumentParser.T__64:
        case BaliDocumentParser.T__65:
        case BaliDocumentParser.T__66:
        case BaliDocumentParser.T__67:
        case BaliDocumentParser.T__68:
        case BaliDocumentParser.TAG:
        case BaliDocumentParser.SYMBOL:
        case BaliDocumentParser.FRACTION:
        case BaliDocumentParser.REAL:
        case BaliDocumentParser.IMAGINARY:
        case BaliDocumentParser.MOMENT:
        case BaliDocumentParser.DURATION:
        case BaliDocumentParser.RESOURCE:
        case BaliDocumentParser.VERSION:
        case BaliDocumentParser.BINARY:
        case BaliDocumentParser.TEXT_BLOCK:
        case BaliDocumentParser.TEXT:
        case BaliDocumentParser.IDENTIFIER:
            localctx = new InlineProcedureContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 190;
            this.statement();
            this.state = 195;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliDocumentParser.T__9) {
                this.state = 191;
                this.match(BaliDocumentParser.T__9);
                this.state = 192;
                this.statement();
                this.state = 197;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliDocumentParser.NEWLINE:
            localctx = new NewlineProcedureContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 198;
            this.match(BaliDocumentParser.NEWLINE);
            this.state = 204;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliDocumentParser.T__0) | (1 << BaliDocumentParser.T__2) | (1 << BaliDocumentParser.T__7) | (1 << BaliDocumentParser.T__12) | (1 << BaliDocumentParser.T__14) | (1 << BaliDocumentParser.T__16) | (1 << BaliDocumentParser.T__18) | (1 << BaliDocumentParser.T__19) | (1 << BaliDocumentParser.T__20) | (1 << BaliDocumentParser.T__21) | (1 << BaliDocumentParser.T__23) | (1 << BaliDocumentParser.T__25) | (1 << BaliDocumentParser.T__28))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (BaliDocumentParser.T__32 - 33)) | (1 << (BaliDocumentParser.T__33 - 33)) | (1 << (BaliDocumentParser.T__35 - 33)) | (1 << (BaliDocumentParser.T__36 - 33)) | (1 << (BaliDocumentParser.T__37 - 33)) | (1 << (BaliDocumentParser.T__38 - 33)) | (1 << (BaliDocumentParser.T__42 - 33)) | (1 << (BaliDocumentParser.T__43 - 33)) | (1 << (BaliDocumentParser.T__44 - 33)) | (1 << (BaliDocumentParser.T__47 - 33)) | (1 << (BaliDocumentParser.T__53 - 33)) | (1 << (BaliDocumentParser.T__59 - 33)) | (1 << (BaliDocumentParser.T__60 - 33)) | (1 << (BaliDocumentParser.T__61 - 33)))) !== 0) || ((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (BaliDocumentParser.T__64 - 65)) | (1 << (BaliDocumentParser.T__65 - 65)) | (1 << (BaliDocumentParser.T__66 - 65)) | (1 << (BaliDocumentParser.T__67 - 65)) | (1 << (BaliDocumentParser.T__68 - 65)) | (1 << (BaliDocumentParser.TAG - 65)) | (1 << (BaliDocumentParser.SYMBOL - 65)) | (1 << (BaliDocumentParser.FRACTION - 65)) | (1 << (BaliDocumentParser.REAL - 65)) | (1 << (BaliDocumentParser.IMAGINARY - 65)) | (1 << (BaliDocumentParser.MOMENT - 65)) | (1 << (BaliDocumentParser.DURATION - 65)) | (1 << (BaliDocumentParser.RESOURCE - 65)) | (1 << (BaliDocumentParser.VERSION - 65)) | (1 << (BaliDocumentParser.BINARY - 65)) | (1 << (BaliDocumentParser.TEXT_BLOCK - 65)) | (1 << (BaliDocumentParser.TEXT - 65)) | (1 << (BaliDocumentParser.IDENTIFIER - 65)))) !== 0)) {
                this.state = 199;
                this.statement();
                this.state = 200;
                this.match(BaliDocumentParser.NEWLINE);
                this.state = 206;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliDocumentParser.EOF:
        case BaliDocumentParser.T__8:
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
    this.ruleIndex = BaliDocumentParser.RULE_statement;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.StatementContext = StatementContext;

BaliDocumentParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, BaliDocumentParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.mainClause();
        this.state = 214;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BaliDocumentParser.T__10) {
            this.state = 211;
            this.handleClause();
            this.state = 216;
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
    this.ruleIndex = BaliDocumentParser.RULE_mainClause;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterMainClause(this);
	}
};

MainClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitMainClause(this);
	}
};

MainClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitMainClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.MainClauseContext = MainClauseContext;

BaliDocumentParser.prototype.mainClause = function() {

    var localctx = new MainClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, BaliDocumentParser.RULE_mainClause);
    try {
        this.state = 233;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliDocumentParser.T__0:
        case BaliDocumentParser.T__2:
        case BaliDocumentParser.T__7:
        case BaliDocumentParser.T__38:
        case BaliDocumentParser.T__42:
        case BaliDocumentParser.T__43:
        case BaliDocumentParser.T__44:
        case BaliDocumentParser.T__47:
        case BaliDocumentParser.T__53:
        case BaliDocumentParser.T__59:
        case BaliDocumentParser.T__60:
        case BaliDocumentParser.T__61:
        case BaliDocumentParser.T__64:
        case BaliDocumentParser.T__65:
        case BaliDocumentParser.T__66:
        case BaliDocumentParser.T__67:
        case BaliDocumentParser.T__68:
        case BaliDocumentParser.TAG:
        case BaliDocumentParser.SYMBOL:
        case BaliDocumentParser.FRACTION:
        case BaliDocumentParser.REAL:
        case BaliDocumentParser.IMAGINARY:
        case BaliDocumentParser.MOMENT:
        case BaliDocumentParser.DURATION:
        case BaliDocumentParser.RESOURCE:
        case BaliDocumentParser.VERSION:
        case BaliDocumentParser.BINARY:
        case BaliDocumentParser.TEXT_BLOCK:
        case BaliDocumentParser.TEXT:
        case BaliDocumentParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 217;
            this.evaluateClause();
            break;
        case BaliDocumentParser.T__14:
            this.enterOuterAlt(localctx, 2);
            this.state = 218;
            this.checkoutClause();
            break;
        case BaliDocumentParser.T__16:
            this.enterOuterAlt(localctx, 3);
            this.state = 219;
            this.saveClause();
            break;
        case BaliDocumentParser.T__18:
            this.enterOuterAlt(localctx, 4);
            this.state = 220;
            this.discardClause();
            break;
        case BaliDocumentParser.T__19:
            this.enterOuterAlt(localctx, 5);
            this.state = 221;
            this.commitClause();
            break;
        case BaliDocumentParser.T__20:
            this.enterOuterAlt(localctx, 6);
            this.state = 222;
            this.publishClause();
            break;
        case BaliDocumentParser.T__21:
            this.enterOuterAlt(localctx, 7);
            this.state = 223;
            this.queueClause();
            break;
        case BaliDocumentParser.T__23:
            this.enterOuterAlt(localctx, 8);
            this.state = 224;
            this.waitClause();
            break;
        case BaliDocumentParser.T__25:
            this.enterOuterAlt(localctx, 9);
            this.state = 225;
            this.ifClause();
            break;
        case BaliDocumentParser.T__28:
            this.enterOuterAlt(localctx, 10);
            this.state = 226;
            this.selectClause();
            break;
        case BaliDocumentParser.T__12:
            this.enterOuterAlt(localctx, 11);
            this.state = 227;
            this.withClause();
            break;
        case BaliDocumentParser.T__32:
            this.enterOuterAlt(localctx, 12);
            this.state = 228;
            this.whileClause();
            break;
        case BaliDocumentParser.T__33:
            this.enterOuterAlt(localctx, 13);
            this.state = 229;
            this.continueClause();
            break;
        case BaliDocumentParser.T__35:
            this.enterOuterAlt(localctx, 14);
            this.state = 230;
            this.breakClause();
            break;
        case BaliDocumentParser.T__36:
            this.enterOuterAlt(localctx, 15);
            this.state = 231;
            this.returnClause();
            break;
        case BaliDocumentParser.T__37:
            this.enterOuterAlt(localctx, 16);
            this.state = 232;
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
    this.ruleIndex = BaliDocumentParser.RULE_handleClause;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterHandleClause(this);
	}
};

HandleClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitHandleClause(this);
	}
};

HandleClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitHandleClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.HandleClauseContext = HandleClauseContext;

BaliDocumentParser.prototype.handleClause = function() {

    var localctx = new HandleClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, BaliDocumentParser.RULE_handleClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this.match(BaliDocumentParser.T__10);
        this.state = 236;
        this.symbol();
        this.state = 237;
        this.match(BaliDocumentParser.T__11);
        this.state = 238;
        this.expression(0);
        this.state = 239;
        this.match(BaliDocumentParser.T__12);
        this.state = 240;
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
    this.ruleIndex = BaliDocumentParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.procedure = function() {
    return this.getTypedRuleContext(ProcedureContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.BlockContext = BlockContext;

BaliDocumentParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, BaliDocumentParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        this.match(BaliDocumentParser.T__7);
        this.state = 243;
        this.procedure();
        this.state = 244;
        this.match(BaliDocumentParser.T__8);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_evaluateClause;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterEvaluateClause(this);
	}
};

EvaluateClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitEvaluateClause(this);
	}
};

EvaluateClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitEvaluateClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.EvaluateClauseContext = EvaluateClauseContext;

BaliDocumentParser.prototype.evaluateClause = function() {

    var localctx = new EvaluateClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, BaliDocumentParser.RULE_evaluateClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 246;
            this.recipient();
            this.state = 247;
            this.match(BaliDocumentParser.T__13);

        }
        this.state = 251;
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
    this.ruleIndex = BaliDocumentParser.RULE_checkoutClause;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterCheckoutClause(this);
	}
};

CheckoutClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitCheckoutClause(this);
	}
};

CheckoutClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitCheckoutClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.CheckoutClauseContext = CheckoutClauseContext;

BaliDocumentParser.prototype.checkoutClause = function() {

    var localctx = new CheckoutClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, BaliDocumentParser.RULE_checkoutClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.match(BaliDocumentParser.T__14);
        this.state = 254;
        this.recipient();
        this.state = 255;
        this.match(BaliDocumentParser.T__15);
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

function SaveClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliDocumentParser.RULE_saveClause;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterSaveClause(this);
	}
};

SaveClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitSaveClause(this);
	}
};

SaveClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitSaveClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.SaveClauseContext = SaveClauseContext;

BaliDocumentParser.prototype.saveClause = function() {

    var localctx = new SaveClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, BaliDocumentParser.RULE_saveClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this.match(BaliDocumentParser.T__16);
        this.state = 259;
        this.expression(0);
        this.state = 260;
        this.match(BaliDocumentParser.T__17);
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

function DiscardClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliDocumentParser.RULE_discardClause;
    return this;
}

DiscardClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DiscardClauseContext.prototype.constructor = DiscardClauseContext;

DiscardClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DiscardClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterDiscardClause(this);
	}
};

DiscardClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitDiscardClause(this);
	}
};

DiscardClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitDiscardClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.DiscardClauseContext = DiscardClauseContext;

BaliDocumentParser.prototype.discardClause = function() {

    var localctx = new DiscardClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, BaliDocumentParser.RULE_discardClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this.match(BaliDocumentParser.T__18);
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

function CommitClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliDocumentParser.RULE_commitClause;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterCommitClause(this);
	}
};

CommitClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitCommitClause(this);
	}
};

CommitClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitCommitClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.CommitClauseContext = CommitClauseContext;

BaliDocumentParser.prototype.commitClause = function() {

    var localctx = new CommitClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, BaliDocumentParser.RULE_commitClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 266;
        this.match(BaliDocumentParser.T__19);
        this.state = 267;
        this.expression(0);
        this.state = 268;
        this.match(BaliDocumentParser.T__17);
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

function PublishClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliDocumentParser.RULE_publishClause;
    return this;
}

PublishClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PublishClauseContext.prototype.constructor = PublishClauseContext;

PublishClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PublishClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterPublishClause(this);
	}
};

PublishClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitPublishClause(this);
	}
};

PublishClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitPublishClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.PublishClauseContext = PublishClauseContext;

BaliDocumentParser.prototype.publishClause = function() {

    var localctx = new PublishClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, BaliDocumentParser.RULE_publishClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this.match(BaliDocumentParser.T__20);
        this.state = 272;
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
    this.ruleIndex = BaliDocumentParser.RULE_queueClause;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterQueueClause(this);
	}
};

QueueClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitQueueClause(this);
	}
};

QueueClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitQueueClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.QueueClauseContext = QueueClauseContext;

BaliDocumentParser.prototype.queueClause = function() {

    var localctx = new QueueClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, BaliDocumentParser.RULE_queueClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
        this.match(BaliDocumentParser.T__21);
        this.state = 275;
        this.expression(0);
        this.state = 276;
        this.match(BaliDocumentParser.T__22);
        this.state = 277;
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
    this.ruleIndex = BaliDocumentParser.RULE_waitClause;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterWaitClause(this);
	}
};

WaitClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitWaitClause(this);
	}
};

WaitClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitWaitClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.WaitClauseContext = WaitClauseContext;

BaliDocumentParser.prototype.waitClause = function() {

    var localctx = new WaitClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, BaliDocumentParser.RULE_waitClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        this.match(BaliDocumentParser.T__23);
        this.state = 280;
        this.match(BaliDocumentParser.T__24);
        this.state = 281;
        this.recipient();
        this.state = 282;
        this.match(BaliDocumentParser.T__15);
        this.state = 283;
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
    this.ruleIndex = BaliDocumentParser.RULE_ifClause;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterIfClause(this);
	}
};

IfClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitIfClause(this);
	}
};

IfClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitIfClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.IfClauseContext = IfClauseContext;

BaliDocumentParser.prototype.ifClause = function() {

    var localctx = new IfClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, BaliDocumentParser.RULE_ifClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        this.match(BaliDocumentParser.T__25);
        this.state = 286;
        this.expression(0);
        this.state = 287;
        this.match(BaliDocumentParser.T__26);
        this.state = 288;
        this.block();
        this.state = 297;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 289;
                this.match(BaliDocumentParser.T__27);
                this.state = 290;
                this.match(BaliDocumentParser.T__25);
                this.state = 291;
                this.expression(0);
                this.state = 292;
                this.match(BaliDocumentParser.T__26);
                this.state = 293;
                this.block(); 
            }
            this.state = 299;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

        this.state = 302;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliDocumentParser.T__27) {
            this.state = 300;
            this.match(BaliDocumentParser.T__27);
            this.state = 301;
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
    this.ruleIndex = BaliDocumentParser.RULE_selectClause;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterSelectClause(this);
	}
};

SelectClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitSelectClause(this);
	}
};

SelectClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitSelectClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.SelectClauseContext = SelectClauseContext;

BaliDocumentParser.prototype.selectClause = function() {

    var localctx = new SelectClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, BaliDocumentParser.RULE_selectClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 304;
        this.match(BaliDocumentParser.T__28);
        this.state = 305;
        this.expression(0);
        this.state = 306;
        this.match(BaliDocumentParser.T__15);
        this.state = 311; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 307;
            this.expression(0);
            this.state = 308;
            this.match(BaliDocumentParser.T__29);
            this.state = 309;
            this.block();
            this.state = 313; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliDocumentParser.T__0) | (1 << BaliDocumentParser.T__2) | (1 << BaliDocumentParser.T__7))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (BaliDocumentParser.T__38 - 39)) | (1 << (BaliDocumentParser.T__42 - 39)) | (1 << (BaliDocumentParser.T__43 - 39)) | (1 << (BaliDocumentParser.T__44 - 39)) | (1 << (BaliDocumentParser.T__47 - 39)) | (1 << (BaliDocumentParser.T__53 - 39)) | (1 << (BaliDocumentParser.T__59 - 39)) | (1 << (BaliDocumentParser.T__60 - 39)) | (1 << (BaliDocumentParser.T__61 - 39)) | (1 << (BaliDocumentParser.T__64 - 39)) | (1 << (BaliDocumentParser.T__65 - 39)) | (1 << (BaliDocumentParser.T__66 - 39)) | (1 << (BaliDocumentParser.T__67 - 39)) | (1 << (BaliDocumentParser.T__68 - 39)))) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (BaliDocumentParser.TAG - 71)) | (1 << (BaliDocumentParser.SYMBOL - 71)) | (1 << (BaliDocumentParser.FRACTION - 71)) | (1 << (BaliDocumentParser.REAL - 71)) | (1 << (BaliDocumentParser.IMAGINARY - 71)) | (1 << (BaliDocumentParser.MOMENT - 71)) | (1 << (BaliDocumentParser.DURATION - 71)) | (1 << (BaliDocumentParser.RESOURCE - 71)) | (1 << (BaliDocumentParser.VERSION - 71)) | (1 << (BaliDocumentParser.BINARY - 71)) | (1 << (BaliDocumentParser.TEXT_BLOCK - 71)) | (1 << (BaliDocumentParser.TEXT - 71)) | (1 << (BaliDocumentParser.IDENTIFIER - 71)))) !== 0));
        this.state = 317;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliDocumentParser.T__27) {
            this.state = 315;
            this.match(BaliDocumentParser.T__27);
            this.state = 316;
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
    this.ruleIndex = BaliDocumentParser.RULE_withClause;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterWithClause(this);
	}
};

WithClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitWithClause(this);
	}
};

WithClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitWithClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.WithClauseContext = WithClauseContext;

BaliDocumentParser.prototype.withClause = function() {

    var localctx = new WithClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, BaliDocumentParser.RULE_withClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 319;
        this.match(BaliDocumentParser.T__12);
        this.state = 324;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliDocumentParser.T__30) {
            this.state = 320;
            this.match(BaliDocumentParser.T__30);
            this.state = 321;
            this.symbol();
            this.state = 322;
            this.match(BaliDocumentParser.T__31);
        }

        this.state = 326;
        this.expression(0);
        this.state = 327;
        this.match(BaliDocumentParser.T__29);
        this.state = 328;
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
    this.ruleIndex = BaliDocumentParser.RULE_whileClause;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterWhileClause(this);
	}
};

WhileClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitWhileClause(this);
	}
};

WhileClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitWhileClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.WhileClauseContext = WhileClauseContext;

BaliDocumentParser.prototype.whileClause = function() {

    var localctx = new WhileClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, BaliDocumentParser.RULE_whileClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.match(BaliDocumentParser.T__32);
        this.state = 331;
        this.expression(0);
        this.state = 332;
        this.match(BaliDocumentParser.T__29);
        this.state = 333;
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
    this.ruleIndex = BaliDocumentParser.RULE_continueClause;
    return this;
}

ContinueClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContinueClauseContext.prototype.constructor = ContinueClauseContext;


ContinueClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterContinueClause(this);
	}
};

ContinueClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitContinueClause(this);
	}
};

ContinueClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitContinueClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.ContinueClauseContext = ContinueClauseContext;

BaliDocumentParser.prototype.continueClause = function() {

    var localctx = new ContinueClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, BaliDocumentParser.RULE_continueClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 335;
        this.match(BaliDocumentParser.T__33);
        this.state = 336;
        this.match(BaliDocumentParser.T__34);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_breakClause;
    return this;
}

BreakClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BreakClauseContext.prototype.constructor = BreakClauseContext;


BreakClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterBreakClause(this);
	}
};

BreakClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitBreakClause(this);
	}
};

BreakClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitBreakClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.BreakClauseContext = BreakClauseContext;

BaliDocumentParser.prototype.breakClause = function() {

    var localctx = new BreakClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, BaliDocumentParser.RULE_breakClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        this.match(BaliDocumentParser.T__35);
        this.state = 339;
        this.match(BaliDocumentParser.T__34);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_returnClause;
    return this;
}

ReturnClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnClauseContext.prototype.constructor = ReturnClauseContext;

ReturnClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ReturnClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterReturnClause(this);
	}
};

ReturnClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitReturnClause(this);
	}
};

ReturnClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitReturnClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.ReturnClauseContext = ReturnClauseContext;

BaliDocumentParser.prototype.returnClause = function() {

    var localctx = new ReturnClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, BaliDocumentParser.RULE_returnClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 341;
        this.match(BaliDocumentParser.T__36);
        this.state = 343;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliDocumentParser.T__0) | (1 << BaliDocumentParser.T__2) | (1 << BaliDocumentParser.T__7))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (BaliDocumentParser.T__38 - 39)) | (1 << (BaliDocumentParser.T__42 - 39)) | (1 << (BaliDocumentParser.T__43 - 39)) | (1 << (BaliDocumentParser.T__44 - 39)) | (1 << (BaliDocumentParser.T__47 - 39)) | (1 << (BaliDocumentParser.T__53 - 39)) | (1 << (BaliDocumentParser.T__59 - 39)) | (1 << (BaliDocumentParser.T__60 - 39)) | (1 << (BaliDocumentParser.T__61 - 39)) | (1 << (BaliDocumentParser.T__64 - 39)) | (1 << (BaliDocumentParser.T__65 - 39)) | (1 << (BaliDocumentParser.T__66 - 39)) | (1 << (BaliDocumentParser.T__67 - 39)) | (1 << (BaliDocumentParser.T__68 - 39)))) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (BaliDocumentParser.TAG - 71)) | (1 << (BaliDocumentParser.SYMBOL - 71)) | (1 << (BaliDocumentParser.FRACTION - 71)) | (1 << (BaliDocumentParser.REAL - 71)) | (1 << (BaliDocumentParser.IMAGINARY - 71)) | (1 << (BaliDocumentParser.MOMENT - 71)) | (1 << (BaliDocumentParser.DURATION - 71)) | (1 << (BaliDocumentParser.RESOURCE - 71)) | (1 << (BaliDocumentParser.VERSION - 71)) | (1 << (BaliDocumentParser.BINARY - 71)) | (1 << (BaliDocumentParser.TEXT_BLOCK - 71)) | (1 << (BaliDocumentParser.TEXT - 71)) | (1 << (BaliDocumentParser.IDENTIFIER - 71)))) !== 0)) {
            this.state = 342;
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
    this.ruleIndex = BaliDocumentParser.RULE_throwClause;
    return this;
}

ThrowClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThrowClauseContext.prototype.constructor = ThrowClauseContext;

ThrowClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ThrowClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterThrowClause(this);
	}
};

ThrowClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitThrowClause(this);
	}
};

ThrowClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitThrowClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.ThrowClauseContext = ThrowClauseContext;

BaliDocumentParser.prototype.throwClause = function() {

    var localctx = new ThrowClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, BaliDocumentParser.RULE_throwClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 345;
        this.match(BaliDocumentParser.T__37);
        this.state = 346;
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
    this.ruleIndex = BaliDocumentParser.RULE_recipient;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterRecipient(this);
	}
};

RecipientContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitRecipient(this);
	}
};

RecipientContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitRecipient(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.RecipientContext = RecipientContext;

BaliDocumentParser.prototype.recipient = function() {

    var localctx = new RecipientContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, BaliDocumentParser.RULE_recipient);
    try {
        this.state = 350;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliDocumentParser.SYMBOL:
            this.enterOuterAlt(localctx, 1);
            this.state = 348;
            this.symbol();
            break;
        case BaliDocumentParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 349;
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
    this.ruleIndex = BaliDocumentParser.RULE_subcomponent;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterSubcomponent(this);
	}
};

SubcomponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitSubcomponent(this);
	}
};

SubcomponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitSubcomponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.SubcomponentContext = SubcomponentContext;

BaliDocumentParser.prototype.subcomponent = function() {

    var localctx = new SubcomponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, BaliDocumentParser.RULE_subcomponent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
        this.variable();
        this.state = 353;
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
    this.ruleIndex = BaliDocumentParser.RULE_expression;
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

BaliDocumentParser.DefaultExpressionContext = DefaultExpressionContext;

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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterDefaultExpression(this);
	}
};

DefaultExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitDefaultExpression(this);
	}
};

DefaultExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.MessageExpressionContext = MessageExpressionContext;

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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterMessageExpression(this);
	}
};

MessageExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitMessageExpression(this);
	}
};

MessageExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.SubcomponentExpressionContext = SubcomponentExpressionContext;

SubcomponentExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

SubcomponentExpressionContext.prototype.indices = function() {
    return this.getTypedRuleContext(IndicesContext,0);
};
SubcomponentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterSubcomponentExpression(this);
	}
};

SubcomponentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitSubcomponentExpression(this);
	}
};

SubcomponentExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.ComparisonExpressionContext = ComparisonExpressionContext;

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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterComparisonExpression(this);
	}
};

ComparisonExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitComparisonExpression(this);
	}
};

ComparisonExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.ArithmeticExpressionContext = ArithmeticExpressionContext;

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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterArithmeticExpression(this);
	}
};

ArithmeticExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitArithmeticExpression(this);
	}
};

ArithmeticExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.MagnitudeExpressionContext = MagnitudeExpressionContext;

MagnitudeExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
MagnitudeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterMagnitudeExpression(this);
	}
};

MagnitudeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitMagnitudeExpression(this);
	}
};

MagnitudeExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.LogicalExpressionContext = LogicalExpressionContext;

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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterLogicalExpression(this);
	}
};

LogicalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitLogicalExpression(this);
	}
};

LogicalExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.FactorialExpressionContext = FactorialExpressionContext;

FactorialExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
FactorialExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterFactorialExpression(this);
	}
};

FactorialExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitFactorialExpression(this);
	}
};

FactorialExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.VariableExpressionContext = VariableExpressionContext;

VariableExpressionContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
VariableExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterVariableExpression(this);
	}
};

VariableExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitVariableExpression(this);
	}
};

VariableExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.FunctionExpressionContext = FunctionExpressionContext;

FunctionExpressionContext.prototype.funxtion = function() {
    return this.getTypedRuleContext(FunxtionContext,0);
};

FunctionExpressionContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};
FunctionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.PrecedenceExpressionContext = PrecedenceExpressionContext;

PrecedenceExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PrecedenceExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterPrecedenceExpression(this);
	}
};

PrecedenceExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitPrecedenceExpression(this);
	}
};

PrecedenceExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.ExponentialExpressionContext = ExponentialExpressionContext;

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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterExponentialExpression(this);
	}
};

ExponentialExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitExponentialExpression(this);
	}
};

ExponentialExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.ComponentExpressionContext = ComponentExpressionContext;

ComponentExpressionContext.prototype.component = function() {
    return this.getTypedRuleContext(ComponentContext,0);
};
ComponentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterComponentExpression(this);
	}
};

ComponentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitComponentExpression(this);
	}
};

ComponentExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.InversionExpressionContext = InversionExpressionContext;

InversionExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
InversionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterInversionExpression(this);
	}
};

InversionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitInversionExpression(this);
	}
};

InversionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.DereferenceExpressionContext = DereferenceExpressionContext;

DereferenceExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
DereferenceExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterDereferenceExpression(this);
	}
};

DereferenceExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitDereferenceExpression(this);
	}
};

DereferenceExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.ComplementExpressionContext = ComplementExpressionContext;

ComplementExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ComplementExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterComplementExpression(this);
	}
};

ComplementExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitComplementExpression(this);
	}
};

ComplementExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitComplementExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliDocumentParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 68;
    this.enterRecursionRule(localctx, 68, BaliDocumentParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 375;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ComponentExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 356;
            this.component();
            break;

        case 2:
            localctx = new VariableExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 357;
            this.variable();
            break;

        case 3:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 358;
            this.funxtion();
            this.state = 359;
            this.parameters();
            break;

        case 4:
            localctx = new PrecedenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 361;
            this.match(BaliDocumentParser.T__2);
            this.state = 362;
            this.expression(0);
            this.state = 363;
            this.match(BaliDocumentParser.T__3);
            break;

        case 5:
            localctx = new DereferenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 365;
            this.match(BaliDocumentParser.T__38);
            this.state = 366;
            this.expression(12);
            break;

        case 6:
            localctx = new InversionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 367;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (BaliDocumentParser.T__42 - 43)) | (1 << (BaliDocumentParser.T__43 - 43)) | (1 << (BaliDocumentParser.T__44 - 43)))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 368;
            this.expression(7);
            break;

        case 7:
            localctx = new MagnitudeExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 369;
            this.match(BaliDocumentParser.T__47);
            this.state = 370;
            this.expression(0);
            this.state = 371;
            this.match(BaliDocumentParser.T__47);
            break;

        case 8:
            localctx = new ComplementExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 373;
            this.match(BaliDocumentParser.T__53);
            this.state = 374;
            this.expression(3);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 403;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 401;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExponentialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliDocumentParser.RULE_expression);
                    this.state = 377;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 378;
                    this.match(BaliDocumentParser.T__41);
                    this.state = 379;
                    this.expression(8);
                    break;

                case 2:
                    localctx = new ArithmeticExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliDocumentParser.RULE_expression);
                    this.state = 380;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 381;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (BaliDocumentParser.T__42 - 43)) | (1 << (BaliDocumentParser.T__43 - 43)) | (1 << (BaliDocumentParser.T__44 - 43)) | (1 << (BaliDocumentParser.T__45 - 43)) | (1 << (BaliDocumentParser.T__46 - 43)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 382;
                    this.expression(7);
                    break;

                case 3:
                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliDocumentParser.RULE_expression);
                    this.state = 383;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 384;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (BaliDocumentParser.T__48 - 49)) | (1 << (BaliDocumentParser.T__49 - 49)) | (1 << (BaliDocumentParser.T__50 - 49)) | (1 << (BaliDocumentParser.T__51 - 49)) | (1 << (BaliDocumentParser.T__52 - 49)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 385;
                    this.expression(5);
                    break;

                case 4:
                    localctx = new LogicalExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliDocumentParser.RULE_expression);
                    this.state = 386;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 387;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (BaliDocumentParser.T__54 - 55)) | (1 << (BaliDocumentParser.T__55 - 55)) | (1 << (BaliDocumentParser.T__56 - 55)) | (1 << (BaliDocumentParser.T__57 - 55)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 388;
                    this.expression(3);
                    break;

                case 5:
                    localctx = new DefaultExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliDocumentParser.RULE_expression);
                    this.state = 389;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 390;
                    this.match(BaliDocumentParser.T__58);
                    this.state = 391;
                    this.expression(2);
                    break;

                case 6:
                    localctx = new MessageExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliDocumentParser.RULE_expression);
                    this.state = 392;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 393;
                    this.match(BaliDocumentParser.T__39);
                    this.state = 394;
                    this.message();
                    this.state = 395;
                    this.parameters();
                    break;

                case 7:
                    localctx = new SubcomponentExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliDocumentParser.RULE_expression);
                    this.state = 397;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 398;
                    this.indices();
                    break;

                case 8:
                    localctx = new FactorialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliDocumentParser.RULE_expression);
                    this.state = 399;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 400;
                    this.match(BaliDocumentParser.T__40);
                    break;

                } 
            }
            this.state = 405;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
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
    this.ruleIndex = BaliDocumentParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.IDENTIFIER = function() {
    return this.getToken(BaliDocumentParser.IDENTIFIER, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.VariableContext = VariableContext;

BaliDocumentParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, BaliDocumentParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 406;
        this.match(BaliDocumentParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_funxtion;
    return this;
}

FunxtionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunxtionContext.prototype.constructor = FunxtionContext;

FunxtionContext.prototype.IDENTIFIER = function() {
    return this.getToken(BaliDocumentParser.IDENTIFIER, 0);
};

FunxtionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterFunxtion(this);
	}
};

FunxtionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitFunxtion(this);
	}
};

FunxtionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitFunxtion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.FunxtionContext = FunxtionContext;

BaliDocumentParser.prototype.funxtion = function() {

    var localctx = new FunxtionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, BaliDocumentParser.RULE_funxtion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 408;
        this.match(BaliDocumentParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_message;
    return this;
}

MessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageContext.prototype.constructor = MessageContext;

MessageContext.prototype.IDENTIFIER = function() {
    return this.getToken(BaliDocumentParser.IDENTIFIER, 0);
};

MessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterMessage(this);
	}
};

MessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitMessage(this);
	}
};

MessageContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitMessage(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.MessageContext = MessageContext;

BaliDocumentParser.prototype.message = function() {

    var localctx = new MessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, BaliDocumentParser.RULE_message);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 410;
        this.match(BaliDocumentParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_indices;
    return this;
}

IndicesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IndicesContext.prototype.constructor = IndicesContext;

IndicesContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

IndicesContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterIndices(this);
	}
};

IndicesContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitIndices(this);
	}
};

IndicesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitIndices(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.IndicesContext = IndicesContext;

BaliDocumentParser.prototype.indices = function() {

    var localctx = new IndicesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, BaliDocumentParser.RULE_indices);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        this.match(BaliDocumentParser.T__0);
        this.state = 413;
        this.list();
        this.state = 414;
        this.match(BaliDocumentParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_element;
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
    if(listener instanceof BaliDocumentListener ) {
        listener.enterElement(this);
	}
};

ElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitElement(this);
	}
};

ElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.ElementContext = ElementContext;

BaliDocumentParser.prototype.element = function() {

    var localctx = new ElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, BaliDocumentParser.RULE_element);
    try {
        this.state = 429;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 416;
            this.angle();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 417;
            this.binary();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 418;
            this.duration();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 419;
            this.moment();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 420;
            this.number();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 421;
            this.percent();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 422;
            this.probability();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 423;
            this.reference();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 424;
            this.symbol();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 425;
            this.tag();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 426;
            this.template();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 427;
            this.text();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 428;
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
    this.ruleIndex = BaliDocumentParser.RULE_angle;
    return this;
}

AngleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AngleContext.prototype.constructor = AngleContext;

AngleContext.prototype.real = function() {
    return this.getTypedRuleContext(RealContext,0);
};

AngleContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterAngle(this);
	}
};

AngleContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitAngle(this);
	}
};

AngleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitAngle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.AngleContext = AngleContext;

BaliDocumentParser.prototype.angle = function() {

    var localctx = new AngleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, BaliDocumentParser.RULE_angle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 431;
        this.match(BaliDocumentParser.T__59);
        this.state = 432;
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
    this.ruleIndex = BaliDocumentParser.RULE_binary;
    return this;
}

BinaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinaryContext.prototype.constructor = BinaryContext;

BinaryContext.prototype.BINARY = function() {
    return this.getToken(BaliDocumentParser.BINARY, 0);
};

BinaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterBinary(this);
	}
};

BinaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitBinary(this);
	}
};

BinaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitBinary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.BinaryContext = BinaryContext;

BaliDocumentParser.prototype.binary = function() {

    var localctx = new BinaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, BaliDocumentParser.RULE_binary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 434;
        this.match(BaliDocumentParser.BINARY);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_duration;
    return this;
}

DurationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DurationContext.prototype.constructor = DurationContext;

DurationContext.prototype.DURATION = function() {
    return this.getToken(BaliDocumentParser.DURATION, 0);
};

DurationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterDuration(this);
	}
};

DurationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitDuration(this);
	}
};

DurationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitDuration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.DurationContext = DurationContext;

BaliDocumentParser.prototype.duration = function() {

    var localctx = new DurationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, BaliDocumentParser.RULE_duration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 436;
        this.match(BaliDocumentParser.DURATION);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_imaginary;
    return this;
}

ImaginaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImaginaryContext.prototype.constructor = ImaginaryContext;

ImaginaryContext.prototype.IMAGINARY = function() {
    return this.getToken(BaliDocumentParser.IMAGINARY, 0);
};

ImaginaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterImaginary(this);
	}
};

ImaginaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitImaginary(this);
	}
};

ImaginaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitImaginary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.ImaginaryContext = ImaginaryContext;

BaliDocumentParser.prototype.imaginary = function() {

    var localctx = new ImaginaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, BaliDocumentParser.RULE_imaginary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 438;
        this.match(BaliDocumentParser.IMAGINARY);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_moment;
    return this;
}

MomentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MomentContext.prototype.constructor = MomentContext;

MomentContext.prototype.MOMENT = function() {
    return this.getToken(BaliDocumentParser.MOMENT, 0);
};

MomentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterMoment(this);
	}
};

MomentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitMoment(this);
	}
};

MomentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitMoment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.MomentContext = MomentContext;

BaliDocumentParser.prototype.moment = function() {

    var localctx = new MomentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, BaliDocumentParser.RULE_moment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 440;
        this.match(BaliDocumentParser.MOMENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_number;
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

BaliDocumentParser.RealNumberContext = RealNumberContext;

RealNumberContext.prototype.real = function() {
    return this.getTypedRuleContext(RealContext,0);
};
RealNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterRealNumber(this);
	}
};

RealNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitRealNumber(this);
	}
};

RealNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.InfiniteNumberContext = InfiniteNumberContext;

InfiniteNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterInfiniteNumber(this);
	}
};

InfiniteNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitInfiniteNumber(this);
	}
};

InfiniteNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.UndefinedNumberContext = UndefinedNumberContext;

UndefinedNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterUndefinedNumber(this);
	}
};

UndefinedNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitUndefinedNumber(this);
	}
};

UndefinedNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.ComplexNumberContext = ComplexNumberContext;

ComplexNumberContext.prototype.real = function() {
    return this.getTypedRuleContext(RealContext,0);
};

ComplexNumberContext.prototype.imaginary = function() {
    return this.getTypedRuleContext(ImaginaryContext,0);
};
ComplexNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterComplexNumber(this);
	}
};

ComplexNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitComplexNumber(this);
	}
};

ComplexNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.ImaginaryNumberContext = ImaginaryNumberContext;

ImaginaryNumberContext.prototype.imaginary = function() {
    return this.getTypedRuleContext(ImaginaryContext,0);
};
ImaginaryNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterImaginaryNumber(this);
	}
};

ImaginaryNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitImaginaryNumber(this);
	}
};

ImaginaryNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitImaginaryNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliDocumentParser.NumberContext = NumberContext;

BaliDocumentParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, BaliDocumentParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.state = 452;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliDocumentParser.T__60:
            localctx = new UndefinedNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 442;
            this.match(BaliDocumentParser.T__60);
            break;
        case BaliDocumentParser.T__61:
            localctx = new InfiniteNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 443;
            this.match(BaliDocumentParser.T__61);
            break;
        case BaliDocumentParser.T__66:
        case BaliDocumentParser.REAL:
            localctx = new RealNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 444;
            this.real();
            break;
        case BaliDocumentParser.IMAGINARY:
            localctx = new ImaginaryNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 445;
            this.imaginary();
            break;
        case BaliDocumentParser.T__2:
            localctx = new ComplexNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 446;
            this.match(BaliDocumentParser.T__2);
            this.state = 447;
            this.real();
            this.state = 448;
            localctx.del = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===BaliDocumentParser.T__5 || _la===BaliDocumentParser.T__62)) {
                localctx.del = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 449;
            this.imaginary();
            this.state = 450;
            this.match(BaliDocumentParser.T__3);
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
    this.ruleIndex = BaliDocumentParser.RULE_percent;
    return this;
}

PercentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PercentContext.prototype.constructor = PercentContext;

PercentContext.prototype.real = function() {
    return this.getTypedRuleContext(RealContext,0);
};

PercentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterPercent(this);
	}
};

PercentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitPercent(this);
	}
};

PercentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitPercent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.PercentContext = PercentContext;

BaliDocumentParser.prototype.percent = function() {

    var localctx = new PercentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, BaliDocumentParser.RULE_percent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 454;
        this.real();
        this.state = 455;
        this.match(BaliDocumentParser.T__63);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_probability;
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

BaliDocumentParser.FalseProbabilityContext = FalseProbabilityContext;

FalseProbabilityContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterFalseProbability(this);
	}
};

FalseProbabilityContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitFalseProbability(this);
	}
};

FalseProbabilityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.TrueProbabilityContext = TrueProbabilityContext;

TrueProbabilityContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterTrueProbability(this);
	}
};

TrueProbabilityContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitTrueProbability(this);
	}
};

TrueProbabilityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.FractionalProbabilityContext = FractionalProbabilityContext;

FractionalProbabilityContext.prototype.FRACTION = function() {
    return this.getToken(BaliDocumentParser.FRACTION, 0);
};
FractionalProbabilityContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterFractionalProbability(this);
	}
};

FractionalProbabilityContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitFractionalProbability(this);
	}
};

FractionalProbabilityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitFractionalProbability(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliDocumentParser.ProbabilityContext = ProbabilityContext;

BaliDocumentParser.prototype.probability = function() {

    var localctx = new ProbabilityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, BaliDocumentParser.RULE_probability);
    try {
        this.state = 460;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliDocumentParser.T__64:
            localctx = new FalseProbabilityContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 457;
            this.match(BaliDocumentParser.T__64);
            break;
        case BaliDocumentParser.FRACTION:
            localctx = new FractionalProbabilityContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 458;
            this.match(BaliDocumentParser.FRACTION);
            break;
        case BaliDocumentParser.T__65:
            localctx = new TrueProbabilityContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 459;
            this.match(BaliDocumentParser.T__65);
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
    this.ruleIndex = BaliDocumentParser.RULE_real;
    return this;
}

RealContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RealContext.prototype.constructor = RealContext;

RealContext.prototype.REAL = function() {
    return this.getToken(BaliDocumentParser.REAL, 0);
};

RealContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterReal(this);
	}
};

RealContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitReal(this);
	}
};

RealContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitReal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.RealContext = RealContext;

BaliDocumentParser.prototype.real = function() {

    var localctx = new RealContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, BaliDocumentParser.RULE_real);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 462;
        _la = this._input.LA(1);
        if(!(_la===BaliDocumentParser.T__66 || _la===BaliDocumentParser.REAL)) {
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
    this.ruleIndex = BaliDocumentParser.RULE_reference;
    return this;
}

ReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReferenceContext.prototype.constructor = ReferenceContext;

ReferenceContext.prototype.RESOURCE = function() {
    return this.getToken(BaliDocumentParser.RESOURCE, 0);
};

ReferenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterReference(this);
	}
};

ReferenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitReference(this);
	}
};

ReferenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitReference(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.ReferenceContext = ReferenceContext;

BaliDocumentParser.prototype.reference = function() {

    var localctx = new ReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, BaliDocumentParser.RULE_reference);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 464;
        this.match(BaliDocumentParser.RESOURCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_symbol;
    return this;
}

SymbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolContext.prototype.constructor = SymbolContext;

SymbolContext.prototype.SYMBOL = function() {
    return this.getToken(BaliDocumentParser.SYMBOL, 0);
};

SymbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterSymbol(this);
	}
};

SymbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitSymbol(this);
	}
};

SymbolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitSymbol(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.SymbolContext = SymbolContext;

BaliDocumentParser.prototype.symbol = function() {

    var localctx = new SymbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, BaliDocumentParser.RULE_symbol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 466;
        this.match(BaliDocumentParser.SYMBOL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_tag;
    return this;
}

TagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagContext.prototype.constructor = TagContext;

TagContext.prototype.TAG = function() {
    return this.getToken(BaliDocumentParser.TAG, 0);
};

TagContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterTag(this);
	}
};

TagContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitTag(this);
	}
};

TagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitTag(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.TagContext = TagContext;

BaliDocumentParser.prototype.tag = function() {

    var localctx = new TagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, BaliDocumentParser.RULE_tag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 468;
        this.match(BaliDocumentParser.TAG);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = BaliDocumentParser.RULE_template;
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

BaliDocumentParser.NoneTemplateContext = NoneTemplateContext;

NoneTemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterNoneTemplate(this);
	}
};

NoneTemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitNoneTemplate(this);
	}
};

NoneTemplateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.AnyTemplateContext = AnyTemplateContext;

AnyTemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterAnyTemplate(this);
	}
};

AnyTemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitAnyTemplate(this);
	}
};

AnyTemplateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitAnyTemplate(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliDocumentParser.TemplateContext = TemplateContext;

BaliDocumentParser.prototype.template = function() {

    var localctx = new TemplateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, BaliDocumentParser.RULE_template);
    try {
        this.state = 472;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliDocumentParser.T__67:
            localctx = new NoneTemplateContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 470;
            this.match(BaliDocumentParser.T__67);
            break;
        case BaliDocumentParser.T__68:
            localctx = new AnyTemplateContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 471;
            this.match(BaliDocumentParser.T__68);
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
    this.ruleIndex = BaliDocumentParser.RULE_text;
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

BaliDocumentParser.InlineTextContext = InlineTextContext;

InlineTextContext.prototype.TEXT = function() {
    return this.getToken(BaliDocumentParser.TEXT, 0);
};
InlineTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterInlineText(this);
	}
};

InlineTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitInlineText(this);
	}
};

InlineTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
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

BaliDocumentParser.NewlineTextContext = NewlineTextContext;

NewlineTextContext.prototype.TEXT_BLOCK = function() {
    return this.getToken(BaliDocumentParser.TEXT_BLOCK, 0);
};
NewlineTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterNewlineText(this);
	}
};

NewlineTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitNewlineText(this);
	}
};

NewlineTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitNewlineText(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliDocumentParser.TextContext = TextContext;

BaliDocumentParser.prototype.text = function() {

    var localctx = new TextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, BaliDocumentParser.RULE_text);
    try {
        this.state = 476;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliDocumentParser.TEXT:
            localctx = new InlineTextContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 474;
            this.match(BaliDocumentParser.TEXT);
            break;
        case BaliDocumentParser.TEXT_BLOCK:
            localctx = new NewlineTextContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 475;
            this.match(BaliDocumentParser.TEXT_BLOCK);
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
    this.ruleIndex = BaliDocumentParser.RULE_version;
    return this;
}

VersionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionContext.prototype.constructor = VersionContext;

VersionContext.prototype.VERSION = function() {
    return this.getToken(BaliDocumentParser.VERSION, 0);
};

VersionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.enterVersion(this);
	}
};

VersionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliDocumentListener ) {
        listener.exitVersion(this);
	}
};

VersionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliDocumentVisitor ) {
        return visitor.visitVersion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliDocumentParser.VersionContext = VersionContext;

BaliDocumentParser.prototype.version = function() {

    var localctx = new VersionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, BaliDocumentParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 478;
        this.match(BaliDocumentParser.VERSION);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


BaliDocumentParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 34:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

BaliDocumentParser.prototype.expression_sempred = function(localctx, predIndex) {
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


exports.BaliDocumentParser = BaliDocumentParser;
