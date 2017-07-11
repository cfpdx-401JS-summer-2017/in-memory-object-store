const assert = require('assert');
const Store = require('../lib/class');
const store = new Store();

describe('save function', () => {
    it('does save', () => {
        const cat = { type: 'cat', name: 'felix' };
        store.save(cat);
        assert.equal(store.cat, { type: 'cat', name: 'felix' });
    });
});