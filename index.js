//Target list element
const list = document.getElementById("list");
//Target user input
const userInput = document.getElementById("user-input");

function removeFromList(event) {
  const listElement = event.target.parentElement;
  list.removeChild(listElement);
}

function makeTaskCompleted(event) {
  event.target.classList.add("completed");
}

//create new element
//add user input as text
//add element to list
function addToList() {
  const newElement = document.createElement("li");
  //Add event listener to completing task
  newElement.addEventListener("click", makeTaskCompleted);
  //Take user input value
  newElement.textContent = userInput.value;
  list.appendChild(newElement);
  //Add delete button to list element
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  //Take user input value
  newElement.appendChild(deleteBtn);
  //Add event listener for delete button
  deleteBtn.addEventListener("click", removeFromList);
  //Reset user input after adding element to list
  userInput.value = "";
}
