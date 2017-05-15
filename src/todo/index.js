import angular from 'angular';
import TodoComponent from './todo.component';
import TodoFactory from './todo.factory';
import todoFormDirective from './todo-form/todo-form.directive';

export default angular
  .module('TodoModule', [])
  .component('todoComponent', TodoComponent)
  .directive('todoForm', todoFormDirective)
  .factory('TodoFactory', TodoFactory)
  .name;
