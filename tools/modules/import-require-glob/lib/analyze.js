'use strict';

// MODULES //

var debug = require( 'debug' )( 'import-require-glob:analyze' );
var getPaths = require( './../../import-require' );


// MAIN //

/**
* Analyzes file ASTs for import and require paths.
*
* @private
* @param {ObjectArray} files - file contents
* @returns {ObjectArray} analysis results
*/
function analyze( files ) {
	var results;
	var out;
	var i;

	debug( 'Analyzing %d files...', files.length );
	results = new Array( files.length );
	for ( i = 0; i < files.length; i++ ) {
		debug( 'Analyzing file %d of %d: %s', i+1, files.length, files[ i ].file );
		out = getPaths( files[ i ].data );

		debug( 'Found %d module literals: %s', out.literals.length, out.literals.join( ', ' ) );
		debug( 'Found %d module expressions: %s', out.expressions.length, out.expressions.join( ', ' ) );

		results[ i ] = {
			'file': files[ i ].file,
			'literals': out.literals,
			'expressions': out.expressions
		};
	}
	debug( 'Analyzed %d of %d files.', i, files.length );
	return results;
} // end FUNCTION analyze()


// EXPORTS //

module.exports = analyze;
