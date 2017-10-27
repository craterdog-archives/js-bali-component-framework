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
function Symbol(string) {
    this.string = (string || '$');
    if (this.string.charAt(0) !== '$') {
        throw "A symbol must begin with a '$': " + this.string;
    }
    if (/\s/g.test(this.string)) {
        throw "A symbol cannot contain white space: " + this.string;
    }
    return this;
}

Symbol.prototype.constructor = Symbol;
exports.Symbol = Symbol;


Symbol.prototype.toString = function() {
    return this.string;
};

