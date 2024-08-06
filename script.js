function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Basic validation
    if (name === '') {
      alert('Please enter your name');
      return false;
    }
    if (email === '') {
      alert('Please enter your email');
      return false;
    }
    if (message === '') {
      alert('Please enter your message');
      return false;
    }
  
    // Basic email validation (can be improved)
    if (!email.includes('@')) {
      alert('Invalid email format');
      return false;
    }
  
    // Additional validation as needed (e.g., message length, complex email regex)
  
    // Form submission and success message (replace with your logic)
    alert('Your enquiry has been submitted. We will meet you soon!');
    return true;
  }
  