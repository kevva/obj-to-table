import test from 'ava';
import fn from '.';

test(t => {
	const [tab1, tab2, tab3] = fn([{
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

	t.deepEqual(tab1, ['bar', 'meow', 'moo']);
	t.deepEqual(tab2, ['crow', 'eek', 'buzz']);
	t.deepEqual(tab3, ['ow', 'hee-haw', 'hum']);
});
