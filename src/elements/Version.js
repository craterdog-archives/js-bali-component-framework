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
 * This element class captures the state and methods associated with a version string.
 */
function Version(string) {
    this.string = string || '1';
    if (!/^([1-9][0-9]*)(\.[1-9][0-9]*)*$/g.test(this.string)) {
        throw 'A version string must contain at least one version and cannot contain white space: ' + this.string;
    }
    return this;
}
Version.prototype.constructor = Version;
exports.Version = Version;


Version.prototype.toString = function() {
    return this.string;
};
