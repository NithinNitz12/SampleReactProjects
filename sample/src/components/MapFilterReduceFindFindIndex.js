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

var newNumbers = numbers.map(double);
// OR
// var newNumbers = numbers.map(function(x){
//    return x*2;
//});

var logValues = console.log(newNumbers);

// Filter - Create a new array by keeping the items that return true.
newNumbers = numbers.filter((num) => num < 10);
logValues = console.log(newNumbers);

// Reduce - Accumulate a value by doing something to each item in an array.
newNumbers = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
});
logValues = console.log(newNumbers);

// Find - Find the first item that matches from an array.
newNumbers = numbers.find((num) => {
  return num > 10;
});
logValues = console.log(newNumbers);

// FindIndex - Find the index of the first item that matches.
newNumbers = numbers.findIndex((num) => {
  return num > 10;
});
logValues = console.log(newNumbers);

export default logValues;
