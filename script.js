// script.js

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    const editProfileForm = document.querySelector('.edit-profile-form');
    const profileDetails = document.querySelector('.profile-details');
    const saveBtn = document.querySelector('.save-btn');
    const cancelBtn = document.querySelector('.cancel-btn');

    editProfileBtn.addEventListener('click', () => {
        profileDetails.classList.add('hidden');
        editProfileForm.classList.remove('hidden');
    });

    cancelBtn.addEventListener('click', () => {
        profileDetails.classList.remove('hidden');
        editProfileForm.classList.add('hidden');
    });

    // Handle the form submission (just an example, no backend integration)
    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Profile updated successfully!');
        profileDetails.classList.remove('hidden');
        editProfileForm.classList.add('hidden');
    });
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = new FormData(signupForm);

        try {
            const response = await fetch('/register', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Account created successfully!');
                window.location.href = '/login';  // Redirect to login page
            } else {
                alert('There was an error creating your account. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error creating your account. Please try again.');
        }
    });
});
