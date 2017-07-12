const shortid = require('shortid');
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

const storesList = [];

function save(obj) {
    obj._id = shortid.generate();
    storesList.push(obj);
    return obj;
}

function get(_id) {
    const gotObj = storesList.find(x => x._id === _id);
    return gotObj;
}

function getAll() {
    if(!storesList) {
        return null;
    } else {
        return storesList;
    }
}

module.exports = {
    storesList,
    save,
    get,
    getAll
};