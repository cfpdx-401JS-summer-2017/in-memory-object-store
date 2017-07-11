const assert = require('assert');
const store = require('../src/store');
describe('memory store', () => {
    describe('save', () => {
        it('generates an id', () => {
            let savedObj = store.save({foo: 'hey'});
            assert.ok(savedObj._id);
        });
    });
});