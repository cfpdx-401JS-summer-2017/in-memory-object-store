const shortid = require('shortid');
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

let storeList = [];

function save(obj) {
    obj._id = shortid.generate();
    storeList.push(obj);
    return obj;
}

function get(id) {
    const gotCheese = storeList.find( c => c._id === id);
    return gotCheese;
}

function getAll() {
    return storeList.slice();
}

function remove(id) {

}


module.exports = {save, get, getAll, remove};