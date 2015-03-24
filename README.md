# AngularJS ES6 & HTML5 Demo App

Demo [AngularJS](https://angularjs.org/) 1.3 app built with [ES6](http://es6rocks.com/) modules using [Grunt](http://gruntjs.com/), [JSPM / SystemJS](http://jspm.io/) and [Traceur](https://github.com/google/traceur-compiler). 

The [HTML5](http://www.html5rocks.com/en/) template is via http://www.initializr.com/ using [Bootstrap 3.x](http://getbootstrap.com/)

## Prerequisites:

- node.js: `brew install node`

## Application Dependencies

All the dependencies required for the build system, testing and so on are managed with npm and defined in `package.json`. They can be installed with:

```
npm install
```

## Running the Application

Run the index.html through a web server i.e. http-server via NodeJS or Apache...

## Updating / Customising the Application

The build process is handled via Grunt; which watches the the /js/src/* folder when running, and compiles
out changes via the jspm bundle-sfx command. This transpiles the ES6 source code into browser friendly ES5, 
and can be run successfully via Google Traceur-runtime.

Open a new terminal window and run 

```
grunt
```

Any changes now made within /js/src will be picked up and transpiled into the /builds folder. 