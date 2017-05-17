describe("TODO Status", () => {
  let $injector,
    todoFactory,
    todoStatusConstant;

  beforeEach(angular.mock.module('todoApp'))

  beforeEach(angular.mock.inject((_$injector_) => {
    $injector = _$injector_;
    todoFactory = $injector.get('todoFactory');
    todoStatusConstant = $injector.get('todoStatusConstant');
  }))

  it('should todo status constant exist', () => {
    expect($injector.has('todoStatusConstant')).to.be.ok;
  });

  it('should have all properties in constant object', () => {
    expect(todoStatusConstant).to.have.property('ACTIVE').and.equal('active');
    expect(todoStatusConstant).to.have.property('COMPLETED').and.equal('completed');
  })

  it('should initially todo active status to be set', () => {
    const todo = todoFactory.createTodo();

    expect(todo.status).to.exist;
  })

})
