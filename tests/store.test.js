const assert = require('assert');
const store = require('../lib/store');
describe('memory store', () => {
    describe('save', () => {
    it('generates and id', () =>{
        let saveObj = store.save({ foo: 'bar'});
        assert.ok(saveObj._id);
    })
});
    describe('get', () => {
    it('gets the id', () => {
        const testObj = ({ food: 'bar'});
        const saveObj = store.save({testObj}); 
        let getObj = store.get(saveObj._id);
        assert.deepEqual(saveObj, getObj);
    });
    });
   
});