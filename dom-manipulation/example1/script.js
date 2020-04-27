var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.classList.add("list-group-item");
	li.classList.add("d-flex");
	li.classList.add("justify-content-between");
	li.classList.add("align-items-center");

	var p = document.createElement("p");
	p.appendChild(document.createTextNode(input.value));
	p.classList.add("p-0");
	p.classList.add("m-0");
	p.classList.add("flex-grow-1");
	p.classList.add("todoitem")

	li.appendChild(p);
	li.appendChild(createDeleteButton());
	ul.appendChild(li); // Adding to the list
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markAsDone(event) {
	var selected = event.target;
	if (selected.tagName.toUpperCase() == "P") {
		if (selected.classList.toggle("done")) {
			selected.parentNode.classList.add("list-group-item-success");
		}
		else {
			selected.parentNode.classList.remove("list-group-item-success");
		}
	}
}

function removeAction(event) {
	var selected = event.target;
	selected.parentNode.remove();
}

function createDeleteButton() {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"))
	deleteButton.addEventListener("click", removeAction);
	deleteButton.classList.add("btn");
	deleteButton.classList.add("btn-danger");
	return deleteButton;
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", markAsDone);
