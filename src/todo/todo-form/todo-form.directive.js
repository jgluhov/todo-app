function TodoFormDirective(TodoFactory) {

  const controller = ($scope) => {
    $scope.todoFactory = TodoFactory;

    $scope.currentTodo = $scope.todoFactory.createTodo();
  }

  const link = (scope) => {
    scope.handleKeyDown = (e) => {
      if(e.which !== 13 || !scope.currentTodo.isCorrect()) {
        return;
      }
      
      scope.onCreateTodo({ todo: scope.currentTodo });

      scope.currentTodo = scope.todoFactory.createTodo();
    }
  }

  return {
    restrict: 'E',
    template: require('./todo-form.template.html'),
    scope: {
      onCreateTodo: '&'
    },
    controller,
    link
  }

}

TodoFormDirective.$inject = ['TodoFactory'];

export default TodoFormDirective;
