
// Get the form and users list elements
const form = document.getElementById('user-form');
const usersList = document.getElementById('users-list');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const homeAddressInput = document.getElementById('home-address');
const stateInput = document.getElementById('state');
const countryInput = document.getElementById('country');
const phoneNumberInput = document.getElementById('phone-number');

// Load existing users from JSON file
loadUsers();

// Add event listener to form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const homeAddress = homeAddressInput.value.trim();
    const state = stateInput.value.trim();
    const country = countryInput.value.trim();
    const phoneNumber = phoneNumberInput.value.trim();

    // Input validation
    if (!validateName(name)) {
        alert('Please enter a valid name');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (!validateAddress(homeAddress)) {
        alert('Please enter a valid home address');
        return;
    }

    if (!validateState(state)) {
        alert('Please enter a valid state');
        return;
    }

    if (!validateCountry(country)) {
        alert('Please enter a valid country');
        return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
        alert('Please enter a valid phone number');
        return;
    }

    // Add user
    addUser(name, email, homeAddress, state, country, phoneNumber);
});

// Function to load existing users from JSON file
function loadUsers() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const users = data.users;
            usersList.innerHTML = '';
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `
                    Name: ${user.name}
                    Email: ${user.email}
                    Home Address: ${user.homeAddress}
                    State: ${user.state}
                    Country: ${user.country}
                    Phone Number: ${user.phoneNumber}
                `;
                usersList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error loading users:', error);
            alert('Error loading users. Please try again later.');
        });
}

// Function to add new user to JSON file
function addUser(name, email, homeAddress, state, country, phoneNumber) {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const users = data.users;
            users.push({
                name,
                email,
                homeAddress,
                state,
                country,
                phoneNumber
            });
            saveUsers(users);
        })
        .catch(error => {
            console.error('Error adding user:', error);
            alert('Error adding user. Please try again later.');
        });
}


// Function to save updated users list to JSON file
function saveUsers(users) {
const jsonData = { users };
const json = JSON.stringify(jsonData);

fetch('data.json', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: json
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(() => {
        loadUsers();
        form.reset();
    })
    .catch(error => {
        console.error('Error saving users:', error);
        alert('Error saving users. Please try again later.');
    });
}

// Function to validate name
function validateName(name) {
return name.length > 0 && /^[a-zA-Z ]+$/.test(name);
}

// Function to validate email
function validateEmail(email) {
return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);
}

// Function to validate address
function validateAddress(address) {
return address.length > 0 && /^[a-zA-Z0-9\s,.-]+$/.test(address);
}

// Function to validate state
function validateState(state) {
return state.length > 0 && /^[a-zA-Z\s]+$/.test(state);
}

// Function to validate country
function validateCountry(country) {
return country.length > 0 && /^[a-zA-Z\s]+$/.test(country);
}

// Function to validate phone number
function validatePhoneNumber(phoneNumber) {
return phoneNumber.length > 0 && /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
}
