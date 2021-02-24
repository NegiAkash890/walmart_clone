import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyC_wFIzb6G0qn396kf6UfFnSL_9bpObbjs",
  authDomain: "walmat-clone.firebaseapp.com",
  projectId: "walmat-clone",
  storageBucket: "walmat-clone.appspot.com",
  messagingSenderId: "1080822096568",
  appId: "1:1080822096568:web:57f423ff4899cbcb9fca4d"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()

export {db,auth}
