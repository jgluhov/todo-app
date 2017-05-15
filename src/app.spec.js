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
        expect($titleElement.text()).to.be.equal(componentController.title);
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

      it('should have correct name', () => {
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

      componentController.$onInit();
      parentScope.$digest();
    }));

    beforeEach(() => {
      $inputElement =  $componentElement.find('input');
    });

    it('should contain input element', () => expect($inputElement).to.exist);

    it('should be set the placeholder property', () => {
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
      const handleKeyDownStub = sandbox.stub(componentController, 'handleKeyDown');

      parentScope.$digest();

      $inputElement.triggerHandler({ type: 'keydown', which: 13 });

      expect(handleKeyDownStub).to.have.been.calledOnce;
    });

    it('should call addTodo fn if ENTER key was pressed', () => {
      const addTodoStub = sandbox.stub(componentController, 'addTodo');
      const createTodoStub = sandbox.stub(
        componentController.todoFactory, 'createTodo'
      ).callsFake(f => f);

      componentController.currentTodo.text = 'some text';

      parentScope.$digest();
      $inputElement.triggerHandler({ type: 'keydown', which: 13 });

      expect(addTodoStub).to.have.been.calledOnce;
      expect(createTodoStub).to.have.been.calledOnce;
    })

    it('should not add new todo to the list if not the ENTER key was pressed', () => {
      const addTodoStub = sandbox.stub(componentController, 'addTodo');

      parentScope.$digest();

      $inputElement.triggerHandler({ type: 'keydown', which: 14 });

      expect(addTodoStub).to.not.have.been.called;
    });

    it('should not add new todo if it`s not correct', () => {
      const addTodoStub = sandbox.stub(componentController, 'addTodo');
      componentController.currentTodo.text = '';

      parentScope.$digest();

      $inputElement.triggerHandler({ type: 'keydown', which: 13 });

      expect(addTodoStub).to.not.have.been.called;
    });

    it('should add new todo if it`s correct', () => {
      const previousTodo = componentController.currentTodo;

      previousTodo.text = 'some todo';
      const addTodoSpy = sandbox.spy(componentController, 'addTodo');

      parentScope.$digest();

      $inputElement.triggerHandler({ type: 'keydown', which: 13 });

      expect(addTodoSpy).to.have.been.calledWith(previousTodo);
      expect(componentController.todos).to.include(previousTodo);
    })

    it('should clear input field and create new todo after adding', () => {
      const previousTodo = componentController.currentTodo;
      previousTodo.text = 'some todo';

      parentScope.$digest();

      $inputElement.triggerHandler({ type: 'keydown', which: 13 });

      expect(previousTodo).to.not.equal(componentController.currentTodo);
    });

    afterEach(() => {
      sandbox.restore();
    })
  });
})
