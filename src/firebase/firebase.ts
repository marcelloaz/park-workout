import { initializeApp } from "firebase/app";

//import { navigate } from 'gatsby';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  getDoc,
  collection,
  where,doc, setDoc 
} from "firebase/firestore";
import { title } from "process";
import * as firebaseConfig from '../firebaseConfig';
import { Guid } from "guid-typescript";

// const firebaseConfig = {
//   apiKey: "AIzaSyCNHjOubas2DZ8yIY94tvGF6h3DPgnf6nE",
//   authDomain: "park-workout.firebaseapp.com",
//   projectId: "park-workout",
//   storageBucket: "park-workout.appspot.com",
//   messagingSenderId: "468200369681",
//   appId: "1:468200369681:web:1e616d27523f788b8ccbb0",
//   measurementId: "G-KXMBMFCTDR",
// };

const app = firebaseConfig.app;

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


const signInWithFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, facebookProvider);
    const user = res.user;

    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      // await addDoc(collection(db, "users"), {
      //   uid: user.uid,
      //   name: user.displayName,
      //   authProvider: "facebook",
      //   email: user.email,
      // });
    }
  } catch (err) {
    console.error(err);
    //alert(err.message);
  }
};

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;


    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    // if (docs.docs.length === 0) {
    //   await addDoc(collection(db, "users"), {
    //     uid: user.uid,
    //     name: user.displayName,
    //     authProvider: "google",
    //     email: user.email,
    //   });
    // }
  } catch (err) {
    console.error(err);
    //alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email: any, password: any) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert("Falha ao logar");
  }
};

const registerChalleges = async (title: any, video: any, data: any) => {
  const challegesRef = doc(db, 'challeges', Guid.create().toString());
  setDoc(challegesRef, { title: title, video: video, data: data}, { merge: true });
}

const getAllChalleges = async () => {
  const q = query(collection(db, "challeges"));
  const querySnapshot = await getDocs(q);
 return querySnapshot;
}

const getChallegeId = async (id: any) => {
  const docRef = doc(db, "challeges", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data();
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
}

const registerWithEmailAndPassword = async (name: any, email: any, password: any) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    
    return true;
  } catch (err) {
    console.error(err);
    return false;
    //alert(err.message);
  }
};
const sendPasswordReset = async (email: any) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
  }
};
const logout = () => {
  signOut(auth);
};


export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  signInWithFacebook,
  registerChalleges,
  logout,
  getAllChalleges,
  getChallegeId,
};


