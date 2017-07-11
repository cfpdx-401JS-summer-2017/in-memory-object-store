const assert = require('assert');
const store = require('../src/store');

describe('memory store', () => {
    const dog = { type: 'dog', name: 'rudy' };
    const cat = { type: 'cat', name: 'stewie' };

    describe('save', () => {
        it('generates an id', () => {
            let dogObj = store.save(dog);
            assert.ok(dogObj._id);
        });
    });

    describe('get', () => {
        it('gets object with an id', () => {
            let objectWithId = store.get(dog._id);
            assert.equal(objectWithId, dog);
        });

        it('gets object with no id', () => {
            let objectWithNoId = store.get();
            assert.equal(objectWithNoId, null);
        });
    });

    describe('getAll', () => {
        it('return array of all objects', () => {
            let arrayofObj = store.getAll();
            assert.deepEqual(arrayofObj, [dog]);
        });

        // it('returns empty array',() => {
        //     let emptyArray = store.getAll();
        //     assert.deepEqual(emptyArray, []);
        // });

    });
});