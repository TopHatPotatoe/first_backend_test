// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFr2iDLzlv-7QqYf4GtkWIxU73460qOgo",
    authDomain: "mindful-genius-418817.firebaseapp.com",
    projectId: "mindful-genius-418817",
    storageBucket: "mindful-genius-418817.appspot.com",
    messagingSenderId: "897402721976",
    appId: "1:897402721976:web:3dd0f8a8e2a90885d6064d",
    measurementId: "G-Y0SLRM7QWH"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
  const counterElement = document.getElementById('counter');
  const incrementButton = document.getElementById('incrementButton');
  
  // Get counter value from Firebase and update the UI
  const counterRef = db.ref('counter');
  counterRef.on('value', (snapshot) => {
    const count = snapshot.val();
    counterElement.innerText = count;
  });
  
  // Increment counter value in Firebase
  incrementButton.addEventListener('click', () => {
    fetch('http://localhost:5000/api/counter/increment', { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        counterElement.innerText = data.count;
      });
  });
  