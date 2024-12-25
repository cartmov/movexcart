
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDgnbfD2WyDTvPYDPKSoEEvQJOoT3e9MfA",
    authDomain: "movexcart.firebaseapp.com",
    projectId: "movexcart",
    storageBucket: "movexcart.firebasestorage.app",
    messagingSenderId: "37228554491",
    appId: "1:37228554491:web:e88841fb0cdf4eab6ee85e",
    measurementId: "G-Q0KLHQH2CP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



// Get the form and users list elements
const form = document.getElementById('user-form');
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

    

    // Add user to Firebase Realtime Database
    set(ref(db, 'users/' + name), {
      name,
      email,
      homeAddress,
      state,
      country,
      phoneNumber,
    })
      .then(() => {
        console.log('User added successfully!');
        loadUsers();
        form.reset();
      })
      .catch((error) => {
        console.error('Error adding user:', error);
        alert('Error adding user. Please try again later.');
      });
  });

  // Function to load existing users from Firebase Realtime Database
  function loadUsers() {
    const usersRef = ref(db, 'users');
    onValue(usersRef, (snapshot) => {
      const usersList = document.getElementById('users-list');
      usersList.innerHTML = '';
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        const listItem = document.createElement('li');
        listItem.textContent = `
          Name: ${childData.name}
          Email: ${childData.email}
          Home Address: ${childData.homeAddress}
          State: ${childData.state}
          Country: ${childData.country}
          Phone Number: ${childData.phoneNumber}
        `;
        usersList.appendChild(listItem);
      });
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


