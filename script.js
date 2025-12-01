function sum(a, b){
  return a + b;
}

function subtraction(a, b){
  return a - b;
}

function multiplication(a, b){
  return a * b;
}

function division(a, b){
  if (b === 0) return "Error: Division by zero";
  return a / b;
}

function operate(operator, a, b){
  switch(operator){
    case "+": return sum(a, b);
    case "-": return subtraction(a, b);
    case "*": return multiplication(a, b);
    case "/": return division(a, b);
    default: return null;
  }
}

const inputValue = document.getElementById("user-input");

const numbers = document.querySelectorAll(".numbers");

// --- Number buttons ---
numbers.forEach(item => {
  item.addEventListener("click", e => {

    if (inputValue.innerText === "0" || inputValue.innerText === "NaN" || shouldReset) {
      inputValue.innerText = "";
      shouldReset = false;
    }

    inputValue.innerText += e.target.dataset.value || e.target.innerText.trim();
  });
});

let firstNum = "";
let secondNum = "";
let currentOperator = "";
let shouldReset = false;

// --- Operator buttons ---
const operators = document.querySelectorAll(".key-operations");

operators.forEach(btn => {
  btn.addEventListener("click", e => {
    let operator = e.target.dataset.value || e.target.innerText;

    if (operator === "=") {
      calculateResult();
      return;
    }

    // Convert ÷ to /
    operator = operator === "÷" ? "/" : operator;

    if (currentOperator && !shouldReset) {
      calculateResult();
    }

    firstNum = Number(inputValue.innerText);
    currentOperator = operator;
    shouldReset = true;
  });
});

// --- Calculate ---
function calculateResult() {
  if (currentOperator === "") return;

  secondNum = Number(inputValue.innerText);

  const result = operate(currentOperator, firstNum, secondNum);

  inputValue.innerText = result;

  firstNum = result;
  currentOperator = "";
  shouldReset = true;
}

// --- AC button ---
const clearBtn = document.querySelector("[data-value='AC']");
clearBtn.addEventListener("click", () => {
  inputValue.innerText = "0";
  firstNum = "";
  secondNum = "";
  currentOperator = "";
  shouldReset = false;
});

// --- Delete button ---
const deleteBtn = document.querySelector("[data-value='DE']");
deleteBtn.addEventListener("click", () => {
  if (inputValue.innerText.length <= 1) {
    inputValue.innerText = "0";
    return;
  }
  inputValue.innerText = inputValue.innerText.slice(0, -1);
});
