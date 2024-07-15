//Target list element
const list = document.getElementById("list");
list.querySelectorAll("li");
//Target user input
const userInput = document.getElementById("user-input");

//Creating todays date
const date = document.getElementById("date");
const todayDate = new Date();
date.innerHTML = "Today is: " + todayDate.toLocaleDateString();

function removeFromList(event) {
  const listElement = event.target.parentElement;
  list.removeChild(listElement);
}

function makeTaskCompleted(event) {
  const listElement = event.target.parentElement;
  listElement.classList.add("completed");
  const statusInfo = document.createElement("p");
  statusInfo.textContent = "Closed";
  statusInfo.classList.add("task-status-completed");
  listElement.appendChild(statusInfo);
}

//create new element
//add user input as text
//add element to list
function addToList() {
  const newElement = document.createElement("li");
  newElement.classList.add("list-element");
  //Take user input value
  newElement.textContent = userInput.value;
  list.appendChild(newElement);
  //Add checkbox to list element
  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.setAttribute("type", "checkbox");
  newElement.prepend(checkbox);
  //Add event listener to completing task
  checkbox.addEventListener("click", makeTaskCompleted);
  //Add delete button to list element
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.classList.add("delete-btn");
  //Add delete button to list element
  newElement.appendChild(deleteBtn);
  //Add event listener for delete button
  deleteBtn.addEventListener("click", removeFromList);
  const taskStatus = document.createElement("p");
  taskStatus.textContent = "Open";
  taskStatus.classList.add("task-status");
  newElement.appendChild(taskStatus);
  //Reset user input after adding element to list
  userInput.value = "";
}
