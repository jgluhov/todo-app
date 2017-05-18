function todoListDirective() {

  const controller = function($scope, $element, $attrs) {
    // TODO needed to use factory
  }

  const link = (scope, element, attrs, ctrl) => {
    
  }

  return {
    restrict: 'E',
    template: require('./todo-list.template.html'),
    require: '^todoComponent',
    scope: true,
    controller,
    link
  }
}

export default todoListDirective;
