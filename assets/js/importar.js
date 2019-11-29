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

function add(i){
firebase.initializeApp(firebaseConfig);
var dbRef = firebase.database();
var contactsRef2 = dbRef.ref('/usuario/frontend/candidatos/Bilbia'+i.toString());
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
}
function numero(){
  firebase.initializeApp(firebaseConfig);
  var dbRef = firebase.database();
  var contactsRef = dbRef.ref('/usuario');

let i=0
contactsRef.once("value", function(snap) {
  
    for(let selecao of Object.values(snap.val()["frontend"])){
            this.i+=1
            } 
            return this.i       
        }
   
      )
      return i
}
console.log(numero())