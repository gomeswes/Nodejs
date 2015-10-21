var person = {
	firstname: "",
	lastname: "",
	greet: function(){
		return this.firstname + " " + this.lastname;
	}
};

var john = Object.create(person);
person.firstname = "John";
person.lastname = "Doe";
console.log(john.greet());

var jane = Object.create(person);
person.firstname = "Jane";
person.lastname = "Doe";
console.log(jane.greet());