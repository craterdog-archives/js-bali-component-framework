grammar Components;
import Elements;

component: value parameters? note?;

value: element | range | sequence | procedure;

range: element? connector=('<..<' | '<..' | '..<' | '..') element?;

sequence: '[' collection ']';

collection: list | catalog;

parameters: '(' catalog ')';

list:
    expression (',' expression)* |
    EOL (expression EOL)* |
    /* no items */
;

catalog:
    association (',' association)* |
    EOL (association EOL)* |
    ':' /* no associations */
;

association: element ':' expression;

procedure: '{' code '}';

code:
    statement (';' statement)* |
    EOL (statement EOL)* |
    /* no statements */
;

note: NOTE;

