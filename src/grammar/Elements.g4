grammar Elements;
import Tokens;

element:
    angle |
    binary |
    duration |
    moment |
    name |
    number |
    pattern |
    percentage |
    probability |
    reference |
    symbol |
    tag |
    text |
    version
;

angle: ANGLE;

binary: BINARY;

duration: DURATION;

moment: MOMENT;

name: NAME;

number:
    'undefined' |
    '0' |
    '∞' |
    'infinity' |
    REAL |
    IMAGINARY |
    '(' REAL (',' IMAGINARY | 'e^' ANGLE 'i') ')'
;

pattern: 'none' | REGEX | 'any';

percentage: PERCENTAGE;

probability: 'false' | FRACTION | 'true';

reference: RESOURCE;

symbol: SYMBOL;

tag: TAG;

text: TEXT | NARRATIVE;

version: VERSION;
