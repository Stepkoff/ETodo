import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1y53g8xuJj4e5kgNpNDAQUDTDmlRy7VU",
  authDomain: "todo-app-bbd9c.firebaseapp.com",
  projectId: "todo-app-bbd9c",
  storageBucket: "todo-app-bbd9c.appspot.com",
  messagingSenderId: "326254325876",
  appId: "1:326254325876:web:517e2b6fda0f98be8f6121"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseStorage = getStorage();
export const firebaseDB = getFirestore();