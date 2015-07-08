'use strict';
var deepEqual = require('deep-equal');
var test = require('ava');
var objToTable = require('./');

test(function (t) {
	var table = objToTable([{
		foo: 'bar',
		cat: 'meow',
		unicorn: 'moo'
	}, {
		foo: 'crow',
		cat: 'eek',
		unicorn: 'buzz'
	}, {
		foo: 'ow',
		cat: 'hee-haw',
		unicorn: 'hum'
	}]);

	t.assert(deepEqual(table[0], ['bar', 'meow', 'moo']));
	t.assert(deepEqual(table[1], ['crow', 'eek', 'buzz']));
	t.assert(deepEqual(table[2], ['ow', 'hee-haw', 'hum']));
	t.end();
});
