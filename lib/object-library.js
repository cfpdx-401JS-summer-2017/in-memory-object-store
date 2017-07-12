var id = require('shortid');

class nightOut {
  constructor() {
    this._id = 9
  }

  save(objectToSave) {
    objectToSave._id = id.generate();
    return objectToSave;
  }
}
module.exports = {
  nightOut
};
