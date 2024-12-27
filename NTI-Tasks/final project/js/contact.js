document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let isValid = true;

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");

    // Name validation
    if (name.value.trim() === "") {
      showError(name, "Name is required.");
      isValid = false;
    } else {
      removeError(name);
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      showError(email, "Please enter a valid email address.");
      isValid = false;
    } else {
      removeError(email);
    }

    // Subject validation
    if (subject.value.trim() === "") {
      showError(subject, "Subject is required.");
      isValid = false;
    } else {
      removeError(subject);
    }

    // Message validation
    if (message.value.trim() === "") {
      showError(message, "Message cannot be empty.");
      isValid = false;
    } else {
      removeError(message);
    }

    // If all fields are valid, show the Toast
    if (isValid) {
      showToast(); 
    }
  });

  // Function to show error
  function showError(input, message) {
    const feedback = input.nextElementSibling; 
    input.classList.add("is-invalid");
    feedback.textContent = message;
    feedback.style.display = "block"; 
  }

  // Function to remove error
  function removeError(input) {
    const feedback = input.nextElementSibling;
    input.classList.remove("is-invalid");
    feedback.style.display = "none";
  }

  // Function to show Toast
  function showToast() {
    const toastElement = document.getElementById("successToast");
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }