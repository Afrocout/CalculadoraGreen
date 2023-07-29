const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperantTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

class Calculator {
  constructor(previousOperantTextElement, currentOperandTextElement) {
    this.previousOperantTextElement = previousOperantTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.currentOperand = "";
    this.previousOperant = "";
    this.operation = "";
  }

  appendNumber(number) {
    this.currentOperand = `${this.currentOperand ?? ''}${number.toString()}`
  }

  clear() {
    this.currentOperand = "";
    this.previousOperant = "";
    this.operation = "";
  }

  updateDisplay() {
    this.previousOperantTextElement.innerText = this.previousOperant;
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const calculator = new Calculator(
  previousOperantTextElement,
  currentOperandTextElement
);

for (const numberButton of numberButtons) {
  numberButton.addEventListener('click', () => {
    calculator.appendNumber(numberButton.innerText);
    calculator.updateDisplay();
  })
}

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
