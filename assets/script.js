var hoursToDisplay = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
const currentHour = moment().hour();
console.log(currentHour);

for (var i = 0; i < hoursToDisplay.length; i++) {
  var containerDiv = document.getElementById("container");
  var newRow = document.createElement("div");
  newRow.classList.add("row", "time-block");
  newRow.innerHTML = `   <div class="col-2 hour">
  ${hoursToDisplay[i]}:00
  </div>

    <textarea data-hour=${hoursToDisplay[i]} class= "col-8 ${
    currentHour == hoursToDisplay[i]
      ? "present"
      : currentHour < hoursToDisplay[i]
      ? "future"
      : "past"
  }">${localStorage.getItem(hoursToDisplay[i]) || ""}</textarea>

  <button class="col-2 saveBtn" data-hour="${hoursToDisplay[i]}">
    Save
  </button>`;
  containerDiv.append(newRow);
}

var saveButtons = document.getElementsByClassName("saveBtn");
console.log(saveButtons);

Array.from(saveButtons).forEach((button) =>
  button.addEventListener("click", function (e) {
    var userInput = e.target.parentElement.children[1].value;
    var thisHour = e.target.dataset.hour;
    localStorage.setItem(thisHour, userInput);
  })
);

/*Set up time*/

//current time in the format: hours:minutes:seconds - get time
var time = moment().format("MMMM Do YYYY,hh:mm:ss a");
//set initial time on load
document.querySelector("#currentDay").textContent = time;
//method that update the time
var update = function () {
  document.querySelector("#currentDay").innerHTML = moment().format(
    "MMMM Do YYYY, h:mm:ss a"
  );
};
//Live incrementation of time
setInterval(update, 1000);
