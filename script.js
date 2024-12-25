
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

  // Your web app's Firebase configuration
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
  const db = getFirestore(app);

  // Get the form elements
  const form = document.getElementById('user-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const homeAddressInput = document.getElementById('home-address');
  const stateInput = document.getElementById('state');
  const countryInput = document.getElementById('country');
  const phoneNumberInput = document.getElementById('phone-number');

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

    
    
    // Add user to Firestore
    addDoc(collection(db, 'users'), {
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

  // Function to load existing users from Firestore
  function loadUsers() {
    const usersRef = collection(db, 'users');
    getDocs(usersRef)
      .then((querySnapshot) => {
        const usersList = document.getElementById('users-list');
        usersList.innerHTML = '';
        querySnapshot.forEach((doc) => {
          const user = doc.data();
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
      .catch((error) => {
        console.error('Error loading users:', error);
        alert('Error loading users. Please try again later.');
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


