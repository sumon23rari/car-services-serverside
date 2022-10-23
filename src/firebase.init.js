// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1xT6ec6eR_9fUr2y63i_SN6iwssqSop8",
  authDomain: "genius-car-services-4985a.firebaseapp.com",
  projectId: "genius-car-services-4985a",
  storageBucket: "genius-car-services-4985a.appspot.com",
  messagingSenderId: "504328758463",
  appId: "1:504328758463:web:46f65ec89230beb655d20a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
