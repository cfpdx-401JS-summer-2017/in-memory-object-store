const assert = require('assert');
const Store = require('../lib/store');


describe('memory store', () => {

    describe('CRUD operations', () => {
        let store = null;
        beforeEach(() => {
            store = new Store();
        });

        let cat = { type: 'cat', name: 'Felix' };
        let car = { type: 'car', name: 'Lexus' };
        let dog = { type: 'dog', name: 'Pope' };

        var animals = [
            cat,
            car,
            dog
        ];


        function testItem(actual) {
            assert.equal(actual.animals[0].type, animals[0].type);
            assert.equal(actual.animals[1].type, animals[1].type);
            assert.equal(actual.animals[2].type, animals[2].type);
            assert.equal(actual.animals[0].name, animals[0].name);
            assert.equal(actual.animals[1].name, animals[1].name);
            assert.equal(actual.animals[2].name, animals[2].name);
        }

        it('saves and gives the id', () => {
            store.save(animals[0]);
            store.save(animals[1]);
            store.save(animals[2]);
            assert.ok(animals[0]._id);
        });


        it('gets by id', () => {
            let got = store.get(animals[0]._id);
        });


        it('getsAll', () => {
            assert.deepEqual(store.getAll(), []);
        });

        it('returns clone of list', () => {
            const storeList = store.getAll();
            storeList.push(4);
            assert.deepEqual(store.getAll(), []);
        });

        // it('does the save', () => {
        //     animals.forEach(animal => store.save(animal));
        //     assert.deepEqual(store.getAll(), animals);
        // });


        it('removes items', () => {
            let store = new Store();
            let car = store.save({ type: 'car', name: 'Nissan' });
            let plane = store.save({ type: 'plane', name: 'Fast' });

            let listRemove = store.remove(car._id);
            let allItem = store.getAll();

            assert.deepEqual(listRemove, { removed: true });
            assert.deepEqual(store.remove('fake id'), { removed: false });
        });
    });
});