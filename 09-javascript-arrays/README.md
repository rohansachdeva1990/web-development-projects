### To store multiple objects of same type.

# Define array and remove, add delete

	var friends = ["Charlie", "Liz", "David", "Mattias"];

	- To add new element to an existing array, we dont need to allocate some memory and stuff we just add to a new location in our array
	- javascript will do the job for us.
		- friends[4] = "Rohan";
		- friends[10] = "Dom"
		- Now friends will look like - charlie, liz, david, mattias, rohan, undefined x 5, Dom

	- How to define
		- var friends = [];
		- var friends = new Array();
		- var random_collection = [48, true, "Rob", null];
		- Arrays have a length property just like strings
			- var nums = [1,2,3,4];
			- var.length; // 4 
	- nested array or 2d array

# Some built in functions 

	// LIFO like stack
	- push/pop

	// FIFO like queue
	- shift(remove first item in array and returns that item)/unshift(add to front of array)

	- indexOf (returns the first index at which a given element can be found, -1 if element is not found)
	
	- slice (copy part of an array) or we can copy entire array using array.slice();
	
	- https://developer.mozilla.org/bm/docs/Web/JavaScript/Reference/Global_Objects/Arrays

## Array Iteration

	- Use for loop to iterate over an array
	- Use forEach to iterate
	- Compare and contrast for loops and forEach

	- JavaScript provides an easy built in way of treating over an array: ForEach

		- arr.forEach(someFunction)
		
			- var colors = ["red", "orange", "yellow", "green"];

			colors.forEach(function(color){
					console.log(color);
				});
			// Very similar to lambda stuff in java streams

	- splice(), to reduce some size

	- Custom forEach(), like a strategy pattern
	
	/**
	 * Sneakpeek to javascript objects
	 */
	// Only one argument
	Array.prototype.myForEach = function(func){
		for(var idx = 0; idx < this.length; idx++){
			func(this[idx]);
		}
	};
	- we can access the array by this.
