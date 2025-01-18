// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYcEjJ88-tpRBvi8xXe6spnErD6EWp5Eg",
  authDomain: "voteapp-93c69.firebaseapp.com",
  projectId: "voteapp-93c69",
  storageBucket: "voteapp-93c69.firebasestorage.app",
  messagingSenderId: "198343829119",
  appId: "1:198343829119:web:6a0a7c0247d777f1a7c14a"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };