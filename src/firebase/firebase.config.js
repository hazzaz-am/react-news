// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAHlPgEGY8mhCV6C3VsLx_LOJM-cbrRAAA",
	authDomain: "react-news-a0b5c.firebaseapp.com",
	projectId: "react-news-a0b5c",
	storageBucket: "react-news-a0b5c.firebasestorage.app",
	messagingSenderId: "129345527680",
	appId: "1:129345527680:web:32ea8bfd4be76035bb2b65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)