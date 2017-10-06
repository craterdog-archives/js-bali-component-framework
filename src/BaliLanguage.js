var antlr4 = require('antlr4/index');
var BaliLanguageLexer = require('../src/BaliLanguageLexer').BaliLanguageLexer;
var BaliLanguageParser = require('../src/BaliLanguageParser').BaliLanguageParser;
var BaliLanguageVisitor = require('../src/BaliLanguageVisitor').BaliLanguageVisitor;


// These utility functions parse and format Bali Language Documents

function parseDocument(document) {
    var chars = new antlr4.InputStream(document);
    var lexer = new BaliLanguageLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.document();
    return tree;
}

function formatDocument(document) {
    return formatDocument(document, '');
}

function formatDocument(document, indentation) {
    this.visitor = new FormattingVisitor(indentation);
    document.accept(this.visitor);
    return this.visitor.buffer + '\n';  // POSIX requires all lines end with a line feed
}

exports.parseDocument = parseDocument;
exports.formatDocument = formatDocument;


// This helper class defines a formatting visitor for a parse tree produced by BaliLanguageParser.

function FormattingVisitor(indentation) {
    BaliLanguageVisitor.call(this);
    this.indentation = indentation === undefined ? '' : indentation;
    this.buffer = '';
    this.depth = 0;
    return this;
}

FormattingVisitor.prototype = Object.create(BaliLanguageVisitor.prototype);
FormattingVisitor.prototype.constructor = FormattingVisitor;
FormattingVisitor.prototype.pad = '    ';  // padding per indentation level


// private helper methods

FormattingVisitor.prototype.appendNewline = function() {
    this.buffer += '\n';
    this.buffer += this.getPadding();
};

FormattingVisitor.prototype.getPadding = function() {
    var padding = this.indentation;
    for (var i = 0; i < this.depth; i++) {
        padding += FormattingVisitor.prototype.pad;
    }
    return padding;
};


// document: literal parameters?
FormattingVisitor.prototype.visitDocument = function(ctx) {
    this.visitLiteral(ctx.literal());
    var parameters = ctx.parameters();
    if (parameters) {
        this.visitParameters(parameters);
    }
};


// literal: element | structure | block
FormattingVisitor.prototype.visitLiteral = function(ctx) {
    this.visitChildren(ctx);
};


// structure: '[' composite ']'
FormattingVisitor.prototype.visitStructure = function(ctx) {
    this.buffer += '[';
    this.visitComposite(ctx.composite());
    this.buffer += ']';
};


// composite: range | collection | table
FormattingVisitor.prototype.visitComposite = function(ctx) {
    this.visitChildren(ctx);
};


// range: expression '..' expression
FormattingVisitor.prototype.visitRange = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.buffer += '..';
    this.visitExpression(ctx.expression(1));
};


// HACK: this method is missing from the generated visitor!
// SEE: https://stackoverflow.com/questions/36758475/antlr4-javascript-target-issue-with-visitor-and-labeled-alternative
FormattingVisitor.prototype.visitCollection = function(ctx) {
    ctx.accept(this);
};


// inlineCollection: expression (',' expression)*
FormattingVisitor.prototype.visitInlineCollection = function(ctx) {
    var expressions = ctx.expression();  // retrieve all the expressions
    this.visitExpression(expressions[0]);
    for (var i = 1; i < expressions.length; i++) {
        this.buffer += ', ';
        this.visitExpression(expressions[i]);
    }
};


// newlineCollection: NEWLINE (expression NEWLINE)*
FormattingVisitor.prototype.visitNewlineCollection = function(ctx) {
    var expressions = ctx.expression();  // retrieve all the expressions
    this.depth++;
    for (var i = 0; i < expressions.length; i++) {
        this.appendNewline();
        this.visitExpression(expressions[i]);
    }
    this.depth--;
    this.appendNewline();
};


// emptyCollection: /*empty collection*/
FormattingVisitor.prototype.visitEmptyCollection = function(ctx) {
};


// HACK: this method is missing from the generated visitor!
FormattingVisitor.prototype.visitTable = function(ctx) {
    ctx.accept(this);
};


// inlineTable: association (',' association)*
FormattingVisitor.prototype.visitInlineTable = function(ctx) {
    var associations = ctx.association();  // retrieve all the associations
    this.visitAssociation(associations[0]);
    for (var i = 1; i < associations.length; i++) {
        this.buffer += ', ';
        this.visitAssociation(associations[i]);
    }
};


// newlineTable: NEWLINE (association NEWLINE)*
FormattingVisitor.prototype.visitNewlineTable = function(ctx) {
    var associations = ctx.association();  // retrieve all the associations
    this.depth++;
    for (var i = 0; i < associations.length; i++) {
        this.appendNewline();
        this.visitAssociation(associations[i]);
    }
    this.depth--;
    this.appendNewline();
};


// emptyTable: ':' /*empty table*/
FormattingVisitor.prototype.visitEmptyTable = function(ctx) {
    this.buffer += ':';
};


// association: key ':' expression
FormattingVisitor.prototype.visitAssociation = function(ctx) {
    this.visitKey(ctx.key());
    this.buffer += ': ';
    this.visitExpression(ctx.expression());
};


// key: element parameters?
FormattingVisitor.prototype.visitKey = function(ctx) {
    this.visitElement(ctx.element());
    var parameters = ctx.parameters();
    if (parameters) {
        this.visitParameters(parameters);
    }
};


// parameters: '(' composite ')';
FormattingVisitor.prototype.visitParameters = function(ctx) {
    this.buffer += '(';
    this.visitComposite(ctx.composite());
    this.buffer += ')';
};


// script: SHELL statements EOF
FormattingVisitor.prototype.visitScript = function(ctx) {
    this.buffer += ctx.SHELL().getText();
    this.visitStatements(ctx.statements());
    this.buffer += ctx.EOF().getText();
};


// block: '{' statements '}'
FormattingVisitor.prototype.visitBlock = function(ctx) {
    this.buffer += '{';
    this.visitStatements(ctx.statements());
    this.buffer += '}';
};


// HACK: this method is missing from the generated visitor!
FormattingVisitor.prototype.visitStatements = function(ctx) {
    ctx.accept(this);
};


// inlineStatements: statement (';' statement)*
FormattingVisitor.prototype.visitInlineStatements = function(ctx) {
    var statements = ctx.statement();  // retrieve all the statements
    this.visitStatement(statements[0]);
    for (var i = 1; i < statements.length; i++) {
        this.buffer += '; ';
        this.visitStatement(statements[i]);
    }
};


// newlineStatements: NEWLINE (statement NEWLINE)*
FormattingVisitor.prototype.visitNewlineStatements = function(ctx) {
    var statements = ctx.statement();  // retrieve all the statements
    this.depth++;
    for (var i = 0; i < statements.length; i++) {
        this.appendNewline();
        this.visitStatement(statements[i]);
    }
    this.depth--;
    this.appendNewline();
};


// emptyStatements: /*empty statements*/
FormattingVisitor.prototype.visitEmptyStatements = function(ctx) {
};


// statement: mainClause exceptionClause* finalClause?
FormattingVisitor.prototype.visitStatement = function(ctx) {
    this.visitMainClause(ctx.mainClause());
    var exceptionClauses = ctx.exceptionClause();
    for (var i = 0; i < exceptionClauses.length; i++) {
        this.visitExceptionClause(exceptionClauses[i]);
    }
    var finalClause = ctx.finalClause();
    if (finalClause) {
        this.visitFinalClause(finalClause);
    }
};


// mainClause: evaluateExpression | queueMessage | publishEvent | waitForEvent |
// continueTo | breakFrom | returnResult | throwException | ifThen | selectFrom |
// whileLoop | withLoop
FormattingVisitor.prototype.visitMainClause = function(ctx) {
    this.visitChildren(ctx);
};


// exceptionClause: 'catch' symbol 'matching' xception 'with' block
FormattingVisitor.prototype.visitExceptionClause = function(ctx) {
    this.buffer += ' catch ';
    this.visitSymbol(ctx.symbol());
    this.buffer += ' matching ';
    this.visitException(ctx.xception());
    this.buffer += ' with ';
    this.visitBlock(ctx.block());
};



// finalClause: 'finish' 'with' block
FormattingVisitor.prototype.visitFinalClause = function(ctx) {
    this.buffer += ' finish with ';
    this.visitBlock(ctx.block());
};


// evaluateExpression: (assignee op=(':=' | '?=' | '+=' | '-=' | '*=' | '/=' |
// '//=' | '^=' | 'a=' | 's=' | 'o=' | 'x='))? expression
FormattingVisitor.prototype.visitEvaluateExpression = function(ctx) {
    var assignee = ctx.assignee();
    if (assignee) {
        this.visitAssignee(assignee);
        this.buffer += ' ';
        this.buffer += ctx.op.text;
        this.buffer += ' ';
    }
    this.visitExpression(ctx.expression());
};


// assignee: target | component
FormattingVisitor.prototype.visitAssignee = function(ctx) {
    this.visitChildren(ctx);
};


// target: symbol
FormattingVisitor.prototype.visitTarget = function(ctx) {
    this.visitSymbol(ctx.symbol());
};


// component: variable indices
FormattingVisitor.prototype.visitComponent = function(ctx) {
    this.visitVariable(ctx.variable());
    this.visitIndices(ctx.indices());
};


// queueMessage: 'queue' message 'for' recipient
FormattingVisitor.prototype.visitQueueMessage = function(ctx) {
    this.buffer += 'queue ';
    this.visitMessage(ctx.message());
    this.buffer += ' for ';
    this.visitRecipient(ctx.recipient());
};


// recipient: expression
FormattingVisitor.prototype.visitRecipient = function(ctx) {
    this.visitExpression(ctx.expression());
};


// publishEvent: 'publish' event
FormattingVisitor.prototype.visitPublishEvent = function(ctx) {
    this.buffer += 'publish ';
    this.visitEvent(ctx.event());
};


// waitForEvent: 'wait' 'for' symbol 'matching' event
FormattingVisitor.prototype.visitWaitForEvent = function(ctx) {
    this.buffer += 'wait for ';
    this.visitSymbol(ctx.symbol());
    this.buffer += ' matching ';
    this.visitEvent(ctx.event());
};


// event: expression
FormattingVisitor.prototype.visitEvent = function(ctx) {
    this.visitExpression(ctx.expression());
};


// continueTo: 'continue' ('to' label)?
FormattingVisitor.prototype.visitContinueTo = function(ctx) {
    this.buffer += 'continue';
    var label = ctx.label();
    if (label) {
        this.buffer += ' to ';
        this.visitLabel(label);
    }
};


// breakFrom: 'break' ('from' label)?
FormattingVisitor.prototype.visitBreakFrom = function(ctx) {
    this.buffer += 'break';
    var label = ctx.label();
    if (label) {
        this.buffer += ' from ';
        this.visitLabel(label);
    }
};


// label: name
FormattingVisitor.prototype.visitLabel = function(ctx) {
    this.visitName(ctx.name());
};


// returnResult: 'return' result?
FormattingVisitor.prototype.visitReturnResult = function(ctx) {
    this.buffer += 'return';
    var result = ctx.result();
    if (result) {
        this.buffer += ' ';
        this.visitResult(result);
    }
};


// result: expression
FormattingVisitor.prototype.visitResult = function(ctx) {
    this.visitExpression(ctx.expression());
};


// throwException: 'throw' xception
FormattingVisitor.prototype.visitThrowException = function(ctx) {
    this.buffer += 'throw ';
    this.visitException(ctx.xception());
};


// xception: expression
FormattingVisitor.prototype.visitException = function(ctx) {
    this.visitExpression(ctx.expression());
};


// ifThen: 'if' condition 'then' block ('else' 'if' condition 'then' block)* ('else' block)?
FormattingVisitor.prototype.visitIfThen = function(ctx) {
    var conditions = ctx.condition();
    var blocks = ctx.block();

    // handle first condition
    this.buffer += 'if ';
    this.visitCondition(conditions[0]);
    this.buffer += ' then ';
    this.visitBlock(blocks[0]);

    // handle optional additional conditions
    for (var i = 1; i < conditions.length; i++) {
        this.buffer += ' else if ';
        this.visitCondition(conditions[i]);
        this.buffer += ' then ';
        this.visitBlock(blocks[i]);
    }

    // handle the optional final else block
    if (blocks.length > conditions.length) {
        this.buffer += ' else ';
        this.visitBlock(blocks[blocks.length - 1]);
    }
};


// condition: expression
FormattingVisitor.prototype.visitCondition = function(ctx) {
    this.visitExpression(ctx.expression());
};


// selectFrom: 'select' selection 'from' (option 'do' block)+ ('else' block)?
FormattingVisitor.prototype.visitSelectFrom = function(ctx) {
    var options = ctx.option();
    var blocks = ctx.block();

    // handle the selection
    this.buffer += 'select ';
    this.visitSelection(ctx.selection());
    this.buffer += ' from';

    // handle option blocks
    for (var i = 0; i < options.length; i++) {
        this.buffer += ' ';
        this.visitOption(options[i]);
        this.buffer += ' do ';
        this.visitBlock(blocks[i]);
    }

    // handle the optional final else block
    if (blocks.length > options.length) {
        this.buffer += ' else ';
        this.visitBlock(blocks[blocks.length - 1]);
    }
};


// selection: expression
FormattingVisitor.prototype.visitSelection = function(ctx) {
    this.visitExpression(ctx.expression());
};


// option: expression
FormattingVisitor.prototype.visitOption = function(ctx) {
    this.visitExpression(ctx.expression());
};


// whileLoop: (label ':')? 'while' condition 'do' block
FormattingVisitor.prototype.visitWhileLoop = function(ctx) {
    var label = ctx.label();
    if (label) {
        this.visitLabel(label);
        this.buffer += ': ';
    }
    this.buffer += 'while ';
    this.visitCondition(ctx.condition());
    this.buffer += ' do ';
    this.visitBlock(ctx.block());
};


// withLoop: (label ':')? 'with' ('each' symbol 'in')? sequence 'do' block
FormattingVisitor.prototype.visitWithLoop = function(ctx) {
    var label = ctx.label();
    if (label) {
        this.visitLabel(label);
        this.buffer += ': ';
    }
    this.buffer += 'with ';
    var symbol = ctx.symbol();
    if (symbol) {
        this.buffer += 'each ';
        this.visitSymbol(symbol);
        this.buffer += ' in ';
    }
    this.visitSequence(ctx.sequence());
    this.buffer += ' do ';
    this.visitBlock(ctx.block());
};


// sequence: expression
FormattingVisitor.prototype.visitSequence = function(ctx) {
    this.visitExpression(ctx.expression());
};


// HACK: this method is missing from the generated visitor!
FormattingVisitor.prototype.visitExpression = function(ctx) {
    ctx.accept(this);
};


// documentExpression: document
FormattingVisitor.prototype.visitDocumentExpression = function(ctx) {
    this.visitDocument(ctx.document());
};


// variableExpression: variable
FormattingVisitor.prototype.visitVariableExpression = function(ctx) {
    this.visitVariable(ctx.variable());
};


// funxionExpression: funxion
FormattingVisitor.prototype.visitFunxionExpression = function(ctx) {
    this.visitFunxion(ctx.funxion());
};


// precedenceExpression: '(' expression ')'
FormattingVisitor.prototype.visitPrecedenceExpression = function(ctx) {
    this.buffer += '(';
    this.visitExpression(ctx.expression());
    this.buffer += ')';
};


// dereferenceExpression: '@' expression
FormattingVisitor.prototype.visitDereferenceExpression = function(ctx) {
    this.buffer += '@';
    this.visitExpression(ctx.expression());
};


// componentExpression: expression indices
FormattingVisitor.prototype.visitComponentExpression = function(ctx) {
    this.visitExpression(ctx.expression());
    this.visitIndices(ctx.indices());
};


// messageExpression: expression '.' message
FormattingVisitor.prototype.visitMessageExpression = function(ctx) {
    this.visitExpression(ctx.expression());
    this.buffer += '.';
    this.visitMessage(ctx.message());
};


// factorialExpression: expression '!'
FormattingVisitor.prototype.visitFactorialExpression = function(ctx) {
    this.visitExpression(ctx.expression());
    this.buffer += '!';
};


// exponentialExpression: <assoc=right> expression '^' expression
FormattingVisitor.prototype.visitExponentialExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.buffer += ' ^ ';
    this.visitExpression(ctx.expression(1));
};


// inversionExpression: op=('-' | '/' | '*') expression
FormattingVisitor.prototype.visitInversionExpression = function(ctx) {
    var operation = ctx.op.text;
    var expression = ctx.expression();
    this.buffer += operation;
    if (operation === '-') {
        if (expression.getText()[0] === "-") {
            this.buffer += ' ';  // must insert a space before a negative value!
        }
    }
    this.visitExpression(ctx.expression());
};


// arithmeticExpression: expression op=('*' | '/' | '//' | '+' | '-') expression
FormattingVisitor.prototype.visitArithmeticExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.buffer += ' ';
    this.buffer += ctx.op.text;
    this.buffer += ' ';
    this.visitExpression(ctx.expression(1));
};


// magnitudeExpression: '|' expression '|'
FormattingVisitor.prototype.visitMagnitudeExpression = function(ctx) {
    this.buffer += '|';
    this.visitExpression(ctx.expression());
    this.buffer += '|';
};


// comparisonExpression: expression op=('<' | '=' | '>' | 'is' | 'matches') expression
FormattingVisitor.prototype.visitComparisonExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.buffer += ' ';
    this.buffer += ctx.op.text;
    this.buffer += ' ';
    this.visitExpression(ctx.expression(1));
};


// complementExpression: 'not' expression
FormattingVisitor.prototype.visitComplementExpression = function(ctx) {
    this.buffer += 'not ';
    this.visitExpression(ctx.expression());
};


// logicalExpression: expression op=('and' | 'sans' | 'xor' | 'or') expression
FormattingVisitor.prototype.visitLogicalExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.buffer += ' ';
    this.buffer += ctx.op.text;
    this.buffer += ' ';
    this.visitExpression(ctx.expression(1));
};


// defaultExpression: expression '?' expression
FormattingVisitor.prototype.visitDefaultExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.buffer += ' ? ';
    this.visitExpression(ctx.expression(1));
};


// variable: name
FormattingVisitor.prototype.visitVariable = function(ctx) {
    this.visitName(ctx.name());
};


// funxion: name parameters
FormattingVisitor.prototype.visitFunxion = function(ctx) {
    this.visitName(ctx.name());
    this.visitParameters(ctx.parameters());
};


// message: name parameters
FormattingVisitor.prototype.visitMessage = function(ctx) {
    this.visitName(ctx.name());
    this.visitParameters(ctx.parameters());
};


// indices: structure
FormattingVisitor.prototype.visitIndices = function(ctx) {
    this.visitStructure(ctx.structure());
};


// element: any | tag | symbol | time | reference | version | text | binary |
//  probability | percent | number
FormattingVisitor.prototype.visitElement = function(ctx) {
    this.visitChildren(ctx);
};


// noneAny: 'none'
FormattingVisitor.prototype.visitNoneAny = function(ctx) {
    this.buffer += 'none';
};


// anyAny: 'any'
FormattingVisitor.prototype.visitAnyAny = function(ctx) {
    this.buffer += 'any';
};


// tag: TAG
FormattingVisitor.prototype.visitTag = function(ctx) {
    this.buffer += ctx.TAG().getText();
};


// symbol: SYMBOL
FormattingVisitor.prototype.visitSymbol = function(ctx) {
    this.buffer += ctx.SYMBOL().getText();
};


// time: TIME
FormattingVisitor.prototype.visitTime = function(ctx) {
    this.buffer += ctx.TIME().getText();
};


// reference: RESOURCE
FormattingVisitor.prototype.visitReference = function(ctx) {
    this.buffer += ctx.RESOURCE().getText();
};


// version: VERSION
FormattingVisitor.prototype.visitVersion = function(ctx) {
    this.buffer += ctx.VERSION().getText();
};


// HACK: this method is missing from the generated visitor!
FormattingVisitor.prototype.visitText = function(ctx) {
    ctx.accept(this);
};


// inlineText: TEXT
FormattingVisitor.prototype.visitInlineText = function(ctx) {
    this.buffer += ctx.TEXT().getText();
};


// blockText: TEXT_BLOCK
FormattingVisitor.prototype.visitBlockText = function(ctx) {
    this.buffer += ctx.TEXT_BLOCK().getText();
};


// binary: BINARY
FormattingVisitor.prototype.visitBinary = function(ctx) {
    this.buffer += ctx.BINARY().getText();
};


// HACK: this method is missing from the generated visitor!
FormattingVisitor.prototype.visitProbability = function(ctx) {
    ctx.accept(this);
};


// trueProbability: 'true'
FormattingVisitor.prototype.visitTrueProbability = function(ctx) {
    this.buffer += 'true';
};


// falseProbability: 'false'
FormattingVisitor.prototype.visitFalseProbability = function(ctx) {
    this.buffer += 'false';
};


// fractionalProbability: FRACTION
FormattingVisitor.prototype.visitFractionalProbability = function(ctx) {
    this.buffer += ctx.FRACTION().getText();
};


// percent: real '%'
FormattingVisitor.prototype.visitPercent = function(ctx) {
    this.visitReal(ctx.real());
    this.buffer += '%';
};


// HACK: this method is missing from the generated visitor!
FormattingVisitor.prototype.visitReal = function(ctx) {
    ctx.accept(this);
};


// constantReal: sign='-'? con=('e' | 'pi' | 'phi')
FormattingVisitor.prototype.visitConstantReal = function(ctx) {
    if (ctx.sign) {
        this.buffer += '-';
    }
    this.buffer += ctx.con.text;
};


// variableReal: FLOAT
FormattingVisitor.prototype.visitVariableReal = function(ctx) {
    this.buffer += ctx.FLOAT().getText();
};


// imaginary: (real | sign='-')? 'i'
FormattingVisitor.prototype.visitImaginary = function(ctx) {
    var real = ctx.real();
    var sign = ctx.sign;
    if (real) {
        this.visitReal(real);
        if (real.con) {
            this.buffer += ' ';
        }
    } else if (sign) {
        this.buffer += '-';
    }
    this.buffer += 'i';
};


// HACK: this method is missing from the generated visitor!
FormattingVisitor.prototype.visitNumber = function(ctx) {
    ctx.accept(this);
};


// undefinedNumber: 'undefined'
FormattingVisitor.prototype.visitUndefinedNumber = function(ctx) {
    this.buffer += 'undefined';
};


// infiniteNumber: 'infinity'
FormattingVisitor.prototype.visitInfiniteNumber = function(ctx) {
    this.buffer += 'infinity';
};


// realNumber: real
FormattingVisitor.prototype.visitRealNumber = function(ctx) {
    this.visitReal(ctx.real());
};


// imaginaryNumber: imaginary
FormattingVisitor.prototype.visitImaginaryNumber = function(ctx) {
    this.visitImaginary(ctx.imaginary());
};


// complexNumber: '(' real del=(',' | 'e^') imaginary ')'
FormattingVisitor.prototype.visitComplexNumber = function(ctx) {
    this.buffer += '(';
    this.visitReal(ctx.real());
    var delimiter = ctx.del.text;
    this.buffer += delimiter;
    if (delimiter === ',') {
        this.buffer += " ";
    }
    this.visitImaginary(ctx.imaginary());
    this.buffer += ')';
};


// name: IDENTIFIER
FormattingVisitor.prototype.visitName = function(ctx) {
    this.buffer += ctx.IDENTIFIER().getText();
};
