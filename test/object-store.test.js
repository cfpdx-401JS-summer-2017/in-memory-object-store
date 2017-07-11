const assert = require('assert');
const shortid = require('shortid');

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

const store = {
  items: [],
};


describe('object-store', () => {
  it('works', ()=> {
    assert.equal(1+42, 43);
  });

  it('contains appropriate methods and a place to store objects', () => {
    const objectStore = store;
    assert.deepEqual(objectStore, {items:[]});
  });

  it('holds an array to store objects', () => {
    const objectStored = store.items;
    assert.deepEqual(objectStored, []);
  });

});