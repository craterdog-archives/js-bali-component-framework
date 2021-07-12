grammar Expressions;
import Components;

expression:                  // Precedence (highest to lowest)
    component                                                      #componentExpression     |
    variable                                                       #variableExpression      |
    funcxion '(' arguments ')'                                     #functionExpression      |
    '(' expression ')'                                             #precedenceExpression    |
    '@' expression                                                 #dereferenceExpression   |
    expression op=('.' | '<-') message '(' arguments ')'           #messageExpression       |
    expression '[' indices ']'                                     #attributeExpression     |
    expression '&' expression                                      #concatenationExpression |
    expression '!'                                                 #factorialExpression     |
    <assoc=right> expression '^' expression                        #exponentialExpression   |
    op=('-' | '/' | '*') expression                                #inversionExpression     |
    expression op=('*' | '/' | '//' | '+' | '-') expression        #arithmeticExpression    |
    '|' expression '|'                                             #magnitudeExpression     |
    expression op=('<' | '=' | '>' | 'IS' | 'MATCHES') expression  #comparisonExpression    |
    'NOT' expression                                               #complementExpression    |
    expression op=('AND' | 'SANS' | 'XOR' | 'OR') expression       #logicalExpression       |
    expression '?' expression                                      #defaultExpression
;

variable: IDENTIFIER;

funcxion: IDENTIFIER;

message: IDENTIFIER;

arguments:
    expression (',' expression)* |
    /* no arguments */
;


indices: expression (',' expression)*;
