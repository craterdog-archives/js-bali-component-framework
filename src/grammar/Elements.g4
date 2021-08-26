grammar Elements;
import Tokens;

element:
    angle |
    binary |
    bulean |
    duration |
    moment |
    name |
    number |
    pattern |
    percentage |
    probability |
    resource |
    symbol |
    tag |
    text |
    version
;

angle: ANGLE;

binary: BINARY;

bulean: 'false' | 'true';

duration: DURATION;

moment: MOMENT;

name: NAME;

real: '-'? REAL;

imaginary: '-'? IMAGINARY;

number:
    'undefined' |
    '0' |
    '∞' |
    'infinity' |
    real |
    imaginary |
    '(' real (',' imaginary | 'e^' angle 'i') ')'
;

pattern: 'none' | REGEX | 'any';

percentage: PERCENTAGE;

// Hack: the only allowed REAL value is "1", but a token of "1."
// Hack: will take precedence over all REAL values and ranges
probability: FRACTION | REAL '.';

resource: RESOURCE;

symbol: SYMBOL;

tag: TAG;

text: QUOTE | NARRATIVE;

version: VERSION;
