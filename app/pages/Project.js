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
   
    document.write('what');
  },
  signinHandler: function(){
    console.log(123);

  }



};

module.exports = controller;