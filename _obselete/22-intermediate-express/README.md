## Rendering HTML and Templates

- Learn how to send  separate HTML site on api request.

	// Pain in th ass stuff
	res.send("<h1>Welcome to home page!!</h1> <h2>blah blah</h2>");


* Use res.render() to render HTML (from an EJS file)
	- looks for ejs file by default in views.
	-

* Explain what EJS is and why we use it.
Embedded java scripts
* Pass variables to EJS templates



- c9 <file name>
- We can populate the ejs file from db.
- <%= %>, to access js content from the page.
	- <h1>You fell in love with : 5 + 5 = <%=  5 + 5 %></h1>
	- we can execute js stuff in this format


	ReferenceError: /home/rohan/Personal/source/web-development-experiments/22-intermediate-express/ejs-demo/views/love.ejs:1
 >> 1| <h1>You fell in love with : <%=  thingVar %></h1>
    2|
    3| <p>P.S. This is the love.ejs </p>

thingVar is not defined
    at eval (eval at compile (/home/rohan/Personal/source/web-development-experiments/22-intermediate-express/ejs-demo/


- <%= THIS IS JAVASCRIPT, USE THE FUNCTIONS ON THE FILEDS AS REQD %>

- Express automatically look into view directory and search for the templates that are referred in the code.

-     // In the template value of thingVar should be thing
    res.render("love.ejs", { thingVar: thing });

# EJS Control flow - Conditionals and Loops

- To post collection of data on the file

<%= %>  add things to the html
<% %> doesnt add things to html, mostly for conditionals



## Styles and Partials
- Show how to properly include public assets
- Proper;y configure our app to use EJS
- Use partials to dry up our code.

- We can either add the style to the ejs itself or we can link it via separate file
- We need to tell express to add directory other than views to its path.

- Partials: follows DRY principle
	- We write the boilerplate html code just once. We can include
	the css at just one place.
	- every module ejs can use the same template

- app.css vs /app.css : with / it searches in the root directory
- Some refactoring in this section.
- some also call partials as layaouts


- npm install body-parser
- res.redirect()
- name fields add elements to request body