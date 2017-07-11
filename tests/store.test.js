const assert = require('assert');
const store = require('../lib/store');

describe('memory store', () => {
    describe('save', () => {
        it('generates an id', () => {
            let savedObj = store.save({foo:'bar'});
            assert.ok(savedObj._id);
        });
    });

    describe('get', () => {
        it('returns an object by id', () => {
            const testObj = {foo:'bar'};
            const savedObj = store.save(testObj);
            let gotObj = store.get(savedObj._id);
            assert.deepEqual(savedObj, gotObj);
        });
    });
});