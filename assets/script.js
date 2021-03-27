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

