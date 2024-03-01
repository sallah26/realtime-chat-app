import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth" 
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDwGWdoiz0Fcs8OJSufVY3K6YL4ih1JPrc",
  authDomain: "blog-posting-75b09.firebaseapp.com",
  projectId: "blog-posting-75b09",
  storageBucket: "blog-posting-75b09.appspot.com",
  messagingSenderId: "1094993720306",
  appId: "1:1094993720306:web:50f8725b223766b835b16b",
  measurementId: "G-78R9BXFK3S"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();