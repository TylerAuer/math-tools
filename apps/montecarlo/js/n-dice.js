///////////////////////
// Number of dice to use
///////////////////////

// declare in HTML
// const diceCount = 3;

genDice();
genTable();

///////////////////////
// Initial settings
///////////////////////
let iterations = 0;
let counts = new Array(6 * diceCount - diceCount + 1).fill(0);
//Last var is [die1, die2,....sum]
let lastResult = new Array(diceCount + 1);

// initialize chart
const ctx = document.getElementById("myChart");
let chartLabels = [];
for (let i = diceCount; i <= 6 * diceCount; i++) {
  chartLabels.push(i.toString(10));
}
let myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: chartLabels,
    datasets: [
      {
        data: counts,
        backgroundColor: "rgba(255, 0, 141, 1)", // $theme-pink
        borderColor: "rgba(20, 186, 204, 1)", // $theme-blue
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
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

//////////////////
// Generate elements
//////////////////
function genDice() {
  const diceDiv = document.getElementById("lastResult");
  for (let i = 0; i < diceCount; i++) {
    diceDiv.innerHTML += '<div id="die' + (i + 1) + '" class="die">?</div>';
  }
}

// Buttons
const run1 = document.getElementById("run1");
run1.addEventListener("click", () => {
  simController.count(1);
  stopBtn.style.display = "none";
  runForever.style.display = "block";
});

const run10 = document.getElementById("run10");
run10.addEventListener("click", () => {
  simController.count(10);
  stopBtn.style.display = "none";
  runForever.style.display = "block";
});

const runForever = document.getElementById("runForever");
runForever.addEventListener("click", () => {
  simController.start();
  runForever.style.display = "none";
  stopBtn.style.display = "block";
});

const stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", () => {
  simController.stop();
  stopBtn.style.display = "none";
  runForever.style.display = "block";
});

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
  reset();
  stopBtn.style.display = "none";
  runForever.style.display = "block";
});

function genTable() {
  const table = document.getElementById("results-table");
  const headRow = document.createElement("tr");
  headRow.id = "headRow";
  const countRow = document.createElement("tr");
  countRow.id = "countRow";
  const percentRow = document.createElement("tr");
  percentRow.id = "percentRow";
  // First <td> in each row
  headRow.innerHTML = "<th></th>";
  countRow.innerHTML = "<td class='table-col1'>Counts</td>";
  percentRow.innerHTML = "<td class='table-col1'>Percents</td>";

  //generates initial fill
  for (let i = diceCount; i <= 6 * diceCount; i++) {
    headRow.innerHTML += "<th>" + i + "</th>";
    countRow.innerHTML += "<td id='count" + i + "'>0</td>";
    percentRow.innerHTML += "<td id='percent" + i + "'>0%</td>";
  }

  table.appendChild(headRow);
  table.appendChild(countRow);
  table.appendChild(percentRow);
}

function randomRoll() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let newLast = new Array(diceCount);
  for (let i = 0; i < newLast.length; i++) {
    newLast[i] = getRandomInt(1, 6);
  }
  const rollSum = newLast.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  newLast.push(rollSum);
  lastResult = newLast;

  iterations += 1;
  counts[rollSum - diceCount] += 1;
}

//Updates the counts in the table
function updateAll() {
  // update dice
  for (let i = 0; i < lastResult.length - 1; i++) {
    const die = document.querySelector(
      "#lastResult div:nth-child(" + (i + 1) + ")"
    );
    die.innerHTML = lastResult[i];
  }
  //update iterations
  const iterCountDiv = document.getElementById("iterCount");
  iterCountDiv.innerHTML = "Iteration Count: " + iterations;
  // update counts and percents in table
  for (let i = 0; i < counts.length; i++) {
    // update counts
    const countTD = document.getElementById("count" + (i + diceCount));
    countTD.innerHTML = counts[i];
    // update percents
    const percentTD = document.getElementById("percent" + (i + diceCount));
    if (iterations === 0) {
      percentTD.innerHTML = "0%";
    } else {
      percentTD.innerHTML =
        Math.round((counts[i] / iterations) * 1000) / 10 + "%";
    }
  }
  // update chart
  myChart.update();
}

function reset() {
  simController.stop(); // stops any running process
  counts.fill(0);
  iterations = 0;
  lastResult.fill("?");
  updateAll();
}

function iterate() {
  randomRoll();
  updateAll();
}

var simController = {
  handle: 0, // ID for the setTimeout call
  counter: 0, // used by count function
  start: function() {
    this.stop(); // stops any other process
    this.handle = setInterval(() => iterate(), 0);
  },
  count: function(iterations) {
    this.stop(); // stops any other process
    this.handle = setInterval(() => {
      iterate();
      this.counter += 1;
      if (this.counter >= iterations) {
        this.stop();
        this.counter = 0;
      }
    }, 250);
  },
  stop: function() {
    if (this.handle) {
      clearInterval(this.handle);
      this.handle = 0;
    }
  }
};
