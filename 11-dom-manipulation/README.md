#### Finally, JS meets HTML and CSS

### Objectives

##1. Define what is DOM 

 	- DOM : Document Object Model
 		- Interface between javascript and HTML+CSS
 	- Analyze simple HTML page in inspector
 	- some commands:
 		- command: to show html document
 		- console.dir(document): regular object with lots of information
	- Check child nodes for composed elements

##2. Understand why DOM Manipulation is awesome

##3. Few examples of sites that use JS to manipulate the DOM
	- patatap.com

##4. Understand the SELECT, then MANIPULATE workflow

	- select id, class or tag and then manipulate

	- Example 1:-
		- document.querySelector("h2"); // Selecting
		- h2.style.color = "orange"; // Manipulate - Browser automatically update this for us.

	- Example 2:-
		
		var body = document.querySelector("body");
		var isBlue = false;

		setInterval(function() {

				if(isBlue){
					body.style.background = "white";
				}
				else {
					body.style.background = "blue";
				}
				isBlue = !isBlue; // Toggle
			}, 1000);


- document.URL // List URL of the document
- document.links // reveal every link on the page
- document.body // gets the body in html
- document.head // gets the head in html

# The document comes with a bunch of methods for selecting elements. 

	- document.getElementById()

	- document.getElementsByClassName()
		- returns NodeList not an array. It has very basic function of array.
		- no advance feature like forEach supported.

	- document.getElementsByTagName()
		- tag names like h1, li etc
		- always returns a list even if it has single element
		- // Complex - to select adjacent element - emmet way
var adjacentWay = document.querySelector("h1+p");		

	- document.querySelector()
		- newer method, it takes css style selector eg #id_namerst 
		- it gives us the very first match.
		- complex example
			document.querySelector("l1 a.special"); // all anchor tag with class special nested inside li.

	- document.querySelectorAll()
		- same as above, but returns multiple.

### Manipulate Style using DOM

# changing element style.


	var tag = document.getElementById("highlight");

	tag.style.color="blue";
	tag.style.border  = "10px solid red";
	tag.style.fontSize = "70px";
	tag.style.background="yellow";
	tag.style.marginTop="200px";

	- Learn about separaton of concern. instead of working on each  individual style property; try to club particular style in css class and then apply that class.

# adding/removing classes.

	- tag.classList.add("another-class");
	- tag.classList.remove("another-class");
	- tag.classList.toggle("another-class");

	- classList is not an array but a NodeList

# changing the content of a tag.

	<p>
		This is an <strong>awsome</strong> paragraph;
	</p>
	
	var tag = document.querySelector("p");
	tag.textContent// Retrieves the textcontent

	tag.textcont="blah blah blah"

	// Play with text-manipulation.html

	- innerHtml: Similar to textContent, except it returns a string of all
	the html contained ini given element. for eg:-

	<p>
		This is an <strong>awsome</strong> paragraph
	</p>

	var tag = document.querySelector("p");
	tag.innerHtml// This is an <strong>awsome</strong> paragraph 

	<ul>
        <li>Orchids</li>
        <li>Tulips</li>
        <li>Lotus</li>
    </ul>

	ul.innerHTML // "<li>Orchids</li> <li>Tulips</li> <li>Lotus</li>"


	- good approach when manipulating title or headers
		document.querySelector("h1").textContent = "END OF THIS LESSON!";

	- updating a text content with a HTML string wont work, as it convert it into text format.
	but with innerHTML it will work...
	document.body.innerHTML= "<h1>Good Bye Fellas!! </h1>" 



# changing attributes(src, href, etc.)

	```
	<a href="www.google.com">I am a link </a>
	<img src="logo.png">

	```

	```
	var link = document.querySelector("a");

	link.getAttribute("href"); // "www.google.com"

	// Changing the attributes - 
	// Note: the browser assue the link is relative to our url location. so if want to jump to an actual site we need to use http://www.rohan.com (absolute path)
	link.setAttribute("href", "www.rohan.com");

	// similarily
	var img = document.querySelector("img");
	img.setAttribute("src", "logo-2.png");

	```