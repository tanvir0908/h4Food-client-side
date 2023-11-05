import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// console.log("inside firebase config", import.meta.env.VITE_PASS);

const firebaseConfig = {
  apiKey: "AIzaSyCeLEp1eKsmB6k4MKnoPRdBg4YDSNDbvvc",
  authDomain: "h4food-5e753.firebaseapp.com",
  projectId: "h4food-5e753",
  storageBucket: "h4food-5e753.appspot.com",
  messagingSenderId: "626672338441",
  appId: "1:626672338441:web:eda0e3731897f19a06dad8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
