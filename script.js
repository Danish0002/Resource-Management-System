// login form

document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const loginForm = document.getElementById('loginForm');

    // Add event listener for form submission
    loginForm.addEventListener('submit', function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Get input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Perform form validation
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
            return;
        }

        // If validation passes, redirect to index.html
        window.location.href = 'index.html';
    });
});


// Sign up  form

function validateSignUp(){
    const signupForm = document.getElementById('signupForm');

    // Add event listener for form submission
    signupForm.addEventListener('submit', function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Get input values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Perform form validation
        if (username.trim() === '' || email.trim() === '' || phone.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Password and Confirm Password do not match.');
            return;
        }

        // If validation passes, redirect to login.html
        window.location.href = 'login.html';
    });
}


//jquery
$(document).ready(function(){
    $('#signupForm').submit(function(event){
        event.preventDefault(); // Prevent default form submission
        var username = $('#username').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirm-password').val();
        
        // Simple validation - check if any field is empty
        if(username == '' || email == '' || phone == '' || password == '' || confirmPassword == ''){
            alert('Please fill in all fields');
            return false; // Prevent form submission
        }
        
        // More complex validation can be added here, such as checking email format, password strength, etc.
        
        // Redirect to login.html if validation passes
        window.location.href = 'login.html';
    });
});
