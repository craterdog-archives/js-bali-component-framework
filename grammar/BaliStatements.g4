grammar BaliStatements;
import BaliElements;


script: SHELL statements EOF;

statements:
    statement (';' statement)*    #inlineStatements  |
    NEWLINE (statement NEWLINE)*  #newlineStatements |
    /*empty statements*/ #emptyStatements
;

statement: mainClause exceptionClause* finalClause?;

exceptionClause: 'catch' symbol 'matching' template 'with' block;

template: expression;

finalClause: 'finish' 'with' block;

mainClause:
    evaluateExpression |
    checkoutDocument |
    saveDraft |
    discardDraft |
    commitDocument |
    publishEvent |
    queueMessage |
    waitForMessage |
    ifThen |
    selectFrom |
    whileLoop |
    withLoop |
    continueTo |
    breakFrom |
    returnResult |
    throwException
;

evaluateExpression: (assignee ':=')? expression;

assignee: symbol | component;

component: variable indices;

variable: IDENTIFIER;

indices: '[' array ']';

checkoutDocument: 'checkout' symbol 'from' location;

saveDraft: 'save' draft 'to' location;

discardDraft: 'discard' location;

commitDocument: 'commit' draft 'to' location;

draft: expression;

location: expression;

publishEvent: 'publish' event;

event: expression;

queueMessage: 'queue' message 'on' queue;

waitForMessage: 'wait' 'for' symbol 'from' queue;

message: expression;

queue: expression;

ifThen: 'if' condition 'then' block ('else' 'if' condition 'then' block)* ('else' block)?;

condition: expression;

selectFrom: 'select' selection 'from' (option 'do' block)+ ('else' block)?;

selection: expression;

option: expression;

whileLoop: (label ':')? 'while' condition 'do' block;

withLoop: (label ':')? 'with' ('each' symbol 'in')? sequence 'do' block;

sequence: expression;

continueTo: 'continue' ('to' label)?;

breakFrom: 'break' ('from' label)?;

label: IDENTIFIER;

returnResult: 'return' result?;

result: expression;

throwException: 'throw' xception;

xception: expression;

expression:                  // Precedence (highest to lowest)
    document                                                       #documentExpression     |
    variable                                                       #variableExpression     |
    IDENTIFIER parameters                                          #functionExpression     |
    '(' expression ')'                                             #precedenceExpression   |
    '@' expression                                                 #dereferenceExpression  |
    expression indices                                             #componentExpression    |
    expression '.' IDENTIFIER parameters                           #messageExpression      |
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
