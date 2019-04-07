var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//  convert s to java script object.
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

var friends = ["Rohan", "Rajat", "Reckon", "Anne"];

// Routes
app.get("/", function(req, res){
	res.render('home');
});


app.get("/friends", function(req, res){
	res.render("friends", {friends: friends});
});

// Post route
app.post("/addFriend", function(req, res) {
	//console.log(req.body);
	var newFriend = req.body.newFriend;
	friends.push(newFriend);
	res.redirect("/friends");
	//res.send("You have reached the POST route")
});

// Server
app.listen(3000, function() {
	console.log('Server started!');
});