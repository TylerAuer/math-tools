// TODO: Add a geiger counter sound

const userHL = document.getElementById("user-input-hl");
userHL.oninput = function() {
  const hlDisplay = document.getElementById("hl-length");

  function formatHlVal() {
    const rawTimeInSec = userHL.value;
    if (rawTimeInSec < 60) {
      return rawTimeInSec + " sec.";
    } else {
      const mins = Math.floor(rawTimeInSec / 60);
      let secs = Math.round(rawTimeInSec % 60).toString();
      if (secs.length === 1) {
        secs = "0" + secs;
      }
      return mins + ":" + secs;
    }
  }

  hlDisplay.innerText = formatHlVal();
  sim.config.halfLifeInMs = userHL.value * 1000;
  sim.config.decayEventProbability = Math.pow(
    0.5,
    1 / (sim.config.halfLifeInMs / sim.config.msBetweenDecayEvents) // nth root where n the number of decay events / half life
  );
};

const sim = {
  config: {
    // these do NOT change when the simulation runs
    startingAtomCount: 5000,
    halfLifeInMs: 5000,
    msBetweenDecayEvents: 250,
    // these update as the simulation runs
    decayEventCount: 0,
    halfLifeCount: 0,
    timeElapsed: 0
  },

  simHandle: 0, // ID for the setTimeout call
  timerHandle: 0, // ID for the setInterval call
  start: function() {
    this.stop();
    this.simHandle = setInterval(
      () => decayEvent(),
      this.config.msBetweenDecayEvents
    );
    this.timerHandle = setInterval(() => {
      this.config.timeElapsed = (this.config.timeElapsed * 10 + 1) / 10;
      const timer = document.getElementById("secElapsed");
      timer.innerText = this.config.timeElapsed.toFixed(1);
    }, 100);
  },

  stop: function() {
    if (this.simHandle) {
      clearInterval(this.simHandle);
      this.simHandle = 0;
    }
    if (this.timerHandle) {
      clearInterval(this.timerHandle);
      this.timerHandle = 0;
    }
  },

  reset: function() {
    this.stop();
    const atomDiv = document.getElementById("atom-holder");
    atomDiv.innerHTML = "";
    for (let i = 0; i < sim.config.startingAtomCount; i++) {
      const atomElem = document.createElement("div");
      atomElem.classList = "atom atom-alive";
      atomDiv.appendChild(atomElem);
    }
    this.config.halfLifeCount = 0;
    this.config.timeElapsed = 0;
    this.config.atomsLeft = this.config.startingAtomCount;
    this.updateHeadings();
    const timer = document.getElementById("secElapsed");
    timer.innerText = this.config.timeElapsed.toFixed(1);
  },

  updateHeadings: function() {
    const hlCounter = document.getElementById("hlCounter");
    const atomsLeft = document.getElementById("atomsCounter");
    hlCounter.innerHTML = this.config.halfLifeCount;
    atomsLeft.innerHTML = this.config.atomsLeft;
  }
};

sim.config.decayEventProbability = Math.pow(
  0.5,
  1 / (sim.config.halfLifeInMs / sim.config.msBetweenDecayEvents) // nth root where n the number of decay events / half life
);
sim.config.atomsLeft = sim.config.startingAtomCount;
sim.reset();

const dotsOnPageText = document.getElementById("dots-on-page");
dotsOnPageText.innerHTML = sim.config.startingAtomCount;

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
startBtn.addEventListener("click", () => sim.start());
stopBtn.addEventListener("click", () => sim.stop());
resetBtn.addEventListener("click", () => sim.reset());

function decayEvent() {
  console.log(sim.config.halfLifeInMs);

  // Only works when half-life is a multiple msBetweenDecayEvent
  sim.config.decayEventCount += 1;
  if (
    sim.config.decayEventCount %
      (sim.config.halfLifeInMs / sim.config.msBetweenDecayEvents) ===
    0
  ) {
    sim.config.halfLifeCount += 1;
  }

  aliveAtoms = document.querySelectorAll(".atom-alive");
  if (aliveAtoms.length === 0) {
    sim.stop();
  }
  aliveAtoms.forEach(elem => {
    if (Math.random() > sim.config.decayEventProbability) {
      elem.classList = "atom atom-dead";
      elem.style = "background-color: white;";
      sim.config.atomsLeft -= 1;
    }
  });
  sim.updateHeadings();
}
