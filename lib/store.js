const shortid = require('shortid');

const dogs = {};

// QUESTION: not sure if this needed
function Dog(name, breed, id) {
    this.name = name;
    this.breed = breed;
    this._id = id;
}

function save(dog) {
    const newDog = {
        name: dog.name,
        breed: dog.breed,
        _id: shortid.generate()
    };
    
    dogs[newDog._id]= newDog;
    return newDog;
}

function get(id) {
    const foundDog = dogs[id];
    return foundDog;
}

function getAll() {
    return Object.values(dogs);
}

function remove(id) {
    const dead = { removed: delete dogs[id] };
    return dead;
}

module.exports = {
    save: save,
    get: get,
    getAll: getAll,
    remove: remove
};
