document.addEventListener('click', function() {
  // Get the input element
  var input = document.getElementById("input");
  
  // Get all the number buttons
  var numberButtons = document.querySelectorAll(".block");
  
  // Get the operation buttons
  var plusButton = document.getElementById("plus");
  var minusButton = document.getElementById("minus");
  var multiplyButton = document.getElementById("multiply");
  var divideButton = document.getElementById("divide");
  
  // Get the decimal button
  var dotButton = document.getElementById("dot");
  
  // Get the equal button
  var equalButton = document.getElementById("ans");
  
  // Get the clear button
  var clearButton = document.getElementById("clr");
  
  // Add click event listeners to number buttons
  numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      input.value += button.textContent;
    });
  });
  
  // Add click event listeners to operation buttons
  plusButton.addEventListener("click", function() {
    input.value += "+";
  });
  
  minusButton.addEventListener("click", function() {
    input.value += "-";
  });
  
  multiplyButton.addEventListener("click", function() {
    input.value += "*";
  });
  
  divideButton.addEventListener("click", function() {
    input.value += "/";
  });
  
  // Add click event listener to decimal button
  dotButton.addEventListener("click", function() {
    input.value += ".";
  });
  
  // Add click event listener to equal button
  equalButton.addEventListener("click", function() {
    try {
      input.value = eval(input.value);
    } catch (error) {
      if (error instanceof SyntaxError) {
        input.value = "Invalid Input";
      }
    }
  });
  
  // Add click event listener to clear button
  clearButton.addEventListener("click", function() {
    input.value = "";
  });
});

