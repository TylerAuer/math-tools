// Wraps each letter of Title ("Mathematical Playgrounds")
// in <span class='title-text'>{LETTER}</span>
const titleElement = document.getElementById("header-title");
const titleText = titleElement.innerText.split("");
const titleSpans = titleText.map(
  letter => "<span class='title-letter'>" + letter + "</span>"
);
titleElement.innerHTML = titleSpans.join("");

const titleCharSpans = document.querySelectorAll(".title-letter");

/**
 * Selects a random color from the site's theme colors
 * Returns an rgb or rgba string
 */
function randColor() {
  const colorCycle = [
    "rgb(255, 230, 0)",
    "rgb(92, 221, 41)",
    "rgba(255, 0, 141, 1)",
    "rgba(20, 186, 204, 1)",
    "rgb(255, 116, 81)"
  ];
  const colorIndex = () => Math.floor(Math.random() * 5);
  return colorCycle[colorIndex()];
}

/**
 * Called forEach <h#>, changes font color every 0 to 8 seconds
 * @param {element} element - An element from the DOM
 * @param {boolean} isFirstTime  - Set to true to avoid changing the colors on the first level of recursion
 */
function colorCycle(element, isFirstTime) {
  if (isFirstTime === false) {
    element.style.color = randColor();
  }
  const waitDuration = Math.ceil(Math.random() * 6000);
  setTimeout(colorCycle, waitDuration, element, false);
}

titleCharSpans.forEach(element => {
  colorCycle(element, true);
});
