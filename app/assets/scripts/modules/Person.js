// Person.js
console.log("app/assets/scripts/modules/Person.js - enter");

class Person {
   constructor(aname, acolor) {
   this.myName = aname;
   this.favColor = acolor;
  }

  greet() {
    console.log("Yo - I've been babelized! Mi nombre es " + this.myName
    	         +  " y mi casa es " + this.favColor
    	         +  "." );
  }
}

// module.exports = Person;  // ECMA5 syntax w Node.JS 'module.exports' keyword.
export default Person;

console.log("app/assets/scripts/modules/Person.js - exit");

