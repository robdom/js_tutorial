// let a = ["ant", "bat", "cat", 42];
// a.forEach(function(element) {
//   console.log(element);
// });

// Array.from("honey badger")

// let soliloquy = "To be, or not to be, that is the question:";
// Array.from(soliloquy).forEach(function(character) {
//   console.log(character);
// })

// Rewrite the forEach loop in Listing 5.13 using the fat arrow notation from Section 5.1.2.

let a = ["ant", "bat", "cat", 42];
// a.forEach(function(element) {
//   console.log(element);
// });

a.forEach((element) => {
  console.log(element);
});

// We saw in Listing 5.1 how to define a number comparison function that let us sort JavaScript arrays numerically. There we used return values of 1, -1, and 0, but it turns out sort only cares about the sign of the comparison, so 17 is the same as 1, -42 is the same as -1, etc. For numbers a and b, the value a - b has the right sign, so show that the code in Listing 5.17, which uses an anonymous function, correctly sorts the array.



