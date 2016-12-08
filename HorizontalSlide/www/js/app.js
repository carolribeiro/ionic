// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.controller('MainCtrl', function($scope) {
  $scope.myData = {
    value: 'No value yet'
  }

  $scope.display = {
    value: 'Not fired yet'
  }
});

app.controller('FirstCtrl', function($scope, $rootScope) {

  $scope.broadcast = function(param) {
    $rootScope.$broadcast('myEvent', param);
  }

});

app.controller('SecondCtrl', function($scope, $rootScope) {

  $scope.changeMyData = function(param) {
    $scope.myData.value = param;
  }

});

app.controller('ThirdCtrl', function($scope, $rootScope) {

  $rootScope.$on('myEvent', function(e, val) {
    $scope.display.value = 'Fired with param: ' + val;
  });

});

app.directive('myDirective', function($rootScope) {
  console.log('Start directive');
  return {
    template: '{{ myData.value }}',
    scope: {myData : '=data'},
    link: function(scope, element, attrs) {

      scope.$watch(attrs.data, function(newVal, oldVal) {
        if (newVal != oldVal) {
          console.log('myData has changed');
          console.log(newVal);
        }
      }, true);
    }
  }
});