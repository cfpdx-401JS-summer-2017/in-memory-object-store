var id = require('shortid');

class nightOut {
  constructor() {
    this._id = 9,
    this.beverage = 'beer',
    this.list = []
  }
  get prop() {
    // console.log(this.list);
    return this.list;
  }
  set prop(nightsList) {
    // console.log('nl: ', nightsList);
    this.list.push(nightsList);
  }

  save(objectToSave) {
    objectToSave._id = id.generate();
    var nightsList = [];
    for (var key in objectToSave) {
      if (objectToSave.hasOwnProperty(key)) {
        if (key === 'list') {
          console.log(key + " -> " + objectToSave[key]);
        }
        nightsList.push(objectToSave[key]);
      }
    }
    this.prop = nightsList;
    console.log('thisprop: ', this.prop);
    // console.log('3: ',this);
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
