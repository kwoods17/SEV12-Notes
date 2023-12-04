let firstNumber;
let secondNumber;
let operation;
let step = 0; // tracks the steps of the input 
let result = 0;
let numArray = [];
let secondNumArray = [];
// these all store the values of the different types of input
console.log("test")
let display = document.getElementById("display");

function getNumber(num) {
  if (step === 0 || step === 1) {
    // checks steps to see what number we're entering
    numArray.push(num);
    step = 1;
    firstNumber = Number(numArray.join("")); //combine the arrays into one string and converts to a number.
    display.value = firstNumber; //updates the display
  } else if (step === 2) {
    secondNumArray.push(num);
    secondNumber = Number(secondNumArray.join(""));
    display.value = secondNumber;
  }
}
function getOperator(op) {
  //store the operator sign that was clicked
  step = 2; //set the step to two- entering the second number
  operation = op;
}
function clearDisplay() {
  //resets all variables and arrays to their beginning state
  display.value = 0; // Zero out the display
  firstNumber = null;
  secondNumber = null;
  step = 0;
  operation = null;
  result = 0;
  numArray = [];
  secondNumArray = [];
}

function calculateEquals() {
  if (operation === "+") {
    // check the operation to find the math function to perform
    result = firstNumber + secondNumber; //performs the calculation with two numbers
    display.value = result; //save result to the display
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
    display.value = result;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
    display.value = result;
  } else if (operation === "/") {
    result = firstNumber / secondNumber;
    display.value = result;
  }
}
