document.getElementById("B").onclick = function() {

   var A1 = 0 ;
   var A2 = 0 ;
   var A3 = 0 ;
   var A4 = 0 ;
   var A5 = 0 ;
   var A6 = 0 ;
         
   
  var TH = document.getElementById("E14").value;
  if(TH > 0 ){ 
  var A1 = A1 + (TH * 12) ;
  var A2 = A2 + (TH * 6) ;
  var A3 = A3 + (TH * 1.550) ;
  var A4 = A4 + (TH * 0.360) ;
  var A5 = A5 + (TH * 0.480) ;
}
 


  var RO = document.getElementById("E15").value;
  if(RO > 0){
  var A1 = A1 + (RO * 15.6) ;
  var A2 = A2 + (RO * 6.6) ;
  var A3 = A3 + (RO * 1) ;
  var A4 = A4 + (RO * 0.300) ;
  var A5 = A5 + (RO * 0.480) ;
  }
 


  var THH = document.getElementById("E16").value;
  if(THH > 0){
  var A1 = A1 + (THH * 12) ;
  var A2 = A2 + (THH * 6) ;
  var A3 = A3 + (THH * 1.550) ;
  var A4 = A4 + (THH * 0.360) ;
  var A5 = A5 + (THH * 0.480) ;
  var A6 = A6 + (THH * 0.096) ;
  }
 

  var ROH = document.getElementById("E17").value;
  if(ROH > 0){
  var A1 = A1 + (ROH * 15.6) ;
  var A2 = A2 + (ROH * 6.6) ;
  var A3 = A3 + (ROH * 1) ;
  var A4 = A4 + (ROH * 0.300) ;
  var A5 = A5 + (ROH * 0.480) ;
  var A6 = A6 + (ROH * 0.096) ; 
  }
 





 if(A1<999){
   var A1 = Math.trunc(A1);
    document.getElementById("T16").innerText = A1 + "  مليون " ;
   }

   if(A1>999){
   var A11 = A1 / 1000 ;
   var A11 = Math.trunc(A11);

   var A111 = A1 / 1000 ;
   var A111 = A111 - A11 ;
   var A111 = A111 * 1000;
   var A111 = Math.trunc(A111);

   document.getElementById("T16").innerText = A11 + " مليار و " + A111 + "  مليون "   ;
   }
 if(A2<999){
   var A2 = Math.trunc(A2);
    document.getElementById("T15").innerText = A2 + "  مليون " ;
   }

   if(A2>999){
   var A22 = A2 / 1000 ;
   var A22 = Math.trunc(A22);

   var A222 = A2 / 1000 ;
   var A222 = A222 - A22 ;
   var A222  = A222 * 1000;
   var A222 = Math.trunc(A222);

   document.getElementById("T15").innerText = A22 + " مليار و " + A222 + "  مليون "   ;
   }
 if(A3<999){
   var A3 = Math.trunc(A3);
    document.getElementById("T14").innerText = A3 + "  مليون " ;
   }

   if(A3>999){
   var A33 = A3 / 1000 ;
   var A33 = Math.trunc(A33);

   var A333 = A3 / 1000 ;
   var A333 = A333 - A33 ;
   var A333 = A333 * 1000;
   var A333 = Math.trunc(A333);

   document.getElementById("T14").innerText = A33 + " مليار و " + A333 + "  مليون "   ;
   }
 if(A4<999){
   var A4 = Math.trunc(A4);
    document.getElementById("T20").innerText = A4 + "  مليون " ;
   }

   if(A4>999){
   var A44 = A4 / 1000 ;
   var A44 = Math.trunc(A44);

   var A444 = A4 / 1000 ;
   var A444 = A444 - A44 ;
   var A444 = A444 * 1000;
   var A444 = Math.trunc(A444);

   document.getElementById("T20").innerText = A44 + " مليار و " + A444 + "  مليون "   ;
   }
 if(A5<999){
   var A5 = Math.trunc(A5);
    document.getElementById("T19").innerText = A5 + "  مليون " ;
   }

   if(A5>999){
   var A55 = A5 / 1000 ;
   var A55 = Math.trunc(A55);

   var A555 = A5 / 1000 ;
   var A555 = A555 - A55 ;
   var A555 = A555 * 1000;
   var A555 = Math.trunc(A555);

   document.getElementById("T19").innerText = A55 + " مليار و " + A555 + "  مليون "   ;
   }




   
   if(A6<999){
      var A6 = Math.trunc(A6);
       document.getElementById("T22").innerText = A6 + "  مليون " ;
      }

   if(A6>999){
   var A66 = A6 / 1000 ;
   var A66 = Math.trunc(A66);

   var A666 = A6 / 1000 ;
   var A666 = A666 - A66 ;
   var A666 = A666 * 1000;
   var A666 = Math.trunc(A666);

   document.getElementById("T22").innerText = A66 + " مليار و " + A666 + "  مليون "   ;
   }

}