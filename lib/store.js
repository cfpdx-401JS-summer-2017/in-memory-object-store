const shortid = require('shortid');
const list = [];

function save(obj) {
    obj._id = shortid.generate();
    list.push(obj);
    return obj;
}

function get(id) {
    return list.find(obj => obj._id === id) || null;
}

function getAll() {
    return list.slice();
}

function remove(id) {
    const index = list.findIndex(obj => obj._id === id);
    if (index < 0) return { removed: false };
    list.splice(index, 1);
    return { removed: true };
}

module.exports = {
    save: save,
    get: get,
    getAll: getAll,
    remove: remove
};