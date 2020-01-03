import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD_wFESlBSDM0vtZ9OFUUrSE1CNt81tj5w",
  authDomain: "react-backend-db.firebaseapp.com",
  databaseURL: "https://react-backend-db.firebaseio.com",
  projectId: "react-backend-db",
  storageBucket: "react-backend-db.appspot.com",
  messagingSenderId: "830061588646",
  appId: "1:830061588646:web:3c4effe15da1d20d3c4467"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
