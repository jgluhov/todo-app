class TodoContoller {
  constructor(TodoFactory) {
    this.title = 'todos';
    this.placeholder = 'What needs to be done?';
    this.currentTodo = new TodoFactory();
    this.todos = [];
  }

  handleKeyDown(e) {
    if(e.which !== 13) {
      return;
    }    
    this.addTodo(this.currentTodo);
  };

  addTodo(todo) {
    this.todos.push(todo);
  };

}

TodoContoller.$inject = ['TodoFactory'];

const TodoComponent = {
   template: require('./todo.template.html'),
   controllerAs: 'vm',
   controller: TodoContoller
}

export default TodoComponent;
