grammar Statements;
import Expressions;

statement: mainClause handleClause?;

mainClause:
    evaluateClause |
    checkoutClause |
    saveClause |
    discardClause |
    commitClause |
    publishClause |
    postClause |
    waitClause |
    acknowledgeClause |
    ifClause |
    selectClause |
    withClause |
    whileClause |
    continueClause |
    breakClause |
    returnClause |
    throwClause
;

handleClause: 'handle' symbol ('matching' expression 'with' block)+;

block: '{' statements '}';

evaluateClause: (recipient ':=')? expression;

checkoutClause: 'checkout' recipient ('at' 'level' expression)? 'from' expression;

saveClause: 'save' expression 'to' expression;

discardClause: 'discard' expression;

commitClause: 'commit' expression 'to' expression;

publishClause: 'publish' expression;

postClause: 'post' expression 'to' expression;

waitClause: 'wait' 'for' recipient 'from' expression;

acknowledgeClause: 'acknowledge' expression 'from' expression;

ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?;

selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?;

withClause: 'with' ('each' symbol 'in')? expression 'do' block;

whileClause: 'while' expression 'do' block;

continueClause: 'continue' 'loop';

breakClause: 'break' 'loop';

returnClause: 'return' expression?;

throwClause: 'throw' expression;

recipient: symbol | subcomponent;

subcomponent: variable '[' indices ']';
