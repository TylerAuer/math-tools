//How many iterations have happened
var iterations = 0;
var counts = [0,0,0,0,0,0,0];
var last = [0,0,0,0,0,0];

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
    counts = [0,0,0,0,0,0,0];
    last = [0,0,0,0,0,0];
    
    //Stops progress
    running = 0;
    
    //Updates HTML
    $("#percent1").text("0%");
    $("#percent2").text("0%");
    $("#percent3").text("0%");
    $("#percent4").text("0%");
    $("#percent5").text("0%");
    $("#percent6").text("0%");
    $("#percent7").text("0%");
    
    $("#count1").text(counts [0]);
    $("#count2").text(counts [1]);
    $("#count3").text(counts [2]);
    $("#count4").text(counts [3]);
    $("#count5").text(counts [4]);
    $("#count6").text(counts [5]);
    $("#count7").text(counts [6]);
    
    $("#iterCount").text("Iteration Count: " + iterations);
}

//Returns a 0 or 1
function randFlip() {
    if (Math.random() > 0.5) {
        return 0
    } else {
        return 1
    }
}

//Assigns last to an 6 number array ex: [0,0,1,1,0]
function randomSet() {
    last = [randFlip(), randFlip(), randFlip(), randFlip(), randFlip(), randFlip()];
    iterations += 1;
}

//Updates the big circles
function updateBigCircles () {
    //circle1
    if (last [0] == 1) {
        $("#circle1").removeClass("black");
    } else {
        $("#circle1").removeClass("black");
        $("#circle1").addClass("black");
    }
    //circle2
    if (last [1] == 1) {
        $("#circle2").removeClass("black");
    } else {
        $("#circle2").removeClass("black");
        $("#circle2").addClass("black");
    }
    //circle3
    if (last [2] == 1) {
        $("#circle3").removeClass("black");
    } else {
        $("#circle3").removeClass("black");
        $("#circle3").addClass("black");
    }
    //circle4
    if (last [3] == 1) {
        $("#circle4").removeClass("black");
    } else {
        $("#circle4").removeClass("black");
        $("#circle4").addClass("black");
    }
    //circle5
    if (last [4] == 1) {
        $("#circle5").removeClass("black");
    } else {
        $("#circle5").removeClass("black");
        $("#circle5").addClass("black");
    }
    //circle6
    if (last [5] == 1) {
        $("#circle6").removeClass("black");
    } else {
        $("#circle6").removeClass("black");
        $("#circle6").addClass("black");
    }
}

//Counts how many in var last are red (0)
function countReds() {
    var redCount = 0;
    for(var i = 0; i < last.length; ++i){
        if(last [i] == 0)
            redCount++;
    }
    return redCount;
}

//Updates the counts in the table
function updateTable() {
    
    if (countReds() == 0) {
        counts [0] += 1;
    } else if (countReds() == 1) {
        counts [1] += 1;
    } else if (countReds() == 2) {
        counts [2] += 1;
    } else if (countReds() == 3) {
        counts [3] += 1;
    } else if (countReds() == 4) {
        counts [4] += 1;
    } else if (countReds() == 5) {
        counts [5] += 1;
    } else {
        counts [6] += 1;
        }
    
    $("#count1").text(counts [0]);
    $("#count2").text(counts [1]);
    $("#count3").text(counts [2]);
    $("#count4").text(counts [3]);
    $("#count5").text(counts [4]);
    $("#count6").text(counts [5]);
    $("#count7").text(counts [6]);
    
    $("#iterCount").text("Iteration Count: " + iterations);
    
    $("#percent1").text(Math.round(counts [0] / iterations * 1000) / 10 + '%');
    $("#percent2").text(Math.round(counts [1] / iterations * 1000) / 10 + '%');
    $("#percent3").text(Math.round(counts [2] / iterations * 1000) / 10 + '%');
    $("#percent4").text(Math.round(counts [3] / iterations * 1000) / 10 + '%');
    $("#percent5").text(Math.round(counts [4] / iterations * 1000) / 10 + '%');
    $("#percent6").text(Math.round(counts [5] / iterations * 1000) / 10  + '%');
    $("#percent7").text(Math.round(counts [6] / iterations * 1000) / 10 + '%');

//This is the tough part    
//This is the tough part    
//This is the tough part    
//This is the tough part    
    myChart.data.datasets[0].data = counts;
    myChart.update();
}

function runUntilStop() {
    randomSet();
    updateBigCircles();
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
    $("#reset").before('<button id="runForever">Infinite Spills</button>');
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
        labels: ["6 Red", "5 Red", " 4 Red", "3 Red", "2 Red", "1 Red", "0 Red"],
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
            ],
            borderColor: [
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