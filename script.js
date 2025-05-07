// script.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.elements['name'].value;
    const notification = document.getElementById('contactNotification');
    notification.style.display = 'block';
    notification.style.background = '#e9c46a'; // saffron shade
    notification.style.color = '#264653'; // deep blue
    notification.style.padding = '1rem';
    notification.style.borderRadius = '8px';
    notification.style.fontWeight = '600';
    notification.textContent = `Thank you, ${name}. Your inquiry has been registered!`;
    this.reset();
  });
  
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent normal form submission
  
    // Collect form data
    const formData = new FormData(this);
  
    // Convert form data to URL query string using URLSearchParams
    const queryString = new URLSearchParams(formData).toString();
  
    // Redirect to inquiry.html with form data appended as query parameters
    window.location.href = `inquiry.html?${queryString}`;
  });
  