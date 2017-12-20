grammar BaliTokens;


/* TOKEN RULES
 It's important to remember that tokens are recognized by the
 lexer in the order declared. The longest first matching token
 is returned regardless of how many others might match. Also,
 prefix any tokens that are just used as subtokens with the
 "fragment" keyword.
*/

SHELL: '^#!' LINE ;

COMMENT: ('--' LINE) -> channel(HIDDEN) ;

COMMENT_BLOCK: ('/*' CHARACTER*? '*/') -> channel(HIDDEN) ;

TAG: '#' BASE32* ;

SYMBOL: '$' IDENTIFIER ;

FRACTION: '.' ('0'..'9')* '1'..'9' ;

FLOAT: INTEGER FRACTION? ('E' INTEGER)? ;

MOMENT: '<' YEARS '>' ;

RESOURCE: '<' SCHEME ':' CONTEXT '>' ;

// a version like v123 takes precedence over an identifier
VERSION: 'v' NATURAL ('.' NATURAL)* ;

BINARY: '\'' (BASE64 | SPACE)* ('=' ('=')?)? SPACE* '\'' ;

// a text block takes precedence over a regular text string
TEXT_BLOCK: '"' NEWLINE CHARACTER*? NEWLINE '"' ;

TEXT: '"' (ESCAPE | CHARACTER)*? '"' ;

IDENTIFIER: ('a'..'z'|'A'..'Z') ('a'..'z'|'A'..'Z'|'0'..'9')* ;

NEWLINE: '\r'? '\n' ;

SPACE: ('\t'..'\r' | ' ') -> channel(HIDDEN) ;

fragment
LINE: CHARACTER*? NEWLINE ;

fragment
CHARACTER: . ;

fragment
NATURAL: '1'..'9' ('0'..'9')* ;

fragment
INTEGER: '0' | '-'? NATURAL ;

fragment
SCHEME: ('a'..'z'|'A'..'Z') ('a'..'z'|'A'..'Z'|'0'..'9'|'+'|'-'|'.')* ;

fragment
CONTEXT: ('!'..'=' | '?'..'~')* ;

fragment
YEARS: INTEGER ('-' MONTHS)? ;

fragment
MONTHS: (('0' '0'..'9') | ('1' '0'..'2')) ('-' DAYS)? ;

fragment
DAYS: (('0'..'2' '0'..'9') | ('3' '0'..'1')) ('T' HOURS)? ;

fragment
HOURS: (('0'..'1' '0'..'9') | ('2' '0'..'3')) (':' MINUTES)? ;

fragment
MINUTES: ('0'..'5' '0'..'9') (':' SECONDS)? ;

// must include 60 to handle leap seconds
fragment
SECONDS: (('0'..'5' '0'..'9') | '60') FRACTION? ;

fragment
BASE16: '0'..'9' | 'A'..'F' ;

// avoid confusion and offensive strings by eliminating 'E', 'I', 'O', and 'U'
fragment
BASE32: '0'..'9' | 'A'..'D' | 'F'..'H' | 'J'..'N' | 'P'..'T' | 'V'..'Z' ;

fragment
BASE64: '0'..'9' | 'A'..'Z' | 'a'..'z' | '+' | '/' ;

// replace with actual characters when read
fragment
ESCAPE: '\\' ('u' BASE16+ | 'b' | 'f' | 'r' | 'n' | 't' | '"' | '\\') ;

