import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "poll-info.firebaseapp.com",
  projectId: "poll-info",
  storageBucket: "poll-info.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

// Analytics should only run in browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const auth = getAuth(app);
