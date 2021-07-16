import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBQ8v0WxnbScbq6nrfsqCtiprxU2NGH_8c",
  authDomain: "bsit-3d-2c56f.firebaseapp.com",
  projectId: "bsit-3d-2c56f",
  storageBucket: "bsit-3d-2c56f.appspot.com",
  messagingSenderId: "210253858640",
  appId: "1:210253858640:web:643005e948d7e6a0c90e55",
  measurementId: "G-72QVM02MD8"
});
 
 const db = firebaseConfig.firestore();
 const auth = firebase.auth();
 const storage = firebase.storage();
  


export { db, auth, storage } ;