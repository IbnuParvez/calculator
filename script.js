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

//let operator = [sum, subtraction, multiplication, division];

function operate(operator, a, b){
  switch(operator){
    case "sum":
      return sum(a, b);
    case "subtraction":
      return subtraction(a, b);
    case "multiplication":
      return multiplication(a, b);
    case "division":
      return division(a, b)
  }
}