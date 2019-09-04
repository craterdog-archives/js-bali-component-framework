grammar Components;
import Statements;

component: value parameters?;

value: element | collection | procedure;

collection: '[' sequence ']';

sequence: range | list | catalog;

parameters: '(' catalog ')';

range: expression '..' expression;

list:
    expression (',' expression)*       #inlineList |
    EOL (expression EOL)*              #newlineList |
    /*empty list*/                     #emptyList
;

catalog:
    association (',' association)*     #inlineCatalog |
    EOL (association EOL)*             #newlineCatalog |
    ':' /*empty catalog*/              #emptyCatalog
;

association: component ':' expression;

procedure: '{' statements '}';
