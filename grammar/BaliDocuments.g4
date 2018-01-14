grammar BaliDocuments;
import BaliStatements;


document: literal parameters?;

literal: element | structure | block;

parameters: '(' composite ')';

structure: '[' composite ']';

block: '{' procedure '}';

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

association: key ':' expression;

key: element parameters?;

task: SHELL procedure EOF;

procedure:
    statement (';' statement)*    #inlineProcedure  |
    NEWLINE (statement NEWLINE)*  #newlineProcedure |
    /*empty procedure*/ #emptyProcedure
;
