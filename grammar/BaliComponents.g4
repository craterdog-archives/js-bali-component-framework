grammar BaliComponents;

import BaliProcedures;


component: st8 parameters?;

st8: element | structure | code;

structure: '[' collection ']';

parameters: '(' collection ')';

collection: range | list | catalog;

range: expression '..' expression;

list:
    expression (',' expression)* #inlineList |
    NEWLINE (expression NEWLINE)* #newlineList |
    /*empty list*/ #emptyList
;

catalog:
    association (',' association)* #inlineCatalog |
    NEWLINE (association NEWLINE)* #newlineCatalog |
    ':' /*empty catalog*/ #emptyCatalog
;

association: component ':' expression;

code: '{' procedure '}';

