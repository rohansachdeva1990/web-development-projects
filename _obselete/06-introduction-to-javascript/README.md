### Fundamental concepts of java scripts


1. Evaluate js in chrome js console

	- ctrl + shift + i -> goto console
		- to test things out


2. List the 5 JS primitives

	- Introduce the 5 primitives data type
			// Numbers
			4,
			9.3
			-10

			/ Strings
			"ehldshlf"

			// Booleans
			true
			false

			// null and undefined
			null
			defined

	
	- Follow order of arithmetic opertation 

	Strings
	- concat : "rohan" + "sachdeva"
	- escape with "\"
	- "rohan".length
	- Access individual characters usig [] and an index
		- "rohan"[1] -> o
	- parenthesis are computed first
		- ("blah" + "blah")[6]
	- double back slash is treated as single back slash bcoz we are escaping it.

3. Variables in javascript

	- var yourVariableName = <yourValue>;
	- so we have a single variable type referring to different type of data types like numbers, string, booleans etc.
	- follow camelCase
	
	- A value is undefined if we only declare it, but not define it. Eg.
		- var name; // default value is undefined not null
		- var name = null; // Explicitly setting it to nothingness.

4. Built in methods 

	- alert: pops up message to a use
	- console.log: normall logging stuff; will also show which line number we are debugging at
	- prompt: gt input from user
		- var name = prompt("What is username");
	- clear(): clear the console

5. Comments
	// 
	or 
	/* */

6. How to include separate js file in HTML
	- first-script.html and script.js