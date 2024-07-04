document.getElementById("B").onclick = function() {

    var F1 = document.getElementById("E1").value;
    var F1 = F1 / 60 ;
    F1 = Number(F1);

    var F2= document.getElementById("E2").value;
    var F2 = F2 / 12 ;
    F2 = Number(F2);

    var F3= document.getElementById("E3").value;
    var F3= F3 ; 
    F3 = Number(F3);

    var F4 = document.getElementById("E4").value;
    var F4 = F4 * 8 ;
    F4 = Number(F4);

    var F5 = document.getElementById("E5").value;
    var F5 = F5 * 12 ;
    F5 = Number(F5);

    var F6 = document.getElementById("E6").value;
    var F6 = F6 * 24 ;
    F6 = Number(F6);

    var F7 = document.getElementById("E7").value;
    var F7 = F7 / 60 ;
    F7 = Number(F7);
  
    var F8 = document.getElementById("E8").value;
    var F8 = F8 / 12 ;
    F8 = Number(F8);

    var F9 = document.getElementById("E9").value;
    var F9 = F9 ; 
    F9 = Number(F9);

    var F10 = document.getElementById("E10").value;
    var F10 = F10 * 2 ;
    F10 = Number(F10);

    var F11 = document.getElementById("E11").value;
    var F11 = F11 * 8 ;
    F11 = Number(F11);

    var F12 = document.getElementById("E12").value;
    var F12 = F12 * 12 ;
    F12 = Number(F12);
    
    var F13 = document.getElementById("E13").value;
    var F13 = F13 * 24 ;
    F13 = Number(F13);

    var F14 = document.getElementById("E21").value;
    var F14 = F14 / 4 ;
    F14 = Number(F14);

    var F15 = document.getElementById("E22").value;
    var F15 = F15 / 2 ;
    F15 = Number(F15);

    var F16 = document.getElementById("E23").value;
    var F16 = F16 / 4 ;
    F16 = Number(F16);

    var F17 = document.getElementById("E24").value;
    var F17 = F17 / 2 ;
    F17 = Number(F17);
   
   var F = F1 ;
   F = Number(F);
   var F = F + (F2) ;
   F = Number(F);
   var F = F + (F3) ;
   F = Number(F);
   var F = F + (F4) ;
   F = Number(F);
   var F = F + (F5) ;
   F = Number(F);
   var F = F + (F6) ;
   F = Number(F);
   var F = F + (F7) ;
   F = Number(F);
   var F = F + (F8) ;
   F = Number(F);
   var F = F + (F9) ;
   F = Number(F);
   var F = F + (F10) ;
   F = Number(F);
   var F = F + (F11) ;
   F = Number(F);
   var F = F + (F12) ;
   F = Number(F);
   var F = F + (F13) ;
   F = Number(F);
   var F = F + (F14) ;
   F = Number(F);
   var F = F + (F15) ;
   F = Number(F);
   var F = F + (F16) ;
   F = Number(F);
   var F = F + (F17) ;
   F = Number(F);

   var F = Math.trunc(F);
   if(F<999){
    document.getElementById("Ff").innerText = F +"  ساعة";
   }
   if(F>999){
    var f = F / 1000 ;
    var f = Math.trunc(f);
 
    var f1 = F / 1000 ;
    var f1 = f1 - f ;
    var f1 = f1 * 1000;
    var f1 = Math.trunc(f1);
 
    document.getElementById("Ff").innerText = f + "  الف و" + f1 + "  ساعة"   ;
    }
    if(F>999999){
        var f = F / 1000000 ;
        var f = Math.trunc(f);
        
        var f1 = F / 1000;
        var f1 = Math.trunc(f1);
        var f2 = f1 - (f*1000);
        
        document.getElementById("Ff").innerText =  f + " مليون و" + f2 + "  الف " ;
        }




}