grammar Statements;
import Expressions;

statement: comment | mainClause handleClause?;

comment: NOTE | COMMENT;

mainClause:
    evaluateClause |
    saveClause |
    discardClause |
    notarizeClause |
    checkoutClause |
    publishClause |
    postClause |
    retrieveClause |
    acceptClause |
    rejectClause |
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

block: '{' code '}';

evaluateClause: (recipient operator=(':=' | '+=' | '-=' | '*='))? expression;

// save document as $citation
saveClause: 'save' expression ('as' recipient)?;

// discard document
discardClause: 'discard' expression;

// notarize document as /acme/reports/Q3/v1.4
notarizeClause: 'notarize' expression 'as' expression;

// checkout $draft at level 2 from /acme/reports/Q3/v1.3.6
checkoutClause: 'checkout' recipient ('at level' expression)? 'from' expression;

// publish event
publishClause: 'publish' expression;

// post message to /acme/blogs/v3.2
postClause: 'post' expression 'to' expression;

// retrieve $message from /acme/blogs/v3.2
retrieveClause: 'retrieve' recipient 'from' expression;

// accept message
acceptClause: 'accept' expression;

// reject message
rejectClause: 'reject' expression;

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
