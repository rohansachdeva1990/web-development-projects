### jQuery Events
- Making things interactive
- we cannot refer to "this" directly in the event handler function directly. we need to do it jQuery way $(this)

- Core events
	- click(): way to add click listener to an element.

```javascript

	$('#submit').click(function(){
		console.log("Another click");
	});

	// selecting all button and adding click listener to them(this makes it powerful)
	$('button').click(function(){
		console.log("Some one clicked a button");
	});

	// Some executions

	$('h1').click(function(){alert("h1 clicked")});

	$('button').click(function(){alert("button clicked!!")});

	$('button').click(function(){$(this).css("background", "pink")});

	$('button').click(function(){
		var text = $(this).text();
		console.log("you clicked " + text);
	});
```
	- keypress(): fires in between key up and down
		for eg. shift + a
				keydown -> shift and a
				keyup -> shift and a
				keyprss -> A

```javascript

	$('input').keypress(function(){
		 	console.log("YOU PRESSED A KEY");
		 });

	$('input').keypress(function(event){
		console.log(event);
	});

	$('input').keypress(function(event){
		if(event.which === 13){
			alert("You hit enter!!");
		}
	});
```

	- on(): Used mostly. works similarly to addEventListener. It lets you specify the type of event to listen for. It is more generic and we can use the name of the event.

```javascript

	$('#submit').on("click",function(){
		console.log("Another click");
	});

	// selecting all button and adding click listener to them(this makes it powerful)
	$('button').on("click",function(){
		console.log("Some one clicked a button");
	});

	// Only update the element we clicked
	$("h1").on("click",function(){
		$(this).css("color", "purple");
	});

	// mouseenter
	$('button').on("mouseenter", function(){
		$(this).css("font-weight", "bold");
		});
	// mouseleave
	$('button').on("mouseleave", function(){
		$(this).css("font-weight", "normal");
		});

```

## Why use On()?
- click() only add listeners for existing elements
- on() will add listeners for all poteintial future elements

### jQuery Effects

- Fading

	- Fading only hides, but does not remove the element
	- $(this).remove(); // will remove element from DOM
	- fadeToggle()

```javascript

	//fadeOut call is async. we dont wait for it to finish. it is handled by jQuery
	$("button").on("click",function(){
		$('div').fadeOut(1000);
		console.log("FADE completed");
	});

	// We can use callback on completion
	$("button").on("click",function(){
		$('div').fadeOut(1000, function(){
			console.log("FADE completed");
		});
	});

```

- slides
	- similar to fade functions
		- slideUp
		- slideDown
		- slideToggle
		- we can also pass the callback function on completion

```javascript

	$("#slideBtn").on("click", function() {
	    $('div').slideToggle();
	});

```