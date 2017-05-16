import { expect } from 'chai';

describe("Todo panel", () => {
  let $injector,
    $compile,
    $rootScope,
    parentScope,
    todoFactory,
    $todoPanelElement;

  beforeEach(angular.mock.module('todoApp'));

  beforeEach(angular.mock.inject((_$injector_) => {
    $injector = _$injector_;
    $compile = $injector.get('$compile');
    $rootScope = $injector.get('$rootScope');
    todoFactory = $injector.get('todoFactory');
  }))

  beforeEach(() => {
    parentScope = $rootScope.$new();

    parentScope.todos = [
      todoFactory.createTodo('some todo'),
      todoFactory.createTodo('new todo'),
      todoFactory.createTodo('empty todo')
    ];

    $todoPanelElement = $compile('<todo-panel todos="todos"></todo-panel>')(parentScope);
  })

  it('should todo panel registered', () => {
    expect($injector.has('todoPanelDirective')).to.be.ok
  });

  it('should have three inputs type radio', () => {
    expect($todoPanelElement.find('input[type="radio"]').length).to.equal(3)
  })

  // should have todo status constant in scope

  // should call handler if any button was clicked
  // should call handler with some filter key in param if any button was clicked
  // by clicking any button we should call component controller function to filter

})
