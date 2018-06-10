grammar BaliDocuments;

import BaliStatements;


document: NEWLINE* component NEWLINE* EOF;

component: item parameters?;

item: element | structure | code;

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

task: SHELL NEWLINE* procedure NEWLINE* EOF;

procedure:
    statement (';' statement)*    #inlineProcedure  |
    NEWLINE (statement NEWLINE)*  #newlineProcedure |
    /*empty procedure*/ #emptyProcedure
;

