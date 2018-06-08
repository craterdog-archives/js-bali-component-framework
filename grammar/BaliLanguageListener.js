// Generated from grammar/BaliLanguage.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by BaliLanguageParser.
function BaliLanguageListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

BaliLanguageListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
BaliLanguageListener.prototype.constructor = BaliLanguageListener;

// Enter a parse tree produced by BaliLanguageParser#document.
BaliLanguageListener.prototype.enterDocument = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#document.
BaliLanguageListener.prototype.exitDocument = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#component.
BaliLanguageListener.prototype.enterComponent = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#component.
BaliLanguageListener.prototype.exitComponent = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#item.
BaliLanguageListener.prototype.enterItem = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#item.
BaliLanguageListener.prototype.exitItem = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#structure.
BaliLanguageListener.prototype.enterStructure = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#structure.
BaliLanguageListener.prototype.exitStructure = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#parameters.
BaliLanguageListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#parameters.
BaliLanguageListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#composite.
BaliLanguageListener.prototype.enterComposite = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#composite.
BaliLanguageListener.prototype.exitComposite = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#range.
BaliLanguageListener.prototype.enterRange = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#range.
BaliLanguageListener.prototype.exitRange = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#inlineList.
BaliLanguageListener.prototype.enterInlineList = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#inlineList.
BaliLanguageListener.prototype.exitInlineList = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#newlineList.
BaliLanguageListener.prototype.enterNewlineList = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#newlineList.
BaliLanguageListener.prototype.exitNewlineList = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#emptyList.
BaliLanguageListener.prototype.enterEmptyList = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#emptyList.
BaliLanguageListener.prototype.exitEmptyList = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#inlineCatalog.
BaliLanguageListener.prototype.enterInlineCatalog = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#inlineCatalog.
BaliLanguageListener.prototype.exitInlineCatalog = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#newlineCatalog.
BaliLanguageListener.prototype.enterNewlineCatalog = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#newlineCatalog.
BaliLanguageListener.prototype.exitNewlineCatalog = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#emptyCatalog.
BaliLanguageListener.prototype.enterEmptyCatalog = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#emptyCatalog.
BaliLanguageListener.prototype.exitEmptyCatalog = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#association.
BaliLanguageListener.prototype.enterAssociation = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#association.
BaliLanguageListener.prototype.exitAssociation = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#task.
BaliLanguageListener.prototype.enterTask = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#task.
BaliLanguageListener.prototype.exitTask = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#block.
BaliLanguageListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#block.
BaliLanguageListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#inlineProcedure.
BaliLanguageListener.prototype.enterInlineProcedure = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#inlineProcedure.
BaliLanguageListener.prototype.exitInlineProcedure = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#newlineProcedure.
BaliLanguageListener.prototype.enterNewlineProcedure = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#newlineProcedure.
BaliLanguageListener.prototype.exitNewlineProcedure = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#emptyProcedure.
BaliLanguageListener.prototype.enterEmptyProcedure = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#emptyProcedure.
BaliLanguageListener.prototype.exitEmptyProcedure = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#statement.
BaliLanguageListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#statement.
BaliLanguageListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#mainClause.
BaliLanguageListener.prototype.enterMainClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#mainClause.
BaliLanguageListener.prototype.exitMainClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#evaluateClause.
BaliLanguageListener.prototype.enterEvaluateClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#evaluateClause.
BaliLanguageListener.prototype.exitEvaluateClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#checkoutClause.
BaliLanguageListener.prototype.enterCheckoutClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#checkoutClause.
BaliLanguageListener.prototype.exitCheckoutClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#saveClause.
BaliLanguageListener.prototype.enterSaveClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#saveClause.
BaliLanguageListener.prototype.exitSaveClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#discardClause.
BaliLanguageListener.prototype.enterDiscardClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#discardClause.
BaliLanguageListener.prototype.exitDiscardClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#commitClause.
BaliLanguageListener.prototype.enterCommitClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#commitClause.
BaliLanguageListener.prototype.exitCommitClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#publishClause.
BaliLanguageListener.prototype.enterPublishClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#publishClause.
BaliLanguageListener.prototype.exitPublishClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#queueClause.
BaliLanguageListener.prototype.enterQueueClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#queueClause.
BaliLanguageListener.prototype.exitQueueClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#waitClause.
BaliLanguageListener.prototype.enterWaitClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#waitClause.
BaliLanguageListener.prototype.exitWaitClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#ifClause.
BaliLanguageListener.prototype.enterIfClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#ifClause.
BaliLanguageListener.prototype.exitIfClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#selectClause.
BaliLanguageListener.prototype.enterSelectClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#selectClause.
BaliLanguageListener.prototype.exitSelectClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#whileClause.
BaliLanguageListener.prototype.enterWhileClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#whileClause.
BaliLanguageListener.prototype.exitWhileClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#withClause.
BaliLanguageListener.prototype.enterWithClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#withClause.
BaliLanguageListener.prototype.exitWithClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#continueClause.
BaliLanguageListener.prototype.enterContinueClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#continueClause.
BaliLanguageListener.prototype.exitContinueClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#breakClause.
BaliLanguageListener.prototype.enterBreakClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#breakClause.
BaliLanguageListener.prototype.exitBreakClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#returnClause.
BaliLanguageListener.prototype.enterReturnClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#returnClause.
BaliLanguageListener.prototype.exitReturnClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#throwClause.
BaliLanguageListener.prototype.enterThrowClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#throwClause.
BaliLanguageListener.prototype.exitThrowClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#handleClause.
BaliLanguageListener.prototype.enterHandleClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#handleClause.
BaliLanguageListener.prototype.exitHandleClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#recipient.
BaliLanguageListener.prototype.enterRecipient = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#recipient.
BaliLanguageListener.prototype.exitRecipient = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#variable.
BaliLanguageListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#variable.
BaliLanguageListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#indices.
BaliLanguageListener.prototype.enterIndices = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#indices.
BaliLanguageListener.prototype.exitIndices = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#defaultExpression.
BaliLanguageListener.prototype.enterDefaultExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#defaultExpression.
BaliLanguageListener.prototype.exitDefaultExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#messageExpression.
BaliLanguageListener.prototype.enterMessageExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#messageExpression.
BaliLanguageListener.prototype.exitMessageExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#subcomponentExpression.
BaliLanguageListener.prototype.enterSubcomponentExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#subcomponentExpression.
BaliLanguageListener.prototype.exitSubcomponentExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#comparisonExpression.
BaliLanguageListener.prototype.enterComparisonExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#comparisonExpression.
BaliLanguageListener.prototype.exitComparisonExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#arithmeticExpression.
BaliLanguageListener.prototype.enterArithmeticExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#arithmeticExpression.
BaliLanguageListener.prototype.exitArithmeticExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#magnitudeExpression.
BaliLanguageListener.prototype.enterMagnitudeExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#magnitudeExpression.
BaliLanguageListener.prototype.exitMagnitudeExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#logicalExpression.
BaliLanguageListener.prototype.enterLogicalExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#logicalExpression.
BaliLanguageListener.prototype.exitLogicalExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#factorialExpression.
BaliLanguageListener.prototype.enterFactorialExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#factorialExpression.
BaliLanguageListener.prototype.exitFactorialExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#variableExpression.
BaliLanguageListener.prototype.enterVariableExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#variableExpression.
BaliLanguageListener.prototype.exitVariableExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#functionExpression.
BaliLanguageListener.prototype.enterFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#functionExpression.
BaliLanguageListener.prototype.exitFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#precedenceExpression.
BaliLanguageListener.prototype.enterPrecedenceExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#precedenceExpression.
BaliLanguageListener.prototype.exitPrecedenceExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#exponentialExpression.
BaliLanguageListener.prototype.enterExponentialExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#exponentialExpression.
BaliLanguageListener.prototype.exitExponentialExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#componentExpression.
BaliLanguageListener.prototype.enterComponentExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#componentExpression.
BaliLanguageListener.prototype.exitComponentExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#inversionExpression.
BaliLanguageListener.prototype.enterInversionExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#inversionExpression.
BaliLanguageListener.prototype.exitInversionExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#dereferenceExpression.
BaliLanguageListener.prototype.enterDereferenceExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#dereferenceExpression.
BaliLanguageListener.prototype.exitDereferenceExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#complementExpression.
BaliLanguageListener.prototype.enterComplementExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#complementExpression.
BaliLanguageListener.prototype.exitComplementExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#funxtion.
BaliLanguageListener.prototype.enterFunxtion = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#funxtion.
BaliLanguageListener.prototype.exitFunxtion = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#message.
BaliLanguageListener.prototype.enterMessage = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#message.
BaliLanguageListener.prototype.exitMessage = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#element.
BaliLanguageListener.prototype.enterElement = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#element.
BaliLanguageListener.prototype.exitElement = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#binary.
BaliLanguageListener.prototype.enterBinary = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#binary.
BaliLanguageListener.prototype.exitBinary = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#duration.
BaliLanguageListener.prototype.enterDuration = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#duration.
BaliLanguageListener.prototype.exitDuration = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#imaginary.
BaliLanguageListener.prototype.enterImaginary = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#imaginary.
BaliLanguageListener.prototype.exitImaginary = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#moment.
BaliLanguageListener.prototype.enterMoment = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#moment.
BaliLanguageListener.prototype.exitMoment = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#undefinedNumber.
BaliLanguageListener.prototype.enterUndefinedNumber = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#undefinedNumber.
BaliLanguageListener.prototype.exitUndefinedNumber = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#infiniteNumber.
BaliLanguageListener.prototype.enterInfiniteNumber = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#infiniteNumber.
BaliLanguageListener.prototype.exitInfiniteNumber = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#realNumber.
BaliLanguageListener.prototype.enterRealNumber = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#realNumber.
BaliLanguageListener.prototype.exitRealNumber = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#imaginaryNumber.
BaliLanguageListener.prototype.enterImaginaryNumber = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#imaginaryNumber.
BaliLanguageListener.prototype.exitImaginaryNumber = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#complexNumber.
BaliLanguageListener.prototype.enterComplexNumber = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#complexNumber.
BaliLanguageListener.prototype.exitComplexNumber = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#percent.
BaliLanguageListener.prototype.enterPercent = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#percent.
BaliLanguageListener.prototype.exitPercent = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#trueProbability.
BaliLanguageListener.prototype.enterTrueProbability = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#trueProbability.
BaliLanguageListener.prototype.exitTrueProbability = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#falseProbability.
BaliLanguageListener.prototype.enterFalseProbability = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#falseProbability.
BaliLanguageListener.prototype.exitFalseProbability = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#fractionalProbability.
BaliLanguageListener.prototype.enterFractionalProbability = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#fractionalProbability.
BaliLanguageListener.prototype.exitFractionalProbability = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#constantReal.
BaliLanguageListener.prototype.enterConstantReal = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#constantReal.
BaliLanguageListener.prototype.exitConstantReal = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#variableReal.
BaliLanguageListener.prototype.enterVariableReal = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#variableReal.
BaliLanguageListener.prototype.exitVariableReal = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#reference.
BaliLanguageListener.prototype.enterReference = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#reference.
BaliLanguageListener.prototype.exitReference = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#symbol.
BaliLanguageListener.prototype.enterSymbol = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#symbol.
BaliLanguageListener.prototype.exitSymbol = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#tag.
BaliLanguageListener.prototype.enterTag = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#tag.
BaliLanguageListener.prototype.exitTag = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#noneTemplate.
BaliLanguageListener.prototype.enterNoneTemplate = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#noneTemplate.
BaliLanguageListener.prototype.exitNoneTemplate = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#anyTemplate.
BaliLanguageListener.prototype.enterAnyTemplate = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#anyTemplate.
BaliLanguageListener.prototype.exitAnyTemplate = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#inlineText.
BaliLanguageListener.prototype.enterInlineText = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#inlineText.
BaliLanguageListener.prototype.exitInlineText = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#newlineText.
BaliLanguageListener.prototype.enterNewlineText = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#newlineText.
BaliLanguageListener.prototype.exitNewlineText = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#version.
BaliLanguageListener.prototype.enterVersion = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#version.
BaliLanguageListener.prototype.exitVersion = function(ctx) {
};



exports.BaliLanguageListener = BaliLanguageListener;