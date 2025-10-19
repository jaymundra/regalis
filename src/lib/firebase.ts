import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

// Firebase configuration
// Replace these with your actual Firebase project credentials
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

// console.log("Firebase Config:", firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize analytics only if supported (for SSR safety)
let analytics: any = null;
isSupported().then((yes) => {
  if (yes) analytics = getAnalytics(app);
});

// Setup authentication
const auth = getAuth(app);
signInAnonymously(auth).catch((err) => console.error("Anon sign-in failed:", err));

onAuthStateChanged(auth, (user) => {
  if (user) console.log("Anonymous user ID:", user.uid);
});

export { app, db, analytics, auth };