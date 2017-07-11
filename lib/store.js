const shortid = require('shortid');
const list = [];

function save(obj) {
    obj._id = shortid.generate();
    return obj;
}
function get(id) {
    if (id) {
        return id;
    }
}

module.exports = { 
    save: save,
    get: get
 };