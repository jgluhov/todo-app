class TodoContoller {
  $onInit() {
    this.title = 'todos';
    this.todos = [];
  }  
}

TodoContoller.$inject = [];

const TodoComponent = {
   template: require('./todo.template.html'),
   controllerAs: 'vm',
   controller: TodoContoller
}

export default TodoComponent;
