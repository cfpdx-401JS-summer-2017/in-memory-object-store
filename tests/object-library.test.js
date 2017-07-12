var assert = require('assert');
const {nightOut} = require ('../lib/object-library');

describe('object library', () => {
  it('creates an _id for an obj and returns it', () => {
    let monday = new nightOut();
    monday.save(monday);
    let tuesday = new nightOut();
    tuesday.save(tuesday);
    return new Promise(function (resolve) {
        resolve(assert.ok(monday._id) && assert.ok(tuesday._id));
      });
  });
  it('returns an object by id', () => {

    return new Promise(function (resolve) {
        resolve();
      })
  });
});
