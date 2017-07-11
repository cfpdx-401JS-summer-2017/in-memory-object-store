
const shortid = require('shortid');

const list = [];
const dictionary = {};

const store = {

    save(objectToSave) {
        objectToSave._id = shortid.generate();

        return objectToSave;
    },

    get(id) {},
    getAll() {},
    remove(id) {}
};

module.exports = store;

