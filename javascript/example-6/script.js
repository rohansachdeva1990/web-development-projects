var todos = [
    "task-1",
    "task-2",
    "task-3",
    "task-4",
    "task-5"
];

var importantTodos = [
    "Important task-1",
    "Important task-2",
    "Important task-3",
    "Important task-4",
    "Important task-5",
]


const todosLength = todos.length;
// For-Loop
for (var i = 0; i < todosLength; i++) {
    console.log(todos[i] + "!");  
    //todos.pop();
}

// For-Each (lambda thing... :))
todos.forEach(function(todo){
    console.log("# " + todo);
})

// Very similar to lambda and method reference
var logTodos = function (todo, index) {
    console.log(index + " : #" + todo);
};

todos.forEach(logTodos);
// We can use the same call back on the another array rather than writing a complete loop again
importantTodos.forEach(logTodos);


// While-Loop
var counterOne = 0;
while(counterOne < 10){
    console.log(counterOne);
    counterOne++;
}

// Do While - do atleast once
var counterTwo = 10;
do{
    console.log(counterTwo)
    counterTwo--;
}while(counterTwo > 0);




