// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.controller('MyCtrl', function($scope, $ionicScrollDelegate) {
  
  $scope.items = [];
  for (var i=1; i<=100; i++) {
    $scope.items.push({ id: i });
  }

});

app.directive('scrollProgress', function($ionicScrollDelegate) {
  return {
    template: '<div class="progress" style=\'{{percentage}}\'></div>',
    link: function (scope, element, attrs) {
      scope.percentage = '0%';

      ionic.DomUtil.ready(function() {
        var windowHeight = $ionicScrollDelegate._instances[0].element.clientHeight,
            scrollHeight = $ionicScrollDelegate._instances[0].element.querySelector('div.scroll').clientHeight,
            delta = scrollHeight - windowHeight;

        $ionicScrollDelegate._instances[0].$element.bind('scroll', function(e) {
          var scrollPosition = $ionicScrollDelegate.getScrollPosition().top;
          scope.percentage = 'width: ' + (scrollPosition / delta * 100) + '%'; 
          scope.$digest();
        });        
      });
    }
  };
});
