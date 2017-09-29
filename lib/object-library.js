const shortid = require('shortid');
const randomId = require('random-id');

module.exports = class NightOut {
  constructor() {
    this.nightsOut = [
      {
        dayOfWeek: 'Friday',
        location: 'Life Of Riley',
        beverage: 'PBR',
        id: randomId(8)
      }
    ];
  }

  save(nightToSave) {
    nightToSave.id = randomId(8);
    this.nightsOut.push(nightToSave);
    return nightToSave;
  }

  get(id) {
    return this.nightsOut.map(night => {
      if (night.id === id) return night;
      return null;
    });
  }

  getAll() {
    return this.nightsOut || [];
  }

  remove(id) {
    return this.nightsOut.map(night => {
      if (Object.is(night.id, id)) {
        return { id: id, removed: true };
      }
      return { id: id, removed: false };
    });
  }
  update(nightToUpdate) {
    return this.nightsOut.map(night => {
      if (night.id === nightToUpdate.id) {
        night.dayOfWeek = 'Friday';
        night.beverage = 'Light Me Up Lager';
        return night;
      }
      return null;
    });
  }
};
