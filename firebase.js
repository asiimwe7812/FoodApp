// import firebase from "firebase/compat/app";
// import { firebaseConfig } from "./constants/firebase";
// import "firebase/compat/storage";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJpPCI4EjAIKqxWdcwgu6K0mowXeeNiEg",
  authDomain: "ordersystem-8b388.firebaseapp.com",
  projectId: "ordersystem-8b388",
  storageBucket: "ordersystem-8b388.appspot.com",
  messagingSenderId: "729315885646",
  appId: "1:729315885646:web:3bb55c8c593d4e5e02391f",
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
