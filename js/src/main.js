/***
 *
 * Main Application JS
 *
 */


import { Monkey } from "./classes/Monkey"

import { MainController } from './controllers/MainController';




// Launch a Monkey Object
var simian = new Monkey("bob");

simian.say("cats are aliens");
simian.how();


// Bootstrap Angular JS

var app = angular.module('myApp', [

    //'ngRoute',
    //'ngResource'


]);


app.controller('mainController', MainController);

app.directive('helloWorld', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        template: '<h3>Hello JS Module World!!</h3>'
    };
});

app.directive('someDirective', function () {
    return {
        scope: {},
        controller: MainController,
        controllerAs: 'ctrl',
        bindToController: true,
        templateUrl: 'templates/someDirective.html'
    };
});


//export default {}