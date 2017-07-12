const shortid = require('shortid');
const storesList = [];


function save(obj) {
    obj._id = shortid.generate();
    storesList.push(obj);
    return obj;
}

function get(_id) {
    const foundObj = storesList.find(x => x._id === _id);
    return foundObj;
}

function getAll() {
    return storesList;
}

function remove(_id) {
    const removingObj = storesList.find(x => x._id === _id);
    if(!removingObj) {
        return {removed: false};
    } else {
        let index = storesList.indexOf(removingObj);
        storesList.splice(index, 1);
    }
}

module.exports = {
    storesList,
    save,
    get,
    getAll,
    remove
};