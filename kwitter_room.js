
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCC_j6Ar-AknTWGG5rkuhe3B1WQHpcGp98",
      authDomain: "online-chat-app-aka-kwitter.firebaseapp.com",
      databaseURL: "https://online-chat-app-aka-kwitter-default-rtdb.firebaseio.com",
      projectId: "online-chat-app-aka-kwitter",
      storageBucket: "online-chat-app-aka-kwitter.appspot.com",
      messagingSenderId: "638323326987",
      appId: "1:638323326987:web:432a72cd0b98f1d891870e",
      measurementId: "G-B90XNRZFY9"
    };

 firebase.initializeApp(firebaseConfig);

 Name = localStorage.getItem("user_name");
    
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) 
            {
                  childKey  = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
