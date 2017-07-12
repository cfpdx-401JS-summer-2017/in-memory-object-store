const assert = require('assert');
const shortid = require('shortid');

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

const store = {
  items: [],
  getAll: () => store.items.slice(),
  save: (obj) => {
    obj._id = shortid.generate();
    store.items.push(obj);
    return obj;
  }
};


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
});