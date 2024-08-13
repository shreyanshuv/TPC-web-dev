document.getElementById('editProfileBtn').addEventListener('click', function() {
    document.getElementById('editProfileForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
});

document.getElementById('cancelEditBtn').addEventListener('click', function() {
    document.getElementById('editProfileForm').style.display = 'none';
});

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('editUsername').value;
    const newEmail = document.getElementById('editEmail').value;

    if(newUsername) {
        document.getElementById('username').innerText = newUsername;
    }
    if(newEmail) {
        document.getElementById('email').innerText = newEmail;
    }

    document.getElementById('editProfileForm').style.display = 'none';
});

document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('editProfileForm').style.display = 'none';
});

document.getElementById('cancelRegisterBtn').addEventListener('click', function() {
    document.getElementById('registerForm').style.display = 'none';
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your registration form submission logic here
});

document.querySelector('input[name="regKTs"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        if (document.getElementById('ktYes').checked) {
            document.getElementById('ktCountContainer').style.display = 'block';
        } else {
            document.getElementById('ktCountContainer').style.display = 'none';
        }
    });
});
