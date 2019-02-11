// 1
console.log("all numbers between -10 and 19 :-");
var count = -10;
while (count <= 19) {
    console.log(count);
    count++;
}


// 2
// Instead of doing mod operation we can olso jump 2 as we know we start from even number
console.log("all even numbers between 10 and 40 :-");
count = 10;
while (count <= 40) {
    /*    if (count % 2 == 0) {
            console.log(count);
        }
        count++;

    	// OR
        */
    console.log(count);
    count += 2;
}

// 3
console.log("all odd numbers between 300 and 333 :-");
count = 300;
while (count <= 333) {
    if (count % 2 == 1) {
        console.log(count);
    }
    count++;
}

// 4
console.log("Print all numbers divisible by 5 and 3 between 5 and 50 :-");
count = 5;
while (count <= 50) {
    if (count % 3 == 0 && count % 5 == 0) {
        console.log(count);
    }
    count++;
}