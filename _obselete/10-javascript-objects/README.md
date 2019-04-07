## Objectives

### Understand Objectives conceptually

	// Some array to identify a person	
	var person = ["Cindy", 32, "Manhattan"];
	
	// to retrieve the person hometown
	person[2] // Not meaningful

	// What if we reverse the order
	var person2 = ["Jarvis", "City2", 34];


Now converting to object (Key value pair)

	var person = {
		name: "Rohan",
		age: 27,
		city: "Antwerp"
	}

To retrieve an object

	// Bracket notation
	console.log(person["name"]);

	// Dot notation
	console.log(person.name);

Few scenarios

	- you cannot use dot notation if the property starts with a number

		someObj.1dsl // INVALID
		someObj["1dsl"] // VALID

	- you can lookup using a variable with bracket notation

		var str = "name";
		someObj.str // INVALID
		someObj[str] // VALID

	- you cannot use dot notation for property name with spaces
	
		someObj.fav color // INVALID
		someObj["fav color"] // VALID
Updating data

	person["age"] += 1;
	person.city = "den haag";

Creating Objectives
	

	// make an empty object and then add to it
	var person = {};
	person.age = 32;
	likewise...

	// all at once
	var person = {
		age: 23;
		likewise...
	}

	// another way of intializing an Object
	var person = new Object();
	person.age = 23;
	likewise
	

- Object can hold any type of data - numbers, string, array, boolean etc
	- It can even contain nested objects.
	- looks like JSON format
	

### Write code using JS objects

	- var someObject = { 
		friends: [
			{name: "Malfoy"},
			{name: "Crabbe"},
			{name: "Goyle"}
			], 
		color: "purple", 
		isEvil: true
	};


## This keyword

	var comments = {};
	comments.data = ["Good one", "Wow", "Lame...." ];
	// Defining member function
	comments.print = function(){
		this.data.forEach(function(el){
			console.log(el);
		});
	};
	comments.print();


Popular javscript library:-
- Underscore.js