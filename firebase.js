import firebase, { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDrKCyWS4-uSn0xantb8vAR7a9iU59C8fk",
    authDomain: "ubereatsclonetest17.firebaseapp.com",
    projectId: "ubereatsclonetest17",
    storageBucket: "ubereatsclonetest17.appspot.com",
    messagingSenderId: "402193272789",
    appId: "1:402193272789:web:9274420b973b87a39db75c"
  };

const app = initializeApp(firebaseConfig);

export default firebase;