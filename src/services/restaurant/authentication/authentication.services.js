import { signInWithEmailAndPassword ,createUserWithEmailAndPassword,signOut} from "firebase/auth";
import {auth} from './authentication.config'

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const RagisterRequest=(email,password)=>
{
  return createUserWithEmailAndPassword(auth,email,password);
}

export const OnSignOut =()=>
{
   signOut(auth);
}