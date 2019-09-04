grammar Statements;
import Expressions;

statements:
    statement (';' statement)* |
    EOL (statement EOL)* |
    /*empty statements*/
;

statement: mainClause handleClause*;

mainClause:
    evaluateClause |
    checkoutClause |
    saveClause |
    discardClause |
    commitClause |
    publishClause |
    queueClause |
    waitClause |
    ifClause |
    selectClause |
    withClause |
    whileClause |
    continueClause |
    breakClause |
    returnClause |
    throwClause
;

handleClause: 'handle' symbol 'matching' expression 'with' block;

block: '{' statements '}';

evaluateClause: (recipient ':=')? expression;

checkoutClause: 'checkout' recipient 'from' expression;

saveClause: 'save' expression 'to' expression;

discardClause: 'discard' expression;

commitClause: 'commit' expression 'to' expression;

publishClause: 'publish' expression;

queueClause: 'queue' expression 'on' expression;

waitClause: 'wait' 'for' recipient 'from' expression;

ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?;

selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?;

withClause: 'with' ('each' symbol 'in')? expression 'do' block;

whileClause: 'while' expression 'do' block;

continueClause: 'continue' 'loop';

breakClause: 'break' 'loop';

returnClause: 'return' expression?;

throwClause: 'throw' expression;

recipient: symbol | subcomponent;

subcomponent: variable indices;
