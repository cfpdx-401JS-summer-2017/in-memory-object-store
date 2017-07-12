const shortid = require('shortid');
const storeList = [];
function save (obj) {
    obj._id = shortid.generate();
    storeList.push(obj);
    return obj;

}

function get (_id) {
    const getObj = storeList.find(x  => x._id === _id);
    return getObj;
}

module.exports = {
    save, 
    get};