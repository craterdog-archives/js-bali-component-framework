grammar BaliClauses;

import BaliExpressions;

mainClause:
    evaluateExpression |
    queueMessage |
    publishEvent |
    waitForEvent |
    continueTo |
    breakFrom |
    returnResult |
    throwException |
    ifThen |
    selectFrom |
    whileLoop |
    withLoop
;

evaluateExpression: (assignee op=(':=' | '?=' | '+=' | '-=' | '*=' | '/=' | '//=' | '^=' | 'a=' | 's=' | 'o=' | 'x='))? expression;

assignee: target | component;

target: symbol;

component: variable indices;

queueMessage: 'queue' message 'for' recipient;

recipient: expression;

publishEvent: 'publish' event;

waitForEvent: 'wait' 'for' symbol 'matching' event;

event: expression;

continueTo: 'continue' ('to' label)?;

breakFrom: 'break' ('from' label)?;

label: IDENTIFIER;

returnResult: 'return' result?;

result: expression;

throwException: 'throw' xception;

xception: expression;

ifThen: 'if' condition 'then' block ('else' 'if' condition 'then' block)* ('else' block)?;

condition: expression;

selectFrom: 'select' selection 'from' (option 'do' block)+ ('else' block)?;

selection: expression;

option: expression;

whileLoop: (label ':')? 'while' condition 'do' block;

withLoop: (label ':')? 'with' ('each' symbol 'in')? sequence 'do' block;

sequence: expression;

