const shortid = require('shortid'); 
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

class Store {
    constructor() {
        this.name,
        this.breed,
        this.list = []
    }
    save(objectToSave){
        objectToSave._id = shortid.generate();
        this.list.push(objectToSave);
        

        return objectToSave;
            
    }
    get(id){
        return this.list.find( (object) => object._id == id);  
        
    }
    
};



module.exports = Store;