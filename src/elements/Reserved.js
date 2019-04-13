/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/
'use strict';


/*
 * This element class captures the state and methods associated with a
 * reserved identifier.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC CONSTRUCTOR

/**
 * This constructor creates a new reserved identifier using the specified value.
 * 
 * @param {String} value The value of the reserved identifier.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Reserved} The new reserved identifier.
 */
function Reserved(value, parameters) {
    abstractions.Element.call(this, utilities.types.RESERVED, parameters);
    if (!value || !/^[a-zA-Z][0-9a-zA-Z]*(-[0-9]+)?$/g.test(value)) {
        throw new utilities.Exception({
            $module: '/bali/elements/Reserved',
            $procedure: '$Reserved',
            $exception: '$invalidParameter',
            $parameter: value.toString(),
            $text: '"An invalid reserved symbol value was passed to the constructor."'
        });
    }

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };

    return this;
}
Reserved.prototype = Object.create(abstractions.Element.prototype);
Reserved.prototype.constructor = Reserved;
exports.Reserved = Reserved;


// PUBLIC METHODS

/**
 * This method returns whether or not this reserved symbol has a meaningful value. Reserved
 * symbols always have a meaningful value.
 * 
 * @returns {Boolean} Whether or not this reserved symbol has a meaningful value.
 */
Reserved.prototype.toBoolean = function() {
    return true;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Reserved.prototype.acceptVisitor = function(visitor) {
    visitor.visitReserved(this);
};
