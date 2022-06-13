import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCPeCMHdb1GDGMLxq8RLnL7807qKqvVYLk",
  authDomain: "shalomplay-62bf5.firebaseapp.com",
  projectId: "shalomplay-62bf5",
  storageBucket: "shalomplay-62bf5.appspot.com",
  messagingSenderId: "1070736856931",
  appId: "1:1070736856931:web:6d275c3b6bd7f72540a556",
  measurementId: "G-6TGC1PV21Z"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);