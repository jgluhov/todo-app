import './app';
import 'jquery';
import 'angular-mocks';
import { expect } from 'chai';

describe("TodoApp", () => {
  let $scope,
    todoComponentController,
    todoComponentElement;

  beforeEach(angular.mock.module('todoApp'));

  beforeEach(angular.mock.inject(($compile, $rootScope, $componentController) => {
    todoComponentController = $componentController('todoComponent', null);
    $scope = $rootScope.$new();
    todoComponentElement = $compile('<todo-component></todo-component>')($scope)[0];

    todoComponentController.$onInit();
    $scope.$digest();
  }));

  describe("Todo title", () => {
    it('title property should be initialized', () => {
      expect(todoComponentController.title).to.be.a('string');
      expect(todoComponentController.title).to.not.be.empty;
    });

    it('title property should be rendered', () => {
      expect(todoComponentElement.querySelector('span[ng-bind="vm.title"]').textContent)
        .to.be.equal(todoComponentController.title);
    });
  });

  describe("Todo form", () => {
    let todoFormElement,
      todoInputElement;

    describe("Todo form element", () => {
      beforeEach(() => {
        todoFormElement = todoComponentElement.querySelector('form');
      })

      it('should contain form', () => {
        expect(todoFormElement).to.exist;
      });

      it('shoud have necessary attributes', () => {
        expect(todoFormElement.hasAttribute('novalidate')).to.be.true;
        expect(todoFormElement.name).to.be.equal('todoForm');
      });
    });

    describe("Todo form input element", () => {      
      beforeEach(() => {
        todoInputElement = todoFormElement.querySelector('input');
      });

      it('shoud contain input', () => {
        expect(todoInputElement).to.exist;
      })
    })
  })
})
