(function() {
  "use strict";

  var todoApp = angular.module('todoApp', []);

  todoApp.component('todo', {
    template: [
      '<div class="todo">',
        '<span class="todo-title" ng-bind="vm.title"></span>',
      '</div>'
    ].join(''),
    controllerAs: 'vm',
    controller: function() {
      this.title = 'todos';
    }
  });

})();
