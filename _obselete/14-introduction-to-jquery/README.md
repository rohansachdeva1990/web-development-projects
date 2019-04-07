### Objectives

# What is jQuery

- Is a DOM manipulation library.
- write less do more
- jquery.com
- It's a javascript library.
- refer api docs

# What is a library?

- Developed by others and used by us.

# Why would you use jQuery?

- Fixes broken DOM API
- Brevity and Clarity;
- Ease of use
- Cross browser support; take care of all property  browser dependent
- AjAX
- Lots of people use it; means strong community and tutorial.

# Why would you not use jQuery?

- http://youmightnotneedjquery.com/
- DOM API is no longer broken now. Now much easier to use.
- We can do all things with or without jQuery
- If we want to use 2 or more methods only in jquery, then depending on the complete library is an overhead.
	- Using just for animation is an overheasd
- Performance can be an issue.


# How to include jQuery?

- Download jQuery and link it locally
	'''
		<script type="text/javascript" src="local_path_to_jquery.js"></script>
	'''

- Link to a CDN (a hosted copy)
	'''
		<script type="text/javascript" src= "https://code.jquery.com/jquey-xx-xx.js"></script>
	'''

# General
- keep separate folder for standard js file.
- CDN : Content distributed network; grabbing a file online.
- search - cdn <any library> or cdn jQuery



## Selectors
- Select elements with $()

	- $("selectorGoesHere") - Selecting using jQuery is very similar to document.querySelectorAll(), in that we provide a css style selector and jQuery will return all matching elements.

	eg.
		// to select all img tags
		 $("img")

		// to select all elements with class 'sale'
		$(".sale")

		// to select element with id 'bonus'
		$("#bonus")

		// to select all anchor tags inside of li's
		$("li a")

- Use .css() to style elements
	- The .css() methos is jQuery's interface to styling
		- $(selector).css(property, value)
	- Eg.

		// Select element with id "specail" and give it a border
		- $("#special").css("border", "2px solid red")

		// we can also pass in an object with styles (Good Way)
		var styles = {
			backgroundColor: "pink",
			fontWeight: "bold"
		};

		$("special").css(styles);

- We can style multiple elements at once. (This makes jQuery powerfull)
	// Select all li's and make them yellow
	$("li").css("color", "yellow");

	// Select all elements with class "big" and give them an orange border
	$(".big").css("border", "1px dashed orange");

	- Now we don't need to manually loop through and apply changes

- Basically $ ==> querySelectorAll

## Common Jquery Methods

- val(): http://api.jquery.com/val/ ; Eg. which element is selected in drop down menu etc. like getting the value of input field.
it works on all element that has value attribute.

we can also update the value of some field by passing an argument.

- text(): jQuery version of textContent, gives the combined version of all the selected elements. It can be used for updating also.

- attr(), like src, href of an element.
http://api.jquery.com/attr/
$('img').attr("src", "New value"); check for how to pass multiple arguments

- html(): works like innerHtml: gets the html content of the elements matched in the selector.

We can  update the content of a html file.

- addClass()
- removeClass()
- toggleClass()
- jQuery analog for classList.
- can work on collection all together. with js we need to use loop and do stuff for us.

- last() - gets the last one from given selectors
$('img').last().attr();

- first() ; gets the first one from given selectors

# MAIN DIFFERENCE IS WE CAN ACT ON THE COLLECTION RATHER THAN WRITING A COMPLETE LOOP AS IN VANILLA(BASIC) JS