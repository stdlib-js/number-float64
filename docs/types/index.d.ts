/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import base = require( '@stdlib/number-float64-base' );
import reviver = require( '@stdlib/number-float64-reviver' );
import toJSON = require( '@stdlib/number-float64-to-json' );

/**
* Interface describing the `float64` namespace.
*/
interface Namespace {
	/**
	* Base utilities for double-precision floating-point numbers.
	*/
	base: typeof base;

	/**
	* Revives a JSON-serialized number.
	*
	* @param key - key
	* @param value - value
	* @returns value
	*
	* @example
	* var parseJSON = require( '@stdlib/utils-parse-json' );
	*
	* var str = '{"type":"float64","value":"NaN"}';
	*
	* var out = parseJSON( str, ns.reviver );
	* // returns NaN
	*/
	reviver: typeof reviver;

	/**
	* Returns a JSON representation of a number.
	*
	* @param x - input value
	* @returns JSON representation
	*
	* @example
	* var str = JSON.stringify( ns.toJSON( NaN ) );
	* // returns '{"type":"float64","value":"NaN"}'
	*/
	toJSON: typeof toJSON;
}

/**
* Utilities for double-precision floating-point numbers.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
