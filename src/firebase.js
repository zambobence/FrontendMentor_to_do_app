// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUqakGa3JWWQSfKQ9qyqVbWz9FkoWGwgA",
  authDomain: "todo-react-fm.firebaseapp.com",
  projectId: "todo-react-fm",
  storageBucket: "todo-react-fm.appspot.com",
  messagingSenderId: "743067651171",
  appId: "1:743067651171:web:e1768dc55823e28572bc56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export {app, auth}