import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCwE33a_-LznAYdwNlA4Da6adMtCF1Gg5I",
  authDomain: "miniblog-6fe87.firebaseapp.com",
  projectId: "miniblog-6fe87",
  storageBucket: "miniblog-6fe87.appspot.com",
  messagingSenderId: "254854283801",
  appId: "1:254854283801:web:bfd51766cdc9fa0fb72088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
