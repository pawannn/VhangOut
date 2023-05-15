// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf58lqBQGlxN-hLdOxWbaYBsLZOL4LYmg",
  authDomain: "vhangout-7.firebaseapp.com",
  projectId: "vhangout-7",
  storageBucket: "vhangout-7.appspot.com",
  messagingSenderId: "82623566683",
  appId: "1:82623566683:web:44fe3225002ff6622c407e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
