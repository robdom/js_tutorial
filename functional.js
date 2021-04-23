let nStates = ["Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota"];

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(array){
  let total = 0;
  array.forEach(function(element) {
    total += element;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements){
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

lengths: Imperative solution

function imperativeLengths(elements){
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
    // console.log(lengths);
  });
  return lengths;
}
console.log(imperativeLengths(nStates));

lengths: Functional solution

function functionalLengths(elements){
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(nStates));

// // Returns a URL-friendly verison of a string
// // Example: "North Dakota" -> "north-dakota"
// function urlify(string) {
//   return string.toLowerCase().split(/\s+/).join("-")
// }

// // urls: Imperative version
// function imperativeUrls(elements) {
//   let urls = [];
//   elements.forEach(function(element) {
//     urls.push(urlify(element));
//   });
//   return urls;
// }
// console.log(imperativeUrls(nStates));

// // urls: Functional version
// function functionalUrls(elements) {
//   return elements.map(element => urlify(element));
// }
// console.log(functionalUrls(nStates));

// /// Using map, write a function that takes in the states variable and returns an array of URLs of the form https://example.com/<urlified form>.

// function toUrl(elements) {
//   return elements.map(element => `https://example.com/${urlify(element)}`);
// }

// console.log(toUrl(nStates));

// Filter - Imperatcie

// function imperativeOneWordStates(elements) {
//   let oneWordStrings = [];
//   elements.forEach(function(element) {
//     if (element.split(/\s+/).length === 1) {
//       oneWordStrings.push(element)
//     }
//   })
//   return oneWordStrings;
// }
// console.log(imperativeOneWordStates(nStates));

// function functionalOneWordStates(elements) {
//   return elements.filter(element => element.split(/\s+/).length === 1);
// }
// console.log(functionalOneWordStates(nStates));

// function northStates(elements) {
//   return elements.filter(element => element.includes("North"));
// }
// console.log(northStates(nStates));

// function twoWordStates(elements) {
//   return elements.filter(element => element.split(/\s+/).length === 2);
// }
// console.log(twoWordStates(nStates));
