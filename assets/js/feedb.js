
let searchParams = new URLSearchParams(window.location.search);
    let params = {};
    for (let pair of searchParams) {
        params[pair[0]] = pair[1];
    }

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
  
  document.getElementsByClassName("title")[0].innerHTML="Teste de "+params["pessoa"];
  firebase.initializeApp(firebaseConfig);
  function aceitar(){
  var dbRef = firebase.database();
 
        var contactsRef2 = dbRef.ref('/usuario/backend/candidatos/'+params["pessoa"]);
          contactsRef2.set({
        
            teste:{
                codigo:"quasssseeeee",
                fez:true,
                passou:true
            
        },
            triagem:{
                curriculo:"quasssseeeee",
                passou:true
            
        }
        })
    }