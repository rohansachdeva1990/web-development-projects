// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift()

// 2. Sort the array in order.
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" from the array.
array.shift();

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array = array.reverse();
console.log(array); //you should have at the end; ["Kiwi", "Oranges", "Blueberries"]

// using this array,
 var array2 = [
     "Banana",          // 0
     [                  // 1
        "Apples",       // 1, 0
        [               // 1, 1
            "Oranges"   // 1, 1, 0
        ],
        "Blueberries"   // 1, 2
    ]
];

console.log(array2[1][1][0]);
// access "Oranges".