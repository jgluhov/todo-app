import angular from 'angular';
import TodoComponent from './todo.component';
import TodoFactory from './todo.factory';
import todoFormDirective from './todo-form/todo-form.directive';
import todoListDirective from './todo-list/todo-list.directive';

export default angular
  .module('TodoModule', [])
  .component('todoComponent', TodoComponent)
  .directive('todoForm', todoFormDirective)
  .directive('todoList', todoListDirective)
  .factory('TodoFactory', TodoFactory)
  .name;
