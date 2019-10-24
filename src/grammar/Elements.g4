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

percent: PERCENT;

probability: 'false' | FRACTION | 'true';

reference: RESOURCE;

reserved: RESERVED;

symbol: SYMBOL;

tag: TAG;

text: TEXT | TEXT_BLOCK;

version: VERSION;
