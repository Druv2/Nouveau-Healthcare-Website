const params = new URLSearchParams(window.location.search);

const name = params.get('name') || 'N/A';
const email = params.get('email') || 'N/A';
const details = params.get('details') || params.get('message') || 'N/A'; // support both keys

document.getElementById('inquiry-details').innerHTML = `
  <p><strong>Name:</strong> ${decodeURIComponent(name)}</p>
  <p><strong>Email:</strong> ${decodeURIComponent(email)}</p>
  <p><strong>Dental Problem:</strong> ${decodeURIComponent(details)}</p>
  <p style="margin-top:1.5rem; color:#2a9d8f; font-weight:600;">
    Thank you for your inquiry! We have received your details and will contact you soon.
  </p>
`;
