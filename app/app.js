
// base framework
import $ from 'jquery';

// legacy loading for bootstrap javascript
window.$ = window.jQuery = $;
require('bootstrap');

// import our styles
import './stylesheets/base.scss';
import _ from 'underscore';
import todoController from './pages/todo';
import d3Controller from './pages/Yo';
import threeController from './pages/three';

// import multimediaController from './pages/multimedia';

// // on document load
$(function(){
  // kick of the app!
  console.log('%c App Started', 'color:green');

  // set default template settings
  _.templateSettings = {
    evaluate:    /{{([\s\S]+?)}}/g,
    interpolate: /{{-([\s\S]+?)}}/g,
    escape:      /{{=([\s\S]+?)}}/g
  };

  
  // My First Router: which page are we on ?
  switch(window.location.pathname){
  case '/pages/todo.html':
      todoController.init();
      break;
  case '/pages/multimedia.html':
      console.log('multimedia page Started');
    break;
  case '/pages/Yo.html':
      d3Controller.init();
    break;
  case '/pages/three.html':
      threeController.init();
    break;
  }



  // if (window.location.pathname === '/pages/todo.html'){
  //   todoController.init();
  // } else if (window.location.pathname === '/pages/multimedia.html'){
  // console.log('multimedia page Started');
  // } else if (window.location.pathname === '/pages/Yo.html'){
  //   d3Controller.init();
  // } else if (window.location.pathname === '/pages/three.html'){
  //   threeController.init();
  // }
  console.log("=============");
  console.log("Yo, Hire me! bijayashr341@gmail.com");
  console.log("=============");
  
  
  // todo.init();

  
});





