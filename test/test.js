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
        let dog1 = store.save({name : 'Tiffany'});
        let dog2 = store.save({name : 'Fido'});
        let dog3 = store.save({name : 'Blaze'});
        realList = store.list

        let listBite = store.getAll();
        assert.deepEqual(listBite,realList);

    });

    // it('return empty array [] when no objects', () => {
    //     let store = new Store();
    //     let emptyListBite = store.getAll();
    //     console.log('emptyListBite = ',emptyListBite);

    //     assert.deepEqual(listBite,listBite);

    // });

});
describe('remove', () => {
    it('removes the object from the store that has that id',()=> {
        let store = new Store();
        let dog1 = store.save({name : 'Tiffany'});
        let dog2 = store.save({name : 'Fido'});
        let dog3 = store.save({name : 'Blaze'});
        
        let listCut = store.remove(dog2._id);
        let listBite = store.getAll();
        realList = store.list
        console.log('listCut = ',listCut);
        console.log('realList = ', realList);

        assert.equal(listCut, listBite);

    });
    it('return { removed: true } if the object was removed, else return { removed: false } if the object did not exist', () => {
        let store = new Store();
        let dog1 = store.save({name : 'Tiffany'});
        let dog2 = store.save({name : 'Fido'});
        let dog3 = store.save({name : 'Blaze'});
        let listCut = store.remove(dog2._id);

        //assert.

    });


});


// should the two it contenst be fliped to match the dicriptions?
// or is the second it even nessary?