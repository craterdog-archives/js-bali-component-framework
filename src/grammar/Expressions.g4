grammar Expressions;
import Components;

expression:                  // Precedence (highest to lowest)
    component                                                            #componentExpression     |
    variable                                                             #variableExpression      |
    funcxion '(' arguments ')'                                           #functionExpression      |
    '(' expression ')'                                                   #precedenceExpression    |
    '@' expression                                                       #dereferenceExpression   |
    expression operator=('.' | '<-') message '(' arguments ')'           #messageExpression       |
    expression '[' indices ']'                                           #attributeExpression     |
    expression '&' expression                                            #chainExpression         |
    expression '!'                                                       #factorialExpression     |
    <assoc=right> expression '^' expression                              #exponentialExpression   |
    operator=('-' | '/' | '*') expression                                #inversionExpression     |
    expression operator=('*' | '/' | '//' | '+' | '-') expression        #arithmeticExpression    |
    '|' expression '|'                                                   #magnitudeExpression     |
    expression operator=('<' | '=' | '>' | 'IS' | 'MATCHES') expression  #comparisonExpression    |
    'NOT' expression                                                     #complementExpression    |
    expression operator=('AND' | 'SANS' | 'XOR' | 'OR') expression       #logicalExpression       |
    expression '?' expression                                            #defaultExpression
;

variable: IDENTIFIER;

funcxion: IDENTIFIER;

message: IDENTIFIER;

arguments:
    expression (',' expression)* |
    /* no expressions */
;


indices: expression (',' expression)*;
