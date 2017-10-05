grammar BaliStatements;

import BaliClauses;

script: SHELL statements EOF;

block: '{' statements '}';

statements:
    statement (';' statement)* #inlineStatements |
    NEWLINE (statement NEWLINE)* #newlineStatements |
    /*empty statements*/ #emptyStatements
;

statement: mainClause exceptionClause* finalClause?;

exceptionClause: 'catch' symbol 'matching' exception 'with' block;

exception: expression;

finalClause: 'finish' 'with' block;

