import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBtX9TaWQSmvJbi8qkDYdQ3964zd3KIYn4',
  authDomain: 'crwn-db-6cbd9.firebaseapp.com',
  databaseURL: 'https://crwn-db-6cbd9.firebaseio.com',
  projectId: 'crwn-db-6cbd9',
  storageBucket: 'crwn-db-6cbd9.appspot.com',
  messagingSenderId: '22224600249',
  appId: '1:22224600249:web:a6621fc56be84b49992f68',
  measurementId: 'G-9HLMCK95CW',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setting up google authentication

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
