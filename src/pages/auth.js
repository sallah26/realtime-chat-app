import firebase from 'firebase/app'; 
import { createUserWithEmailAndPassword } from "firebase/auth"
// import {auth} from '..config/firebase'
import { auth, provider } from "../config/firebase";
  
export const register = async({email, password})=>{ 
    const resp = await createUserWithEmailAndPassword(email, password); 
    return resp.user; 
} 
  
export const login = async({email, password})=>{ 
    const res = await auth() 
      .signInWithEmailAndPassword(email, password); 
    return res.user; 
}