const shortid = require('shortid');
const arrayOfObjects = [];

function save(obj) {
    obj._id = shortid.generate();
    return obj;
}

function get(id) {
    if (id) {
        return id;
    }
    else {
        return null;
    }
}

function getAll(obj) {
    arrayOfObjects.push(obj);
    return arrayOfObjects;
}


module.exports = {
    save: save,
    get:get,
    getAll: getAll

};
