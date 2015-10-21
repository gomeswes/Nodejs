var Emitter = require("./emitter");

var emitter = new Emitter();
emitter.on("greet", function() {
	console.log("Someone, somewhere said greet!");	
});
emitter.on("greet", function(){
	console.log("Another listener for greet!");
});

console.log("Hello there!");
emitter.emit("greet");