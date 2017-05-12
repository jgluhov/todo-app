import angular from 'angular';
import TodoContoller from './todo.controller';
import TodoFactory from './todo.factory';

export default angular
  .module('TodoModule', [])
  .component('todoComponent', {
    template: require('./todo.template.html'),
    controllerAs: 'vm',
    controller: TodoContoller
  })
  .factory('TodoFactory', TodoFactory)
  .name;
