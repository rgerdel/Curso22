let operation = "";

function appendToDisplay(value) {
  operation += value;
  document.getElementById("display").value = operation;
}

function clearDisplay() {
  operation = "";
  document.getElementById("display").value = operation;
}

function deleteLastElement() {
  operation = operation.slice(0, -1);
  document.getElementById("display").value = operation;
}

function calculateResult() {
  try {
    let regexOperation = /[+\-*/%.0-9()]/g;
    if (!regexOperation.test(operation)) {
      throw new Error("Invalid operation");
    }
    const result = eval(operation);
    if (result === Infinity || result === -Infinity) {
      operation = "";
      throw new Error("Division by zero");
    }
    document.getElementById("display").value = result;
  } catch (error) {
    alert("Error in calculation: " + error.message);
    clearDisplay();
  }
}

