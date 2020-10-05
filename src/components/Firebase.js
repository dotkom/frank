import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAKkB7z3C-wHboNqyM-0P4HfZ9H8m7pYcQ",
    authDomain: "frank-639b6.firebaseapp.com",
    databaseURL: "https://frank-639b6.firebaseio.com",
    projectId: "frank-639b6",
    storageBucket: "frank-639b6.appspot.com",
    messagingSenderId: "953569602226",
    appId: "1:953569602226:web:feabf8bfd3dec5d1ffb7ab",
    measurementId: "G-H5DKDSVM4J",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function writeUserData(id, first_name, last_name) {
    firebase.database().ref("users/" + id).set({
    id: id,
    first_name: first_name,
    last_name: last_name,
  });
}

export default writeUserData;
