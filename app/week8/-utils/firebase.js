// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTuSXtwK92Lpt3LslER5DR1bomFVqkCyc",
  authDomain: "cprg306-assignments-addc5.firebaseapp.com",
  projectId: "cprg306-assignments-addc5",
  storageBucket: "cprg306-assignments-addc5.appspot.com",
  messagingSenderId: "148448951137",
  appId: "1:148448951137:web:128931494bb0effee6e320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);