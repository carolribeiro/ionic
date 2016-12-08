// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngStorage'])

.run(function($ionicPlatform, $rootScope, $state, $localStorage) {
  $ionicPlatform.ready(function() {
    $rootScope.$storage = $localStorage.$default({
      seenIntro: false
    });

    if ($rootScope.$storage.seenIntro) {
      event.preventDefault();
      $state.go('app');
    } 
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('intro', {
    url: "/",
    templateUrl: "templates/intro.html",
    controller: 'IntroCtrl'
  })

  .state('app', {
    url: "/app",
    templateUrl: "templates/app.html"
  });

  $urlRouterProvider.otherwise('/');
})


.controller('MainCtrl', function($scope) {
  $scope.isIOS = ionic.Platform.isIOS();
  $scope.isAndroid = ionic.Platform.isAndroid();
})

.controller('IntroCtrl', function($scope, $rootScope) {
  $scope.slides = {
    currentSlide: 0
  };
  $scope.title = '<i class="icon ion-android-home"></i>';

  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
    if (index == 2)
      $rootScope.$storage.seenIntro = true;
  };
});