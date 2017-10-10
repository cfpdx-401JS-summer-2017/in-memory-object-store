const shortid = require('shortid');
// const storeList = [];

class Store {

    constructor() {
        this._storeList = [];
    }
    save(obj) {
        obj._id = shortid.generate();
        this._storeList.push(obj);
        return obj;
    }

    get(id) {
        return this._storeList.find(obj => obj._id === id) || null;
    }

    getAll() {
        return this._storeList.slice();
    }

    remove(id) {
        const index = this._storeList.findIndex(obj => obj._id === id);
        if(index < 0) return {removed: false};
        this._storeList.splice(index, 1);
        return {removed: true};
    }
}

module.exports = Store;

