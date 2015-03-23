var app = angular.module('myApp', [

    //'ngRoute',
    //'ngResource'


]);


app.controller('myCtrl', function($scope) {
    $scope.firstName= "Monkey";
    $scope.lastName= "Bob";
});