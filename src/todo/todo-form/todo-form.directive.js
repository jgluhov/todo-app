function TodoFormDirective(todoFactory) {

  const controller = ($scope) => {
    $scope.todoFactory = todoFactory;

    $scope.currentTodo = $scope.todoFactory.createTodo();
  }

  const link = (scope, element, attrs, ctrl) => {
    scope.handleKeyDown = (e) => {
      if(e.which !== 13 || !scope.currentTodo.isCorrect()) {
        return;
      }

      ctrl.addTodo(scope.currentTodo);

      scope.currentTodo = scope.todoFactory.createTodo();
    }
  }

  return {
    restrict: 'E',
    template: require('./todo-form.template.html'),
    require: '^todoComponent',
    controller,
    scope: true,
    link
  }

}

TodoFormDirective.$inject = ['todoFactory'];

export default TodoFormDirective;
