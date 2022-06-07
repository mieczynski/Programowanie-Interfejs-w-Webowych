// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//https://search-groups-portal.firebaseapp.com/__/auth/handler
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeTXZOtHRd5nVgiEXffduH8nV-TdS_tYc",
    authDomain: "search-groups-portal.firebaseapp.com",
    projectId: "search-groups-portal",
    storageBucket: "search-groups-portal.appspot.com",
    messagingSenderId: "951977464533",
    appId: "1:951977464533:web:a11724f888974638be085c",
    measurementId: "G-7LE8FMQBZ4"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);

export default app;


