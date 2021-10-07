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


// PUBLIC FUNCTIONS

/**
 * This function creates a configurator object.
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
 * @param {String} filename The filename for the configuration.
 * @param {String} directory The configuration directory.
 * @returns {Configurator} A new association.
 */
const Configurator = function(filename, directory, debug) {
    if (debug === null || debug === undefined) debug = 0;  // default is off
    this.debug = debug;

    if (directory && !directory.endsWith('/')) directory += '/';
    this.directory = directory || os.homedir() + '/.bali/';
    this.file = this.directory + filename;

    return this;
};
Configurator.prototype.constructor = Configurator;
exports.Configurator = Configurator;


// PUBLIC METHODS

/**
 * This method stores the current configuration in the configuration file.
 * @param {String} configuration The current configuration.
 */
Configurator.prototype.store = async function(configuration) {
    try {
        try { await pfs.mkdir(this.directory, 0o700); } catch (ignore) {};
        await pfs.writeFile(this.file, configuration + EOL, {encoding: 'utf8', mode: 0o600});  // add POSIX EOL
    } catch (cause) {
        const exception = Error('An error occurred while attempting to store the configuration.', cause);
        if (this.debug > 0) console.error(exception);
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
        return configuration.slice(0, -1);  // remove the trailing EOL  // remove POSIX EOL
    } catch (cause) {
        if (cause.code !== 'ENOENT') {
            const exception = Error('An error occurred while attempting to load the configuration.', cause);
            if (this.debug > 0) console.error(exception);
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
            const exception = Error('An error occurred while attempting to delete the configuration.', cause);
            if (this.debug > 0) console.error(exception);
            throw exception;
        }
    }
};
