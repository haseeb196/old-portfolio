import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyBJfdXsMDzQWK73lUJFi_HBdawdfTkKmmc',
  authDomain: 'personal-portfolio-ad669.firebaseapp.com',
  projectId: 'personal-portfolio-ad669',
  storageBucket: 'personal-portfolio-ad669.appspot.com',
  messagingSenderId: '123317522455',
  appId: '1:123317522455:web:10e03e98f7392ae86c0c52',
};
firebase.initializeApp(config);
const db = firebase.firestore();

export { db };
