// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADKVeKf4_jDZAxtiB6PGzn6TALUfDP-BA",
  authDomain: "dragon-news-b30f9.firebaseapp.com",
  projectId: "dragon-news-b30f9",
  storageBucket: "dragon-news-b30f9.appspot.com",
  messagingSenderId: "451443889989",
  appId: "1:451443889989:web:c0891bfbf3141cd1bcd02c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app