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
    percent |
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

percent: PERCENT;

probability: 'false' | FRACTION | 'true';

reference: RESOURCE;

symbol: SYMBOL;

tag: TAG;

text: TEXT | TEXT_BLOCK;

version: VERSION;
