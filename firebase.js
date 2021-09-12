const firebaseConfig = {
    apiKey: "AIzaSyAcKxyhkrydn5VMFMb31sPtUOBwAciFy-Y",
    authDomain: "todo-live-ad2d8.firebaseapp.com",
    projectId: "todo-live-ad2d8",
    storageBucket: "todo-live-ad2d8.appspot.com",
    messagingSenderId: "517313281083",
    appId: "1:517313281083:web:ffb89f0ce92be9818a301e",
    measurementId: "G-3EELHE2QNC"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();