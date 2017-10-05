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
    'none'  #noneAny  |
    'any'   #anyAny
;

tag: TAG ;

symbol: SYMBOL ;

time: TIME ;

reference: RESOURCE ;

version: VERSION ;

text:
    TEXT        #inlineText  |
    TEXT_BLOCK  #blockText
;

binary: BINARY ;

probability:
    'true'    #trueProbability   |
    'false'   #falseProbability  |
    FRACTION  #fractionalProbability
;

percent: real '%' ;

real:
    sign='-'? con=('e' | 'pi' | 'phi')  #constantReal  |
    FLOAT                               #variableReal
;

imaginary: (real | sign='-')? 'i' ;

number:
    'undefined'                              #undefinedNumber  |
    'infinity'                               #infiniteNumber   |
    real                                     #realNumber       |
    imaginary                                #imaginaryNumber  |
    '(' real del=(',' | 'e^') imaginary ')'  #complexNumber
;

name: IDENTIFIER ;

