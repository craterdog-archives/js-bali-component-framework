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


/**
 * This abstract class defines the methods that all components must support.
 */
const utilities = require('../utilities');
const Exception = require('../structures/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new component with the specified ancestry and interfaces candidate
 * with any optional parameters that are used to parameterize its type.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the component.
 * @param {Array} interfaces An array of interface names that are supported by the component.
 * @param {Object} parameters Optional parameters used to parameterize this component.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Component} The new component.
 */
const Component = function(ancestry, interfaces, parameters, debug) {
    // analyze the arguments
    parameters = parameters || undefined;  // normalize nulls to undefined
    this.debug = debug || 0;  // default value
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/types/Component', '$Component', '$ancestry', ancestry, [
            '/javascript/Array'
        ]);
        validator.validateType('/bali/types/Component', '$Component', '$interfaces', interfaces, [
            '/javascript/Array'
        ]);
        validator.validateType('/bali/types/Component', '$Component', '$parameters', parameters, [
            '/javascript/Undefined',
            '/javascript/Object',
            '/bali/collections/Catalog'
        ]);
    }

    this.getType = function() {
        return ancestry[0];
    };

    this.getAncestry = function() {
        return ancestry;
    };

    this.getInterfaces = function() {
        return interfaces;
    };

    this.getParameter = function(key) {
        if (parameters) return parameters.getAttribute(key);
    };

    this.setParameter = function(key, value) {
        parameters = parameters || this.componentize({});
        parameters.setAttribute(key, value);
    };

    this.getParameters = function() {
        return parameters;
    };

    this.setParameters = function(object) {
        if (object) parameters = this.componentize(object);
    };

    // extract the actual type
    ancestry = ancestry.concat('/bali/types/Component');
    this.isComponent = true;

    // add in the component interfaces
    interfaces = interfaces.concat(
        '/bali/interfaces/Comparable',
        '/bali/interfaces/Exportable'
    );

    // parameterize the component as needed
    this.setParameters(parameters);

    return this;
};
Component.prototype.constructor = Component;
exports.Component = Component;


// PUBLIC METHODS

/**
 * This method returns whether or not this component has the specified type in its ancestor chain.
 *
 * @param {String} type The name of the type in question.
 * @returns {Boolean} Whether or not this component has the specified type.
 */
Component.prototype.isType = function(type) {
    var foundIt = false;
    this.getAncestry().forEach(function(ancestor) {
        if (ancestor === type) foundIt = true;
    }, this);
    return foundIt;
};


/**
 * This method returns whether or not this component supports the specified interface.
 *
 * @param {String} iface The name of the interface in question.
 * @returns {Boolean} Whether or not this component supports the specified interface.
 */
Component.prototype.supportsInterface = function(iface) {
    var foundIt = false;
    this.getInterfaces().forEach(function(candidate) {
        if (candidate === iface) foundIt = true;
    }, this);
    return foundIt;
};


/**
 * This method returns whether or not this component is parameterized.
 *
 * @returns {Boolean} Whether or not this component is parameterized.
 */
Component.prototype.isParameterized = function() {
    return !!this.getParameters();
};


/**
 * This abstract method returns a boolean value for this component. It allows each component to be
 * used as a boolean in a condition that determines whether of not the component has a meaningful
 * value. Each component decides what is meaningful.  This method must be implemented by a subclass.
 *
 * @returns {Boolean} Whether or not this component has a meaningful value.
 */
Component.prototype.toBoolean = function() {
    const exception = new Exception({
        $module: '/bali/types/Component',
        $procedure: '$toBoolean',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method returns a string representation of the component.
 *
 * @returns {String} The corresponding string representation.
 */
Component.prototype.toString = function() {
    const formatter = new utilities.Formatter(0, this.debug);
    return formatter.formatComponent(this);
};


/**
 * This method returns a canonical Bali Document Notation™ representation of this component.
 *
 * @param {Number} indentation The number of levels of indentation that should be prepended to
 * each line of the string output.
 * @returns {String} A canonical Bali Document Notation™ representation of the component.
 */
Component.prototype.toBDN = function(indentation) {
    const formatter = new utilities.Formatter(indentation, this.debug);
    return formatter.formatComponent(this);
};


/**
 * This method returns an HTML document representing this component.
 *
 * @param {String} style A reference to the CSS style sheet that should be used for the look
 * and feel of the generated web page.
 * @returns {String} An HTML document representing the component.
 */
Component.prototype.toHTML = function(style) {
    const formatter = new utilities.HTML(style, this.debug);
    return formatter.formatComponent(this);
};


/**
 * This method determines whether or not this component is equal to another component.
 *
 * @param {Object} that The object that is being compared.
 * @returns {Boolean} Whether or not this component is equal to another component.
 */
Component.prototype.isEqualTo = function(that) {
    return this.comparedTo(that) === 0;
};


/**
 * This method compares this component with another object for natural order. It may be
 * overridden with a more efficient implementation by a subclass.
 *
 * @param {Object} that The object that is being compared.
 * @returns {Number} -1 if this < that; 0 if this === that; and 1 if this > that.
 */
Component.prototype.comparedTo = function(that) {
    const comparator = new utilities.Comparator(undefined, this.debug);
    return comparator.compareComponents(this, that);
};


/**
 * This method determines whether or not the specified pattern matches this component.
 * The pattern may be a bali.pattern element or an structure component containing
 * bali.pattern attributes. In either case, the bali.patterns are evaluated against the
 * string version of the component or its corresponding attribute. If the pattern does
 * not consist of any bali.pattern elements then a strict equality comparison of the
 * attributes listed in the pattern is used for matching. Note, this means that the
 * component may contain additional attributes not found in the pattern component and
 * it still matches.
 *
 * @param {Component} pattern The pattern to be used for matching.
 * @returns {Boolean} Whether or not this component matches the pattern.
 */
Component.prototype.isMatchedBy = function(pattern) {
    /* Case 1
     * If the pattern component is an actual bali.Pattern element then see if it
     * matches this component.
     */
    if (pattern.isType('/bali/elements/Pattern')) {
        return pattern.matches(this);
    }
    /* Case 2
     * If the pattern component is not an actual bali.Pattern element then the pattern
     * must be the same type as this component to have a chance of matching.
     */
    if (this.getType() !== pattern.getType()) {
        return false;
    }
    /* Case 3
     * If the pattern component and this component are both literals then if they are
     * equal they match.
     */
    if (pattern.supportsInterface('/bali/interfaces/Literal')) {
        return this.isEqualTo(pattern);
    }
    /* Case 4
     * If the pattern component is a bali.Association then the pattern key and this key
     * must be EQUAL and the pattern value must MATCH this value.
     */
    if (pattern.isType('/bali/structures/Association')) {
        if (!this.getKey().isEqualTo(pattern.getKey())) return false;  // try the next one
        if (!this.getValue().isMatchedBy(pattern.getValue())) throw false;  // abort the search
        return true;  // they match
    }
    /* Case 5
     * If the pattern component is sequential then each of its items must match an
     * item in this component. Note: if the pattern item is an association with a
     * value of 'none' then this component should not contain an association with
     * that key and a non-'none' value. If the pattern item is an association with a
     * value of 'any' then this component may or may not have an item with that key.
     */
    if (pattern.supportsInterface('/bali/interfaces/Sequential')) {
        // iterate through a pattern's items
        const patternIterator = pattern.getIterator();
        outer: while (patternIterator.hasNext()) {
            var patternItem = patternIterator.getNext();
            var thisIterator = this.getIterator();
            try { while (thisIterator.hasNext()) {
                var thisItem = thisIterator.getNext();
                if (thisItem.isMatchedBy(patternItem)) continue outer;
            } } catch (e) {
                return false;  // aborted, an association value that should be 'none' wasn't
            }
            if (patternItem.isType('/bali/structures/Association')) {
                var patternValue = patternItem.getValue();
                if (patternValue.isType('/bali/elements/Pattern') && (
                    patternValue.toString() === 'any' ||
                    patternValue.toString() === 'none'
                )) {
                    continue;  // fine, 'any' or 'none' matched no actual value
                }
            }
            return false;  // aborted, we didn't find a matching item
        }
        return true;  // all pattern items matched successfully
    }
    const exception = new Exception({
        $module: '/bali/types/Component',
        $procedure: '$isMatchedBy',
        $exception: '$invalidParameter',
        $component: this,
        $parameter: pattern,
        $text: 'An invalid pattern was passed to match.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method returns the unique hash value for this component.
 *
 * @returns {Number} The unique hash value for this component.
 */
Component.prototype.getHash = function() {
    var hash = 0;
    const source = this.toString();
    if (source.length === 0) return hash;
    for (var i = 0; i < source.length; i++) {
        const character = source.charCodeAt(i);
        hash = ((hash << 5) - hash) + character;
        hash |= 0;  // truncate to a 32 bit integer
    }
    return hash;
};


/**
 * This method returns a duplicate of this component.  A deep copy is made of all mutable
 * (non-elemental) attributes.
 *
 * @returns {Component} A duplicate component.
 */
Component.prototype.duplicate = function() {
    const duplicator = new utilities.Duplicator(this.debug);
    return duplicator.duplicateComponent(this);
};


/**
 * This abstract method accepts a visitor as part of the visitor pattern. It must be
 * implemented by a subclass.
 *
 * @param {Visitor} visitor The visitor that wants to visit this component.
 */
Component.prototype.acceptVisitor = function(visitor) {
    const exception = new Exception({
        $module: '/bali/types/Component',
        $procedure: '$acceptVisitor',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};
