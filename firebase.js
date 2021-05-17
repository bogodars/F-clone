import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDZ3c87hIb93eraxKe2g-458XauQwcQbFQ',
  authDomain: 'facebook-next-1170f.firebaseapp.com',
  projectId: 'facebook-next-1170f',
  storageBucket: 'facebook-next-1170f.appspot.com',
  messagingSenderId: '388032404966',
  appId: '1:388032404966:web:945d8a55ad95a4ba350a27',
  measurementId: 'G-71LJVK26VW',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
