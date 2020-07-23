import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAOL1aUIky-Hq9g7_6FJpeaLqHPpfWgCqk",
    authDomain: "messenger-50130.firebaseapp.com",
    databaseURL: "https://messenger-50130.firebaseio.com",
    projectId: "messenger-50130",
    storageBucket: "messenger-50130.appspot.com",
    messagingSenderId: "334572379283",
    appId: "1:334572379283:web:eb99d7ca813852acb00166",
    measurementId: "G-HYJ4H6ZRVJ"
});

const db = firebaseApp.firestore();

export default db;