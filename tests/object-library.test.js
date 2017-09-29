const assert = require('assert');
const NightOut = require('../lib/object-library');

describe('object library tests', () => {
  it('saves an object with a unique id', () => {
    const Friday = new NightOut();
    const friday = {
      dayOfWeek: 'Friday',
      location: 'The Rams Head',
      beverage: 'Ruby'
    };
    const savedFriday = Friday.save(friday);
    assert.notEqual(savedFriday.id, 0);
    assert.equal(friday.dayOfWeek, savedFriday.dayOfWeek);
  }),
    it('gets an object by id', () => {
      const Tuesday = new NightOut();
      const tuesday = {
        dayOfWeek: 'Tuesday',
        location: 'Uptown Billiards',
        beverage: 'Pfriem Summer Ale'
      };
      const savedTuesday = Tuesday.save(tuesday);
      const retrieved = Tuesday.get(savedTuesday.id);
      assert.equal(retrieved[0], null);
      assert.equal(retrieved[1].id, savedTuesday.id);
    }),
    it('gets all objects', () => {
      const Wednesday = new NightOut();
      const allNights = Wednesday.getAll();
      assert.equal(allNights.length, 1);
    }),
    it('removes object by id', () => {
      const Thursday = new NightOut();
      const thursday = {
        dayOfWeek: 'Thursday',
        location: 'Blue Moon',
        beverage: 'lager'
      };
      const thursday2 = {
        dayOfWeek: 'Thursday',
        location: 'Bithouse',
        beverage: 'IPA'
      };
      const savedThursday = Thursday.save(thursday);
      const savedThursday2 = Thursday.save(thursday2);

      const shortArray = Thursday.remove(savedThursday.id);

      shortArray.forEach(n => {
        if (Object.is(n.removed, true)) assert.equal(n.id, savedThursday.id)
        else assert.equal(n.removed, false)
      })

    }),
    it('updates object by id', () => {
      const Sunday = new NightOut();
      const sunday = {
        dayOfWeek: 'Sunday',
        location: 'Deschutes Brewery',
        beverage: 'Mirror Pond'
      };
      const savedSunday = Sunday.save(sunday);
      savedSunday.dayOfWeek = 'Friday';
      savedSunday.beverage = 'Tecate';
      const updated = Sunday.update(savedSunday);

      updated.forEach(n => {
        if (n && Object.is(n.id, savedSunday.id)) assert.equal(n.dayOfWeek, 'Friday')
        else assert.equal(n, null)
      })
    });
});
