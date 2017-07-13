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
    const item = storeList.find(c => c._id === id);
    const itemIndex = storeList.indexOf(item);
    storeList.splice(itemIndex, 1);
    
    let exists = {};
    itemIndex === -1 ? exists = { removed: false } : exists = { removed: true };

    return exists;
}

function removeAll() {
    storeList = [];
}

module.exports = {save, get, getAll, remove, removeAll};