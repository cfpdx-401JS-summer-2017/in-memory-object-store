const shortId = require('shortid');

const arrayOfStores = [];
class Store {
    constructor() {
        this.list = [];
    }

    save(object) {
        object.id = shortId.generate();
        arrayOfStores.push(object);
        return object.id;
    }

    get(id) {
        if(Store.id === id) {
            return id;
        }
        else {
            return null;
        }
    }

    getAll() {
        //returns array of all objects, returns [] if no objects are there
    }

    remove(id){
        //takes id, remove the object from the array with that id
    }

}

module.exports = Store;

// module.exports = function createStore() {
//     const list = [];
//     const dictionary = {};

//     const store = {
//         save(object) {
//             object.id = shortId.generate();
//             return object.id;
//         },
//         get(id) {
//             if (id) {
//                 return id;
//             }
//             else {
//                 return null;
//             }
//         },

//         getAll() {

//         },


//         remove(id) {

//         }

//     }

//     return store;
// }