const shortid = require('shortid');
const dictionary = {};

function save(obj) {
    obj._id = shortid.generate();
    dictionary[obj._id] = obj;
    return obj;
}

function get(id) {
    return dictionary[id];
}

function getAll() {
    return Object.values(dictionary);
}

function remove(id) {
    if (dictionary[id]) {
        delete dictionary[id];
        return { removed: true };
    } else {
        return { removed: false };
    }
}

module.exports = {
    save: save,
    get: get,
    getAll: getAll,
    remove: remove
};
