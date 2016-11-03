var $ = window.$;


var controller = { 
  init: function(){
    controller.createEventHandlers();
  },
  createEventHandlers: function(){
    $('.register1').on('click', controller.signupHandler); 
    $('.register2').on('click', controller.signinHandler); 
    $('.search-input').on('keypress', controller.searchInputHandler);
  },

  signupHandler: function(){
   
    console.log('what');
  },
  signinHandler: function(){
    console.log('whats up');
  }



};

module.exports = controller;