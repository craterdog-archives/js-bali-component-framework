grammar BaliElements;

import BaliTokens;


element:
    angle |
    binary |
    duration |
    moment |
    number |
    percent |
    probability |
    reference |
    symbol |
    tag |
    template |
    text |
    version
;

angle: '~' real;

binary: BINARY;

duration: DURATION;

imaginary: (real | sign='-')? 'i';

moment: MOMENT;

number:
    'undefined'                              #undefinedNumber |
    'infinity'                               #infiniteNumber  |
    real                                     #realNumber      |
    imaginary                                #imaginaryNumber |
    '(' real del=(',' | 'e^~') imaginary ')'  #complexNumber
;

percent: real '%';

probability:
    'false'   #falseProbability      |
    FRACTION  #fractionalProbability |
    'true'    #trueProbability
;

real: '0' | (sign='-'? (CONSTANT | FLOAT));

reference: RESOURCE;

symbol: SYMBOL;

tag: TAG;

template:
    'none'  #noneTemplate |
    'any'   #anyTemplate
;

text:
    TEXT        #inlineText |
    TEXT_BLOCK  #newlineText
;

version: VERSION;

