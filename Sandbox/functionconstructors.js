function Person(firstname, lastname){
	// Quando utilizada com o keyword new, um novo objeto é criado e retornado automaticamente.
	// O novo objeto contém as propriedades definidas
	this.firstname = firstname;
	this.lastname = lastname;
}

Person.prototype.greet = function greet(){
	// Cada objeto criado a partir de new Person, terá acesso ao mesmo prototype
	console.log("Hello, " + this.firstname + " " + this.lastname + "!");
};
// test
var john = new Person("John", "Doe");
john.greet();

var jane = new Person("Jane", "Doe");
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
