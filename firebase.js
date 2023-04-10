import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBIETVhJ8DIq_G9m0ch9bmONg3_rJG9jG0",
    authDomain: "chatapp-80c21.firebaseapp.com",
    projectId: "chatapp-80c21",
    storageBucket: "chatapp-80c21.appspot.com",
    messagingSenderId: "3902151173",
    appId: "1:3902151173:web:7f40c19a6d032eafbd5a6c"
  };

let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export {db, auth};