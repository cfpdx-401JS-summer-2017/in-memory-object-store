const assert = require('assert');
const store = require('../src/store');

describe('memory store', () => {
    const dog = {type: 'dog', name: 'Sir'};
    const cat = {type: 'cat', name: 'Miss'};

    describe('save', () => {
        it('generates an id', () => {
            let dogObj = store.save(dog);
            let catObj = store.save(cat);
            assert.ok(dogObj._id);
            assert.ok(catObj._id);
        });
    });

    describe('get', () => {
        it('gets object with an id', () => {
            let objectWithId = store.get(dog._id);
            assert.ok(objectWithId);
        });

        it('gets object with no id', () => {
            let objectWithNoId = store.get();
            assert.equal(objectWithNoId, null);
        });
    });

    // describe('getAll', () => {
    //     it('return array of all objects',() => {

    //     });
        
    //     it('returns empty array',() => {
    //         let arrayOfAll = store.getAll({});
    //         assert.equal(arrayOfAll, []);

    //     });

    // });
});