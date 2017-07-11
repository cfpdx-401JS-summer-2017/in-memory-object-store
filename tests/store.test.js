
const assert = require('assert');
const store = require('../lib/store');

describe('in memory store', () => {
    describe('save', () => {

        let savedObj = store.save({ type: 'reef', name: 'banzai pipeline' });

        it('generates and saves id', () => {
            assert.ok(savedObj._id);
        });

        it('saves with correct type property', () => {
            assert.equal(savedObj.type, 'reef');
        });

        it('saves with correct name property', () => {
            assert.equal(savedObj.name, 'banzai pipeline');
        });
    });
});