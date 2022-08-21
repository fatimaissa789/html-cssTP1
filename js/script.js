function text(){

    var colorText = ["red","black"];
    var randomColorText = Math.floor(Math.random() * colorText.length);
    
    
        
        console.log("le texte a changé")
    
        let container1 = document.getElementById("text");
        container1.style.color = colorText[randomColorText];
    
    
       
        console.log("le texte a changé")
    
        let container2 = document.getElementById("text1");
        container2.style.color = colorText[randomColorText];
    
    
       
        console.log("le texte a changé")
     
        let container3 = document.getElementById("text2");
        container3.style.color = colorText[randomColorText];
    
    
      
        console.log("le texte a changé")
    
        let container4 = document.getElementById("text3");
        container4.style.color = colorText[randomColorText];
    
    
    }

let colors = ["blue","yellow"];

let button  = document.getElementById("button-color");
button.addEventListener('click', function(){
   var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let box = document.getElementById("box");
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");


    box.style.background = randomColor;
    box1.style.background = randomColor;
    box2.style.background = randomColor;
    box3.style.background = randomColor;
}

)
//Por le formulaire


function addtable(){
    var table =document.getElementById("contact"),
    newRow= table.inserRow(table.length),
    cell1 = newRow.inserCell(0),
    cell2= newRow.inserCell(1),
    cell3=newRow.inserCell(2),

    nom = document.getElementById("nom").value,
    number = document.getElementById("number").value,
    mail = document.getElementById("mail").value,
    objet = document.getElementById("objet").value,
    msg = document.getElementById("msg").value;

    cell1.innerHTML=nom,
    cell2.innerHTML=number,
    cell3.innerHTML=mail,
    cell1.innerHTML=objet,
    cell1.innerHTML=msg;


}