

const assert = require('assert');
const store = require('../lib/store');

const reef = { type: 'reef', name: 'Banzai Pipeline' };
const point = { type: 'point', name: 'Barra de la Cruz' };
const beach = { type: 'beach', name: 'Cloudbreak' };

let savedObj1 = store.save(reef);
let savedObj2 = store.save(point);
let savedObj3 = store.save(beach);

describe('returns empty array', () => {

    it('returns an empty array when no objects exist', () => {
        before(() => {

            var getAllResultEmpty = store.getAll();

            assert.equal(Array.isArray(getAllResultEmpty), true);
            assert.equal(getAllResultEmpty.length, 0);
        });
    });
});

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

describe('getAll', () => {

    var savedObjects = [
        { _id: savedObj1._id, name: savedObj1.name, type: savedObj1.type },
        { _id: savedObj2._id, name: savedObj2.name, type: savedObj2.type },
        { _id: savedObj3._id, name: savedObj3.name, type: savedObj3.type }];

    it('retrieves all objects', () => {
        before(() => {
            var getAllResult = store.getAll();
            assert.deepEqual(savedObjects, getAllResult);
        });
    });
});

describe('get', () => {

    var objectId = savedObj3._id;
    var getResult = store.get(objectId);

    it('retrieves the correct object based on provided id', () => {
        assert.equal(getResult, savedObj3);
    });
});

describe('remove', () => {
    var objectId = savedObj2._id;
    var removeResult = store.remove(objectId);
    it('removes the correct object based on object id', () => {
        assert.deepEqual(removeResult, { removed: true });
    });
});