var express = require("express");
var app = express();

var animalVoiceMap = new Object();
animalVoiceMap['pig'] = "Oink";
animalVoiceMap['cat'] = "Meow";
animalVoiceMap['cow'] = "Moo";
animalVoiceMap['dog'] = "Woof Woof!";
animalVoiceMap['snakes'] = "Hissssssssss!!";

function getVoiceByAnimal(animalName) {
    return animalVoiceMap[animalName];
}


// Visiting "/" should print "Hi there, welcome to my assignment"
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

// Visiting "/speak/animal" should print "The animal says 'value passed'"
app.get("/speak/:animal", function(req, res) {

    var animalName = req.params.animal.toLowerCase();
    var speaks = getVoiceByAnimal(animalName);

    if (speaks) {
        res.send("The " + animalName + " says " + speaks);
    } else {
        res.send(animalName + " animal not yet exist in this planet!");
    }
});


app.get("/repeat/:message/:times", function(req, res) {

    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for (var i = 0; i < times; i++) {
        result += message + " ";
    }
    res.send(result);
});


//  *
app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?")
})

// Start Server
app.listen(3000, function() {
    console.log("Server has started!!");
})