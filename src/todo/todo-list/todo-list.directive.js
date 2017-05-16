function todoListDirective() {

  const controller = ($scope) => {
    console.log($scope.todos)
  }

  return {
    restrict: 'E',
    template: require('./todo-list.template.html'),
    scope: {
      todos: '<'
    }
  }
}

export default todoListDirective;
