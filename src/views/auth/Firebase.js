
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY0rmdbXEloxCSo-0HxvOGLJSw10FvGkM",
  authDomain: "vewrite-44dc4.firebaseapp.com",
  projectId: "vewrite-44dc4",
  storageBucket: "vewrite-44dc4.appspot.com",
  messagingSenderId: "340376897281",
  appId: "1:340376897281:web:696f71bca4745db6817d00",
  measurementId: "G-F3PZK4MTL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app , auth };