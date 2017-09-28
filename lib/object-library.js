// var id = require('shortid');

class NightOut {
  constructor() {
    this._id = 9;
    this.beverage = '';
    this.list = [];
  }

  // save(objectToSave) {
  //   objectToSave._id = id.generate();
    // this.list.push(objectToSave);
  //   return objectToSave;
  // }
  //
  // get(id) {
  //   // returns object by id
  // }
  //
  // getAll() {
  //   // test 1. returns array of all objects
  //   // test 2. return empty results
  // }
  //
  // remove(id) {
  //   // remove object by id
  //   // return {removed : true} or {removed : false}
  //   // advanced: use something besides .find to retrieve
  //   // object - possibly Map
  // }
  //
  // update(objectToUpdate) {
  //   // reads the _id property from the object (error if it is not found):
  //   //
  //   // example code:
  //   //   const id = objectToUpdate._id;
  //   //   if(!id) {
  //   //       callback(new Error('Expected object to have an _id property'));
  //   //       return;
  //   //   }
  //   //
  //   // saves the provided object as the object
  //   // returns objectToUpdate
  // }
}

module.exports = NightOut;
