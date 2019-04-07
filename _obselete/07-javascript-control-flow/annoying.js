/*
V1
 var answer = prompt("Are we there yet?");
while (answer !== "yes" && answer !== "yeah") {
    answer = prompt("Are we there yet?");
}
*/

// V2 - BONUS part
var answer = "";
while(answer.indexOf("yes") === -1){
	answer = prompt("Are we there yet?");
}
alert("YAY, we made it!!");