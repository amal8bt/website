
  document.getElementById("login"),addEventListener("submit",function(){ 
    alert('Formulaire envoyée')
  });
  function myFunction() {
    var x = document.getElementById("myMenu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }
