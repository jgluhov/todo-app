import TodoFactory from './todo/todo.factory';

import { spy } from 'sinon';
import { expect } from 'chai';

describe("TodoApp", () => {
  let componentController,
    $componentScope,
    $componentElement,
    $formElement;

  beforeEach(angular.mock.module('todoApp'));

  describe("Todo component common cases", () => {
    beforeEach(angular.mock.inject(($compile, $rootScope) => {
      const $scope = $rootScope.$new();

      $componentElement = $compile('<todo-component></todo-component>')($scope);
      $componentScope = $componentElement.isolateScope();
      componentController = $componentScope.vm;

      $componentScope.$digest();
    }));

    describe("Component title", () => {
      let $titleElement;

      beforeEach(() =>
        $titleElement = $componentElement.find('span[ng-bind="vm.title"]')
      );

      it('should contain title element', () => expect($titleElement).to.exist);

      it('title property should be initialized', () => {
        expect(componentController.title).to.be.a('string');
        expect(componentController.title).to.not.be.empty;
      });

      it('title property should be rendered', () => {
        expect($titleElement.text()).to.be.equal(componentController.title)
      });

      it('should change title if property changed', () => {
        componentController.title = 'new title';
        $componentScope.$digest();
        expect($titleElement.text()).to.be.equal(componentController.title);
      })
    });

    describe("Todo form element", () => {
      beforeEach(() => $formElement = $componentElement.find('form'));

      it('should contain form', () => expect($formElement).to.exist);

      it('shoud have correct name', () => {
        expect($formElement.attr('name')).to.be.equal('todoForm');
      });
    });
  })

  describe("Component form", () => {
    let $inputElement,
      parentScope,
      sandbox;

    beforeEach(angular.mock.inject(($compile, $rootScope) => {
      sandbox = sinon.sandbox.create();

      parentScope = $rootScope.$new();

      $componentElement = $compile('<todo-component></todo-component>')(parentScope);
      componentController = $componentElement.controller('todoComponent');

      parentScope.$digest();
    }));

    beforeEach(() => {
      $inputElement =  $componentElement.find('input');
    });

    it('should contain input element', () => expect($inputElement).to.exist);

    it('shoud be set the placeholder property', () => {
      expect(componentController.placeholder).to.be.a('string');
      expect(componentController.placeholder).to.not.be.empty;
    });

    it('should be set placeholder to input element', () => {
      expect($inputElement.attr('placeholder')).to.not.be.empty;
      expect($inputElement.attr('placeholder'))
        .to.be.equal(componentController.placeholder);
    });

    it('should change placeholder text if property was changed', () => {
      componentController.placeholder = 'some placeholder';

      parentScope.$digest();

      expect($inputElement.attr('placeholder'))
        .to.be.equal(componentController.placeholder);
    })

    it('should be initialized currentTodo property', () => {
      expect(componentController.currentTodo).to.be.exist;
    });

    it('should contain empty todos array after initialization', () => {
      expect(componentController.todos).to.be.exist;
      expect(Array.isArray(componentController.todos)).to.be.true;
      expect(componentController.todos).to.be.empty;
    });

    it('should trigger an event and call handler once', () => {
      const handleKeyDownSpy = sandbox.stub(componentController, 'handleKeyDown');

      parentScope.$digest();

      $inputElement.triggerHandler({
        type: 'keydown',
        which: 13
      });

      expect(handleKeyDownSpy).to.have.been.calledOnce;
    });

  });
})
