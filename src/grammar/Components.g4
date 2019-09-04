grammar Components;
import Statements;

component: value parameters?;

value: element | collection | procedure;

collection: '[' sequence ']';

sequence: range | list | catalog;

parameters: '(' catalog ')';

range: expression '..' expression;

list:
    expression (',' expression)* |
    EOL (expression EOL)* |
    /*empty list*/
;

catalog:
    association (',' association)* |
    EOL (association EOL)* |
    ':' /*empty catalog*/
;

association: component ':' expression;

procedure: '{' statements '}';

statements:
    statement (';' statement)* |
    EOL (statement EOL)* |
    /*empty statements*/
;
