import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as unknown as string,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as unknown as string,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as unknown as string,
  storageBucket: process.env
    .NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as unknown as string,
  messagingSenderId: process.env
    .NEXT_PUBLIC_FIREBASE_MESSAGINGSENDER_ID as unknown as string,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID as unknown as string,
  measurementId: process.env
    .NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID as unknown as string,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();


export default app;

export { db, auth, storage };
