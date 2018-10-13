grammar BaliComponents;

import BaliProcedures;


component: value parameters?;

value: element | structure | source;

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

source: '{' procedure '}';

