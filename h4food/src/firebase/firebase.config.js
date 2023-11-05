import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// console.log("inside firebase config", import.meta.env.VITE_API_KEY);
// console.log("inside firebase config", import.meta.env.VITE_AUTH_DOMAIN);
// console.log("inside firebase config", import.meta.env.VITE_PROJECT_ID);
// console.log("inside firebase config", import.meta.env.VITE_STORAGE_BUCKET);
// console.log(
//   "inside firebase config",
//   import.meta.env.VITE_MESSAGE_SENDER_ID
// );
// console.log("inside firebase config", import.meta.env.VITE_APP_ID);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  //   apiKey: "AIzaSyCeLEp1eKsmB6k4MKnoPRdBg4YDSNDbvvc",
  //   authDomain: "h4food-5e753.firebaseapp.com",
  //   projectId: "h4food-5e753",
  //   storageBucket: "h4food-5e753.appspot.com",
  //   messagingSenderId: "626672338441",
  //   appId: "1:626672338441:web:eda0e3731897f19a06dad8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
