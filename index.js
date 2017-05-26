'use strict';
const CliTable = require('cli-table');
const fillArray = require('fill-array');
const objectValues = require('object-values');
const termSize = require('term-size');
const arrify = require('arrify');

module.exports = (input, opts) => {
	input = arrify(input);

	const keys = [];
	const vals = [];

	for (const x of input) {
		vals.push(objectValues(x));

		for (const y of Object.keys(x)) {
			if (keys.indexOf(y) === -1) {
				keys.push(y);
			}
		}
	}

	const width = Math.floor(termSize.columns / (keys.length + 1));
	const table = new CliTable(Object.assign({
		head: keys,
		colWidths: fillArray([width], keys.length)
	}, opts));

	for (const x of vals) {
		table.push(x);
	}

	return table;
};
