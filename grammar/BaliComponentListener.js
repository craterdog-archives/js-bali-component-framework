// Generated from grammar/BaliComponent.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by BaliComponentParser.
function BaliComponentListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

BaliComponentListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
BaliComponentListener.prototype.constructor = BaliComponentListener;

// Enter a parse tree produced by BaliComponentParser#component.
BaliComponentListener.prototype.enterComponent = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#component.
BaliComponentListener.prototype.exitComponent = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#value.
BaliComponentListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#value.
BaliComponentListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#structure.
BaliComponentListener.prototype.enterStructure = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#structure.
BaliComponentListener.prototype.exitStructure = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#parameters.
BaliComponentListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#parameters.
BaliComponentListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#collection.
BaliComponentListener.prototype.enterCollection = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#collection.
BaliComponentListener.prototype.exitCollection = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#range.
BaliComponentListener.prototype.enterRange = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#range.
BaliComponentListener.prototype.exitRange = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#inlineList.
BaliComponentListener.prototype.enterInlineList = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#inlineList.
BaliComponentListener.prototype.exitInlineList = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#newlineList.
BaliComponentListener.prototype.enterNewlineList = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#newlineList.
BaliComponentListener.prototype.exitNewlineList = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#emptyList.
BaliComponentListener.prototype.enterEmptyList = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#emptyList.
BaliComponentListener.prototype.exitEmptyList = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#inlineCatalog.
BaliComponentListener.prototype.enterInlineCatalog = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#inlineCatalog.
BaliComponentListener.prototype.exitInlineCatalog = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#newlineCatalog.
BaliComponentListener.prototype.enterNewlineCatalog = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#newlineCatalog.
BaliComponentListener.prototype.exitNewlineCatalog = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#emptyCatalog.
BaliComponentListener.prototype.enterEmptyCatalog = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#emptyCatalog.
BaliComponentListener.prototype.exitEmptyCatalog = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#association.
BaliComponentListener.prototype.enterAssociation = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#association.
BaliComponentListener.prototype.exitAssociation = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#source.
BaliComponentListener.prototype.enterSource = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#source.
BaliComponentListener.prototype.exitSource = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#inlineProcedure.
BaliComponentListener.prototype.enterInlineProcedure = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#inlineProcedure.
BaliComponentListener.prototype.exitInlineProcedure = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#newlineProcedure.
BaliComponentListener.prototype.enterNewlineProcedure = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#newlineProcedure.
BaliComponentListener.prototype.exitNewlineProcedure = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#emptyProcedure.
BaliComponentListener.prototype.enterEmptyProcedure = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#emptyProcedure.
BaliComponentListener.prototype.exitEmptyProcedure = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#statement.
BaliComponentListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#statement.
BaliComponentListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#mainClause.
BaliComponentListener.prototype.enterMainClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#mainClause.
BaliComponentListener.prototype.exitMainClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#handleClause.
BaliComponentListener.prototype.enterHandleClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#handleClause.
BaliComponentListener.prototype.exitHandleClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#block.
BaliComponentListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#block.
BaliComponentListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#evaluateClause.
BaliComponentListener.prototype.enterEvaluateClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#evaluateClause.
BaliComponentListener.prototype.exitEvaluateClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#checkoutClause.
BaliComponentListener.prototype.enterCheckoutClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#checkoutClause.
BaliComponentListener.prototype.exitCheckoutClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#saveClause.
BaliComponentListener.prototype.enterSaveClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#saveClause.
BaliComponentListener.prototype.exitSaveClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#discardClause.
BaliComponentListener.prototype.enterDiscardClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#discardClause.
BaliComponentListener.prototype.exitDiscardClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#commitClause.
BaliComponentListener.prototype.enterCommitClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#commitClause.
BaliComponentListener.prototype.exitCommitClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#publishClause.
BaliComponentListener.prototype.enterPublishClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#publishClause.
BaliComponentListener.prototype.exitPublishClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#queueClause.
BaliComponentListener.prototype.enterQueueClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#queueClause.
BaliComponentListener.prototype.exitQueueClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#waitClause.
BaliComponentListener.prototype.enterWaitClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#waitClause.
BaliComponentListener.prototype.exitWaitClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#ifClause.
BaliComponentListener.prototype.enterIfClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#ifClause.
BaliComponentListener.prototype.exitIfClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#selectClause.
BaliComponentListener.prototype.enterSelectClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#selectClause.
BaliComponentListener.prototype.exitSelectClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#withClause.
BaliComponentListener.prototype.enterWithClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#withClause.
BaliComponentListener.prototype.exitWithClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#whileClause.
BaliComponentListener.prototype.enterWhileClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#whileClause.
BaliComponentListener.prototype.exitWhileClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#continueClause.
BaliComponentListener.prototype.enterContinueClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#continueClause.
BaliComponentListener.prototype.exitContinueClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#breakClause.
BaliComponentListener.prototype.enterBreakClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#breakClause.
BaliComponentListener.prototype.exitBreakClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#returnClause.
BaliComponentListener.prototype.enterReturnClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#returnClause.
BaliComponentListener.prototype.exitReturnClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#throwClause.
BaliComponentListener.prototype.enterThrowClause = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#throwClause.
BaliComponentListener.prototype.exitThrowClause = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#recipient.
BaliComponentListener.prototype.enterRecipient = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#recipient.
BaliComponentListener.prototype.exitRecipient = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#subcomponent.
BaliComponentListener.prototype.enterSubcomponent = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#subcomponent.
BaliComponentListener.prototype.exitSubcomponent = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#defaultExpression.
BaliComponentListener.prototype.enterDefaultExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#defaultExpression.
BaliComponentListener.prototype.exitDefaultExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#messageExpression.
BaliComponentListener.prototype.enterMessageExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#messageExpression.
BaliComponentListener.prototype.exitMessageExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#subcomponentExpression.
BaliComponentListener.prototype.enterSubcomponentExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#subcomponentExpression.
BaliComponentListener.prototype.exitSubcomponentExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#comparisonExpression.
BaliComponentListener.prototype.enterComparisonExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#comparisonExpression.
BaliComponentListener.prototype.exitComparisonExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#arithmeticExpression.
BaliComponentListener.prototype.enterArithmeticExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#arithmeticExpression.
BaliComponentListener.prototype.exitArithmeticExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#magnitudeExpression.
BaliComponentListener.prototype.enterMagnitudeExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#magnitudeExpression.
BaliComponentListener.prototype.exitMagnitudeExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#logicalExpression.
BaliComponentListener.prototype.enterLogicalExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#logicalExpression.
BaliComponentListener.prototype.exitLogicalExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#factorialExpression.
BaliComponentListener.prototype.enterFactorialExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#factorialExpression.
BaliComponentListener.prototype.exitFactorialExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#variableExpression.
BaliComponentListener.prototype.enterVariableExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#variableExpression.
BaliComponentListener.prototype.exitVariableExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#functionExpression.
BaliComponentListener.prototype.enterFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#functionExpression.
BaliComponentListener.prototype.exitFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#precedenceExpression.
BaliComponentListener.prototype.enterPrecedenceExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#precedenceExpression.
BaliComponentListener.prototype.exitPrecedenceExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#exponentialExpression.
BaliComponentListener.prototype.enterExponentialExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#exponentialExpression.
BaliComponentListener.prototype.exitExponentialExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#componentExpression.
BaliComponentListener.prototype.enterComponentExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#componentExpression.
BaliComponentListener.prototype.exitComponentExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#inversionExpression.
BaliComponentListener.prototype.enterInversionExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#inversionExpression.
BaliComponentListener.prototype.exitInversionExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#dereferenceExpression.
BaliComponentListener.prototype.enterDereferenceExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#dereferenceExpression.
BaliComponentListener.prototype.exitDereferenceExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#complementExpression.
BaliComponentListener.prototype.enterComplementExpression = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#complementExpression.
BaliComponentListener.prototype.exitComplementExpression = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#variable.
BaliComponentListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#variable.
BaliComponentListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#funxtion.
BaliComponentListener.prototype.enterFunxtion = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#funxtion.
BaliComponentListener.prototype.exitFunxtion = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#message.
BaliComponentListener.prototype.enterMessage = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#message.
BaliComponentListener.prototype.exitMessage = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#indices.
BaliComponentListener.prototype.enterIndices = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#indices.
BaliComponentListener.prototype.exitIndices = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#element.
BaliComponentListener.prototype.enterElement = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#element.
BaliComponentListener.prototype.exitElement = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#angle.
BaliComponentListener.prototype.enterAngle = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#angle.
BaliComponentListener.prototype.exitAngle = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#binary.
BaliComponentListener.prototype.enterBinary = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#binary.
BaliComponentListener.prototype.exitBinary = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#duration.
BaliComponentListener.prototype.enterDuration = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#duration.
BaliComponentListener.prototype.exitDuration = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#imaginary.
BaliComponentListener.prototype.enterImaginary = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#imaginary.
BaliComponentListener.prototype.exitImaginary = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#moment.
BaliComponentListener.prototype.enterMoment = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#moment.
BaliComponentListener.prototype.exitMoment = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#undefinedNumber.
BaliComponentListener.prototype.enterUndefinedNumber = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#undefinedNumber.
BaliComponentListener.prototype.exitUndefinedNumber = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#infiniteNumber.
BaliComponentListener.prototype.enterInfiniteNumber = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#infiniteNumber.
BaliComponentListener.prototype.exitInfiniteNumber = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#realNumber.
BaliComponentListener.prototype.enterRealNumber = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#realNumber.
BaliComponentListener.prototype.exitRealNumber = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#imaginaryNumber.
BaliComponentListener.prototype.enterImaginaryNumber = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#imaginaryNumber.
BaliComponentListener.prototype.exitImaginaryNumber = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#complexNumber.
BaliComponentListener.prototype.enterComplexNumber = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#complexNumber.
BaliComponentListener.prototype.exitComplexNumber = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#percent.
BaliComponentListener.prototype.enterPercent = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#percent.
BaliComponentListener.prototype.exitPercent = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#falseProbability.
BaliComponentListener.prototype.enterFalseProbability = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#falseProbability.
BaliComponentListener.prototype.exitFalseProbability = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#fractionalProbability.
BaliComponentListener.prototype.enterFractionalProbability = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#fractionalProbability.
BaliComponentListener.prototype.exitFractionalProbability = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#trueProbability.
BaliComponentListener.prototype.enterTrueProbability = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#trueProbability.
BaliComponentListener.prototype.exitTrueProbability = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#real.
BaliComponentListener.prototype.enterReal = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#real.
BaliComponentListener.prototype.exitReal = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#reference.
BaliComponentListener.prototype.enterReference = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#reference.
BaliComponentListener.prototype.exitReference = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#symbol.
BaliComponentListener.prototype.enterSymbol = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#symbol.
BaliComponentListener.prototype.exitSymbol = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#tag.
BaliComponentListener.prototype.enterTag = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#tag.
BaliComponentListener.prototype.exitTag = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#noneTemplate.
BaliComponentListener.prototype.enterNoneTemplate = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#noneTemplate.
BaliComponentListener.prototype.exitNoneTemplate = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#anyTemplate.
BaliComponentListener.prototype.enterAnyTemplate = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#anyTemplate.
BaliComponentListener.prototype.exitAnyTemplate = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#inlineText.
BaliComponentListener.prototype.enterInlineText = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#inlineText.
BaliComponentListener.prototype.exitInlineText = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#newlineText.
BaliComponentListener.prototype.enterNewlineText = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#newlineText.
BaliComponentListener.prototype.exitNewlineText = function(ctx) {
};


// Enter a parse tree produced by BaliComponentParser#version.
BaliComponentListener.prototype.enterVersion = function(ctx) {
};

// Exit a parse tree produced by BaliComponentParser#version.
BaliComponentListener.prototype.exitVersion = function(ctx) {
};



exports.BaliComponentListener = BaliComponentListener;