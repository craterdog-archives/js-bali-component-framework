grammar BaliStatements;

import BaliExpressions;

script: SHELL (statement)* EOF;

block: '{' statements '}';

statements:
    newline (statement newline)* |
    // empty
;

statement: mainClause exceptionClause* finalClause? ;

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

exceptionClause: 'catch' symbol 'matching' exception 'with' block ;

exception: expression ;

finalClause: 'finish' 'with' block ;

evaluateExpression: (assignee (':=' | '?=' | '+=' | '-=' | '*=' | '/=' | '//=' | '^=' | 'a=' | 's=' | 'o=' | 'x='))? expression ;

assignee: target | item ;

target: symbol ;

item: variable '[' indexes ']' ;

queueMessage: 'queue' message '(' arguments? ')' 'for' recipient ;

recipient: expression ;

publishEvent: 'publish' event ;

waitForEvent: 'wait' 'for' symbol 'matching' event ;

event: expression ;

continueTo: 'continue' ('to' label)? ;

breakFrom: 'break' ('from' label)? ;

label: name ;

returnResult: 'return' result? ;

result: expression ;

throwException: 'throw' exception ;

ifThen: 'if' condition 'then' block ('else' 'if' condition 'then' block)* ('else' block)? ;

condition: expression ;

selectFrom: 'select' selection 'from' (option 'do' block)+ ('else' block)? ;

selection: expression ;

option: expression ;

whileLoop: (label ':')? 'while' condition 'do' block ;

withLoop: (label ':')? 'with' ('each' symbol 'in')? sequence 'do' block ;

sequence: expression ;

