### Control Flow

How to make decisions

- If statement
- loops
- etc


## Objectives

- Conditional statements
	
	- Boolean Logic: writing statements evaluating to be true or false
	- Comparison operators
		- Normal operator like any other language
		- ===; equal value and type   (New)
		- !==; not equal value or equal type (New)


	- Type coercion
		- like:-
		 var x = 99;
		x == "99"  -> true
		x === "99"  -> false
	
		- "==" perform type coercion, i.e it will make sure to convert the two entities to common format and compare
		- But "===" doesn't do this job for. it wants the type of things we are comparing to be equal

		var y = null;

		y == undefined; -> true;
		y === undefined; -> false;
	
		- Try to use "===" as it is more safe

	- Interesting cases
		- true == "1";    // true ; only works for 1
		- 0 == false      // true
		- null == undefined  // true
		- NaN == NaN // false


	- Logical operator
		 - AND -> &&
		 - OR -> ||
		 - NOT -> !

	- Eg

		var x = 3;
		var y = 8;

		!(x == "3"   || x === y)  && !( y != 8 && x <= y)
		false && 


	-  Values that aren't actually true or false, are still inherently "truthy" or "falsey" when evaluated in a boolean context
		- !"Hello World" or !!"Hello World"
		- !""
		- !null
		- !0
		- !-1
		- ! NaN

	So, Falsey values:
		- false
		- 0
		- ""
		- null
		- undefined
		- NaN 

		Every thing else is truthy

	Eg

		var str = "";
		var msg = "haha!";
		var isFunny = "false";

		!((str || msg)  && isFunny);
			- !( true && true)
			- false

		- When we are evaluating a variable in conditional statement, we are implicitly thinking about its validity so in our case
			- str is valid only if it is not empty


- JS Conditionals
	
	- The way we add logic to our code.

	- If, else if, else

- Loops

	- while loops

		while(someCondition) {
			// run some code
		}

		var str = "hello";
		var count = 0;

		while(count < str.length){
			console.log(str[count]);
			count++;
		}

	- for loops
		for(init; cond; step){

		}