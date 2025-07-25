
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAm76IobdQFNfd8gKvUt0sAPbJmA7EorSo",
  authDomain: "netflix-clone-ecac3.firebaseapp.com",
  projectId: "netflix-clone-ecac3",
  storageBucket: "netflix-clone-ecac3.firebasestorage.app",
  messagingSenderId: "942214389483",
  appId: "1:942214389483:web:4830c1cef81b0bbd5168ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      email,
      authProvider: "local"
    });
  } catch (error) {
    console.error(error);
   toast.error(error.code.split('/')[1].split('-').join(' '));

  }
}
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));

  }
}
const logout = () => {
  signOut(auth)
}
export { auth, db, signup, login, logout };