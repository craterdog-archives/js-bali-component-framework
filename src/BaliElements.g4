grammar BaliElements;

import BaliTokens;

element:
    any |
    tag |
    symbol |
    time |
    reference |
    version |
    text |
    binary |
    probability |
    percent |
    number
;

any: ('none' | 'any') ;

tag: TAG ;

symbol: SYMBOL ;

time: TIME ;

reference: RESOURCE ;

version: VERSION ;

text:
    TEXT |
    TEXT_BLOCK
;

binary: BINARY ;

probability:
    'true' |
    'false' |
    FRACTION
;

percent: real '%' ;

real:
    '-'? ('e' | 'pi' | 'phi') |
    FLOAT
;

imaginary: (real | '-')? 'i' ;

number:
    'undefined' |
    'infinity' |
    real |
    imaginary |
    '(' real (',' | 'e^') imaginary ')'
;

name: IDENTIFIER ;

newline: NEWLINE ;

