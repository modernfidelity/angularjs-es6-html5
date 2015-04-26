/**
 *
 *
 *
 */

class Monkey {

    constructor(name) {
        this.name = name;
        console.log("es6 monkey class loaded...");
    }

    say(msg) {
        console.log(this.name + " says: " + msg);
    }

    how() {
        console.log("I am bob");
        console.log("built via jspm/grunt");
    }

}


export { Monkey };


