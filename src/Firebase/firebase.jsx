import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBpOjrfp7yPFExy5s7t5B8AIbEpRVl4mfs",
    authDomain: "linkedin-clone-ab01.firebaseapp.com",
    projectId: "linkedin-clone-ab01",
    storageBucket: "linkedin-clone-ab01.appspot.com",
    messagingSenderId: "291925932252",
    appId: "1:291925932252:web:468e16a49597ce839cdc19"
  };

// This special line of code here connects everything
  const firebaseApp = firebase.initializeApp(firebaseConfig);

// gets the firestore database
const db = firebaseApp.firestore();

export { db }