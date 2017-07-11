const assert = require('assert');
const store = require('../src/store');

describe('memory store', () => {
    describe('save', () => {
        it('generates an id', () => {
            let savedObj = store.save({foo: 'hey'});
            assert.ok(savedObj._id);
        });
    });

    describe('get', () => {
        it('gets object with an id', () => {
            let objectWithId = store.get({foo:'id'});
            assert.ok(objectWithId);
        });

        it('gets object with no id', () => {
            let objectWithNoId = store.get({foo: null});
            assert.equal(objectWithNoId, null);
        });

    });
});