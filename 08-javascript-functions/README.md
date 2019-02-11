### Objectives

# Write functions declarations and function expressions

	// Declare a function
	function doSomething(){
		console.log("helllo");
	}

	// Call it
	doSomething();

	function square(num){
		console.log(num * num);
	}

	function area(length , width){
		console.log(lenght * width);
	}

	function greet(person1, person2, person 3){

	}

- We don't need to set the argument type in the function. 

# Explain difference between console.log and return

	function square(x){
		return x * x;
	}


	function capitalize(str) {
		if(typeof str === "number"){
			return "that's not a string";
		}
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	

	- Function expression ( like annoymous functions or may be something like lambda)

	var capitalize = function(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);	
	}
	// a problem with this approach is we can loss function when we reassign a value to capitalize


# Define functions that take multiple arguments

# Scopes and high order functions
	- scope is the context that code is executed in.

	- if we define a variable outside a function, then we can use it inside a function

		// parent scope
		var y = 99;

		function foo(){
			// child scope
			console.log(y); // This is valid
			// we can alsoo update the value of y
			// think of this like a global variable
		}
	- opposite is not true.
	- local scope is prefered when present.
	- similar to jave anonymous class analogy.

	- High order function
		- takes function as an argument or return functions

			function sing(){
				console.log("abc abc ....");
				console.log("def ghi ....");
			}

			// passing function to a function	
			setInterval(sing, 1000) // call sing every 1000 ms
			// setInterval return a number, use that number as an argument to clearInterval(<number returned from setInterval>)

		- Anonymous function	

			setInterval(function(){console.log("abc abc...."); console.log("def def.....");}, 2000);


			

