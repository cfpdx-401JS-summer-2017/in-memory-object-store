const shortid = require('shortid');

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

function save(obj) {
    obj._id = shortid.generate();
    return obj;
}

module.exports = {save: save};