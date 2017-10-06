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

exceptionClause: 'catch' symbol 'matching' xception 'with' block;

finalClause: 'finish' 'with' block;

