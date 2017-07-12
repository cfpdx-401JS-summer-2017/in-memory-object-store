const Store = require('../library/main');
const chai = require('chai');
const shortid = require('shortid');
var assert = chai.assert;
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

// describe('memory store', () => {
    
// })

describe('save', () => {
    it('creates an `_id` property on the object', () => {
        let store = new Store();
        let savedObj = store.save({name : 'Tiffany'});
        console.log(store.list);
        
        assert.property(savedObj, '_id');
        
    });
    it('returns `objectToSave` with added `_id` property', () => {
        let store = new Store()
        let savedObj = store.save({name : 'Tiffany'}); 
        

        assert.ok(savedObj._id);

    });
});
describe('get', ()=> {
    it('returns the object that has that id', () => {
        let store = new Store();
        let dog = {name : 'Tiffany'};
        let savedObj = store.save(dog);
        let trueStoredObj = store.get(savedObj._id);
        assert.equal(savedObj,trueStoredObj);

    });
    it('return null if that id does not exist', () =>{
        let store = new Store();
        let rando = shortid.generate();
        let falseStoredObj = store.get(rando);

        assert.equal(falseStoredObj, null);

    });
});
describe('getAll()', () => {
    it('returns array of all objects', () => {
        let store = new Store();
        array = [{name : 'Tiffany'}, {name : 'Fido'}, {name : 'Blaze'}];
        let savedArray = store.save(array);
        console.log('savedArray =',savedArray);

        let listBite = store.getAll();

        assert.equal(listBite,savedArray)

    });

}
)

// should the two it contenst be fliped to match the dicriptions?
// or is the second it even nessary?