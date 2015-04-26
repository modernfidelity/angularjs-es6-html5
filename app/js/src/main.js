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
    'ngAnimate',
    'ngRoute',
    'ngResource'


]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/welcome', {
            templateUrl: 'templates/welcome.html',
            controller: MainController
        })
        .when('/main', {
            templateUrl: 'templates/main.html',
            controller: MainController
        })
        .otherwise('/welcome');

    //// configure html5 to get links working on jsfiddle
    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});
});


app.controller('MainController', MainController);

app.directive('helloWorld', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        template: ' <h1>' +
        '<span>say hello</span><span class="green dots">.</span><br>' +
        'We are working <span class="green subtitle">hard!</span>' +
        '</h1>'
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

app.animation('.reveal-animation', function() {
    return {
        enter: function(element, done) {
            element.css('display', 'none');
            element.fadeIn(3000, done);
            return function() {
                element.stop();
            }
        },
        leave: function(element, done) {
            element.fadeOut(500, done)
            return function() {
                element.stop();
            }
        }
    }
})


//export default {}