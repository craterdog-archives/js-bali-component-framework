// Generated from grammar/BaliLanguage.g4 by ANTLR 4.7.1
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
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#component.
BaliLanguageVisitor.prototype.visitComponent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#structure.
BaliLanguageVisitor.prototype.visitStructure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#parameters.
BaliLanguageVisitor.prototype.visitParameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#composite.
BaliLanguageVisitor.prototype.visitComposite = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#range.
BaliLanguageVisitor.prototype.visitRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#inlineArray.
BaliLanguageVisitor.prototype.visitInlineArray = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#newlineArray.
BaliLanguageVisitor.prototype.visitNewlineArray = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#emptyArray.
BaliLanguageVisitor.prototype.visitEmptyArray = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#inlineTable.
BaliLanguageVisitor.prototype.visitInlineTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#newlineTable.
BaliLanguageVisitor.prototype.visitNewlineTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#emptyTable.
BaliLanguageVisitor.prototype.visitEmptyTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#association.
BaliLanguageVisitor.prototype.visitAssociation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#task.
BaliLanguageVisitor.prototype.visitTask = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#block.
BaliLanguageVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#inlineProcedure.
BaliLanguageVisitor.prototype.visitInlineProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#newlineProcedure.
BaliLanguageVisitor.prototype.visitNewlineProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#emptyProcedure.
BaliLanguageVisitor.prototype.visitEmptyProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#statement.
BaliLanguageVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#handleClause.
BaliLanguageVisitor.prototype.visitHandleClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#finishClause.
BaliLanguageVisitor.prototype.visitFinishClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#evaluateClause.
BaliLanguageVisitor.prototype.visitEvaluateClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#checkoutClause.
BaliLanguageVisitor.prototype.visitCheckoutClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#saveClause.
BaliLanguageVisitor.prototype.visitSaveClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#discardClause.
BaliLanguageVisitor.prototype.visitDiscardClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#commitClause.
BaliLanguageVisitor.prototype.visitCommitClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#publishClause.
BaliLanguageVisitor.prototype.visitPublishClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#queueClause.
BaliLanguageVisitor.prototype.visitQueueClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#waitClause.
BaliLanguageVisitor.prototype.visitWaitClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#ifClause.
BaliLanguageVisitor.prototype.visitIfClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#selectClause.
BaliLanguageVisitor.prototype.visitSelectClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#whileClause.
BaliLanguageVisitor.prototype.visitWhileClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#withClause.
BaliLanguageVisitor.prototype.visitWithClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#continueClause.
BaliLanguageVisitor.prototype.visitContinueClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#breakClause.
BaliLanguageVisitor.prototype.visitBreakClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#returnClause.
BaliLanguageVisitor.prototype.visitReturnClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#throwClause.
BaliLanguageVisitor.prototype.visitThrowClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#label.
BaliLanguageVisitor.prototype.visitLabel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#variable.
BaliLanguageVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#indices.
BaliLanguageVisitor.prototype.visitIndices = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#defaultExpression.
BaliLanguageVisitor.prototype.visitDefaultExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#messageExpression.
BaliLanguageVisitor.prototype.visitMessageExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#subcomponentExpression.
BaliLanguageVisitor.prototype.visitSubcomponentExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#comparisonExpression.
BaliLanguageVisitor.prototype.visitComparisonExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#arithmeticExpression.
BaliLanguageVisitor.prototype.visitArithmeticExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#magnitudeExpression.
BaliLanguageVisitor.prototype.visitMagnitudeExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#logicalExpression.
BaliLanguageVisitor.prototype.visitLogicalExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#factorialExpression.
BaliLanguageVisitor.prototype.visitFactorialExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#variableExpression.
BaliLanguageVisitor.prototype.visitVariableExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#functionExpression.
BaliLanguageVisitor.prototype.visitFunctionExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#precedenceExpression.
BaliLanguageVisitor.prototype.visitPrecedenceExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#exponentialExpression.
BaliLanguageVisitor.prototype.visitExponentialExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#componentExpression.
BaliLanguageVisitor.prototype.visitComponentExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#inversionExpression.
BaliLanguageVisitor.prototype.visitInversionExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#dereferenceExpression.
BaliLanguageVisitor.prototype.visitDereferenceExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#complementExpression.
BaliLanguageVisitor.prototype.visitComplementExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#invocation.
BaliLanguageVisitor.prototype.visitInvocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#name.
BaliLanguageVisitor.prototype.visitName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#element.
BaliLanguageVisitor.prototype.visitElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#binary.
BaliLanguageVisitor.prototype.visitBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#duration.
BaliLanguageVisitor.prototype.visitDuration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#imaginary.
BaliLanguageVisitor.prototype.visitImaginary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#moment.
BaliLanguageVisitor.prototype.visitMoment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#undefinedNumber.
BaliLanguageVisitor.prototype.visitUndefinedNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#infiniteNumber.
BaliLanguageVisitor.prototype.visitInfiniteNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#realNumber.
BaliLanguageVisitor.prototype.visitRealNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#imaginaryNumber.
BaliLanguageVisitor.prototype.visitImaginaryNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#complexNumber.
BaliLanguageVisitor.prototype.visitComplexNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#percent.
BaliLanguageVisitor.prototype.visitPercent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#trueProbability.
BaliLanguageVisitor.prototype.visitTrueProbability = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#falseProbability.
BaliLanguageVisitor.prototype.visitFalseProbability = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#fractionalProbability.
BaliLanguageVisitor.prototype.visitFractionalProbability = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#constantReal.
BaliLanguageVisitor.prototype.visitConstantReal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#variableReal.
BaliLanguageVisitor.prototype.visitVariableReal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#reference.
BaliLanguageVisitor.prototype.visitReference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#symbol.
BaliLanguageVisitor.prototype.visitSymbol = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#tag.
BaliLanguageVisitor.prototype.visitTag = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#noneTemplate.
BaliLanguageVisitor.prototype.visitNoneTemplate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#anyTemplate.
BaliLanguageVisitor.prototype.visitAnyTemplate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#inlineText.
BaliLanguageVisitor.prototype.visitInlineText = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#newlineText.
BaliLanguageVisitor.prototype.visitNewlineText = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliLanguageParser#version.
BaliLanguageVisitor.prototype.visitVersion = function(ctx) {
  return this.visitChildren(ctx);
};



exports.BaliLanguageVisitor = BaliLanguageVisitor;