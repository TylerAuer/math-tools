$("#btn-build-mult-table").click(function() {
  url = "/apps/mult_table.html?"; // base url
  //Gets user input
  rows = $("#mult-table-rows").val();
  columns = $("#mult-table-columns").val();
  //Builds URL
  url += "rows=" + rows + "&columns=" + columns;
  //Sends user to URL
  window.location.href = url;
});

$("#btn-build-grid").click(function() {
  url = "/apps/grid.html?"; // base url
  //Gets user input
  startNumber = $("#grid-startNumber").val();
  endNumber = $("#grid-endNumber").val();
  columns = $("#grid-columns").val();

  //Builds URL
  url +=
    "startNumber=" +
    startNumber +
    "&endNumber=" +
    endNumber +
    "&columns=" +
    columns;
  //Sends user to URL
  window.location.href = url;
});
