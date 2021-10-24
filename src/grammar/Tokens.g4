grammar Tokens;

/* TOKEN RULES
 It's important to remember that tokens are recognized by the
 lexer in the order declared. The longest first matching token
 is returned regardless of how many others might match. Also,
 prefix any tokens that are just used as subtokens with the
 "fragment" keyword.
*/

ANGLE: '~' ('0' | '-'? REAL);

BINARY: '\'' (BASE64 | SPACE)* ('=' ('=')?)? SPACE* '\'';

// Note: A duration containing a span of weeks cannot contain any other time spans.
DURATION: '~' '-'? 'P' (SPAN 'W' | (SPAN 'Y')? (SPAN 'M')? (SPAN 'D')? ('T' (SPAN 'H')? (SPAN 'M')? (SPAN 'S')?)?);

// Note: A fraction may consist of all zeros when specifying a fraction to a specific number
//       of significant digits.
FRACTION: '.' ('0'..'9')+;

PERCENTAGE: ('0' | '-'? REAL) '%';

// Note: An imaginary number must be higher precedence than a real number.
IMAGINARY: FLOAT 'i' | 'e i' | 'pi i' | 'π i' | 'phi i' | 'φ i' | 'tau i' | 'τ i';

REAL: FLOAT | 'e' | 'pi' | 'π' | 'phi' | 'φ' | 'tau' | 'τ';

// Note: This represents a specific moment in time.
MOMENT: '<' YEAR ('-' MONTH ('-' DAY ('T' HOUR (':' MINUTE (':' SECOND FRACTION?)?)?)?)?)? '>';

// Note: A name must contain at least one label.
NAME: ('/' LABEL)+;

// Note: This represents a URI.  It is slightly more general than the allowed syntax
//       a URI but we delegate the enforcement of that syntax to the underlying
//       system.
RESOURCE: '<' LABEL ':' CONTEXT '>';

// Note: This definition is more general than a standard regular expression syntax
//       but we delegate the enforcement of that syntax to the underlying system.
REGEX: '"' TEXT '"?';

// Note: A symbol with a number suffix is a reserved symbol and can only be generated
//       by the Bali Nebula™ virtual machine.
SYMBOL: '$' IDENTIFIER ('-' NUMBER)?;

TAG: '#' BASE32+;

// Note: A narrative takes precedence over a quote and may contain ANY character.
//       However, the first (non space) character of a line within the narrative
//       CANNOT be a double quote character or it will terminate the narrative
//       prematurely.  Narratives may also be nested.
NARRATIVE: '"' EOL (NARRATIVE | CHARACTER)*? EOL SPACE* '"';

QUOTE: '"' TEXT '"';

// Note: A version like 'v12' takes precedence over an identifier like 'value'.
VERSION: 'v' NUMBER ('.' NUMBER)*;

IDENTIFIER: ('a'..'z'|'A'..'Z') ('a'..'z'|'A'..'Z'|'0'..'9')*;

NOTE: '--' ~[\r\n]*;

// Note: Comments may be nested.  This allows a section of code that already
//       contains comments to be commented out.
COMMENT: '/*' EOL (COMMENT | CHARACTER)*? EOL SPACE* '*/';

// Note: End of line characters are part of the language grammar and NOT ignored.
EOL: '\r'? '\n';

// Note: Any additional white space is generally ignored.
SPACE: ('\t'..'\r' | ' ') -> channel(HIDDEN);

fragment
TEXT: (ESCAPE | '\\"' | ~["\r\n])*?;

fragment
CHARACTER: .;

// Note: Zero is not a valid number.
fragment
NUMBER: '1'..'9' ('0'..'9')*;

fragment
FLOAT: (NUMBER FRACTION? | '0' FRACTION) ('E' '-'? NUMBER)?;

fragment
INTEGER: '0' | '-'? NUMBER;

// Note: This token represents a possibly fractional span of time.
fragment
SPAN: '0' | NUMBER FRACTION?;

fragment
LABEL: ('a'..'z' | 'A'..'Z' | '0'..'9') ('a'..'z' | 'A'..'Z' | '0'..'9' | '+' | '-' | '.')*;

fragment
CONTEXT: ('!'..'=' | '?'..'~')*;  // skip the space and '>' characters

// Note: A year may be negative if it is before 0 BC/
fragment
YEAR: INTEGER;

// Range: [01..12]
fragment
MONTH: (('0' '1'..'9') | ('1' '0'..'2'));

// Range: [01..31]
fragment
DAY: (('0' '1'..'9') | ('1'..'2' '0'..'9') | ('3' '0'..'1'));

// Range: [01..23]
fragment
HOUR: (('0'..'1' '0'..'9') | ('2' '0'..'3'));

// Range: [00..59]
fragment
MINUTE: ('0'..'5' '0'..'9');

// Range: [00..59]
fragment
SECOND: ('0'..'5' '0'..'9');

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

