const shortid = require('shortid');
const storesList = [];


function save(obj) {
    obj._id = shortid.generate();
    storesList.push(obj);
    return obj;
}

function get(_id) {
    const foundObj = storesList.find(x => x._id === _id);
    return foundObj;
}


module.exports = {
    save, 
    get
};