import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyChgGSIyHarCO3jBrHRphgkkFMah9-eBSA",
    authDomain: "bloguu-88c12.firebaseapp.com",
    databaseURL: "https://bloguu-88c12.firebaseio.com",
    projectId: "bloguu-88c12",
    storageBucket: "bloguu-88c12.appspot.com",
    messagingSenderId: "1082047858610",
    appId: "1:1082047858610:web:c47d5757f278e58fbd46ab",
    measurementId: "G-27VFCNWGDQ"
};
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    export default firebase;