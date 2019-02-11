// 4 different ways to select first paragraph

var byId = document.getElementById("first");
console.log(byId);

var byClass = document.getElementsByClassName("special")[0];
console.log(byClass);

var byTagName = document.getElementsByTagName("p")[0];
console.log(byTagName);

var byQuerySelectorWay1 = document.querySelector("p")
console.log(byQuerySelectorWay1);

var byQuerySelectorWay2 = document.querySelector("p#first")
console.log(byQuerySelectorWay2);

var byQuerySelectorWay3 = document.querySelector("p.special")
console.log(byQuerySelectorWay3);

var byQuerySelectorWay4 = document.querySelector("p#first.special")
console.log(byQuerySelectorWay4);

var byQuerySelectorWay5 = document.querySelector("#first")
console.log(byQuerySelectorWay5);

var byQuerySelectorWay6 = document.querySelector(".special")
console.log(byQuerySelectorWay6);

// Similar queries like above
var byQuerySelectorAll1 = document.querySelectorAll("p")[0];
console.log(byQuerySelectorAll1);

var byQuerySelectorAll2 = document.querySelectorAll(".special")[0]
console.log(byQuerySelectorAll2);

// Complex - to select adjacent element - emmet way
var adjacentWay = document.querySelector("h1+p");
