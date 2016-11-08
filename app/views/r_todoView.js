
import React from 'react';
import TodoItemView from './r_todoItemView';

var todoView =React.createClass({
  getInitialState: function(){
    return {
      newTitle : ''
    };
  },
  propTypes: {
    todos: React.PropTypes.array.isRequired,
    controller: React.PropTypes.object.isRequired
  },
  render: function(){
    var controller = this.props.controller;
    var todosHtml = this.props.todos.map(function(todo, index){
      todo.id = index + 1;
      return <TodoItemView key={index} item={todo} controller={controller} />;
    });
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 title-row">
            <h1>Todo App</h1>  
          </div>
        </div>
        <div className="row add-todo-row">
          <div className="col-sm-1"></div>
          <div className="col-sm-9">
            <input type="text" className="form-control add-input" value={this.state.newTitle} onChange={this.titleChange} onKeyPress={this.hitEnter} />
          </div>
          <div className="col-sm-2">
            <button className="btn btn-primary btn-add" onClick={this.createTodo}>Add</button>
          </div>     
        </div>
        <div className="row todo-list">{todosHtml}</div>
      </div>
    );
  },
  createTodo: function(){
    // get new title
    var title = this.state.newTitle;
    // clear the text box
    this.setState({ newTitle: ''});
    // tell controller to add a todo
    this.props.controller.addTodo(title);

  },
  titleChange: function(event){
    this.setState({
      newTitle: event.target.value
    });
  },
  hitEnter: function(event){
    // if they hit enter
    if (event.which === 13){
      // create the todo
      this.createTodo(); 

    }

  }
});

module.exports = todoView;

// import Backbone from 'backbone';
// import ReactDOM from 'react-dom';
// import React from 'react';
// import TodoItemView from '../views/r_todoItemView';

// var TodoView = Backbone.View.extend({
//   el: '.todo-container',  //from html body main
//   events: {
//     'click .btn-add': 'addTodo'//,
//     //'keypress .add-input': 'addKeypress'
//   },
//   initialize: function(todos, controller){
//     this.controller = controller;
//     this.render(todos);
//   },
//   render: function(todos){
//     // render each todo item
    

//     ReactDOM.render( // react code
//       <div>{todosHtml}</div>, 
//       this.$el.find('.todo-list')[0] // [0] for getting vanilla from jquery
//     );

//   },
//   removeHandlers: function(){
//     this.$el.find('.btn-add').off();
//     this.$el.find('.add-input').off();
//   },
//   addTodo: function(){
//     var newTitle = this.$el.find('.add-input').val();
//     this.$el.find('.add-input').val('');
//     this.controller.addTodo(newTitle);
//   },
//   addKeypress: function(event){
//     var newTitle = this.$el.find('.add-input').val();
//     this.controller.addKeypress(event, newTitle);
//   }
// });
// module.exports = TodoView;