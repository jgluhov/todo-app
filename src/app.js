import 'semantic-ui-css/semantic.css';
import angular from 'angular';
import ngRoute from 'angular-route';

import TodoComponent from './todo/todo.component';
import todoFactory from './todo/todo.factory';
import todoFormDirective from './todo/todo-form/todo-form.directive';
import todoListDirective from './todo/todo-list/todo-list.directive';
import todoPanelDirective from './todo/todo-panel/todo-panel.directive';
import todoStatusConstant from './todo/todo-status.constant';

import config from './config';

export default angular
  .module('todoApp', [ngRoute])
  .constant('todoStatusConstant', todoStatusConstant)
  .component('todoComponent', TodoComponent)
  .directive('todoForm', todoFormDirective)
  .directive('todoList', todoListDirective)
  .directive('todoPanel', todoPanelDirective)
  .factory('todoFactory', todoFactory)
  .config(config)
  .name;
