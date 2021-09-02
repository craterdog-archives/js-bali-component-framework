grammar Components;
import Elements;

component: value parameters? note?;

value: element | sequence | procedure;

parameters: '(' catalog ')';

note: NOTE;

sequence: '[' collection ']';

collection: range | list | catalog;

range: expression? connector=('<..<' | '<..' | '..<' | '..') expression?;

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

