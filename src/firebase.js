// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fm-to-do-app.firebaseapp.com",
  projectId: "fm-to-do-app",
  storageBucket: "fm-to-do-app.appspot.com",
  messagingSenderId: "210250457950",
  appId: "1:210250457950:web:dcb2fd4a21ce40352525cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export {app, auth}