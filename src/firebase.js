import firebase from "firebase/app";
import "firebase/auth";


export const auth=firebase.initializeApp({
        apiKey: "AIzaSyAL6v-YbIXN_YzeM8Lp2z6Nml4RI3T7CLc",
        authDomain: "chatapp-1b3bf.firebaseapp.com",
        projectId: "chatapp-1b3bf",
        storageBucket: "chatapp-1b3bf.appspot.com",
        messagingSenderId: "406762607755",
        appId: "1:406762607755:web:da0c1edb7cef8f2d24708e"
      
}).auth();