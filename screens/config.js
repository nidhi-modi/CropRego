import Firebase from "firebase";
import 'firebase/firestore';
import * as firebase from 'firebase'



const config = {
  /*apiKey: "AIzaSyCgVRhD8YLOdhNpeLA8esqMU6941FAiGCQ",
  authDomain: "croprego.firebaseapp.com",
  databaseURL: "https://croprego.firebaseio.com",
  projectId: "croprego",
  storageBucket: "croprego.appspot.com",
  messagingSenderId: "637187455114",
  appId: "1:637187455114:web:94f1a07d7ec55e74539573",
  measurementId: "G-PJRQ9XYXKJ"*/

  apiKey: "AIzaSyAEuKHfa9SvZv0IBsCcargyCehiUixiEeQ",
  authDomain: "crop-registration.firebaseapp.com",
  databaseURL: "https://crop-registration-default-rtdb.firebaseio.com",
  projectId: "crop-registration",
  storageBucket: "crop-registration.appspot.com",
  messagingSenderId: "484351957512",
  appId: "1:484351957512:web:b7f64ea6a5120ac4a80fbd",
  measurementId: "G-3WK2JFQBX4"
};
export default !firebase.apps.length 
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();