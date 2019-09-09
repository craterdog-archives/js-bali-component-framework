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
 * reference element.
 */
const URL = require('url').URL;
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const Exception = require('../composites/Exception').Exception;
const validate = utilities.validation.validate;


// PUBLIC FUNCTIONS

/**
 * This function creates a new reference element using the specified value.
 * 
 * @param {URL} value The URL value of the reference.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Reference} The new reference element.
 */
function Reference(value, parameters, debug) {
    abstractions.Element.call(this, '$Reference', parameters, debug);
    if (this.debug > 1) validate('/bali/elements/Reference', '$Reference', '$value', value, [
        '/javascript/String',
        '/nodejs/URL'
    ], this.debug);

    try {
        if (value.constructor.name !== 'URL') {
            value = new URL(value.replace(/\$tag:#/, '$tag:%23'));  // escape the '#'
        }
    } catch (cause) {
        const exception = new Exception({
            $module: '/bali/elements/Reference',
            $procedure: '$Reference',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid reference value was passed to the constructor.'
        }, cause);
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };

    return this;
}
Reference.prototype = Object.create(abstractions.Element.prototype);
Reference.prototype.constructor = Reference;
exports.Reference = Reference;


// PUBLIC METHODS

/**
 * This method returns whether or not this reference has a meaningful value. A reference always
 * has a meaningful value.
 * 
 * @returns {Boolean} Whether or not this reference has a meaningful value.
 */
Reference.prototype.toBoolean = function() {
    return true;
};


/**
 * This method returns the scheme part of the reference URI.  The scheme does NOT include
 * the trailing ':'.
 * <pre>
 *    <https://google.com/calendar?format=week&hours=12#today>
 *    |     |            |        |                    |     |
 *     ----- ------------ -------- -------------------- -----
 *   *scheme*  authority    path          query        fragment
 * </pre>
 * 
 * @returns {String} The scheme part of the reference URI.
 */
Reference.prototype.getScheme = function() {
    return this.getValue().protocol.slice(0, -1);  // remove trailing ':'
};


/**
 * This method returns the authority part of the reference URI.  The authority does NOT
 * include the leading '//'.
 * <pre>
 *    <https://google.com/calendar?format=week&hours=12#today>
 *    |     |            |        |                    |     |
 *     ----- ------------ -------- -------------------- -----
 *    scheme  *authority*   path          query        fragment
 * </pre>
 * 
 * @returns {String} The authority part of the reference URI.
 */
Reference.prototype.getAuthority = function() {
    const url = this.getValue();
    var authority = url.username;
    if (authority && url.password) authority += ':' + url.password;
    if (authority) authority += '@';
    authority += url.host;
    return decodeURIComponent(authority);
};


/**
 * This method returns the path part of the reference URI.  The path includes
 * the leading '/'.
 * <pre>
 *    <https://google.com/calendar?format=week&hours=12#today>
 *    |     |            |        |                    |     |
 *     ----- ------------ -------- -------------------- -----
 *    scheme   authority   *path*         query        fragment
 * </pre>
 * 
 * @returns {String} The path part of the reference URI.
 */
Reference.prototype.getPath = function() {
    return decodeURIComponent(this.getValue().pathname);
};


/**
 * This method returns the query part of the reference URI.
 * <pre>
 *    <https://google.com/calendar?format=week&hours=12#today>
 *    |     |            |        |                    |     |
 *     ----- ------------ -------- -------------------- -----
 *    scheme   authority    path         *query*       fragment
 * </pre>
 * 
 * @returns {String} The query part of the reference URI.  The query does NOT
 * include the leading '?'.
 */
Reference.prototype.getQuery = function() {
    return decodeURIComponent(this.getValue().search.slice(1));  // remove the leading '?'
};


/**
 * This method returns the fragment part of the reference URI.  The fragement
 * does NOT include the leading '#'.
 * <pre>
 *    <https://google.com/calendar?format=week&hours=12#today>
 *    |     |            |        |                    |     |
 *     ----- ------------ -------- -------------------- -----
 *    scheme   authority    path          query       *fragment*
 * </pre>
 * 
 * @returns {String} The fragment part of the reference URI.
 */
Reference.prototype.getFragment = function() {
    return decodeURIComponent(this.getValue().hash.slice(1));  // remove the leading '#'
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Reference.prototype.acceptVisitor = function(visitor) {
    visitor.visitReference(this);
};
