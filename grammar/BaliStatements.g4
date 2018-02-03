grammar BaliStatements;

import BaliExpressions;


statement: (
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
) handleClause* finishClause?;

evaluateClause: ((symbol | variable indices) ':=')? expression;

checkoutClause: 'checkout' (symbol | variable indices) 'from' expression;

saveClause: 'save' expression 'to' expression;

discardClause: 'discard' expression;

commitClause: 'commit' expression 'to' expression;

publishClause: 'publish' expression;

queueClause: 'queue' expression 'on' expression;

waitClause: 'wait' 'for' (symbol | variable indices) 'from' expression;

ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?;

selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?;

whileClause: (label ':')? 'while' expression 'do' block;

withClause: (label ':')? 'with' ('each' symbol 'in')? expression 'do' block;

continueClause: 'continue' ('to' label)?;

breakClause: 'break' ('from' label)?;

returnClause: 'return' expression?;

throwClause: 'throw' expression;

handleClause: 'handle' symbol 'matching' expression 'with' block;

finishClause: 'finish' 'with' block;

label: IDENTIFIER;

variable: IDENTIFIER;

indices: '[' array ']';

