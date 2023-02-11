import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyDgctuuPPcf8rDjA-jMAY4kwLTGUiURXZA",
  authDomain: "ciclista-eletronico-d5de0.firebaseapp.com",
  projectId: "ciclista-eletronico-d5de0",
  storageBucket: "ciclista-eletronico-d5de0.appspot.com",
  messagingSenderId: "6524698643",
  appId: "1:6524698643:web:0073d34f3e3f261160bfe6"
};




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
