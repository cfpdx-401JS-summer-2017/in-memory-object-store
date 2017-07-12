const assert = require('assert');
const store = require('../src/store');

describe('memory store', () => {
    const dog = { type: 'dog', name: 'rudy' };
    const cat = { type: 'cat', name: 'stewie' };

    describe('save', () => {
        it('generates an id', () => {
            let dogObj = store.save(dog);
            let catObj = store.save(cat);
            assert.ok(dogObj._id);
            assert.ok(catObj._id);
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

    describe('get all', () => {
        it('return array of all objects', () => {
            let arrayofObj = store.getAll();
            assert.deepEqual(arrayofObj, [dog,cat]);
        });

        it('returns empty array',() => {
            let emptyArray = store.getAll();
            assert.deepEqual(emptyArray, []);
        });

    });

    describe('remove id',() => {
        it('remove object with id', () => {
            let removeObject = store.remove(dog._id);
            assert.deepEqual(removeObject,{removed: true});
        });
    });
});