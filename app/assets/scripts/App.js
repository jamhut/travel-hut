// App.js
console.log("app/assets/scripts/App.js - enter");

var $ = require('jquery');
// var Person = require('./modules/Person') ;  // ECMA5 syntax w Node.JS 'require' keyword.
import Person from './modules/Person';          // ECMA6 syntax.

class Adult extends Person {
  payTaxes(){
    console.log(this.myName + " owes no more taxes.");
  }
}

/*
alert(" This is a msg for our webpack automation -"
	 + " coming from app/assets/scripts/App.js");
alert("app/assets/scripts/App.js - testing 23 skeedaddle"); */

var john = new Person("John Do", "reddish-blue");
var jane = new Adult("Jane So-and-So", "cimmaron");
john.greet();
jane.greet();
jane.payTaxes();
console.log("app/assets/scripts/App.js - exit");

//  $("h1").remove();
