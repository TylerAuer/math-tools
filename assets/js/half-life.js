// TODO: Add a geiger counter sound

/**
 * Receives changes from the range input and updates sim.config and HTML
 */
const userHL = document.getElementById("user-input-hl");
userHL.oninput = function() {
  const hlDisplay = document.getElementById("hl-length");

  hlDisplay.innerText = formatTimeVal(userHL.value);
  sim.config.halfLifeInMs = userHL.value * 1000;
  sim.config.decayEventProbability = Math.pow(
    0.5,
    1 / (sim.config.halfLifeInMs / sim.config.msBetweenDecayEvents) // nth root where n the number of decay events / half life
  );
};

/**
 * for times > 1 minute, returns time in "MM{colon}SS" form
 * @param {float} rawTime - value pulled from range input
 */
function formatTimeVal(rawTime) {
  if (rawTime < 60) {
    return rawTime + " sec.";
  } else {
    const mins = Math.floor(rawTime / 60);
    let secs = Math.round(rawTime % 60).toString();
    if (secs.length === 1) {
      secs = "0" + secs;
    }
    return mins + ":" + secs;
  }
}

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

  /**
   * Starts or restarts the running of the simulation
   */
  start: function() {
    this.stop();
    this.simHandle = setInterval(
      () => decayEvent(),
      this.config.msBetweenDecayEvents
    );
    this.timerHandle = setInterval(() => {
      this.config.timeElapsed = (this.config.timeElapsed * 10 + 1) / 10;
      const timer = document.getElementById("secElapsed");
      timer.innerText = formatTimeVal(this.config.timeElapsed.toFixed(1));
    }, 100);
  },

  /**
   * Stops the running of the simulation
   */
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

  /**
   * Resets the simulation back to start without changing user's half-life setting
   */
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

  /**
   * Updates the HTML info as the simulation runs
   */
  updateHeadings: function() {
    const hlCounter = document.getElementById("hlCounter");
    const atomsLeft = document.getElementById("atomsCounter");
    hlCounter.innerHTML = this.config.halfLifeCount;
    atomsLeft.innerHTML = this.config.atomsLeft;
  }
};

/**
 * Running a 1/2 probability event every time the half-life time has elapsed is visually lame
 * and not an accurate simulation. Instead, the simulation runs a probability event every 250ms.
 *
 * To accurately calculate the probability of these events, you must take the nth-root of 0.5, where
 * n = half-life / 250 ms
 */
sim.config.decayEventProbability = Math.pow(
  0.5,
  1 / (sim.config.halfLifeInMs / sim.config.msBetweenDecayEvents)
);
sim.config.atomsLeft = sim.config.startingAtomCount;

/**
 * Resets the application as the page loads. This allows the user to theoretically change other aspects of sim.config
 * Though, that possibility has not been implemented and there are no plans to at this time.
 */
sim.reset();

/**
 * Adds the dots to their container
 */
const dotsOnPageText = document.getElementById("dots-on-page");
dotsOnPageText.innerHTML = sim.config.startingAtomCount;

/**
 * Assigns functions to start, stop, and reset btn
 */
// QUESTION: This didn't work when I just listed the function (ex: "sim.start") because nothing happened
// QUESTION: This didn't work when I called the function (ex: "sim.start()") because the call happened immediately
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
startBtn.addEventListener("click", () => sim.start());
stopBtn.addEventListener("click", () => sim.stop());
resetBtn.addEventListener("click", () => sim.reset());

/**
 * Called every 250ms
 * Iterates over any "alive" atoms and runs probability event to see if they survive
 */
// BUG: Only works when half-life is a multiple msBetweenDecayEvent
function decayEvent() {
  sim.config.decayEventCount += 1;

  // counts halfLife event
  if (
    sim.config.decayEventCount %
      (sim.config.halfLifeInMs / sim.config.msBetweenDecayEvents) ===
    0
  ) {
    sim.config.halfLifeCount += 1;
  }

  // stops simulation if all atoms are dead
  aliveAtoms = document.querySelectorAll(".atom-alive");
  if (aliveAtoms.length === 0) {
    sim.stop();
  }

  // runs probability event for each alive atom
  aliveAtoms.forEach(elem => {
    if (Math.random() > sim.config.decayEventProbability) {
      elem.classList = "atom atom-dead";
      elem.style = "background-color: white;";
      sim.config.atomsLeft -= 1;
    }
  });

  // updating headings after every atom is too demanding for browser
  // so just call at end, still every 250ms
  sim.updateHeadings();
}
