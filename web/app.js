var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })
    
    .when('/addressEntry', {
        templateUrl: 'pages/addressEntry.html',
        controller: 'addressEntryController'
    })
    
    .when('/addressRetrieve', {
        templateUrl: 'pages/addressRetrieve.html',
        controller: 'addressRetrieveController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);

myApp.controller('addressEntryController', ['$scope', '$log', '$routeParams', function($scope, $log) {
    
    $scope.address = 'address';
    
}]);


myApp.controller('addressRetrieveController', ['$scope', '$log', '$routeParams', function($scope, $log) {
    
    $scope.addressShow = 'third';
    
}]);

