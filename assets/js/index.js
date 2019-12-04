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
function plusSlides(){
        document.getElementsByClassName("triagem-grafico")[0].style.display="none"
        document.getElementsByClassName("triagem-grafico-backend")[0].style.display="flex"
}
function minusSlides(){
    document.getElementsByClassName("triagem-grafico")[0].style.display="flex"
    document.getElementsByClassName("triagem-grafico-backend")[0].style.display="none"
}

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

let y=0
let r=0
contactsRef.once("value", function(snap) {
for(let selecao of Object.values(snap.val()["backend"])){
        for(let nome of Object.values(selecao)){
            y+=1
            if(nome["triagem"]["passou"]==true){
                r+=1
            }
        }     
    }
    var bar1=document.getElementsByClassName("barra1-backend")[0]
    bar1.style.width = r/y*10+'rem';
    var p1=document.getElementsByClassName("porcentagem1-backend")[0]
    p1.innerHTML=+parseInt(r/y*100)+"%"
})
    let k=0
    let u=0
contactsRef.once("value", function(snap) {
    for(let selecao of Object.values(snap.val()["frontend"])){
            for(let nome of Object.values(selecao)){
                k+=1
                if(nome["triagem"]["passou"]==true){
                    if(nome["teste"]["fez"]==true){
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
let b=0
let n=0
contactsRef.once("value", function(snap) {
    for(let selecao of Object.values(snap.val()["backend"])){
            for(let nome of Object.values(selecao)){
                b+=1
                if(nome["triagem"]["passou"]==true){
                    if(nome["teste"]["fez"]==true){
                        n+=1
                    }
                }
            }     
        }
        var bar1=document.getElementsByClassName("barra2-backend")[0]
        bar1.style.width = n/b*10+'rem';
        var p1=document.getElementsByClassName("porcentagem2-backend")[0]
        p1.innerHTML=parseInt(n/b*100)+"%"
})

let p=0
let q=0
contactsRef.once("value", function(snap) {
for(let selecao of Object.values(snap.val()["frontend"])){
        for(let nome of Object.values(selecao)){
        p+=1
            if(nome["triagem"]["passou"]==true){
                if(nome["teste"]["passou"]==true){
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

let s=0
let d=0
contactsRef.once("value", function(snap) {
for(let selecao of Object.values(snap.val()["backend"])){
        for(let nome of Object.values(selecao)){
        s+=1
            if(nome["triagem"]["passou"]==true){
                if(nome["teste"]["passou"]==true){
                    d+=1
                }
            }
        }     
    }
    var bar1=document.getElementsByClassName("barra3-backend")[0]
    bar1.style.width = d/s*10+'rem';
    var p1=document.getElementsByClassName("porcentagem3-backend")[0]
    p1.innerHTML=parseInt(d/s*100)+"%"
})

contactsRef.once("value", function(snap) {
   var k=0
    for(let selecao of Object.keys(snap.val()["frontend"]["candidatos"])){
         
                if(snap.val()["frontend"]["candidatos"][selecao]["teste"]["passou"]==true && k%2==0){
                 
                        var contactsRef2 = dbRef.ref('/usuario/frontend/candidatos/'+selecao);
                        contactsRef2.set({
                      
                          teste:{
                              passou:false,
                              codigo:"frerfe",
                              fez:true
                          },
                          triagem:{
                              curriculo:"quasssseeeee",
                              passou:true
                          
                      }
                      })
                      k+=1
            }
                
        }
    })

    contactsRef.once("value", function(snap) {
        var h=0
         for(let selecao of Object.keys(snap.val()["backend"]["candidatos"])){
              
                     if(snap.val()["backend"]["candidatos"][selecao]["teste"]["passou"]==true && h%2==0){
                      
                             var contactsRef2 = dbRef.ref('/usuario/backend/candidatos/'+selecao);
                             contactsRef2.set({
                           
                               teste:{
                                   passou:false,
                                   codigo:"frerfe",
                                   fez:true
                               },
                               triagem:{
                                   curriculo:"quasssseeeee",
                                   passou:true
                               
                           }
                           })
                           h+=1
                 }
                     
             }
         })




    

    
 

 

