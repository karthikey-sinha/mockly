// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUrCbun4A8Nn3P7Yk0qLHg98-zXWjvs9w",
  authDomain: "mockly-9b0a3.firebaseapp.com",
  projectId: "mockly-9b0a3",
  storageBucket: "mockly-9b0a3.firebasestorage.app",
  messagingSenderId: "827492296927",
  appId: "1:827492296927:web:217951f16eb9a3f391e16a",
  measurementId: "G-MN1JWTSH3K"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);