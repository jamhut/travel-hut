// Person.js
console.log("app/assets/scripts/modules/Person.js - enter");

function Person(aname, acolor) {
  this.myName = aname;
  this.favColor = acolor;
  this.greet = function() {
    console.log("Hello, my name is " + this.myName
    	         +  " and my fav clr is " + this.favColor
    	         +  "." );
  }
}

console.log("app/assets/scripts/modules/Person.js - exit");
module.exports = Person;
