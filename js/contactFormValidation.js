// Generic function for required field validation
function validateRequiredField(input, errorId, errorMessage) {
    const errorElement = document.getElementById(errorId);

    if (input.value.trim() === '') {
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'inline';
    } else {
        return true; // Allow form submission
    }
}

// Email Validation
function validateEmail(input, errorId) {
    const emailError = document.getElementById(errorId);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (input.value === '') {
        emailError.textContent = 'Email address is required.';
        emailError.style.display = 'inline';
        return false;
    } else if (!emailRegex.test(input.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'inline';
        return false;
    } else {
        return true; // Allow form submission 
    }
}

// Phone Validation
function validatePhone(input, errorId) {
    const phoneError = document.getElementById(errorId);
    const phoneRegex = /^(\+?[0-9]\d{1,14})$/; // Fixed the regex pattern

    if (input.value === '') {
        phoneError.textContent = 'Phone number is required.';
        phoneError.style.display = 'inline';
        return false; // Prevent form submission
    } else if (!phoneRegex.test(input.value)) {
        phoneError.textContent = 'Please enter a valid phone number.';
        phoneError.style.display = 'inline';
        return false; // Prevent form submission
    } else {
        return true; // Allow form submission
    }
}

// Open modal function
const openModalBtns = document.querySelectorAll('.openModalBtn');
openModalBtns.forEach(button => {
  button.onclick = function() {
    const targetModal = document.getElementById(button.getAttribute('data-target'));
    targetModal.style.display = "block"; // Show the modal
    const form = targetModal.querySelector('form');
    form.reset(); // Reset the form when modal opens
  };
});

// Close modal function
const closeModalBtns = document.querySelectorAll('.closeModalBtn');
closeModalBtns.forEach(button => {
  button.onclick = function() {
    const modal = button.closest('.modal');
    modal.style.display = "none"; // Close the modal
    const form = modal.querySelector('form');
    form.reset(); // Reset the form when modal closes
  };
});

// Close modal if user clicks outside modal content
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
      const form = modal.querySelector('form');
      form.reset(); // Reset the form when modal closes
    }
  });
}