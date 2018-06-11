grammar BaliDocuments;

import BaliProcedures;


document: NEWLINE* component NEWLINE* EOF;

component: object parameters?;

object: element | structure | code;

structure: '[' composite ']';

parameters: '(' composite ')';

composite: range | list | catalog;

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

