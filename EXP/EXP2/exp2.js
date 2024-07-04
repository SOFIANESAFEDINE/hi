
 document.getElementById("B").onclick = function() {

    var F1 = document.getElementById("E1").value;
    var F1 = F1 * 1000000 ;
    F1 = Number(F1); 

    var F2= document.getElementById("E2").value;
    F2 = Number(F2);
 
   var F = F1 / F2 ;
   var T = F * 5 ;

   var F = Math.trunc(F);
   var T = Math.trunc(T);

   document.getElementById("Ff").innerText = F +  (" وحش ") ;
   document.getElementById("Gg").innerText = T +  (" طاقة ") ;
 
 }