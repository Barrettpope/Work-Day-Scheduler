// Creating global variables
var dateParagraph = $("#currentDay");
var date = moment().format("dddd, MMMM Do YYYY");
var hour = parseInt(moment().format("HH"));
var timeSlots = [];
userInput = [];
var toDos = $(".form-control");
var saveButton = $(".save-button");
var resetColors = setInterval(changeColor, 360000)

// Displays current date in header
function displayDate() {
    dateParagraph.text(date);
}
displayDate();

// Modifies color to reflect past, present and future time
function changeColor() {
    hour = parseInt(moment().format("HH"));

    for (var i = 8; i <= 17; i++) {
        timeSlots[i] = $(`#${i}`)
        if (i < hour) {
            $(`#slot${i}`).addClass("past");
        } else if (i === hour) {
            $(`#slot${i}`).addClass("present");
        } else {
            $(`#slot${i}`).addClass("future");
        }
    }
}
changeColor();

// Saves user input to local storage when save button is clicked
saveButton.on("click", function (event) {
    event.preventDefault();
    var clickButton = $(this);
    userInput = JSON.parse(localStorage.getItem("todo"));
    if (!userInput) {
        userInput = [];
    }
    var buttonID = clickButton.attr("id");
    buttonID = buttonID.replace("button", "");
    var valueSlot = $(`#slot${buttonID}`).val();
    var time = $(`#${buttonID}`).text();

    userInput.push({
        "time": time,
        "task": valueSlot
    })
    localStorage.setItem("todo", JSON.stringify(userInput));
});