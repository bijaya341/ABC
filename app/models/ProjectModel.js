import lscache from 'lscache';

var database ={};
var model = {
  init: function(){
    var savedData = lscache.get('Project');
    if (savedData) {
      database = savedData;
    } else {
      database = {};
    }
  },
  save: function(){
    var dataToSave = JSON.stringify(database);
    lscache.set('Project', dataToSave);
  },
  get: function(){
    return database;
  }
};

module.exports = model;