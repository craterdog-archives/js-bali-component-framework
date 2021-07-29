grammar Components;
import Elements;

component: value parameters? note?;

value: element | range | sequence | procedure;

range: element? '..' element?;

sequence: '[' collection ']';

collection: list | catalog;

parameters: '(' catalog ')';

list:
    component (',' component)* |
    EOL (component EOL)* |
    /* no items */
;

catalog:
    association (',' association)* |
    EOL (association EOL)* |
    ':' /* no associations */
;

association: element ':' component;

procedure: '{' action '}';

action:
    statement (';' statement)* |
    EOL (statement EOL)* |
    /* no statements */
;

note: NOTE;

