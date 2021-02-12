  import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyBCaXwCQc1sOjGzdrQ0r-Vql4uZ4ZmiUBc",
    authDomain: "react-firebase-chatapp-1d670.firebaseapp.com",
    projectId: "react-firebase-chatapp-1d670",
    storageBucket: "react-firebase-chatapp-1d670.appspot.com",
    messagingSenderId: "543470504702",
    appId: "1:543470504702:web:5c3f0a813422384e3b73af"
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messagesRef = database.ref('messages');

  export const pushMessage = ({name, text}) => {
   messagesRef.push({name,text});
  }
