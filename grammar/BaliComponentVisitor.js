// Generated from grammar/BaliComponent.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by BaliComponentParser.

function BaliComponentVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

BaliComponentVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
BaliComponentVisitor.prototype.constructor = BaliComponentVisitor;

// Visit a parse tree produced by BaliComponentParser#component.
BaliComponentVisitor.prototype.visitComponent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#value.
BaliComponentVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#structure.
BaliComponentVisitor.prototype.visitStructure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#parameters.
BaliComponentVisitor.prototype.visitParameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#collection.
BaliComponentVisitor.prototype.visitCollection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#range.
BaliComponentVisitor.prototype.visitRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#inlineList.
BaliComponentVisitor.prototype.visitInlineList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#newlineList.
BaliComponentVisitor.prototype.visitNewlineList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#emptyList.
BaliComponentVisitor.prototype.visitEmptyList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#inlineCatalog.
BaliComponentVisitor.prototype.visitInlineCatalog = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#newlineCatalog.
BaliComponentVisitor.prototype.visitNewlineCatalog = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#emptyCatalog.
BaliComponentVisitor.prototype.visitEmptyCatalog = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#association.
BaliComponentVisitor.prototype.visitAssociation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#source.
BaliComponentVisitor.prototype.visitSource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#inlineProcedure.
BaliComponentVisitor.prototype.visitInlineProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#newlineProcedure.
BaliComponentVisitor.prototype.visitNewlineProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#emptyProcedure.
BaliComponentVisitor.prototype.visitEmptyProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#statement.
BaliComponentVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#mainClause.
BaliComponentVisitor.prototype.visitMainClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#handleClause.
BaliComponentVisitor.prototype.visitHandleClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#block.
BaliComponentVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#evaluateClause.
BaliComponentVisitor.prototype.visitEvaluateClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#checkoutClause.
BaliComponentVisitor.prototype.visitCheckoutClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#saveClause.
BaliComponentVisitor.prototype.visitSaveClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#discardClause.
BaliComponentVisitor.prototype.visitDiscardClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#commitClause.
BaliComponentVisitor.prototype.visitCommitClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#publishClause.
BaliComponentVisitor.prototype.visitPublishClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#queueClause.
BaliComponentVisitor.prototype.visitQueueClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#waitClause.
BaliComponentVisitor.prototype.visitWaitClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#ifClause.
BaliComponentVisitor.prototype.visitIfClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#selectClause.
BaliComponentVisitor.prototype.visitSelectClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#withClause.
BaliComponentVisitor.prototype.visitWithClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#whileClause.
BaliComponentVisitor.prototype.visitWhileClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#continueClause.
BaliComponentVisitor.prototype.visitContinueClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#breakClause.
BaliComponentVisitor.prototype.visitBreakClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#returnClause.
BaliComponentVisitor.prototype.visitReturnClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#throwClause.
BaliComponentVisitor.prototype.visitThrowClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#recipient.
BaliComponentVisitor.prototype.visitRecipient = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#subcomponent.
BaliComponentVisitor.prototype.visitSubcomponent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#defaultExpression.
BaliComponentVisitor.prototype.visitDefaultExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#messageExpression.
BaliComponentVisitor.prototype.visitMessageExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#subcomponentExpression.
BaliComponentVisitor.prototype.visitSubcomponentExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#comparisonExpression.
BaliComponentVisitor.prototype.visitComparisonExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#arithmeticExpression.
BaliComponentVisitor.prototype.visitArithmeticExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#magnitudeExpression.
BaliComponentVisitor.prototype.visitMagnitudeExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#logicalExpression.
BaliComponentVisitor.prototype.visitLogicalExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#factorialExpression.
BaliComponentVisitor.prototype.visitFactorialExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#variableExpression.
BaliComponentVisitor.prototype.visitVariableExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#functionExpression.
BaliComponentVisitor.prototype.visitFunctionExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#precedenceExpression.
BaliComponentVisitor.prototype.visitPrecedenceExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#exponentialExpression.
BaliComponentVisitor.prototype.visitExponentialExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#componentExpression.
BaliComponentVisitor.prototype.visitComponentExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#inversionExpression.
BaliComponentVisitor.prototype.visitInversionExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#dereferenceExpression.
BaliComponentVisitor.prototype.visitDereferenceExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#complementExpression.
BaliComponentVisitor.prototype.visitComplementExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#variable.
BaliComponentVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#funxtion.
BaliComponentVisitor.prototype.visitFunxtion = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#message.
BaliComponentVisitor.prototype.visitMessage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#indices.
BaliComponentVisitor.prototype.visitIndices = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#element.
BaliComponentVisitor.prototype.visitElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#angle.
BaliComponentVisitor.prototype.visitAngle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#binary.
BaliComponentVisitor.prototype.visitBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#duration.
BaliComponentVisitor.prototype.visitDuration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#imaginary.
BaliComponentVisitor.prototype.visitImaginary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#moment.
BaliComponentVisitor.prototype.visitMoment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#undefinedNumber.
BaliComponentVisitor.prototype.visitUndefinedNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#infiniteNumber.
BaliComponentVisitor.prototype.visitInfiniteNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#realNumber.
BaliComponentVisitor.prototype.visitRealNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#imaginaryNumber.
BaliComponentVisitor.prototype.visitImaginaryNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#complexNumber.
BaliComponentVisitor.prototype.visitComplexNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#percent.
BaliComponentVisitor.prototype.visitPercent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#falseProbability.
BaliComponentVisitor.prototype.visitFalseProbability = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#fractionalProbability.
BaliComponentVisitor.prototype.visitFractionalProbability = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#trueProbability.
BaliComponentVisitor.prototype.visitTrueProbability = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#real.
BaliComponentVisitor.prototype.visitReal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#reference.
BaliComponentVisitor.prototype.visitReference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#symbol.
BaliComponentVisitor.prototype.visitSymbol = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#tag.
BaliComponentVisitor.prototype.visitTag = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#noneTemplate.
BaliComponentVisitor.prototype.visitNoneTemplate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#anyTemplate.
BaliComponentVisitor.prototype.visitAnyTemplate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#inlineText.
BaliComponentVisitor.prototype.visitInlineText = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#newlineText.
BaliComponentVisitor.prototype.visitNewlineText = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliComponentParser#version.
BaliComponentVisitor.prototype.visitVersion = function(ctx) {
  return this.visitChildren(ctx);
};



exports.BaliComponentVisitor = BaliComponentVisitor;