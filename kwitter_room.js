
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBaIyOmvsi_2zGsU5nJwoTwLwLuTEcH4Yc",
      authDomain: "kwitter-e1c3b.firebaseapp.com",
      databaseURL: "https://kwitter-e1c3b-default-rtdb.firebaseio.com",
      projectId: "kwitter-e1c3b",
      storageBucket: "kwitter-e1c3b.appspot.com",
      messagingSenderId: "510941833351",
      appId: "1:510941833351:web:3d3f02c7e6c9be01443022",
      measurementId: "G-LGLY4WTKC7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
