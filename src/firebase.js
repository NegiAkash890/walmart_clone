import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDsrMervc2xUBm_MtA80kTpS4_1E2pvGmI",
  authDomain: "walmart-cln.firebaseapp.com",
  projectId: "walmart-cln",
  storageBucket: "walmart-cln.appspot.com",
  messagingSenderId: "643295265617",
  appId: "1:643295265617:web:b722ad605b39e8f893c970"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db,auth}
