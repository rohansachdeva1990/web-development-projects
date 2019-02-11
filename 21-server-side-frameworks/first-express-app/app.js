var express = require("express");
var app = express();

//  Route
// We are posting get request
//  "/" ---> "Hi There!"
app.get("/", function(req, res){
	res.send("Hi There!");
});

//  "/bye" ---> "Good Bye!"
app.get("/bye", function(req, res){
	res.send("Good Bye!");
});

//  "/dog" ---> "MEOW"
app.get("/dog", function(req, res){
	res.send("MEOW!");
});

// Now using path variables
app.get("/r/:subredditName", function(req, res){
	var subreddit = req.params.subredditName.toUpperCase();
	res.send("Welcome to the " + subreddit + " subreddit");
})

app.get("*", function(req, res){
	res.send("You are a star !!")
});

// Tell express to listen for requests(Start server)
app.listen(3000, function(){
	console.log("Server has started!!");
});