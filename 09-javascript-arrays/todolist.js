var answer = prompt("What would you like to do?");
var todoList = new Array();

while (answer !== "quit") {
    if (answer === "new") {
        var newTodo = prompt("Enter a new todo");
        todoList.push(newTodo);
    } else if (answer === "list") {
        console.log(todoList);
    }
    answer = prompt("What would you like to do?");
}

console.log("Ok, you quit the app!");