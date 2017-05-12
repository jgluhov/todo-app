import TodoFactory from './todo/todo.factory';

describe("TodoApp", () => {
  let $scope,
    todoComponentController,
    todoComponentElement;

  beforeEach(angular.mock.module('todoApp'));

  beforeEach(angular.mock.inject(($compile, $rootScope, $componentController) => {
    $scope = $rootScope.$new();

    todoComponentController = $componentController('todoComponent', {
      TodoFactory: TodoFactory
    });

    todoComponentElement = $compile('<todo-component></todo-component>')($scope)[0];
    $scope.$digest();
  }));

  describe("Todo title", () => {
    let todoTitleElement;

    beforeEach(() =>
      todoTitleElement = todoComponentElement.querySelector('span[ng-bind="vm.title"]')
    );

    it('title property should be initialized', () => {
      expect(todoComponentController.title).to.be.a('string');
      expect(todoComponentController.title).to.not.be.empty;
    });

    it('title property should be rendered', () =>
      expect(todoTitleElement.textContent).to.be.equal(todoComponentController.title)
    );
  });

  describe("Todo form", () => {
    let todoFormElement,
      todoInputElement;

    describe("Todo form element", () => {
      beforeEach(() => todoFormElement = todoComponentElement.querySelector('form'));

      it('should contain form', () => expect(todoFormElement).to.exist);

      it('shoud have correct name', () => {
        expect(todoFormElement.name).to.be.equal('todoForm');
      });
    });

    describe("Todo todo input element", () => {
      beforeEach(() => todoInputElement = todoFormElement.querySelector('input'));

      it('should contain input element', () => expect(todoInputElement).to.exist);

      it('shoud be set the placeholder property', () => {
        expect(todoComponentController.placeholder).to.be.a('string');
        expect(todoComponentController.placeholder).to.not.be.empty;
      });

      it('should be set placeholder to input element', () =>
        expect(todoInputElement.placeholder).to.not.be.empty
      );

      it('should be initialized currentTodo property', () => {
        expect(todoComponentController.currentTodo).to.be.exist;
      });

      it('should contain empty todos array after initialization', () => {
        expect(todoComponentController.todos).to.be.exist;
        expect(Array.isArray(todoComponentController.todos)).to.be.true;
        expect(todoComponentController.todos).to.be.empty;
      });

      it('shoud apply handler if ENTER button was pressed', () => {
        

      })

    });

  });

})
