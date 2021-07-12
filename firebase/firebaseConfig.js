import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0ZDjrXhIigLSswdyRo27uCJs4VGoBwnA",
  authDomain: "docs-clone-8b641.firebaseapp.com",
  projectId: "docs-clone-8b641",
  storageBucket: "docs-clone-8b641.appspot.com",
  messagingSenderId: "818850187493",
  appId: "1:818850187493:web:7544a095ac3a9baee66c0c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
