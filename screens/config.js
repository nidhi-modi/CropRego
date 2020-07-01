import Firebase from "firebase";
import 'firebase/firestore';
import * as firebase from 'firebase'



const config = {
  apiKey: "AIzaSyCgVRhD8YLOdhNpeLA8esqMU6941FAiGCQ",
  authDomain: "croprego.firebaseapp.com",
  databaseURL: "https://croprego.firebaseio.com",
  projectId: "croprego",
  storageBucket: "croprego.appspot.com",
  messagingSenderId: "637187455114",
  appId: "1:637187455114:web:94f1a07d7ec55e74539573",
  measurementId: "G-PJRQ9XYXKJ"
};
export default !firebase.apps.length 
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();