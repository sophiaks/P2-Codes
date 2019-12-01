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
      coDesReplace(".section2", lista);
    });
  })