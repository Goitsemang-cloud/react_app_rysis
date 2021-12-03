import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByquweEDEcjXrc5-Y5TG73_U0YiW8Z9nM",
  authDomain: "rysis-software.firebaseapp.com",
  projectId: "rysis-software",
  storageBucket: "rysis-software.appspot.com",
  messagingSenderId: "819696939732",
  appId: "1:819696939732:web:d39c426f6cf9a21d188141",
  measurementId: "G-0NBP20C9KC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
