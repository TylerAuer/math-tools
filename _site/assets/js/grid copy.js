var startNumber = 1;
var endNumber = 100;
var columns = 10;


//Generates multiples buttons
function generateButtons() {
  for (i = 1; i <= columns; i++) {
    $("#skip-count-btn-bank").append('<button id="count-' + i + '-btn" type="button" class="btn btn-primary" onclick="skipCounter(' + i + ');">' + i + '</button>');
  }
}
generateButtons();

// Builds the table
function buildTable() {
  // Generates table of numbers
  for (i = startNumber; i < 1 + endNumber; i++) {
    if (i % columns == 1) {
      $("#grid").append("<tr>");
    };
    // Adds cell for number
    $("#grid").append("<td class='number' id='" + i + "'>" + i + "</td>");
    // Adds </tr> after multiple of 10
    if (i % columns == 0) {
      $("#grid").append("</tr>");
    };
  };
  // Adds the closing </tr> tag
  $("#grid").append("</tr>");
};
buildTable();


// Skip counts and colors tiles based on multiple
function skipCounter(multiple) {
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
function eratosthenes() {
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
