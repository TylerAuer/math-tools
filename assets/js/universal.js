// cycles the header through colors
const colorCycle = [
  "rgb(255, 230, 0)",
  "rgb(92, 221, 41)",
  "rgba(255, 0, 141, 1)",
  "rgba(20, 186, 204, 1)",
  "rgb(255, 116, 81)"
];

const title = document.getElementById("header-title");
let currentColor = 0;
function changeColor() {
  currentColor = (currentColor + 1) % colorCycle.length;
  title.style.color = colorCycle[currentColor];
}
setInterval(changeColor, 5000);
