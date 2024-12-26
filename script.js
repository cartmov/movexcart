// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  import { } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
	import { } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
import { } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgnbfD2WyDTvPYDPKSoEEvQJOoT3e9MfA",
  authDomain: "movexcart.firebaseapp.com",
  databaseURL: "https://movexcart-default-rtdb.firebaseio.com",
  projectId: "movexcart",
  storageBucket: "movexcart.firebasestorage.app",
  messagingSenderId: "37228554491",
  appId: "1:37228554491:web:e88841fb0cdf4eab6ee85e",
  measurementId: "G-Q0KLHQH2CP"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  var homeAddress = getElementVal("home-address");
  var state = getElementVal("state");
  var country = getElementVal("country");
  var phoneNumber = getElementVal("phone-number");

  // Input validation
  if (!validateName(name)) {
    alert('Please enter a valid name');
    return;
  }

  if (!validateEmail(emailid)) {
    alert('Please enter a valid email address');
    return;
  }

  saveMessages(name, emailid, msgContent, homeAddress, state, country, phoneNumber);

  // enable alert
  document.querySelector(".alert").style.display = "block";

  // remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent, homeAddress, state, country, phoneNumber) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
    homeAddress: homeAddress,
    state: state,
    country: country,
    phoneNumber: phoneNumber,
  })
  .catch((error) => {
    console.error('Error saving message:', error);
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// Function to validate name
function validateName(name) {
  return name.length > 0 && /^[a-zA-Z ]+$/.test(name);
}

// Function to validate email
function validateEmail(emailid) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailid);
}
