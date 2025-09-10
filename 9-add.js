#!/usr/bin/node

// Define the function add(a, b)
function add(a, b) {
  return a + b;
}

// Get arguments from command line (skip first two: node and filename)
const firstArg = parseInt(process.argv[2]);
const secondArg = parseInt(process.argv[3]);

// Print the result using console.log
console.log(add(firstArg, secondArg));
