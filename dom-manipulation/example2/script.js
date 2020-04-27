var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.getElementById("randomize");

function setGradientColor(c1, c2) {
    body.style.background = "linear-gradient(to right, " + c1.value + ", " + c2.value + ")";
}

function updateCss() {
    css.textContent = body.style.background + ";"
}

function randomColor() {
    return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
}

function setGradient() {
    setGradientColor(color1, color2);
    updateCss();
}

function setRandomizeGradient() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomize.addEventListener("click", setRandomizeGradient);

// Initial
setGradient();