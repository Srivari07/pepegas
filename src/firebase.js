import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-r-v3teQ4VtZAF8UaxmMlWKejANA9mpw",
  authDomain: "pepegas-ppgs.firebaseapp.com",
  projectId: "pepegas-ppgs",
  storageBucket: "pepegas-ppgs.appspot.com",
  messagingSenderId: "250349477861",
  appId: "1:250349477861:web:ca73a587e738fdb544590c",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
export default db;
