var id = require('shortid');

class nightOut {
  constructor() {
    this._id = 9,
    this.array = []
  }

  save(objectToSave) {
    objectToSave._id = id.generate();
    return objectToSave;
  }

  get(id) {
    // returns object by id
  }

  getAll() {
    // returns array of all objects
  }

  remove(id) {
    // remove object by id
    // return {removed : true} or {removed : false}
    // advanced: use something besides .find to retrieve
    // object - possibly Map
  }

  update(objectToUpdate) {
    // reads the _id property from the object (error if it is not found):
    //
    // example code:
    //   const id = objectToUpdate._id;
    //   if(!id) {
    //       callback(new Error('Expected object to have an _id property'));
    //       return;
    //   }
    //
    // saves the provided object as the object
    // returns objectToUpdate
  }
}

module.exports = {
  nightOut
};
