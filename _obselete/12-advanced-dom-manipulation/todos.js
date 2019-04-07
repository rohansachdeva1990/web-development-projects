/*var firstLi = document.querySelector("li");
firstLi.addEventListener("mouseover", function() {
    console.log("MOUSE OVER");
    firstLi.style.color = "green";

});

firstLi.addEventListener("mouseout", function() {
	firstLi.style.color = "black";
});

*/


var lis = document.querySelectorAll("li");

for (var idx = 0; idx < lis.length; idx++) {
    lis[idx].addEventListener("mouseover", function() {
        this.classList.add("selected");
    });

    lis[idx].addEventListener("mouseout", function() {
        this.classList.remove("selected");
    });

    lis[idx].addEventListener("click", function() {
    	this.classList.toggle("done");
    });

}