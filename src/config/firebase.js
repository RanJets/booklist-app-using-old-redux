import "firebase/app";
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBQT7aqEsM5nvLLSHe8s2uBhhfxLWVXzTI",
  authDomain: "test-e5ae9.firebaseapp.com",
  projectId: "test-e5ae9",
  storageBucket: "test-e5ae9.appspot.com",
  messagingSenderId: "779527569137",
  appId: "1:779527569137:web:32dc32e4609b074554b350",
});

const fs = getFirestore(firebaseConfig);
export default fs;
