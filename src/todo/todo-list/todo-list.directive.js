function todoListDirective() {

  const controller = ($scope) => {

  }

  const link = (scope, element, attrs, ctrl) => {
    console.log('ctrl', ctrl)
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
