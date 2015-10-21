var Greet = function(){
	this.greeting = "Hello there!";
	this.greet = function() {
		console.log(this.greeting);		
	};
};

/* 	O require armazena os módulos em cache, este código será executado somente uma vez,
	 fazendo com que todos as partes que consumam este modulo, compartilhem do mesmo objeto
*/
module.exports = new Greet();