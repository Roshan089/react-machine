function validateForm(event) {
    event.preventDefault(); 

    const phoneInput = document.getElementById('phone');
    const phonePattern = /^\d{10}$/; 

    if (!phonePattern.test(phoneInput.value)) {
        alert('Please enter a valid 10-digit phone number.');
        return false; 
    }

    
    const formData = {
        first_name: document.getElementById('first-name').value,
        last_name: document.getElementById('last-name').value,
        phone_number: phoneInput.value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

    // Log the form data to the console
    console.log(formData);

   
}
