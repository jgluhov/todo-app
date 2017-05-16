describe('ROUTES testing', () => {
  let $route,
    $location,
    $rootScope;

  beforeEach(angular.mock.module('todoApp'));
  beforeEach(angular.mock.inject(($injector) => {
    $route = $injector.get('$route');
    $location = $injector.get('$location');
    $rootScope = $injector.get('$rootScope');
  }))

  it('should redirect to home if it`s unknown location was set', () => {
    $rootScope.$apply(() => $location.path('/unknown'));
    
    expect($location.path()).to.be.equal('/home');
  })
})
