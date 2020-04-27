var database = [
	{
		username: "rohan",
		password: "sachdeva"
	}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var usernamePrompt = prompt("What's your username ?");
var passwordPrompt = prompt("What's your password ?");

function signIn(user, pass) {
	if (user === database[0].username &&
		pass == database[0].password) {
		console.log(newsfeed);
	}
	else {
		alert("Wrong credentials");
	}
}

signIn(usernamePrompt, passwordPrompt);

