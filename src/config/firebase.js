import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth" 
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCzIC7bA_nNllUh2D4YUZ7b9ulwpIMnOFk",
  authDomain: "blog-post-2nd.firebaseapp.com",
  projectId: "blog-post-2nd",
  storageBucket: "blog-post-2nd.appspot.com",
  messagingSenderId: "1030362015400",
  appId: "1:1030362015400:web:cdcf9541afdbc86480849d",
  measurementId: "G-ES1C63DLDX"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();