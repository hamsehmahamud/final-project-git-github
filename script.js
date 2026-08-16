// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // Handle contact form submission gracefully
    const contactForm = document.getElementById('mainContactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission for this static version

            // Collect data
            const nameInput = document.getElementById('name').value;

            // Provide a professional user feedback message
            alert(`Thank you for reaching out, ${nameInput}! Your inquiry has been received by the Mekov Tech Solution team. We will be in touch shortly.`);

            // Reset the form
            contactForm.reset();
        });
    }
});