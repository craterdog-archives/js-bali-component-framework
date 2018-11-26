grammar Components;
import Procedures;

component: value parameters?;

value: element | structure | source;

structure: '[' collection ']';

parameters: '(' collection ')';

collection: range | list | catalog;

range: expression '..' expression;

list:
    expression (',' expression)* #inlineList |
    EOL (expression EOL)* #newlineList |
    /*empty list*/ #emptyList
;

catalog:
    association (',' association)* #inlineCatalog |
    EOL (association EOL)* #newlineCatalog |
    ':' /*empty catalog*/ #emptyCatalog
;

association: component ':' expression;

source: '{' procedure '}';
