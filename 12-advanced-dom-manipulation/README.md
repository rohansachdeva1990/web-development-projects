## DOM Events

- Used to make webpages responsive.

- How?
	- We select an element and add an event listener.
	- Eg.
		- Listen for a click on this button.
		- Listen for a hover on the <h1>
		- Listen for key press event on text input

	```
		var button = document.quer...
		button.addEventListener("click", function() {console.log(...Clicked....)
			
			// we can access "this" here

		});
	```
	- We can have more than one listener on an element.
	- We can declare named function seperately and use that as an arg.


- Refer mdn event reference for all types of event you want to use.

## Excercise
	- color changer
	- score keeper
	- couting events

	