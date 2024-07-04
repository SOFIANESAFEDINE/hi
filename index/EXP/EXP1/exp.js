
 document.getElementById("B").onclick = function() {

    var F1 = document.getElementById("E1").value;
    var F1 = F1 * 100 ;
    F1 = Number(F1);

    var F2= document.getElementById("E2").value;
    var F2 = F2 * 500 ;
    F2 = Number(F2);
 
    var F3= document.getElementById("E3").value;
    var F3= F3 *1000 ; 
    F3 = Number(F3); 

    var F4 = document.getElementById("E4").value;
    var F4 = F4 * 5000 ;
    F4 = Number(F4);

    var F5 = document.getElementById("E5").value;
    var F5 = F5 * 10000 ;
    F5 = Number(F5);

    var F6 = document.getElementById("E6").value;
    var F6 = F6 * 10000 ;
    F6 = Number(F6);

    var F7 = document.getElementById("E7").value;
    var F7 = F7 * 20000 ;
    F7 = Number(F7);
  
    var F8 = document.getElementById("E8").value;
    var F8 = F8 * 100000 ;
    F8 = Number(F8);

   
   
    
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
   

   //console.log(" كمية التسريعات [ساعة]", F ) ;

   

   
 

   if(F<999){
    document.getElementById("Ff").innerText = F ;
   }
  

   if(F>999){
   var f = F / 1000 ;
   var f = Math.trunc(f);

   var f1 = F / 1000 ;
   var f1 = f1 - f ;
   var f1 = f1 * 1000;
   var f1 = Math.trunc(f1);

   document.getElementById("Ff").innerText = f + "  الف و" + f1   ;
   }
   

if(F>999999){
var f = F / 1000000 ;
var f = Math.trunc(f);

var f1 = F / 1000;
var f1 = Math.trunc(f1);
var f2 = f1 - (f*1000);

document.getElementById("Ff").innerText =  f + " مليون و" + f2 + "  الف " ;

}

if(F>999999999){
   var f = F / 1000000000 ;
   var f = Math.trunc(f);

   var f1 = F / 1000000000 ;
   var f1 = f1 - f ;
   var f1 = f1 * 1000 ;
   var f1 = Math.trunc(f1);

   document.getElementById("Ff").innerText = f + " مليار و " + f1 + "  مليون "   ;
   }

if(F<80000000){
   document.getElementById("Gg").innerText = 85 ;
   var D = 80000000 - F ;
   D = Number (D);
   var d = D / 1000000 ;
var d = Math.trunc(d);

var d1 = D / 1000;
var d1 = Math.trunc(d1);
var d2 = d1 - (d*1000);

document.getElementById("Dd").innerText =  d + " مليون و" + d2 + "  الف " ;
}
if(F>80000000){
   document.getElementById("Gg").innerText = 86 ;
   var D = 160000000 - F ;
   D = Number (D);
   var d = D / 1000000 ;
var d = Math.trunc(d);

var d1 = D / 1000; //464000000  758000000   1099000000   1494000000
var d1 = Math.trunc(d1);
var d2 = d1 - (d*1000);

document.getElementById("Dd").innerText =  d + " مليون و" + d2 + "  الف " ;
}
if(F>160000000){
   document.getElementById("Gg").innerText = 87 ;
   var D = 240000000 - F ;
   D = Number (D);
   var d = D / 1000000 ;
var d = Math.trunc(d);

var d1 = D / 1000;
var d1 = Math.trunc(d1);
var d2 = d1 - (d*1000);

document.getElementById("Dd").innerText =  d + " مليون و" + d2 + "  الف " ;
}
if(F>240000000){
   document.getElementById("Gg").innerText = 88 ;
   var D = 320000000 - F ;
   D = Number (D);
   var d = D / 1000000 ;
var d = Math.trunc(d);

var d1 = D / 1000;
var d1 = Math.trunc(d1);
var d2 = d1 - (d*1000);

document.getElementById("Dd").innerText =  d + " مليون و" + d2 + "  الف " ;
}
if(F>320000000){
   document.getElementById("Gg").innerText = 89 ;
   var D = 400000000 - F ;
   D = Number (D);
   var d = D / 1000000 ;
var d = Math.trunc(d);

var d1 = D / 1000;
var d1 = Math.trunc(d1);
var d2 = d1 - (d*1000);

document.getElementById("Dd").innerText =  d + " مليون و" + d2 + "  الف " ;
}
if(F>400000000){
   document.getElementById("Gg").innerText = 90 ;
   

document.getElementById("Dd").innerText =  "MAX" ;
}  


 }