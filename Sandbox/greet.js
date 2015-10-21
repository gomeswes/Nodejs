var greet = function() {
	console.log("Hello there!");
};

module.exports = { greet: greet };
console.log(require);
console.log(module);
console.log(__filename);
console.log(__dirname);