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

any:
    'none'  #noneAny |
    'any'   #anyAny
;

tag: TAG;

symbol: SYMBOL;

time:
    MOMENT    #momentTime   |
    DURATION  #durationTime
;

reference: RESOURCE;

version: VERSION;

text:
    TEXT        #inlineText |
    TEXT_BLOCK  #newlineText
;

binary: BINARY;

probability:
    'true'    #trueProbability       |
    'false'   #falseProbability      |
    FRACTION  #fractionalProbability
;

percent: real '%';

number:
    'undefined'                              #undefinedNumber |
    'infinity'                               #infiniteNumber  |
    real                                     #realNumber      |
    imaginary                                #imaginaryNumber |
    '(' real del=(',' | 'e^') imaginary ')'  #complexNumber
;

real:
    sign='-'? CONSTANT  #constantReal |
    FLOAT               #variableReal
;

imaginary: (real | sign='-')? 'i';
