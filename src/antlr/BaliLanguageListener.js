// Generated from src/antlr/BaliLanguage.g4 by ANTLR 4.5.1
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


// Enter a parse tree produced by BaliLanguageParser#literal.
BaliLanguageListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#literal.
BaliLanguageListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#structure.
BaliLanguageListener.prototype.enterStructure = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#structure.
BaliLanguageListener.prototype.exitStructure = function(ctx) {
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


// Enter a parse tree produced by BaliLanguageParser#inlineCollection.
BaliLanguageListener.prototype.enterInlineCollection = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#inlineCollection.
BaliLanguageListener.prototype.exitInlineCollection = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#newlineCollection.
BaliLanguageListener.prototype.enterNewlineCollection = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#newlineCollection.
BaliLanguageListener.prototype.exitNewlineCollection = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#emptyCollection.
BaliLanguageListener.prototype.enterEmptyCollection = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#emptyCollection.
BaliLanguageListener.prototype.exitEmptyCollection = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#inlineTable.
BaliLanguageListener.prototype.enterInlineTable = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#inlineTable.
BaliLanguageListener.prototype.exitInlineTable = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#newlineTable.
BaliLanguageListener.prototype.enterNewlineTable = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#newlineTable.
BaliLanguageListener.prototype.exitNewlineTable = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#emptyTable.
BaliLanguageListener.prototype.enterEmptyTable = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#emptyTable.
BaliLanguageListener.prototype.exitEmptyTable = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#association.
BaliLanguageListener.prototype.enterAssociation = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#association.
BaliLanguageListener.prototype.exitAssociation = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#key.
BaliLanguageListener.prototype.enterKey = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#key.
BaliLanguageListener.prototype.exitKey = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#parameters.
BaliLanguageListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#parameters.
BaliLanguageListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#script.
BaliLanguageListener.prototype.enterScript = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#script.
BaliLanguageListener.prototype.exitScript = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#block.
BaliLanguageListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#block.
BaliLanguageListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#inlineStatements.
BaliLanguageListener.prototype.enterInlineStatements = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#inlineStatements.
BaliLanguageListener.prototype.exitInlineStatements = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#newlineStatements.
BaliLanguageListener.prototype.enterNewlineStatements = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#newlineStatements.
BaliLanguageListener.prototype.exitNewlineStatements = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#emptyStatements.
BaliLanguageListener.prototype.enterEmptyStatements = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#emptyStatements.
BaliLanguageListener.prototype.exitEmptyStatements = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#statement.
BaliLanguageListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#statement.
BaliLanguageListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#exceptionClause.
BaliLanguageListener.prototype.enterExceptionClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#exceptionClause.
BaliLanguageListener.prototype.exitExceptionClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#finalClause.
BaliLanguageListener.prototype.enterFinalClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#finalClause.
BaliLanguageListener.prototype.exitFinalClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#mainClause.
BaliLanguageListener.prototype.enterMainClause = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#mainClause.
BaliLanguageListener.prototype.exitMainClause = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#evaluateExpression.
BaliLanguageListener.prototype.enterEvaluateExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#evaluateExpression.
BaliLanguageListener.prototype.exitEvaluateExpression = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#assignee.
BaliLanguageListener.prototype.enterAssignee = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#assignee.
BaliLanguageListener.prototype.exitAssignee = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#target.
BaliLanguageListener.prototype.enterTarget = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#target.
BaliLanguageListener.prototype.exitTarget = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#component.
BaliLanguageListener.prototype.enterComponent = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#component.
BaliLanguageListener.prototype.exitComponent = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#queueMessage.
BaliLanguageListener.prototype.enterQueueMessage = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#queueMessage.
BaliLanguageListener.prototype.exitQueueMessage = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#recipient.
BaliLanguageListener.prototype.enterRecipient = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#recipient.
BaliLanguageListener.prototype.exitRecipient = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#publishEvent.
BaliLanguageListener.prototype.enterPublishEvent = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#publishEvent.
BaliLanguageListener.prototype.exitPublishEvent = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#waitForEvent.
BaliLanguageListener.prototype.enterWaitForEvent = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#waitForEvent.
BaliLanguageListener.prototype.exitWaitForEvent = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#event.
BaliLanguageListener.prototype.enterEvent = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#event.
BaliLanguageListener.prototype.exitEvent = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#continueTo.
BaliLanguageListener.prototype.enterContinueTo = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#continueTo.
BaliLanguageListener.prototype.exitContinueTo = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#breakFrom.
BaliLanguageListener.prototype.enterBreakFrom = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#breakFrom.
BaliLanguageListener.prototype.exitBreakFrom = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#label.
BaliLanguageListener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#label.
BaliLanguageListener.prototype.exitLabel = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#returnResult.
BaliLanguageListener.prototype.enterReturnResult = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#returnResult.
BaliLanguageListener.prototype.exitReturnResult = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#result.
BaliLanguageListener.prototype.enterResult = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#result.
BaliLanguageListener.prototype.exitResult = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#throwException.
BaliLanguageListener.prototype.enterThrowException = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#throwException.
BaliLanguageListener.prototype.exitThrowException = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#xception.
BaliLanguageListener.prototype.enterXception = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#xception.
BaliLanguageListener.prototype.exitXception = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#ifThen.
BaliLanguageListener.prototype.enterIfThen = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#ifThen.
BaliLanguageListener.prototype.exitIfThen = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#condition.
BaliLanguageListener.prototype.enterCondition = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#condition.
BaliLanguageListener.prototype.exitCondition = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#selectFrom.
BaliLanguageListener.prototype.enterSelectFrom = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#selectFrom.
BaliLanguageListener.prototype.exitSelectFrom = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#selection.
BaliLanguageListener.prototype.enterSelection = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#selection.
BaliLanguageListener.prototype.exitSelection = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#option.
BaliLanguageListener.prototype.enterOption = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#option.
BaliLanguageListener.prototype.exitOption = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#whileLoop.
BaliLanguageListener.prototype.enterWhileLoop = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#whileLoop.
BaliLanguageListener.prototype.exitWhileLoop = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#withLoop.
BaliLanguageListener.prototype.enterWithLoop = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#withLoop.
BaliLanguageListener.prototype.exitWithLoop = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#sequence.
BaliLanguageListener.prototype.enterSequence = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#sequence.
BaliLanguageListener.prototype.exitSequence = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#documentExpression.
BaliLanguageListener.prototype.enterDocumentExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#documentExpression.
BaliLanguageListener.prototype.exitDocumentExpression = function(ctx) {
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


// Enter a parse tree produced by BaliLanguageParser#funxionExpression.
BaliLanguageListener.prototype.enterFunxionExpression = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#funxionExpression.
BaliLanguageListener.prototype.exitFunxionExpression = function(ctx) {
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


// Enter a parse tree produced by BaliLanguageParser#variable.
BaliLanguageListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#variable.
BaliLanguageListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#funxion.
BaliLanguageListener.prototype.enterFunxion = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#funxion.
BaliLanguageListener.prototype.exitFunxion = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#message.
BaliLanguageListener.prototype.enterMessage = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#message.
BaliLanguageListener.prototype.exitMessage = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#indices.
BaliLanguageListener.prototype.enterIndices = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#indices.
BaliLanguageListener.prototype.exitIndices = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#element.
BaliLanguageListener.prototype.enterElement = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#element.
BaliLanguageListener.prototype.exitElement = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#noneAny.
BaliLanguageListener.prototype.enterNoneAny = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#noneAny.
BaliLanguageListener.prototype.exitNoneAny = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#anyAny.
BaliLanguageListener.prototype.enterAnyAny = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#anyAny.
BaliLanguageListener.prototype.exitAnyAny = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#tag.
BaliLanguageListener.prototype.enterTag = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#tag.
BaliLanguageListener.prototype.exitTag = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#symbol.
BaliLanguageListener.prototype.enterSymbol = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#symbol.
BaliLanguageListener.prototype.exitSymbol = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#time.
BaliLanguageListener.prototype.enterTime = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#time.
BaliLanguageListener.prototype.exitTime = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#reference.
BaliLanguageListener.prototype.enterReference = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#reference.
BaliLanguageListener.prototype.exitReference = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#version.
BaliLanguageListener.prototype.enterVersion = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#version.
BaliLanguageListener.prototype.exitVersion = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#inlineText.
BaliLanguageListener.prototype.enterInlineText = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#inlineText.
BaliLanguageListener.prototype.exitInlineText = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#blockText.
BaliLanguageListener.prototype.enterBlockText = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#blockText.
BaliLanguageListener.prototype.exitBlockText = function(ctx) {
};


// Enter a parse tree produced by BaliLanguageParser#binary.
BaliLanguageListener.prototype.enterBinary = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#binary.
BaliLanguageListener.prototype.exitBinary = function(ctx) {
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


// Enter a parse tree produced by BaliLanguageParser#percent.
BaliLanguageListener.prototype.enterPercent = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#percent.
BaliLanguageListener.prototype.exitPercent = function(ctx) {
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


// Enter a parse tree produced by BaliLanguageParser#imaginary.
BaliLanguageListener.prototype.enterImaginary = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#imaginary.
BaliLanguageListener.prototype.exitImaginary = function(ctx) {
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


// Enter a parse tree produced by BaliLanguageParser#name.
BaliLanguageListener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by BaliLanguageParser#name.
BaliLanguageListener.prototype.exitName = function(ctx) {
};



exports.BaliLanguageListener = BaliLanguageListener;