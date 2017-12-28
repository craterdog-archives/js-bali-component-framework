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
 * This element class captures the state and methods associated with a symbol.
 */
function Any(value) {
    if (!value) {
        this.value = 'none';
    } else {
        switch (value) {
            case 'none':
            case 'any':
                this.value = value;
                break;
            default:
                throw new Error('ANY: An invalid value was passed into the constructor: ' + value);
        }
    }
    return this;
}
Any.prototype.constructor = Any;
exports.Any = Any;


Any.prototype.toString = function() {
    return this.value;
};
