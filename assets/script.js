var hoursToDisplay = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

for (var i = 0; i < hoursToDisplay.length; i++) {
    var containerDiv = document.getElementById('container');
  var newRow = document.createElement("div");
  newRow.classList.add("row", "time-block");
  newRow.innerHTML = `   <div class="col-2">
  ${hoursToDisplay[i]}:00
  </div>

    <textarea class= "col-8"></textarea>

  <button class="col-2 saveBtn">
    Save
  </button>`;
 containerDiv.append(newRow)

}

