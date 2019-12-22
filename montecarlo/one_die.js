//How many iterations have happened
var iterations = 0;
var counts = [0,0,0,0,0,0];
//Last var is [die1, sum]
var last = 0;

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
    counts = [0,0,0,0,0,0];
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
    last = getRandomInt(1,6);
    iterations += 1;
}

//Updates the big circles
function updateGraphic () {
    $("#die1").text(last);
}

//Updates the counts in the table
function updateTable() {
    
    if (last == 1) {
        counts [0] += 1;
    } else if (last == 2) {
        counts [1] += 1;
    } else if (last == 3) {
        counts [2] += 1;
    } else if (last == 4) {
        counts [3] += 1;
    } else if (last == 5) {
        counts [4] += 1;
    } else {
        counts [5] += 1;
        }
    
    $("#count1").text(counts [0]);
    $("#count2").text(counts [1]);
    $("#count3").text(counts [2]);
    $("#count4").text(counts [3]);
    $("#count5").text(counts [4]);
    $("#count6").text(counts [5]);
    
    $("#iterCount").text("Iteration Count: " + iterations);
    
    $("#percent1").text(Math.round(counts [0] / iterations * 1000) / 10 + '%');
    $("#percent2").text(Math.round(counts [1] / iterations * 1000) / 10 + '%');
    $("#percent3").text(Math.round(counts [2] / iterations * 1000) / 10 + '%');
    $("#percent4").text(Math.round(counts [3] / iterations * 1000) / 10 + '%');
    $("#percent5").text(Math.round(counts [4] / iterations * 1000) / 10 + '%');
    $("#percent6").text(Math.round(counts [5] / iterations * 1000) / 10  + '%');

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
        labels: ["1","2","3","4","5","6"],
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
            ],
            borderColor: [
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