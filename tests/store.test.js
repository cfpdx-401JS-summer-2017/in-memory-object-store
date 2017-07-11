const assert = require('assert');
const store = require('../lib/store');

describe('memory store', () => {
    it('creates a new dog and generates an id', () => {
        let newDog = store.save({
            name: 'charlie',
            breed: 'beagle'
        });
        assert.ok(newDog._id);
    });

    it('gets the dog by id', () => {
        let foundDog = store.get('rygGbb0MBW');
        assert.ok(foundDog._id);
    });
});