// smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoview({
            behavior: 'smooth'
        });
    });
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    window.location.href='index.html';
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let errorMessage = document.getElementById('error-message');


    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Please fill out all fields.';
    } else if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Passwords do not match.';
    } else {
        errorMessage.style.display = 'none';
        alert('Account created successfully!');
        // Perform actual sign-up logic here
    }

    if (username === '' || password===''){
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display ='none';
        alert('Login Successfull')
    }
    
});

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Sample authentication logic - replace with actual validation
    if (username === 'admin' && password === 'password') {
        localStorage.setItem('isLoggedIn','true');
        window.location.href='index.html';
    } else{
        document.getElementById('error-message').style.display = 'block';
    }
});