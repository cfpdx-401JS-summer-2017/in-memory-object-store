const assert = require('assert');
const store = require('../lib/object-store');

describe('object-store', () => {
  it('works', ()=> {
    assert.equal(1+42, 43);
  });

  it('holds an array to store objects', () => {
    const objectStored = store.items;
    assert.deepEqual(objectStored, []);
  });

  it('gets all the stored items and returns them in an array that is not the original array', () => {
    const gotAll = store.getAll();
    assert.deepEqual(gotAll, []);
  });

  it('gives an object a unique id and saves it in an array', () => {
    const wrench = { 'tool': true, 'use': 'nuts and bolts' };
    const saveObj = store.save(wrench);
    assert.ok(saveObj._id);
    assert.deepEqual(saveObj, store.items[store.items.length-1]);
  });

  it('gets an object from the save array by its specific id', () => {
    const rake = {'tool': true, 'use': 'leaves'};
    const getId = store.save(rake)._id;
    const gotObj = store.get(getId);
    assert.deepEqual(gotObj, store.items[1]);
  });

  it('returns null if the id given does not match any object that is saved', () => {
    const getWrong = store.get('blaearg');
    assert.equal(getWrong, null);
  });

  it('removes an object when given an id or responds in the negative if the id did not exist', () => {
    const orange = { 'tool': false, 'use': 'a delicious citrus fruit' };
    const orangeId = store.save(orange)._id;
    const removed1 = store.remove(orangeId);
    const removed2 = store.remove('badId');
    assert.deepEqual(removed1, { removed: true });
    assert.deepEqual(removed2, { removed: false });
  });
});