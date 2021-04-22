let nStates = ["Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota"];

// Returns a URL-friendly verison of a string
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-")
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(nStates));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(nStates));

/// Using map, write a function that takes in the states variable and returns an array of URLs of the form https://example.com/<urlified form>.

function toUrl(elements) {
  return elements.map(element => `https://example.com/${urlify(element)}`);
}

console.log(toUrl(nStates));

Filter - Imperatcie

function imperativeOneWordStates(elements) {
  let oneWordStrings = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      oneWordStrings.push(element)
    }
  })
  return oneWordStrings;
}
console.log(imperativeOneWordStates(nStates));

function functionalOneWordStates(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalOneWordStates(nStates));

function northStates(elements) {
  return elements.filter(element => element.includes("North"));
}
console.log(northStates(nStates));

function twoWordStates(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(twoWordStates(nStates));
