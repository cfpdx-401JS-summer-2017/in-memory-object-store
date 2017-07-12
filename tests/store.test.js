
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
        var result = store.get(objectId);

        it('retrieves the correct object based on provided id', () => {
            assert.equal(result, savedObj3);

        });
    });
});


