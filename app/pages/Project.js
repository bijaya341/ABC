
var $ = window.$;

// import model from '../models/ProjectModel';

var controller = { 
  

  init: function(){
    
    // model.init();
    controller.createEventHandlers();
    $('.Heading').addClass('zoom-out');

    $(window).on('scroll', function(){
      var scrollTop = $(document).scrollTop();
      if (scrollTop > 800) {
        $('.descrip div').addClass('change');
      }
    });
  },

  
  // render: function(){
  // controller.createEventHandlers();
  // },
  // renderTemplates: function(){
  //   controller.render();
  //   model.save();
  // },


  createEventHandlers: function(){
    $('.register2').on('click', controller.signinHandler);
    $('#cancel').on('click', controller.cancelHandler);
    $('#submit').on('click', controller.submitHandler);
    $('.register1').on('click', controller.signupHandler);
    $('#reg-cancel').on('click', controller.regcancelHandler);
    $('#reg-submit').on('click', controller.regsubmitHandler);
    $('.image2 a').on('click', controller.totalHandler);
    $('.image3 a').on('click', controller.archHandler);
    $('.image4 a').on('click', controller.vigHandler);
    $('.image5 a').on('click', controller.silHandler);
    $('.framestr').on('click', controller.frameHandler);
    $('.diffWeather').on('click', controller.weatherHandler);
    $('.types').on('click', controller.typesHandler);
    $('.disappear').on('click', controller.closeHandler);
    $('.disappear1').on('click', controller.close1Handler);
    $('.disappear2').on('click', controller.close2Handler);





  },


  signinHandler: function(){
    $('#signin').addClass('show');
  },
  submitHandler: function(){
    $('#signin').removeClass('show');
  },
  cancelHandler: function(){
    $('#signin').removeClass('show');
  },


  signupHandler: function(){
    $('#signup').addClass('show');
  },
  regcancelHandler: function(){
    $('#signup').removeClass('show');
  },
  regsubmitHandler: function(){
    $('#signup').removeClass('show');
  },


  totalHandler: function(event){
    event.preventDefault();
    $('.image1 img').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2v8c7ymVyY2KkoUNYvUXQM_212Q_moYBfvrWVmWTM4QVTjSX');    
  },
  archHandler: function(event){
    event.preventDefault();
    $('.image1 img').attr('src', 'http://blindalley.com/portfolios/hunterdouglas/images/duettearchitellalarge1.jpg');    
  },
  vigHandler: function(event){
    event.preventDefault();
    $('.image1 img').attr('src', 'http://static.wixstatic.com/media/834bb7_03c11a8a2ad54679bbc0136c7474730d.jpg_srz_980_764_85_22_0.50_1.20_0.00_jpg_srz');    
  },
  silHandler: function(event){
    event.preventDefault();
    $('.image1 img').attr('src', 'http://www.slatsblindshop.com/wp-content/uploads/2013/07/silhouette_opened_22-1.jpg');    
  },


  frameHandler: function(){
    $('.frame1').addClass('show');
    $('.temp').addClass('show1');
  },
  closeHandler: function(){
    $('.frame1').removeClass('show');
    $('.temp').removeClass('show1');
  },


  weatherHandler: function(){
    $('.weather1').addClass('show');
    $('.temp').addClass('show2');
  },
  close1Handler: function(){
    $('.weather1').removeClass('show');
    $('.temp').removeClass('show2');
  },


  typesHandler: function(){
    $('.typesof').addClass('show');
    $('.temp').addClass('show3');
  },
  close2Handler: function(){
    $('.typesof').removeClass('show');
    $('.temp').removeClass('show3');
  }
    
 

};

module.exports = controller;







