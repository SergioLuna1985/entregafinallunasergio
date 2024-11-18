import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB50rM2B5ko_qVf0kcdOWcZw9ZejpWe7Rs",
  authDomain: "ecommerce-9bcf9.firebaseapp.com",
  projectId: "ecommerce-9bcf9",
  storageBucket: "ecommerce-9bcf9.firebasestorage.app",
  messagingSenderId: "972913247818",
  appId: "1:972913247818:web:b30de2a2f2b5aa7f5848b3"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()

export default db