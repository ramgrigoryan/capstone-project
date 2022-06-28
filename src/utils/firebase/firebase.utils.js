import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPcD73YJCdDQjRV7CsUdinpk-ixRmYfWQ",
  authDomain: "crwn-clothing-db-2e2e6.firebaseapp.com",
  projectId: "crwn-clothing-db-2e2e6",
  storageBucket: "crwn-clothing-db-2e2e6.appspot.com",
  messagingSenderId: "659799925688",
  appId: "1:659799925688:web:283ec5b993e8e6a719654d",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
