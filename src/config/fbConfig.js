import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';


  var firebaseConfig = {
    apiKey: "AIzaSyA0NOhjQ8UGpOmYs9h409vQYwuzTSgTHGQ",
    authDomain: "marioplan-731a5.firebaseapp.com",
    projectId: "marioplan-731a5",
    storageBucket: "marioplan-731a5.appspot.com",
    messagingSenderId: "507995395358",
    appId: "1:507995395358:web:0b53c8e9f06d99bf17a50f",
    measurementId: "G-3BP9NG51ZK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;