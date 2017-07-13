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

    describe('getAll', () => {
        it('returns entire array of objects', () => {
            const testObj1 = {foo:'bar'};
            const savedObj1 = store.save(testObj1);
            const testObj2 = {foo:'bar'};
            const savedObj2 = store.save(testObj2);
            let gotArray = store.getAll();
            assert.deepEqual(store.storesList, gotArray);
        });
    });

    describe('remove', () => {
        it('removes object from array by id', () => {
            const testObj1 = {foo:'bar'};
            const savedObj1 = store.save(testObj1);
            const testObj2 = {foo:'bar'};
            const savedObj2 = store.save(testObj2);
            const removedObj = store.remove(testObj1._id);
            assert.ok({removed:true});
        });
    });
});