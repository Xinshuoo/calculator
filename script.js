// DOM elements
const inputDisplayBox = document.querySelector(".input");
const historyDisplayBox = document.querySelector(".history");
const operators = document.querySelectorAll(".operator");
const digits = document.querySelectorAll(".digit");
const ac = document.querySelector("#ac");
const decimal = document.querySelector("#decimal");
const percent = document.querySelector("#percent");
const plusMinus = document.querySelector("#plus-minus");

// Add EventListeners
digits.forEach((button) => 
    button.addEventListener("click", () => addToInput(button.textContent))
);
operators.forEach((button) =>
    button.addEventListener("click", () => addOperator(button.textContent))
);
ac.addEventListener("click", () => clearAll());
decimal.addEventListener("click", () => addToInput(decimal.textContent));
percent.addEventListener("click", () => addToInput(percent.textContent));
plusMinus.addEventListener("click", () => addToInput(plusMinus.textContent));

// Clear everything
function clearAll() {
    historyExpression = previousOperator = "";
    inputNumber = previousNumber = result = null;
    inputDisplayBox.textContent = historyDisplayBox.textContent = "";
    operatorSelected = false;
}

// 
let inputNumber = null;
function addToInput(digit) {
    if (inputNumber === null) {
        inputNumber = "";
    }
    if (digit === "±") {
        if (inputNumber === "") { // "±" is the first button clicked on
            digit = "-";
        }    
        else {
            inputNumber = -inputNumber; // plus-minus symbol will toggle between +ve and -ve
            updateInputDisplayBox(inputNumber);
            return;
        }
    }
    if (digit === "%" && inputNumber !== "") {
        inputNumber = inputNumber / 100;
        updateInputDisplayBox(inputNumber);
        return;
    }
    if (inputNumber.toString().includes(".") && digit === ".") { // number already has a decimal place
        digit = "";
    }
    inputNumber += digit;

    // only convert to float if no decimal point (otherwise "3." becomes "3")
    // only convert to float if input is NOT just "-" (due to the plus-minus toggle)
    if (!digit === "." && !digit === "-") { 
        inputNumber = parseFloat(inputNumber);
    }
    updateInputDisplayBox(inputNumber);
}
function updateInputDisplayBox(num) {
    if (num < 1 && num.toString().length > 6) {
        num = parseFloat(num).toExponential(4);
    } 
    else if (num.toString().length > 6) {
        num = parseFloat(num).toPrecision(5);
    }
    inputDisplayBox.textContent = num;
}

let historyExpression = "";
function updateHistoryDisplayBox(num, symbol) {
    historyExpression += num; // move the number in input to history
    historyExpression += symbol; // also add the operator
    historyDisplayBox.textContent = historyExpression;
}

let currentOperatorArray = {
    "+": "add",
    "−": "subtract",
    "×": "multiply",
    "÷": "divide",
    "=": "equals",
}
let operatorSelected = false;
let previousNumber = null;
let previousOperator = "";
let result = "";
function addOperator(operator) {
    if (operatorSelected) { // user has already clicked on an operator before
        
         // show the result of the calculation with the previous operator (which is 
         // already displayed in history)
         result = operate(currentOperatorArray[previousOperator], parseFloat(previousNumber), parseFloat(inputNumber));
         updateInputDisplayBox(result);

         if (operator === "=") { // if "=" chosen, prepare to start a new calculation
            updateHistoryDisplayBox(inputNumber, operator);           
            historyExpression = ""; // make sure history is clear for the next calculation
            operatorSelected = false;
            previousNumber = inputNumber = result;
            previousOperator = "";
            return;
         }

    }
    
    // this is the first operator that user clicked on
    operatorSelected = true;
    previousOperator = operator;

    // update the history
    updateHistoryDisplayBox(inputNumber, operator);

    // prepare for next number to be inputted
    previousNumber = (previousNumber === null) ? inputNumber : result;
    inputNumber = null;
    
}

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
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            if (b === 0) {
                alert("Cannot divide by zero!");
                return "ERROR"
            }
            return divide(a, b);
        default:
            return "ERROR";
    }
}