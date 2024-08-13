document.addEventListener('DOMContentLoaded', () => {
    const editProfileBtn = document.getElementById('editProfileBtn');
    const editProfileForm = document.getElementById('editProfileForm');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const profileForm = document.getElementById('profileForm');
    const usernameSpan = document.getElementById('username');
    const emailSpan = document.getElementById('email');

    editProfileBtn.addEventListener('click', () => {
        // Show the edit form and populate it with current values
        editProfileForm.style.display = 'block';
        editProfileBtn.style.display = 'none';
        document.getElementById('editUsername').value = usernameSpan.textContent;
        document.getElementById('editEmail').value = emailSpan.textContent;
    });

    cancelEditBtn.addEventListener('click', () => {
        // Hide the edit form
        editProfileForm.style.display = 'none';
        editProfileBtn.style.display = 'inline-block';
    });

    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Get the new values
        const newUsername = document.getElementById('editUsername').value;
        const newEmail = document.getElementById('editEmail').value;
        
        // Update the profile display
        usernameSpan.textContent = newUsername;
        emailSpan.textContent = newEmail;
        
        // Hide the edit form
        editProfileForm.style.display = 'none';
        editProfileBtn.style.display = 'inline-block';
    });
});
