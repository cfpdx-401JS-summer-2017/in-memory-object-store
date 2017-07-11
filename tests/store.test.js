const assert = require('assert');
const store = require('../lib/store');

describe('memory store', () => {
    it('generates an id', () => {
        let savedObj = store.save({ foo: 'bar' });
        assert.ok(savedObj._id);
    });
});