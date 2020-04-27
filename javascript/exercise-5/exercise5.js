
//1
function checkDriverAge() {
    var age = Number(prompt("Enter your age!"));
    if (age < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    }
    else if (age > 18) {
        alert("Powering On. Enjoy the ride!");
    }
    else if (age === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}


//2
var checkDriverAge2 = function () {
    var age = Number(prompt("Enter your age!"));
    if (age < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    }
    else if (age > 18) {
        alert("Powering On. Enjoy the ride!");
    }
    else if (age === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}


// 3 - BONUS
function checkDriverAge(age) {
    if (Number(age) < 18) {
        return "Sorry, you are too young to drive this car. Powering off";
    }
    else if (Number(age) > 18) {
        return "Powering On. Enjoy the ride!";
    }
    else if (Number(age) === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    }
}