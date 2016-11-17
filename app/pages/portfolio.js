
var $ = window.$;

// import model from '../models/ProjectModel';

var controller = { 
  

  init: function(){
    
    // model.init();
    controller.createEventHandlers();
    
  
  },

  


  createEventHandlers: function(){
    $('.dropdown-toggle').on('click', controller.BackboneHandler);
    $('#cancel').on('click', controller.cancelHandler);
  },
    
    
  BackboneHandler: function(){
    ('.dropdown1').addClass('show');
  },
  cancelHandler: function(){
    
  }
 

};

module.exports = controller;







