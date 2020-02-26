// TODO: Add counter for generations
// TODO: Stop process once all atoms are eliminated

const config = {
  startingAtomCount: 10000,
  //TODO: define getter setter for starting atom count to update description paragraph
  halfLifeInMs: 5000,
  msBetweenDecayEvents: 250
};
config.decayEventProbability = Math.pow(
  0.5,
  1 / (config.halfLifeInMs / config.msBetweenDecayEvents) // nth root where n the number of decay events / half life
);

const simController = {
  decayEventCount: 0,
  halfLifeCount: 0,
  timeElapsed: 0,
  atomsLeft: config.startingAtomCount,
  updateHeadings: function() {
    const hlCounter = document.getElementById("hlCounter");
    const secElapsed = document.getElementById("secElapsed");
    const atomsLeft = document.getElementById("atomsCounter");
    hlCounter.innerHTML = this.halfLifeCount;
    secElapsed.innerHTML = this.timeElapsed;
    atomsLeft.innerHTML = this.atomsLeft;
  }
};

const dotsOnPageText = document.getElementById("dots-on-page");
dotsOnPageText.innerHTML = config.startingAtomCount;

const atomDiv = document.getElementById("atom-holder");
// TODO: Need to set an upper bound for halfLifeMs
let atomsLeft = config.startingAtomCount;

for (let i = 0; i < config.startingAtomCount; i++) {
  const atomElem = document.createElement("div");
  atomElem.classList = "atom atom-alive";
  atomDiv.appendChild(atomElem);
}

setInterval(decayEvent, config.msBetweenDecayEvents);

function decayEvent() {
  simController.decayEventCount += 1;
  if (
    simController.decayEventCount %
      (config.halfLifeInMs / config.msBetweenDecayEvents) ===
    0
  ) {
    simController.halfLifeCount += 1;
  }

  document.querySelectorAll(".atom-alive").forEach(elem => {
    if (Math.random() > config.decayEventProbability) {
      elem.classList = "atom atom-dead";
      elem.style = "background-color: white;";
      simController.atomsLeft -= 1;
    }
  });
  simController.updateHeadings();
}
