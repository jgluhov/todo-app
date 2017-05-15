function TodoFactory() {

  class Todo {
    constructor(text) {
      this.text = text;
    }

    isCorrect() {
      return this.text !== '';
    }
  }

  const createTodo = (text = '') => {
    return new Todo(text);
  }

  return {
    createTodo
  }
}

export default TodoFactory;
