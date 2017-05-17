function config($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      controller: 'HomeCtrl',
      controllerAs: 'vm',
      template: require('./home.html')
    })
    .otherwise({ redirectTo: '/home' });

  $locationProvider.html5Mode(true);
}

export default config;
