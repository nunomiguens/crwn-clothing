import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCaozqQy8-V4kcRw4yJJhb91z8Ztn_4hf0',
  authDomain: 'crwn-db-cf545.firebaseapp.com',
  projectId: 'crwn-db-cf545',
  storageBucket: 'crwn-db-cf545.appspot.com',
  messagingSenderId: '800098530245',
  appId: '1:800098530245:web:72bbe6865dd14efa19d1ac',
  measurementId: 'G-WFTBX63MS8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
