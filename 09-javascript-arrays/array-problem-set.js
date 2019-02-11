/**
 * @return NA
 */

/**
 * [printReverse A function that takes an array as an argument and prints out the elements in the array in reverse order (don't actually reverse the array itself)]
 * @param  {[array]} var input         
 * @return NA
 */
function printReverse(input) {
    for (var index = input.length - 1; index >= 0; index--) {
        console.log(input[index]);
    }
}

function testPrintReverse() {
    console.log("Testing printReverse():-");
    printReverse([1, "rohan", 2, -3, 7.123124]);
}

/**
 * [isUniform A function which takes an array as an argument and returns true if all element in the arrays are identical]
 * @param  {[array]} var input         
 * @return boolean
 */
function isUniform(input) {
    var isIdentical = true;
    var inputLength = input.length;
    if (input !== null && inputLength > 0) {
        var startVal = input[0];
        for (var idx = 1; idx < inputLength; idx++) {
            if (startVal !== input[idx]) {
                isIdentical = false;
                break;
            }
        }
        return isIdentical;
    }
}

function testIsUniform() {
    console.log("Testing isUniform():-");
    console.log("[2,2,2,2]: isUniform returns: " + isUniform([2, 2, 2, 2]))
    console.log("[2,2,2,3]: isUniform returns: " + isUniform([2, 2, 2, 3]))
}

/**
 * [sumArray A function thar accepts an array of numbers and returns the sum of all numbers in the array]
 * @param  {[array]} var input         
 * @return {[int]}     sum of array elements
 */
function sumArray(input) {
    var sum = 0;
    input.forEach(function(value) { sum += value; });
    return sum;
}

function testSumArray() {
    console.log("Testing sumArray():-");
    console.log("[1,2,3,4]: sumArray returns:" + sumArray([1, 2, 3, 4]))
    console.log("[1,2,3,-4]: sumArray returns:" + sumArray([1, 2, 3, -4]))
}


/**
 * [max A function that accepts an array of numbers and returns the maximum numbers in the array]
 * @param  {[array]} var input
 * @return {[int]}
 */
function max(input) {
    var maxValue = input[0];
    for (var idx = 1; idx < input.length; idx++) {
        if (input[idx] > maxValue) {
            maxValue = input[idx];
        }
    }
    return maxValue;
}

function testMax() {
    console.log("Testing max():-");
    console.log("[1,2,3,4]: max returns: " + max([1, 2, 3, 4]));
    console.log("[0,-2,-4,-1]: max returns: " + max([0, -2, -4, -1]));
}



function myForEach(arr, func){
	for (var idx = 0; idx < arr.length; idx++){
		func(arr[idx]);
	}
}

function testMyForEach() {
    console.log("Testing myForEach():-");
	var nums = [1,2,3,4];
	myForEach(nums, function(num){console.log(num)});
}

/**
 * Sneakpeek to javascript objects
 */
// Only one argument
Array.prototype.myForEach = function(func){
	for(var idx = 0; idx < this.length; idx++){
		func(this[idx]);
	}
};

function testBetterMyForEach(){
	console.log("Test my better for each:-");
	var nums = [1,2,3,4,5];
	nums.myForEach(function(num){console.log(num)});
}

function test() {
    console.log("*********************************");
    testPrintReverse();
    testIsUniform();
    testSumArray();
    testMax();
    testMyForEach();
    testBetterMyForEach();
    console.log("*********************************");
}


test();