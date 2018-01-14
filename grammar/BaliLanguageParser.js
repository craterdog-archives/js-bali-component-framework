// Generated from grammar/BaliLanguage.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BaliLanguageListener = require('./BaliLanguageListener').BaliLanguageListener;
var BaliLanguageVisitor = require('./BaliLanguageVisitor').BaliLanguageVisitor;

var grammarFileName = "BaliLanguage.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003X\u01f5\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
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
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0087\n",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007",
    "\t\u0090\n\t\f\t\u000e\t\u0093\u000b\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0007\t\u0099\n\t\f\t\u000e\t\u009c\u000b\t\u0003\t\u0005\t\u009f",
    "\n\t\u0003\n\u0003\n\u0003\n\u0007\n\u00a4\n\n\f\n\u000e\n\u00a7\u000b",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u00ad\n\n\f\n\u000e\n\u00b0",
    "\u000b\n\u0003\n\u0005\n\u00b3\n\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0005\f\u00bb\n\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00c4\n\u000e",
    "\f\u000e\u000e\u000e\u00c7\u000b\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0007\u000e\u00cd\n\u000e\f\u000e\u000e\u000e\u00d0",
    "\u000b\u000e\u0003\u000e\u0005\u000e\u00d3\n\u000e\u0003\u000f\u0003",
    "\u000f\u0007\u000f\u00d7\n\u000f\f\u000f\u000e\u000f\u00da\u000b\u000f",
    "\u0003\u000f\u0005\u000f\u00dd\n\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0005\u0010\u00ef\n\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0005\u0013\u00ff\n\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u0105\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0007\u001f\u013a\n\u001f\f\u001f\u000e\u001f\u013d\u000b\u001f\u0003",
    "\u001f\u0003\u001f\u0005\u001f\u0141\n\u001f\u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0006 \u014a\n \r \u000e \u014b\u0003 \u0003",
    " \u0005 \u0150\n \u0003!\u0003!\u0003!\u0005!\u0155\n!\u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0005\"\u015f\n\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u0166\n\"\u0003\"\u0003\"",
    "\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0005#\u016f\n#\u0003$\u0003$",
    "\u0003$\u0005$\u0174\n$\u0003%\u0003%\u0005%\u0178\n%\u0003&\u0003&",
    "\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0005(\u0191\n(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0007(\u01a9\n(\f(\u000e(\u01ac",
    "\u000b(\u0003)\u0003)\u0003)\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0003*\u0003*\u0003*\u0003*\u0005*\u01bc\n*\u0003+\u0003+\u0005",
    "+\u01c0\n+\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0005.\u01c8\n",
    ".\u0003/\u0003/\u00030\u00030\u00031\u00031\u00051\u01d0\n1\u00032\u0003",
    "2\u00033\u00033\u00033\u00053\u01d7\n3\u00034\u00034\u00034\u00035\u0003",
    "5\u00035\u00035\u00035\u00035\u00035\u00035\u00035\u00035\u00055\u01e6",
    "\n5\u00036\u00056\u01e9\n6\u00036\u00036\u00056\u01ed\n6\u00037\u0003",
    "7\u00057\u01f1\n7\u00037\u00037\u00037\u0002\u0003N8\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjl\u0002\u0007\u0003\u0002-/\u0003\u0002",
    "-1\u0003\u000237\u0003\u00029<\u0004\u0002\n\nEE\u0002\u0213\u0002n",
    "\u0003\u0002\u0002\u0002\u0004u\u0003\u0002\u0002\u0002\u0006w\u0003",
    "\u0002\u0002\u0002\b{\u0003\u0002\u0002\u0002\n\u007f\u0003\u0002\u0002",
    "\u0002\f\u0086\u0003\u0002\u0002\u0002\u000e\u0088\u0003\u0002\u0002",
    "\u0002\u0010\u009e\u0003\u0002\u0002\u0002\u0012\u00b2\u0003\u0002\u0002",
    "\u0002\u0014\u00b4\u0003\u0002\u0002\u0002\u0016\u00b8\u0003\u0002\u0002",
    "\u0002\u0018\u00bc\u0003\u0002\u0002\u0002\u001a\u00d2\u0003\u0002\u0002",
    "\u0002\u001c\u00d4\u0003\u0002\u0002\u0002\u001e\u00ee\u0003\u0002\u0002",
    "\u0002 \u00f0\u0003\u0002\u0002\u0002\"\u00f7\u0003\u0002\u0002\u0002",
    "$\u00fe\u0003\u0002\u0002\u0002&\u0104\u0003\u0002\u0002\u0002(\u0106",
    "\u0003\u0002\u0002\u0002*\u0109\u0003\u0002\u0002\u0002,\u010b\u0003",
    "\u0002\u0002\u0002.\u010f\u0003\u0002\u0002\u00020\u0114\u0003\u0002",
    "\u0002\u00022\u0119\u0003\u0002\u0002\u00024\u011c\u0003\u0002\u0002",
    "\u00026\u0121\u0003\u0002\u0002\u00028\u0124\u0003\u0002\u0002\u0002",
    ":\u0129\u0003\u0002\u0002\u0002<\u012f\u0003\u0002\u0002\u0002>\u0142",
    "\u0003\u0002\u0002\u0002@\u0154\u0003\u0002\u0002\u0002B\u015e\u0003",
    "\u0002\u0002\u0002D\u016b\u0003\u0002\u0002\u0002F\u0170\u0003\u0002",
    "\u0002\u0002H\u0175\u0003\u0002\u0002\u0002J\u0179\u0003\u0002\u0002",
    "\u0002L\u017c\u0003\u0002\u0002\u0002N\u0190\u0003\u0002\u0002\u0002",
    "P\u01ad\u0003\u0002\u0002\u0002R\u01bb\u0003\u0002\u0002\u0002T\u01bf",
    "\u0003\u0002\u0002\u0002V\u01c1\u0003\u0002\u0002\u0002X\u01c3\u0003",
    "\u0002\u0002\u0002Z\u01c7\u0003\u0002\u0002\u0002\\\u01c9\u0003\u0002",
    "\u0002\u0002^\u01cb\u0003\u0002\u0002\u0002`\u01cf\u0003\u0002\u0002",
    "\u0002b\u01d1\u0003\u0002\u0002\u0002d\u01d6\u0003\u0002\u0002\u0002",
    "f\u01d8\u0003\u0002\u0002\u0002h\u01e5\u0003\u0002\u0002\u0002j\u01ec",
    "\u0003\u0002\u0002\u0002l\u01f0\u0003\u0002\u0002\u0002np\u0005\u0004",
    "\u0003\u0002oq\u0005\u0006\u0004\u0002po\u0003\u0002\u0002\u0002pq\u0003",
    "\u0002\u0002\u0002q\u0003\u0003\u0002\u0002\u0002rv\u0005R*\u0002sv",
    "\u0005\b\u0005\u0002tv\u0005\n\u0006\u0002ur\u0003\u0002\u0002\u0002",
    "us\u0003\u0002\u0002\u0002ut\u0003\u0002\u0002\u0002v\u0005\u0003\u0002",
    "\u0002\u0002wx\u0007\u0003\u0002\u0002xy\u0005\f\u0007\u0002yz\u0007",
    "\u0004\u0002\u0002z\u0007\u0003\u0002\u0002\u0002{|\u0007\u0005\u0002",
    "\u0002|}\u0005\f\u0007\u0002}~\u0007\u0006\u0002\u0002~\t\u0003\u0002",
    "\u0002\u0002\u007f\u0080\u0007\u0007\u0002\u0002\u0080\u0081\u0005\u001a",
    "\u000e\u0002\u0081\u0082\u0007\b\u0002\u0002\u0082\u000b\u0003\u0002",
    "\u0002\u0002\u0083\u0087\u0005\u000e\b\u0002\u0084\u0087\u0005\u0010",
    "\t\u0002\u0085\u0087\u0005\u0012\n\u0002\u0086\u0083\u0003\u0002\u0002",
    "\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0086\u0085\u0003\u0002\u0002",
    "\u0002\u0087\r\u0003\u0002\u0002\u0002\u0088\u0089\u0005N(\u0002\u0089",
    "\u008a\u0007\t\u0002\u0002\u008a\u008b\u0005N(\u0002\u008b\u000f\u0003",
    "\u0002\u0002\u0002\u008c\u0091\u0005N(\u0002\u008d\u008e\u0007\n\u0002",
    "\u0002\u008e\u0090\u0005N(\u0002\u008f\u008d\u0003\u0002\u0002\u0002",
    "\u0090\u0093\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002",
    "\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u009f\u0003\u0002\u0002\u0002",
    "\u0093\u0091\u0003\u0002\u0002\u0002\u0094\u009a\u0007W\u0002\u0002",
    "\u0095\u0096\u0005N(\u0002\u0096\u0097\u0007W\u0002\u0002\u0097\u0099",
    "\u0003\u0002\u0002\u0002\u0098\u0095\u0003\u0002\u0002\u0002\u0099\u009c",
    "\u0003\u0002\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009a\u009b",
    "\u0003\u0002\u0002\u0002\u009b\u009f\u0003\u0002\u0002\u0002\u009c\u009a",
    "\u0003\u0002\u0002\u0002\u009d\u009f\u0003\u0002\u0002\u0002\u009e\u008c",
    "\u0003\u0002\u0002\u0002\u009e\u0094\u0003\u0002\u0002\u0002\u009e\u009d",
    "\u0003\u0002\u0002\u0002\u009f\u0011\u0003\u0002\u0002\u0002\u00a0\u00a5",
    "\u0005\u0014\u000b\u0002\u00a1\u00a2\u0007\n\u0002\u0002\u00a2\u00a4",
    "\u0005\u0014\u000b\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a4\u00a7",
    "\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a6",
    "\u0003\u0002\u0002\u0002\u00a6\u00b3\u0003\u0002\u0002\u0002\u00a7\u00a5",
    "\u0003\u0002\u0002\u0002\u00a8\u00ae\u0007W\u0002\u0002\u00a9\u00aa",
    "\u0005\u0014\u000b\u0002\u00aa\u00ab\u0007W\u0002\u0002\u00ab\u00ad",
    "\u0003\u0002\u0002\u0002\u00ac\u00a9\u0003\u0002\u0002\u0002\u00ad\u00b0",
    "\u0003\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00ae\u00af",
    "\u0003\u0002\u0002\u0002\u00af\u00b3\u0003\u0002\u0002\u0002\u00b0\u00ae",
    "\u0003\u0002\u0002\u0002\u00b1\u00b3\u0007\u000b\u0002\u0002\u00b2\u00a0",
    "\u0003\u0002\u0002\u0002\u00b2\u00a8\u0003\u0002\u0002\u0002\u00b2\u00b1",
    "\u0003\u0002\u0002\u0002\u00b3\u0013\u0003\u0002\u0002\u0002\u00b4\u00b5",
    "\u0005\u0016\f\u0002\u00b5\u00b6\u0007\u000b\u0002\u0002\u00b6\u00b7",
    "\u0005N(\u0002\u00b7\u0015\u0003\u0002\u0002\u0002\u00b8\u00ba\u0005",
    "R*\u0002\u00b9\u00bb\u0005\u0006\u0004\u0002\u00ba\u00b9\u0003\u0002",
    "\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u0017\u0003\u0002",
    "\u0002\u0002\u00bc\u00bd\u0007G\u0002\u0002\u00bd\u00be\u0005\u001a",
    "\u000e\u0002\u00be\u00bf\u0007\u0002\u0002\u0003\u00bf\u0019\u0003\u0002",
    "\u0002\u0002\u00c0\u00c5\u0005\u001c\u000f\u0002\u00c1\u00c2\u0007\f",
    "\u0002\u0002\u00c2\u00c4\u0005\u001c\u000f\u0002\u00c3\u00c1\u0003\u0002",
    "\u0002\u0002\u00c4\u00c7\u0003\u0002\u0002\u0002\u00c5\u00c3\u0003\u0002",
    "\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00d3\u0003\u0002",
    "\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c8\u00ce\u0007W",
    "\u0002\u0002\u00c9\u00ca\u0005\u001c\u000f\u0002\u00ca\u00cb\u0007W",
    "\u0002\u0002\u00cb\u00cd\u0003\u0002\u0002\u0002\u00cc\u00c9\u0003\u0002",
    "\u0002\u0002\u00cd\u00d0\u0003\u0002\u0002\u0002\u00ce\u00cc\u0003\u0002",
    "\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u00d3\u0003\u0002",
    "\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d1\u00d3\u0003\u0002",
    "\u0002\u0002\u00d2\u00c0\u0003\u0002\u0002\u0002\u00d2\u00c8\u0003\u0002",
    "\u0002\u0002\u00d2\u00d1\u0003\u0002\u0002\u0002\u00d3\u001b\u0003\u0002",
    "\u0002\u0002\u00d4\u00d8\u0005\u001e\u0010\u0002\u00d5\u00d7\u0005 ",
    "\u0011\u0002\u00d6\u00d5\u0003\u0002\u0002\u0002\u00d7\u00da\u0003\u0002",
    "\u0002\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002",
    "\u0002\u0002\u00d9\u00dc\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002",
    "\u0002\u0002\u00db\u00dd\u0005\"\u0012\u0002\u00dc\u00db\u0003\u0002",
    "\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u001d\u0003\u0002",
    "\u0002\u0002\u00de\u00ef\u0005$\u0013\u0002\u00df\u00ef\u0005.\u0018",
    "\u0002\u00e0\u00ef\u00050\u0019\u0002\u00e1\u00ef\u00052\u001a\u0002",
    "\u00e2\u00ef\u00054\u001b\u0002\u00e3\u00ef\u00056\u001c\u0002\u00e4",
    "\u00ef\u00058\u001d\u0002\u00e5\u00ef\u0005:\u001e\u0002\u00e6\u00ef",
    "\u0005<\u001f\u0002\u00e7\u00ef\u0005> \u0002\u00e8\u00ef\u0005@!\u0002",
    "\u00e9\u00ef\u0005B\"\u0002\u00ea\u00ef\u0005D#\u0002\u00eb\u00ef\u0005",
    "F$\u0002\u00ec\u00ef\u0005H%\u0002\u00ed\u00ef\u0005J&\u0002\u00ee\u00de",
    "\u0003\u0002\u0002\u0002\u00ee\u00df\u0003\u0002\u0002\u0002\u00ee\u00e0",
    "\u0003\u0002\u0002\u0002\u00ee\u00e1\u0003\u0002\u0002\u0002\u00ee\u00e2",
    "\u0003\u0002\u0002\u0002\u00ee\u00e3\u0003\u0002\u0002\u0002\u00ee\u00e4",
    "\u0003\u0002\u0002\u0002\u00ee\u00e5\u0003\u0002\u0002\u0002\u00ee\u00e6",
    "\u0003\u0002\u0002\u0002\u00ee\u00e7\u0003\u0002\u0002\u0002\u00ee\u00e8",
    "\u0003\u0002\u0002\u0002\u00ee\u00e9\u0003\u0002\u0002\u0002\u00ee\u00ea",
    "\u0003\u0002\u0002\u0002\u00ee\u00eb\u0003\u0002\u0002\u0002\u00ee\u00ec",
    "\u0003\u0002\u0002\u0002\u00ee\u00ed\u0003\u0002\u0002\u0002\u00ef\u001f",
    "\u0003\u0002\u0002\u0002\u00f0\u00f1\u0007\r\u0002\u0002\u00f1\u00f2",
    "\u0005X-\u0002\u00f2\u00f3\u0007\u000e\u0002\u0002\u00f3\u00f4\u0005",
    "N(\u0002\u00f4\u00f5\u0007\u000f\u0002\u0002\u00f5\u00f6\u0005\n\u0006",
    "\u0002\u00f6!\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007\u0010\u0002",
    "\u0002\u00f8\u00f9\u0007\u000f\u0002\u0002\u00f9\u00fa\u0005\n\u0006",
    "\u0002\u00fa#\u0003\u0002\u0002\u0002\u00fb\u00fc\u0005&\u0014\u0002",
    "\u00fc\u00fd\u0007\u0011\u0002\u0002\u00fd\u00ff\u0003\u0002\u0002\u0002",
    "\u00fe\u00fb\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002",
    "\u00ff\u0100\u0003\u0002\u0002\u0002\u0100\u0101\u0005N(\u0002\u0101",
    "%\u0003\u0002\u0002\u0002\u0102\u0105\u0005X-\u0002\u0103\u0105\u0005",
    "(\u0015\u0002\u0104\u0102\u0003\u0002\u0002\u0002\u0104\u0103\u0003",
    "\u0002\u0002\u0002\u0105\'\u0003\u0002\u0002\u0002\u0106\u0107\u0005",
    "*\u0016\u0002\u0107\u0108\u0005,\u0017\u0002\u0108)\u0003\u0002\u0002",
    "\u0002\u0109\u010a\u0007V\u0002\u0002\u010a+\u0003\u0002\u0002\u0002",
    "\u010b\u010c\u0007\u0005\u0002\u0002\u010c\u010d\u0005\u0010\t\u0002",
    "\u010d\u010e\u0007\u0006\u0002\u0002\u010e-\u0003\u0002\u0002\u0002",
    "\u010f\u0110\u0007\u0012\u0002\u0002\u0110\u0111\u0005X-\u0002\u0111",
    "\u0112\u0007\u0013\u0002\u0002\u0112\u0113\u0005N(\u0002\u0113/\u0003",
    "\u0002\u0002\u0002\u0114\u0115\u0007\u0014\u0002\u0002\u0115\u0116\u0005",
    "N(\u0002\u0116\u0117\u0007\u0015\u0002\u0002\u0117\u0118\u0005N(\u0002",
    "\u01181\u0003\u0002\u0002\u0002\u0119\u011a\u0007\u0016\u0002\u0002",
    "\u011a\u011b\u0005N(\u0002\u011b3\u0003\u0002\u0002\u0002\u011c\u011d",
    "\u0007\u0017\u0002\u0002\u011d\u011e\u0005N(\u0002\u011e\u011f\u0007",
    "\u0015\u0002\u0002\u011f\u0120\u0005N(\u0002\u01205\u0003\u0002\u0002",
    "\u0002\u0121\u0122\u0007\u0018\u0002\u0002\u0122\u0123\u0005N(\u0002",
    "\u01237\u0003\u0002\u0002\u0002\u0124\u0125\u0007\u0019\u0002\u0002",
    "\u0125\u0126\u0005N(\u0002\u0126\u0127\u0007\u001a\u0002\u0002\u0127",
    "\u0128\u0005N(\u0002\u01289\u0003\u0002\u0002\u0002\u0129\u012a\u0007",
    "\u001b\u0002\u0002\u012a\u012b\u0007\u001c\u0002\u0002\u012b\u012c\u0005",
    "X-\u0002\u012c\u012d\u0007\u0013\u0002\u0002\u012d\u012e\u0005N(\u0002",
    "\u012e;\u0003\u0002\u0002\u0002\u012f\u0130\u0007\u001d\u0002\u0002",
    "\u0130\u0131\u0005N(\u0002\u0131\u0132\u0007\u001e\u0002\u0002\u0132",
    "\u013b\u0005\n\u0006\u0002\u0133\u0134\u0007\u001f\u0002\u0002\u0134",
    "\u0135\u0007\u001d\u0002\u0002\u0135\u0136\u0005N(\u0002\u0136\u0137",
    "\u0007\u001e\u0002\u0002\u0137\u0138\u0005\n\u0006\u0002\u0138\u013a",
    "\u0003\u0002\u0002\u0002\u0139\u0133\u0003\u0002\u0002\u0002\u013a\u013d",
    "\u0003\u0002\u0002\u0002\u013b\u0139\u0003\u0002\u0002\u0002\u013b\u013c",
    "\u0003\u0002\u0002\u0002\u013c\u0140\u0003\u0002\u0002\u0002\u013d\u013b",
    "\u0003\u0002\u0002\u0002\u013e\u013f\u0007\u001f\u0002\u0002\u013f\u0141",
    "\u0005\n\u0006\u0002\u0140\u013e\u0003\u0002\u0002\u0002\u0140\u0141",
    "\u0003\u0002\u0002\u0002\u0141=\u0003\u0002\u0002\u0002\u0142\u0143",
    "\u0007 \u0002\u0002\u0143\u0144\u0005N(\u0002\u0144\u0149\u0007\u0013",
    "\u0002\u0002\u0145\u0146\u0005N(\u0002\u0146\u0147\u0007!\u0002\u0002",
    "\u0147\u0148\u0005\n\u0006\u0002\u0148\u014a\u0003\u0002\u0002\u0002",
    "\u0149\u0145\u0003\u0002\u0002\u0002\u014a\u014b\u0003\u0002\u0002\u0002",
    "\u014b\u0149\u0003\u0002\u0002\u0002\u014b\u014c\u0003\u0002\u0002\u0002",
    "\u014c\u014f\u0003\u0002\u0002\u0002\u014d\u014e\u0007\u001f\u0002\u0002",
    "\u014e\u0150\u0005\n\u0006\u0002\u014f\u014d\u0003\u0002\u0002\u0002",
    "\u014f\u0150\u0003\u0002\u0002\u0002\u0150?\u0003\u0002\u0002\u0002",
    "\u0151\u0152\u0005L\'\u0002\u0152\u0153\u0007\u000b\u0002\u0002\u0153",
    "\u0155\u0003\u0002\u0002\u0002\u0154\u0151\u0003\u0002\u0002\u0002\u0154",
    "\u0155\u0003\u0002\u0002\u0002\u0155\u0156\u0003\u0002\u0002\u0002\u0156",
    "\u0157\u0007\"\u0002\u0002\u0157\u0158\u0005N(\u0002\u0158\u0159\u0007",
    "!\u0002\u0002\u0159\u015a\u0005\n\u0006\u0002\u015aA\u0003\u0002\u0002",
    "\u0002\u015b\u015c\u0005L\'\u0002\u015c\u015d\u0007\u000b\u0002\u0002",
    "\u015d\u015f\u0003\u0002\u0002\u0002\u015e\u015b\u0003\u0002\u0002\u0002",
    "\u015e\u015f\u0003\u0002\u0002\u0002\u015f\u0160\u0003\u0002\u0002\u0002",
    "\u0160\u0165\u0007\u000f\u0002\u0002\u0161\u0162\u0007#\u0002\u0002",
    "\u0162\u0163\u0005X-\u0002\u0163\u0164\u0007$\u0002\u0002\u0164\u0166",
    "\u0003\u0002\u0002\u0002\u0165\u0161\u0003\u0002\u0002\u0002\u0165\u0166",
    "\u0003\u0002\u0002\u0002\u0166\u0167\u0003\u0002\u0002\u0002\u0167\u0168",
    "\u0005N(\u0002\u0168\u0169\u0007!\u0002\u0002\u0169\u016a\u0005\n\u0006",
    "\u0002\u016aC\u0003\u0002\u0002\u0002\u016b\u016e\u0007%\u0002\u0002",
    "\u016c\u016d\u0007\u0015\u0002\u0002\u016d\u016f\u0005L\'\u0002\u016e",
    "\u016c\u0003\u0002\u0002\u0002\u016e\u016f\u0003\u0002\u0002\u0002\u016f",
    "E\u0003\u0002\u0002\u0002\u0170\u0173\u0007&\u0002\u0002\u0171\u0172",
    "\u0007\u0013\u0002\u0002\u0172\u0174\u0005L\'\u0002\u0173\u0171\u0003",
    "\u0002\u0002\u0002\u0173\u0174\u0003\u0002\u0002\u0002\u0174G\u0003",
    "\u0002\u0002\u0002\u0175\u0177\u0007\'\u0002\u0002\u0176\u0178\u0005",
    "N(\u0002\u0177\u0176\u0003\u0002\u0002\u0002\u0177\u0178\u0003\u0002",
    "\u0002\u0002\u0178I\u0003\u0002\u0002\u0002\u0179\u017a\u0007(\u0002",
    "\u0002\u017a\u017b\u0005N(\u0002\u017bK\u0003\u0002\u0002\u0002\u017c",
    "\u017d\u0007V\u0002\u0002\u017dM\u0003\u0002\u0002\u0002\u017e\u017f",
    "\b(\u0001\u0002\u017f\u0191\u0005\u0002\u0002\u0002\u0180\u0191\u0005",
    "*\u0016\u0002\u0181\u0191\u0005P)\u0002\u0182\u0183\u0007\u0003\u0002",
    "\u0002\u0183\u0184\u0005N(\u0002\u0184\u0185\u0007\u0004\u0002\u0002",
    "\u0185\u0191\u0003\u0002\u0002\u0002\u0186\u0187\u0007)\u0002\u0002",
    "\u0187\u0191\u0005N(\u000e\u0188\u0189\t\u0002\u0002\u0002\u0189\u0191",
    "\u0005N(\t\u018a\u018b\u00072\u0002\u0002\u018b\u018c\u0005N(\u0002",
    "\u018c\u018d\u00072\u0002\u0002\u018d\u0191\u0003\u0002\u0002\u0002",
    "\u018e\u018f\u00078\u0002\u0002\u018f\u0191\u0005N(\u0005\u0190\u017e",
    "\u0003\u0002\u0002\u0002\u0190\u0180\u0003\u0002\u0002\u0002\u0190\u0181",
    "\u0003\u0002\u0002\u0002\u0190\u0182\u0003\u0002\u0002\u0002\u0190\u0186",
    "\u0003\u0002\u0002\u0002\u0190\u0188\u0003\u0002\u0002\u0002\u0190\u018a",
    "\u0003\u0002\u0002\u0002\u0190\u018e\u0003\u0002\u0002\u0002\u0191\u01aa",
    "\u0003\u0002\u0002\u0002\u0192\u0193\f\n\u0002\u0002\u0193\u0194\u0007",
    ",\u0002\u0002\u0194\u01a9\u0005N(\n\u0195\u0196\f\b\u0002\u0002\u0196",
    "\u0197\t\u0003\u0002\u0002\u0197\u01a9\u0005N(\t\u0198\u0199\f\u0006",
    "\u0002\u0002\u0199\u019a\t\u0004\u0002\u0002\u019a\u01a9\u0005N(\u0007",
    "\u019b\u019c\f\u0004\u0002\u0002\u019c\u019d\t\u0005\u0002\u0002\u019d",
    "\u01a9\u0005N(\u0005\u019e\u019f\f\u0003\u0002\u0002\u019f\u01a0\u0007",
    "=\u0002\u0002\u01a0\u01a9\u0005N(\u0004\u01a1\u01a2\f\r\u0002\u0002",
    "\u01a2\u01a3\u0007*\u0002\u0002\u01a3\u01a9\u0005P)\u0002\u01a4\u01a5",
    "\f\f\u0002\u0002\u01a5\u01a9\u0005,\u0017\u0002\u01a6\u01a7\f\u000b",
    "\u0002\u0002\u01a7\u01a9\u0007+\u0002\u0002\u01a8\u0192\u0003\u0002",
    "\u0002\u0002\u01a8\u0195\u0003\u0002\u0002\u0002\u01a8\u0198\u0003\u0002",
    "\u0002\u0002\u01a8\u019b\u0003\u0002\u0002\u0002\u01a8\u019e\u0003\u0002",
    "\u0002\u0002\u01a8\u01a1\u0003\u0002\u0002\u0002\u01a8\u01a4\u0003\u0002",
    "\u0002\u0002\u01a8\u01a6\u0003\u0002\u0002\u0002\u01a9\u01ac\u0003\u0002",
    "\u0002\u0002\u01aa\u01a8\u0003\u0002\u0002\u0002\u01aa\u01ab\u0003\u0002",
    "\u0002\u0002\u01abO\u0003\u0002\u0002\u0002\u01ac\u01aa\u0003\u0002",
    "\u0002\u0002\u01ad\u01ae\u0007V\u0002\u0002\u01ae\u01af\u0005\u0006",
    "\u0004\u0002\u01afQ\u0003\u0002\u0002\u0002\u01b0\u01bc\u0005T+\u0002",
    "\u01b1\u01bc\u0005V,\u0002\u01b2\u01bc\u0005X-\u0002\u01b3\u01bc\u0005",
    "Z.\u0002\u01b4\u01bc\u0005\\/\u0002\u01b5\u01bc\u0005^0\u0002\u01b6",
    "\u01bc\u0005`1\u0002\u01b7\u01bc\u0005b2\u0002\u01b8\u01bc\u0005d3\u0002",
    "\u01b9\u01bc\u0005f4\u0002\u01ba\u01bc\u0005h5\u0002\u01bb\u01b0\u0003",
    "\u0002\u0002\u0002\u01bb\u01b1\u0003\u0002\u0002\u0002\u01bb\u01b2\u0003",
    "\u0002\u0002\u0002\u01bb\u01b3\u0003\u0002\u0002\u0002\u01bb\u01b4\u0003",
    "\u0002\u0002\u0002\u01bb\u01b5\u0003\u0002\u0002\u0002\u01bb\u01b6\u0003",
    "\u0002\u0002\u0002\u01bb\u01b7\u0003\u0002\u0002\u0002\u01bb\u01b8\u0003",
    "\u0002\u0002\u0002\u01bb\u01b9\u0003\u0002\u0002\u0002\u01bb\u01ba\u0003",
    "\u0002\u0002\u0002\u01bcS\u0003\u0002\u0002\u0002\u01bd\u01c0\u0007",
    ">\u0002\u0002\u01be\u01c0\u0007?\u0002\u0002\u01bf\u01bd\u0003\u0002",
    "\u0002\u0002\u01bf\u01be\u0003\u0002\u0002\u0002\u01c0U\u0003\u0002",
    "\u0002\u0002\u01c1\u01c2\u0007J\u0002\u0002\u01c2W\u0003\u0002\u0002",
    "\u0002\u01c3\u01c4\u0007K\u0002\u0002\u01c4Y\u0003\u0002\u0002\u0002",
    "\u01c5\u01c8\u0007O\u0002\u0002\u01c6\u01c8\u0007P\u0002\u0002\u01c7",
    "\u01c5\u0003\u0002\u0002\u0002\u01c7\u01c6\u0003\u0002\u0002\u0002\u01c8",
    "[\u0003\u0002\u0002\u0002\u01c9\u01ca\u0007Q\u0002\u0002\u01ca]\u0003",
    "\u0002\u0002\u0002\u01cb\u01cc\u0007R\u0002\u0002\u01cc_\u0003\u0002",
    "\u0002\u0002\u01cd\u01d0\u0007U\u0002\u0002\u01ce\u01d0\u0007T\u0002",
    "\u0002\u01cf\u01cd\u0003\u0002\u0002\u0002\u01cf\u01ce\u0003\u0002\u0002",
    "\u0002\u01d0a\u0003\u0002\u0002\u0002\u01d1\u01d2\u0007S\u0002\u0002",
    "\u01d2c\u0003\u0002\u0002\u0002\u01d3\u01d7\u0007@\u0002\u0002\u01d4",
    "\u01d7\u0007A\u0002\u0002\u01d5\u01d7\u0007L\u0002\u0002\u01d6\u01d3",
    "\u0003\u0002\u0002\u0002\u01d6\u01d4\u0003\u0002\u0002\u0002\u01d6\u01d5",
    "\u0003\u0002\u0002\u0002\u01d7e\u0003\u0002\u0002\u0002\u01d8\u01d9",
    "\u0005j6\u0002\u01d9\u01da\u0007B\u0002\u0002\u01dag\u0003\u0002\u0002",
    "\u0002\u01db\u01e6\u0007C\u0002\u0002\u01dc\u01e6\u0007D\u0002\u0002",
    "\u01dd\u01e6\u0005j6\u0002\u01de\u01e6\u0005l7\u0002\u01df\u01e0\u0007",
    "\u0003\u0002\u0002\u01e0\u01e1\u0005j6\u0002\u01e1\u01e2\t\u0006\u0002",
    "\u0002\u01e2\u01e3\u0005l7\u0002\u01e3\u01e4\u0007\u0004\u0002\u0002",
    "\u01e4\u01e6\u0003\u0002\u0002\u0002\u01e5\u01db\u0003\u0002\u0002\u0002",
    "\u01e5\u01dc\u0003\u0002\u0002\u0002\u01e5\u01dd\u0003\u0002\u0002\u0002",
    "\u01e5\u01de\u0003\u0002\u0002\u0002\u01e5\u01df\u0003\u0002\u0002\u0002",
    "\u01e6i\u0003\u0002\u0002\u0002\u01e7\u01e9\u0007-\u0002\u0002\u01e8",
    "\u01e7\u0003\u0002\u0002\u0002\u01e8\u01e9\u0003\u0002\u0002\u0002\u01e9",
    "\u01ea\u0003\u0002\u0002\u0002\u01ea\u01ed\u0007M\u0002\u0002\u01eb",
    "\u01ed\u0007N\u0002\u0002\u01ec\u01e8\u0003\u0002\u0002\u0002\u01ec",
    "\u01eb\u0003\u0002\u0002\u0002\u01edk\u0003\u0002\u0002\u0002\u01ee",
    "\u01f1\u0005j6\u0002\u01ef\u01f1\u0007-\u0002\u0002\u01f0\u01ee\u0003",
    "\u0002\u0002\u0002\u01f0\u01ef\u0003\u0002\u0002\u0002\u01f0\u01f1\u0003",
    "\u0002\u0002\u0002\u01f1\u01f2\u0003\u0002\u0002\u0002\u01f2\u01f3\u0007",
    "F\u0002\u0002\u01f3m\u0003\u0002\u0002\u0002*pu\u0086\u0091\u009a\u009e",
    "\u00a5\u00ae\u00b2\u00ba\u00c5\u00ce\u00d2\u00d8\u00dc\u00ee\u00fe\u0104",
    "\u013b\u0140\u014b\u014f\u0154\u015e\u0165\u016e\u0173\u0177\u0190\u01a8",
    "\u01aa\u01bb\u01bf\u01c7\u01cf\u01d6\u01e5\u01e8\u01ec\u01f0"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'['", "']'", "'{'", "'}'", "'..'", 
                     "','", "':'", "';'", "'handle'", "'matching'", "'with'", 
                     "'finish'", "':='", "'checkout'", "'from'", "'save'", 
                     "'to'", "'discard'", "'commit'", "'publish'", "'queue'", 
                     "'on'", "'wait'", "'for'", "'if'", "'then'", "'else'", 
                     "'select'", "'do'", "'while'", "'each'", "'in'", "'continue'", 
                     "'break'", "'return'", "'throw'", "'@'", "'.'", "'!'", 
                     "'^'", "'-'", "'/'", "'*'", "'//'", "'+'", "'|'", "'<'", 
                     "'='", "'>'", "'is'", "'matches'", "'not'", "'and'", 
                     "'sans'", "'xor'", "'or'", "'?'", "'none'", "'any'", 
                     "'true'", "'false'", "'%'", "'undefined'", "'infinity'", 
                     "'e^'", "'i'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, "SHELL", "COMMENT", 
                      "COMMENT_BLOCK", "TAG", "SYMBOL", "FRACTION", "CONSTANT", 
                      "FLOAT", "MOMENT", "DURATION", "RESOURCE", "VERSION", 
                      "BINARY", "TEXT_BLOCK", "TEXT", "IDENTIFIER", "NEWLINE", 
                      "SPACE" ];

var ruleNames =  [ "document", "literal", "parameters", "structure", "block", 
                   "composite", "range", "array", "table", "association", 
                   "key", "script", "method", "statement", "attemptClause", 
                   "handleClause", "finishClause", "evaluateClause", "assignee", 
                   "component", "variable", "indices", "checkoutClause", 
                   "saveClause", "discardClause", "commitClause", "publishClause", 
                   "queueClause", "waitClause", "ifClause", "selectClause", 
                   "whileClause", "withClause", "continueClause", "breakClause", 
                   "returnClause", "throwClause", "label", "expression", 
                   "invocation", "element", "any", "tag", "symbol", "time", 
                   "reference", "version", "text", "binary", "probability", 
                   "percent", "number", "real", "imaginary" ];

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
BaliLanguageParser.COMMENT = 70;
BaliLanguageParser.COMMENT_BLOCK = 71;
BaliLanguageParser.TAG = 72;
BaliLanguageParser.SYMBOL = 73;
BaliLanguageParser.FRACTION = 74;
BaliLanguageParser.CONSTANT = 75;
BaliLanguageParser.FLOAT = 76;
BaliLanguageParser.MOMENT = 77;
BaliLanguageParser.DURATION = 78;
BaliLanguageParser.RESOURCE = 79;
BaliLanguageParser.VERSION = 80;
BaliLanguageParser.BINARY = 81;
BaliLanguageParser.TEXT_BLOCK = 82;
BaliLanguageParser.TEXT = 83;
BaliLanguageParser.IDENTIFIER = 84;
BaliLanguageParser.NEWLINE = 85;
BaliLanguageParser.SPACE = 86;

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
BaliLanguageParser.RULE_method = 12;
BaliLanguageParser.RULE_statement = 13;
BaliLanguageParser.RULE_attemptClause = 14;
BaliLanguageParser.RULE_handleClause = 15;
BaliLanguageParser.RULE_finishClause = 16;
BaliLanguageParser.RULE_evaluateClause = 17;
BaliLanguageParser.RULE_assignee = 18;
BaliLanguageParser.RULE_component = 19;
BaliLanguageParser.RULE_variable = 20;
BaliLanguageParser.RULE_indices = 21;
BaliLanguageParser.RULE_checkoutClause = 22;
BaliLanguageParser.RULE_saveClause = 23;
BaliLanguageParser.RULE_discardClause = 24;
BaliLanguageParser.RULE_commitClause = 25;
BaliLanguageParser.RULE_publishClause = 26;
BaliLanguageParser.RULE_queueClause = 27;
BaliLanguageParser.RULE_waitClause = 28;
BaliLanguageParser.RULE_ifClause = 29;
BaliLanguageParser.RULE_selectClause = 30;
BaliLanguageParser.RULE_whileClause = 31;
BaliLanguageParser.RULE_withClause = 32;
BaliLanguageParser.RULE_continueClause = 33;
BaliLanguageParser.RULE_breakClause = 34;
BaliLanguageParser.RULE_returnClause = 35;
BaliLanguageParser.RULE_throwClause = 36;
BaliLanguageParser.RULE_label = 37;
BaliLanguageParser.RULE_expression = 38;
BaliLanguageParser.RULE_invocation = 39;
BaliLanguageParser.RULE_element = 40;
BaliLanguageParser.RULE_any = 41;
BaliLanguageParser.RULE_tag = 42;
BaliLanguageParser.RULE_symbol = 43;
BaliLanguageParser.RULE_time = 44;
BaliLanguageParser.RULE_reference = 45;
BaliLanguageParser.RULE_version = 46;
BaliLanguageParser.RULE_text = 47;
BaliLanguageParser.RULE_binary = 48;
BaliLanguageParser.RULE_probability = 49;
BaliLanguageParser.RULE_percent = 50;
BaliLanguageParser.RULE_number = 51;
BaliLanguageParser.RULE_real = 52;
BaliLanguageParser.RULE_imaginary = 53;

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
        this.state = 108;
        this.literal();
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
        this.state = 115;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__0:
        case BaliLanguageParser.T__42:
        case BaliLanguageParser.T__59:
        case BaliLanguageParser.T__60:
        case BaliLanguageParser.T__61:
        case BaliLanguageParser.T__62:
        case BaliLanguageParser.T__64:
        case BaliLanguageParser.T__65:
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
            this.state = 112;
            this.element();
            break;
        case BaliLanguageParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 113;
            this.structure();
            break;
        case BaliLanguageParser.T__4:
            this.enterOuterAlt(localctx, 3);
            this.state = 114;
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
        this.state = 117;
        this.match(BaliLanguageParser.T__0);
        this.state = 118;
        this.composite();
        this.state = 119;
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
        this.state = 121;
        this.match(BaliLanguageParser.T__2);
        this.state = 122;
        this.composite();
        this.state = 123;
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

BlockContext.prototype.method = function() {
    return this.getTypedRuleContext(MethodContext,0);
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
        this.state = 125;
        this.match(BaliLanguageParser.T__4);
        this.state = 126;
        this.method();
        this.state = 127;
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
        this.state = 132;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 129;
            this.range();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 130;
            this.array();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 131;
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
        this.state = 134;
        this.expression(0);
        this.state = 135;
        this.match(BaliLanguageParser.T__6);
        this.state = 136;
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
        this.state = 156;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__0:
        case BaliLanguageParser.T__2:
        case BaliLanguageParser.T__4:
        case BaliLanguageParser.T__38:
        case BaliLanguageParser.T__42:
        case BaliLanguageParser.T__43:
        case BaliLanguageParser.T__44:
        case BaliLanguageParser.T__47:
        case BaliLanguageParser.T__53:
        case BaliLanguageParser.T__59:
        case BaliLanguageParser.T__60:
        case BaliLanguageParser.T__61:
        case BaliLanguageParser.T__62:
        case BaliLanguageParser.T__64:
        case BaliLanguageParser.T__65:
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
            localctx = new InlineArrayContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 138;
            this.expression(0);
            this.state = 143;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliLanguageParser.T__7) {
                this.state = 139;
                this.match(BaliLanguageParser.T__7);
                this.state = 140;
                this.expression(0);
                this.state = 145;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliLanguageParser.NEWLINE:
            localctx = new NewlineArrayContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 146;
            this.match(BaliLanguageParser.NEWLINE);
            this.state = 152;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliLanguageParser.T__0) | (1 << BaliLanguageParser.T__2) | (1 << BaliLanguageParser.T__4))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (BaliLanguageParser.T__38 - 39)) | (1 << (BaliLanguageParser.T__42 - 39)) | (1 << (BaliLanguageParser.T__43 - 39)) | (1 << (BaliLanguageParser.T__44 - 39)) | (1 << (BaliLanguageParser.T__47 - 39)) | (1 << (BaliLanguageParser.T__53 - 39)) | (1 << (BaliLanguageParser.T__59 - 39)) | (1 << (BaliLanguageParser.T__60 - 39)) | (1 << (BaliLanguageParser.T__61 - 39)) | (1 << (BaliLanguageParser.T__62 - 39)) | (1 << (BaliLanguageParser.T__64 - 39)) | (1 << (BaliLanguageParser.T__65 - 39)) | (1 << (BaliLanguageParser.T__67 - 39)))) !== 0) || ((((_la - 72)) & ~0x1f) == 0 && ((1 << (_la - 72)) & ((1 << (BaliLanguageParser.TAG - 72)) | (1 << (BaliLanguageParser.SYMBOL - 72)) | (1 << (BaliLanguageParser.FRACTION - 72)) | (1 << (BaliLanguageParser.CONSTANT - 72)) | (1 << (BaliLanguageParser.FLOAT - 72)) | (1 << (BaliLanguageParser.MOMENT - 72)) | (1 << (BaliLanguageParser.DURATION - 72)) | (1 << (BaliLanguageParser.RESOURCE - 72)) | (1 << (BaliLanguageParser.VERSION - 72)) | (1 << (BaliLanguageParser.BINARY - 72)) | (1 << (BaliLanguageParser.TEXT_BLOCK - 72)) | (1 << (BaliLanguageParser.TEXT - 72)) | (1 << (BaliLanguageParser.IDENTIFIER - 72)))) !== 0)) {
                this.state = 147;
                this.expression(0);
                this.state = 148;
                this.match(BaliLanguageParser.NEWLINE);
                this.state = 154;
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
        this.state = 176;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__0:
        case BaliLanguageParser.T__42:
        case BaliLanguageParser.T__59:
        case BaliLanguageParser.T__60:
        case BaliLanguageParser.T__61:
        case BaliLanguageParser.T__62:
        case BaliLanguageParser.T__64:
        case BaliLanguageParser.T__65:
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
            localctx = new InlineTableContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 158;
            this.association();
            this.state = 163;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliLanguageParser.T__7) {
                this.state = 159;
                this.match(BaliLanguageParser.T__7);
                this.state = 160;
                this.association();
                this.state = 165;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliLanguageParser.NEWLINE:
            localctx = new NewlineTableContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 166;
            this.match(BaliLanguageParser.NEWLINE);
            this.state = 172;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliLanguageParser.T__0 || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (BaliLanguageParser.T__42 - 43)) | (1 << (BaliLanguageParser.T__59 - 43)) | (1 << (BaliLanguageParser.T__60 - 43)) | (1 << (BaliLanguageParser.T__61 - 43)) | (1 << (BaliLanguageParser.T__62 - 43)) | (1 << (BaliLanguageParser.T__64 - 43)) | (1 << (BaliLanguageParser.T__65 - 43)) | (1 << (BaliLanguageParser.T__67 - 43)) | (1 << (BaliLanguageParser.TAG - 43)) | (1 << (BaliLanguageParser.SYMBOL - 43)) | (1 << (BaliLanguageParser.FRACTION - 43)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (BaliLanguageParser.CONSTANT - 75)) | (1 << (BaliLanguageParser.FLOAT - 75)) | (1 << (BaliLanguageParser.MOMENT - 75)) | (1 << (BaliLanguageParser.DURATION - 75)) | (1 << (BaliLanguageParser.RESOURCE - 75)) | (1 << (BaliLanguageParser.VERSION - 75)) | (1 << (BaliLanguageParser.BINARY - 75)) | (1 << (BaliLanguageParser.TEXT_BLOCK - 75)) | (1 << (BaliLanguageParser.TEXT - 75)))) !== 0)) {
                this.state = 167;
                this.association();
                this.state = 168;
                this.match(BaliLanguageParser.NEWLINE);
                this.state = 174;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliLanguageParser.T__8:
            localctx = new EmptyTableContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 175;
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
        this.state = 178;
        this.key();
        this.state = 179;
        this.match(BaliLanguageParser.T__8);
        this.state = 180;
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
        this.state = 182;
        this.element();
        this.state = 184;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__0) {
            this.state = 183;
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

ScriptContext.prototype.method = function() {
    return this.getTypedRuleContext(MethodContext,0);
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
        this.state = 186;
        this.match(BaliLanguageParser.SHELL);
        this.state = 187;
        this.method();
        this.state = 188;
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

function MethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_method;
    return this;
}

MethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodContext.prototype.constructor = MethodContext;


 
MethodContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NewlineMethodContext(parser, ctx) {
	MethodContext.call(this, parser);
    MethodContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewlineMethodContext.prototype = Object.create(MethodContext.prototype);
NewlineMethodContext.prototype.constructor = NewlineMethodContext;

BaliLanguageParser.NewlineMethodContext = NewlineMethodContext;

NewlineMethodContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BaliLanguageParser.NEWLINE);
    } else {
        return this.getToken(BaliLanguageParser.NEWLINE, i);
    }
};


NewlineMethodContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};
NewlineMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterNewlineMethod(this);
	}
};

NewlineMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitNewlineMethod(this);
	}
};

NewlineMethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitNewlineMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InlineMethodContext(parser, ctx) {
	MethodContext.call(this, parser);
    MethodContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InlineMethodContext.prototype = Object.create(MethodContext.prototype);
InlineMethodContext.prototype.constructor = InlineMethodContext;

BaliLanguageParser.InlineMethodContext = InlineMethodContext;

InlineMethodContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};
InlineMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterInlineMethod(this);
	}
};

InlineMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitInlineMethod(this);
	}
};

InlineMethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitInlineMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EmptyMethodContext(parser, ctx) {
	MethodContext.call(this, parser);
    MethodContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EmptyMethodContext.prototype = Object.create(MethodContext.prototype);
EmptyMethodContext.prototype.constructor = EmptyMethodContext;

BaliLanguageParser.EmptyMethodContext = EmptyMethodContext;

EmptyMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterEmptyMethod(this);
	}
};

EmptyMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitEmptyMethod(this);
	}
};

EmptyMethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitEmptyMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.MethodContext = MethodContext;

BaliLanguageParser.prototype.method = function() {

    var localctx = new MethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, BaliLanguageParser.RULE_method);
    var _la = 0; // Token type
    try {
        this.state = 208;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__0:
        case BaliLanguageParser.T__2:
        case BaliLanguageParser.T__4:
        case BaliLanguageParser.T__12:
        case BaliLanguageParser.T__15:
        case BaliLanguageParser.T__17:
        case BaliLanguageParser.T__19:
        case BaliLanguageParser.T__20:
        case BaliLanguageParser.T__21:
        case BaliLanguageParser.T__22:
        case BaliLanguageParser.T__24:
        case BaliLanguageParser.T__26:
        case BaliLanguageParser.T__29:
        case BaliLanguageParser.T__31:
        case BaliLanguageParser.T__34:
        case BaliLanguageParser.T__35:
        case BaliLanguageParser.T__36:
        case BaliLanguageParser.T__37:
        case BaliLanguageParser.T__38:
        case BaliLanguageParser.T__42:
        case BaliLanguageParser.T__43:
        case BaliLanguageParser.T__44:
        case BaliLanguageParser.T__47:
        case BaliLanguageParser.T__53:
        case BaliLanguageParser.T__59:
        case BaliLanguageParser.T__60:
        case BaliLanguageParser.T__61:
        case BaliLanguageParser.T__62:
        case BaliLanguageParser.T__64:
        case BaliLanguageParser.T__65:
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
            localctx = new InlineMethodContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 190;
            this.statement();
            this.state = 195;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BaliLanguageParser.T__9) {
                this.state = 191;
                this.match(BaliLanguageParser.T__9);
                this.state = 192;
                this.statement();
                this.state = 197;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliLanguageParser.NEWLINE:
            localctx = new NewlineMethodContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 198;
            this.match(BaliLanguageParser.NEWLINE);
            this.state = 204;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliLanguageParser.T__0) | (1 << BaliLanguageParser.T__2) | (1 << BaliLanguageParser.T__4) | (1 << BaliLanguageParser.T__12) | (1 << BaliLanguageParser.T__15) | (1 << BaliLanguageParser.T__17) | (1 << BaliLanguageParser.T__19) | (1 << BaliLanguageParser.T__20) | (1 << BaliLanguageParser.T__21) | (1 << BaliLanguageParser.T__22) | (1 << BaliLanguageParser.T__24) | (1 << BaliLanguageParser.T__26) | (1 << BaliLanguageParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (BaliLanguageParser.T__31 - 32)) | (1 << (BaliLanguageParser.T__34 - 32)) | (1 << (BaliLanguageParser.T__35 - 32)) | (1 << (BaliLanguageParser.T__36 - 32)) | (1 << (BaliLanguageParser.T__37 - 32)) | (1 << (BaliLanguageParser.T__38 - 32)) | (1 << (BaliLanguageParser.T__42 - 32)) | (1 << (BaliLanguageParser.T__43 - 32)) | (1 << (BaliLanguageParser.T__44 - 32)) | (1 << (BaliLanguageParser.T__47 - 32)) | (1 << (BaliLanguageParser.T__53 - 32)) | (1 << (BaliLanguageParser.T__59 - 32)) | (1 << (BaliLanguageParser.T__60 - 32)) | (1 << (BaliLanguageParser.T__61 - 32)) | (1 << (BaliLanguageParser.T__62 - 32)))) !== 0) || ((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (BaliLanguageParser.T__64 - 65)) | (1 << (BaliLanguageParser.T__65 - 65)) | (1 << (BaliLanguageParser.T__67 - 65)) | (1 << (BaliLanguageParser.TAG - 65)) | (1 << (BaliLanguageParser.SYMBOL - 65)) | (1 << (BaliLanguageParser.FRACTION - 65)) | (1 << (BaliLanguageParser.CONSTANT - 65)) | (1 << (BaliLanguageParser.FLOAT - 65)) | (1 << (BaliLanguageParser.MOMENT - 65)) | (1 << (BaliLanguageParser.DURATION - 65)) | (1 << (BaliLanguageParser.RESOURCE - 65)) | (1 << (BaliLanguageParser.VERSION - 65)) | (1 << (BaliLanguageParser.BINARY - 65)) | (1 << (BaliLanguageParser.TEXT_BLOCK - 65)) | (1 << (BaliLanguageParser.TEXT - 65)) | (1 << (BaliLanguageParser.IDENTIFIER - 65)))) !== 0)) {
                this.state = 199;
                this.statement();
                this.state = 200;
                this.match(BaliLanguageParser.NEWLINE);
                this.state = 206;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case BaliLanguageParser.EOF:
        case BaliLanguageParser.T__5:
            localctx = new EmptyMethodContext(this, localctx);
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

StatementContext.prototype.attemptClause = function() {
    return this.getTypedRuleContext(AttemptClauseContext,0);
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

StatementContext.prototype.finishClause = function() {
    return this.getTypedRuleContext(FinishClauseContext,0);
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
        this.state = 210;
        this.attemptClause();
        this.state = 214;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BaliLanguageParser.T__10) {
            this.state = 211;
            this.handleClause();
            this.state = 216;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 218;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__13) {
            this.state = 217;
            this.finishClause();
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

function AttemptClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_attemptClause;
    return this;
}

AttemptClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttemptClauseContext.prototype.constructor = AttemptClauseContext;

AttemptClauseContext.prototype.evaluateClause = function() {
    return this.getTypedRuleContext(EvaluateClauseContext,0);
};

AttemptClauseContext.prototype.checkoutClause = function() {
    return this.getTypedRuleContext(CheckoutClauseContext,0);
};

AttemptClauseContext.prototype.saveClause = function() {
    return this.getTypedRuleContext(SaveClauseContext,0);
};

AttemptClauseContext.prototype.discardClause = function() {
    return this.getTypedRuleContext(DiscardClauseContext,0);
};

AttemptClauseContext.prototype.commitClause = function() {
    return this.getTypedRuleContext(CommitClauseContext,0);
};

AttemptClauseContext.prototype.publishClause = function() {
    return this.getTypedRuleContext(PublishClauseContext,0);
};

AttemptClauseContext.prototype.queueClause = function() {
    return this.getTypedRuleContext(QueueClauseContext,0);
};

AttemptClauseContext.prototype.waitClause = function() {
    return this.getTypedRuleContext(WaitClauseContext,0);
};

AttemptClauseContext.prototype.ifClause = function() {
    return this.getTypedRuleContext(IfClauseContext,0);
};

AttemptClauseContext.prototype.selectClause = function() {
    return this.getTypedRuleContext(SelectClauseContext,0);
};

AttemptClauseContext.prototype.whileClause = function() {
    return this.getTypedRuleContext(WhileClauseContext,0);
};

AttemptClauseContext.prototype.withClause = function() {
    return this.getTypedRuleContext(WithClauseContext,0);
};

AttemptClauseContext.prototype.continueClause = function() {
    return this.getTypedRuleContext(ContinueClauseContext,0);
};

AttemptClauseContext.prototype.breakClause = function() {
    return this.getTypedRuleContext(BreakClauseContext,0);
};

AttemptClauseContext.prototype.returnClause = function() {
    return this.getTypedRuleContext(ReturnClauseContext,0);
};

AttemptClauseContext.prototype.throwClause = function() {
    return this.getTypedRuleContext(ThrowClauseContext,0);
};

AttemptClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterAttemptClause(this);
	}
};

AttemptClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitAttemptClause(this);
	}
};

AttemptClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitAttemptClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.AttemptClauseContext = AttemptClauseContext;

BaliLanguageParser.prototype.attemptClause = function() {

    var localctx = new AttemptClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, BaliLanguageParser.RULE_attemptClause);
    try {
        this.state = 236;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 220;
            this.evaluateClause();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 221;
            this.checkoutClause();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 222;
            this.saveClause();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 223;
            this.discardClause();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 224;
            this.commitClause();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 225;
            this.publishClause();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 226;
            this.queueClause();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 227;
            this.waitClause();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 228;
            this.ifClause();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 229;
            this.selectClause();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 230;
            this.whileClause();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 231;
            this.withClause();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 232;
            this.continueClause();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 233;
            this.breakClause();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 234;
            this.returnClause();
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 235;
            this.throwClause();
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
    this.enterRule(localctx, 30, BaliLanguageParser.RULE_handleClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this.match(BaliLanguageParser.T__10);
        this.state = 239;
        this.symbol();
        this.state = 240;
        this.match(BaliLanguageParser.T__11);
        this.state = 241;
        this.expression(0);
        this.state = 242;
        this.match(BaliLanguageParser.T__12);
        this.state = 243;
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

function FinishClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_finishClause;
    return this;
}

FinishClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FinishClauseContext.prototype.constructor = FinishClauseContext;

FinishClauseContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FinishClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterFinishClause(this);
	}
};

FinishClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitFinishClause(this);
	}
};

FinishClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitFinishClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.FinishClauseContext = FinishClauseContext;

BaliLanguageParser.prototype.finishClause = function() {

    var localctx = new FinishClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, BaliLanguageParser.RULE_finishClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.match(BaliLanguageParser.T__13);
        this.state = 246;
        this.match(BaliLanguageParser.T__12);
        this.state = 247;
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

EvaluateClauseContext.prototype.assignee = function() {
    return this.getTypedRuleContext(AssigneeContext,0);
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
    this.enterRule(localctx, 34, BaliLanguageParser.RULE_evaluateClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 249;
            this.assignee();
            this.state = 250;
            this.match(BaliLanguageParser.T__14);

        }
        this.state = 254;
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

AssigneeContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
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
        this.state = 258;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.SYMBOL:
            this.enterOuterAlt(localctx, 1);
            this.state = 256;
            this.symbol();
            break;
        case BaliLanguageParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 257;
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
    this.enterRule(localctx, 38, BaliLanguageParser.RULE_component);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 260;
        this.variable();
        this.state = 261;
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
    this.enterRule(localctx, 40, BaliLanguageParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
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
    this.enterRule(localctx, 42, BaliLanguageParser.RULE_indices);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this.match(BaliLanguageParser.T__2);
        this.state = 266;
        this.array();
        this.state = 267;
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

CheckoutClauseContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
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
    this.enterRule(localctx, 44, BaliLanguageParser.RULE_checkoutClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269;
        this.match(BaliLanguageParser.T__15);
        this.state = 270;
        this.symbol();
        this.state = 271;
        this.match(BaliLanguageParser.T__16);
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
    this.enterRule(localctx, 46, BaliLanguageParser.RULE_saveClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
        this.match(BaliLanguageParser.T__17);
        this.state = 275;
        this.expression(0);
        this.state = 276;
        this.match(BaliLanguageParser.T__18);
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
    this.enterRule(localctx, 48, BaliLanguageParser.RULE_discardClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        this.match(BaliLanguageParser.T__19);
        this.state = 280;
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
    this.enterRule(localctx, 50, BaliLanguageParser.RULE_commitClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        this.match(BaliLanguageParser.T__20);
        this.state = 283;
        this.expression(0);
        this.state = 284;
        this.match(BaliLanguageParser.T__18);
        this.state = 285;
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
    this.enterRule(localctx, 52, BaliLanguageParser.RULE_publishClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this.match(BaliLanguageParser.T__21);
        this.state = 288;
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
    this.enterRule(localctx, 54, BaliLanguageParser.RULE_queueClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        this.match(BaliLanguageParser.T__22);
        this.state = 291;
        this.expression(0);
        this.state = 292;
        this.match(BaliLanguageParser.T__23);
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

WaitClauseContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
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
    this.enterRule(localctx, 56, BaliLanguageParser.RULE_waitClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        this.match(BaliLanguageParser.T__24);
        this.state = 296;
        this.match(BaliLanguageParser.T__25);
        this.state = 297;
        this.symbol();
        this.state = 298;
        this.match(BaliLanguageParser.T__16);
        this.state = 299;
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
    this.enterRule(localctx, 58, BaliLanguageParser.RULE_ifClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.match(BaliLanguageParser.T__26);
        this.state = 302;
        this.expression(0);
        this.state = 303;
        this.match(BaliLanguageParser.T__27);
        this.state = 304;
        this.block();
        this.state = 313;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 305;
                this.match(BaliLanguageParser.T__28);
                this.state = 306;
                this.match(BaliLanguageParser.T__26);
                this.state = 307;
                this.expression(0);
                this.state = 308;
                this.match(BaliLanguageParser.T__27);
                this.state = 309;
                this.block(); 
            }
            this.state = 315;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
        }

        this.state = 318;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__28) {
            this.state = 316;
            this.match(BaliLanguageParser.T__28);
            this.state = 317;
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
    this.enterRule(localctx, 60, BaliLanguageParser.RULE_selectClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 320;
        this.match(BaliLanguageParser.T__29);
        this.state = 321;
        this.expression(0);
        this.state = 322;
        this.match(BaliLanguageParser.T__16);
        this.state = 327; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 323;
            this.expression(0);
            this.state = 324;
            this.match(BaliLanguageParser.T__30);
            this.state = 325;
            this.block();
            this.state = 329; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliLanguageParser.T__0) | (1 << BaliLanguageParser.T__2) | (1 << BaliLanguageParser.T__4))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (BaliLanguageParser.T__38 - 39)) | (1 << (BaliLanguageParser.T__42 - 39)) | (1 << (BaliLanguageParser.T__43 - 39)) | (1 << (BaliLanguageParser.T__44 - 39)) | (1 << (BaliLanguageParser.T__47 - 39)) | (1 << (BaliLanguageParser.T__53 - 39)) | (1 << (BaliLanguageParser.T__59 - 39)) | (1 << (BaliLanguageParser.T__60 - 39)) | (1 << (BaliLanguageParser.T__61 - 39)) | (1 << (BaliLanguageParser.T__62 - 39)) | (1 << (BaliLanguageParser.T__64 - 39)) | (1 << (BaliLanguageParser.T__65 - 39)) | (1 << (BaliLanguageParser.T__67 - 39)))) !== 0) || ((((_la - 72)) & ~0x1f) == 0 && ((1 << (_la - 72)) & ((1 << (BaliLanguageParser.TAG - 72)) | (1 << (BaliLanguageParser.SYMBOL - 72)) | (1 << (BaliLanguageParser.FRACTION - 72)) | (1 << (BaliLanguageParser.CONSTANT - 72)) | (1 << (BaliLanguageParser.FLOAT - 72)) | (1 << (BaliLanguageParser.MOMENT - 72)) | (1 << (BaliLanguageParser.DURATION - 72)) | (1 << (BaliLanguageParser.RESOURCE - 72)) | (1 << (BaliLanguageParser.VERSION - 72)) | (1 << (BaliLanguageParser.BINARY - 72)) | (1 << (BaliLanguageParser.TEXT_BLOCK - 72)) | (1 << (BaliLanguageParser.TEXT - 72)) | (1 << (BaliLanguageParser.IDENTIFIER - 72)))) !== 0));
        this.state = 333;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__28) {
            this.state = 331;
            this.match(BaliLanguageParser.T__28);
            this.state = 332;
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

WhileClauseContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
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
    this.enterRule(localctx, 62, BaliLanguageParser.RULE_whileClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.IDENTIFIER) {
            this.state = 335;
            this.label();
            this.state = 336;
            this.match(BaliLanguageParser.T__8);
        }

        this.state = 340;
        this.match(BaliLanguageParser.T__31);
        this.state = 341;
        this.expression(0);
        this.state = 342;
        this.match(BaliLanguageParser.T__30);
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

WithClauseContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
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
    this.enterRule(localctx, 64, BaliLanguageParser.RULE_withClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 348;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.IDENTIFIER) {
            this.state = 345;
            this.label();
            this.state = 346;
            this.match(BaliLanguageParser.T__8);
        }

        this.state = 350;
        this.match(BaliLanguageParser.T__12);
        this.state = 355;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__32) {
            this.state = 351;
            this.match(BaliLanguageParser.T__32);
            this.state = 352;
            this.symbol();
            this.state = 353;
            this.match(BaliLanguageParser.T__33);
        }

        this.state = 357;
        this.expression(0);
        this.state = 358;
        this.match(BaliLanguageParser.T__30);
        this.state = 359;
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

ContinueClauseContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

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
    this.enterRule(localctx, 66, BaliLanguageParser.RULE_continueClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 361;
        this.match(BaliLanguageParser.T__34);
        this.state = 364;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__18) {
            this.state = 362;
            this.match(BaliLanguageParser.T__18);
            this.state = 363;
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

BreakClauseContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

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
    this.enterRule(localctx, 68, BaliLanguageParser.RULE_breakClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 366;
        this.match(BaliLanguageParser.T__35);
        this.state = 369;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BaliLanguageParser.T__16) {
            this.state = 367;
            this.match(BaliLanguageParser.T__16);
            this.state = 368;
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
    this.enterRule(localctx, 70, BaliLanguageParser.RULE_returnClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 371;
        this.match(BaliLanguageParser.T__36);
        this.state = 373;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BaliLanguageParser.T__0) | (1 << BaliLanguageParser.T__2) | (1 << BaliLanguageParser.T__4))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (BaliLanguageParser.T__38 - 39)) | (1 << (BaliLanguageParser.T__42 - 39)) | (1 << (BaliLanguageParser.T__43 - 39)) | (1 << (BaliLanguageParser.T__44 - 39)) | (1 << (BaliLanguageParser.T__47 - 39)) | (1 << (BaliLanguageParser.T__53 - 39)) | (1 << (BaliLanguageParser.T__59 - 39)) | (1 << (BaliLanguageParser.T__60 - 39)) | (1 << (BaliLanguageParser.T__61 - 39)) | (1 << (BaliLanguageParser.T__62 - 39)) | (1 << (BaliLanguageParser.T__64 - 39)) | (1 << (BaliLanguageParser.T__65 - 39)) | (1 << (BaliLanguageParser.T__67 - 39)))) !== 0) || ((((_la - 72)) & ~0x1f) == 0 && ((1 << (_la - 72)) & ((1 << (BaliLanguageParser.TAG - 72)) | (1 << (BaliLanguageParser.SYMBOL - 72)) | (1 << (BaliLanguageParser.FRACTION - 72)) | (1 << (BaliLanguageParser.CONSTANT - 72)) | (1 << (BaliLanguageParser.FLOAT - 72)) | (1 << (BaliLanguageParser.MOMENT - 72)) | (1 << (BaliLanguageParser.DURATION - 72)) | (1 << (BaliLanguageParser.RESOURCE - 72)) | (1 << (BaliLanguageParser.VERSION - 72)) | (1 << (BaliLanguageParser.BINARY - 72)) | (1 << (BaliLanguageParser.TEXT_BLOCK - 72)) | (1 << (BaliLanguageParser.TEXT - 72)) | (1 << (BaliLanguageParser.IDENTIFIER - 72)))) !== 0)) {
            this.state = 372;
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
    this.enterRule(localctx, 72, BaliLanguageParser.RULE_throwClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 375;
        this.match(BaliLanguageParser.T__37);
        this.state = 376;
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
    this.enterRule(localctx, 74, BaliLanguageParser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 378;
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

MessageExpressionContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
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

FunctionExpressionContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
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
    var _startState = 76;
    this.enterRecursionRule(localctx, 76, BaliLanguageParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 398;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            localctx = new DocumentExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 381;
            this.document();
            break;

        case 2:
            localctx = new VariableExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 382;
            this.variable();
            break;

        case 3:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 383;
            this.invocation();
            break;

        case 4:
            localctx = new PrecedenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 384;
            this.match(BaliLanguageParser.T__0);
            this.state = 385;
            this.expression(0);
            this.state = 386;
            this.match(BaliLanguageParser.T__1);
            break;

        case 5:
            localctx = new DereferenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 388;
            this.match(BaliLanguageParser.T__38);
            this.state = 389;
            this.expression(12);
            break;

        case 6:
            localctx = new InversionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 390;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (BaliLanguageParser.T__42 - 43)) | (1 << (BaliLanguageParser.T__43 - 43)) | (1 << (BaliLanguageParser.T__44 - 43)))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 391;
            this.expression(7);
            break;

        case 7:
            localctx = new MagnitudeExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 392;
            this.match(BaliLanguageParser.T__47);
            this.state = 393;
            this.expression(0);
            this.state = 394;
            this.match(BaliLanguageParser.T__47);
            break;

        case 8:
            localctx = new ComplementExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 396;
            this.match(BaliLanguageParser.T__53);
            this.state = 397;
            this.expression(3);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 424;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 422;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExponentialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 400;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 401;
                    this.match(BaliLanguageParser.T__41);
                    this.state = 402;
                    this.expression(8);
                    break;

                case 2:
                    localctx = new ArithmeticExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 403;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 404;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (BaliLanguageParser.T__42 - 43)) | (1 << (BaliLanguageParser.T__43 - 43)) | (1 << (BaliLanguageParser.T__44 - 43)) | (1 << (BaliLanguageParser.T__45 - 43)) | (1 << (BaliLanguageParser.T__46 - 43)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 405;
                    this.expression(7);
                    break;

                case 3:
                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 406;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 407;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (BaliLanguageParser.T__48 - 49)) | (1 << (BaliLanguageParser.T__49 - 49)) | (1 << (BaliLanguageParser.T__50 - 49)) | (1 << (BaliLanguageParser.T__51 - 49)) | (1 << (BaliLanguageParser.T__52 - 49)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 408;
                    this.expression(5);
                    break;

                case 4:
                    localctx = new LogicalExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 409;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 410;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (BaliLanguageParser.T__54 - 55)) | (1 << (BaliLanguageParser.T__55 - 55)) | (1 << (BaliLanguageParser.T__56 - 55)) | (1 << (BaliLanguageParser.T__57 - 55)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 411;
                    this.expression(3);
                    break;

                case 5:
                    localctx = new DefaultExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 412;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 413;
                    this.match(BaliLanguageParser.T__58);
                    this.state = 414;
                    this.expression(2);
                    break;

                case 6:
                    localctx = new MessageExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 415;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 416;
                    this.match(BaliLanguageParser.T__39);
                    this.state = 417;
                    this.invocation();
                    break;

                case 7:
                    localctx = new ComponentExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 418;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 419;
                    this.indices();
                    break;

                case 8:
                    localctx = new FactorialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BaliLanguageParser.RULE_expression);
                    this.state = 420;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 421;
                    this.match(BaliLanguageParser.T__40);
                    break;

                } 
            }
            this.state = 426;
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

function InvocationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_invocation;
    return this;
}

InvocationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InvocationContext.prototype.constructor = InvocationContext;

InvocationContext.prototype.IDENTIFIER = function() {
    return this.getToken(BaliLanguageParser.IDENTIFIER, 0);
};

InvocationContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

InvocationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterInvocation(this);
	}
};

InvocationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitInvocation(this);
	}
};

InvocationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitInvocation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BaliLanguageParser.InvocationContext = InvocationContext;

BaliLanguageParser.prototype.invocation = function() {

    var localctx = new InvocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, BaliLanguageParser.RULE_invocation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 427;
        this.match(BaliLanguageParser.IDENTIFIER);
        this.state = 428;
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

ElementContext.prototype.time = function() {
    return this.getTypedRuleContext(TimeContext,0);
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
    this.enterRule(localctx, 80, BaliLanguageParser.RULE_element);
    try {
        this.state = 441;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 430;
            this.any();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 431;
            this.tag();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 432;
            this.symbol();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 433;
            this.time();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 434;
            this.reference();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 435;
            this.version();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 436;
            this.text();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 437;
            this.binary();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 438;
            this.probability();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 439;
            this.percent();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 440;
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
    this.enterRule(localctx, 82, BaliLanguageParser.RULE_any);
    try {
        this.state = 445;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__59:
            localctx = new NoneAnyContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 443;
            this.match(BaliLanguageParser.T__59);
            break;
        case BaliLanguageParser.T__60:
            localctx = new AnyAnyContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 444;
            this.match(BaliLanguageParser.T__60);
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
    this.enterRule(localctx, 84, BaliLanguageParser.RULE_tag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 447;
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
    this.enterRule(localctx, 86, BaliLanguageParser.RULE_symbol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 449;
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

function TimeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BaliLanguageParser.RULE_time;
    return this;
}

TimeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TimeContext.prototype.constructor = TimeContext;


 
TimeContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DurationTimeContext(parser, ctx) {
	TimeContext.call(this, parser);
    TimeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DurationTimeContext.prototype = Object.create(TimeContext.prototype);
DurationTimeContext.prototype.constructor = DurationTimeContext;

BaliLanguageParser.DurationTimeContext = DurationTimeContext;

DurationTimeContext.prototype.DURATION = function() {
    return this.getToken(BaliLanguageParser.DURATION, 0);
};
DurationTimeContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterDurationTime(this);
	}
};

DurationTimeContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitDurationTime(this);
	}
};

DurationTimeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitDurationTime(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MomentTimeContext(parser, ctx) {
	TimeContext.call(this, parser);
    TimeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MomentTimeContext.prototype = Object.create(TimeContext.prototype);
MomentTimeContext.prototype.constructor = MomentTimeContext;

BaliLanguageParser.MomentTimeContext = MomentTimeContext;

MomentTimeContext.prototype.MOMENT = function() {
    return this.getToken(BaliLanguageParser.MOMENT, 0);
};
MomentTimeContext.prototype.enterRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.enterMomentTime(this);
	}
};

MomentTimeContext.prototype.exitRule = function(listener) {
    if(listener instanceof BaliLanguageListener ) {
        listener.exitMomentTime(this);
	}
};

MomentTimeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BaliLanguageVisitor ) {
        return visitor.visitMomentTime(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BaliLanguageParser.TimeContext = TimeContext;

BaliLanguageParser.prototype.time = function() {

    var localctx = new TimeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, BaliLanguageParser.RULE_time);
    try {
        this.state = 453;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.MOMENT:
            localctx = new MomentTimeContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 451;
            this.match(BaliLanguageParser.MOMENT);
            break;
        case BaliLanguageParser.DURATION:
            localctx = new DurationTimeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 452;
            this.match(BaliLanguageParser.DURATION);
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
    this.enterRule(localctx, 90, BaliLanguageParser.RULE_reference);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 455;
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
    this.enterRule(localctx, 92, BaliLanguageParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 457;
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
    this.enterRule(localctx, 94, BaliLanguageParser.RULE_text);
    try {
        this.state = 461;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.TEXT:
            localctx = new InlineTextContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 459;
            this.match(BaliLanguageParser.TEXT);
            break;
        case BaliLanguageParser.TEXT_BLOCK:
            localctx = new NewlineTextContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 460;
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
    this.enterRule(localctx, 96, BaliLanguageParser.RULE_binary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 463;
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
    this.enterRule(localctx, 98, BaliLanguageParser.RULE_probability);
    try {
        this.state = 468;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__61:
            localctx = new TrueProbabilityContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 465;
            this.match(BaliLanguageParser.T__61);
            break;
        case BaliLanguageParser.T__62:
            localctx = new FalseProbabilityContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 466;
            this.match(BaliLanguageParser.T__62);
            break;
        case BaliLanguageParser.FRACTION:
            localctx = new FractionalProbabilityContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 467;
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
    this.enterRule(localctx, 100, BaliLanguageParser.RULE_percent);
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
    this.enterRule(localctx, 102, BaliLanguageParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.state = 483;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UndefinedNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 473;
            this.match(BaliLanguageParser.T__64);
            break;

        case 2:
            localctx = new InfiniteNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 474;
            this.match(BaliLanguageParser.T__65);
            break;

        case 3:
            localctx = new RealNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 475;
            this.real();
            break;

        case 4:
            localctx = new ImaginaryNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 476;
            this.imaginary();
            break;

        case 5:
            localctx = new ComplexNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 477;
            this.match(BaliLanguageParser.T__0);
            this.state = 478;
            this.real();
            this.state = 479;
            localctx.del = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===BaliLanguageParser.T__7 || _la===BaliLanguageParser.T__66)) {
                localctx.del = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 480;
            this.imaginary();
            this.state = 481;
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
    this.enterRule(localctx, 104, BaliLanguageParser.RULE_real);
    var _la = 0; // Token type
    try {
        this.state = 490;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BaliLanguageParser.T__42:
        case BaliLanguageParser.CONSTANT:
            localctx = new ConstantRealContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 486;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===BaliLanguageParser.T__42) {
                this.state = 485;
                localctx.sign = this.match(BaliLanguageParser.T__42);
            }

            this.state = 488;
            this.match(BaliLanguageParser.CONSTANT);
            break;
        case BaliLanguageParser.FLOAT:
            localctx = new VariableRealContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 489;
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
    this.enterRule(localctx, 106, BaliLanguageParser.RULE_imaginary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 494;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        if(la_===1) {
            this.state = 492;
            this.real();

        } else if(la_===2) {
            this.state = 493;
            localctx.sign = this.match(BaliLanguageParser.T__42);

        }
        this.state = 496;
        this.match(BaliLanguageParser.T__67);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
	case 38:
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
