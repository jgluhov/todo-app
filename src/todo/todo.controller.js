class TodoContoller {
  constructor(TodoFactory) {
    this.title = 'todos';
    this.placeholder = 'What needs to be done?';
    this.currentTodo = new TodoFactory();
    this.todos = [];
  }

  handleCreateTodo() {
    
  }
}

TodoContoller.$inject = ['TodoFactory'];

export default TodoContoller;
