var util = require("util");

var Person = function(){
	this.firstname = "John";
	this.lastname = "Doe";	
};

Person.prototype.greet = function() {
	console.log("Hello: " + this.firstname + " " + this.lastname);
};

var Policeman = function() {
	Person.call(this); // para ligar além às propriedades do objeto;
	this.badgeNumber = "123456";
};

util.inherits(Policeman, Person); //Para linkar o prototype

var policeman = new Policeman();
policeman.greet(); 