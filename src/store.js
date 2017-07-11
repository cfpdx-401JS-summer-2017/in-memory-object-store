const shortid = require('shortid');
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

function save(obj) {
    obj._id = shortid.generate();
    return obj;
}
module.exports = {save: save};

// class Store {
//     constructor() {
//         this.list = [];
//     }

//     save(object) {
//         object.id = shortid.generate();
//         arrayOfStores.push(object);
//         return object.id;
//     }

//     get(id) {
//         if(Store.id === id) {
//             return id;
//         }
//         else {
//             return null;
//         }
//     }

//     getAll() {
//         //returns array of all objects, returns [] if no objects are there
//     }

//     remove(id){
//         //takes id, remove the object from the array with that id
//     }

// }

// module.exports = Store;

//