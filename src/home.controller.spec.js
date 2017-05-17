describe("HomeCtrl", () => {
  let $controller,
    $rootScope,
    $scope,
    homeCtrl;

  beforeEach(angular.mock.module("todoApp"))

  beforeEach(angular.mock.inject((_$rootScope_, _$controller_) => {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
  }));

  beforeEach(() => {
    $scope = $rootScope.$new();
    homeCtrl = $controller('HomeCtrl', { $scope: $scope });
  });

  it('should HomeCtrl exist', () => {
    expect(homeCtrl).to.be.ok;
  })

  it('title property should be initialized', () => {
    expect(homeCtrl.title).to.be.a('string');
    expect(homeCtrl.title).to.not.be.empty;
  });

});
