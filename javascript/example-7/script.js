var database = [
	{
		username: "rohan",
		password: "sachdeva"
	},
	{
		username: "ichigo",
		password: "kurosaki"
	},
	{
		username: "ulquiorra",
		password: "bleach"
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


function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password) {
			return true;

		}
	}
	return false;
}

function signIn(user, pass) {
	// const isAuthorized = function (username, password) {
	// 	return user === username && pass === password;
	// }

	// // Using for-loops
	// for (var i = 0; i < database.length; i++) {
	// 	if (isAuthorized(database[i].username,
	// 		database[i].password)) {
	// 		console.log(newsfeed);
	// 		break;
	// 	}
	// 	else {
	// 		alert("Wrong credentials");
	// 	}
	// }

	if(isUserValid(user, pass)){
		console.log(newsfeed);
	} else {
		alert("Wrong Credentials");
	}
}

signIn(usernamePrompt, passwordPrompt);

