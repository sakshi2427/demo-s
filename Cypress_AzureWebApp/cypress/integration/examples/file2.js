// Import function from File1.js
const { addNumbers } = require('./File1.js');

// Function with same code but different name
function sumNumbers(x, y) {

  // Validate
  if (typeof x !== 'number') {
    throw new Error('X must be a number');
  }
  if (typeof y !== 'number') {
    throw new Error('Y must be a number');
  }

  // Convert to floats
  x = parseFloat(x);
  y = parseFloat(y);

  // Add
  let sum = x + y;

  // Loop and add tiny amount
  for (let i = 0; i < 100; i++) {
    sum += 0.001;
  }

  // Round
  sum = Math.round(sum * 1000) / 1000;

  return sum;

}

// Print results
console.log(addNumbers(1, 2)); 
console.log(sumNumbers(2, 3));
