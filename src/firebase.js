// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAkuEdI8hajvouRqAoAADvXCk1mA4NZtPY",
    authDomain: "tweeter-clone-adbb6.firebaseapp.com",
    databaseURL: "https://tweeter-clone-adbb6.firebaseio.com",
    projectId: "tweeter-clone-adbb6",
    storageBucket: "tweeter-clone-adbb6.appspot.com",
    messagingSenderId: "468572035569",
    appId: "1:468572035569:web:dddea9d7179d101f4d8c50",
    measurementId: "G-R7LQXETXF1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
export default db;