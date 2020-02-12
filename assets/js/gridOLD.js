//Checks if there is a startNumber GET variable in URL
var startNumber;
if (getUrlVars()["startNumber"] != undefined) {
  startNumber = Number(getUrlVars()["startNumber"]);
} else {
  startNumber = 1;
};

//Checks if there is a endNumber GET variable in URL
var endNumber;
if (getUrlVars()["endNumber"] != undefined) {
  endNumber = Number(getUrlVars()["endNumber"]);
} else {
  endNumber = 100;
};

//Checks if there is a columns GET variable in URL
var columns;
if (getUrlVars()["columns"] != undefined) {
  columns = Number(getUrlVars()["columns"]);
} else {
  columns = 10;
};

//Checks if there is a eratosthenes GET variable in URL
var eratosthenes;
if (getUrlVars()["eratosthenes"] != undefined) {
  eratosthenes = getUrlVars()["eratosthenes"];
} else {
  eratosthenes = false;
};

// Read a page's GET URL variables and return them as an associative array.
// Example ?columns=10&rows=12
// Use this to get a variable--> getUrlVars()["columns"]
function getUrlVars() {
  var vars = [],
    hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
};

// Builds the table
function buildTable(startNumber = 1, endNumber = 100, columns = 10) {
  // Generates skip count buttons
  for (i = 1; i <= columns; i++) {
    $("#skip-count-btn-bank").append('<button id="count-' + i + '-btn" type="button" class="btn btn-primary" onclick="skipCounter(' + i + ');">' + i + '</button>');
  };

  // Generates other buttons
  //Reset btn
  $('#function-btn-bank').append('<button id="reset-btn" type="button" class="btn btn-primary">Reset</button>');
  //Eratosthenes
  if (eratosthenes == 'true') {
    $('#function-btn-bank').append('<button id="eratosthenes-btn" type="button" class="btn btn-primary";">Eratosthenes</button>')
  };

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
//  for (i = startNumber; i < 1 + endNumber; i++) {
//    if (i % columns == 1) {
//      $("#grid").append("<tr>");
//    };
//    // Adds cell for number
//    $("#grid").append("<td class='number' id='" + i + "'>" + i + "</td>");
//    // Adds </tr> after multiple of 10
//    if (i % columns == 0) {
//      $("#grid").append("</tr>");
//    };
//  };
//  // Adds the closing </tr> tag
//  $("#grid").append("</tr>");
//};

buildTable(startNumber, endNumber, columns);


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

// Eratosthenes Btn
$("#eratosthenes-btn").click(function () {
  runEratosthenes(endNumber);
});
