// TODO: Add counter for generations
// TODO: Get atomsLeft to work
// TODO: Stop process once all atoms are eliminated

const config = {
  startingAtomCount: 10000,
  halfLifeInMs: 5000,
  msBetweenDecayEvents: 100
};
config.decayEventProbability = Math.pow(
  0.5,
  1 / (config.halfLifeInMs / config.msBetweenDecayEvents)
);

const simController = {
  decayEventCount: 0,
  halfLifeCount: 0
};

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
      (config.halfLifeInMs / config.halfLifeInMs) ===
    0
  ) {
    simController.halfLifeCount += 1;
  }

  document.querySelectorAll(".atom-alive").forEach(elem => {
    if (Math.random() > config.decayEventProbability) {
      elem.classList = "atom atom-dead";
      elem.style = "background-color: white;";
      atomsLeft -= 1;
    }
  });
}
