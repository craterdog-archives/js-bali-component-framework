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
 * resource element.
 */
const moduleName = '/bali/elements/Resource';
const URL = require('url').URL;
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new resource element using the specified value.
 *
 * An optional debug argument may be specified that controls the level of debugging that
 * should be applied during execution. The allowed levels are as follows:
 * <pre>
 *   0: no debugging is applied (this is the default value and has the best performance)
 *   1: log any exceptions to console.error before throwing them
 *   2: perform argument validation checks on each call (poor performance)
 *   3: log interesting arguments, states and results to console.log
 * </pre>
 *
 * @param {URL} value The URI value of the resource.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @returns {Resource} The new resource element.
 */
const Resource = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        [ moduleName ],
        [],
        parameters,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Resource', '$value', value, [
            '/javascript/String',
            '/nodejs/URL'
        ]);
    }

    try {
        if (value.constructor.name !== 'URL') {
            value = new URL(value);
        }
    } catch (cause) {
        const exception = new abstractions.Exception({
            $module: moduleName,
            $procedure: '$Resource',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: '"An invalid resource value was passed to the constructor."'
        }, cause, this.debug);
        throw exception;
    }

    this.getValue = function() { return value; };

    return this;
};
Resource.prototype = Object.create(abstractions.Element.prototype);
Resource.prototype.constructor = Resource;
exports.Resource = Resource;


// PUBLIC METHODS

/**
 * This method returns whether or not this resource has a meaningful value. A resource always
 * has a meaningful value.
 *
 * @returns {Boolean} Whether or not this resource has a meaningful value.
 */
Resource.prototype.isSignificant = function() {
    return true;
};


/**
 * This method returns the scheme part of the resource URI.  The scheme does NOT include
 * the trailing ':'.
 * <pre>
 *    <https://google.com/calendar?format=week&hours=12#today>
 *    |     |            |        |                    |     |
 *     ----- ------------ -------- -------------------- -----
 *   *scheme*  authority    path          query        fragment
 * </pre>
 *
 * @returns {String} The scheme part of the resource URI.
 */
Resource.prototype.getScheme = function() {
    return this.getValue().protocol.slice(0, -1);  // remove trailing ':'
};


/**
 * This method returns the authority part of the resource URI.  The authority does NOT
 * include the leading '//'.
 * <pre>
 *    <https://google.com/calendar?format=week&hours=12#today>
 *    |     |            |        |                    |     |
 *     ----- ------------ -------- -------------------- -----
 *    scheme  *authority*   path          query        fragment
 * </pre>
 *
 * @returns {String} The authority part of the resource URI.
 */
Resource.prototype.getAuthority = function() {
    const url = this.getValue();
    var authority = url.username;
    if (authority && url.password) authority += ':' + url.password;
    if (authority) authority += '@';
    authority += url.host;
    return decodeURIComponent(authority);
};


/**
 * This method returns the path part of the resource URI.  The path includes
 * the leading '/'.
 * <pre>
 *    <https://google.com/calendar?format=week&hours=12#today>
 *    |     |            |        |                    |     |
 *     ----- ------------ -------- -------------------- -----
 *    scheme   authority   *path*         query        fragment
 * </pre>
 *
 * @returns {String} The path part of the resource URI.
 */
Resource.prototype.getPath = function() {
    return decodeURIComponent(this.getValue().pathname);
};


/**
 * This method returns the query part of the resource URI.
 * <pre>
 *    <https://google.com/calendar?format=week&hours=12#today>
 *    |     |            |        |                    |     |
 *     ----- ------------ -------- -------------------- -----
 *    scheme   authority    path         *query*       fragment
 * </pre>
 *
 * @returns {String} The query part of the resource URI.  The query does NOT
 * include the leading '?'.
 */
Resource.prototype.getQuery = function() {
    return decodeURIComponent(this.getValue().search.slice(1));  // remove the leading '?'
};


/**
 * This method returns the fragment part of the resource URI.  The fragement
 * does NOT include the leading '#'.
 * <pre>
 *    <https://google.com/calendar?format=week&hours=12#today>
 *    |     |            |        |                    |     |
 *     ----- ------------ -------- -------------------- -----
 *    scheme   authority    path          query       *fragment*
 * </pre>
 *
 * @returns {String} The fragment part of the resource URI.
 */
Resource.prototype.getFragment = function() {
    return decodeURIComponent(this.getValue().hash.slice(1));  // remove the leading '#'
};

