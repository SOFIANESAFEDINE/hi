
 document.getElementById("B").onclick = function() {

    var F1 = document.getElementById("E1").value;
    var F1 = F1 *1000000 ; 
    F1 = Number(F1);
    
   var F = F1 ;
   F = Number(F);

  /* var T4 = document.getElementById("E18").value;
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
   K = Number(K); */

   J = Number(J);
   var J = F / 8 ;
    var J = Math.trunc(J);

  var M = document.getElementById("E19").value;
   M = Number(M);
   var M = M * J
   var M = Math.trunc(M);
   var F = Math.trunc(F); 

  // if(F<999){
 //   document.getElementById("Ff").innerText = F +"  ساعة";
 //  }
   if(J<999){
    document.getElementById("Jj").innerText = M +"  جندي";
   }
   if(M<999){
    document.getElementById("Tt").innerText = M ;
   }

 //  if(F>999){
//   var f = F / 1000 ;
 //  var f = Math.trunc(f);

 //  var f1 = F / 1000 ;
//   var f1 = f1 - f ;
//   var f1 = f1 * 1000;
//   var f1 = Math.trunc(f1);

//   document.getElementById("Ff").innerText = f + "  الف و" + f1 + "  ساعة"   ;
//   }
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


  
    var D = J * 8 ;
 
  
   if(D>999){
    var d = D / 1000 ;
    var d = Math.trunc(d);
 
    var d1 = D / 1000 ;
    var d1 = d1 - d ;
    var d1 = d1 * 1000; 
    var d1 = Math.trunc(d1);
 
    document.getElementById("T4").innerText =d +"  الف و"+  d1 ;
    }

    if(D>999999){
      var d = D / 1000000 ;
      var d = Math.trunc(d);
      
      var d1 = D / 1000;
      var d1 = Math.trunc(d1);
      var d2 = d1 - (d*1000);
      
      
      document.getElementById("Tt").innerText = d + " مليون و" +d2  + "  الف "  ;
      }
  


  


   


 }