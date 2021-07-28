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
    retrieveClause |
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

handleClause: 'handle' symbol (('with' block) | ('matching' expression 'with' block)+);

block: '{' action '}';

evaluateClause: (recipient ':=')? expression;

// checkout level 2 of $document from /acme/reports/Q3/v1.3.6
checkoutClause: 'checkout' ('level' expression 'of')? recipient 'from' expression;

// save document as $citation
saveClause: 'save' expression ('as' recipient)?;

// discard document
discardClause: 'discard' expression;

// commit document to /acme/reports/Q3/v1.4
commitClause: 'commit' expression 'to' expression;

// publish event
publishClause: 'publish' expression;

// post message to /acme/blogs/v3.2
postClause: 'post' expression 'to' expression;

// retrieve $message from /acme/blogs/v3.2
retrieveClause: 'retrieve' recipient 'from' expression;

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

recipient: symbol | attribute;

attribute: variable '[' indices ']';
