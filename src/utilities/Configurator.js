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
 * This class allows a configuration to be stored into and loaded from a configuration file.
 */
const os = require('os');
const pfs = require('fs').promises;
const EOL = '\n'; // The POSIX end of line character
const Validator = require('./Validator').Validator;
const Exception = require('../composites/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a configurator object.
 * 
 * @param {String} filename The filename for the configuration.
 * @param {String} directory The configuration directory.
 * @param {Boolean|Number} debug An optional number in the range [0..3] that controls
 * the level of debugging that occurs:
 * <pre>
 *   0 (or false): debugging turned off
 *   1 (or true): log exceptions to console.error
 *   2: perform argument validation and log exceptions to console.error
 *   3: perform argument validation and log exceptions to console.error and debug info to console.log
 * </pre>
 * @returns {Configurator} A new association.
 */
function Configurator(filename, directory, debug) {
    if (debug === null || debug === undefined) debug = 0;  // default is off
    this.debug = debug;

    if (this.debug > 1) {
        const validator = new Validator(this.debug);
        validator.validateType('/bali/utilities/Configurator', '$Configurator', '$filename', filename, [
            '/javascript/String'
        ]);
        validator.validateType('/bali/utilities/Configurator', '$Configurator', '$directory', directory, [
            '/javascript/Undefined',
            '/javascript/String'
        ]);
    }

    this.directory = directory || os.homedir() + '/.bali/';
    this.file = directory + filename;

    return this;
}
Configurator.prototype.constructor = Configurator;
exports.Configurator = Configurator;


// PUBLIC METHODS

/**
 * This method stores the current configuration in the configuration file.
 * @param {String} configuration The current configuration.
 */
Configurator.prototype.store = async function(configuration) {
    try {
        if (this.debug > 1) {
            const validator = new Validator(this.debug);
            validator.validateType('/bali/utilities/Configurator', '$store', '$configuration', configuration, [
                '/javascript/String'
            ]);
        }
        try { await pfs.mkdir(this.directory, 0o700); } catch (ignore) {};
        await pfs.writeFile(this.file, configuration + EOL, {encoding: 'utf8', mode: 0o600});
    } catch (cause) {
        const exception = new Exception({
            $module: '/bali/utilities/Configurator',
            $procedure: '$store',
            $file: this.file,
            $configuration: configuration,
            $exception: '$unexpected',
            $text: 'An unexpected error occurred while attempting to store the configuration.'
        }, cause);
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }
};


/**
 * This method loads the current configuration from the configuration file.
 * @returns {String} The current configuration.
 */
Configurator.prototype.load = async function() {
    try {
        const configuration = await pfs.readFile(this.file, 'utf8');
        return configuration.slice(0, -1);  // remove the trailing EOL
    } catch (cause) {
        if (cause.code !== 'ENOENT') {
            const exception = new Exception({
                $module: '/bali/utilities/Configurator',
                $procedure: '$load',
                $file: this.file,
                $exception: '$unexpected',
                $text: 'An unexpected error occurred while attempting to load the configuration.'
            }, cause);
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
        }
    }
};


/**
 * This method deletes the current configuration file.
 */
Configurator.prototype.delete = async function() {
    try {
        await pfs.unlink(this.file);
    } catch (cause) {
        if (cause.code !== 'ENOENT') {
            const exception = new Exception({
                $module: '/bali/utilities/Configurator',
                $procedure: '$delete',
                $file: this.file,
                $exception: '$unexpected',
                $text: 'An unexpected error occurred while attempting to delete the configuration.'
            }, cause);
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
        }
    }
};
