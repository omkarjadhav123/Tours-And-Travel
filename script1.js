document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('enquiryForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

    
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

    
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }


        alert('Form submitted successfully!');
    
    });


    function isValidEmail(email) {

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
