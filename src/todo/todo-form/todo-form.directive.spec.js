import { expect } from 'chai';
import todoFactory from '../todo.factory';

describe('todoFormDirective', () => {
  let sandbox,
    $injector,
    $compile,
    $provide,
    $rootScope,
    parentScope,
    todoFormScope,
    $element,
    $todoFormElement,
    todoFormController,
    addTodoSpy;

  beforeEach(angular.mock.module('todoApp', ($provide) => {
    $provide.factory('todoFactory', todoFactory);
  }));

  beforeEach(angular.mock.inject(_$injector_ => {
    $injector = _$injector_;
  }))

  beforeEach(angular.mock.inject((_$injector_) => {
    $compile = $injector.get('$compile');
    $rootScope = $injector.get('$rootScope');
  }));

  beforeEach(angular.mock.inject((_$compile_, _$rootScope_) => {
    sandbox = sinon.sandbox.create();

    parentScope = $rootScope.$new();

    const todoCtrl = {
      todos: [],
      addTodo: function() {}
    }

    addTodoSpy = sandbox.spy(todoCtrl, 'addTodo');
    $element = angular.element('<div><todo-form></todo-form><div>')

    $element.data('$todoComponentController', todoCtrl);

    $compile($element)(parentScope);
    $todoFormElement = $element.find('todo-form');
    todoFormController = $todoFormElement.controller('todoForm');

    todoFormScope = $todoFormElement.scope();
    parentScope.$digest();
  }));

  it('should exist todoFormDirective', () => {
    expect($injector.has('todoFormDirective')).to.be.true;
  });

  afterEach(() => {
    sandbox.restore();
  })

  it('should contain form tag', () => {
    expect($todoFormElement.find('form')).to.exist
  });

  it('should have correct name', () => {
    expect($todoFormElement.find('form').attr('name')).to.be.equal('todoForm');
  });

  it('should contain input element', () => {
    expect($todoFormElement.find('input')).to.exist
  });

  it('should be initialized currentTodo property', () => {

    expect(todoFormScope.currentTodo).to.exist;
    expect(todoFormScope.currentTodo).to.be.an('object');
  });

  it("should call handler if an ENTER key was pressed", () => {
    const handleKeyDownStub = sandbox.spy(todoFormScope, 'handleKeyDown');

    todoFormScope.$digest();
    $todoFormElement.find('input').triggerHandler({ type: 'keydown', which: 13 });

    expect(handleKeyDownStub).to.have.been.called;
  })

  it("should not create new todo if not an ENTER key was pressed", () => {
    todoFormScope.currentTodo.text = 'some todo';
    const previousTodo = todoFormScope.currentTodo;

    todoFormScope.$digest();

    $todoFormElement.find('input').triggerHandler({ type: 'keydown', which: 14 });

    expect(addTodoSpy).to.not.have.been.called;
    expect(todoFormScope.currentTodo).to.be.equal(previousTodo);
  });

  it("should not create todo if it's not correct todo", () => {
    todoFormScope.currentTodo.text = '';

    const previousTodo = todoFormScope.currentTodo;

    todoFormScope.$digest();
    $todoFormElement.find('input').triggerHandler({ type: 'keydown', which: 13 });

    expect(addTodoSpy).to.not.have.been.called;
  });

  it('should call onCreateTodo if ENTER key was pressed and currentTodo is correct', () => {
    todoFormScope.currentTodo.text = 'some todo';
    const previousTodo = todoFormScope.currentTodo;

    const createTodoSpy = sandbox.spy(todoFormScope.todoFactory, 'createTodo');

    todoFormScope.$digest();

    $todoFormElement.find('input').triggerHandler({ type: 'keydown', which: 13 });

    expect(addTodoSpy).to.have.been.called;
    expect(addTodoSpy).to.have.been.calledWith(previousTodo)
    expect(createTodoSpy).to.have.been.called;
    expect(todoFormScope.currentTodo).to.not.equal(previousTodo)
  });

  it('should clear input field and create new todo after adding', () => {
    const previousTodo = todoFormScope.currentTodo;
    previousTodo.text = 'some todo';

    parentScope.$digest();

    $todoFormElement.find('input').triggerHandler({ type: 'keydown', which: 13 });

    expect(previousTodo).to.not.equal(todoFormScope.currentTodo);
  });
})
