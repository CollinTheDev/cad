// Function to handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get username and password from form
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Simulate login (replace with actual backend integration)
    if (username === 'admin' && password === 'password') {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('cad-section').style.display = 'block';
        document.getElementById('username-display').textContent = username;
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Function to handle logout button click
function logout() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('cad-section').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
