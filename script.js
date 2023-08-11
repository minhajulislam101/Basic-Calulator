let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateOutput();
}

function appendOperator(operator) {
  if (currentOperator !== '') {
    calculate();
  }
  currentOperator = operator;
  previousInput = currentInput;
  currentInput = '';
  updateOutput();
}

function clearOutput() {
  currentInput = '';
  currentOperator = '';
  previousInput = '';
  updateOutput();
}

function calculate() {
  if (currentOperator === '+') {
    currentInput = String(parseFloat(previousInput) + parseFloat(currentInput));
  } else if (currentOperator === '-') {
    currentInput = String(parseFloat(previousInput) - parseFloat(currentInput));
  } else if (currentOperator === '*') {
    currentInput = String(parseFloat(previousInput) * parseFloat(currentInput));
  } else if (currentOperator === '/') {
    currentInput = String(parseFloat(previousInput) / parseFloat(currentInput));
  }
  currentOperator = '';
  previousInput = '';
  updateOutput();
}

function updateOutput() {
  document.getElementById('output').innerText = currentInput || '0';
}
