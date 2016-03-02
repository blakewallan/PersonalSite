var app = angular.module('app', ['ngRoute', 'ngAnimate']);


//Routing
app.config(function($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'aboutController'
    })

    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    })

    .when('/projects', {
      templateUrl : 'pages/projects.html',
      controller  : 'projectsController'
    });
});


//Main Controller
app.controller('mainController', function($scope) {
  $scope.pageClass = 'page-home';

});

app.controller('aboutController', function($scope) {
  $scope.pageClass = 'page-about';

});

app.controller('contactController', function($scope) {
  $scope.pageClass = 'page-contact';

});

app.controller('projectsController', function($scope) {
  $scope.pageClass = 'page-projects';

});

//Controller for fixing active page in bootstrap navbar
app.controller('navHighlightController', function($scope, $location){
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.url();
  };
});