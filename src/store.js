const shortid = require('shortid');

function save(obj) {
    obj._id = shortid.generate();
    return obj;
}

function get(obj) {
    let id = shortid.generate();
    obj._id = shortid.generate();
    if (obj._id === id) {
        return obj;
    }
    else {
        return null;
    }
}


module.exports = {
    save: save,
    get:get,
    

};
