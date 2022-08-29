function text(){

    var colorText = ["red","black"];
    var randomColorText = Math.floor(Math.random() * colorText.length);
    
    
        
        console.log("le texte a changé")
    
        let container1 = document.getElementById("text");
        container1.style.color = colorText[randomColorText];
    
    
       
        console.log("le texte a changé"); 
    
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
//Pour le formulaire

let btnEnvoyerFormulaire = document.getElementById("boutton");
console.log(btnEnvoyerFormulaire);


btnEnvoyerFormulaire.addEventListener("click", function() {
    //récuperer les données du formulaire
   var name =document.getElementById("nom").value;
   console.log(name);

   var prenom =document.getElementById("prenom").value;
   console.log(prenom);

   var formulaire =document.getElementById("texteFormulaire").value;
   console.log(formulaire);
    //stocker les données dans le localStorage
   localStorage.setItem("Nom",name);
    localStorage.setItem("Prénom",prenom);
    localStorage.setItem("Formulaire",formulaire);


    //recuperer et afficher les donnés
    var monnom=localStorage.getItem('Nom');
      document.querySelector("#leNom").innerHTML = monnom;
     
     var monprenom = localStorage.getItem('Prénom');
      document.querySelector("#lePrenom").innerHTML = monprenom;

      var monform = localStorage.getItem('Formulaire');
      document.querySelector("#leTexteFormulaire").innerHTML = monform;
      //document.getElementById("#leTexteFormulaire").innerHTML = localStorage.getItem("le nom");


});
const saisie = document.getElementsByClassName('form-control')
const submitBtn = document.getElementById('boutton')
let donnee = {}
let infos = []
for(let i = 0; i<saisie.length;i++){
    saisie[i].addEventListener('keyup', ()=> {
        let value = saisie[i].value
        let id = saisie[i].id
        donnee[id] = value
    })
}


submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    for(let i = 0; i<saisie.length;i++){
        let affichErreur = document.getElementById(saisie[i].id+'-erreur');
        if (saisie[i].value === "") {
            affichErreur.innerHTML = "<p>*Ce champ est requis</p>"
        } else {
            affichErreur.innerHTML = ""
        }
    }
})

infos.push(donnee)
console.table(infos) 


