//How many iterations have happened
var iterations = 0;
var counts = [0,0,0,0,0,0,0,0,0,0,0,0];
//Last var is [die1, die2, sum]
var last = [0,0,0];

$(document).ready(function(){
    reset();
    $("#run1").click(run1);
    
    $("#run10").click(run10);
    
    $("#run100").click(run100)
    
    $("#run1000").click(run1000)
    
    $("#reset").click(reset);
    
    runForever();
});

function reset() {
    //Resets variables to initial states
    iterations = 0;
    counts = [0,0,0,0,0,0,0,0,0,0,0,0];
    last = [0, 0, 0];
    
    //Stops progress
    running = 0;
    
    //Updates HTML
    $("#percent2").text("0%");
    $("#percent3").text("0%");
    $("#percent4").text("0%");
    $("#percent5").text("0%");
    $("#percent6").text("0%");
    $("#percent7").text("0%");
    $("#percent8").text("0%");
    $("#percent9").text("0%");
    $("#percent10").text("0%");
    $("#percent11").text("0%");
    $("#percent12").text("0%");
    
    
    $("#count2").text(0);
    $("#count3").text(0);
    $("#count4").text(0);
    $("#count5").text(0);
    $("#count6").text(0);
    $("#count7").text(0);
    $("#count8").text(0);
    $("#count9").text(0);
    $("#count10").text(0);
    $("#count11").text(0);
    $("#count12").text(0);
    
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
    last = [getRandomInt(1,6), getRandomInt(1,6), 0];
    last[2] = last[0] + last[1];
    iterations += 1;
}

//Updates the big circles
function updateGraphic () {
    $("#die1").text(last[0]);
    $("#die2").text(last[1]);
}

//Updates the counts in the table
function updateTable() {
    
    if (last[2] == 2) {
        counts [0] += 1;
    } else if (last[2] == 3) {
        counts [1] += 1;
    } else if (last[2] == 4) {
        counts [2] += 1;
    } else if (last[2] == 5) {
        counts [3] += 1;
    } else if (last[2] == 6) {
        counts [4] += 1;
    } else if (last[2] == 7) {
        counts [5] += 1;
    } else if (last[2] == 8) {
        counts [6] += 1;
    } else if (last[2] == 9) {
        counts [7] += 1;
    } else if (last[2] == 10) {
        counts [8] += 1;
    } else if (last[2] == 11) {
        counts [9] += 1;
    } else {
        counts [10] += 1;
        }
    
    $("#count2").text(counts [0]);
    $("#count3").text(counts [1]);
    $("#count4").text(counts [2]);
    $("#count5").text(counts [3]);
    $("#count6").text(counts [4]);
    $("#count7").text(counts [5]);
    $("#count8").text(counts [6]);
    $("#count9").text(counts [7]);
    $("#count10").text(counts [8]);
    $("#count11").text(counts [9]);
    $("#count12").text(counts [10]);
    
    $("#iterCount").text("Iteration Count: " + iterations);
    
    $("#percent2").text(Math.round(counts [0] / iterations * 1000) / 10 + '%');
    $("#percent3").text(Math.round(counts [1] / iterations * 1000) / 10 + '%');
    $("#percent4").text(Math.round(counts [2] / iterations * 1000) / 10 + '%');
    $("#percent5").text(Math.round(counts [3] / iterations * 1000) / 10 + '%');
    $("#percent6").text(Math.round(counts [4] / iterations * 1000) / 10 + '%');
    $("#percent7").text(Math.round(counts [5] / iterations * 1000) / 10  + '%');
    $("#percent8").text(Math.round(counts [6] / iterations * 1000) / 10 + '%');
    $("#percent9").text(Math.round(counts [7] / iterations * 1000) / 10 + '%');
    $("#percent10").text(Math.round(counts [8] / iterations * 1000) / 10 + '%');
    $("#percent11").text(Math.round(counts [9] / iterations * 1000) / 10 + '%');
    $("#percent12").text(Math.round(counts [10] / iterations * 1000) / 10 + '%');

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
    var interval = setInterval(function(){
        timesRun += 1;
        if(timesRun === 1){
            clearInterval(interval);
        }
        runUntilStop();
    }, 1); 
}

function run10() {
    var timesRun = 0;
    var interval = setInterval(function(){
        timesRun += 1;
        if(timesRun === 10){
            clearInterval(interval);
        }
        runUntilStop();
    }, 500); 
}

function run100() {
    var timesRun = 0;
    var interval = setInterval(function(){
        timesRun += 1;
        if(timesRun === 100){
            clearInterval(interval);
        }
        runUntilStop();
    }, 100); 
}

function run1000() {
    var timesRun = 0;
    var interval = setInterval(function(){
        timesRun += 1;
        if(timesRun === 1000){
            clearInterval(interval);
        }
        runUntilStop();
    }, 20); 
}

function swapToPause() {
    $("#runForever").remove();
    $("#reset").before('<button id="stop">Stop</button>');    
}

function swapToPlay() {
    $("#stop").remove();
    $("#reset").before('<button id="runForever">Infinite Rolls</button>');
}

function runForever() {
    $("#runForever").click(function(){
        swapToPause();
        runChecker = setInterval(runUntilStop);
        $("#stop").click(function(){
            clearInterval(runChecker);
            swapToPlay();
            runForever();
        });
    });
}

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2","3","4","5","6","7","8","9","10","11","12"],
        datasets: [{
//            label: '# of Votes',
            data: counts,
            backgroundColor: [
                '#9D2235',
                '#9D2235',
                '#9D2235',
                '#9D2235',
                '#9D2235',
                '#9D2235',
                '#9D2235',
                '#9D2235',
                '#9D2235',
                '#9D2235',
                '#9D2235',
            ],
            borderColor: [
                '#262626',
                '#262626',
                '#262626',
                '#262626',
                '#262626',
                '#262626',
                '#262626',
                '#262626',
                '#262626',
                '#262626',
                '#262626',
            ],
            borderWidth: 1
        }],
    },
    options: {
        legend: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});