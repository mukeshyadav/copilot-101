// Calculator functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    console.log("Error: Division by zero is not allowed.");
    return null;
  }
  return a / b;
}

// Function to take user input and provide output
function calculate() {
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));
  let operation = prompt(
    "Enter the operation (add, subtract, multiply, divide):"
  );

  let result;
  switch (operation) {
    case "add":
      result = add(num1, num2);
      break;
    case "subtract":
      result = subtract(num1, num2);
      break;
    case "multiply":
      result = multiply(num1, num2);
      break;
    case "divide":
      result = divide(num1, num2);
      break;
    default:
      console.log("Error: Invalid operation.");
      return;
  }

  console.log(`The result is: ${result}`);
}

// Run the calculator
calculate();
