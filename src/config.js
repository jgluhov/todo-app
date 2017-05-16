function config($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      template: require('./home.html')
    })
    .otherwise({ redirectTo: '/home' });

  $locationProvider.html5Mode(true);
}

export default config;
