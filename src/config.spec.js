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

  it('should set HomeCtrl if home route is active', () => {
    $rootScope.$apply(() => $location.path('/home'));

    expect($route.routes['/home'].controller).to.be.equal('HomeCtrl');
    expect($route.routes['/home'].controllerAs).to.be.equal('vm');
  })
})
