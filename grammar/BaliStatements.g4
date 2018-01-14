grammar BaliStatements;
import BaliElements;


statement: attemptClause handleClause* finishClause?;

attemptClause:
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

handleClause: 'handle' symbol 'matching' expression 'with' block;

finishClause: 'finish' 'with' block;

evaluateClause: (assignee ':=')? expression;

checkoutClause: 'checkout' symbol 'from' expression;

saveClause: 'save' expression 'to' expression;

discardClause: 'discard' expression;

commitClause: 'commit' expression 'to' expression;

publishClause: 'publish' expression;

queueClause: 'queue' expression 'on' expression;

waitClause: 'wait' 'for' symbol 'from' expression;

ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?;

selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?;

whileClause: (label ':')? 'while' expression 'do' block;

withClause: (label ':')? 'with' ('each' symbol 'in')? expression 'do' block;

continueClause: 'continue' ('to' label)?;

breakClause: 'break' ('from' label)?;

returnClause: 'return' expression?;

throwClause: 'throw' expression;

expression:                  // Precedence (highest to lowest)
    document                                                       #documentExpression     |
    variable                                                       #variableExpression     |
    invocation                                                     #functionExpression     |
    '(' expression ')'                                             #precedenceExpression   |
    '@' expression                                                 #dereferenceExpression  |
    expression '.' invocation                                      #messageExpression      |
    expression indices                                             #componentExpression    |
    expression '!'                                                 #factorialExpression    |
    <assoc=right> expression '^' expression                        #exponentialExpression  |
    op=('-' | '/' | '*') expression                                #inversionExpression    |
    expression op=('*' | '/' | '//' | '+' | '-') expression        #arithmeticExpression   |
    '|' expression '|'                                             #magnitudeExpression    |
    expression op=('<' | '=' | '>' | 'is' | 'matches') expression  #comparisonExpression   |
    'not' expression                                               #complementExpression   |
    expression op=('and' | 'sans' | 'xor' | 'or') expression       #logicalExpression      |
    expression '?' expression                                      #defaultExpression
;

invocation: name parameters;

assignee: symbol | component;

component: variable indices;

indices: '[' array ']';

label: IDENTIFIER;

name: IDENTIFIER;

variable: IDENTIFIER;
