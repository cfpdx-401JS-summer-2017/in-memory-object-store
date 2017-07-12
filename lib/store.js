
const shortid = require('shortid');
var list = [];

const store = {

    save(objectToSave) {
        objectToSave._id = shortid.generate();

        list.push(objectToSave);
        return objectToSave;
    },

    get(id) {

        return list.find((targetObj) => {
            return targetObj._id === id;
        });
    },

    getAll() {
        return list;
    },

    remove(id) { },
};

module.exports = store;