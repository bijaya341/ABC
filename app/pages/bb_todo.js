
// var $ = window.$;
import Backbone from 'backbone';
import bbTodoModel from '../models/bb_todoModel';
import bbTodoView from '../views/bb_todoView';

var Controller = Backbone.View.extend({
  model: new bbTodoModel(),
  initialize: function(){
    this.model.fetch();
    this.render();
  },
  render: function(){
    var todos = this.model.get('todos');
    if (this.view !== undefined){
      this.view.removeHandlers();
    }
    this.view = new bbTodoView(todos, this);
  },
  addTodo: function(newTitle){
    this.model.addTodo(newTitle);
    this.render();
  },
  addKeypress: function(event, newTitle){
    if (event.which === 13){
      this.addTodo(newTitle);
    }
  },
  removeTodo: function(id){
    if (id >= 0) {
      this.model.removeTodo(id);
      this.render();
    }
  },
  editTodo: function(id, newTitle){
    if (id >= 0) {
      this.model.editTodo(id, newTitle);
      this.render();
    }
  },
  changeComplete: function(id){
    if (id >= 0) {
      this.model.completedTodo(id);
      this.render();
    }
  }
});
module.exports = Controller;