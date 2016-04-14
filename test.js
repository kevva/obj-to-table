import test from 'ava';
import fn from './';

test(t => {
	const table = fn([{
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

	t.deepEqual(table[0], ['bar', 'meow', 'moo']);
	t.deepEqual(table[1], ['crow', 'eek', 'buzz']);
	t.deepEqual(table[2], ['ow', 'hee-haw', 'hum']);
});
