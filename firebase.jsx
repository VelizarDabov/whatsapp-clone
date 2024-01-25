
  import { getApp, getApps, initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  
  import { getFirestore } from "firebase/firestore";
  import { getFunctions } from "firebase/functions";
  import { getStorage } from "firebase/storage";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBwFkRLnjDRvtuETSov85SZZSS3CA5wUxg",
    authDomain: "whatsapp-clone-f32e0.firebaseapp.com",
    projectId: "whatsapp-clone-f32e0",
    storageBucket: "whatsapp-clone-f32e0.appspot.com",
    messagingSenderId: "963387568270",
    appId: "1:963387568270:web:11d39d837987af91ef99df"
  };
  
  const app = getApps().length ? getApps():initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app)
  const auth = getAuth(app)
  export {db, storage, auth}