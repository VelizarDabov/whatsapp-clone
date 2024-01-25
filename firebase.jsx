import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import'firebase/compat/storage'
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBwFkRLnjDRvtuETSov85SZZSS3CA5wUxg",
  authDomain: "whatsapp-clone-f32e0.firebaseapp.com",
  projectId: "whatsapp-clone-f32e0",
  storageBucket: "whatsapp-clone-f32e0.appspot.com",
  messagingSenderId: "963387568270",
  appId: "1:963387568270:web:11d39d837987af91ef99df",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export {db, auth, provider, storage}
export default storage