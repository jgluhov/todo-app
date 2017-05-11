import Todo from './Todo';

class TodoContoller {
  $onInit() {
    this.title = 'todos';
    this.placeholder = 'What needs to be done?';
    this.currentTodo = new Todo();
  }
}

export default TodoContoller;
