import { expect } from 'chai';
import { spy } from 'sinon';

describe('TODO Component', () => {
  let sandbox,
    $todoCmptElement,
    todoFormScope,
    $todoFormElement,
    $todoListElement,
    todoFactory,
    todoCtrl,
    parentScope;

  beforeEach(angular.mock.module('todoApp'));

  beforeEach(angular.mock.inject((_$compile_, _$rootScope_, _$injector_) => {
    sandbox = sinon.sandbox.create();
    parentScope = _$rootScope_.$new();

    $todoCmptElement = _$compile_('<todo-component></todo-component>')(parentScope);
    todoCtrl = $todoCmptElement.isolateScope().vm;

    parentScope.$digest();

    $todoFormElement = $todoCmptElement.find('todo-form');
    $todoListElement = $todoCmptElement.find('todo-list');
    todoFormScope = $todoFormElement.isolateScope();

    todoFactory = _$injector_.get('TodoFactory');

    todoCtrl.$onInit();
  }))

  it('title property should be initialized', () => {
    expect(todoCtrl.title).to.be.a('string');
    expect(todoCtrl.title).to.not.be.empty;
  });

  it('should contain empty todos array after initialization', () => {
    expect(todoCtrl.todos).to.be.exist;
    expect(Array.isArray(todoCtrl.todos)).to.be.true;
    expect(todoCtrl.todos).to.be.empty;
  });

  it('should add new todo into todos if user pressed  ENTER key and todo is correct', () => {
    const handleCreateTodoSpy = sinon.spy(todoCtrl, 'handleCreateTodo');
    const onCreateTodoSpy = sinon.spy(todoFormScope, 'onCreateTodo');
    todoCtrl.todos = [];
    const previousTodo = todoFormScope.currentTodo;
    previousTodo.text = 'some todo';

    parentScope.$digest();

    $todoFormElement.find('input').triggerHandler({ type: 'keydown', which: 13 });

    expect(onCreateTodoSpy).to.have.been.calledWith({ todo: previousTodo });
    expect(handleCreateTodoSpy).to.have.been.called;
    expect(handleCreateTodoSpy).to.have.been.calledWith(previousTodo);
    expect(todoCtrl.todos).to.include(previousTodo);
    expect(todoCtrl.todos).to.have.lengthOf(1);
  })

  it('should render todo list', () => {
    todoCtrl.todos = [
      todoFactory.createTodo('some todo'),
      todoFactory.createTodo('another todo'),
      todoFactory.createTodo('next todo')
    ];

    parentScope.$digest();

    expect($todoListElement.find('li').length).to.be.equal(3);
  });

  afterEach(() => {
    sandbox.restore();
  })
});
