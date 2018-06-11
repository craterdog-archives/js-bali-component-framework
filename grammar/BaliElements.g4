grammar BaliElements;

import BaliTokens;


element:
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

binary: BINARY;

duration: DURATION;

imaginary: (real | sign='-')? 'i';

moment: MOMENT;

number:
    'undefined'                              #undefinedNumber |
    'infinity'                               #infiniteNumber  |
    real                                     #realNumber      |
    imaginary                                #imaginaryNumber |
    '(' real del=(',' | 'e^') imaginary ')'  #complexNumber
;

percent: real '%';

probability:
    'false'   #falseProbability      |
    FRACTION  #fractionalProbability |
    'true'    #trueProbability
;

real:
    sign='-'? CONSTANT  #constantReal |
    FLOAT               #variableReal
;

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

