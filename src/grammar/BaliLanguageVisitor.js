// Generated from src/grammar/BaliLanguage.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by BaliLanguageParser.

function BaliLanguageVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

BaliLanguageVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
BaliLanguageVisitor.prototype.constructor = BaliLanguageVisitor;

// Visit a parse tree produced by BaliLanguageParser#document.
BaliLanguageVisitor.prototype.visitDocument = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#literal.
BaliLanguageVisitor.prototype.visitLiteral = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#parameters.
BaliLanguageVisitor.prototype.visitParameters = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#structure.
BaliLanguageVisitor.prototype.visitStructure = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#block.
BaliLanguageVisitor.prototype.visitBlock = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#composite.
BaliLanguageVisitor.prototype.visitComposite = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#range.
BaliLanguageVisitor.prototype.visitRange = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#inlineCollection.
BaliLanguageVisitor.prototype.visitInlineCollection = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#newlineCollection.
BaliLanguageVisitor.prototype.visitNewlineCollection = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#emptyCollection.
BaliLanguageVisitor.prototype.visitEmptyCollection = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#inlineTable.
BaliLanguageVisitor.prototype.visitInlineTable = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#newlineTable.
BaliLanguageVisitor.prototype.visitNewlineTable = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#emptyTable.
BaliLanguageVisitor.prototype.visitEmptyTable = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#association.
BaliLanguageVisitor.prototype.visitAssociation = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#key.
BaliLanguageVisitor.prototype.visitKey = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#script.
BaliLanguageVisitor.prototype.visitScript = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#inlineStatements.
BaliLanguageVisitor.prototype.visitInlineStatements = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#newlineStatements.
BaliLanguageVisitor.prototype.visitNewlineStatements = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#emptyStatements.
BaliLanguageVisitor.prototype.visitEmptyStatements = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#statement.
BaliLanguageVisitor.prototype.visitStatement = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#exceptionClause.
BaliLanguageVisitor.prototype.visitExceptionClause = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#finalClause.
BaliLanguageVisitor.prototype.visitFinalClause = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#mainClause.
BaliLanguageVisitor.prototype.visitMainClause = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#evaluateExpression.
BaliLanguageVisitor.prototype.visitEvaluateExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#assignee.
BaliLanguageVisitor.prototype.visitAssignee = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#target.
BaliLanguageVisitor.prototype.visitTarget = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#component.
BaliLanguageVisitor.prototype.visitComponent = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#queueMessage.
BaliLanguageVisitor.prototype.visitQueueMessage = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#recipient.
BaliLanguageVisitor.prototype.visitRecipient = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#publishEvent.
BaliLanguageVisitor.prototype.visitPublishEvent = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#waitForEvent.
BaliLanguageVisitor.prototype.visitWaitForEvent = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#event.
BaliLanguageVisitor.prototype.visitEvent = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#continueTo.
BaliLanguageVisitor.prototype.visitContinueTo = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#breakFrom.
BaliLanguageVisitor.prototype.visitBreakFrom = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#label.
BaliLanguageVisitor.prototype.visitLabel = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#returnResult.
BaliLanguageVisitor.prototype.visitReturnResult = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#result.
BaliLanguageVisitor.prototype.visitResult = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#throwException.
BaliLanguageVisitor.prototype.visitThrowException = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#xception.
BaliLanguageVisitor.prototype.visitXception = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#ifThen.
BaliLanguageVisitor.prototype.visitIfThen = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#condition.
BaliLanguageVisitor.prototype.visitCondition = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#selectFrom.
BaliLanguageVisitor.prototype.visitSelectFrom = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#selection.
BaliLanguageVisitor.prototype.visitSelection = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#option.
BaliLanguageVisitor.prototype.visitOption = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#whileLoop.
BaliLanguageVisitor.prototype.visitWhileLoop = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#withLoop.
BaliLanguageVisitor.prototype.visitWithLoop = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#sequence.
BaliLanguageVisitor.prototype.visitSequence = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#documentExpression.
BaliLanguageVisitor.prototype.visitDocumentExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#defaultExpression.
BaliLanguageVisitor.prototype.visitDefaultExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#messageExpression.
BaliLanguageVisitor.prototype.visitMessageExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#funxionExpression.
BaliLanguageVisitor.prototype.visitFunxionExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#comparisonExpression.
BaliLanguageVisitor.prototype.visitComparisonExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#arithmeticExpression.
BaliLanguageVisitor.prototype.visitArithmeticExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#magnitudeExpression.
BaliLanguageVisitor.prototype.visitMagnitudeExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#logicalExpression.
BaliLanguageVisitor.prototype.visitLogicalExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#factorialExpression.
BaliLanguageVisitor.prototype.visitFactorialExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#variableExpression.
BaliLanguageVisitor.prototype.visitVariableExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#precedenceExpression.
BaliLanguageVisitor.prototype.visitPrecedenceExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#exponentialExpression.
BaliLanguageVisitor.prototype.visitExponentialExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#componentExpression.
BaliLanguageVisitor.prototype.visitComponentExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#inversionExpression.
BaliLanguageVisitor.prototype.visitInversionExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#dereferenceExpression.
BaliLanguageVisitor.prototype.visitDereferenceExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#complementExpression.
BaliLanguageVisitor.prototype.visitComplementExpression = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#variable.
BaliLanguageVisitor.prototype.visitVariable = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#funxion.
BaliLanguageVisitor.prototype.visitFunxion = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#message.
BaliLanguageVisitor.prototype.visitMessage = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#indices.
BaliLanguageVisitor.prototype.visitIndices = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#element.
BaliLanguageVisitor.prototype.visitElement = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#noneAny.
BaliLanguageVisitor.prototype.visitNoneAny = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#anyAny.
BaliLanguageVisitor.prototype.visitAnyAny = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#tag.
BaliLanguageVisitor.prototype.visitTag = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#symbol.
BaliLanguageVisitor.prototype.visitSymbol = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#time.
BaliLanguageVisitor.prototype.visitTime = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#reference.
BaliLanguageVisitor.prototype.visitReference = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#version.
BaliLanguageVisitor.prototype.visitVersion = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#inlineText.
BaliLanguageVisitor.prototype.visitInlineText = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#blockText.
BaliLanguageVisitor.prototype.visitBlockText = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#binary.
BaliLanguageVisitor.prototype.visitBinary = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#trueProbability.
BaliLanguageVisitor.prototype.visitTrueProbability = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#falseProbability.
BaliLanguageVisitor.prototype.visitFalseProbability = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#fractionalProbability.
BaliLanguageVisitor.prototype.visitFractionalProbability = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#percent.
BaliLanguageVisitor.prototype.visitPercent = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#constantReal.
BaliLanguageVisitor.prototype.visitConstantReal = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#variableReal.
BaliLanguageVisitor.prototype.visitVariableReal = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#imaginary.
BaliLanguageVisitor.prototype.visitImaginary = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#undefinedNumber.
BaliLanguageVisitor.prototype.visitUndefinedNumber = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#infiniteNumber.
BaliLanguageVisitor.prototype.visitInfiniteNumber = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#realNumber.
BaliLanguageVisitor.prototype.visitRealNumber = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#imaginaryNumber.
BaliLanguageVisitor.prototype.visitImaginaryNumber = function(ctx) {
};


// Visit a parse tree produced by BaliLanguageParser#complexNumber.
BaliLanguageVisitor.prototype.visitComplexNumber = function(ctx) {
};



exports.BaliLanguageVisitor = BaliLanguageVisitor;