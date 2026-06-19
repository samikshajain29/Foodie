// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "foodie-c40af.firebaseapp.com",
  projectId: "foodie-c40af",
  storageBucket: "foodie-c40af.firebasestorage.app",
  messagingSenderId: "752811432823",
  appId: "1:752811432823:web:804090fc1be59fa0231f72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
