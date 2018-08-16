// Generated from grammar/BaliDocument.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by BaliDocumentParser.

function BaliDocumentVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

BaliDocumentVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
BaliDocumentVisitor.prototype.constructor = BaliDocumentVisitor;

// Visit a parse tree produced by BaliDocumentParser#document.
BaliDocumentVisitor.prototype.visitDocument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#body.
BaliDocumentVisitor.prototype.visitBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#seal.
BaliDocumentVisitor.prototype.visitSeal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#component.
BaliDocumentVisitor.prototype.visitComponent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#object.
BaliDocumentVisitor.prototype.visitObject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#structure.
BaliDocumentVisitor.prototype.visitStructure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#parameters.
BaliDocumentVisitor.prototype.visitParameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#collection.
BaliDocumentVisitor.prototype.visitCollection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#range.
BaliDocumentVisitor.prototype.visitRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#inlineList.
BaliDocumentVisitor.prototype.visitInlineList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#newlineList.
BaliDocumentVisitor.prototype.visitNewlineList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#emptyList.
BaliDocumentVisitor.prototype.visitEmptyList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#inlineCatalog.
BaliDocumentVisitor.prototype.visitInlineCatalog = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#newlineCatalog.
BaliDocumentVisitor.prototype.visitNewlineCatalog = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#emptyCatalog.
BaliDocumentVisitor.prototype.visitEmptyCatalog = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#association.
BaliDocumentVisitor.prototype.visitAssociation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#code.
BaliDocumentVisitor.prototype.visitCode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#inlineProcedure.
BaliDocumentVisitor.prototype.visitInlineProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#newlineProcedure.
BaliDocumentVisitor.prototype.visitNewlineProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#emptyProcedure.
BaliDocumentVisitor.prototype.visitEmptyProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#statement.
BaliDocumentVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#mainClause.
BaliDocumentVisitor.prototype.visitMainClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#handleClause.
BaliDocumentVisitor.prototype.visitHandleClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#block.
BaliDocumentVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#evaluateClause.
BaliDocumentVisitor.prototype.visitEvaluateClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#checkoutClause.
BaliDocumentVisitor.prototype.visitCheckoutClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#saveClause.
BaliDocumentVisitor.prototype.visitSaveClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#discardClause.
BaliDocumentVisitor.prototype.visitDiscardClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#commitClause.
BaliDocumentVisitor.prototype.visitCommitClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#publishClause.
BaliDocumentVisitor.prototype.visitPublishClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#queueClause.
BaliDocumentVisitor.prototype.visitQueueClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#waitClause.
BaliDocumentVisitor.prototype.visitWaitClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#ifClause.
BaliDocumentVisitor.prototype.visitIfClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#selectClause.
BaliDocumentVisitor.prototype.visitSelectClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#withClause.
BaliDocumentVisitor.prototype.visitWithClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#whileClause.
BaliDocumentVisitor.prototype.visitWhileClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#continueClause.
BaliDocumentVisitor.prototype.visitContinueClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#breakClause.
BaliDocumentVisitor.prototype.visitBreakClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#returnClause.
BaliDocumentVisitor.prototype.visitReturnClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#throwClause.
BaliDocumentVisitor.prototype.visitThrowClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#recipient.
BaliDocumentVisitor.prototype.visitRecipient = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#subcomponent.
BaliDocumentVisitor.prototype.visitSubcomponent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#defaultExpression.
BaliDocumentVisitor.prototype.visitDefaultExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#messageExpression.
BaliDocumentVisitor.prototype.visitMessageExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#subcomponentExpression.
BaliDocumentVisitor.prototype.visitSubcomponentExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#comparisonExpression.
BaliDocumentVisitor.prototype.visitComparisonExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#arithmeticExpression.
BaliDocumentVisitor.prototype.visitArithmeticExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#magnitudeExpression.
BaliDocumentVisitor.prototype.visitMagnitudeExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#logicalExpression.
BaliDocumentVisitor.prototype.visitLogicalExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#factorialExpression.
BaliDocumentVisitor.prototype.visitFactorialExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#variableExpression.
BaliDocumentVisitor.prototype.visitVariableExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#functionExpression.
BaliDocumentVisitor.prototype.visitFunctionExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#precedenceExpression.
BaliDocumentVisitor.prototype.visitPrecedenceExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#exponentialExpression.
BaliDocumentVisitor.prototype.visitExponentialExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#componentExpression.
BaliDocumentVisitor.prototype.visitComponentExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#inversionExpression.
BaliDocumentVisitor.prototype.visitInversionExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#dereferenceExpression.
BaliDocumentVisitor.prototype.visitDereferenceExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#complementExpression.
BaliDocumentVisitor.prototype.visitComplementExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#variable.
BaliDocumentVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#funxtion.
BaliDocumentVisitor.prototype.visitFunxtion = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#message.
BaliDocumentVisitor.prototype.visitMessage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#indices.
BaliDocumentVisitor.prototype.visitIndices = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#element.
BaliDocumentVisitor.prototype.visitElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#angle.
BaliDocumentVisitor.prototype.visitAngle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#binary.
BaliDocumentVisitor.prototype.visitBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#duration.
BaliDocumentVisitor.prototype.visitDuration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#imaginary.
BaliDocumentVisitor.prototype.visitImaginary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#moment.
BaliDocumentVisitor.prototype.visitMoment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#undefinedNumber.
BaliDocumentVisitor.prototype.visitUndefinedNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#infiniteNumber.
BaliDocumentVisitor.prototype.visitInfiniteNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#realNumber.
BaliDocumentVisitor.prototype.visitRealNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#imaginaryNumber.
BaliDocumentVisitor.prototype.visitImaginaryNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#complexNumber.
BaliDocumentVisitor.prototype.visitComplexNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#percent.
BaliDocumentVisitor.prototype.visitPercent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#falseProbability.
BaliDocumentVisitor.prototype.visitFalseProbability = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#fractionalProbability.
BaliDocumentVisitor.prototype.visitFractionalProbability = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#trueProbability.
BaliDocumentVisitor.prototype.visitTrueProbability = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#constantReal.
BaliDocumentVisitor.prototype.visitConstantReal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#variableReal.
BaliDocumentVisitor.prototype.visitVariableReal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#reference.
BaliDocumentVisitor.prototype.visitReference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#symbol.
BaliDocumentVisitor.prototype.visitSymbol = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#tag.
BaliDocumentVisitor.prototype.visitTag = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#noneTemplate.
BaliDocumentVisitor.prototype.visitNoneTemplate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#anyTemplate.
BaliDocumentVisitor.prototype.visitAnyTemplate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#inlineText.
BaliDocumentVisitor.prototype.visitInlineText = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#newlineText.
BaliDocumentVisitor.prototype.visitNewlineText = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BaliDocumentParser#version.
BaliDocumentVisitor.prototype.visitVersion = function(ctx) {
  return this.visitChildren(ctx);
};



exports.BaliDocumentVisitor = BaliDocumentVisitor;