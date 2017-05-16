class TodoCtrl {
  $onInit() {
    this.title = 'todos';
    this.todos = [];
  }

  handleCreateTodo(todo) {
    this.todos.push(todo);
  }
}

const TodoComponent = {
   template: require('./todo.template.html'),
   controllerAs: 'vm',
   controller: TodoCtrl
}

export default TodoComponent;
