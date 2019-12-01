document.addEventListener('DOMContentLoaded', function() {
    let db = coDesConnect('https://p2codes.firebaseio.com/');
    db.download('/usuario', function(data) {
      var lista=[]
        for(i of Object.keys(data["frontend"]["candidatos"])){
            if(data["frontend"]["candidatos"][i]["triagem"]["passou"]==true){
                lista.push(i)
            }     
    }
    
        console.log(lista)
        console.log("Bilbia"+(lista.length-1).toString())
      coDesReplace(".section2", lista);
document.getElementsByClassName("Bilbia"+(lista.length-1).toString())[0].style.borderBottomLeftRadius = "1.5rem";
document.getElementsByClassName("Bilbia"+(lista.length-1).toString())[0].style.borderBottomRightRadius = "1.5rem";
    });

  })
