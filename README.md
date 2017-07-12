In-memory-object-store
===

July 11, 2017

## Description:

Create a library the provides an "object store" to manage objects. 

The store offers four methods:

**.save(objectToSave)**  
creates an _id property on the object  
returns objectToSave with added _id property  

**.get(id)**  
returns the object that has that id  
return null if that id does not exist  

**.getAll()**  
returns array of all objects  
return empty array [] when no objects  

**.remove(id)**  
removes the object from the store that has that id  
return { removed: true } if the object was removed, else return { removed: false } if the object did not exist  

This took approximately four hours.