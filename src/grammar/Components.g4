grammar Components;
import Statements;

component: value parameters?;

value: element | sequence | procedure;

sequence: '[' collection ']';

collection: range | list | catalog;

parameters: '(' catalog ')';

range: component '..' component;

list:
    component (',' component)* |
    EOL (component EOL)* |
    /* empty list */
;

catalog:
    association (',' association)* |
    EOL (association EOL)* |
    ':' /* empty catalog */
;

association: element ':' component;

procedure: '{' statements '}';

statements:
    statement (';' statement)* |
    EOL (statement EOL)* |
    /* no statements */
;
