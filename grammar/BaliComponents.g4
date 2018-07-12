grammar BaliComponents;

import BaliProcedures;


component: object parameters?;

object: element | structure | code;

structure: '[' collection ']';

parameters: '(' collection ')';

seal: reference binary;

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

document: NEWLINE* component (NEWLINE seal)+ NEWLINE* EOF;

task: SHELL NEWLINE* procedure (NEWLINE seal)+ NEWLINE* EOF;

