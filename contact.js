document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("burume.kamole@gmail.com"); 

    const form = document.getElementById('contact-form');
    const response = document.getElementById('form-response');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(form);
        const data = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            message: formData.get('message'),
        };

        // Send email
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
            .then((response) => {
                response.innerText = 'Your message has been sent successfully!';
                response.style.color = 'green';
                form.reset();
            }, (error) => {
                response.innerText = 'Failed to send the message. Please try again later.';
                response.style.color = 'red';
                console.error('Error:', error);
            });
    });
});
