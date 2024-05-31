document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (more complex validation can be added as needed)
    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
        // Reset the form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
