// Generated from grammar/BaliDocument.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by BaliDocumentParser.
function BaliDocumentListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

BaliDocumentListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
BaliDocumentListener.prototype.constructor = BaliDocumentListener;

// Enter a parse tree produced by BaliDocumentParser#document.
BaliDocumentListener.prototype.enterDocument = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#document.
BaliDocumentListener.prototype.exitDocument = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#body.
BaliDocumentListener.prototype.enterBody = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#body.
BaliDocumentListener.prototype.exitBody = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#seal.
BaliDocumentListener.prototype.enterSeal = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#seal.
BaliDocumentListener.prototype.exitSeal = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#component.
BaliDocumentListener.prototype.enterComponent = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#component.
BaliDocumentListener.prototype.exitComponent = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#object.
BaliDocumentListener.prototype.enterObject = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#object.
BaliDocumentListener.prototype.exitObject = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#structure.
BaliDocumentListener.prototype.enterStructure = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#structure.
BaliDocumentListener.prototype.exitStructure = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#parameters.
BaliDocumentListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#parameters.
BaliDocumentListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#collection.
BaliDocumentListener.prototype.enterCollection = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#collection.
BaliDocumentListener.prototype.exitCollection = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#range.
BaliDocumentListener.prototype.enterRange = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#range.
BaliDocumentListener.prototype.exitRange = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#inlineList.
BaliDocumentListener.prototype.enterInlineList = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#inlineList.
BaliDocumentListener.prototype.exitInlineList = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#newlineList.
BaliDocumentListener.prototype.enterNewlineList = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#newlineList.
BaliDocumentListener.prototype.exitNewlineList = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#emptyList.
BaliDocumentListener.prototype.enterEmptyList = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#emptyList.
BaliDocumentListener.prototype.exitEmptyList = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#inlineCatalog.
BaliDocumentListener.prototype.enterInlineCatalog = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#inlineCatalog.
BaliDocumentListener.prototype.exitInlineCatalog = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#newlineCatalog.
BaliDocumentListener.prototype.enterNewlineCatalog = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#newlineCatalog.
BaliDocumentListener.prototype.exitNewlineCatalog = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#emptyCatalog.
BaliDocumentListener.prototype.enterEmptyCatalog = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#emptyCatalog.
BaliDocumentListener.prototype.exitEmptyCatalog = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#association.
BaliDocumentListener.prototype.enterAssociation = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#association.
BaliDocumentListener.prototype.exitAssociation = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#code.
BaliDocumentListener.prototype.enterCode = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#code.
BaliDocumentListener.prototype.exitCode = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#inlineProcedure.
BaliDocumentListener.prototype.enterInlineProcedure = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#inlineProcedure.
BaliDocumentListener.prototype.exitInlineProcedure = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#newlineProcedure.
BaliDocumentListener.prototype.enterNewlineProcedure = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#newlineProcedure.
BaliDocumentListener.prototype.exitNewlineProcedure = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#emptyProcedure.
BaliDocumentListener.prototype.enterEmptyProcedure = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#emptyProcedure.
BaliDocumentListener.prototype.exitEmptyProcedure = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#statement.
BaliDocumentListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#statement.
BaliDocumentListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#mainClause.
BaliDocumentListener.prototype.enterMainClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#mainClause.
BaliDocumentListener.prototype.exitMainClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#handleClause.
BaliDocumentListener.prototype.enterHandleClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#handleClause.
BaliDocumentListener.prototype.exitHandleClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#block.
BaliDocumentListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#block.
BaliDocumentListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#evaluateClause.
BaliDocumentListener.prototype.enterEvaluateClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#evaluateClause.
BaliDocumentListener.prototype.exitEvaluateClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#checkoutClause.
BaliDocumentListener.prototype.enterCheckoutClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#checkoutClause.
BaliDocumentListener.prototype.exitCheckoutClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#saveClause.
BaliDocumentListener.prototype.enterSaveClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#saveClause.
BaliDocumentListener.prototype.exitSaveClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#discardClause.
BaliDocumentListener.prototype.enterDiscardClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#discardClause.
BaliDocumentListener.prototype.exitDiscardClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#commitClause.
BaliDocumentListener.prototype.enterCommitClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#commitClause.
BaliDocumentListener.prototype.exitCommitClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#publishClause.
BaliDocumentListener.prototype.enterPublishClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#publishClause.
BaliDocumentListener.prototype.exitPublishClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#queueClause.
BaliDocumentListener.prototype.enterQueueClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#queueClause.
BaliDocumentListener.prototype.exitQueueClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#waitClause.
BaliDocumentListener.prototype.enterWaitClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#waitClause.
BaliDocumentListener.prototype.exitWaitClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#ifClause.
BaliDocumentListener.prototype.enterIfClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#ifClause.
BaliDocumentListener.prototype.exitIfClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#selectClause.
BaliDocumentListener.prototype.enterSelectClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#selectClause.
BaliDocumentListener.prototype.exitSelectClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#withClause.
BaliDocumentListener.prototype.enterWithClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#withClause.
BaliDocumentListener.prototype.exitWithClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#whileClause.
BaliDocumentListener.prototype.enterWhileClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#whileClause.
BaliDocumentListener.prototype.exitWhileClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#continueClause.
BaliDocumentListener.prototype.enterContinueClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#continueClause.
BaliDocumentListener.prototype.exitContinueClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#breakClause.
BaliDocumentListener.prototype.enterBreakClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#breakClause.
BaliDocumentListener.prototype.exitBreakClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#returnClause.
BaliDocumentListener.prototype.enterReturnClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#returnClause.
BaliDocumentListener.prototype.exitReturnClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#throwClause.
BaliDocumentListener.prototype.enterThrowClause = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#throwClause.
BaliDocumentListener.prototype.exitThrowClause = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#recipient.
BaliDocumentListener.prototype.enterRecipient = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#recipient.
BaliDocumentListener.prototype.exitRecipient = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#subcomponent.
BaliDocumentListener.prototype.enterSubcomponent = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#subcomponent.
BaliDocumentListener.prototype.exitSubcomponent = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#defaultExpression.
BaliDocumentListener.prototype.enterDefaultExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#defaultExpression.
BaliDocumentListener.prototype.exitDefaultExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#messageExpression.
BaliDocumentListener.prototype.enterMessageExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#messageExpression.
BaliDocumentListener.prototype.exitMessageExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#subcomponentExpression.
BaliDocumentListener.prototype.enterSubcomponentExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#subcomponentExpression.
BaliDocumentListener.prototype.exitSubcomponentExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#comparisonExpression.
BaliDocumentListener.prototype.enterComparisonExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#comparisonExpression.
BaliDocumentListener.prototype.exitComparisonExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#arithmeticExpression.
BaliDocumentListener.prototype.enterArithmeticExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#arithmeticExpression.
BaliDocumentListener.prototype.exitArithmeticExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#magnitudeExpression.
BaliDocumentListener.prototype.enterMagnitudeExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#magnitudeExpression.
BaliDocumentListener.prototype.exitMagnitudeExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#logicalExpression.
BaliDocumentListener.prototype.enterLogicalExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#logicalExpression.
BaliDocumentListener.prototype.exitLogicalExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#factorialExpression.
BaliDocumentListener.prototype.enterFactorialExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#factorialExpression.
BaliDocumentListener.prototype.exitFactorialExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#variableExpression.
BaliDocumentListener.prototype.enterVariableExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#variableExpression.
BaliDocumentListener.prototype.exitVariableExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#functionExpression.
BaliDocumentListener.prototype.enterFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#functionExpression.
BaliDocumentListener.prototype.exitFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#precedenceExpression.
BaliDocumentListener.prototype.enterPrecedenceExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#precedenceExpression.
BaliDocumentListener.prototype.exitPrecedenceExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#exponentialExpression.
BaliDocumentListener.prototype.enterExponentialExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#exponentialExpression.
BaliDocumentListener.prototype.exitExponentialExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#componentExpression.
BaliDocumentListener.prototype.enterComponentExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#componentExpression.
BaliDocumentListener.prototype.exitComponentExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#inversionExpression.
BaliDocumentListener.prototype.enterInversionExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#inversionExpression.
BaliDocumentListener.prototype.exitInversionExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#dereferenceExpression.
BaliDocumentListener.prototype.enterDereferenceExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#dereferenceExpression.
BaliDocumentListener.prototype.exitDereferenceExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#complementExpression.
BaliDocumentListener.prototype.enterComplementExpression = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#complementExpression.
BaliDocumentListener.prototype.exitComplementExpression = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#variable.
BaliDocumentListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#variable.
BaliDocumentListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#funxtion.
BaliDocumentListener.prototype.enterFunxtion = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#funxtion.
BaliDocumentListener.prototype.exitFunxtion = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#message.
BaliDocumentListener.prototype.enterMessage = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#message.
BaliDocumentListener.prototype.exitMessage = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#indices.
BaliDocumentListener.prototype.enterIndices = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#indices.
BaliDocumentListener.prototype.exitIndices = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#element.
BaliDocumentListener.prototype.enterElement = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#element.
BaliDocumentListener.prototype.exitElement = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#angle.
BaliDocumentListener.prototype.enterAngle = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#angle.
BaliDocumentListener.prototype.exitAngle = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#binary.
BaliDocumentListener.prototype.enterBinary = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#binary.
BaliDocumentListener.prototype.exitBinary = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#duration.
BaliDocumentListener.prototype.enterDuration = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#duration.
BaliDocumentListener.prototype.exitDuration = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#imaginary.
BaliDocumentListener.prototype.enterImaginary = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#imaginary.
BaliDocumentListener.prototype.exitImaginary = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#moment.
BaliDocumentListener.prototype.enterMoment = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#moment.
BaliDocumentListener.prototype.exitMoment = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#undefinedNumber.
BaliDocumentListener.prototype.enterUndefinedNumber = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#undefinedNumber.
BaliDocumentListener.prototype.exitUndefinedNumber = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#infiniteNumber.
BaliDocumentListener.prototype.enterInfiniteNumber = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#infiniteNumber.
BaliDocumentListener.prototype.exitInfiniteNumber = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#realNumber.
BaliDocumentListener.prototype.enterRealNumber = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#realNumber.
BaliDocumentListener.prototype.exitRealNumber = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#imaginaryNumber.
BaliDocumentListener.prototype.enterImaginaryNumber = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#imaginaryNumber.
BaliDocumentListener.prototype.exitImaginaryNumber = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#complexNumber.
BaliDocumentListener.prototype.enterComplexNumber = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#complexNumber.
BaliDocumentListener.prototype.exitComplexNumber = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#percent.
BaliDocumentListener.prototype.enterPercent = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#percent.
BaliDocumentListener.prototype.exitPercent = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#falseProbability.
BaliDocumentListener.prototype.enterFalseProbability = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#falseProbability.
BaliDocumentListener.prototype.exitFalseProbability = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#fractionalProbability.
BaliDocumentListener.prototype.enterFractionalProbability = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#fractionalProbability.
BaliDocumentListener.prototype.exitFractionalProbability = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#trueProbability.
BaliDocumentListener.prototype.enterTrueProbability = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#trueProbability.
BaliDocumentListener.prototype.exitTrueProbability = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#constantReal.
BaliDocumentListener.prototype.enterConstantReal = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#constantReal.
BaliDocumentListener.prototype.exitConstantReal = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#variableReal.
BaliDocumentListener.prototype.enterVariableReal = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#variableReal.
BaliDocumentListener.prototype.exitVariableReal = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#reference.
BaliDocumentListener.prototype.enterReference = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#reference.
BaliDocumentListener.prototype.exitReference = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#symbol.
BaliDocumentListener.prototype.enterSymbol = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#symbol.
BaliDocumentListener.prototype.exitSymbol = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#tag.
BaliDocumentListener.prototype.enterTag = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#tag.
BaliDocumentListener.prototype.exitTag = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#noneTemplate.
BaliDocumentListener.prototype.enterNoneTemplate = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#noneTemplate.
BaliDocumentListener.prototype.exitNoneTemplate = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#anyTemplate.
BaliDocumentListener.prototype.enterAnyTemplate = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#anyTemplate.
BaliDocumentListener.prototype.exitAnyTemplate = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#inlineText.
BaliDocumentListener.prototype.enterInlineText = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#inlineText.
BaliDocumentListener.prototype.exitInlineText = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#newlineText.
BaliDocumentListener.prototype.enterNewlineText = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#newlineText.
BaliDocumentListener.prototype.exitNewlineText = function(ctx) {
};


// Enter a parse tree produced by BaliDocumentParser#version.
BaliDocumentListener.prototype.enterVersion = function(ctx) {
};

// Exit a parse tree produced by BaliDocumentParser#version.
BaliDocumentListener.prototype.exitVersion = function(ctx) {
};



exports.BaliDocumentListener = BaliDocumentListener;