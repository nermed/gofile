import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import { get } from "firebase/storage";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDNq2jBdutpo6HE7U83UziQkdw2z45iEQ4",
  authDomain: "gofile-9fdec.firebaseapp.com",
  projectId: "gofile-9fdec",
  storageBucket: "gofile-9fdec.appspot.com",
  messagingSenderId: "438901077535",
  appId: "1:438901077535:web:36ad8b289156d9ff7d872a",
  measurementId: "G-MG68YLLKKS",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export {app, firestore};
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
