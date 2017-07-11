const shortid = require('shortid');

const dogs = [];

function Dog(name, breed, id) {
    this.name = name;
    this.breed = breed;
    this._id = id;//shortid.generate();
}

dogs.push(new Dog('snoopy', 'beagle', 'rygGbb0MBW'));
dogs.push(new Dog('scooby doo', 'great dane', 'Byl6ZbCMHZ'));
dogs.push(new Dog('pluto', 'hound', 'Bkx8NZAzBZ'));
dogs.push(new Dog('dino', 'snorkasaurus', 'HJWIEZAzBW'));
// console.log(dogs);

function save(dog) {
    const newDog = {
        name: dog.name,
        breed: dog.breed,
        _id: shortid.generate()
    };
    // console.log(newDog);
    dogs.push(newDog);
    return newDog;
}

function get(id) {
    const foundDog = dogs.find(function(dog){
        return dog._id === id;
    });
    // console.log(foundDog);
    return foundDog;
}

function getAll() {
    // console.log('I have', dogs.length, 'dogs!');
    return dogs;
}

module.exports = {
    save: save,
    get: get,
    getAll: getAll
};