import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyApPBkpLpktTL4JeemSxHgM-qMzeEe9A-A",
  authDomain: "ron-photo-gallery.firebaseapp.com",
  databaseURL: "https://ron-photo-gallery.firebaseio.com",
  projectId: "ron-photo-gallery",
  storageBucket: "ron-photo-gallery.appspot.com",
  messagingSenderId: "913085266261",
  appId: "1:913085266261:web:5226dc280513040ea797dc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }


