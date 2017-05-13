import angular from 'angular';
import TodoComponent from './todo.component';
import TodoFactory from './todo.factory';

export default angular
  .module('TodoModule', [])
  .component('todoComponent', TodoComponent)
  .factory('TodoFactory', TodoFactory)
  .name;
