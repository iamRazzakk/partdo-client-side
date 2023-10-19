// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaxdHe4hAfckC_Zc4yb152cuXKeWius9k",
    authDomain: "partdo-f054e.firebaseapp.com",
    projectId: "partdo-f054e",
    storageBucket: "partdo-f054e.appspot.com",
    messagingSenderId: "1099377340427",
    appId: "1:1099377340427:web:e149e99533faf26891d70e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default (auth)