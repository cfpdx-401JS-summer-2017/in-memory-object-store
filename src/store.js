const shortid = require('shortid');

function save(obj) {
    obj._id = shortid.generate()
    return obj;
}


module.exports = { save: save };