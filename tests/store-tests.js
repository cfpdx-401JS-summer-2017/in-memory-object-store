const assert = require('assert');
const store = require('../lib/store');

describe('memory store', () => {
    beforeEach(() => {
        store.removeAll();
    });

    describe('save', () => {
        it('generates an id', () => {
            let savedObj = store.save({ name: 'cheddar', origin: 'england' });
            assert.ok(savedObj._id);
        });

        it('returns object with that id', () => {
            let savedObj = store.save({ name: 'cheddar', origin: 'england' });
            assert.deepEqual(savedObj, { name: 'cheddar', origin: 'england', _id: savedObj._id });
        });
    });

    describe('get', () => {
        it('returns the object with an id', () => {
            let savedObj = store.save({ name: 'havarti', origin: 'denmark' });
            let gotObj = store.get(savedObj._id);
            assert.deepEqual(savedObj, gotObj);
        });

        it('returns null if that id does not exist', () => {
            let nullObj = store.get(4);
            assert.deepEqual(nullObj, null);
        });
    });

    describe('get all', () => {
        it('returns array of all objects', () => {
            let cheddar = store.save({ name: 'cheddar', origin: 'england' });
            let havarti = store.save({ name: 'havarti', origin: 'denmark' });
            let brie = store.save({ name: 'brie', origin: 'france' });

            let returnedArray = [
                { name: 'cheddar', origin: 'england', _id: cheddar._id },
                { name: 'havarti', origin: 'denmark', _id: havarti._id },
                { name: 'brie', origin: 'france', _id: brie._id }
            ];

            let allObj = store.getAll();
            assert.ok(allObj, returnedArray);
        });

        it('returns an empty array if no objects', () => {
            let allObj = store.getAll();
            assert.ok(allObj, []);
        });

        describe('remove', () => {
            it('removes the object from the store by its id', () => {
                let cheddar = store.save({ name: 'cheddar', origin: 'england' });
                let havarti = store.save({ name: 'havarti', origin: 'denmark' });
                let brie = store.save({ name: 'brie', origin: 'france' });

                let afterRemoved = store.remove(cheddar._id);

                assert.deepEqual(afterRemoved, { removed: true });
            });
        });
    });
});