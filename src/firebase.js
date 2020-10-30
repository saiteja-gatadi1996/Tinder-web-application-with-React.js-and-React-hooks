import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB1UJjTucU0gfP99xX2G4rcVITi2Gl2Kak",
    authDomain: "tinder-web-app-5e48a.firebaseapp.com",
    databaseURL: "https://tinder-web-app-5e48a.firebaseio.com",
    projectId: "tinder-web-app-5e48a",
    storageBucket: "tinder-web-app-5e48a.appspot.com",
    messagingSenderId: "132906485115",
    appId: "1:132906485115:web:9aac41a749c3a194b329de",
    measurementId: "G-H1NDGPML36"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();

  export default db;
  