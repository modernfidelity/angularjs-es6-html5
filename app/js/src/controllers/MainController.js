/**
 *
 * MainController
 *
 */

class MainController {

    constructor($scope, $route, $routeParams, $location, $timeout) {

        console.log("MainController loaded...", $location.path());

        this.name = "Monkey Bob";
        this.firstName = "Monkey";
        this.lastName = "Bob";
        this.checkIt($scope, $location, $timeout);

    }
    checkIt($scope, $location, $timeout) {
        $timeout(function(){
            $location.path('/main');
            $scope.$apply();
        }, 6000);

    }

    setname() {

        return "set name func called";

    }

    learnMore() {

        alert("clicked");

    }

}

export { MainController }