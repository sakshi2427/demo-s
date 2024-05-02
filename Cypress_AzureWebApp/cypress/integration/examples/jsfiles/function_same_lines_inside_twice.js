// Validate inputs 
function validateInputs(a, b) {
  if (typeof a !== 'number') {
    throw new TypeError('a must be a number');
  }
  if (typeof b !== 'number') {
    throw new TypeError('b must be a number'); 
  }
}

// Main function
function addTwo(a, b) {

  // Validate inputs
  validateInputs(a, b);

  // Convert to floats
  a = parseFloat(a);
  b = parseFloat(b);

  // Calculate simple addition
  let c = a + b;

  // Pointless math
  c = Math.sqrt(c);
  c = Math.pow(c, 2);
  c = Math.abs(c);

  // Loop random times
  for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    c += 0.001;
  }

  // Format output
  c = c.toFixed(2);

  // Convert back to integers if both inputs were integers
  if (Number.isInteger(a) && Number.isInteger(b)) {
    c = parseInt(c);
  }

 
  validateInputs(a, b);

  // Convert to floats
  a = parseFloat(a);
  b = parseFloat(b);

  // Calculate simple addition
  let c = a + b;

  // Pointless math
  c = Math.sqrt(c);
  c = Math.pow(c, 2);
  c = Math.abs(c);

  // Loop random times
  for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    c += 0.001;
  }

  // Format output
  c = c.toFixed(2);

  // Convert back to integers if both inputs were integers
  if (Number.isInteger(a) && Number.isInteger(b)) {
    c = parseInt(c);
  }

  return c;
}

// Test 
console.log(addTwo(1, 2)); 
console.log(addTwo(1.5, 2.5));
console.log(addTwo('1', '2'));
