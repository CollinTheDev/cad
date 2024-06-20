// Simulated user data stored in a JSON file (replace with backend database)
let users = [];

// Function to fetch users from JSON file (replace with backend integration)
fetch('users.json')
    .then(response => response.json())
    .then(data => {
        users = data;
    })
    .catch(error => console.error('Error fetching users:', error));

// Function to handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get username and password from form
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Check if username and password match any user in the data
    let loggedInUser = users.find(user => user.username === username && user.password === password);

    if (loggedInUser) {
        showDashboard(username);
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Function to show CAD dashboard
function showDashboard(username) {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('cad-section').style.display = 'block';
    document.getElementById('username-display').textContent = username;
}

// Function to handle logout button click
function logout() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('cad-section').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// Function to handle signup form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get new username and password from form
    let newUsername = document.getElementById('new-username').value;
    let newPassword = document.getElementById('new-password').value;

    // Check if username already exists
    let existingUser = users.find(user => user.username === newUsername);

    if (existingUser) {
        alert('Username already exists. Please choose another.');
    } else {
        // Add new user to the array (simulate signup)
        users.push({ username: newUsername, password: newPassword });

        // Update users.json file (replace with backend integration)
        fetch('users.json', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        .then(() => {
            alert('Sign up successful! You can now login with your new account.');
            // Automatically login the new user after signup
            showDashboard(newUsername);
        })
        .catch(error => console.error('Error updating users:', error));
    }

    // Reset signup form fields
    document.getElementById('new-username').value = '';
    document.getElementById('new-password').value = '';
});

// Toggle between login and signup sections
document.getElementById('signup-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'block';
});

document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('signup-section').style.display = 'none';
});
