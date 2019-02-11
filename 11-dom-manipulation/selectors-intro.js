// 1. Get element by id
var tagIdHighlight = document.getElementById("highlight");
console.log("Getting element by id:-");
console.dir(tagIdHighlight);

// 2. Get element by class name
var classTags = document.getElementsByClassName("bolded");
console.log("Getting element by class name:-");
console.dir(classTags);

// 3. Get element by tag name
var liTags = document.getElementsByTagName("li");
var headTags = document.getElementsByTagName("head");
var bodyTags = document.getElementsByTagName("body");
console.log("Getting element by tag name:-");
console.dir(liTags);

// 4. Query selector - takes css styled character, returns the
// first one; not all the tags. THEY RETURN JUST ONE ELEMENT
var querySelectedTag = document.querySelector("#highlight");
var querySelectedTagReturnClass = document.querySelector(".bolded");
var anotherExample = document.querySelector("h1");

// 5. Query selector all

var allBoldedClassTags = document.querySelectorAll(".bolded");
console.log("Query selector all:-");
console.dir(allBoldedClassTags);