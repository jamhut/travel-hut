// App.js
console.log("app/assets/scripts/App.js - enter");

var $ = require('jquery');

var Person = require('./modules/Person') ;
/*
alert(" This is a msg for our webpack automation -"
	 + " coming from app/assets/scripts/App.js"); */
alert("app/assets/scripts/App.js - testing 23 skeedaddle");

var john = new Person("John Do", "reddish-blue");
var jane = new Person("Jane So", "bluish-red");
john.greet();
jane.greet();

console.log("app/assets/scripts/App.js - exit");

$("h1").remove();
