class TodoContoller {
  constructor(TodoFactory) {
    this.TodoFactory = TodoFactory;
    this.title = 'todos';
    this.placeholder = 'What needs to be done?';
    this.todos = [];
    this.createTodo();
  }

  handleKeyDown(e) {
    if(e.which !== 13 || !this.currentTodo.isCorrect()) {
      return;
    }
    this.addTodo(this.currentTodo);
    this.createTodo();
  };

  addTodo(todo) {
    this.todos.push(todo);
  };

  createTodo() {
    this.currentTodo = new this.TodoFactory();
  }
}

TodoContoller.$inject = ['TodoFactory'];

const TodoComponent = {
   template: require('./todo.template.html'),
   controllerAs: 'vm',
   controller: TodoContoller
}

export default TodoComponent;
