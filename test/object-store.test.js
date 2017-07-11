const assert = require('assert');
const shortid = require('shortid');

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

const store = {
  items: [],
  getAll: () => store.items.slice()
};


describe('object-store', () => {
  it('works', ()=> {
    assert.equal(1+42, 43);
  });

  it('contains appropriate methods and a place to store objects', () => {
    const objectStore = store.items;
    assert.deepEqual(objectStore, {items:[]});
  });

  it('holds an array to store objects', () => {
    const objectStored = store.items;
    assert.deepEqual(objectStored, []);
  });

  it('gets all the stored items and returns them in an array that is not the original array', () => {
    const gotAll = store.getAll();
    assert.deepEqual(gotAll, []);
  });
});