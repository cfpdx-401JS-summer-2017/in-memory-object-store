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
    if(!gotObj) {
        return null;
    } else {
        return gotObj;
    }
}

function getAll() {
    if(!storesList) {
        return [];
    } else {
        return storesList;
    }
}

function remove(_id) {
    const doomedObj = storesList.find(x => x._id === _id);
    if(!doomedObj) {
        return {removed:false};
    } else {
        let doomedIndex = storesList.indexOf(doomedObj);
        storesList.splice(doomedIndex, 1);
        return {removed:true};
    }
}

module.exports = {
    storesList,
    save,
    get,
    getAll,
    remove
};