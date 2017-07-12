var assert = require('assert');
const {nightOut} = require ('../lib/object-library');

describe('object library', () => {
  it('creates an _id for an obj and returns it', () => {
      let monday = new nightOut();
      monday.save(monday);
      return new Promise(function (resolve) {
        // added a Promise because function was timing out
        // it turned out to be because i hadn't required assert
          resolve(assert.ok(monday._id));
      })
    });
  });
