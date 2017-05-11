import './app';
import 'jquery';
import 'angular-mocks';
import { expect } from 'chai';

describe("TodoApp", () => {
  let $scope,
    todoComponentController,
    $todoComponentElement;

  beforeEach(angular.mock.module('todoApp'));

  beforeEach(angular.mock.inject(($compile, $rootScope, $componentController) => {
    todoComponentController = $componentController('todoComponent', null);
    $scope = $rootScope.$new();
    $todoComponentElement = $compile('<todo-component></todo-component>')($scope);
  }));

  describe("Title property", () => {
    it('title property should be initialized', () => {
      expect(todoComponentController.title).to.be.a('string');
      expect(todoComponentController.title).to.not.be.empty;
    });

    it('title property should be rendered', () => {
      $scope.$digest();

      expect($todoComponentElement.find('span[ng-bind="vm.title"]').text())
        .to.be.equal(todoComponentController.title);
    });
  });
})
