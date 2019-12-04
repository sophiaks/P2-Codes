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
var contactsRef = dbRef.ref('/usuario');
function add(){
    contactsRef.once("value", function(snap) {
    let i=0
    for(let selecao of Object.values(snap.val()["frontend"])){
            for(let nome of Object.values(selecao)){
                i+=1 
            }     
        }
    var contactsRef2 = dbRef.ref('/usuario/frontend/candidatos/Bilbia'+i.toString());
    var x = document.createElement("IMG");
    x.setAttribute("src", "assets/img/curriculo.jpg");
    x.setAttribute("width", "30rem");
    x.setAttribute("height", "30rem");
    x.setAttribute("margin", "10rem");
  document.getElementsByClassName("section5")[0].appendChild(x);
    contactsRef2.set({
  
      teste:{
        codigo:"quasssseeeee",
        fez:false,
        passou:false
    
},
      triagem:{
          curriculo:"quasssseeeee",
          passou:false
      
  }
  })
})
contactsRef.once("value", function(snap) {
  let i=0
  for(let selecao of Object.values(snap.val()["backend"])){
          for(let nome of Object.values(selecao)){
              i+=1 
          }     
      }
  var contactsRef2 = dbRef.ref('/usuario/backend/candidatos/Bilbia'+i.toString());
  var x = document.createElement("IMG");
  x.setAttribute("src", "assets/img/curriculo.jpg");
  x.setAttribute("width", "30rem");
  x.setAttribute("height", "30rem");
  x.setAttribute("margin", "10rem");
document.getElementsByClassName("section5")[0].appendChild(x);
  contactsRef2.set({

    teste:{
      codigo:"quasssseeeee",
      fez:false,
      passou:false
  
},
    triagem:{
        curriculo:"quasssseeeee",
        passou:false
    
}
})
})

    


}

