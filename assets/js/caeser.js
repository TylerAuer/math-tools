// Generates an array of the alphabet
function genCharArray(charA, charZ) {
  var a = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}

// Assigns generated alphabet array to variable alphabet
var alphabet = genCharArray('a', 'z');

// Builds alphabet
function buildTable(array) {

}
