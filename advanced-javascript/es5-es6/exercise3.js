// change everything below to the newer Javascript!

// 1. let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

// --- New Way
let a = 'test';
const b = true;
const c = 789;
a = 'test2';

// Destructuring
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// --- New Way
const { age, eyeColor, firstName, lastName } = person;

// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
    a: a,
    b: b,
    c: c
};

// --- New Way
var newOkObj = { a, b, c }


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// --- New Way

var newMessage = `Hello ${firstName} have I met you before? I think we met in ${city}  last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

// --- New Way
function isValidAgeNew(age = 10) {
    return age
}

// Or

const isValidAge = (age = 10) => age;


// Symbol
// Create a symbol: "This is my first Symbol"
// 
let symbol = Symbol("This is my first Symbol")

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// --- New Way
// Similar to final functions
const whereAmI =
    (username, location) => (username && location) ? "I am not lost" : "I am totally lost!";



