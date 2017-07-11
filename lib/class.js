//var shortid = require('shortid');
// console.log(shortid.generate());

class Store {
    constructor() {
        this.list = [];
    }

    save(objectToSave) {

    }
    
    get(id) {

    }

    getAll() {
        // don't give the caller the store's array!
        // return this.list.slice();
    }
    
    remove(id) {

    }
}

module.exports = Store;