
// base framework
import $ from 'jquery';

// legacy loading for bootstrap javascript
window.$ = window.jQuery = $;
require('bootstrap');
// import our styles
import './stylesheets/base.scss';
import navbar from './components/navbar';
import todoController from './pages/todo';
import d3Controller from './pages/Yo';
import threeController from './pages/three';
import bbTodoController from './pages/bb_todo';
import rTodoController from './pages/r_todo';
import ProjectController from './pages/Project';
import photoSearchController from './pages/photoSearch';


// import multimediaController from './pages/multimedia';

// // on document load
$(function(){
  // kick of the app!
  console.log('%c App Started', 'color:green');

  // launch navbar
  navbar.init();

  // My First Router: which page are we on ?
  switch(window.location.pathname){
  case '/pages/r_todo.html':
    new rTodoController();
    break;
  case '/pages/bb_todo.html':
    new bbTodoController();
    break;
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
    threeController.init(); // jquery
    break;
  case '/pages/Project.html':
    ProjectController.init(); 
    break;
  case '/pages/photoSearch.html':
    new photoSearchController(); // backbone
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
  console.log('=============');
  console.log('Yo, Hire me! bijayashr341@gmail.com');
  console.log('=============');
  
  
  // todo.init();

  
});





