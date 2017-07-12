const shortid = require('shortid');

class Store {
    constructor() {
        this.dictionary = {};
    }

    save(obj) {
        obj._id = shortid.generate();
        this.dictionary[obj._id] = obj;
        return obj;
    }

    get(id) {
        return this.dictionary[id];
    }

    getAll() {
        return Object.values(this.dictionary);
    }

    remove(id) {
        if (this.dictionary[id]) {
            delete this.dictionary[id];
            return { removed: true };
        } else {
            return { removed: false };
        }
    }
}

module.exports = Store;