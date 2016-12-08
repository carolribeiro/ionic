// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova']);

app.controller('VideoCtrl', function($scope, $cordovaCapture) {
  $scope.data = {
    videoPath: ""
  };

  $scope.captureVideo = $scope.captureVideo = function() {
    var options = { limit: 3, duration: 15 };

    $cordovaCapture.captureVideo(options).then(function(videoData) {
      // Success! Video data is here
      $scope.data.videoPath = "file:/" + videoData[0].fullPath;
    }, function(err) {
      // An error occurred. Show a message to the user
      console.log(err);
    });
  }
});

app.directive("cordovaVideo", function () {
  return {
    restrict: 'AEC',
    scope: {src: '='},
    link: function(scope, element, attrs) {
      scope.$watch('src', function(newVal, oldVal) {
        if (scope.src != "") {
          // Create a div object
          var div = document.createElement('div');
          div.innerHTML = "<video id=\"myCordovaVideo\" controls>"+
                          "<source src=\"" + scope.src + "\" type=\"video/quicktime\">"+
                          "</video>";
          
          // Delete previous video if exists
          var previousDiv = document.getElementById('myCordovaVideo');
          if (previousDiv)
            previousDiv.remove();

          // Append new <video> tag into the DOM
          element.append(div);
        }

      });
    }
  }
});
