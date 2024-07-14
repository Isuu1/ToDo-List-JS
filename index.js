//Target list element
const list = document.getElementById("list");
//Target user input
const userInput = document.getElementById("user-input");

//create new element
//add user input as text
//add element to list
function addToList() {
  const newElement = document.createElement("li");
  //Add delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  //Take user input value
  newElement.textContent = userInput.value;
  newElement.appendChild(deleteBtn);
  list.appendChild(newElement);
  //Reset user input after adding element to list
  userInput.value = "";
}
