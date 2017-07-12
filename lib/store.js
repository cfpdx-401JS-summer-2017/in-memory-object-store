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
    const itemIndex = storeList.find(c => c._id === id);
    storeList.splice(itemIndex, 1);
    let exists = {};
    itemIndex ? exists = { removed: true } : exists = { removed: false };

    return exists;
}

function removeAll() {
    storeList = [];
}

module.exports = {save, get, getAll, remove, removeAll};