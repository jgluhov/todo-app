function todoPanelDirective(todoStatusConstant) {
  const controller = ($scope) => {
    $scope.todoStatusConstant = todoStatusConstant;
  }

  return {
    restrict: 'E',
    template: require('./todo-panel.template.html')
  }
}

todoPanelDirective.$inject = ['todoStatusConstant'];

export default todoPanelDirective;
