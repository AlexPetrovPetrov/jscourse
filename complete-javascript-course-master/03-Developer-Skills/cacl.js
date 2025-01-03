const display = document.getElementById('display');

function appendToDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = '';
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
function squareRoot(input) {
  if (display.value < 0) {
    display.value = 'error';
  } else {
    display.value = Math.sqrt(+display.value);
  }
}
