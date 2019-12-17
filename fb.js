import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAMvS6VKuDCNDjjAMk2QqAfHCmP4LFndXo",
    authDomain: "socialapp-ab471.firebaseapp.com",
    databaseURL: "https://socialapp-ab471.firebaseio.com",
    projectId: "socialapp-ab471",
    storageBucket: "socialapp-ab471.appspot.com",
    messagingSenderId: "914359903370",
    appId: "1:914359903370:web:18f377dd5b24aa43f17973",
    measurementId: "G-8F62WHKK00"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase