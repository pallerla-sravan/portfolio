// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEtS_w4crwqFt6j633mwNeEYmUshNn5Is",
  authDomain: "portfolio-ba5af.firebaseapp.com",
  projectId: "portfolio-ba5af",
  storageBucket: "portfolio-ba5af.firebasestorage.app",
  messagingSenderId: "731142807215",
  appId: "1:731142807215:web:858feb32f1d9592bfdfe5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)
export { db, storage }