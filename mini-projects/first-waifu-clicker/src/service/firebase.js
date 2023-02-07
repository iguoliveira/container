import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDXqj7-F51N3q06hoJLWsDSGSowftWmmHk",
  authDomain: "waifu-clicker-a9de0.firebaseapp.com",
  projectId: "waifu-clicker-a9de0",
  storageBucket: "waifu-clicker-a9de0.appspot.com",
  messagingSenderId: "749652019419",
  appId: "1:749652019419:web:ae188584e7e2995fa924fe"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()

export { firebase, auth, app }