grammar BaliDocuments;

import BaliStatements;

document: literal ('(' parameters ')')? ;

literal:
    element |
    composite |
    block
;

parameters:
    parameter (',' parameter)* |
    newline (parameter newline)+
;

parameter: (symbol ':')? value ;

composite: '[' (range | collection | table) ']' ;

range: element '..' element ;

collection:
    value (',' value)* |
    newline (value newline)+ |
    // empty collection
;

table:
    association (',' association)* |
    newline (association newline)+ |
    ':' // empty table
;

association: key ':' value ;

key: element ('(' parameters ')')? ;

value:
    document |
    variable
;

variable: name ;

