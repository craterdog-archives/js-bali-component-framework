grammar BaliStatements;

import BaliExpressions;


script: SHELL statements EOF;

statements:
    statement (';' statement)* #inlineStatements |
    NEWLINE (statement NEWLINE)* #newlineStatements |
    /*empty statements*/ #emptyStatements
;

statement: mainClause exceptionClause* finalClause?;

exceptionClause: 'catch' symbol 'matching' xception 'with' block;

finalClause: 'finish' 'with' block;

mainClause:
    evaluateExpression |
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

evaluateExpression: (assignee op=(':=' | '?=' | '+=' | '-=' | '*=' | '/=' | '//=' | '^=' | 'a=' | 's=' | 'o=' | 'x='))? expression;

assignee: symbol | component;

component: variable indices;

variable: IDENTIFIER;

indices: '[' array ']';

publishEvent: 'publish' event;

event: expression;

queueMessage: 'queue' message 'on' queue;

waitForMessage: 'wait' 'for' symbol 'from' queue;

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

