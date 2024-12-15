// Generic function for required field validation
function validateRequiredField(input, errorId, errorMessage) {
    const errorElement = document.getElementById(errorId);

    if (input.value.trim() === "") {
        errorElement.textContent = errorMessage;
        errorElement.style.display = "inline";
    } else {
        errorElement.style.display = "none";
    }
}

// Email Validation
function validateEmail(input) {
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (input.value === "") {
        emailError.textContent = "Email address is required.";
        emailError.style.display = "inline";
    } else if (!emailRegex.test(input.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "inline";
    } else {
        emailError.style.display = "none";
    }
}

// Phone Validation
function validatePhone(input) {
    const phoneError = document.getElementById("phoneError");
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Fixed the regex pattern

    if (input.value === "") {
        phoneError.textContent = "Phone number is required.";
        phoneError.style.display = "inline";
        return false; // Prevent form submission
    } else if (!phoneRegex.test(input.value)) {
        phoneError.textContent = "Please enter a valid phone number.";
        phoneError.style.display = "inline";
        return false; // Prevent form submission
    } else {
        phoneError.style.display = "none";
        return true; // Allow form submission
    }
}

// Disable submit button until form is valid
function checkFormValidity() {
    const form = document.getElementById("leadForm");
    const submitButton = document.getElementById("submitButton");

    // Check if the form is valid
    if (form.checkValidity()) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
