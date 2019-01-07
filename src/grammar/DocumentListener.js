// Generated from src/grammar/Document.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by DocumentParser.
function DocumentListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

DocumentListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
DocumentListener.prototype.constructor = DocumentListener;

// Enter a parse tree produced by DocumentParser#document.
DocumentListener.prototype.enterDocument = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#document.
DocumentListener.prototype.exitDocument = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#component.
DocumentListener.prototype.enterComponent = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#component.
DocumentListener.prototype.exitComponent = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#value.
DocumentListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#value.
DocumentListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#structure.
DocumentListener.prototype.enterStructure = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#structure.
DocumentListener.prototype.exitStructure = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#parameters.
DocumentListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#parameters.
DocumentListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#collection.
DocumentListener.prototype.enterCollection = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#collection.
DocumentListener.prototype.exitCollection = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#range.
DocumentListener.prototype.enterRange = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#range.
DocumentListener.prototype.exitRange = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#inlineList.
DocumentListener.prototype.enterInlineList = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#inlineList.
DocumentListener.prototype.exitInlineList = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#newlineList.
DocumentListener.prototype.enterNewlineList = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#newlineList.
DocumentListener.prototype.exitNewlineList = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#emptyList.
DocumentListener.prototype.enterEmptyList = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#emptyList.
DocumentListener.prototype.exitEmptyList = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#inlineCatalog.
DocumentListener.prototype.enterInlineCatalog = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#inlineCatalog.
DocumentListener.prototype.exitInlineCatalog = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#newlineCatalog.
DocumentListener.prototype.enterNewlineCatalog = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#newlineCatalog.
DocumentListener.prototype.exitNewlineCatalog = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#emptyCatalog.
DocumentListener.prototype.enterEmptyCatalog = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#emptyCatalog.
DocumentListener.prototype.exitEmptyCatalog = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#association.
DocumentListener.prototype.enterAssociation = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#association.
DocumentListener.prototype.exitAssociation = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#source.
DocumentListener.prototype.enterSource = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#source.
DocumentListener.prototype.exitSource = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#inlineProcedure.
DocumentListener.prototype.enterInlineProcedure = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#inlineProcedure.
DocumentListener.prototype.exitInlineProcedure = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#newlineProcedure.
DocumentListener.prototype.enterNewlineProcedure = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#newlineProcedure.
DocumentListener.prototype.exitNewlineProcedure = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#emptyProcedure.
DocumentListener.prototype.enterEmptyProcedure = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#emptyProcedure.
DocumentListener.prototype.exitEmptyProcedure = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#statement.
DocumentListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#statement.
DocumentListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#mainClause.
DocumentListener.prototype.enterMainClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#mainClause.
DocumentListener.prototype.exitMainClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#handleClause.
DocumentListener.prototype.enterHandleClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#handleClause.
DocumentListener.prototype.exitHandleClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#block.
DocumentListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#block.
DocumentListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#evaluateClause.
DocumentListener.prototype.enterEvaluateClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#evaluateClause.
DocumentListener.prototype.exitEvaluateClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#checkoutClause.
DocumentListener.prototype.enterCheckoutClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#checkoutClause.
DocumentListener.prototype.exitCheckoutClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#saveClause.
DocumentListener.prototype.enterSaveClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#saveClause.
DocumentListener.prototype.exitSaveClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#discardClause.
DocumentListener.prototype.enterDiscardClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#discardClause.
DocumentListener.prototype.exitDiscardClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#commitClause.
DocumentListener.prototype.enterCommitClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#commitClause.
DocumentListener.prototype.exitCommitClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#publishClause.
DocumentListener.prototype.enterPublishClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#publishClause.
DocumentListener.prototype.exitPublishClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#queueClause.
DocumentListener.prototype.enterQueueClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#queueClause.
DocumentListener.prototype.exitQueueClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#waitClause.
DocumentListener.prototype.enterWaitClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#waitClause.
DocumentListener.prototype.exitWaitClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#ifClause.
DocumentListener.prototype.enterIfClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#ifClause.
DocumentListener.prototype.exitIfClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#selectClause.
DocumentListener.prototype.enterSelectClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#selectClause.
DocumentListener.prototype.exitSelectClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#withClause.
DocumentListener.prototype.enterWithClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#withClause.
DocumentListener.prototype.exitWithClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#whileClause.
DocumentListener.prototype.enterWhileClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#whileClause.
DocumentListener.prototype.exitWhileClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#continueClause.
DocumentListener.prototype.enterContinueClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#continueClause.
DocumentListener.prototype.exitContinueClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#breakClause.
DocumentListener.prototype.enterBreakClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#breakClause.
DocumentListener.prototype.exitBreakClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#returnClause.
DocumentListener.prototype.enterReturnClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#returnClause.
DocumentListener.prototype.exitReturnClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#throwClause.
DocumentListener.prototype.enterThrowClause = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#throwClause.
DocumentListener.prototype.exitThrowClause = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#recipient.
DocumentListener.prototype.enterRecipient = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#recipient.
DocumentListener.prototype.exitRecipient = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#subcomponent.
DocumentListener.prototype.enterSubcomponent = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#subcomponent.
DocumentListener.prototype.exitSubcomponent = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#defaultExpression.
DocumentListener.prototype.enterDefaultExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#defaultExpression.
DocumentListener.prototype.exitDefaultExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#messageExpression.
DocumentListener.prototype.enterMessageExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#messageExpression.
DocumentListener.prototype.exitMessageExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#subcomponentExpression.
DocumentListener.prototype.enterSubcomponentExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#subcomponentExpression.
DocumentListener.prototype.exitSubcomponentExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#comparisonExpression.
DocumentListener.prototype.enterComparisonExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#comparisonExpression.
DocumentListener.prototype.exitComparisonExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#arithmeticExpression.
DocumentListener.prototype.enterArithmeticExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#arithmeticExpression.
DocumentListener.prototype.exitArithmeticExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#magnitudeExpression.
DocumentListener.prototype.enterMagnitudeExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#magnitudeExpression.
DocumentListener.prototype.exitMagnitudeExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#logicalExpression.
DocumentListener.prototype.enterLogicalExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#logicalExpression.
DocumentListener.prototype.exitLogicalExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#factorialExpression.
DocumentListener.prototype.enterFactorialExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#factorialExpression.
DocumentListener.prototype.exitFactorialExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#variableExpression.
DocumentListener.prototype.enterVariableExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#variableExpression.
DocumentListener.prototype.exitVariableExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#functionExpression.
DocumentListener.prototype.enterFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#functionExpression.
DocumentListener.prototype.exitFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#precedenceExpression.
DocumentListener.prototype.enterPrecedenceExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#precedenceExpression.
DocumentListener.prototype.exitPrecedenceExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#exponentialExpression.
DocumentListener.prototype.enterExponentialExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#exponentialExpression.
DocumentListener.prototype.exitExponentialExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#componentExpression.
DocumentListener.prototype.enterComponentExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#componentExpression.
DocumentListener.prototype.exitComponentExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#inversionExpression.
DocumentListener.prototype.enterInversionExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#inversionExpression.
DocumentListener.prototype.exitInversionExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#dereferenceExpression.
DocumentListener.prototype.enterDereferenceExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#dereferenceExpression.
DocumentListener.prototype.exitDereferenceExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#complementExpression.
DocumentListener.prototype.enterComplementExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#complementExpression.
DocumentListener.prototype.exitComplementExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#concatenationExpression.
DocumentListener.prototype.enterConcatenationExpression = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#concatenationExpression.
DocumentListener.prototype.exitConcatenationExpression = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#variable.
DocumentListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#variable.
DocumentListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#funxtion.
DocumentListener.prototype.enterFunxtion = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#funxtion.
DocumentListener.prototype.exitFunxtion = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#message.
DocumentListener.prototype.enterMessage = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#message.
DocumentListener.prototype.exitMessage = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#indices.
DocumentListener.prototype.enterIndices = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#indices.
DocumentListener.prototype.exitIndices = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#element.
DocumentListener.prototype.enterElement = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#element.
DocumentListener.prototype.exitElement = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#angle.
DocumentListener.prototype.enterAngle = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#angle.
DocumentListener.prototype.exitAngle = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#binary.
DocumentListener.prototype.enterBinary = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#binary.
DocumentListener.prototype.exitBinary = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#duration.
DocumentListener.prototype.enterDuration = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#duration.
DocumentListener.prototype.exitDuration = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#pattern.
DocumentListener.prototype.enterPattern = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#pattern.
DocumentListener.prototype.exitPattern = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#imaginary.
DocumentListener.prototype.enterImaginary = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#imaginary.
DocumentListener.prototype.exitImaginary = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#moment.
DocumentListener.prototype.enterMoment = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#moment.
DocumentListener.prototype.exitMoment = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#number.
DocumentListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#number.
DocumentListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#percent.
DocumentListener.prototype.enterPercent = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#percent.
DocumentListener.prototype.exitPercent = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#probability.
DocumentListener.prototype.enterProbability = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#probability.
DocumentListener.prototype.exitProbability = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#real.
DocumentListener.prototype.enterReal = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#real.
DocumentListener.prototype.exitReal = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#reference.
DocumentListener.prototype.enterReference = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#reference.
DocumentListener.prototype.exitReference = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#reserved.
DocumentListener.prototype.enterReserved = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#reserved.
DocumentListener.prototype.exitReserved = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#symbol.
DocumentListener.prototype.enterSymbol = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#symbol.
DocumentListener.prototype.exitSymbol = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#tag.
DocumentListener.prototype.enterTag = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#tag.
DocumentListener.prototype.exitTag = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#text.
DocumentListener.prototype.enterText = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#text.
DocumentListener.prototype.exitText = function(ctx) {
};


// Enter a parse tree produced by DocumentParser#version.
DocumentListener.prototype.enterVersion = function(ctx) {
};

// Exit a parse tree produced by DocumentParser#version.
DocumentListener.prototype.exitVersion = function(ctx) {
};



exports.DocumentListener = DocumentListener;