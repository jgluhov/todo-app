import angular from 'angular';
import ngRoute from 'angular-route';
import TodoComponent from './todo/todo.component';
import TodoFactory from './todo/todo.factory';
import todoFormDirective from './todo/todo-form/todo-form.directive';
import todoListDirective from './todo/todo-list/todo-list.directive';

import config from './config';

export default angular
  .module('todoApp', [ngRoute])
  .component('todoComponent', TodoComponent)
  .directive('todoForm', todoFormDirective)
  .directive('todoList', todoListDirective)
  .factory('TodoFactory', TodoFactory)
  .config(config)
  .name;
