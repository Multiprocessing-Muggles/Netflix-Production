// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfszJ1LNYx-2jHDANuClfqA5ojZHgtmeg",
    authDomain: "netflix-79293.firebaseapp.com",
    projectId: "netflix-79293",
    storageBucket: "netflix-79293.appspot.com",
    messagingSenderId: "153357598184",
    appId: "1:153357598184:web:cde1dc667401077f2d385d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }