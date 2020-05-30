// Generated from src/grammar/Document.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var DocumentListener = require('./DocumentListener').DocumentListener;
var DocumentVisitor = require('./DocumentVisitor').DocumentVisitor;

var grammarFileName = "Document.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003a\u0219\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
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
    ":\t:\u0003\u0002\u0007\u0002v\n\u0002\f\u0002\u000e\u0002y\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u0002}\n\u0002\f\u0002\u000e\u0002\u0080",
    "\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0005\u0003",
    "\u0086\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004\u009a\n\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005",
    "\u00a3\n\u0005\r\u0005\u000e\u0005\u00a4\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u00ae",
    "\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0005\b\u00b7\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0005\t\u00c1\n\t\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0007\u0011\u00e8\n\u0011\f\u0011\u000e\u0011\u00eb\u000b\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u00ef\n\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0006",
    "\u0012\u00f8\n\u0012\r\u0012\u000e\u0012\u00f9\u0003\u0012\u0003\u0012",
    "\u0005\u0012\u00fe\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u0105\n\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0005\u0017\u0118\n\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0005\u0019\u011f",
    "\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u013c\n",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u015e\n\u001b\f\u001b\u000e",
    "\u001b\u0161\u000b\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0007\u001f",
    "\u016c\n\u001f\f\u001f\u000e\u001f\u016f\u000b\u001f\u0003\u001f\u0005",
    "\u001f\u0172\n\u001f\u0003 \u0003 \u0003 \u0007 \u0177\n \f \u000e ",
    "\u017a\u000b \u0003!\u0003!\u0005!\u017e\n!\u0003\"\u0003\"\u0003\"",
    "\u0005\"\u0183\n\"\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0005$",
    "\u018b\n$\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0007&\u0194",
    "\n&\f&\u000e&\u0197\u000b&\u0003&\u0003&\u0003&\u0003&\u0007&\u019d",
    "\n&\f&\u000e&\u01a0\u000b&\u0003&\u0005&\u01a3\n&\u0003\'\u0003\'\u0003",
    "\'\u0007\'\u01a8\n\'\f\'\u000e\'\u01ab\u000b\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0007\'\u01b1\n\'\f\'\u000e\'\u01b4\u000b\'\u0003\'\u0005",
    "\'\u01b7\n\'\u0003(\u0003(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003",
    ")\u0003*\u0003*\u0003*\u0007*\u01c4\n*\f*\u000e*\u01c7\u000b*\u0003",
    "*\u0003*\u0003*\u0003*\u0007*\u01cd\n*\f*\u000e*\u01d0\u000b*\u0003",
    "*\u0005*\u01d3\n*\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0005+\u01e4\n+\u0003",
    ",\u0003,\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u00030\u00030\u0003",
    "1\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u0003",
    "1\u00031\u00031\u00051\u01fd\n1\u00031\u00051\u0200\n1\u00032\u0003",
    "2\u00033\u00033\u00034\u00034\u00035\u00055\u0209\n5\u00035\u00035\u0005",
    "5\u020d\n5\u00036\u00036\u00037\u00037\u00038\u00038\u00039\u00039\u0003",
    ":\u0003:\u0003:\u0002\u00034;\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ",
    "\\^`bdfhjlnpr\u0002\u000b\u0003\u0002./\u0003\u0002.2\u0003\u000248",
    "\u0003\u0002:=\u0003\u0002)*\u0004\u0002HIWW\u0004\u0002JKPP\u0004\u0002",
    "CCVV\u0003\u0002Z[\u0002\u0238\u0002w\u0003\u0002\u0002\u0002\u0004",
    "\u0083\u0003\u0002\u0002\u0002\u0006\u0099\u0003\u0002\u0002\u0002\b",
    "\u009b\u0003\u0002\u0002\u0002\n\u00a6\u0003\u0002\u0002\u0002\f\u00ad",
    "\u0003\u0002\u0002\u0002\u000e\u00b1\u0003\u0002\u0002\u0002\u0010\u00bc",
    "\u0003\u0002\u0002\u0002\u0012\u00c2\u0003\u0002\u0002\u0002\u0014\u00c5",
    "\u0003\u0002\u0002\u0002\u0016\u00ca\u0003\u0002\u0002\u0002\u0018\u00cd",
    "\u0003\u0002\u0002\u0002\u001a\u00d2\u0003\u0002\u0002\u0002\u001c\u00d7",
    "\u0003\u0002\u0002\u0002\u001e\u00da\u0003\u0002\u0002\u0002 \u00dd",
    "\u0003\u0002\u0002\u0002\"\u00f0\u0003\u0002\u0002\u0002$\u00ff\u0003",
    "\u0002\u0002\u0002&\u010a\u0003\u0002\u0002\u0002(\u010f\u0003\u0002",
    "\u0002\u0002*\u0112\u0003\u0002\u0002\u0002,\u0115\u0003\u0002\u0002",
    "\u0002.\u0119\u0003\u0002\u0002\u00020\u011e\u0003\u0002\u0002\u0002",
    "2\u0120\u0003\u0002\u0002\u00024\u013b\u0003\u0002\u0002\u00026\u0162",
    "\u0003\u0002\u0002\u00028\u0164\u0003\u0002\u0002\u0002:\u0166\u0003",
    "\u0002\u0002\u0002<\u0171\u0003\u0002\u0002\u0002>\u0173\u0003\u0002",
    "\u0002\u0002@\u017b\u0003\u0002\u0002\u0002B\u0182\u0003\u0002\u0002",
    "\u0002D\u0184\u0003\u0002\u0002\u0002F\u018a\u0003\u0002\u0002\u0002",
    "H\u018c\u0003\u0002\u0002\u0002J\u01a2\u0003\u0002\u0002\u0002L\u01b6",
    "\u0003\u0002\u0002\u0002N\u01b8\u0003\u0002\u0002\u0002P\u01bc\u0003",
    "\u0002\u0002\u0002R\u01d2\u0003\u0002\u0002\u0002T\u01e3\u0003\u0002",
    "\u0002\u0002V\u01e5\u0003\u0002\u0002\u0002X\u01e7\u0003\u0002\u0002",
    "\u0002Z\u01e9\u0003\u0002\u0002\u0002\\\u01eb\u0003\u0002\u0002\u0002",
    "^\u01ed\u0003\u0002\u0002\u0002`\u01ff\u0003\u0002\u0002\u0002b\u0201",
    "\u0003\u0002\u0002\u0002d\u0203\u0003\u0002\u0002\u0002f\u0205\u0003",
    "\u0002\u0002\u0002h\u0208\u0003\u0002\u0002\u0002j\u020e\u0003\u0002",
    "\u0002\u0002l\u0210\u0003\u0002\u0002\u0002n\u0212\u0003\u0002\u0002",
    "\u0002p\u0214\u0003\u0002\u0002\u0002r\u0216\u0003\u0002\u0002\u0002",
    "tv\u0007^\u0002\u0002ut\u0003\u0002\u0002\u0002vy\u0003\u0002\u0002",
    "\u0002wu\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002xz\u0003\u0002",
    "\u0002\u0002yw\u0003\u0002\u0002\u0002z~\u0005@!\u0002{}\u0007^\u0002",
    "\u0002|{\u0003\u0002\u0002\u0002}\u0080\u0003\u0002\u0002\u0002~|\u0003",
    "\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0081\u0003",
    "\u0002\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0081\u0082\u0007",
    "\u0002\u0002\u0003\u0082\u0003\u0003\u0002\u0002\u0002\u0083\u0085\u0005",
    "\u0006\u0004\u0002\u0084\u0086\u0005\b\u0005\u0002\u0085\u0084\u0003",
    "\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0005\u0003",
    "\u0002\u0002\u0002\u0087\u009a\u0005\f\u0007\u0002\u0088\u009a\u0005",
    "\u000e\b\u0002\u0089\u009a\u0005\u0010\t\u0002\u008a\u009a\u0005\u0012",
    "\n\u0002\u008b\u009a\u0005\u0014\u000b\u0002\u008c\u009a\u0005\u0016",
    "\f\u0002\u008d\u009a\u0005\u0018\r\u0002\u008e\u009a\u0005\u001a\u000e",
    "\u0002\u008f\u009a\u0005\u001c\u000f\u0002\u0090\u009a\u0005\u001e\u0010",
    "\u0002\u0091\u009a\u0005 \u0011\u0002\u0092\u009a\u0005\"\u0012\u0002",
    "\u0093\u009a\u0005$\u0013\u0002\u0094\u009a\u0005&\u0014\u0002\u0095",
    "\u009a\u0005(\u0015\u0002\u0096\u009a\u0005*\u0016\u0002\u0097\u009a",
    "\u0005,\u0017\u0002\u0098\u009a\u0005.\u0018\u0002\u0099\u0087\u0003",
    "\u0002\u0002\u0002\u0099\u0088\u0003\u0002\u0002\u0002\u0099\u0089\u0003",
    "\u0002\u0002\u0002\u0099\u008a\u0003\u0002\u0002\u0002\u0099\u008b\u0003",
    "\u0002\u0002\u0002\u0099\u008c\u0003\u0002\u0002\u0002\u0099\u008d\u0003",
    "\u0002\u0002\u0002\u0099\u008e\u0003\u0002\u0002\u0002\u0099\u008f\u0003",
    "\u0002\u0002\u0002\u0099\u0090\u0003\u0002\u0002\u0002\u0099\u0091\u0003",
    "\u0002\u0002\u0002\u0099\u0092\u0003\u0002\u0002\u0002\u0099\u0093\u0003",
    "\u0002\u0002\u0002\u0099\u0094\u0003\u0002\u0002\u0002\u0099\u0095\u0003",
    "\u0002\u0002\u0002\u0099\u0096\u0003\u0002\u0002\u0002\u0099\u0097\u0003",
    "\u0002\u0002\u0002\u0099\u0098\u0003\u0002\u0002\u0002\u009a\u0007\u0003",
    "\u0002\u0002\u0002\u009b\u009c\u0007\u0003\u0002\u0002\u009c\u00a2\u0005",
    "l7\u0002\u009d\u009e\u0007\u0004\u0002\u0002\u009e\u009f\u00054\u001b",
    "\u0002\u009f\u00a0\u0007\u0005\u0002\u0002\u00a0\u00a1\u0005\n\u0006",
    "\u0002\u00a1\u00a3\u0003\u0002\u0002\u0002\u00a2\u009d\u0003\u0002\u0002",
    "\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003\u0002\u0002",
    "\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\t\u0003\u0002\u0002",
    "\u0002\u00a6\u00a7\u0007\u0006\u0002\u0002\u00a7\u00a8\u0005R*\u0002",
    "\u00a8\u00a9\u0007\u0007\u0002\u0002\u00a9\u000b\u0003\u0002\u0002\u0002",
    "\u00aa\u00ab\u00050\u0019\u0002\u00ab\u00ac\u0007\b\u0002\u0002\u00ac",
    "\u00ae\u0003\u0002\u0002\u0002\u00ad\u00aa\u0003\u0002\u0002\u0002\u00ad",
    "\u00ae\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af",
    "\u00b0\u00054\u001b\u0002\u00b0\r\u0003\u0002\u0002\u0002\u00b1\u00b6",
    "\u0007\t\u0002\u0002\u00b2\u00b3\u0007\n\u0002\u0002\u00b3\u00b4\u0005",
    "4\u001b\u0002\u00b4\u00b5\u0007\u000b\u0002\u0002\u00b5\u00b7\u0003",
    "\u0002\u0002\u0002\u00b6\u00b2\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003",
    "\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00b9\u0005",
    "0\u0019\u0002\u00b9\u00ba\u0007\f\u0002\u0002\u00ba\u00bb\u00054\u001b",
    "\u0002\u00bb\u000f\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007\r\u0002",
    "\u0002\u00bd\u00c0\u00054\u001b\u0002\u00be\u00bf\u0007\u000e\u0002",
    "\u0002\u00bf\u00c1\u00050\u0019\u0002\u00c0\u00be\u0003\u0002\u0002",
    "\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u0011\u0003\u0002\u0002",
    "\u0002\u00c2\u00c3\u0007\u000f\u0002\u0002\u00c3\u00c4\u00054\u001b",
    "\u0002\u00c4\u0013\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007\u0010\u0002",
    "\u0002\u00c6\u00c7\u00054\u001b\u0002\u00c7\u00c8\u0007\u0011\u0002",
    "\u0002\u00c8\u00c9\u00054\u001b\u0002\u00c9\u0015\u0003\u0002\u0002",
    "\u0002\u00ca\u00cb\u0007\u0012\u0002\u0002\u00cb\u00cc\u00054\u001b",
    "\u0002\u00cc\u0017\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007\u0013\u0002",
    "\u0002\u00ce\u00cf\u00054\u001b\u0002\u00cf\u00d0\u0007\u0011\u0002",
    "\u0002\u00d0\u00d1\u00054\u001b\u0002\u00d1\u0019\u0003\u0002\u0002",
    "\u0002\u00d2\u00d3\u0007\u0014\u0002\u0002\u00d3\u00d4\u00050\u0019",
    "\u0002\u00d4\u00d5\u0007\f\u0002\u0002\u00d5\u00d6\u00054\u001b\u0002",
    "\u00d6\u001b\u0003\u0002\u0002\u0002\u00d7\u00d8\u0007\u0015\u0002\u0002",
    "\u00d8\u00d9\u00054\u001b\u0002\u00d9\u001d\u0003\u0002\u0002\u0002",
    "\u00da\u00db\u0007\u0016\u0002\u0002\u00db\u00dc\u00054\u001b\u0002",
    "\u00dc\u001f\u0003\u0002\u0002\u0002\u00dd\u00de\u0007\u0017\u0002\u0002",
    "\u00de\u00df\u00054\u001b\u0002\u00df\u00e0\u0007\u0018\u0002\u0002",
    "\u00e0\u00e9\u0005\n\u0006\u0002\u00e1\u00e2\u0007\u0019\u0002\u0002",
    "\u00e2\u00e3\u0007\u0017\u0002\u0002\u00e3\u00e4\u00054\u001b\u0002",
    "\u00e4\u00e5\u0007\u0018\u0002\u0002\u00e5\u00e6\u0005\n\u0006\u0002",
    "\u00e6\u00e8\u0003\u0002\u0002\u0002\u00e7\u00e1\u0003\u0002\u0002\u0002",
    "\u00e8\u00eb\u0003\u0002\u0002\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002",
    "\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea\u00ee\u0003\u0002\u0002\u0002",
    "\u00eb\u00e9\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007\u0019\u0002\u0002",
    "\u00ed\u00ef\u0005\n\u0006\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002",
    "\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef!\u0003\u0002\u0002\u0002",
    "\u00f0\u00f1\u0007\u001a\u0002\u0002\u00f1\u00f2\u00054\u001b\u0002",
    "\u00f2\u00f7\u0007\f\u0002\u0002\u00f3\u00f4\u00054\u001b\u0002\u00f4",
    "\u00f5\u0007\u001b\u0002\u0002\u00f5\u00f6\u0005\n\u0006\u0002\u00f6",
    "\u00f8\u0003\u0002\u0002\u0002\u00f7\u00f3\u0003\u0002\u0002\u0002\u00f8",
    "\u00f9\u0003\u0002\u0002\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002\u00f9",
    "\u00fa\u0003\u0002\u0002\u0002\u00fa\u00fd\u0003\u0002\u0002\u0002\u00fb",
    "\u00fc\u0007\u0019\u0002\u0002\u00fc\u00fe\u0005\n\u0006\u0002\u00fd",
    "\u00fb\u0003\u0002\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe",
    "#\u0003\u0002\u0002\u0002\u00ff\u0104\u0007\u0005\u0002\u0002\u0100",
    "\u0101\u0007\u001c\u0002\u0002\u0101\u0102\u0005l7\u0002\u0102\u0103",
    "\u0007\u001d\u0002\u0002\u0103\u0105\u0003\u0002\u0002\u0002\u0104\u0100",
    "\u0003\u0002\u0002\u0002\u0104\u0105\u0003\u0002\u0002\u0002\u0105\u0106",
    "\u0003\u0002\u0002\u0002\u0106\u0107\u00054\u001b\u0002\u0107\u0108",
    "\u0007\u001b\u0002\u0002\u0108\u0109\u0005\n\u0006\u0002\u0109%\u0003",
    "\u0002\u0002\u0002\u010a\u010b\u0007\u001e\u0002\u0002\u010b\u010c\u0005",
    "4\u001b\u0002\u010c\u010d\u0007\u001b\u0002\u0002\u010d\u010e\u0005",
    "\n\u0006\u0002\u010e\'\u0003\u0002\u0002\u0002\u010f\u0110\u0007\u001f",
    "\u0002\u0002\u0110\u0111\u0007 \u0002\u0002\u0111)\u0003\u0002\u0002",
    "\u0002\u0112\u0113\u0007!\u0002\u0002\u0113\u0114\u0007 \u0002\u0002",
    "\u0114+\u0003\u0002\u0002\u0002\u0115\u0117\u0007\"\u0002\u0002\u0116",
    "\u0118\u00054\u001b\u0002\u0117\u0116\u0003\u0002\u0002\u0002\u0117",
    "\u0118\u0003\u0002\u0002\u0002\u0118-\u0003\u0002\u0002\u0002\u0119",
    "\u011a\u0007#\u0002\u0002\u011a\u011b\u00054\u001b\u0002\u011b/\u0003",
    "\u0002\u0002\u0002\u011c\u011f\u0005l7\u0002\u011d\u011f\u00052\u001a",
    "\u0002\u011e\u011c\u0003\u0002\u0002\u0002\u011e\u011d\u0003\u0002\u0002",
    "\u0002\u011f1\u0003\u0002\u0002\u0002\u0120\u0121\u00056\u001c\u0002",
    "\u0121\u0122\u0007$\u0002\u0002\u0122\u0123\u0005> \u0002\u0123\u0124",
    "\u0007%\u0002\u0002\u01243\u0003\u0002\u0002\u0002\u0125\u0126\b\u001b",
    "\u0001\u0002\u0126\u013c\u0005@!\u0002\u0127\u013c\u00056\u001c\u0002",
    "\u0128\u0129\u00058\u001d\u0002\u0129\u012a\u0007&\u0002\u0002\u012a",
    "\u012b\u0005<\u001f\u0002\u012b\u012c\u0007\'\u0002\u0002\u012c\u013c",
    "\u0003\u0002\u0002\u0002\u012d\u012e\u0007&\u0002\u0002\u012e\u012f",
    "\u00054\u001b\u0002\u012f\u0130\u0007\'\u0002\u0002\u0130\u013c\u0003",
    "\u0002\u0002\u0002\u0131\u0132\u0007(\u0002\u0002\u0132\u013c\u0005",
    "4\u001b\u000f\u0133\u0134\t\u0002\u0002\u0002\u0134\u013c\u00054\u001b",
    "\t\u0135\u0136\u00073\u0002\u0002\u0136\u0137\u00054\u001b\u0002\u0137",
    "\u0138\u00073\u0002\u0002\u0138\u013c\u0003\u0002\u0002\u0002\u0139",
    "\u013a\u00079\u0002\u0002\u013a\u013c\u00054\u001b\u0005\u013b\u0125",
    "\u0003\u0002\u0002\u0002\u013b\u0127\u0003\u0002\u0002\u0002\u013b\u0128",
    "\u0003\u0002\u0002\u0002\u013b\u012d\u0003\u0002\u0002\u0002\u013b\u0131",
    "\u0003\u0002\u0002\u0002\u013b\u0133\u0003\u0002\u0002\u0002\u013b\u0135",
    "\u0003\u0002\u0002\u0002\u013b\u0139\u0003\u0002\u0002\u0002\u013c\u015f",
    "\u0003\u0002\u0002\u0002\u013d\u013e\f\f\u0002\u0002\u013e\u013f\u0007",
    "+\u0002\u0002\u013f\u015e\u00054\u001b\r\u0140\u0141\f\n\u0002\u0002",
    "\u0141\u0142\u0007-\u0002\u0002\u0142\u015e\u00054\u001b\n\u0143\u0144",
    "\f\b\u0002\u0002\u0144\u0145\t\u0003\u0002\u0002\u0145\u015e\u00054",
    "\u001b\t\u0146\u0147\f\u0006\u0002\u0002\u0147\u0148\t\u0004\u0002\u0002",
    "\u0148\u015e\u00054\u001b\u0007\u0149\u014a\f\u0004\u0002\u0002\u014a",
    "\u014b\t\u0005\u0002\u0002\u014b\u015e\u00054\u001b\u0005\u014c\u014d",
    "\f\u0003\u0002\u0002\u014d\u014e\u0007>\u0002\u0002\u014e\u015e\u0005",
    "4\u001b\u0004\u014f\u0150\f\u000e\u0002\u0002\u0150\u0151\t\u0006\u0002",
    "\u0002\u0151\u0152\u0005:\u001e\u0002\u0152\u0153\u0007&\u0002\u0002",
    "\u0153\u0154\u0005<\u001f\u0002\u0154\u0155\u0007\'\u0002\u0002\u0155",
    "\u015e\u0003\u0002\u0002\u0002\u0156\u0157\f\r\u0002\u0002\u0157\u0158",
    "\u0007$\u0002\u0002\u0158\u0159\u0005> \u0002\u0159\u015a\u0007%\u0002",
    "\u0002\u015a\u015e\u0003\u0002\u0002\u0002\u015b\u015c\f\u000b\u0002",
    "\u0002\u015c\u015e\u0007,\u0002\u0002\u015d\u013d\u0003\u0002\u0002",
    "\u0002\u015d\u0140\u0003\u0002\u0002\u0002\u015d\u0143\u0003\u0002\u0002",
    "\u0002\u015d\u0146\u0003\u0002\u0002\u0002\u015d\u0149\u0003\u0002\u0002",
    "\u0002\u015d\u014c\u0003\u0002\u0002\u0002\u015d\u014f\u0003\u0002\u0002",
    "\u0002\u015d\u0156\u0003\u0002\u0002\u0002\u015d\u015b\u0003\u0002\u0002",
    "\u0002\u015e\u0161\u0003\u0002\u0002\u0002\u015f\u015d\u0003\u0002\u0002",
    "\u0002\u015f\u0160\u0003\u0002\u0002\u0002\u01605\u0003\u0002\u0002",
    "\u0002\u0161\u015f\u0003\u0002\u0002\u0002\u0162\u0163\u0007]\u0002",
    "\u0002\u01637\u0003\u0002\u0002\u0002\u0164\u0165\u0007]\u0002\u0002",
    "\u01659\u0003\u0002\u0002\u0002\u0166\u0167\u0007]\u0002\u0002\u0167",
    ";\u0003\u0002\u0002\u0002\u0168\u016d\u00054\u001b\u0002\u0169\u016a",
    "\u0007?\u0002\u0002\u016a\u016c\u00054\u001b\u0002\u016b\u0169\u0003",
    "\u0002\u0002\u0002\u016c\u016f\u0003\u0002\u0002\u0002\u016d\u016b\u0003",
    "\u0002\u0002\u0002\u016d\u016e\u0003\u0002\u0002\u0002\u016e\u0172\u0003",
    "\u0002\u0002\u0002\u016f\u016d\u0003\u0002\u0002\u0002\u0170\u0172\u0003",
    "\u0002\u0002\u0002\u0171\u0168\u0003\u0002\u0002\u0002\u0171\u0170\u0003",
    "\u0002\u0002\u0002\u0172=\u0003\u0002\u0002\u0002\u0173\u0178\u0005",
    "4\u001b\u0002\u0174\u0175\u0007?\u0002\u0002\u0175\u0177\u00054\u001b",
    "\u0002\u0176\u0174\u0003\u0002\u0002\u0002\u0177\u017a\u0003\u0002\u0002",
    "\u0002\u0178\u0176\u0003\u0002\u0002\u0002\u0178\u0179\u0003\u0002\u0002",
    "\u0002\u0179?\u0003\u0002\u0002\u0002\u017a\u0178\u0003\u0002\u0002",
    "\u0002\u017b\u017d\u0005B\"\u0002\u017c\u017e\u0005H%\u0002\u017d\u017c",
    "\u0003\u0002\u0002\u0002\u017d\u017e\u0003\u0002\u0002\u0002\u017eA",
    "\u0003\u0002\u0002\u0002\u017f\u0183\u0005T+\u0002\u0180\u0183\u0005",
    "D#\u0002\u0181\u0183\u0005P)\u0002\u0182\u017f\u0003\u0002\u0002\u0002",
    "\u0182\u0180\u0003\u0002\u0002\u0002\u0182\u0181\u0003\u0002\u0002\u0002",
    "\u0183C\u0003\u0002\u0002\u0002\u0184\u0185\u0007$\u0002\u0002\u0185",
    "\u0186\u0005F$\u0002\u0186\u0187\u0007%\u0002\u0002\u0187E\u0003\u0002",
    "\u0002\u0002\u0188\u018b\u0005J&\u0002\u0189\u018b\u0005L\'\u0002\u018a",
    "\u0188\u0003\u0002\u0002\u0002\u018a\u0189\u0003\u0002\u0002\u0002\u018b",
    "G\u0003\u0002\u0002\u0002\u018c\u018d\u0007&\u0002\u0002\u018d\u018e",
    "\u0005L\'\u0002\u018e\u018f\u0007\'\u0002\u0002\u018fI\u0003\u0002\u0002",
    "\u0002\u0190\u0195\u0005@!\u0002\u0191\u0192\u0007?\u0002\u0002\u0192",
    "\u0194\u0005@!\u0002\u0193\u0191\u0003\u0002\u0002\u0002\u0194\u0197",
    "\u0003\u0002\u0002\u0002\u0195\u0193\u0003\u0002\u0002\u0002\u0195\u0196",
    "\u0003\u0002\u0002\u0002\u0196\u01a3\u0003\u0002\u0002\u0002\u0197\u0195",
    "\u0003\u0002\u0002\u0002\u0198\u019e\u0007^\u0002\u0002\u0199\u019a",
    "\u0005@!\u0002\u019a\u019b\u0007^\u0002\u0002\u019b\u019d\u0003\u0002",
    "\u0002\u0002\u019c\u0199\u0003\u0002\u0002\u0002\u019d\u01a0\u0003\u0002",
    "\u0002\u0002\u019e\u019c\u0003\u0002\u0002\u0002\u019e\u019f\u0003\u0002",
    "\u0002\u0002\u019f\u01a3\u0003\u0002\u0002\u0002\u01a0\u019e\u0003\u0002",
    "\u0002\u0002\u01a1\u01a3\u0003\u0002\u0002\u0002\u01a2\u0190\u0003\u0002",
    "\u0002\u0002\u01a2\u0198\u0003\u0002\u0002\u0002\u01a2\u01a1\u0003\u0002",
    "\u0002\u0002\u01a3K\u0003\u0002\u0002\u0002\u01a4\u01a9\u0005N(\u0002",
    "\u01a5\u01a6\u0007?\u0002\u0002\u01a6\u01a8\u0005N(\u0002\u01a7\u01a5",
    "\u0003\u0002\u0002\u0002\u01a8\u01ab\u0003\u0002\u0002\u0002\u01a9\u01a7",
    "\u0003\u0002\u0002\u0002\u01a9\u01aa\u0003\u0002\u0002\u0002\u01aa\u01b7",
    "\u0003\u0002\u0002\u0002\u01ab\u01a9\u0003\u0002\u0002\u0002\u01ac\u01b2",
    "\u0007^\u0002\u0002\u01ad\u01ae\u0005N(\u0002\u01ae\u01af\u0007^\u0002",
    "\u0002\u01af\u01b1\u0003\u0002\u0002\u0002\u01b0\u01ad\u0003\u0002\u0002",
    "\u0002\u01b1\u01b4\u0003\u0002\u0002\u0002\u01b2\u01b0\u0003\u0002\u0002",
    "\u0002\u01b2\u01b3\u0003\u0002\u0002\u0002\u01b3\u01b7\u0003\u0002\u0002",
    "\u0002\u01b4\u01b2\u0003\u0002\u0002\u0002\u01b5\u01b7\u0007@\u0002",
    "\u0002\u01b6\u01a4\u0003\u0002\u0002\u0002\u01b6\u01ac\u0003\u0002\u0002",
    "\u0002\u01b6\u01b5\u0003\u0002\u0002\u0002\u01b7M\u0003\u0002\u0002",
    "\u0002\u01b8\u01b9\u0005T+\u0002\u01b9\u01ba\u0007@\u0002\u0002\u01ba",
    "\u01bb\u0005@!\u0002\u01bbO\u0003\u0002\u0002\u0002\u01bc\u01bd\u0007",
    "\u0006\u0002\u0002\u01bd\u01be\u0005R*\u0002\u01be\u01bf\u0007\u0007",
    "\u0002\u0002\u01bfQ\u0003\u0002\u0002\u0002\u01c0\u01c5\u0005\u0004",
    "\u0003\u0002\u01c1\u01c2\u0007A\u0002\u0002\u01c2\u01c4\u0005\u0004",
    "\u0003\u0002\u01c3\u01c1\u0003\u0002\u0002\u0002\u01c4\u01c7\u0003\u0002",
    "\u0002\u0002\u01c5\u01c3\u0003\u0002\u0002\u0002\u01c5\u01c6\u0003\u0002",
    "\u0002\u0002\u01c6\u01d3\u0003\u0002\u0002\u0002\u01c7\u01c5\u0003\u0002",
    "\u0002\u0002\u01c8\u01ce\u0007^\u0002\u0002\u01c9\u01ca\u0005\u0004",
    "\u0003\u0002\u01ca\u01cb\u0007^\u0002\u0002\u01cb\u01cd\u0003\u0002",
    "\u0002\u0002\u01cc\u01c9\u0003\u0002\u0002\u0002\u01cd\u01d0\u0003\u0002",
    "\u0002\u0002\u01ce\u01cc\u0003\u0002\u0002\u0002\u01ce\u01cf\u0003\u0002",
    "\u0002\u0002\u01cf\u01d3\u0003\u0002\u0002\u0002\u01d0\u01ce\u0003\u0002",
    "\u0002\u0002\u01d1\u01d3\u0003\u0002\u0002\u0002\u01d2\u01c0\u0003\u0002",
    "\u0002\u0002\u01d2\u01c8\u0003\u0002\u0002\u0002\u01d2\u01d1\u0003\u0002",
    "\u0002\u0002\u01d3S\u0003\u0002\u0002\u0002\u01d4\u01e4\u0005V,\u0002",
    "\u01d5\u01e4\u0005X-\u0002\u01d6\u01e4\u0005Z.\u0002\u01d7\u01e4\u0005",
    "\\/\u0002\u01d8\u01e4\u0005^0\u0002\u01d9\u01e4\u0005`1\u0002\u01da",
    "\u01e4\u0005b2\u0002\u01db\u01e4\u0005d3\u0002\u01dc\u01e4\u0005f4\u0002",
    "\u01dd\u01e4\u0005h5\u0002\u01de\u01e4\u0005j6\u0002\u01df\u01e4\u0005",
    "l7\u0002\u01e0\u01e4\u0005n8\u0002\u01e1\u01e4\u0005p9\u0002\u01e2\u01e4",
    "\u0005r:\u0002\u01e3\u01d4\u0003\u0002\u0002\u0002\u01e3\u01d5\u0003",
    "\u0002\u0002\u0002\u01e3\u01d6\u0003\u0002\u0002\u0002\u01e3\u01d7\u0003",
    "\u0002\u0002\u0002\u01e3\u01d8\u0003\u0002\u0002\u0002\u01e3\u01d9\u0003",
    "\u0002\u0002\u0002\u01e3\u01da\u0003\u0002\u0002\u0002\u01e3\u01db\u0003",
    "\u0002\u0002\u0002\u01e3\u01dc\u0003\u0002\u0002\u0002\u01e3\u01dd\u0003",
    "\u0002\u0002\u0002\u01e3\u01de\u0003\u0002\u0002\u0002\u01e3\u01df\u0003",
    "\u0002\u0002\u0002\u01e3\u01e0\u0003\u0002\u0002\u0002\u01e3\u01e1\u0003",
    "\u0002\u0002\u0002\u01e3\u01e2\u0003\u0002\u0002\u0002\u01e4U\u0003",
    "\u0002\u0002\u0002\u01e5\u01e6\u0007M\u0002\u0002\u01e6W\u0003\u0002",
    "\u0002\u0002\u01e7\u01e8\u0007N\u0002\u0002\u01e8Y\u0003\u0002\u0002",
    "\u0002\u01e9\u01ea\u0007O\u0002\u0002\u01ea[\u0003\u0002\u0002\u0002",
    "\u01eb\u01ec\u0007R\u0002\u0002\u01ec]\u0003\u0002\u0002\u0002\u01ed",
    "\u01ee\u0007S\u0002\u0002\u01ee_\u0003\u0002\u0002\u0002\u01ef\u0200",
    "\u0007B\u0002\u0002\u01f0\u0200\u0007C\u0002\u0002\u01f1\u0200\u0007",
    "D\u0002\u0002\u01f2\u0200\u0007E\u0002\u0002\u01f3\u0200\u0007V\u0002",
    "\u0002\u01f4\u0200\u0007Q\u0002\u0002\u01f5\u01f6\u0007&\u0002\u0002",
    "\u01f6\u01fc\u0007V\u0002\u0002\u01f7\u01f8\u0007?\u0002\u0002\u01f8",
    "\u01fd\u0007Q\u0002\u0002\u01f9\u01fa\u0007F\u0002\u0002\u01fa\u01fb",
    "\u0007M\u0002\u0002\u01fb\u01fd\u0007G\u0002\u0002\u01fc\u01f7\u0003",
    "\u0002\u0002\u0002\u01fc\u01f9\u0003\u0002\u0002\u0002\u01fd\u01fe\u0003",
    "\u0002\u0002\u0002\u01fe\u0200\u0007\'\u0002\u0002\u01ff\u01ef\u0003",
    "\u0002\u0002\u0002\u01ff\u01f0\u0003\u0002\u0002\u0002\u01ff\u01f1\u0003",
    "\u0002\u0002\u0002\u01ff\u01f2\u0003\u0002\u0002\u0002\u01ff\u01f3\u0003",
    "\u0002\u0002\u0002\u01ff\u01f4\u0003\u0002\u0002\u0002\u01ff\u01f5\u0003",
    "\u0002\u0002\u0002\u0200a\u0003\u0002\u0002\u0002\u0201\u0202\t\u0007",
    "\u0002\u0002\u0202c\u0003\u0002\u0002\u0002\u0203\u0204\u0007T\u0002",
    "\u0002\u0204e\u0003\u0002\u0002\u0002\u0205\u0206\t\b\u0002\u0002\u0206",
    "g\u0003\u0002\u0002\u0002\u0207\u0209\t\t\u0002\u0002\u0208\u0207\u0003",
    "\u0002\u0002\u0002\u0208\u0209\u0003\u0002\u0002\u0002\u0209\u020a\u0003",
    "\u0002\u0002\u0002\u020a\u020c\u0007L\u0002\u0002\u020b\u020d\t\t\u0002",
    "\u0002\u020c\u020b\u0003\u0002\u0002\u0002\u020c\u020d\u0003\u0002\u0002",
    "\u0002\u020di\u0003\u0002\u0002\u0002\u020e\u020f\u0007U\u0002\u0002",
    "\u020fk\u0003\u0002\u0002\u0002\u0210\u0211\u0007X\u0002\u0002\u0211",
    "m\u0003\u0002\u0002\u0002\u0212\u0213\u0007Y\u0002\u0002\u0213o\u0003",
    "\u0002\u0002\u0002\u0214\u0215\t\n\u0002\u0002\u0215q\u0003\u0002\u0002",
    "\u0002\u0216\u0217\u0007\\\u0002\u0002\u0217s\u0003\u0002\u0002\u0002",
    "(w~\u0085\u0099\u00a4\u00ad\u00b6\u00c0\u00e9\u00ee\u00f9\u00fd\u0104",
    "\u0117\u011e\u013b\u015d\u015f\u016d\u0171\u0178\u017d\u0182\u018a\u0195",
    "\u019e\u01a2\u01a9\u01b2\u01b6\u01c5\u01ce\u01d2\u01e3\u01fc\u01ff\u0208",
    "\u020c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'handle'", "'matching'", "'with'", "'{'", "'}'", 
                     "':='", "'checkout'", "'level'", "'of'", "'from'", 
                     "'save'", "'as'", "'discard'", "'commit'", "'to'", 
                     "'publish'", "'post'", "'retrieve'", "'reject'", "'accept'", 
                     "'if'", "'then'", "'else'", "'select'", "'do'", "'each'", 
                     "'in'", "'while'", "'continue'", "'loop'", "'break'", 
                     "'return'", "'throw'", "'['", "']'", "'('", "')'", 
                     "'@'", "'.'", "'<-'", "'&'", "'!'", "'^'", "'-'", "'*'", 
                     "'/'", "'//'", "'+'", "'|'", "'<'", "'='", "'>'", "'IS'", 
                     "'MATCHES'", "'NOT'", "'AND'", "'SANS'", "'XOR'", "'OR'", 
                     "'?'", "','", "':'", "';'", "'undefined'", "'0'", "'\u221E'", 
                     "'infinity'", "'e^'", "'i'", "'none'", "'any'", "'false'", 
                     "'true'", "'..'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, "ANGLE", "BINARY", "DURATION", "FRACTION", 
                      "IMAGINARY", "MOMENT", "NAME", "PERCENT", "RESOURCE", 
                      "REAL", "REGEX", "SYMBOL", "TAG", "TEXT_BLOCK", "TEXT", 
                      "VERSION", "IDENTIFIER", "EOL", "SPACE", "COMMENT_BLOCK", 
                      "COMMENT" ];

var ruleNames =  [ "document", "statement", "mainClause", "handleClause", 
                   "block", "evaluateClause", "checkoutClause", "saveClause", 
                   "discardClause", "commitClause", "publishClause", "postClause", 
                   "retrieveClause", "rejectClause", "acceptClause", "ifClause", 
                   "selectClause", "withClause", "whileClause", "continueClause", 
                   "breakClause", "returnClause", "throwClause", "recipient", 
                   "subcomponent", "expression", "variable", "funcxion", 
                   "message", "arguments", "indices", "component", "value", 
                   "sequence", "collection", "parameters", "list", "catalog", 
                   "association", "procedure", "statements", "element", 
                   "angle", "binary", "duration", "moment", "name", "number", 
                   "pattern", "percent", "probability", "range", "reference", 
                   "symbol", "tag", "text", "version" ];

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
DocumentParser.PERCENT = 82;
DocumentParser.RESOURCE = 83;
DocumentParser.REAL = 84;
DocumentParser.REGEX = 85;
DocumentParser.SYMBOL = 86;
DocumentParser.TAG = 87;
DocumentParser.TEXT_BLOCK = 88;
DocumentParser.TEXT = 89;
DocumentParser.VERSION = 90;
DocumentParser.IDENTIFIER = 91;
DocumentParser.EOL = 92;
DocumentParser.SPACE = 93;
DocumentParser.COMMENT_BLOCK = 94;
DocumentParser.COMMENT = 95;

DocumentParser.RULE_document = 0;
DocumentParser.RULE_statement = 1;
DocumentParser.RULE_mainClause = 2;
DocumentParser.RULE_handleClause = 3;
DocumentParser.RULE_block = 4;
DocumentParser.RULE_evaluateClause = 5;
DocumentParser.RULE_checkoutClause = 6;
DocumentParser.RULE_saveClause = 7;
DocumentParser.RULE_discardClause = 8;
DocumentParser.RULE_commitClause = 9;
DocumentParser.RULE_publishClause = 10;
DocumentParser.RULE_postClause = 11;
DocumentParser.RULE_retrieveClause = 12;
DocumentParser.RULE_rejectClause = 13;
DocumentParser.RULE_acceptClause = 14;
DocumentParser.RULE_ifClause = 15;
DocumentParser.RULE_selectClause = 16;
DocumentParser.RULE_withClause = 17;
DocumentParser.RULE_whileClause = 18;
DocumentParser.RULE_continueClause = 19;
DocumentParser.RULE_breakClause = 20;
DocumentParser.RULE_returnClause = 21;
DocumentParser.RULE_throwClause = 22;
DocumentParser.RULE_recipient = 23;
DocumentParser.RULE_subcomponent = 24;
DocumentParser.RULE_expression = 25;
DocumentParser.RULE_variable = 26;
DocumentParser.RULE_funcxion = 27;
DocumentParser.RULE_message = 28;
DocumentParser.RULE_arguments = 29;
DocumentParser.RULE_indices = 30;
DocumentParser.RULE_component = 31;
DocumentParser.RULE_value = 32;
DocumentParser.RULE_sequence = 33;
DocumentParser.RULE_collection = 34;
DocumentParser.RULE_parameters = 35;
DocumentParser.RULE_list = 36;
DocumentParser.RULE_catalog = 37;
DocumentParser.RULE_association = 38;
DocumentParser.RULE_procedure = 39;
DocumentParser.RULE_statements = 40;
DocumentParser.RULE_element = 41;
DocumentParser.RULE_angle = 42;
DocumentParser.RULE_binary = 43;
DocumentParser.RULE_duration = 44;
DocumentParser.RULE_moment = 45;
DocumentParser.RULE_name = 46;
DocumentParser.RULE_number = 47;
DocumentParser.RULE_pattern = 48;
DocumentParser.RULE_percent = 49;
DocumentParser.RULE_probability = 50;
DocumentParser.RULE_range = 51;
DocumentParser.RULE_reference = 52;
DocumentParser.RULE_symbol = 53;
DocumentParser.RULE_tag = 54;
DocumentParser.RULE_text = 55;
DocumentParser.RULE_version = 56;

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
        this.state = 117;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DocumentParser.EOL) {
            this.state = 114;
            this.match(DocumentParser.EOL);
            this.state = 119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 120;
        this.component();
        this.state = 124;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DocumentParser.EOL) {
            this.state = 121;
            this.match(DocumentParser.EOL);
            this.state = 126;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
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
    this.enterRule(localctx, 2, DocumentParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.mainClause();
        this.state = 131;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__0) {
            this.state = 130;
            this.handleClause();
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

MainClauseContext.prototype.postClause = function() {
    return this.getTypedRuleContext(PostClauseContext,0);
};

MainClauseContext.prototype.retrieveClause = function() {
    return this.getTypedRuleContext(RetrieveClauseContext,0);
};

MainClauseContext.prototype.rejectClause = function() {
    return this.getTypedRuleContext(RejectClauseContext,0);
};

MainClauseContext.prototype.acceptClause = function() {
    return this.getTypedRuleContext(AcceptClauseContext,0);
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
    this.enterRule(localctx, 4, DocumentParser.RULE_mainClause);
    try {
        this.state = 151;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__3:
        case DocumentParser.T__33:
        case DocumentParser.T__35:
        case DocumentParser.T__37:
        case DocumentParser.T__43:
        case DocumentParser.T__44:
        case DocumentParser.T__48:
        case DocumentParser.T__54:
        case DocumentParser.T__63:
        case DocumentParser.T__64:
        case DocumentParser.T__65:
        case DocumentParser.T__66:
        case DocumentParser.T__69:
        case DocumentParser.T__70:
        case DocumentParser.T__71:
        case DocumentParser.T__72:
        case DocumentParser.T__73:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENT:
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
            this.state = 133;
            this.evaluateClause();
            break;
        case DocumentParser.T__6:
            this.enterOuterAlt(localctx, 2);
            this.state = 134;
            this.checkoutClause();
            break;
        case DocumentParser.T__10:
            this.enterOuterAlt(localctx, 3);
            this.state = 135;
            this.saveClause();
            break;
        case DocumentParser.T__12:
            this.enterOuterAlt(localctx, 4);
            this.state = 136;
            this.discardClause();
            break;
        case DocumentParser.T__13:
            this.enterOuterAlt(localctx, 5);
            this.state = 137;
            this.commitClause();
            break;
        case DocumentParser.T__15:
            this.enterOuterAlt(localctx, 6);
            this.state = 138;
            this.publishClause();
            break;
        case DocumentParser.T__16:
            this.enterOuterAlt(localctx, 7);
            this.state = 139;
            this.postClause();
            break;
        case DocumentParser.T__17:
            this.enterOuterAlt(localctx, 8);
            this.state = 140;
            this.retrieveClause();
            break;
        case DocumentParser.T__18:
            this.enterOuterAlt(localctx, 9);
            this.state = 141;
            this.rejectClause();
            break;
        case DocumentParser.T__19:
            this.enterOuterAlt(localctx, 10);
            this.state = 142;
            this.acceptClause();
            break;
        case DocumentParser.T__20:
            this.enterOuterAlt(localctx, 11);
            this.state = 143;
            this.ifClause();
            break;
        case DocumentParser.T__23:
            this.enterOuterAlt(localctx, 12);
            this.state = 144;
            this.selectClause();
            break;
        case DocumentParser.T__2:
            this.enterOuterAlt(localctx, 13);
            this.state = 145;
            this.withClause();
            break;
        case DocumentParser.T__27:
            this.enterOuterAlt(localctx, 14);
            this.state = 146;
            this.whileClause();
            break;
        case DocumentParser.T__28:
            this.enterOuterAlt(localctx, 15);
            this.state = 147;
            this.continueClause();
            break;
        case DocumentParser.T__30:
            this.enterOuterAlt(localctx, 16);
            this.state = 148;
            this.breakClause();
            break;
        case DocumentParser.T__31:
            this.enterOuterAlt(localctx, 17);
            this.state = 149;
            this.returnClause();
            break;
        case DocumentParser.T__32:
            this.enterOuterAlt(localctx, 18);
            this.state = 150;
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
    this.enterRule(localctx, 6, DocumentParser.RULE_handleClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.match(DocumentParser.T__0);
        this.state = 154;
        this.symbol();
        this.state = 160; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 155;
            this.match(DocumentParser.T__1);
            this.state = 156;
            this.expression(0);
            this.state = 157;
            this.match(DocumentParser.T__2);
            this.state = 158;
            this.block();
            this.state = 162; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===DocumentParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.enterRule(localctx, 8, DocumentParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(DocumentParser.T__3);
        this.state = 165;
        this.statements();
        this.state = 166;
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
    this.enterRule(localctx, 10, DocumentParser.RULE_evaluateClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        if(la_===1) {
            this.state = 168;
            this.recipient();
            this.state = 169;
            this.match(DocumentParser.T__5);

        }
        this.state = 173;
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
    this.enterRule(localctx, 12, DocumentParser.RULE_checkoutClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.match(DocumentParser.T__6);
        this.state = 180;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__7) {
            this.state = 176;
            this.match(DocumentParser.T__7);
            this.state = 177;
            this.expression(0);
            this.state = 178;
            this.match(DocumentParser.T__8);
        }

        this.state = 182;
        this.recipient();
        this.state = 183;
        this.match(DocumentParser.T__9);
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
    this.enterRule(localctx, 14, DocumentParser.RULE_saveClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(DocumentParser.T__10);
        this.state = 187;
        this.expression(0);
        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__11) {
            this.state = 188;
            this.match(DocumentParser.T__11);
            this.state = 189;
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
    this.enterRule(localctx, 16, DocumentParser.RULE_discardClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this.match(DocumentParser.T__12);
        this.state = 193;
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
    this.enterRule(localctx, 18, DocumentParser.RULE_commitClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(DocumentParser.T__13);
        this.state = 196;
        this.expression(0);
        this.state = 197;
        this.match(DocumentParser.T__14);
        this.state = 198;
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
    this.enterRule(localctx, 20, DocumentParser.RULE_publishClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.match(DocumentParser.T__15);
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
    this.enterRule(localctx, 22, DocumentParser.RULE_postClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        this.match(DocumentParser.T__16);
        this.state = 204;
        this.expression(0);
        this.state = 205;
        this.match(DocumentParser.T__14);
        this.state = 206;
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
    this.enterRule(localctx, 24, DocumentParser.RULE_retrieveClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.match(DocumentParser.T__17);
        this.state = 209;
        this.recipient();
        this.state = 210;
        this.match(DocumentParser.T__9);
        this.state = 211;
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
    this.enterRule(localctx, 26, DocumentParser.RULE_rejectClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.match(DocumentParser.T__18);
        this.state = 214;
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
    this.enterRule(localctx, 28, DocumentParser.RULE_acceptClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this.match(DocumentParser.T__19);
        this.state = 217;
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
    this.enterRule(localctx, 30, DocumentParser.RULE_ifClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 219;
        this.match(DocumentParser.T__20);
        this.state = 220;
        this.expression(0);
        this.state = 221;
        this.match(DocumentParser.T__21);
        this.state = 222;
        this.block();
        this.state = 231;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 223;
                this.match(DocumentParser.T__22);
                this.state = 224;
                this.match(DocumentParser.T__20);
                this.state = 225;
                this.expression(0);
                this.state = 226;
                this.match(DocumentParser.T__21);
                this.state = 227;
                this.block(); 
            }
            this.state = 233;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

        this.state = 236;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__22) {
            this.state = 234;
            this.match(DocumentParser.T__22);
            this.state = 235;
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
    this.enterRule(localctx, 32, DocumentParser.RULE_selectClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this.match(DocumentParser.T__23);
        this.state = 239;
        this.expression(0);
        this.state = 240;
        this.match(DocumentParser.T__9);
        this.state = 245; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 241;
            this.expression(0);
            this.state = 242;
            this.match(DocumentParser.T__24);
            this.state = 243;
            this.block();
            this.state = 247; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===DocumentParser.T__3 || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (DocumentParser.T__33 - 34)) | (1 << (DocumentParser.T__35 - 34)) | (1 << (DocumentParser.T__37 - 34)) | (1 << (DocumentParser.T__43 - 34)) | (1 << (DocumentParser.T__44 - 34)) | (1 << (DocumentParser.T__48 - 34)) | (1 << (DocumentParser.T__54 - 34)) | (1 << (DocumentParser.T__63 - 34)) | (1 << (DocumentParser.T__64 - 34)))) !== 0) || ((((_la - 66)) & ~0x1f) == 0 && ((1 << (_la - 66)) & ((1 << (DocumentParser.T__65 - 66)) | (1 << (DocumentParser.T__66 - 66)) | (1 << (DocumentParser.T__69 - 66)) | (1 << (DocumentParser.T__70 - 66)) | (1 << (DocumentParser.T__71 - 66)) | (1 << (DocumentParser.T__72 - 66)) | (1 << (DocumentParser.T__73 - 66)) | (1 << (DocumentParser.ANGLE - 66)) | (1 << (DocumentParser.BINARY - 66)) | (1 << (DocumentParser.DURATION - 66)) | (1 << (DocumentParser.FRACTION - 66)) | (1 << (DocumentParser.IMAGINARY - 66)) | (1 << (DocumentParser.MOMENT - 66)) | (1 << (DocumentParser.NAME - 66)) | (1 << (DocumentParser.PERCENT - 66)) | (1 << (DocumentParser.RESOURCE - 66)) | (1 << (DocumentParser.REAL - 66)) | (1 << (DocumentParser.REGEX - 66)) | (1 << (DocumentParser.SYMBOL - 66)) | (1 << (DocumentParser.TAG - 66)) | (1 << (DocumentParser.TEXT_BLOCK - 66)) | (1 << (DocumentParser.TEXT - 66)) | (1 << (DocumentParser.VERSION - 66)) | (1 << (DocumentParser.IDENTIFIER - 66)))) !== 0));
        this.state = 251;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__22) {
            this.state = 249;
            this.match(DocumentParser.T__22);
            this.state = 250;
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
    this.enterRule(localctx, 34, DocumentParser.RULE_withClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.match(DocumentParser.T__2);
        this.state = 258;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__25) {
            this.state = 254;
            this.match(DocumentParser.T__25);
            this.state = 255;
            this.symbol();
            this.state = 256;
            this.match(DocumentParser.T__26);
        }

        this.state = 260;
        this.expression(0);
        this.state = 261;
        this.match(DocumentParser.T__24);
        this.state = 262;
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
    this.enterRule(localctx, 36, DocumentParser.RULE_whileClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this.match(DocumentParser.T__27);
        this.state = 265;
        this.expression(0);
        this.state = 266;
        this.match(DocumentParser.T__24);
        this.state = 267;
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
    this.enterRule(localctx, 38, DocumentParser.RULE_continueClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269;
        this.match(DocumentParser.T__28);
        this.state = 270;
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
    this.enterRule(localctx, 40, DocumentParser.RULE_breakClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 272;
        this.match(DocumentParser.T__30);
        this.state = 273;
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
    this.enterRule(localctx, 42, DocumentParser.RULE_returnClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 275;
        this.match(DocumentParser.T__31);
        this.state = 277;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__3 || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (DocumentParser.T__33 - 34)) | (1 << (DocumentParser.T__35 - 34)) | (1 << (DocumentParser.T__37 - 34)) | (1 << (DocumentParser.T__43 - 34)) | (1 << (DocumentParser.T__44 - 34)) | (1 << (DocumentParser.T__48 - 34)) | (1 << (DocumentParser.T__54 - 34)) | (1 << (DocumentParser.T__63 - 34)) | (1 << (DocumentParser.T__64 - 34)))) !== 0) || ((((_la - 66)) & ~0x1f) == 0 && ((1 << (_la - 66)) & ((1 << (DocumentParser.T__65 - 66)) | (1 << (DocumentParser.T__66 - 66)) | (1 << (DocumentParser.T__69 - 66)) | (1 << (DocumentParser.T__70 - 66)) | (1 << (DocumentParser.T__71 - 66)) | (1 << (DocumentParser.T__72 - 66)) | (1 << (DocumentParser.T__73 - 66)) | (1 << (DocumentParser.ANGLE - 66)) | (1 << (DocumentParser.BINARY - 66)) | (1 << (DocumentParser.DURATION - 66)) | (1 << (DocumentParser.FRACTION - 66)) | (1 << (DocumentParser.IMAGINARY - 66)) | (1 << (DocumentParser.MOMENT - 66)) | (1 << (DocumentParser.NAME - 66)) | (1 << (DocumentParser.PERCENT - 66)) | (1 << (DocumentParser.RESOURCE - 66)) | (1 << (DocumentParser.REAL - 66)) | (1 << (DocumentParser.REGEX - 66)) | (1 << (DocumentParser.SYMBOL - 66)) | (1 << (DocumentParser.TAG - 66)) | (1 << (DocumentParser.TEXT_BLOCK - 66)) | (1 << (DocumentParser.TEXT - 66)) | (1 << (DocumentParser.VERSION - 66)) | (1 << (DocumentParser.IDENTIFIER - 66)))) !== 0)) {
            this.state = 276;
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
    this.enterRule(localctx, 44, DocumentParser.RULE_throwClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        this.match(DocumentParser.T__32);
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
    this.enterRule(localctx, 46, DocumentParser.RULE_recipient);
    try {
        this.state = 284;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.SYMBOL:
            this.enterOuterAlt(localctx, 1);
            this.state = 282;
            this.symbol();
            break;
        case DocumentParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 283;
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
    this.enterRule(localctx, 48, DocumentParser.RULE_subcomponent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this.variable();
        this.state = 287;
        this.match(DocumentParser.T__33);
        this.state = 288;
        this.indices();
        this.state = 289;
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
    var _startState = 50;
    this.enterRecursionRule(localctx, 50, DocumentParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 313;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ComponentExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 292;
            this.component();
            break;

        case 2:
            localctx = new VariableExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 293;
            this.variable();
            break;

        case 3:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 294;
            this.funcxion();
            this.state = 295;
            this.match(DocumentParser.T__35);
            this.state = 296;
            this.arguments();
            this.state = 297;
            this.match(DocumentParser.T__36);
            break;

        case 4:
            localctx = new PrecedenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 299;
            this.match(DocumentParser.T__35);
            this.state = 300;
            this.expression(0);
            this.state = 301;
            this.match(DocumentParser.T__36);
            break;

        case 5:
            localctx = new DereferenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 303;
            this.match(DocumentParser.T__37);
            this.state = 304;
            this.expression(13);
            break;

        case 6:
            localctx = new InversionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 305;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===DocumentParser.T__43 || _la===DocumentParser.T__44)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 306;
            this.expression(7);
            break;

        case 7:
            localctx = new MagnitudeExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 307;
            this.match(DocumentParser.T__48);
            this.state = 308;
            this.expression(0);
            this.state = 309;
            this.match(DocumentParser.T__48);
            break;

        case 8:
            localctx = new ComplementExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 311;
            this.match(DocumentParser.T__54);
            this.state = 312;
            this.expression(3);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 349;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 347;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ConcatenationExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 315;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 316;
                    this.match(DocumentParser.T__40);
                    this.state = 317;
                    this.expression(11);
                    break;

                case 2:
                    localctx = new ExponentialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 318;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 319;
                    this.match(DocumentParser.T__42);
                    this.state = 320;
                    this.expression(8);
                    break;

                case 3:
                    localctx = new ArithmeticExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 321;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 322;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (DocumentParser.T__43 - 44)) | (1 << (DocumentParser.T__44 - 44)) | (1 << (DocumentParser.T__45 - 44)) | (1 << (DocumentParser.T__46 - 44)) | (1 << (DocumentParser.T__47 - 44)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 323;
                    this.expression(7);
                    break;

                case 4:
                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 324;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 325;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 50)) & ~0x1f) == 0 && ((1 << (_la - 50)) & ((1 << (DocumentParser.T__49 - 50)) | (1 << (DocumentParser.T__50 - 50)) | (1 << (DocumentParser.T__51 - 50)) | (1 << (DocumentParser.T__52 - 50)) | (1 << (DocumentParser.T__53 - 50)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 326;
                    this.expression(5);
                    break;

                case 5:
                    localctx = new LogicalExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 327;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 328;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (DocumentParser.T__55 - 56)) | (1 << (DocumentParser.T__56 - 56)) | (1 << (DocumentParser.T__57 - 56)) | (1 << (DocumentParser.T__58 - 56)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 329;
                    this.expression(3);
                    break;

                case 6:
                    localctx = new DefaultExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 330;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 331;
                    this.match(DocumentParser.T__59);
                    this.state = 332;
                    this.expression(2);
                    break;

                case 7:
                    localctx = new MessageExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 333;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 334;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===DocumentParser.T__38 || _la===DocumentParser.T__39)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 335;
                    this.message();
                    this.state = 336;
                    this.match(DocumentParser.T__35);
                    this.state = 337;
                    this.arguments();
                    this.state = 338;
                    this.match(DocumentParser.T__36);
                    break;

                case 8:
                    localctx = new SubcomponentExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 340;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 341;
                    this.match(DocumentParser.T__33);
                    this.state = 342;
                    this.indices();
                    this.state = 343;
                    this.match(DocumentParser.T__34);
                    break;

                case 9:
                    localctx = new FactorialExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, DocumentParser.RULE_expression);
                    this.state = 345;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 346;
                    this.match(DocumentParser.T__41);
                    break;

                } 
            }
            this.state = 351;
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
    this.enterRule(localctx, 52, DocumentParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
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
    this.enterRule(localctx, 54, DocumentParser.RULE_funcxion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 354;
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
    this.enterRule(localctx, 56, DocumentParser.RULE_message);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 356;
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
    this.enterRule(localctx, 58, DocumentParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.state = 367;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__3:
        case DocumentParser.T__33:
        case DocumentParser.T__35:
        case DocumentParser.T__37:
        case DocumentParser.T__43:
        case DocumentParser.T__44:
        case DocumentParser.T__48:
        case DocumentParser.T__54:
        case DocumentParser.T__63:
        case DocumentParser.T__64:
        case DocumentParser.T__65:
        case DocumentParser.T__66:
        case DocumentParser.T__69:
        case DocumentParser.T__70:
        case DocumentParser.T__71:
        case DocumentParser.T__72:
        case DocumentParser.T__73:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENT:
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
            this.state = 358;
            this.expression(0);
            this.state = 363;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===DocumentParser.T__60) {
                this.state = 359;
                this.match(DocumentParser.T__60);
                this.state = 360;
                this.expression(0);
                this.state = 365;
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
    this.enterRule(localctx, 60, DocumentParser.RULE_indices);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 369;
        this.expression(0);
        this.state = 374;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DocumentParser.T__60) {
            this.state = 370;
            this.match(DocumentParser.T__60);
            this.state = 371;
            this.expression(0);
            this.state = 376;
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
    this.enterRule(localctx, 62, DocumentParser.RULE_component);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 377;
        this.value();
        this.state = 379;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        if(la_===1) {
            this.state = 378;
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
    this.enterRule(localctx, 64, DocumentParser.RULE_value);
    try {
        this.state = 384;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__35:
        case DocumentParser.T__63:
        case DocumentParser.T__64:
        case DocumentParser.T__65:
        case DocumentParser.T__66:
        case DocumentParser.T__69:
        case DocumentParser.T__70:
        case DocumentParser.T__71:
        case DocumentParser.T__72:
        case DocumentParser.T__73:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENT:
        case DocumentParser.RESOURCE:
        case DocumentParser.REAL:
        case DocumentParser.REGEX:
        case DocumentParser.SYMBOL:
        case DocumentParser.TAG:
        case DocumentParser.TEXT_BLOCK:
        case DocumentParser.TEXT:
        case DocumentParser.VERSION:
            this.enterOuterAlt(localctx, 1);
            this.state = 381;
            this.element();
            break;
        case DocumentParser.T__33:
            this.enterOuterAlt(localctx, 2);
            this.state = 382;
            this.sequence();
            break;
        case DocumentParser.T__3:
            this.enterOuterAlt(localctx, 3);
            this.state = 383;
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
    this.enterRule(localctx, 66, DocumentParser.RULE_sequence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 386;
        this.match(DocumentParser.T__33);
        this.state = 387;
        this.collection();
        this.state = 388;
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
    this.enterRule(localctx, 68, DocumentParser.RULE_collection);
    try {
        this.state = 392;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 390;
            this.list();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 391;
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
    this.enterRule(localctx, 70, DocumentParser.RULE_parameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 394;
        this.match(DocumentParser.T__35);
        this.state = 395;
        this.catalog();
        this.state = 396;
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
    this.enterRule(localctx, 72, DocumentParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.state = 416;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__3:
        case DocumentParser.T__33:
        case DocumentParser.T__35:
        case DocumentParser.T__63:
        case DocumentParser.T__64:
        case DocumentParser.T__65:
        case DocumentParser.T__66:
        case DocumentParser.T__69:
        case DocumentParser.T__70:
        case DocumentParser.T__71:
        case DocumentParser.T__72:
        case DocumentParser.T__73:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENT:
        case DocumentParser.RESOURCE:
        case DocumentParser.REAL:
        case DocumentParser.REGEX:
        case DocumentParser.SYMBOL:
        case DocumentParser.TAG:
        case DocumentParser.TEXT_BLOCK:
        case DocumentParser.TEXT:
        case DocumentParser.VERSION:
            this.enterOuterAlt(localctx, 1);
            this.state = 398;
            this.component();
            this.state = 403;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===DocumentParser.T__60) {
                this.state = 399;
                this.match(DocumentParser.T__60);
                this.state = 400;
                this.component();
                this.state = 405;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.EOL:
            this.enterOuterAlt(localctx, 2);
            this.state = 406;
            this.match(DocumentParser.EOL);
            this.state = 412;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===DocumentParser.T__3 || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (DocumentParser.T__33 - 34)) | (1 << (DocumentParser.T__35 - 34)) | (1 << (DocumentParser.T__63 - 34)) | (1 << (DocumentParser.T__64 - 34)))) !== 0) || ((((_la - 66)) & ~0x1f) == 0 && ((1 << (_la - 66)) & ((1 << (DocumentParser.T__65 - 66)) | (1 << (DocumentParser.T__66 - 66)) | (1 << (DocumentParser.T__69 - 66)) | (1 << (DocumentParser.T__70 - 66)) | (1 << (DocumentParser.T__71 - 66)) | (1 << (DocumentParser.T__72 - 66)) | (1 << (DocumentParser.T__73 - 66)) | (1 << (DocumentParser.ANGLE - 66)) | (1 << (DocumentParser.BINARY - 66)) | (1 << (DocumentParser.DURATION - 66)) | (1 << (DocumentParser.FRACTION - 66)) | (1 << (DocumentParser.IMAGINARY - 66)) | (1 << (DocumentParser.MOMENT - 66)) | (1 << (DocumentParser.NAME - 66)) | (1 << (DocumentParser.PERCENT - 66)) | (1 << (DocumentParser.RESOURCE - 66)) | (1 << (DocumentParser.REAL - 66)) | (1 << (DocumentParser.REGEX - 66)) | (1 << (DocumentParser.SYMBOL - 66)) | (1 << (DocumentParser.TAG - 66)) | (1 << (DocumentParser.TEXT_BLOCK - 66)) | (1 << (DocumentParser.TEXT - 66)) | (1 << (DocumentParser.VERSION - 66)))) !== 0)) {
                this.state = 407;
                this.component();
                this.state = 408;
                this.match(DocumentParser.EOL);
                this.state = 414;
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
    this.enterRule(localctx, 74, DocumentParser.RULE_catalog);
    var _la = 0; // Token type
    try {
        this.state = 436;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__35:
        case DocumentParser.T__63:
        case DocumentParser.T__64:
        case DocumentParser.T__65:
        case DocumentParser.T__66:
        case DocumentParser.T__69:
        case DocumentParser.T__70:
        case DocumentParser.T__71:
        case DocumentParser.T__72:
        case DocumentParser.T__73:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENT:
        case DocumentParser.RESOURCE:
        case DocumentParser.REAL:
        case DocumentParser.REGEX:
        case DocumentParser.SYMBOL:
        case DocumentParser.TAG:
        case DocumentParser.TEXT_BLOCK:
        case DocumentParser.TEXT:
        case DocumentParser.VERSION:
            this.enterOuterAlt(localctx, 1);
            this.state = 418;
            this.association();
            this.state = 423;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===DocumentParser.T__60) {
                this.state = 419;
                this.match(DocumentParser.T__60);
                this.state = 420;
                this.association();
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
            while(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (DocumentParser.T__35 - 36)) | (1 << (DocumentParser.T__63 - 36)) | (1 << (DocumentParser.T__64 - 36)) | (1 << (DocumentParser.T__65 - 36)) | (1 << (DocumentParser.T__66 - 36)))) !== 0) || ((((_la - 70)) & ~0x1f) == 0 && ((1 << (_la - 70)) & ((1 << (DocumentParser.T__69 - 70)) | (1 << (DocumentParser.T__70 - 70)) | (1 << (DocumentParser.T__71 - 70)) | (1 << (DocumentParser.T__72 - 70)) | (1 << (DocumentParser.T__73 - 70)) | (1 << (DocumentParser.ANGLE - 70)) | (1 << (DocumentParser.BINARY - 70)) | (1 << (DocumentParser.DURATION - 70)) | (1 << (DocumentParser.FRACTION - 70)) | (1 << (DocumentParser.IMAGINARY - 70)) | (1 << (DocumentParser.MOMENT - 70)) | (1 << (DocumentParser.NAME - 70)) | (1 << (DocumentParser.PERCENT - 70)) | (1 << (DocumentParser.RESOURCE - 70)) | (1 << (DocumentParser.REAL - 70)) | (1 << (DocumentParser.REGEX - 70)) | (1 << (DocumentParser.SYMBOL - 70)) | (1 << (DocumentParser.TAG - 70)) | (1 << (DocumentParser.TEXT_BLOCK - 70)) | (1 << (DocumentParser.TEXT - 70)) | (1 << (DocumentParser.VERSION - 70)))) !== 0)) {
                this.state = 427;
                this.association();
                this.state = 428;
                this.match(DocumentParser.EOL);
                this.state = 434;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.T__61:
            this.enterOuterAlt(localctx, 3);
            this.state = 435;
            this.match(DocumentParser.T__61);
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
    this.enterRule(localctx, 76, DocumentParser.RULE_association);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 438;
        this.element();
        this.state = 439;
        this.match(DocumentParser.T__61);
        this.state = 440;
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
    this.enterRule(localctx, 78, DocumentParser.RULE_procedure);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 442;
        this.match(DocumentParser.T__3);
        this.state = 443;
        this.statements();
        this.state = 444;
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
    this.enterRule(localctx, 80, DocumentParser.RULE_statements);
    var _la = 0; // Token type
    try {
        this.state = 464;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__2:
        case DocumentParser.T__3:
        case DocumentParser.T__6:
        case DocumentParser.T__10:
        case DocumentParser.T__12:
        case DocumentParser.T__13:
        case DocumentParser.T__15:
        case DocumentParser.T__16:
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
        case DocumentParser.T__48:
        case DocumentParser.T__54:
        case DocumentParser.T__63:
        case DocumentParser.T__64:
        case DocumentParser.T__65:
        case DocumentParser.T__66:
        case DocumentParser.T__69:
        case DocumentParser.T__70:
        case DocumentParser.T__71:
        case DocumentParser.T__72:
        case DocumentParser.T__73:
        case DocumentParser.ANGLE:
        case DocumentParser.BINARY:
        case DocumentParser.DURATION:
        case DocumentParser.FRACTION:
        case DocumentParser.IMAGINARY:
        case DocumentParser.MOMENT:
        case DocumentParser.NAME:
        case DocumentParser.PERCENT:
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
            this.state = 446;
            this.statement();
            this.state = 451;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===DocumentParser.T__62) {
                this.state = 447;
                this.match(DocumentParser.T__62);
                this.state = 448;
                this.statement();
                this.state = 453;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case DocumentParser.EOL:
            this.enterOuterAlt(localctx, 2);
            this.state = 454;
            this.match(DocumentParser.EOL);
            this.state = 460;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DocumentParser.T__2) | (1 << DocumentParser.T__3) | (1 << DocumentParser.T__6) | (1 << DocumentParser.T__10) | (1 << DocumentParser.T__12) | (1 << DocumentParser.T__13) | (1 << DocumentParser.T__15) | (1 << DocumentParser.T__16) | (1 << DocumentParser.T__17) | (1 << DocumentParser.T__18) | (1 << DocumentParser.T__19) | (1 << DocumentParser.T__20) | (1 << DocumentParser.T__23) | (1 << DocumentParser.T__27) | (1 << DocumentParser.T__28) | (1 << DocumentParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (DocumentParser.T__31 - 32)) | (1 << (DocumentParser.T__32 - 32)) | (1 << (DocumentParser.T__33 - 32)) | (1 << (DocumentParser.T__35 - 32)) | (1 << (DocumentParser.T__37 - 32)) | (1 << (DocumentParser.T__43 - 32)) | (1 << (DocumentParser.T__44 - 32)) | (1 << (DocumentParser.T__48 - 32)) | (1 << (DocumentParser.T__54 - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (DocumentParser.T__63 - 64)) | (1 << (DocumentParser.T__64 - 64)) | (1 << (DocumentParser.T__65 - 64)) | (1 << (DocumentParser.T__66 - 64)) | (1 << (DocumentParser.T__69 - 64)) | (1 << (DocumentParser.T__70 - 64)) | (1 << (DocumentParser.T__71 - 64)) | (1 << (DocumentParser.T__72 - 64)) | (1 << (DocumentParser.T__73 - 64)) | (1 << (DocumentParser.ANGLE - 64)) | (1 << (DocumentParser.BINARY - 64)) | (1 << (DocumentParser.DURATION - 64)) | (1 << (DocumentParser.FRACTION - 64)) | (1 << (DocumentParser.IMAGINARY - 64)) | (1 << (DocumentParser.MOMENT - 64)) | (1 << (DocumentParser.NAME - 64)) | (1 << (DocumentParser.PERCENT - 64)) | (1 << (DocumentParser.RESOURCE - 64)) | (1 << (DocumentParser.REAL - 64)) | (1 << (DocumentParser.REGEX - 64)) | (1 << (DocumentParser.SYMBOL - 64)) | (1 << (DocumentParser.TAG - 64)) | (1 << (DocumentParser.TEXT_BLOCK - 64)) | (1 << (DocumentParser.TEXT - 64)) | (1 << (DocumentParser.VERSION - 64)) | (1 << (DocumentParser.IDENTIFIER - 64)))) !== 0)) {
                this.state = 455;
                this.statement();
                this.state = 456;
                this.match(DocumentParser.EOL);
                this.state = 462;
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

ElementContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
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
        this.state = 481;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 466;
            this.angle();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 467;
            this.binary();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 468;
            this.duration();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 469;
            this.moment();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 470;
            this.name();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 471;
            this.number();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 472;
            this.pattern();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 473;
            this.percent();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 474;
            this.probability();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 475;
            this.range();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 476;
            this.reference();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 477;
            this.symbol();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 478;
            this.tag();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 479;
            this.text();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 480;
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
    this.enterRule(localctx, 84, DocumentParser.RULE_angle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 483;
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
        this.state = 485;
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
        this.state = 487;
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
    this.enterRule(localctx, 90, DocumentParser.RULE_moment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 489;
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
    this.enterRule(localctx, 92, DocumentParser.RULE_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 491;
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
    this.enterRule(localctx, 94, DocumentParser.RULE_number);
    try {
        this.state = 509;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DocumentParser.T__63:
            this.enterOuterAlt(localctx, 1);
            this.state = 493;
            this.match(DocumentParser.T__63);
            break;
        case DocumentParser.T__64:
            this.enterOuterAlt(localctx, 2);
            this.state = 494;
            this.match(DocumentParser.T__64);
            break;
        case DocumentParser.T__65:
            this.enterOuterAlt(localctx, 3);
            this.state = 495;
            this.match(DocumentParser.T__65);
            break;
        case DocumentParser.T__66:
            this.enterOuterAlt(localctx, 4);
            this.state = 496;
            this.match(DocumentParser.T__66);
            break;
        case DocumentParser.REAL:
            this.enterOuterAlt(localctx, 5);
            this.state = 497;
            this.match(DocumentParser.REAL);
            break;
        case DocumentParser.IMAGINARY:
            this.enterOuterAlt(localctx, 6);
            this.state = 498;
            this.match(DocumentParser.IMAGINARY);
            break;
        case DocumentParser.T__35:
            this.enterOuterAlt(localctx, 7);
            this.state = 499;
            this.match(DocumentParser.T__35);
            this.state = 500;
            this.match(DocumentParser.REAL);
            this.state = 506;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case DocumentParser.T__60:
                this.state = 501;
                this.match(DocumentParser.T__60);
                this.state = 502;
                this.match(DocumentParser.IMAGINARY);
                break;
            case DocumentParser.T__67:
                this.state = 503;
                this.match(DocumentParser.T__67);
                this.state = 504;
                this.match(DocumentParser.ANGLE);
                this.state = 505;
                this.match(DocumentParser.T__68);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 508;
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
    this.enterRule(localctx, 96, DocumentParser.RULE_pattern);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 511;
        _la = this._input.LA(1);
        if(!(((((_la - 70)) & ~0x1f) == 0 && ((1 << (_la - 70)) & ((1 << (DocumentParser.T__69 - 70)) | (1 << (DocumentParser.T__70 - 70)) | (1 << (DocumentParser.REGEX - 70)))) !== 0))) {
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
    this.enterRule(localctx, 98, DocumentParser.RULE_percent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 513;
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
    this.enterRule(localctx, 100, DocumentParser.RULE_probability);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 515;
        _la = this._input.LA(1);
        if(!(((((_la - 72)) & ~0x1f) == 0 && ((1 << (_la - 72)) & ((1 << (DocumentParser.T__71 - 72)) | (1 << (DocumentParser.T__72 - 72)) | (1 << (DocumentParser.FRACTION - 72)))) !== 0))) {
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

RangeContext.prototype.REAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DocumentParser.REAL);
    } else {
        return this.getToken(DocumentParser.REAL, i);
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
    this.enterRule(localctx, 102, DocumentParser.RULE_range);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 518;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DocumentParser.T__64 || _la===DocumentParser.REAL) {
            this.state = 517;
            _la = this._input.LA(1);
            if(!(_la===DocumentParser.T__64 || _la===DocumentParser.REAL)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 520;
        this.match(DocumentParser.T__73);
        this.state = 522;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        if(la_===1) {
            this.state = 521;
            _la = this._input.LA(1);
            if(!(_la===DocumentParser.T__64 || _la===DocumentParser.REAL)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }

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
    this.enterRule(localctx, 104, DocumentParser.RULE_reference);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 524;
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
    this.enterRule(localctx, 106, DocumentParser.RULE_symbol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 526;
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
    this.enterRule(localctx, 108, DocumentParser.RULE_tag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 528;
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
    this.enterRule(localctx, 110, DocumentParser.RULE_text);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 530;
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
    this.enterRule(localctx, 112, DocumentParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 532;
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
	case 25:
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
