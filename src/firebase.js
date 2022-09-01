import { initializeApp} from 'firebase/app';
import {getAuth} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBX9r8wLlF3rtdFKKQpdJA-2YispsYwWL4",
    authDomain: "facebook-clone-b226e.firebaseapp.com",
    projectId: "facebook-clone-b226e",
    storageBucket: "facebook-clone-b226e.appspot.com",
    messagingSenderId: "535927182927",
    appId: "1:535927182927:web:4bde7d3742d1ee42907c3a",
    measurementId: "G-L2MZQ4SNET"
  };

  // the below line of code will connect from end from the backend firebase 
  const firebaseApp = initializeApp(firebaseConfig);

  export const auth = getAuth(firebaseApp);

  
