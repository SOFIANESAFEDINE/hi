
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

   //console.log(" كمية التسريعات [ساعة]", F ) ;

   var T4 = document.getElementById("E18").value;
   var T4 = T4 / 3600;
   T4 = Number(T4);
  // console.log(T4);

   var T3 = document.getElementById("E17").value;
   var T3 = T3 / 60 ;
   T3 = Number(T3);
 //  console.log(T3);

   var T2 = document.getElementById("E16").value;
   var T2 = T2 ;
   T2 = Number(T2);
 //  console.log(T2);
   
   var T1 = document.getElementById("E15").value;
   var T1 = T1 * 24;
   T1 = Number(T1);
 //  console.log(T1);

   var K = document.getElementById("E14").value;
   K = Number(K);
 //  console.log(K);

   var T = T1 + T2 + T3 + T4 ;
 //  var T = T / 60 ;
 //  console.log(T);

   J = Number(J);
   var J = (K * F) / T ;
    var J = Math.trunc(J);
   //console.log("كمية الجنود المدربة", J);

   var M = document.getElementById("E19").value;
   M = Number(M);
   var M = M * J
   var M = Math.trunc(M);
   var F = Math.trunc(F);

   if(F<999){
    document.getElementById("Ff").innerText = F +"  ساعة";
   }
   if(J<999){
    document.getElementById("Jj").innerText = M +"  جندي";
   }
   if(M<999){
    document.getElementById("Tt").innerText = M ;
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
   if(J>999){
   var j = J / 1000 ;
   var j = Math.trunc(j);

   var j1 = J / 1000 ;
   var j1 = j1 - j ;
   var j1 = j1 * 1000;
   var j1 = Math.trunc(j1);

   document.getElementById("Jj").innerText = j + "  الف و"+ j1 + "  جندي"    ;
   }
   if(M>999){
   var m = M / 1000 ;
   var m = Math.trunc(m);

   var m1 = M / 1000 ;
   var m1 = m1 - m ;
   var m1 = m1 * 1000;
   var m1 = Math.trunc(m1);

   document.getElementById("Tt").innerText =m +"  الف و"+  m1 ;
   }

if(F>999999){
var f = F / 1000000 ;
var f = Math.trunc(f);
 
var f1 = F / 1000;
var f1 = Math.trunc(f1);
var f2 = f1 - (f*1000);

document.getElementById("Ff").innerText =  f + " مليون و" + f2 + "  الف " ;
}
if(J>999999){
var j = J / 1000000 ;
var j = Math.trunc(j);

var j1 = J / 1000;
var j1 = Math.trunc(j1);
var j2 = j1 - (j*1000);

document.getElementById("Jj").innerText = j + " مليون و"  + j2 + " الف" ;
}
if(M>999999){
var m = M / 1000000 ;
var m = Math.trunc(m);

var m1 = M / 1000;
var m1 = Math.trunc(m1);
var m2 = m1 - (m*1000);


document.getElementById("Tt").innerText = m + " مليون و" +m2  + "  الف "  ;
}

var H = document.getElementById("E20").value;
H =Number(H);
var Tkh = document.getElementById("E20").value;
var Tkh = Tkh / 100;

var M1= ( J * 1000) ;
var M1= M1 - (M1 * Tkh);
var M1= M1/1000000;
M1= Math.trunc(M1);
//document.getElementById("T6").innerText = M1 ;

if(M1<999){
 document.getElementById("T6").innerText = M1 + "  مليون " ;
}

if(M1>999){
var MM1 = M1 / 1000 ;
var MM1 = Math.trunc(MM1);

var mm1 = M1 / 1000 ;
var mm1 = mm1 - MM1 ;
var mm1 = mm1 * 1000;
var mm1 = Math.trunc(mm1);

document.getElementById("T6").innerText = MM1 + " مليار و " + mm1 + "  مليون "   ;
}


var M2= ( J * 460) ;
var M2= M2 - (M2 * Tkh);
var M2= M2/1000000;
M2= Math.trunc(M2);
//document.getElementById("T5").innerText = M2 ;

if(M2<999){
 document.getElementById("T5").innerText = M2 + "  مليون " ;
}

if(M2>999){
var MM2 = M2 / 1000 ;
var MM2 = Math.trunc(MM2);

var mm2 = M2 / 1000 ;
var mm2 = mm2 - MM2 ;
var mm2 = mm2 * 1000;
var mm2 = Math.trunc(mm2);

document.getElementById("T5").innerText = MM2 + " مليار و " + mm2 + "  مليون "   ;
}

var M3= ( J * 100) ;
var M3= M3 - (M3 * Tkh);
var M3= M3/1000000;
M3= Math.trunc(M3);
//document.getElementById("T4").innerText = M3 ;

if(M3<999){
 document.getElementById("T4").innerText = M3 + "  مليون " ;
}

if(M3>999){
var MM3 = M3 / 1000 ;
var MM3 = Math.trunc(MM3);

var mm3 = M3 / 1000 ;
var mm3 = mm3 - MM3 ;
var mm3 = mm3 * 1000;
var mm3 = Math.trunc(mm3);

document.getElementById("T4").innerText = MM3 + " مليار و " + mm3 + "  مليون "   ;
}

var M4= ( J * 20) ;
var M4= M4 - (M4 * Tkh);
var M4= M4/1000000;
M4= Math.trunc(M4);
//document.getElementById("T10").innerText = M4 ;

if(M4<999){
 document.getElementById("T10").innerText = M4 + "  مليون " ;
}

if(M4>999){
var MM4 = M4 / 1000 ;
var MM4 = Math.trunc(MM4);

var mm4 = M4 / 1000 ;
var mm4 = mm4 - MM4 ;
var mm4 = mm4 * 1000;
var mm4 = Math.trunc(mm4);

document.getElementById("T10").innerText = MM4 + " مليار و " + mm4 + "  مليون "   ;
}

var M5= ( J * 20) ;
var M5= M5 - (M5 * Tkh);
var M5= M5/1000000;
M5= Math.trunc(M5);
//document.getElementById("T9").innerText = M5 ;

if(M5<999){
 document.getElementById("T9").innerText = M5 + "  مليون " ;
}

if(M5>999){
var MM5 = M5 / 1000 ;
var MM5 = Math.trunc(MM5);

var mm5 = M5 / 1000 ;
var mm5 = mm5 - MM5 ;
var mm5 = mm5 * 1000;
var mm5 = Math.trunc(mm5);

document.getElementById("T9").innerText = MM5 + " مليار و " + mm5 + "  مليون "   ;
}

   document.getElementById("B1").onclick = function(){
    document.getElementById("B1").innerText = "تم تفعيل %20";
    document.getElementById("B2").innerText = "25%";
    document.getElementById("B3").innerText = "30%";
    document.getElementById("B4").innerText = "35%";
    document.getElementById("B5").innerText = "40%";
   
    var Tkh20 = M1 ;
    var Tkh20 = Tkh20 - (Tkh20 * 0.2);
    var Tkh20 = Math.trunc(Tkh20);
    document.getElementById("T16").innerText = Tkh20 ;
    
    var Tkh202 = M2 ;
    var Tkh202 = Tkh202 - (Tkh202 * 0.2);
    var Tkh202 = Math.trunc(Tkh202);
    document.getElementById("T15").innerText = Tkh202 ;

    var Tkh203 = M3 ;
    var Tkh203 = Tkh203 - (Tkh203 * 0.2);
    var Tkh203 = Math.trunc(Tkh203);
    document.getElementById("T14").innerText = Tkh203;

    var Tkh204 = M4 ;
    var Tkh204= Tkh204 - (Tkh204 * 0.2);
    var Tkh204 = Math.trunc(Tkh204);
    document.getElementById("T20").innerText = Tkh204 ;

    var Tkh205 = M5 ;
    var Tkh205= Tkh205 - (Tkh205 * 0.2);
    var Tkh205 = Math.trunc(Tkh205);
    document.getElementById("T19").innerText = Tkh205 ;

   
   }
   
   document.getElementById("B1").onclick = function(){
    document.getElementById("B1").innerText = "تم تفعيل %20";
    document.getElementById("B2").innerText = "25%";
    document.getElementById("B3").innerText = "30%";
    document.getElementById("B4").innerText = "35%";
    document.getElementById("B5").innerText = "40%";
   
    var Tkh20 = M1 ;
    var Tkh20 = Tkh20 - (Tkh20 * 0.2);
    var Tkh20 = Math.trunc(Tkh20);
    //document.getElementById("T16").innerText = Tkh20 ;

    if(Tkh20<999){
      document.getElementById("T16").innerText = Tkh20 + "  مليون " ;
     }
  
     if(Tkh20>999){
     var tkh20 = Tkh20 / 1000 ;
     var tkh20 = Math.trunc(tkh20);
  
     var TKH20 = Tkh20 / 1000 ;
     var TKH20 = TKH20 - tkh20 ;
     var TKH20 = TKH20 * 1000;
     var TKH20 = Math.trunc(TKH20);
  
     document.getElementById("T16").innerText = tkh20 + " مليار و " + TKH20 + "  مليون "   ;
     }
    
    var Tkh202 = M2 ;
    var Tkh202 = Tkh202 - (Tkh202 * 0.2);
    var Tkh202 = Math.trunc(Tkh202);
    //document.getElementById("T15").innerText = Tkh202 ;

    if(Tkh202<999){
      document.getElementById("T15").innerText = Tkh202 + "  مليون " ;
     }
  
     if(Tkh202>999){
     var tkh202 = Tkh202 / 1000 ;
     var tkh202 = Math.trunc(tkh202);
  
     var TKH202 = Tkh202 / 1000 ;
     var TKH202 = TKH202 - tkh202 ;
     var TKH202 = TKH202 * 1000;
     var TKH202 = Math.trunc(TKH202);
  
     document.getElementById("T15").innerText = tkh202 + " مليار و " + TKH202 + "  مليون "   ;
     }
    var Tkh203 = M3 ;
    var Tkh203 = Tkh203 - (Tkh203 * 0.2);
    var Tkh203 = Math.trunc(Tkh203);
    //document.getElementById("T14").innerText = Tkh203;

    if(Tkh203<999){
      document.getElementById("T14").innerText = Tkh203 + "  مليون " ;
     }
  
     if(Tkh203>999){
     var tkh203 = Tkh203 / 1000 ;
     var tkh203 = Math.trunc(tkh203);
  
     var TKH203 = Tkh203 / 1000 ;
     var TKH203 = TKH203 - tkh203 ;
     var TKH203 = TKH203 * 1000;
     var TKH203 = Math.trunc(TKH203);
  
     document.getElementById("T14").innerText = tkh203 + " مليار و " + TKH203 + "  مليون "   ;
     }

    var Tkh204 = M4 ;
    var Tkh204= Tkh204 - (Tkh204 * 0.2);
    var Tkh204 = Math.trunc(Tkh204);
    //document.getElementById("T20").innerText = Tkh204 ;

    if(Tkh204<999){
      document.getElementById("T20").innerText = Tkh204 + "  مليون " ;
     }
  
     if(Tkh204>999){
     var tkh204 = Tkh204 / 1000 ;
     var tkh204 = Math.trunc(tkh204);
  
     var TKH204 = Tkh204 / 1000 ;
     var TKH204 = TKH204 - tkh204 ;
     var TKH204 = TKH204 * 1000;
     var TKH204 = Math.trunc(TKH204);
  
     document.getElementById("T20").innerText = tkh204 + " مليار و " + TKH204 + "  مليون "   ;
     }

    var Tkh205 = M5 ;
    var Tkh205= Tkh205 - (Tkh205 * 0.2);
    var Tkh205 = Math.trunc(Tkh205);
    //document.getElementById("T19").innerText = Tkh205 ;

    if(Tkh205<999){
      document.getElementById("T19").innerText = Tkh205 + "  مليون " ;
     }
  
     if(Tkh205>999){
     var tkh205 = Tkh205 / 1000 ;
     var tkh205 = Math.trunc(tkh205);
  
     var TKH205 = Tkh205 / 1000 ;
     var TKH205 = TKH205 - tkh205 ;
     var TKH205 = TKH205 * 1000;
     var TKH205 = Math.trunc(TKH205);
  
     document.getElementById("T19").innerText = tkh205 + " مليار و " + TKH205 + "  مليون "   ;
     }

   
   }
   
   document.getElementById("B2").onclick = function(){
     document.getElementById("B1").innerText = "20%";
     document.getElementById("B2").innerText = "25% تم تفعيل";
     document.getElementById("B3").innerText = "30%";
     document.getElementById("B4").innerText = "35%";
     document.getElementById("B5").innerText = "40%";

     var Tkh25 = M1 ;
    var Tkh25 = Tkh25 - (Tkh25 * 0.25);
    var Tkh25 = Math.trunc(Tkh25);
    //document.getElementById("T16").innerText = Tkh25 ;

    if(Tkh25<999){
      document.getElementById("T16").innerText = Tkh25 + "  مليون " ;
     }
  
     if(Tkh25>999){
     var tkh25 = Tkh25 / 1000 ;
     var tkh25 = Math.trunc(tkh25);
  
     var TKH25 = Tkh25 / 1000 ;
     var TKH25 = TKH25 - tkh25 ;
     var TKH25 = TKH25 * 1000;
     var TKH25 = Math.trunc(TKH25);
  
     document.getElementById("T16").innerText = tkh25 + " مليار و " + TKH25 + "  مليون "   ;
     }
    
    var Tkh252 = M2 ;
    var Tkh252 = Tkh252 - (Tkh252 * 0.25);
    var Tkh252 = Math.trunc(Tkh252);
    //document.getElementById("T15").innerText = Tkh252 ;

    if(Tkh252<999){
      document.getElementById("T15").innerText = Tkh252 + "  مليون " ;
     }
  
     if(Tkh252>999){
     var tkh252 = Tkh252 / 1000 ;
     var tkh252 = Math.trunc(tkh252);
  
     var TKH252 = Tkh252 / 1000 ;
     var TKH252 = TKH252 - tkh252 ;
     var TKH252 = TKH252 * 1000;
     var TKH252 = Math.trunc(TKH252);
  
     document.getElementById("T15").innerText = tkh252 + " مليار و " + TKH252 + "  مليون "   ;
     }

    var Tkh253 = M3 ;
    var Tkh253 = Tkh253 - (Tkh253 * 0.25);
    var Tkh253 = Math.trunc(Tkh253);
    //document.getElementById("T14").innerText = Tkh253;

    if(Tkh253<999){
      document.getElementById("T14").innerText = Tkh253 + "  مليون " ;
     }
  
     if(Tkh253>999){
     var tkh253 = Tkh253 / 1000 ;
     var tkh253 = Math.trunc(tkh253);
  
     var TKH253 = Tkh253 / 1000 ;
     var TKH253 = TKH253 - tkh253 ;
     var TKH253 = TKH253 * 1000;
     var TKH253 = Math.trunc(TKH253);
  
     document.getElementById("T14").innerText = tkh253 + " مليار و " + TKH253 + "  مليون "   ;
     }

    var Tkh254 = M4 ;
    var Tkh254= Tkh254 - (Tkh254 * 0.25);
    var Tkh254 = Math.trunc(Tkh254);
    //document.getElementById("T20").innerText = Tkh254 ;

    if(Tkh254<999){
      document.getElementById("T20").innerText = Tkh254 + "  مليون " ;
     }
  
     if(Tkh254>999){
     var tkh254 = Tkh254 / 1000 ;
     var tkh254 = Math.trunc(tkh254);
  
     var TKH254 = Tkh254 / 1000 ;
     var TKH254 = TKH254 - tkh254 ;
     var TKH254 = TKH254 * 1000;
     var TKH254 = Math.trunc(TKH254);
  
     document.getElementById("T20").innerText = tkh254 + " مليار و " + TKH254 + "  مليون "   ;
     }

    var Tkh255 = M5 ;
    var Tkh255= Tkh255 - (Tkh255 * 0.25);
    var Tkh255 = Math.trunc(Tkh255);
    //document.getElementById("T19").innerText = Tkh255 ;

    if(Tkh255<999){
      document.getElementById("T19").innerText = Tkh255 + "  مليون " ;
     }
  
     if(Tkh255>999){
     var tkh255 = Tkh255 / 1000 ;
     var tkh255 = Math.trunc(tkh255);
  
     var TKH255 = Tkh255 / 1000 ;
     var TKH255 = TKH255 - tkh255 ;
     var TKH255 = TKH255 * 1000;
     var TKH255 = Math.trunc(TKH255);
  
     document.getElementById("T19").innerText = tkh255 + " مليار و " + TKH255 + "  مليون "   ;
     }
   
   }
   document.getElementById("B3").onclick = function(){
     document.getElementById("B1").innerText = "20%";
     document.getElementById("B2").innerText = "25%";
     document.getElementById("B3").innerText = "30% تم تفعيل";
     document.getElementById("B4").innerText = "35%";
     document.getElementById("B5").innerText = "40%";

     var Tkh30 = M1 ;
    var Tkh30 = Tkh30 - (Tkh30 * 0.3);
    var Tkh30 = Math.trunc(Tkh30);
   // document.getElementById("T16").innerText = Tkh30 ;

   if(Tkh30<999){
    document.getElementById("T16").innerText = Tkh30 + "  مليون " ;
   }

   if(Tkh30>999){
   var tkh30 = Tkh30 / 1000 ;
   var tkh30 = Math.trunc(tkh30);

   var TKH30 = Tkh30 / 1000 ;
   var TKH30 = TKH30 - tkh30 ;
   var TKH30 = TKH30 * 1000;
   var TKH30 = Math.trunc(TKH30);

   document.getElementById("T16").innerText = tkh30 + " مليار و " + TKH30 + "  مليون "   ;
   }
    
    var Tkh302 = M2 ;
    var Tkh302 = Tkh302 - (Tkh302 * 0.3);
    var Tkh302 = Math.trunc(Tkh302);
   // document.getElementById("T15").innerText = Tkh302 ;

   if(Tkh302<999){
    document.getElementById("T15").innerText = Tkh302 + "  مليون " ;
   }

   if(Tkh302>999){
   var tkh302 = Tkh302 / 1000 ;
   var tkh302 = Math.trunc(tkh302);

   var TKH302 = Tkh302 / 1000 ;
   var TKH302 = TKH302 - tkh302 ;
   var TKH302 = TKH302 * 1000;
   var TKH302 = Math.trunc(TKH302);

   document.getElementById("T15").innerText = tkh302 + " مليار و " + TKH302 + "  مليون "   ;
   }

    var Tkh303 = M3 ;
    var Tkh303 = Tkh303 - (Tkh303 * 0.3);
    var Tkh303 = Math.trunc(Tkh303);
    //document.getElementById("T14").innerText = Tkh303;

    if(Tkh303<999){
      document.getElementById("T14").innerText = Tkh303 + "  مليون " ;
     }
  
     if(Tkh303>999){
     var tkh303 = Tkh303 / 1000 ;
     var tkh303 = Math.trunc(tkh303);
  
     var TKH303 = Tkh303 / 1000 ;
     var TKH303 = TKH303 - tkh303 ;
     var TKH303 = TKH303 * 1000;
     var TKH303 = Math.trunc(TKH303);
  
     document.getElementById("T14").innerText = tkh303 + " مليار و " + TKH303 + "  مليون "   ;
     }

    var Tkh304 = M4 ;
    var Tkh304= Tkh304 - (Tkh304 * 0.3);
    var Tkh304 = Math.trunc(Tkh304);
    //document.getElementById("T20").innerText = Tkh304 ;

    if(Tkh304<999){
      document.getElementById("T20").innerText = Tkh304 + "  مليون " ;
     }
  
     if(Tkh304>999){
     var tkh304 = Tkh304 / 1000 ;
     var tkh304 = Math.trunc(tkh304);
  
     var TKH304 = Tkh304 / 1000 ;
     var TKH304 = TKH304 - tkh304 ;
     var TKH304 = TKH304 * 1000;
     var TKH304 = Math.trunc(TKH304);
  
     document.getElementById("T20").innerText = tkh304 + " مليار و " + TKH304 + "  مليون "   ;
     }

    var Tkh305 = M5 ;
    var Tkh305= Tkh305 - (Tkh305 * 0.3);
    var Tkh305= Math.trunc(Tkh305);
    //document.getElementById("T19").innerText = Tkh305 ;

    if(Tkh305<999){
      document.getElementById("T19").innerText = Tkh305 + "  مليون " ;
     }
  
     if(Tkh305>999){
     var tkh305 = Tkh305 / 1000 ;
     var tkh305 = Math.trunc(tkh305);
  
     var TKH305 = Tkh305 / 1000 ;
     var TKH305 = TKH305 - tkh305 ;
     var TKH305 = TKH305 * 1000;
     var TKH305 = Math.trunc(TKH305);
  
     document.getElementById("T19").innerText = tkh305 + " مليار و " + TKH305 + "  مليون "   ;
     }
   
   }
   document.getElementById("B4").onclick = function(){
     document.getElementById("B1").innerText = "20%";
     document.getElementById("B2").innerText = "25%";
     document.getElementById("B3").innerText = "30%";
     document.getElementById("B4").innerText = "35% تم تفعيل";
     document.getElementById("B5").innerText = "40%";

     var Tkh35 = M1 ;
    var Tkh35 = Tkh35 - (Tkh35 * 0.35);
    var Tkh35 = Math.trunc(Tkh35);
  //  document.getElementById("T16").innerText = Tkh35 ;

  if(Tkh35<999){
    document.getElementById("T16").innerText = Tkh35 + "  مليون " ;
   }

   if(Tkh35>999){
   var tkh35 = Tkh35 / 1000 ;
   var tkh35 = Math.trunc(tkh35);

   var TKH35 = Tkh35 / 1000 ;
   var TKH35 = TKH35 - tkh35 ;
   var TKH35 = TKH35 * 1000;
   var TKH35 = Math.trunc(TKH35);

   document.getElementById("T16").innerText = tkh35 + " مليار و " + TKH35 + "  مليون "   ;
   }
    
    var Tkh352 = M2 ;
    var Tkh352 = Tkh352 - (Tkh352 * 0.35);
    var Tkh352 = Math.trunc(Tkh352);
   // document.getElementById("T15").innerText = Tkh352 ;

   if(Tkh352<999){
    document.getElementById("T15").innerText = Tkh352 + "  مليون " ;
   }

   if(Tkh352>999){
   var tkh352 = Tkh352 / 1000 ;
   var tkh352 = Math.trunc(tkh352);

   var TKH352 = Tkh352 / 1000 ;
   var TKH352 = TKH352 - tkh352 ;
   var TKH352 = TKH352 * 1000;
   var TKH352 = Math.trunc(TKH352);

   document.getElementById("T15").innerText = tkh352 + " مليار و " + TKH352 + "  مليون "   ;
   }

    var Tkh353 = M3 ;
    var Tkh353 = Tkh353 - (Tkh353 * 0.35);
    var Tkh353 = Math.trunc(Tkh353);
   // document.getElementById("T14").innerText = Tkh353;

   if(Tkh353<999){
    document.getElementById("T14").innerText = Tkh353 + "  مليون " ;
   }

   if(Tkh353>999){
   var tkh353 = Tkh353 / 1000 ;
   var tkh353 = Math.trunc(tkh353);

   var TKH353 = Tkh353 / 1000 ;
   var TKH353 = TKH353 - tkh353 ;
   var TKH353 = TKH353 * 1000;
   var TKH353 = Math.trunc(TKH353);

   document.getElementById("T14").innerText = tkh353 + " مليار و " + TKH353 + "  مليون "   ;
   }

    var Tkh354 = M4 ;
    var Tkh354= Tkh354 - (Tkh354 * 0.35);
    var Tkh354 = Math.trunc(Tkh354);
    //document.getElementById("T20").innerText = Tkh354 ;

    if(Tkh354<999){
      document.getElementById("T20").innerText = Tkh354 + "  مليون " ;
     }
  
     if(Tkh354>999){
     var tkh354 = Tkh354 / 1000 ;
     var tkh354 = Math.trunc(tkh354);
  
     var TKH354 = Tkh354 / 1000 ;
     var TKH354 = TKH354 - tkh354 ;
     var TKH354 = TKH354 * 1000;
     var TKH354 = Math.trunc(TKH354);
  
     document.getElementById("T20").innerText = tkh354 + " مليار و " + TKH354 + "  مليون "   ;
     }

    var Tkh355 = M5 ;
    var Tkh355= Tkh355 - (Tkh355 * 0.35);
    var Tkh355 = Math.trunc(Tkh355);
    //document.getElementById("T19").innerText = Tkh355 ;

    if(Tkh355<999){
      document.getElementById("T19").innerText = Tkh355 + "  مليون " ;
     }
  
     if(Tkh355>999){
     var tkh355 = Tkh355 / 1000 ;
     var tkh355 = Math.trunc(tkh20);
  
     var TKH355 = Tkh355 / 1000 ;
     var TKH355 = TKH355 - tkh355 ;
     var TKH355 = TKH355 * 1000;
     var TKH355 = Math.trunc(TKH355);
  
     document.getElementById("T19").innerText = tkh355 + " مليار و " + TKH355 + "  مليون "   ;
     }
   
   }
   document.getElementById("B5").onclick = function(){
     document.getElementById("B1").innerText = "20%";
     document.getElementById("B2").innerText = "25%";
     document.getElementById("B3").innerText = "30%";
     document.getElementById("B4").innerText = "35%";
     document.getElementById("B5").innerText = "40% تم تفعيل";

     var Tkh40 = M1 ;
    var Tkh40 = Tkh40 - (Tkh40 * 0.4);
    var Tkh40 = Math.trunc(Tkh40);
   // document.getElementById("T16").innerText = Tkh40 ;

   if(Tkh40<999){
    document.getElementById("T16").innerText = Tkh40 + "  مليون " ;
   }

   if(Tkh40>999){
   var tkh40 = Tkh40 / 1000 ;
   var tkh40 = Math.trunc(tkh40);

   var TKH40 = Tkh40 / 1000 ;
   var TKH40 = TKH40 - tkh40 ;
   var TKH40 = TKH40 * 1000;
   var TKH40 = Math.trunc(TKH40);

   document.getElementById("T16").innerText = tkh40 + " مليار و " + TKH40 + "  مليون "   ;
   }
    
    var Tkh402 = M2 ;
    var Tkh402 = Tkh402 - (Tkh402 * 0.4);
    var Tkh402 = Math.trunc(Tkh402);
    //document.getElementById("T15").innerText = Tkh402 ;

    if(Tkh402<999){
      document.getElementById("T15").innerText = Tkh402 + "  مليون " ;
     }
  
     if(Tkh402>999){
     var tkh402 = Tkh402 / 1000 ;
     var tkh402 = Math.trunc(tkh402);
  
     var TKH402 = Tkh402 / 1000 ;
     var TKH402 = TKH402 - tkh402 ;
     var TKH402 = TKH402 * 1000;
     var TKH402 = Math.trunc(TKH402);
  
     document.getElementById("T15").innerText = tkh402 + " مليار و " + TKH402 + "  مليون "   ;
     }

    var Tkh403 = M3 ;
    var Tkh403 = Tkh403 - (Tkh403 * 0.4);
    var Tkh403 = Math.trunc(Tkh403);
   // document.getElementById("T14").innerText = Tkh403;

   if(Tkh403<999){
    document.getElementById("T14").innerText = Tkh403 + "  مليون " ;
   }

   if(Tkh403>999){
   var tkh403 = Tkh403 / 1000 ;
   var tkh403 = Math.trunc(tkh403);

   var TKH403 = Tkh403 / 1000 ;
   var TKH403 = TKH403 - tkh403 ;
   var TKH403 = TKH403 * 1000;
   var TKH403 = Math.trunc(TKH403);

   document.getElementById("T14").innerText = tkh403 + " مليار و " + TKH403 + "  مليون "   ;
   }

    var Tkh404 = M4 ;
    var Tkh404= Tkh404 - (Tkh404 * 0.4);
    var Tkh404 = Math.trunc(Tkh404);
    //document.getElementById("T20").innerText = Tkh404 ;

    if(Tkh404<999){
      document.getElementById("T20").innerText = Tkh404 + "  مليون " ;
     }
  
     if(Tkh404>999){
     var tkh404 = Tkh404 / 1000 ;
     var tkh404 = Math.trunc(tkh404);
  
     var TKH404 = Tkh404 / 1000 ;
     var TKH404 = TKH404 - tkh404 ;
     var TKH404 = TKH404 * 1000;
     var TKH404 = Math.trunc(TKH404);
  
     document.getElementById("T20").innerText = tkh404 + " مليار و " + TKH404 + "  مليون "   ;
     }

    var Tkh405 = M5 ;
    var Tkh405= Tkh405 - (Tkh405 * 0.4);
    var Tkh405 = Math.trunc(Tkh405);
    //document.getElementById("T19").innerText = Tkh405 ;

    if(Tkh405<999){
      document.getElementById("T19").innerText = Tkh405 + "  مليون " ;
     }
  
     if(Tkh405>999){
     var tkh405 = Tkh405 / 1000 ; 
     var tkh405 = Math.trunc(tkh405);
  
     var TKH405 = Tkh405 / 1000 ;
     var TKH405 = TKH405 - tkh405 ;
     var TKH405 = TKH405 * 1000;
     var TKH405 = Math.trunc(TKH405);
  
     document.getElementById("T19").innerText = tkh405 + " مليار و " + TKH405 + "  مليون "   ;
     }
   
   }

 }