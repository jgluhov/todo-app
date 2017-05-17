describe('TODO List', () => {
  let sandbox,
    $todoCmptElement,
    todoCtrl,
    $todoListElement,
    $injector,
    todoListScope,
    parentScope,
    todoFactory,
    $compile,
    $rootScope,
    addTodoSpy,
    $element;

  beforeEach(angular.mock.module('todoApp'))

  beforeEach(angular.mock.inject(_$injector_ => {
    $injector = _$injector_;
  }))

  beforeEach(() => {
    $compile = $injector.get('$compile');
    $rootScope = $injector.get('$rootScope');
    todoFactory = $injector.get('todoFactory');
  })

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    parentScope = $rootScope.$new();

    todoCtrl = {
      todos: [],
      addTodo: function() {}
    }

    addTodoSpy = sandbox.spy(todoCtrl, 'addTodo');

    $element = angular.element('<div><todo-list></todo-list><div>');
    $element.data('$todoComponentController', todoCtrl);
    console.log($element.data)
    $compile($element)(parentScope);

    $todoListElement = $element.find('todo-list');

    // parentScope.$digest();
  })

  it('should exist todoListDirective', () => {
    expect($injector.has('todoListDirective')).to.be.true;
  });
});
