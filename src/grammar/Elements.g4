grammar Elements;
import Tokens;

element:
    angle |
    binary |
    duration |
    moment |
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

pattern: 'none' | 'any';

imaginary: IMAGINARY;

moment: MOMENT;

number:
    'undefined'                               #undefinedNumber |
    'infinity'                                #infiniteNumber  |
    real                                      #realNumber      |
    imaginary                                 #imaginaryNumber |
    '(' real del=(',' | 'e^~') imaginary ')'  #complexNumber
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
