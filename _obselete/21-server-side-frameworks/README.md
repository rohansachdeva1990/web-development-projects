## Introduction to Express

- What is a framework? How is it different from a library?

https://stackoverflow.com/questions/3057526/framework-vs-toolkit-vs-library

library is something you are in control of.

framwork, we give up control. We have some decision that have been made for us.

we fill in the blanks with importat parts

it takes all the common stuff
gets rid of boiler plate stuff

- What is Express?
	- is a web dev framework.
	- keep other package glued.

- Why are we using Express?
	- most widely used node framework
	- heavy vs lightweight framework
	- express is light weight
	- more open
	- one can know what is happening internally.

https://expressjs.com/


# Hands On

- Refer first-express-app

- for c9
	// To start server
	- app.listen(process.env.PORT, process.env.IP);

- The package.json
	- ways to manage dependencies, similar to maven dep.

- What is --save flag
- What is npm init
	- Helps you create package.json file

https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json/


# Route Patterns

- "*" route, if someone enters incorrect path and we need to display some error message.

- Order of routes matter. so if we  have * route in the beginning, then it will catch all the request.

- How to pass parameter to routes, using pattern

	app.get("/r/:subredditName"); using colon
	// and we can use similar approach.
- req.params // to check request param.


