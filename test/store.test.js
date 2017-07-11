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
            const testObj = {foo: 'bar'};
            const savedObj = store.save(testObj);
            const foundObj = store.get(savedObj._id);
            assert.deepEqual(savedObj, foundObj);
        });
    });
});


