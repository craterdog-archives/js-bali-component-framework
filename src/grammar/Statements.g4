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
    receiveClause |
    rejectClause |
    acceptClause |
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

// checkout level 2 of $draft from /acme/reports/Q3/v1.3.6
checkoutClause: 'checkout' ('level' expression 'of')? recipient 'from' expression;

// save draft
saveClause: 'save' expression;

// discard draft
discardClause: 'discard' expression;

// commit draft to /acme/reports/Q3/v1.4
commitClause: 'commit' expression 'to' expression;

// publish event
publishClause: 'publish' expression;

// post message to /acme/blogs/v3.2
postClause: 'post' expression 'to' expression;

// receive $message from /acme/blogs/v3.2
receiveClause: 'receive' recipient 'from' expression;

// reject message
rejectClause: 'reject' expression;

// accept message
acceptClause: 'accept' expression;

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
