import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyANPhXVvnoipPX4vBE-2bzJEtSsmiGzzWM",
    authDomain: "therapy-website-d4115.firebaseapp.com",
    projectId: "therapy-website-d4115",
    storageBucket: "therapy-website-d4115.appspot.com",
    messagingSenderId: "320505362086",
    appId: "1:320505362086:web:5798180089d25ba85de667",
    measurementId: "G-XS59407HR1"
};
const app=initializeApp(firebaseConfig);

export const auth= getAuth(app);