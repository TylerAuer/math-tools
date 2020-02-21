//How many iterations have happened
let iterations = 0;
let counts = [0, 0, 0, 0, 0, 0];
let percents = [0, 0, 0, 0, 0, 0];

//Last var is [die1, sum]
let last = 0;

$(document).ready(function() {
  reset();
  $("#run1").click(run1);
  $("#run10").click(run10);
  $("#reset").click(reset);
  runForever();
});

function reset() {
  //Resets variables to initial states
  iterations = 0;
  counts = [0, 0, 0, 0, 0, 0];
  percents = [0, 0, 0, 0, 0, 0];
  last = 0;

  //Stops progress
  running = 0;

  //Updates HTML
  $("#percent1").text("0%");
  $("#percent2").text("0%");
  $("#percent3").text("0%");
  $("#percent4").text("0%");
  $("#percent5").text("0%");
  $("#percent6").text("0%");

  $("#count1").text(0);
  $("#count2").text(0);
  $("#count3").text(0);
  $("#count4").text(0);
  $("#count5").text(0);
  $("#count6").text(0);

  $("#iterCount").text("Iteration Count: " + iterations);

  myChart.data.datasets[0].data = counts;
  myChart.update();
}

//Returns a 0 or 1
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Assigns last to an 6 number array ex: [0,0,1,1,0]
function randomRoll() {
  last = getRandomInt(1, 6);
  iterations += 1;
}

//Updates the big circles
function updateGraphic() {
  $("#die1").text(last);
}

//Updates the counts in the table
function updateTable() {
  counts[last - 1] += 1;

  $("#count1").text(counts[0]);
  $("#count2").text(counts[1]);
  $("#count3").text(counts[2]);
  $("#count4").text(counts[3]);
  $("#count5").text(counts[4]);
  $("#count6").text(counts[5]);

  $("#iterCount").text("Iteration Count: " + iterations);

  percents = [
    Math.round((counts[1] / iterations) * 1000) / 10,
    Math.round((counts[2] / iterations) * 1000) / 10,
    Math.round((counts[3] / iterations) * 1000) / 10,
    Math.round((counts[4] / iterations) * 1000) / 10,
    Math.round((counts[5] / iterations) * 1000) / 10,
    Math.round((counts[0] / iterations) * 1000) / 10
  ];

  $("#percent1").text(percents[0] + "%");
  $("#percent2").text(percents[1] + "%");
  $("#percent3").text(percents[2] + "%");
  $("#percent4").text(percents[3] + "%");
  $("#percent5").text(percents[4] + "%");
  $("#percent6").text(percents[5] + "%");

  myChart.data.datasets[0].data = counts;
  myChart.update();
}

function runUntilStop() {
  randomRoll();
  updateGraphic();
  updateTable();
}

function run1() {
  var timesRun = 0;
  var interval = setInterval(function() {
    timesRun += 1;
    if (timesRun === 1) {
      clearInterval(interval);
    }
    runUntilStop();
  }, 1);
}

function run10() {
  var timesRun = 0;
  var interval = setInterval(function() {
    timesRun += 1;
    if (timesRun === 10) {
      clearInterval(interval);
    }
    runUntilStop();
  }, 500);
}

function runForever() {
  $("#runForever").click(function() {
    $("#runForever").hide();
    $("#stop").show();
    let runChecker = setInterval(runUntilStop);

    $("#stop").click(function() {
      clearInterval(runChecker);
      $("#stop").hide();
      $("#runForever").show();
      runForever();
    });
  });
}

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        data: percents,
        backgroundColor: "rgba(255, 0, 141, 1)", // $theme-pink
        borderColor: "rgba(20, 186, 204, 1)", // $theme-blue
        borderWidth: 3
      }
    ]
  },
  options: {
    legend: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "rgba(255, 0, 141, 1)", // $theme-pink
            fontFamily: "Bungee, cursive" // $hFont
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "rgba(255, 0, 141, 1)", // $theme-pink
            fontFamily: "Bungee, cursive" // $hFont
          }
        }
      ]
    }
  }
});
