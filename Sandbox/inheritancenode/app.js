var EventEmitter = require("events");
var util = require("util");


var Greetr = function() {
	EventEmitter.call(this); //Chamando o "superconstrutor" para fazer EventEmitter utilizar o mesmo obj.
	this.greeting = "Hello World!";	
};

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ": " + data);	
	this.emit("greet", data);
};

var greetr = new Greetr();
greetr.on('greet', function(data) {
	console.log("Someone greeted: " + data);
});

greetr.greet("I'm here!");