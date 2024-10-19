// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqoa1ANnMU9kIqSUhIhkhWhKSp_wE6Luk",
  authDomain: "vuesax-ef383.firebaseapp.com",
  projectId: "vuesax-ef383",
  storageBucket: "vuesax-ef383.appspot.com",
  messagingSenderId: "675537245921",
  appId: "1:675537245921:web:666310f71df17b166d49a0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()
