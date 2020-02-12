// default parameters
const gridParams = {
  startNumber: 1,
  endNumber: 100,
  columns: 10,
}

// gets user parameters from URL
const getUserParams = () => {
  // gets URL data from after ? in URL in browser window
  const url = window.location.href;
  const urlData = url.slice(url.indexOf("?") + 1);
  // splits into variables
  const dataArray = urlData.split("&");
  const urlParams = {};
  dataArray.forEach(i => {
    const dataPair = i.split("=");
    urlParams[dataPair[0]] = parseInt(dataPair[1]);
  });
  return urlParams;
};

const userParams = getUserParams()

// replaces default params with user params if provided
for (const prop in userParams) {
  gridParams[prop] = userParams[prop];
}

// Builds the table
function buildTable(startNumber, endNumber, columns) {
  const skipCountBtnBank = document.getElementById("skip-count-btn-bank")
  const functionBtnBank = document.getElementById("function-btn-bank")

  // Generates skip count buttons
  for (let i = 1; i <= columns; i++) {
    skipCountBtnBank.innerHTML +=
      '<button id="count-' + i +
      '-btn" type="button" class="btn btn-secondary m-1" onclick="skipCounter(' +
      i + ');">' + i + '</button>';
  };

  //Reset btn
  functionBtnBank.innerHTML +=
    '<button id="reset-btn" type="button" class="btn btn-danger btn-lg m-2">Reset</button>';

  // Generates table of numbers
  counter = 1;

  $("#grid").append("<tr>");
  for (i = startNumber; i < 1 + endNumber; i++) {
    $("#grid").append("<td class='number' id='" + i + "'>" + i + "</td>");
    if (counter == columns) {
      $("#grid").append("</tr>");
      counter = 1;
      if (i != endNumber) {
        $("#grid").append("<tr>");
      }
    } else {
      counter += 1;
    }
  }
};

buildTable(gridParams.startNumber, gridParams.endNumber, gridParams.columns);

// Skip counts and colors tiles based on multiple
function skipCounter(multiple, endNumber = 100) {
  var counter = 0
  repeater = setInterval(function () {
    counter += multiple;
    $("#" + counter).addClass("color-main");
  }, 15 * multiple); // Slower numbers count more slowly
  if (counter > endNumber) {
    clearInterval(repeater); // Halts function after end number is exceeded
  }
};


// Allows numbers to toggle .color or not
$(".number").click(function () {
  $(this).toggleClass("color-main");
});

// Resets the grid using the reset button
$("#reset-btn").click(function () {
  $(".number").removeClass("color-main");
  $(".number").removeClass("color-prime"); // Clears the grid
  clearInterval(repeater); // Halts any currently running skipCounter
});

// Executes the sieve of Eratosthenes
function runEratosthenes(endNumber = 100) {
  // Halts running functions and cleans up the grid
  $(".number").removeClass("color-main"); // Clears the grid
  $(".number").removeClass("color-prime"); // Clears the grid
  // clearInterval(repeater); // Halts function after end number is exceeded but messes things up if no other function has run

  for (i = 2; i <= endNumber; i++) {
    multiple = i;
    if (!$("#" + i).hasClass("color-main")) {
      $("#" + multiple).addClass("color-prime");
    }
    while (multiple <= endNumber) {
      if (!$("#" + multiple).hasClass("color-main")) {
        $("#" + multiple).addClass("color-main");
      }
      multiple += i;
    }
  }
}