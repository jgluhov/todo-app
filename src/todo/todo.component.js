class TodoContoller {
  constructor(TodoFactory) {
    this.todoFactory = TodoFactory;
  }

  $onInit() {
    this.title = 'todos';
    this.placeholder = 'What needs to be done?';
    this.todos = [];
    this.currentTodo = this.todoFactory.createTodo();
  }

  handleKeyDown(e) {
    if(e.which !== 13 || !this.currentTodo.isCorrect()) {
      return;
    }
    this.addTodo(this.currentTodo);
    this.currentTodo = this.todoFactory.createTodo();
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
