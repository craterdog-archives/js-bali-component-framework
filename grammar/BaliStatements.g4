grammar BaliStatements;

import BaliExpressions;


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
    whileClause |
    withClause |
    continueClause |
    breakClause |
    returnClause |
    throwClause
;

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

whileClause: 'while' expression 'do' block;

withClause: 'with' ('each' symbol 'in')? expression 'do' block;

continueClause: 'continue' 'loop';

breakClause: 'break' 'loop';

returnClause: 'return' expression?;

throwClause: 'throw' expression;

handleClause: 'handle' symbol 'matching' expression 'with' block;

recipient: symbol | variable indices;

variable: IDENTIFIER;

indices: '[' list ']';

