const shortid = require('shortid');

const dogs = {}; // dictionary object

const store = {
    save(dog) {
        const newDog = {
            name: dog.name,
            breed: dog.breed,
            _id: shortid.generate()
        };
        dogs[newDog._id]= newDog;
        return newDog;
    },
    get(id) {
        const foundDog = dogs[id];
        return foundDog;
    },
    getAll() {
        return Object.values(dogs);
    },
    remove(id) {
        if (this.get(id)) {
            return { removed: delete dogs[id] };
        } else {
            return { removed: false };
        }
    }
};

module.exports = store;
