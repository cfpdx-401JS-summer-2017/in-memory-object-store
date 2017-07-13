const assert = require('assert');
const store = require('../lib/store');

describe('memory store', () => {
    it('creates a new dog and generates an id', () => {
        let newDog = store.save({
            name: 'charlie',
            breed: 'beagle'
        });
        assert.ok(newDog._id);
    });

    it('finds a dog by id and returns that dog object', () => {
        let charlie = store.save({
            name: 'scooby doo',
            breed: 'great dane'
        });
        let foundDog = store.get(charlie._id);
        assert.deepEqual(foundDog, charlie);
    });

    it('returns and array all the dogs', () => {
        store.save({
            name: 'pluto',
            breed: 'hound'
        });
        store.save({
            name: 'snoopy',
            breed: 'beagle'
        });
        let fetchedDogs = store.getAll();
        assert.equal(fetchedDogs.length, 4); // count of dogs includes the 2 dogs added in test above, 
    });

    it('removes the dog by id and returns a different object', () => {
        let dino = store.save({
            name: 'dino',
            breed: 'snorkasaurus'
        });
        let killedDog = store.remove(dino._id);
        assert.deepEqual(killedDog, { removed: true });
        // assert.deepEqual(killedDog, { removed: false });
        // assert.equal([], store.getAll());
    });
});
