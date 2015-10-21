var Emitter = require("events");
var eventConfig = require("./config.json").events;

var emitter = new Emitter();
emitter.on(eventConfig.GREET, function() { console.log("Someone just greet!"); });
emitter.on(eventConfig.GREET, function() {console.log("And i'm the other listener");});

console.log("Hello there!");
emitter.emit(eventConfig.GREET);