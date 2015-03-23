/**
 *
 * MainController
 *
 */

class MainController {

    constructor($scope) {

        console.log("MainController loaded...");

        this.name = "Monkey Bob";
        this.firstName = "Monkey";
        this.lastName = "Bob";


    }


    setname() {

        return "set name func called";

    }

    learnMore() {

        alert("clicked");

    }

}

export { MainController }