describe("TodoApp", function() {
  var $rootScope,
        $compile,
        parentScope,
        todoComponentController,
        $componentController;

  beforeEach(module('todoApp'));

  describe('Init state', function() {
    beforeEach(inject(function(_$rootScope_, _$compile_, _$componentController_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $componentController = _$componentController_;

      todoComponentController = $componentController('todo');
      parentScope = $rootScope.$new();

      todoComponentElement = $compile(angular.element('<todo></todo>'))(parentScope);
      parentScope.$digest();
    }));

    it('should initially be set title property', function() {
      expect(todoComponentController.title).to.be.a('string');
    });

    it('should initially be set correct title property', function() {
      expect(todoComponentController.title).to.equal('todos');
    });

    it('should render title initially', function() {
      expect(todoComponentElement.find('.todo-title').text()).to.equal('todos');
    });
  })
})
