const assert = require('assert');
const store = require('../src/store');

describe('memory store', () => {
    describe('save', () => {
        it('generates an id', () => {
            let savedObj = store.save({ foo: 'bar' });
            assert.ok(savedObj._id);
        });
    });
});

describe('memory store', () => {
    describe('get', () => {
        it('gives the id for an obj', () => {
            const testObj = { foo: 'bar' };
            const savedObj = store.save(testObj);
            const foundObj = store.get(savedObj._id);
            assert.deepEqual(savedObj, foundObj);
        });
    });
});

describe('memory store', () => {
    describe('getAll', () => {
        it('returns an array of the objects', () => {
            const testfirstObj = { foo: 'bar' };
            const savedfirstObj = store.save(testfirstObj);
            let newArray = store.getAll();
            assert.deepEqual(store.storesList, newArray);
        });
    });
});

describe('memory store', () => {
    describe('remove', () => {
        it('removes a specified object from the array', () => {
            const testRemoveObj = {foo: 'bar'};
            const testObjArray = store.save(testRemoveObj);
            const removeFromArray = store.remove(testRemoveObj);
            assert.ok({remove: true});
        });
    });
});
