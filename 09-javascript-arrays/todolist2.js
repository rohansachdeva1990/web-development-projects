var answer = prompt("What would you like to do?");
var todos = ["Buy something"];

while (answer !== "quit") {
    if (answer === "new") {
        addTodo();
    } else if (answer === "list") {
        listTodos();
    } else if (answer === "delete") {
        deleteTodo();
    }
    answer = prompt("What would you like to do?");
}

console.log("Ok, you quit the app!");


function listTodos() {
    console.log("********");
    todos.forEach(function(todo, index) {
        console.log(index + ": " + todo);
    });
    console.log("********");
}

function addTodo() {
    var newTodo = prompt("Enter a new todo");
    todos.push(newTodo);
    console.log("Added todo");
}

function deleteTodo() {
    // ask for index to be deleted
    var index = prompt("Enter index of todo to delete");
    // delete that todo
    todos.splice(index, 1);
    console.log("Deleted todo");
}