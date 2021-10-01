  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        // Send email to Premanshu Patel
        emailjs.sendForm('service_rr2dsgn', 'template_014ciz5', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
        // Clear text from text fields
        this.forEach(input => {
            input.value = ''
        });
        // Alert user when message is sent
        alert("Message was sent!")
        
    });
}
