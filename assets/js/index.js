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

    let i=0
    let j=0
contactsRef.once("value", function(snap) {
    for(let selecao of Object.values(snap.val()["frontend"])){
            for(let nome of Object.values(selecao)){
                i+=1
                if(nome["triagem"]["passou"]==true){
                    j+=1
                }
            }     
        }
        var bar1=document.getElementsByClassName("barra1")[0]
        bar1.style.width = j/i*10+'rem';
        var p1=document.getElementsByClassName("porcentagem1")[0]
        p1.innerHTML=+parseInt(j/i*100)+"%"
})

    let k=0
    let u=0
contactsRef.once("value", function(snap) {
    for(let selecao of Object.values(snap.val()["frontend"])){
            for(let nome of Object.values(selecao)){
            
                if(nome["triagem"]["passou"]==true){
                    k+=1
                    if(nome["teste"]["HTML"]["fez"]==true && nome["teste"]["CSS"]["fez"]==true && nome["teste"]["JS"]["fez"]==true){
                        u+=1
                    }
                }
            }     
        }
        var bar1=document.getElementsByClassName("barra2")[0]
        bar1.style.width = u/k*10+'rem';
        var p1=document.getElementsByClassName("porcentagem2")[0]
        p1.innerHTML=parseInt(u/k*100)+"%"
})

let p=0
let q=0
contactsRef.once("value", function(snap) {
for(let selecao of Object.values(snap.val()["frontend"])){
        for(let nome of Object.values(selecao)){
        
            if(nome["triagem"]["passou"]==true){
                p+=1
                if(nome["teste"]["HTML"]["passou"]==true && nome["teste"]["CSS"]["passou"]==true && nome["teste"]["JS"]["passou"]==true){
                    q+=1
                }
            }
        }     
    }
    var bar1=document.getElementsByClassName("barra3")[0]
    bar1.style.width = q/p*10+'rem';
    var p1=document.getElementsByClassName("porcentagem3")[0]
    p1.innerHTML=parseInt(q/p*100)+"%"
})




    

    
 

 

