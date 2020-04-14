
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'



const config = {
    apiKey: "AIzaSyDVQR0LF-jsmT67aBllriBa-AeVDCQho5Y",
    authDomain: "crwn-db-498c9.firebaseapp.com",
    databaseURL: "https://crwn-db-498c9.firebaseio.com",
    projectId: "crwn-db-498c9",
    storageBucket: "crwn-db-498c9.appspot.com",
    messagingSenderId: "269018613514",
    appId: "1:269018613514:web:5c9e9164c87c72d7905cf3"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;