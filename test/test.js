const Store = require('../library/main');
const chai = require('chai');
const assert = require('assert');
var assert = chai.assert;

// describe('memory store', () => {
    
// })

describe('save', () => {
    it('creates an `_id` property on the object', () => {
        let store = new Store();
        let savedObj = store.save({name : 'fido'});
        console.log(store.list);
        
        assert.property(savedObj, _id);
        
    });
    it('returns `objectToSave` with added `_id` property', () => {
        let store = new Store()
        let savedObj = store.save({name : 'fido'}); 

        assert.ok(savedObj._id);

    });
});
describe('get', ()=> {
    it('returns the object that has that id', () => {
        let store = new Store();
        let dog = {name : 'fido'};
        let savedObj = store.save(dog);
        let gettingIdObj = store.get(savedObj._id);
        // console.log(savedObj);
        // console.log(gettingId);
        assert.deepEqual(dog._id,gettingId);

    });
});

// should the two it contenst be fliped to match the dicriptions?
// or is the second it even nessary?