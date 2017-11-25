grammar BaliExpressions;

import BaliElements;

expression:                                                        // Precedence (highest to lowest)
    document                                                       #documentExpression     |
    variable                                                       #variableExpression     |
    funxion                                                        #funxionExpression      |
    '(' expression ')'                                             #precedenceExpression   |
    '@' expression                                                 #dereferenceExpression  |
    expression indices                                             #componentExpression    |
    expression '.' message                                         #messageExpression      |
    expression '!'                                                 #factorialExpression    |
    <assoc=right> expression '^' expression                        #exponentialExpression  |
    op=('-' | '/' | '*') expression                                #inversionExpression    |
    expression op=('*' | '/' | '//' | '+' | '-') expression        #arithmeticExpression   |
    '|' expression '|'                                             #magnitudeExpression    |
    expression op=('<' | '=' | '>' | 'is' | 'matches') expression  #comparisonExpression   |
    'not' expression                                               #complementExpression   |
    expression op=('and' | 'sans' | 'xor' | 'or') expression       #logicalExpression      |
    expression '?' expression                                      #defaultExpression
;

funxion: IDENTIFIER parameters;

message: IDENTIFIER parameters;

