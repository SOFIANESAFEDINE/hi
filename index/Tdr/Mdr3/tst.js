document.getElementById("B").onclick = function() {

var F = document.getElementById("E1").value; 
var F = F * 1000000 ;
F = Number(F);
var F = Math.trunc(F);

 var J = F / 8 ;
J = Number(J);
var J = Math.trunc(J);

    if(J<999){
    document.getElementById("Jj").innerText = M +"  جندي";
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
    if(J>999999){
        var j = J / 1000000 ;
        var j = Math.trunc(j);
        
        var j1 = J / 1000;
        var j1 = Math.trunc(j1);
        var j2 = j1 - (j*1000);
        
        document.getElementById("Jj").innerText = j + " مليون و"  + j2 + " الف" ;
        }
 
 var M = document.getElementById("E19").value; 
 M = Number(M);

 var M = M * J ;
 var M = Math.trunc(M);

 if(M<999){
    document.getElementById("Tt").innerText = M ;
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

if(M>999999){
var m = M / 1000000 ;
var m = Math.trunc(m);

var m1 = M / 1000;
var m1 = Math.trunc(m1);
var m2 = m1 - (m*1000);


document.getElementById("Tt").innerText = m + " مليون و" +m2  + "  الف "  ;
} 

var T4 = document.getElementById("E18").value;
var T4 = T4 / 3600;
T4 = Number(T4);

var T3 = document.getElementById("E17").value;
var T3 = T3 / 60 ;
T3 = Number(T3);


var T2 = document.getElementById("E16").value;
var T2 = T2 ;
T2 = Number(T2);


var T1 = document.getElementById("E15").value;
var T1 = T1 * 24;
T1 = Number(T1);


var K = document.getElementById("E14").value;
K = Number(K);

var S = T1 + T2 + T3 + T4 ;
var S = Math.trunc(S);

var T = ( J * S ) / K ;
T = Number(T);

if(T<999){
    document.getElementById("Ff").innerText = T ;
   }
   if(T>999){
    var t = T / 1000 ;
    var t = Math.trunc(t);
 
    var t1 = T / 1000 ;
    var t1 = t1 - t ;
    var t1 = t1 * 1000;
    var t1 = Math.trunc(t1);
 
    document.getElementById("Ff").innerText = t + "  الف و" + t1 + "  ساعة"   ;
    }
/*  
 var f = F / 1000 ;
   var f = Math.trunc(f);

   var f1 = F / 1000 ;
   var f1 = f1 - f ;
   var f1 = f1 * 1000;
   var f1 = Math.trunc(f1);
*/
if(T>999999){
var t = T / 1000000 ;
var t = Math.trunc(t);

var t1 = T / 1000;
var t1 = Math.trunc(t1);
var t2 = t1 - (t*1000);


document.getElementById("Ff").innerText = t + " مليون و" +t2  + "  الف "  ;
} 


}