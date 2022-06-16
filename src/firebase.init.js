// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrFZuqjnVfbvXLenrijwaDRHvBTEYSgto",
  authDomain: "hotel-booking-b6c84.firebaseapp.com",
  projectId: "hotel-booking-b6c84",
  storageBucket: "hotel-booking-b6c84.appspot.com",
  messagingSenderId: "240048312257",
  appId: "1:240048312257:web:f44a6a2b484c3d3f1f6940"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;