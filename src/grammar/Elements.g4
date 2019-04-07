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
    reserved |
    symbol |
    tag |
    text |
    version
;

angle: ANGLE;

binary: BINARY;

duration: DURATION;

pattern: 'none' | REGEX | 'any';

imaginary: IMAGINARY;

moment: MOMENT;

name: NAME;

number:
    'undefined' |
    'infinity' |
    real |
    imaginary |
    '(' real (',' imaginary | 'e^' angle 'i') ')'
;

percent: PERCENT;

probability: 'false' | FRACTION | 'true';

real: REAL;

reference: RESOURCE;

reserved: RESERVED;

symbol: SYMBOL;

tag: TAG;

text: TEXT | TEXT_BLOCK;

version: VERSION;
