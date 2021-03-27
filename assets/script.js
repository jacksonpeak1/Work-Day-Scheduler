var hoursToDisplay = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
const currentHour = moment().hour();
console.log(currentHour);

for (var i = 0; i < hoursToDisplay.length; i++) {
  var containerDiv = document.getElementById("container");
  var newRow = document.createElement("div");
  newRow.classList.add("row", "time-block");
  newRow.innerHTML = `   <div class="col-2">
  ${hoursToDisplay[i]}:00
  </div>

    <textarea class= "col-8 ${currentHour == hoursToDisplay[i] ? 'present' : currentHour<hoursToDisplay[i] ? 'future' : 'past'}"></textarea>

  <button class="col-2 saveBtn">
    Save
  </button>`;
  containerDiv.append(newRow);
}

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
