'use strict';
var CliTable = require('cli-table');
var fillArray = require('fill-array');
var objectAssign = require('object-assign');
var objectValues = require('object-values');
var windowSize = require('window-size');

module.exports = function (arr, opts) {
	arr = Array.isArray(arr) ? arr : [arr];

	var keys = [];
	var vals = [];

	for (var i = 0; i < arr.length; i++) {
		vals.push(objectValues(arr[i]));

		for (var key in arr[i]) {
			if (keys.indexOf(key) === -1) {
				keys.push(key);
			}
		}
	}

	var width = Math.floor(windowSize.width / (keys.length + 1));
	var table = new CliTable(objectAssign({
		head: keys,
		colWidths: fillArray([width], keys.length)
	}, opts));

	for (var j = 0; j < vals.length; j++) {
		table.push(vals[j]);
	}

	return table;
};
