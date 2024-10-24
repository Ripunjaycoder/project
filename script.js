(function() {
    emailjs.init('KpR4oy4zp3hUHJX-U'); // Your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create the email template parameters
    const templateParams = {
        user_name: name,
        user_email: email,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send('service_cx3zo08', 'template_ox45sfq', templateParams)
        .then(function(response) {
           alert('Message sent successfully!', response.status, response.text);
        }, function(error) {
           alert('Failed to send message. Please try again.', error);
        });
});
