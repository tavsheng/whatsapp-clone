import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCnr1QhqiUqFQfRNFHDutcF1KB64rld1wA",
    authDomain: "whatsapp-clone-c42bd.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-c42bd.firebaseio.com",
    projectId: "whatsapp-clone-c42bd",
    storageBucket: "whatsapp-clone-c42bd.appspot.com",
    messagingSenderId: "238655659333",
    appId: "1:238655659333:web:e113072633a0998a65322c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;