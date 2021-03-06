'use strict';

// MAIN //

/**
* ESLint configuration.
*
* @namespace eslint
*/
var eslint = {};

/**
* Root configuration.
*
* @name root
* @memberof eslint
* @type {boolean}
* @default true
*/
eslint.root = true;

/**
* Default environments.
*
* @name env
* @memberof eslint
* @type {Object}
*/
eslint.env = require( './env' );

/**
* Lint rules.
*
* @name rules
* @memberof eslint
* @type {Object}
*/
eslint.rules = require( './rules' );

/**
* Parser options.
*
* @name ParserOptions
* @memberof rules
* @type {Object}
*/
eslint.parserOptions = require( './parser-options' );


// EXPORTS //

module.exports = eslint;
