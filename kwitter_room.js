// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD385vbDk9f2cYpbVJWAQhtiBHbsVn_-KI",
      authDomain: "kwitter-4812a.firebaseapp.com",
      projectId: "kwitter-4812a",
      storageBucket: "kwitter-4812a.appspot.com",
      messagingSenderId: "602028580275",
      appId: "1:602028580275:web:bea7038b0925cb5ebb3fc6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
     //ADD YOUR FIREBASE LINKS
      user_name = localStorage.getItem("user_name"); 
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name = "+Room_names);
      row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}


