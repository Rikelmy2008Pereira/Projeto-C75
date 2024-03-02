import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDSapq3zfyi-cNldQP8-zGxjn8Gz-RaKM4",
  authDomain: "proc75-42027.firebaseapp.com",
  projectId: "proc75-42027",
  storageBucket: "proc75-42027.appspot.com",
  messagingSenderId: "451774445193",
  appId: "1:451774445193:web:325902249d1a8f794ab858"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
