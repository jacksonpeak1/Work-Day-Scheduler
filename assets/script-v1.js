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

/*set color*/

const arrayTimeBlocks = document.querySelectorAll(".time-block");
const currentHour = moment().hour();

arrayTimeBlocks.forEach((timeblock) => {
  const blockTime = timeblock.getAttribute("id");

  //check if past present or future
  if (blockTime < currentHour) {
    timeblock.setAttribute("class", "past");
  } else if (blockTime == currentHour) {
    timeblock.setAttribute("class", "present");
  } else {
    timeblock.setAttribute("class", "future");
  }
});

//get the data from the storage
if (localStorage.getItem("9") !== null) {
  document.querySelector("#\\39").children[1].value = localStorage.getItem("9");
}
if (localStorage.getItem("10") !== null) {
  document.querySelector("#\\31\\30").children[1].value = localStorage.getItem(
    "10"
  );
}
if (localStorage.getItem("11") !== null) {
  document.querySelector("#\\31\\31").children[1].value = localStorage.getItem(
    "11"
  );
}
if (localStorage.getItem("12") !== null) {
  document.querySelector("#\\31\\32").children[1].value = localStorage.getItem(
    "12"
  );
}
if (localStorage.getItem("13") !== null) {
  document.querySelector("#\\31\\33").children[1].value = localStorage.getItem(
    "13"
  );
}
if (localStorage.getItem("14") !== null) {
  document.querySelector("#\\31\\34").children[1].value = localStorage.getItem(
    "14"
  );
}
if (localStorage.getItem("15") !== null) {
  document.querySelector("#\\31\\35").children[1].value = localStorage.getItem(
    "15"
  );
}
if (localStorage.getItem("16") !== null) {
  document.querySelector("#\\31\\36").children[1].value = localStorage.getItem(
    "16"
  );
}
if (localStorage.getItem("17") !== null) {
  document.querySelector("#\\31\\37").children[1].value = localStorage.getItem(
    "17"
  );
}

const arraySaveBtn = document.querySelectorAll(".saveBtn");
arraySaveBtn.forEach((saveBtn) => {
  saveBtn.addEventListener("click", () => {
    //get id of parent element
    const id = saveBtn.parentElement.getAttribute("id");

    //get the description element text
    const text = saveBtn.parentElement.children[1].value;

    //set the item
    localStorage.setItem(id, text);
  });
});
