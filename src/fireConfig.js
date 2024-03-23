// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYSSUsFsXduFoO4WiOWrNMXM49dF8J7VY",
  authDomain: "chat-app-fb1d5.firebaseapp.com",
  projectId: "chat-app-fb1d5",
  storageBucket: "chat-app-fb1d5.appspot.com",
  messagingSenderId: "464856956407",
  appId: "1:464856956407:web:09ebcf263667679e7002f2",
  measurementId: "G-898DZF1B40"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()//authentication(register , login,logout,userinfo,reset,sendingmail)
export const storage = getStorage() //file storage(files)
export const db = getFirestore() //database(database)


  