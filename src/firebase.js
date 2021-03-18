import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPIELx_BHuYbdBOTEqVYGAY8nE7F2wihw",
  authDomain: "slack-clone-891bb.firebaseapp.com",
  projectId: "slack-clone-891bb",
  storageBucket: "slack-clone-891bb.appspot.com",
  messagingSenderId: "1083466936068",
  appId: "1:1083466936068:web:03af0cb2d26d2c95ddaa51"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()


export default db
export {auth, provider}