function todoListDirective() {

  const controller = ($scope) => {
    
  }

  return {
    restrict: 'E',
    template: require('./todo-list.template.html'),
    scope: {
      todos: '<'
    },
    controller
  }
}

export default todoListDirective;
