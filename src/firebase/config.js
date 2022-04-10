import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBJAwXplhZ6G9sqx4olLD8eskJ_secqN3Q",
  authDomain: "fav-music-20d3d.firebaseapp.com",
  projectId: "fav-music-20d3d",
  storageBucket: "fav-music-20d3d.appspot.com",
  messagingSenderId: "624362401490",
  appId: "1:624362401490:web:b87c31b6497c468a6d470b"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }

