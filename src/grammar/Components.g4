grammar Components;
import Elements;

component: value parameters?;

value: element | sequence | procedure;

sequence: '[' collection ']';

collection: range | list | catalog;

parameters: '(' catalog ')';

range: component '..' component;

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

procedure: '{' statements '}';

statements:
    statement (';' statement)* |
    EOL (statement EOL)* |
    /* no statements */
;
