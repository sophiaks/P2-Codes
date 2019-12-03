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
  var ponto=""
  function aceitar(){
    contactsRef.once("value", function(snap) {
        let i=0
        for(let selecao of Object.values(snap.val()["frontend"])){
                for(let nome of Object.values(selecao)){
                    i+=1
                    if(nome["triagem"]["passou"]==false){
                        ponto=Object.keys(selecao)[i-1]
                       break;
                    }
                }     
            }
    console.log(i)
    
            
    var contactsRef2 = dbRef.ref('/usuario/frontend/candidatos/'+ponto.toString());
      contactsRef2.set({
    
        teste:{
            passou:false,
            codigo:"frerfe",
            fez:false
        },
        triagem:{
            curriculo:"quasssseeeee",
            passou:true
        
    }
    })



})

  }
 

  
  
  
  