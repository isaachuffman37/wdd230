document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector("#email");
    const validateEmailButton = document.querySelector("#validateEmail");
    const message = document.querySelector("#emailMessage");
 
    validateEmailButton.addEventListener("click", function () {
      const emailValue = emailInput.value;
      const emailPattern = /^[a-zA-Z0-9_.-]+@byui.edu$/; // Adjust pattern if needed
 
      if (emailPattern.test(emailValue)) {
        message.textContent = "Email is valid!";
      } else {
        message.textContent = "Email is not valid.";
      }
    });
  });