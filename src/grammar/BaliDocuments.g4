grammar BaliDocuments;

import BaliStatements;

document: literal parameters?;

literal: element | structure | block;

parameters: '(' composite ')';

structure: '[' composite ']';

block: '{' statements '}';

composite: range | array | table;

range: value '..' value;

array:
    value (',' value)* #inlineArray |
    NEWLINE (value NEWLINE)* #newlineArray |
    /*empty array*/ #emptyArray
;

table:
    association (',' association)* #inlineTable |
    NEWLINE (association NEWLINE)* #newlineTable |
    ':' /*empty table*/ #emptyTable
;

association: key ':' value;

key: element parameters?;

value: expression;
