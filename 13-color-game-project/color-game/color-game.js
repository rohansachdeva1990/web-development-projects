var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;

easyBtn.addEventListener("click", function() {
	numSquares = 3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    pickedColor = pickColor();
    colors = generateRandomColors(numSquares);

    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        // Add  initial colors to square

        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        // Add  initial colors to square
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block"; // What is this???
    }
});


colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();

    // change color to match  picked colr
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        // Add  initial colors to square
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
});

for (var i = 0; i < squares.length; i++) {
    // Add  initial colors to square
    squares[i].style.backgroundColor = colors[i];

    // Add click listeners to square
    squares[i].addEventListener("click", function() {
        // Grab colore of picked color
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}


// We return random color
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num) {

    // make an array
    var arr = [];
    // add num random colors to an arrya
    for (var i = 0; i < num; i++) {
        // get the random colors and push into array
        //arr[i] = randomColor();
        arr.push(randomColor());
    }
    // return arr;
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    // Spaces are very important
    return "rgb(" + r + ", " + g + ", " + b + ")";
}