document.addEventListener('DOMContentLoaded', function() {
    let db = coDesConnect('https://p2codes.firebaseio.com/');
    db.download('/usuario', function(data) {
      var lista=[]
        for(var i of Object.keys(data["backend"]["candidatos"])){
            if(data["backend"]["candidatos"][i]["triagem"]["passou"]==true){
                lista.push(i)
            }     
    }
    novaLista=[]
    for(j in lista){
        novaLista.push(parseInt(j, 10))
    }

    novaLista = novaLista.sort(function(a,b) {
        return (+a) - (+b);
      });

        console.log(novaLista) 
        
  novanovaLista=[]
      for(k in novaLista){
          novanovaLista.push("Bilbia"+k.toString())
      }
      coDesReplace(".section2", novanovaLista);
      document.getElementsByClassName("Bilbia"+novaLista[0].toString())[0].style.borderTopLeftRadius = "1.5rem";
      document.getElementsByClassName("Bilbia"+novaLista[0].toString())[0].style.borderTopRightRadius = "1.5rem";
document.getElementsByClassName("Bilbia"+novaLista[novaLista.length-1].toString())[0].style.borderBottomLeftRadius = "1.5rem";
document.getElementsByClassName("Bilbia"+novaLista[novaLista.length-1].toString())[0].style.borderBottomRightRadius = "1.5rem";
for(var h of novanovaLista){
    console.log(h)
    if(data["backend"]["candidatos"][h]["teste"]["passou"]==true){
        console.log("oi")
        document.getElementsByClassName(h.toString())[0].style.backgroundColor = "rgb(17, 221, 170)";
        document.getElementsByClassName(h.toString())[0].style.color = "white";
    }
}
    });

  })


/*
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
  
    contactsRef.once("value", function(snap) {
        let i=0
        for(let selecao of Object.keys(snap.val()["frontend"]["candidatos"])){
         console.log(selecao) 
        document.createElement("div")
         i+=1

         }
    })
*/