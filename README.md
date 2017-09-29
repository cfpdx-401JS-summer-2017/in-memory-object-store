# in-memory-object-store

A simple preparation for routing and database CRUD operations.

An object store is created which in this case is an array of "NightOut" objects. As each NightOut is saved, it's assigned a random id and added to the "nightsOut" store.

The included functions do the following:
- save a new object (assigning an id)
- get an object using its id
- get all the objects
- remove and object using its id
- update the properties of an object using its id
