// Is even
// 

function isEven(num) {
    return (num % 2 === 0);
}

function factorial(num) {
    var fact = 1;
    for (var idx = num; idx > 0; idx--) {
        fact = fact * idx;
    }
    return fact;
}

function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}

console.log("isEven(10) : " + isEven(10));
console.log("isEven(15) : " + isEven(15));

console.log("factorial(0) : " + factorial(0));
console.log("factorial(2) : " + factorial(2));
console.log("factorial(4) : " + factorial(4));

console.log("kebabToSnake(rohan-sachdeva-1990) : " + kebabToSnake("rohan-sachdeva-1990"));