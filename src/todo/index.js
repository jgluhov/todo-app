import angular from 'angular';
import TodoContoller from './todo.controller';

export default angular
  .module('todo', [])
  .component('todoComponent', {
    template: require('./todo.template.html'),
    controllerAs: 'vm',
    controller: TodoContoller    
  })
  .name;
