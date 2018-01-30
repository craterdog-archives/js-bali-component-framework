grammar BaliDocuments;

import BaliStatements;


document: NEWLINE* component NEWLINE* EOF;

component: element | structure | block;

structure: '[' composite ']' parameters?;

parameters: '(' composite ')';

composite: range | array | table;

range: expression '..' expression;

array:
    expression (',' expression)* #inlineArray |
    NEWLINE (expression NEWLINE)* #newlineArray |
    /*empty array*/ #emptyArray
;

table:
    association (',' association)* #inlineTable |
    NEWLINE (association NEWLINE)* #newlineTable |
    ':' /*empty table*/ #emptyTable
;

association: element ':' expression;

task: SHELL NEWLINE* procedure NEWLINE* EOF;

block: '{' procedure '}' parameters?;

procedure:
    statement (';' statement)*    #inlineProcedure  |
    NEWLINE (statement NEWLINE)*  #newlineProcedure |
    /*empty procedure*/ #emptyProcedure
;

