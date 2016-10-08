

var $ = window.$;
var Handlebars =window.Handlebars;
import model from '../models/todoModel';
import view from 'text!../views/todoItem.tpl'; 

var controller = { // has two functions
  init: function(){
    model.init();
    // cache a jquery selector
    controller.addButton = $('.btn-add');
    // compile todoItem template
    controller.compiledTemplate = Handlebars.compile(view);
    // render the todo Item template
    controller.renderTemplates();
  },
  // do all the visual stuff
  render: function(compiledTodos){
    // remove all the event handlers for the todo app
    // event handlers are functions that get run when a event happens
    controller.destroyEventHandlers();
    // compile todos is an array
    // we are joining the elements of the array together to make one long string
    // put the long string into the HTML element with a class of "todo-list"
    $('.todo-list').html(compiledTodos.join(''));
    // now that all the todos have been added to the aDOM
    // add all the event handlers for the todo app

    controller.createEventHandlers();
    
  },
  renderTemplates: function(){
    // get the database
    // loop over each item in the database
    
    var compiledTodos = model.get().map(function(item, index){   
      // create an id equal to index+1
      // the +1 is to make it more human readable
      // id is required by our view
      item.id = index + 1;  // id is as we have id in html
      // handlebars, step 2
      // replace{{id}} with the items id value
      return controller.compiledTemplate(item);
      }); // end of forEach
    // pass list of todos to the render function
    controller.render(compiledTodos);
    // tell the model to save our data
    model.save();
  },
  // remove event handlers from app
  // get ready to re-render
  destroyEventHandlers: function(){
    controller.addButton.off();
    $('input[type="checkbox"]').off();
    $('.close').off();
  },
  // add the event handlers
  createEventHandlers: function(){
    controller.addButton.on('click', controller.addTodoHandler);
    $('input[type="checkbox"]').on('change', controller.checkedHandler);
    $('.close').on('click', controller.removehandler);
  },
  // event handler for the close X button
  // deletes the todo
  removehandler: function(event){
    // which one was clicked??
    console.log(1);
    var index = $(event.currentTarget).parent().parent().index();
    // update the database
    model.get().splice(index, 1);
    // update the view
    controller.renderTemplates();
  },
  // event handler for the checkboxes
  checkedHandler: function(event){
    // which checkbox ???
    var index = $(event.currentTarget).parent().parent().index();
    // update the database
    model.get()[index].completed = !model.get()[index].completed;
    
    model.save();
    controller.renderTemplates();
  },
  // event handler for the ADD button
  // creates a new todo
  addTodoHandler: function(){
    // reads the input using jquery.val()
    var newTitle = $('.add-input').val(); 
    // quick exit if newTitle is empty string
    if (newTitle === '') return; //empty item then return nothing
    // model.get() returns the database
    //push add an item to the database
    model.get().push({      
      title: newTitle,
      completed: false
    });

    // clear the text box
    $('.add-input').val('');
    // update the display
    controller.renderTemplates();
  }
};

// specifies what will be returned
// when this file is imported
module.exports = controller;


