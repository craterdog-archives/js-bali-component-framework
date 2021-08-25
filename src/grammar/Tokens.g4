grammar Tokens;

/* TOKEN RULES
 It's important to remember that tokens are recognized by the
 lexer in the order declared. The longest first matching token
 is returned regardless of how many others might match. Also,
 prefix any tokens that are just used as subtokens with the
 "fragment" keyword.
*/

ANGLE: '~' ('0' | REAL);

BINARY: '\'' (BASE64 | SPACE)* ('=' ('=')?)? SPACE* '\'';

DURATION: '~' '-'? 'P' (SPAN 'W' | (SPAN 'Y')? (SPAN 'M')? (SPAN 'D')? ('T' (SPAN 'H')? (SPAN 'M')? (SPAN 'S')?)?);

FRACTION: '.' ('0'..'9')+;

PERCENTAGE: ('0' | REAL) '%';

// Note: An imaginary number must be higher precedence than a real number.
IMAGINARY: FLOAT 'i' | 'e i' | 'pi i' | 'π i' | 'phi i' | 'φ i' | 'tau i' | 'τ i';

REAL: FLOAT | 'e' | 'pi' | 'π' | 'phi' | 'φ' | 'tau' | 'τ';

MOMENT: '<' YEARS ('-' MONTHS ('-' DAYS ('T' HOURS (':' MINUTES (':' SECONDS FRACTION?)?)?)?)?)? '>';

NAME: ('/' LABEL)+;

RESOURCE: '<' LABEL ':' CONTEXT '>';

REGEX: '"' TEXT '"?';

SYMBOL: '$' IDENTIFIER ('-' NUMBER)?;

TAG: '#' BASE32*;

// Note: A narrative takes precedence over a quote and may contain any character.
NARRATIVE: '"' EOL CHARACTER*? EOL SPACE* '"';

QUOTE: '"' TEXT '"';

// Note: A version like 'v12' takes precedence over an identifier like 'value'.
VERSION: 'v' NUMBER ('.' NUMBER)*;

IDENTIFIER: ('a'..'z'|'A'..'Z') ('a'..'z'|'A'..'Z'|'0'..'9')*;

NOTE: '--' ~[\r\n]*;

COMMENT: '/*' EOL (COMMENT | CHARACTER)*? EOL SPACE* '*/';

EOL: '\r'? '\n';

SPACE: ('\t'..'\r' | ' ') -> channel(HIDDEN);

fragment
TEXT: (ESCAPE | '\\"' | ~["\r\n])*?;

fragment
CHARACTER: .;

fragment
NUMBER: '1'..'9' ('0'..'9')*;

fragment
FLOAT: '-'? (NUMBER FRACTION? | '0' FRACTION) ('E' '-'? NUMBER)?;

fragment
INTEGER: '0' | '-'? NUMBER;

fragment
SPAN: INTEGER FRACTION?;

fragment
LABEL: ('a'..'z' | 'A'..'Z' | '0'..'9' | '+' | '-' | '.')+;

fragment
CONTEXT: ('!'..'=' | '?'..'~')*;  // skip the space and '>' characters

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

// Note: We must include 60 to handle leap seconds.
fragment
SECONDS: (('0'..'5' '0'..'9') | '60');

fragment
BASE16: '0'..'9' | 'A'..'F';

// Note: This avoids confusion and possible offensive strings by eliminating
//       the 'E', 'I', 'O', and 'U' characters.
fragment
BASE32: '0'..'9' | 'A'..'D' | 'F'..'H' | 'J'..'N' | 'P'..'T' | 'V'..'Z';

fragment
BASE64: '0'..'9' | 'A'..'Z' | 'a'..'z' | '+' | '/';

// Note: The escaped sequences are replaced with actual characters when read.
fragment
ESCAPE: '\\' ('u' BASE16+ | 'b' | 'f' | 'r' | 'n' | 't' | '\\');
