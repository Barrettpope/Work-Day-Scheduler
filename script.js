// Creating global variables
var dateParagraph = $("#currentDay");
var date = moment().format("dddd, MMMM Do YYYY");
var hour = parseInt(moment().format("HH"));
var timeSlots = [];
var userInput = [];
var toDos = $(".form-control");
var saveButton = $(".save-button");
var resetColors = setInterval(changeColor, 30000)

// Displays current date in header
function displayDate() {
    dateParagraph.text(date);
}
displayDate();

// Modifies color to reflect past, present and future timeslots
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

// Saves user input to page and local storage when save button is clicked
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

    var foundMatch = false;
    for (var i = 0; i < userInput.length; i++) {
        if (userInput[i].time === time) {
            userInput[i].task = valueSlot;
            foundMatch = true;
        }
    }
    if (foundMatch === false) {
        userInput.push({
            "time": time,
            "task": valueSlot,
        });
    }

    localStorage.setItem("todo", JSON.stringify(userInput));
});

// Saves todo tasks to page
function initialize() {
    var todo = JSON.parse(localStorage.getItem("todo"));
    for (var i = 0; i < todo.length; i++) {
        console.log(todo[i]);
        $("input").each(function () {
            if ($(this).attr("data-time") === todo[i].time) {
                $(this).val(todo[i].task);
            }
        })

    }
}
initialize();