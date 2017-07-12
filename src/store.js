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
    }
    return null;
}

function getAll() {
    return list.slice();
}

function remove(id) {
    for (let i = 0; i < list.length; i++){
        if(list[i]._id === id) {
            list.splice(i,1);
            return {removed : true};
        }
    }
    return {removed: false};

}


module.exports = {
    save: save,
    get: get,
    getAll: getAll,
    remove: remove

};
