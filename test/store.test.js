const assert = require('assert');
const store = require('../lib/store');

describe('memory store', () => {
    const cat = { type: 'cat', name: 'felix' };
    const dog = { type: 'dog', name: 'fido' };
    describe('save', () => {
        it('generates an id', () => {
            let catObj = store.save(cat);
            let dogObj = store.save(dog);
            assert.ok(catObj._id);
        });
    });
    describe('get', () => {
        it('gets by id', () => {
            let objectWithId = store.get(cat._id);
            assert.ok(objectWithId);
        });
    })
});