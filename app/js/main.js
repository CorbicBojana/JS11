const form = document.getElementById("form");
const email = document.getElementById("form_input");
const error = document.getElementById("form_error");

// Show error message
function showError(message) {
    email.style.borderColor = "hsl(0, 94%, 66%)";
    error.innerHTML = message;
  }
  
// Hide error message
function showSucces(message) {
    email.style.borderColor = "transparent";
    error.innerHTML = message;
  }

// Check required fields
function checkRequired(input) {
    if (input.value.trim() === "") {
        showError("Cannot be empty");
      } else {
        showSucces("");
      }
  }

// Check email format
function checkEmail(input) {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (reg.test(input.value.trim())) {
      showSucces(input, "");
    } else {
      showError("Whoops, make sure it's an email");
    }
  }
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    checkRequired(email); 
    checkEmail(email);
  });