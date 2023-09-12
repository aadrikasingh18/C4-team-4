// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, setPersistence } from "firebase/auth";
import { browserSessionPersistence } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY0rmdbXEloxCSo-0HxvOGLJSw10FvGkM",
  authDomain: "vewrite-44dc4.firebaseapp.com",
  databaseURL: "https://vewrite-44dc4-default-rtdb.firebaseio.com",
  projectId: "vewrite-44dc4",
  storageBucket: "vewrite-44dc4.appspot.com",
  messagingSenderId: "340376897281",
  appId: "1:340376897281:web:696f71bca4745db6817d00",
  measurementId: "G-F3PZK4MTL7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

setPersistence(auth, browserSessionPersistence);
