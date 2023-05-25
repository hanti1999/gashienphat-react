import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
    projectId: import.meta.env.VITE_APP_PROJECTID,
    storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APP_APPID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth};
export default firebase;