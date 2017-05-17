class TodoCtrl {
  constructor($route) {
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

const TodoComponent = {
   template: require('./todo.template.html'),
   controllerAs: 'vm',
   controller: TodoCtrl
}

export default TodoComponent;
