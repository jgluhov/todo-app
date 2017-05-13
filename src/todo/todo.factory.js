function TodoFactory(text = '') {
  return class Todo {
    constructor(text = '') {
      this.text = text;
    }

    isCorrect() {
      return this.text !== '';
    }
  }
}

export default TodoFactory;
