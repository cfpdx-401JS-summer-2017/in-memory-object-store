
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

    remove(id) {
        var index = -1;
        var message = { removed: false };

        for (var i = 0; i < list.length; i++) {
            if (list[i]._id == id) {
                index = i;
            }
        }
        if (index !== -1) {
            list.splice(index, 1);
            message = { removed: true };
        }

        return message;
    }
};

module.exports = store;