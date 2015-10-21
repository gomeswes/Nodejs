var greetOne = require("./greet1");
greetOne.greet();
greetOne.greeting = "Hello there! I've changed!";

var greetTwo = require("./greet1");
greetTwo.greet();

var greetThree = require("./greet2");
greetThree.greet();