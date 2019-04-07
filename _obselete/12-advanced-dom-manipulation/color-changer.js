document.querySelector("button")

var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var isColored = true;
var div1 = document.querySelector(".myStyle1");
var div2 = document.querySelector(".myStyle2");

// Way 1
function changeToStyle1() {
    div1.classList.toggle("myStyle1")
}

// Way 2
function changeToStyle2() {
    if (isColored) {
        div2.style.background = "white";
    } else {
        div2.style.background = "green";
    }
    isColored = !isColored;
}

button1.addEventListener("click", changeToStyle1);
button2.addEventListener("click", changeToStyle2);