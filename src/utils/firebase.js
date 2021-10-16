import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDaM-F5mFyfGRhGGaGrNSU7C5sseo5LtSE",
    authDomain: "lastblogmilestone.firebaseapp.com",
    projectId: "lastblogmilestone",
    storageBucket: "lastblogmilestone.appspot.com",
    messagingSenderId: "410900420837",
    appId: "1:410900420837:web:e6a170ae99b10eea699c0c"
})

export const auth = app.auth();
export default app;

