
const assert = require('assert');
const store = require('../lib/store');

const reef = { type: 'reef', name: 'Banzai Pipeline' };
const point = { type: 'point', name: 'Barra de la Cruz' };
const beach = { type: 'beach', name: 'Cloudbreak' };

let savedObj1 = store.save(reef);
let savedObj2 = store.save(point);
let savedObj3 = store.save(beach);

describe('in memory store', () => {
    describe('save', () => {

        it('generates and saves id', () => {
            assert.ok(savedObj1._id);
        });

        it('saves with correct type property', () => {
            assert.equal(savedObj2.type, 'point');
        });

        it('saves with correct name property', () => {
            assert.equal(savedObj3.name, 'Cloudbreak');
        });
    });

    describe('get', () => {

        var objectId = savedObj3._id;
        var getResult = store.get(objectId);

        it('retrieves the correct object based on provided id', () => {
            assert.equal(getResult, savedObj3);
        });
    });

    describe('getAll', () => {

        var savedObjects = [
            { _id: savedObj1._id, name: savedObj1.name, type: savedObj1.type },
            { _id: savedObj2._id, name: savedObj2.name, type: savedObj2.type },
            { _id: savedObj3._id, name: savedObj3.name, type: savedObj3.type }];

        var getAllResult = store.getAll();

        it('retrieves all objects', () => {
            assert.deepEqual(savedObjects, getAllResult);
        });

        it('returns an empty array when no objects exist', () => {

            var getAllResultEmpty = store.getAll();
            getAllResultEmpty.length = 0;

            assert.equal(Array.isArray(getAllResultEmpty), true);
            assert.equal(getAllResult.length, 0);

        });
    });
});