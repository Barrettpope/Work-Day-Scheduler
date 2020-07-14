// Assigning variables to selected HTML elements
var dateParagraph = $("#currentDay");
var date = moment();
var toDos = $(".form-control");
var saveButton = $(".btn");

// Creating global variable for user input
userInput = "";

// Adding an event listener to the save buttons
saveButton.on("click", saveInput());

// Displays current date in header
function displayDate() {

}

// Stores user input in text box and saves to local storage
function saveInput() {
    localStorage.setItem("", "");
    toDos.innerHTML = localStorage.getItem("");
}

// Modifies color to reflect past, present and future time
function changeColor() {

}