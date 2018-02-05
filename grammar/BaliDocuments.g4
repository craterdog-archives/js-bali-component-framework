grammar BaliDocuments;

import BaliStatements;


document: NEWLINE* component NEWLINE* EOF;

component: (element | structure | block) parameters?;

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

task: SHELL NEWLINE* procedure NEWLINE* EOF;

block: '{' procedure '}';

procedure:
    statement (';' statement)*    #inlineProcedure  |
    NEWLINE (statement NEWLINE)*  #newlineProcedure |
    /*empty procedure*/ #emptyProcedure
;

