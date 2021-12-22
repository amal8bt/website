document.getElementById("login"),addEventListener("submit",function(e){ 

   var erreur;
   var inputs = this.getElementsByTagName("input");

   for (let i = 0; i < inputs.length; i++) { 
       if(!inputs[i].value){
       erreur = "veuillez compléter tous les champs"};
  
   }
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else{
    alert('formulaire envoyé !')
    }
  });
  