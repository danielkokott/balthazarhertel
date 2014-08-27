var app = angular.module('balthazarhertel', ['ngRoute', 'ngSanitize'])
.config(function($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider.when('/', {
      templateUrl: 'index.html',
      controller: MovieCtrl
    });

    $routeProvider.when('/:movie', {
      templateUrl: 'index.html',
      controller: MovieCtrl
    });

    $routeProvider.otherwise({
      redirectTo: '/'
    });
  });
app.directive("moviethumb", function() {
  var linkFunction = function(scope, element, attributes) {
    console.log("scope");

    scope.h1 = "BAM";
    scope.title = "PAM";
  }

  return {
    restrict: 'E',
    templateUrl: '../templates/moviethumb.html',
    link: linkFunction
  }
});

function MovieCtrl($scope, $http, $location, $routeParams) {
  $scope.movies = movies;
  console.log($scope.movies);
    //$location.path("/tilalleminevenner");
  }

  var movies = [
  {
    "url": "http://player.vimeo.com/video/74717033",
    "thumb": "img/TAMV.jpg",
    "h1": "SUPER16",
    "title": "TIL ALLE MINE VENNER",
    "slug": "tilalleminevenner"
  },
  {
    "url": "http://player.vimeo.com/video/73302141",
    "thumb": "img/Trold.jpg",
    "h1": "KORTFILM",
    "title": "TROLD",
    "slug": "trold"
  }
  ];

// $(".movie").click(function(e) {
//  if ($(this).attr("data-play") !== undefined) {
//    if ($("#movieplayer iframe").attr("src") != $(this).attr("data-play")) {
//      $("#movieplayer iframe").attr("src",$(this).attr("data-play"));
//    }
//    else {
//      e.preventDefault();
//    }
//  } else {
//    e.preventDefault();
//  }
//  $("#movieplayer").slideDown(500);
// });

// $("#movieplay_close").click(function(e) {
//  $("#movieplayer").slideUp(500);
// });
