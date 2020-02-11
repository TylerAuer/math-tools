$("#btn-build-mult-table").click(function() {
  url = "/mult_table/mult_table.html?"; // base url
  //Gets user input
  rows = $("#mult-table-rows").val();
  columns = $("#mult-table-columns").val();
  //Builds URL
  url += "rows=" + rows + "&columns=" + columns;
  //Sends user to URL
  window.location.href = url;
});

$("#btn-build-grid").click(function() {
  url = "/100_chart/grid.html?"; // base url
  //Gets user input
  startNumber = $("#grid-startNumber").val();
  endNumber = $("#grid-endNumber").val();
  eratosthenes = $('input[id="eratosthenes"]').is(":checked");
  columns = $("#grid-columns").val();

  //Builds URL
  url +=
    "startNumber=" +
    startNumber +
    "&endNumber=" +
    endNumber +
    "&eratosthenes=" +
    eratosthenes +
    "&columns=" +
    columns;
  //Sends user to URL
  window.location.href = url;
});
