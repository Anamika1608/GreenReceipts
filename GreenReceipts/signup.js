const signupForm = document.getElementById('signup-form');
const alertContainer = document.getElementById('alert-container');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Simple validation (replace with a more robust validation library)
  if (name === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all required fields.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Prepare data for AJAX request
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('confirm-password', confirmPassword);

  // Send AJAX request to submit-signup.php
  fetch('submit-signup.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    if (data === 'success') {
      // Create and display the success alert
      const alertHtml = `<div class="alert alert-success" role="alert">
                          Thank you for signing up! You can now log in to your account.
                        </div>`;
      alertContainer.innerHTML = alertHtml;
    } else {
      alert('Error creating account: ' + data);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  });
});
