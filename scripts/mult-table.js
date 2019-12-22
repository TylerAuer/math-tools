//Checks if there is a row GET variable in URL
var rows;
if (getUrlVars()["rows"] != undefined) {
  rows = getUrlVars()["rows"];
} else {
  rows = 10;
};


//Checks if there is a columns GET variable in URL
var columns
if (getUrlVars()["columns"] != undefined) {
  columns = getUrlVars()["columns"];
} else {
  columns = 10;
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


// Builds the table (need to give unique IDs)
function buildTable() {
  //Generates the header row
  $("#grid").append("<tr>");
  $("#grid").append("<th class='table-header'> </th>"); //Makes the top-left blank square
  for (i = 1; i <= columns; i++) {
    $("#grid").append("<th id='" + i + "' class='table-header column-header'>" + i + "</th>");
  };
  $("#grid").append("</tr>");

  // Generates the table
  for (i = 1; i <= rows; i++) {
    $("#grid").append("<tr>");
    $("#grid").append("<th id='" + i + "' class='table-header row-header'>" + i + "</th>");
    multiple = i;
    counter = 1;
    while (multiple / i <= columns) {
      // Creates IDs with the factors. Ex: x4xy6y would be 4*6 = 24
      $("#grid").append("<td class='number' id='x" + counter + "xy" + i + "y'>" + multiple + "</td>");
      multiple += i;
      counter += 1;
    }
    $("#grid").append("</tr>");
  }
};
buildTable();

// Allows numbers to toggle .color-main or not
$(".number").click(function () {
  $(this).toggleClass("color-main");
});

//clear button
$("#clear-btn").click(function () {
  $(".number").removeClass("color-main");
  $(".number").removeClass("color-prime"); // Clears the grid
  clearInterval(repeater); // Halts any currently running skipCounter
});

// Toggles entire column on click
$(".column-header").click(function () {
  columnNumber = $(this).attr('id');
  $("[id*='x" + columnNumber + "x']")
    .toggleClass("color-main");
});

// Toggles entire row on click
$(".row-header").click(function () {
  columnNumber = $(this).attr('id');
  $("[id*='y" + columnNumber + "y']")
    .toggleClass("color-main");
});
