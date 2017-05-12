function TodoFactory(text = '') {
  return class Todo {
    constructor(text = '') {
      this.text = text;
    }
  }
}

export default TodoFactory;
