// 1
console.log("all numbers between -10 and 19 :-");
for (var count = -10; count <= 19; count++) {
    console.log(count);
}

// 2
console.log("all even numbers between 10 and 40 :-");
for (var count = 10; count <= 40; count += 2) {
    console.log(count);

}

// 3
console.log("all odd numbers between 300 and 333 :-");
for (var count = 300; count <= 333; count++) {
    if (count % 2 == 1) {
        console.log(count);
    }
}

// 4
console.log("Print all numbers divisible by 5 and 3 between 5 and 50 :-");
for (var count = 5; count <= 50; count++) {
    if (count % 3 == 0 && count % 5 == 0) {
        console.log(count);
    }
}