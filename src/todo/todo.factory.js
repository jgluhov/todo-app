function todoFactory(todoStatusConstant) {

  class Todo {
    constructor(text = '') {
      this.text = text;
      this.status = todoStatusConstant.ACTIVE;
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

todoFactory.$inject = ['todoStatusConstant'];

export default todoFactory;
