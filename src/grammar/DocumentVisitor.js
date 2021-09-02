// Generated from src/grammar/Document.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by DocumentParser.

function DocumentVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

DocumentVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
DocumentVisitor.prototype.constructor = DocumentVisitor;

// Visit a parse tree produced by DocumentParser#source.
DocumentVisitor.prototype.visitSource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#document.
DocumentVisitor.prototype.visitDocument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#statement.
DocumentVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#comment.
DocumentVisitor.prototype.visitComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#mainClause.
DocumentVisitor.prototype.visitMainClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#handleClause.
DocumentVisitor.prototype.visitHandleClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#block.
DocumentVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#evaluateClause.
DocumentVisitor.prototype.visitEvaluateClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#saveClause.
DocumentVisitor.prototype.visitSaveClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#discardClause.
DocumentVisitor.prototype.visitDiscardClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#signClause.
DocumentVisitor.prototype.visitSignClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#checkoutClause.
DocumentVisitor.prototype.visitCheckoutClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#publishClause.
DocumentVisitor.prototype.visitPublishClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#postClause.
DocumentVisitor.prototype.visitPostClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#retrieveClause.
DocumentVisitor.prototype.visitRetrieveClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#acceptClause.
DocumentVisitor.prototype.visitAcceptClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#rejectClause.
DocumentVisitor.prototype.visitRejectClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#ifClause.
DocumentVisitor.prototype.visitIfClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#selectClause.
DocumentVisitor.prototype.visitSelectClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#withClause.
DocumentVisitor.prototype.visitWithClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#whileClause.
DocumentVisitor.prototype.visitWhileClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#continueClause.
DocumentVisitor.prototype.visitContinueClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#breakClause.
DocumentVisitor.prototype.visitBreakClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#returnClause.
DocumentVisitor.prototype.visitReturnClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#throwClause.
DocumentVisitor.prototype.visitThrowClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#recipient.
DocumentVisitor.prototype.visitRecipient = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#attribute.
DocumentVisitor.prototype.visitAttribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#defaultExpression.
DocumentVisitor.prototype.visitDefaultExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#messageExpression.
DocumentVisitor.prototype.visitMessageExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#comparisonExpression.
DocumentVisitor.prototype.visitComparisonExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#arithmeticExpression.
DocumentVisitor.prototype.visitArithmeticExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#magnitudeExpression.
DocumentVisitor.prototype.visitMagnitudeExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#logicalExpression.
DocumentVisitor.prototype.visitLogicalExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#factorialExpression.
DocumentVisitor.prototype.visitFactorialExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#variableExpression.
DocumentVisitor.prototype.visitVariableExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#functionExpression.
DocumentVisitor.prototype.visitFunctionExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#attributeExpression.
DocumentVisitor.prototype.visitAttributeExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#precedenceExpression.
DocumentVisitor.prototype.visitPrecedenceExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#exponentialExpression.
DocumentVisitor.prototype.visitExponentialExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#componentExpression.
DocumentVisitor.prototype.visitComponentExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#inversionExpression.
DocumentVisitor.prototype.visitInversionExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#dereferenceExpression.
DocumentVisitor.prototype.visitDereferenceExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#complementExpression.
DocumentVisitor.prototype.visitComplementExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#concatenationExpression.
DocumentVisitor.prototype.visitConcatenationExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#variable.
DocumentVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#funcxion.
DocumentVisitor.prototype.visitFuncxion = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#message.
DocumentVisitor.prototype.visitMessage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#arguments.
DocumentVisitor.prototype.visitArguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#indices.
DocumentVisitor.prototype.visitIndices = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#component.
DocumentVisitor.prototype.visitComponent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#value.
DocumentVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#parameters.
DocumentVisitor.prototype.visitParameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#note.
DocumentVisitor.prototype.visitNote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#sequence.
DocumentVisitor.prototype.visitSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#collection.
DocumentVisitor.prototype.visitCollection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#range.
DocumentVisitor.prototype.visitRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#list.
DocumentVisitor.prototype.visitList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#catalog.
DocumentVisitor.prototype.visitCatalog = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#association.
DocumentVisitor.prototype.visitAssociation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#procedure.
DocumentVisitor.prototype.visitProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#code.
DocumentVisitor.prototype.visitCode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#element.
DocumentVisitor.prototype.visitElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#angle.
DocumentVisitor.prototype.visitAngle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#binary.
DocumentVisitor.prototype.visitBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#bulean.
DocumentVisitor.prototype.visitBulean = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#duration.
DocumentVisitor.prototype.visitDuration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#moment.
DocumentVisitor.prototype.visitMoment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#name.
DocumentVisitor.prototype.visitName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#real.
DocumentVisitor.prototype.visitReal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#imaginary.
DocumentVisitor.prototype.visitImaginary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#number.
DocumentVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#pattern.
DocumentVisitor.prototype.visitPattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#percentage.
DocumentVisitor.prototype.visitPercentage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#probability.
DocumentVisitor.prototype.visitProbability = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#resource.
DocumentVisitor.prototype.visitResource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#symbol.
DocumentVisitor.prototype.visitSymbol = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#tag.
DocumentVisitor.prototype.visitTag = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#text.
DocumentVisitor.prototype.visitText = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DocumentParser#version.
DocumentVisitor.prototype.visitVersion = function(ctx) {
  return this.visitChildren(ctx);
};



exports.DocumentVisitor = DocumentVisitor;