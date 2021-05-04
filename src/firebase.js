import  firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyC7aCICfry7_M-9cFjqpGS2nxN0BywoBdc",
  authDomain: "disneyplusclone-ca870.firebaseapp.com",
  projectId: "disneyplusclone-ca870",
  storageBucket: "disneyplusclone-ca870.appspot.com",
  messagingSenderId: "277216268687",
  appId: "1:277216268687:web:8c7aeac420cff3352afbfa",
  measurementId: "G-7B78BFKCXF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;