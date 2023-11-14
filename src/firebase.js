// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,  collection, addDoc } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuer0_YuwpA51TJYFXPJJdZ94R6s3NFUg",
  authDomain: "pasal-react.firebaseapp.com",
  projectId: "pasal-react",
  storageBucket: "pasal-react.appspot.com",
  messagingSenderId: "575039939553",
  appId: "1:575039939553:web:0b76b867bea42a7a49e8a0"
};
// url of realtime database: https://pasal-react-default-rtdb.asia-southeast1.firebasedatabase.app/name to be store in .json
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);