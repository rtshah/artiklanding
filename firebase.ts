import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "artikagent-8f441.firebaseapp.com",
  projectId: "artikagent-8f441",
  storageBucket: "artikagent-8f441.firebasestorage.app",
  messagingSenderId: "106346264723",
  appId: "1:106346264723:web:0a9ea81e3bb77fc59e3566"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);