export class TodoContoller {
  constructor(TodoFactory) {
    this.title = 'todos';
    this.placeholder = 'What needs to be done?';
    this.currentTodo = new TodoFactory();
    this.todos = [];

    this.handleKeyDown = function(e) {
      console.log('keydown')
      this.addTodo(this.currentTodo);

      console.log(this.handleKeyDown.numberVal)
    }
    this.handleKeyDown.numberVal = Math.random();

  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

TodoContoller.$inject = ['TodoFactory'];

const TodoComponent = {
   template: require('./todo.template.html'),
   controllerAs: 'vm',
   controller: TodoContoller
}

export default TodoComponent;
