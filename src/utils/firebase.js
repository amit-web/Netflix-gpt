// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCejwV0Idb-12eevLpXmaqdoKpb9XxX_UM",
  authDomain: "netflixgpt-41e1b.firebaseapp.com",
  projectId: "netflixgpt-41e1b",
  storageBucket: "netflixgpt-41e1b.appspot.com",
  messagingSenderId: "692634198485",
  appId: "1:692634198485:web:2e2bd189746ff36111dd5c",
  measurementId: "G-0FZZDHCQC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();