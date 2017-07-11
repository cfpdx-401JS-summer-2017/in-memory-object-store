const shortid = require('shortid');
const list = [];

function save(obj) {
    obj._id = shortid.generate();
    list.push(obj);
    return obj;
}

function get(id) {
    for (let i = 0; i < list.length; i++) {
        if (list[i]._id === id) {
            return list[i];
        }
        else {
            return null;
        }
    }
}

function getAll(obj) {
    list.push(obj);
    return list;
}


module.exports = {
    save: save,
    get: get,
    getAll: getAll

};
