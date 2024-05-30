const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple validation (replace with a more robust validation library)
  if (email === '' || password === '') {
    errorMessage.innerText = 'Please fill in all required fields.';
    return;
  }

  // Prepare data for AJAX request
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  // Send AJAX request to login.php
  fetch('login.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    if (data === 'success') {
      // Login successful, redirect to homepage
      window.location.href = 'index.php';
    } else {
      errorMessage.innerText = data;  // Display error message from server
    }
  })
  .catch(error => {
    console.error('Error:', error);
    errorMessage.innerText = 'An error occurred. Please try again later.';
  });
});
