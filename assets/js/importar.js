//$(document).ready(function(){
//  $('form input').change(function () {
 //   $('form p').text(this.files.length + " file(s) selected");
 // });
//});


var firebaseConfig = {
  apiKey: "AIzaSyDl07e9wdXNSgaXcYnDjvbqXFE0mVpKaWs",
  authDomain: "p2codes.firebaseapp.com",
  databaseURL: "https://p2codes.firebaseio.com",
  projectId: "p2codes",
  storageBucket: "p2codes.appspot.com",
  messagingSenderId: "94700985925",
  appId: "1:94700985925:web:5d3f9e023539195b224d2c"
};
// Initialize Firebase


firebase.initializeApp(firebaseConfig);
var dbRef = firebase.database();
var contactsRef2 = dbRef.ref('/usuario/frontend/candidatos/Bilbia24');
contactsRef2.set({
  
      teste:{
          CSS:{
              codigo:"hey",
              passou:true,
              fez:true
          },
          HTML:{
              codigo:"hey",
              passou:true,
              fez:true
          },
          JS:{
              codigo:"hey",
              passou:true,
              fez:true
          }
      },
      triagem:{
          curriculo:"quasssseeeee",
          passou:true
      
  }
  })

