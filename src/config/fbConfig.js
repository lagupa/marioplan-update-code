import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBGPbsoWIra_8MsAbZN84AmTSbNqG5Pj3A",
  authDomain: "rcm-backend.firebaseapp.com",
  databaseURL: "https://rcm-backend.firebaseio.com",
  projectId: "rcm-backend",
  storageBucket: "rcm-backend.appspot.com",
  messagingSenderId: "747049451990",
  appId: "1:747049451990:web:2851f2e0ea95d60ee82477",
  measurementId: "G-5SG16SMRCE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase 