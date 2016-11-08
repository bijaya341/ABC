
var $ = window.$;

import model from '../models/ProjectModel';

var controller = { 
  

  init: function(){
    
    model.init();
    controller.signupButton = $('.register1');
  },

  
  render: function(){
    controller.createEventHandlers();
  },
  renderTemplates: function(){
    controller.render();
    model.save();
  },


  createEventHandlers: function(){
    $('.register1').on('click', controller.signupHandler);
  },


  signupHandler: function(){
    alert('whats up');
  }


};

module.exports = controller;







