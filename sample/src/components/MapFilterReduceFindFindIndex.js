// Map - Create a new array by doing something with each item in an array.
// Filter - Create a new array by keeping the items that return true.
// Reduce - Accumulate a value by doing something to each item in an array.
// Find - Find the first item that matches from an array.
// FindIndex - Find the index of the first item that matches.

var numbers = [3, 56, 2, 48, 5];
// Map - Create a new array by doing something with each item in an array.
function double(x) {
  return x * 2;
}

const newNumbers = numbers.map(double);
const logValues = console.log(newNumbers);
// Filter - Create a new array by keeping the items that return true.
// Reduce - Accumulate a value by doing something to each item in an array.
// Find - Find the first item that matches from an array.
// FindIndex - Find the index of the first item that matches.
export default logValues;