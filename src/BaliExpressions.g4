grammar BaliExpressions;

import BaliElements;

expression:                                                       // Precedence (highest to lowest)
    value |                                                       // literal value
    funxtion '(' arguments? ')' |                                 // function invocation
    '(' expression ')' |                                          // precedence specification
    '@'expression |                                               // reference traversal
    expression '[' indexes ']' |                                  // subvalue retrieval
    expression '.' message '(' arguments? ')' |                   // message transmission
    expression '!' |                                              // factorial
    <assoc=right> expression '^' expression |                     // exponential
    ('-' | '/' | '*') expression |                                // inversion
    expression ('*' | '/' | '//' | '+' | '-') expression |        // arithmetic
    '|' expression '|' |                                          // magnitude
    expression '..' expression |                                  // range
    expression ('<' | '=' | '>' | 'is' | 'matches') expression |  // comparison
    'not' expression |                                            // complement
    expression ('and' | 'sans' | 'xor' | 'or') expression |       // logical
    expression '?' expression                                     // default specification
;

funxtion: name ;

message: name ;

arguments:
    argument (',' argument)* |
    newline (argument newline)+
;

argument: (symbol ':')? expression ;

indexes:
    index (',' index)* |
    newline (index newline)+
;

index: expression ;

