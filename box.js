// Get references to the modal and buttons
const moreButton = document.getElementById('moreButton');
const termsModal = document.getElementById('termsModal');
const agreeButton = document.getElementById('agreeButton');

// Show the modal when "More" button is clicked
moreButton.addEventListener('click', () => {
  termsModal.style.display = 'flex';
});

// Redirect to another page when "Agree" button is clicked
agreeButton.addEventListener('click', () => {
  window.location.href = 'vote.html'; // Replace with your actual URL
});