// Ao fazer isso, você está substuindo a referência. Fazendo-a apontar para outro local diferente do module.exports
exports = function(){
	console.log("Hello!");
};

console.log(exports);
console.log(module.exports);