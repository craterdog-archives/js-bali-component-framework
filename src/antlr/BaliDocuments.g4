grammar BaliDocuments;

import BaliStatements;

document: literal parameters?;

literal: element | structure | block;

parameters: '(' composite ')';

structure: '[' composite ']';

block: '{' statements '}';

composite: range | collection | table;

range: expression '..' expression;

collection:
    expression (',' expression)* #inlineCollection |
    NEWLINE (expression NEWLINE)* #newlineCollection |
    /*empty collection*/ #emptyCollection
;

table:
    association (',' association)* #inlineTable |
    NEWLINE (association NEWLINE)* #newlineTable |
    ':' /*empty table*/ #emptyTable
;

association: key ':' expression;

key: element parameters?;

