// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgwmDk5Wl6MK3DWKdb0Ugs0lAtrKmHkFw",
  authDomain: "teaching-tutor-3cdb0.firebaseapp.com",
  projectId: "teaching-tutor-3cdb0",
  storageBucket: "teaching-tutor-3cdb0.appspot.com",
  messagingSenderId: "30444254057",
  appId: "1:30444254057:web:d3940d7c092da59edf03f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;