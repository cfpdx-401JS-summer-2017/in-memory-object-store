const assert = require('assert');
const store = require('../lib/store');

describe('memory store', () => {
    const cat = { type: 'cat', name: 'Felix' };
    const dog = { type: 'dog', name: 'Fido' };
    const chimp = { type: 'chimp', name: 'Bubbles' };
    describe('save', () => {
        it('generates an id', () => {
            store.save(cat);
            store.save(dog);
            store.save(chimp);
            assert.ok(cat._id);
        });
    });
    describe('get', () => {
        it('gets by id', () => {
            let objectWithId = store.get(chimp._id);
            assert.equal(objectWithId, chimp);
        });
    });
    describe('getAll', () => {
        it('gets entire array', () => {
            let entireArray = store.getAll();
            //console.log('entireArray = ' + entireArray);
            assert.deepEqual(entireArray, [cat, dog, chimp]);
        })
    })
});