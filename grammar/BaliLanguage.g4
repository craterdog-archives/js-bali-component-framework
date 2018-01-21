grammar BaliLanguage;


// Documents

document: NEWLINE* literal NEWLINE* EOF;

literal: (element | structure | block);

structure: '[' composite ']' parameters?;

parameters: '(' composite ')';

composite: range | array | table;

range: expression '..' expression;

array:
    expression (',' expression)* #inlineArray |
    NEWLINE (expression NEWLINE)* #newlineArray |
    /*empty array*/ #emptyArray
;

table:
    association (',' association)* #inlineTable |
    NEWLINE (association NEWLINE)* #newlineTable |
    ':' /*empty table*/ #emptyTable
;

association: element ':' expression;

task: SHELL NEWLINE* procedure NEWLINE* EOF;

block: '{' procedure '}' parameters?;

procedure:
    statement (';' statement)*    #inlineProcedure  |
    NEWLINE (statement NEWLINE)*  #newlineProcedure |
    /*empty procedure*/ #emptyProcedure
;


// Statements

statement: (
    evaluateClause |
    checkoutClause |
    saveClause |
    discardClause |
    commitClause |
    publishClause |
    queueClause |
    waitClause |
    ifClause |
    selectClause |
    whileClause |
    withClause |
    continueClause |
    breakClause |
    returnClause |
    throwClause
) handleClause* finishClause?;

handleClause: 'handle' symbol 'matching' expression 'with' block;

finishClause: 'finish' 'with' block;

evaluateClause: ((symbol | component) ':=')? expression;

checkoutClause: 'checkout' symbol 'from' expression;

saveClause: 'save' expression 'to' expression;

discardClause: 'discard' expression;

commitClause: 'commit' expression 'to' expression;

publishClause: 'publish' expression;

queueClause: 'queue' expression 'on' expression;

waitClause: 'wait' 'for' symbol 'from' expression;

ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?;

selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?;

whileClause: (label ':')? 'while' expression 'do' block;

withClause: (label ':')? 'with' ('each' symbol 'in')? expression 'do' block;

continueClause: 'continue' ('to' label)?;

breakClause: 'break' ('from' label)?;

returnClause: 'return' expression?;

throwClause: 'throw' expression;

component: variable indices;

label: IDENTIFIER;

variable: IDENTIFIER;

indices: '[' array ']';


// Expressions

expression:                  // Precedence (highest to lowest)
    literal                                                        #literalExpression      |
    variable                                                       #variableExpression     |
    invocation                                                     #functionExpression     |
    '(' expression ')'                                             #precedenceExpression   |
    '@' expression                                                 #dereferenceExpression  |
    expression '.' invocation                                      #messageExpression      |
    expression indices                                             #componentExpression    |
    expression '!'                                                 #factorialExpression    |
    <assoc=right> expression '^' expression                        #exponentialExpression  |
    op=('-' | '/' | '*') expression                                #inversionExpression    |
    expression op=('*' | '/' | '//' | '+' | '-') expression        #arithmeticExpression   |
    '|' expression '|'                                             #magnitudeExpression    |
    expression op=('<' | '=' | '>' | 'is' | 'matches') expression  #comparisonExpression   |
    'not' expression                                               #complementExpression   |
    expression op=('and' | 'sans' | 'xor' | 'or') expression       #logicalExpression      |
    expression '?' expression                                      #defaultExpression
;

invocation: name parameters;

name: IDENTIFIER;


// Elements

element: (
    binary |
    duration |
    moment |
    number |
    percent |
    probability |
    reference |
    symbol |
    tag |
    text |
    type |
    version
) parameters?;

binary: BINARY;

duration: DURATION;

imaginary: (real | sign='-')? 'i';

moment: MOMENT;

number:
    'undefined'                              #undefinedNumber |
    'infinity'                               #infiniteNumber  |
    real                                     #realNumber      |
    imaginary                                #imaginaryNumber |
    '(' real del=(',' | 'e^') imaginary ')'  #complexNumber
;

percent: real '%';

probability:
    'true'    #trueProbability       |
    'false'   #falseProbability      |
    FRACTION  #fractionalProbability
;

real:
    sign='-'? CONSTANT  #constantReal |
    FLOAT               #variableReal
;

reference: RESOURCE;

symbol: SYMBOL;

tag: TAG;

text:
    TEXT        #inlineText |
    TEXT_BLOCK  #newlineText
;

type:
    'none'  #noneType |
    'any'   #anyType
;

version: VERSION;


// Tokens

/* TOKEN RULES
 It's important to remember that tokens are recognized by the
 lexer in the order declared. The longest first matching token
 is returned regardless of how many others might match. Also,
 prefix any tokens that are just used as subtokens with the
 "fragment" keyword.
*/

SHELL: '^#!' LINE;

COMMENT: ('--' LINE) -> channel(HIDDEN);

COMMENT_BLOCK: ('/*' CHARACTER*? '*/') -> channel(HIDDEN);

TAG: '#' BASE32*;

SYMBOL: '$' IDENTIFIER;

FRACTION: '.' ('0'..'9')* '1'..'9';

CONSTANT: 'e' | 'pi' | 'phi';

FLOAT: INTEGER FRACTION? ('E' INTEGER)?;

MOMENT: '<' YEARS ('-' MONTHS ('-' DAYS ('T' HOURS (':' MINUTES (':' SECONDS FRACTION?)?)?)?)?)? '>';

DURATION:
    '~P' SPAN 'W' |
    '~P' (SPAN 'Y')? (SPAN 'M')? (SPAN 'D')? ('T' (SPAN 'H')? (SPAN 'M')? (SPAN 'S')?)?
; 

RESOURCE: '<' SCHEME ':' CONTEXT '>';

// a version like v123 takes precedence over an identifier
VERSION: 'v' NATURAL ('.' NATURAL)*;

BINARY: '\'' (BASE64 | SPACE)* ('=' ('=')?)? SPACE* '\'';

// a text block takes precedence over a regular text string
TEXT_BLOCK: '"' NEWLINE CHARACTER*? NEWLINE '"';

TEXT: '"' (ESCAPE | CHARACTER)*? '"';

IDENTIFIER: ('a'..'z'|'A'..'Z') ('a'..'z'|'A'..'Z'|'0'..'9')*;

NEWLINE: '\r'? '\n';

SPACE: ('\t'..'\r' | ' ') -> channel(HIDDEN);

fragment
LINE: CHARACTER*? NEWLINE;

fragment
CHARACTER: .;

fragment
NATURAL: '1'..'9' ('0'..'9')*;

fragment
INTEGER: '0' | '-'? NATURAL;

fragment
SPAN: NATURAL FRACTION?;

fragment
SCHEME: ('a'..'z'|'A'..'Z') ('a'..'z'|'A'..'Z'|'0'..'9'|'+'|'-'|'.')*;

fragment
CONTEXT: ('!'..'=' | '?'..'~')*;

fragment
YEARS: INTEGER;

fragment
MONTHS: (('0' '0'..'9') | ('1' '0'..'2'));

fragment
DAYS: (('0'..'2' '0'..'9') | ('3' '0'..'1'));

fragment
HOURS: (('0'..'1' '0'..'9') | ('2' '0'..'3'));

fragment
MINUTES: ('0'..'5' '0'..'9');

// must include 60 to handle leap seconds
fragment
SECONDS: (('0'..'5' '0'..'9') | '60');

fragment
BASE16: '0'..'9' | 'A'..'F';

// avoid confusion and offensive strings by eliminating 'E', 'I', 'O', and 'U'
fragment
BASE32: '0'..'9' | 'A'..'D' | 'F'..'H' | 'J'..'N' | 'P'..'T' | 'V'..'Z';

fragment
BASE64: '0'..'9' | 'A'..'Z' | 'a'..'z' | '+' | '/';

// replace with actual characters when read
fragment
ESCAPE: '\\' ('u' BASE16+ | 'b' | 'f' | 'r' | 'n' | 't' | '"' | '\\');

