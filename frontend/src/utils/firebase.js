import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-64df3.firebaseapp.com",
  projectId: "interviewai-64df3",
  storageBucket: "interviewai-64df3.firebasestorage.app",
  messagingSenderId: "714533289146",
  appId: "1:714533289146:web:a568e2aef10c5912ac9683",
};

// Initial firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
