import firebase from 'firebase';
 
const config = {
    apiKey: "AIzaSyD7mkHEYY8o0m9IGKiRgkq1t2pNSkEdsWU",
    authDomain: "inturn-hackathon.firebaseapp.com",
    projectId: "inturn-hackathon",
    storageBucket: "inturn-hackathon.appspot.com",
    messagingSenderId: "829544427722",
    appId: "1:829544427722:web:59ab0c75b9cbaccf3c0433"
};
 
firebase.initializeApp(config);
 
export default firebase;