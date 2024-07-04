 

 
document.getElementById("B2").onclick = function() {
    
    var K = 0 ;
    var H = 0 ;
    
    K = Number(K); 
    H = Number(H);
       
     
     if(document.getElementById("check2").checked) {
         var K = K + 29600 ;
         var H = H + 70000 ;
     }
     if(document.getElementById("check3").checked) {
         var K = K + 35000 ;
         var H = H + 75000 ;
     }
     if(document.getElementById("check4").checked) {
         var K = K + 60000 ;
         var H = H + 150500 ;
     }
     if(document.getElementById("check5").checked) {
         var K = K + 75000 ;
         var H = H + 179000 ;
     }
     if(document.getElementById("check6").checked) {
         var K = K + 74700 ;
         var H = H + 180500 ;
     }
     if(document.getElementById("check7").checked) {
         var K = K + 119200 ;
         var H = H + 271000 ;
     }
     if(document.getElementById("check8").checked) {
         var K = K + 200000 ;
         var H = H + 300000 ;
     }
     if(document.getElementById("check16").checked) {
         var K = K + 80000 ;
         var H = H + 200000 ;
     }
     if(document.getElementById("check17").checked) {
         var K = K + 120000 ;
         var H = H + 400000 ;
     } 
     if(document.getElementById("check18").checked) {
         var K = K + 160000 ;
         var H = H + 400000 ;
     }
     if(document.getElementById("check19").checked) {
         var K = K + 130000 ;
         var H = H + 216000 ;
     }
     if(document.getElementById("check20").checked) {
         var K = K + 200000 ;
         var H = H + 400000 ;
     }
     if(document.getElementById("check21").checked) {
         var K = K + 165000 ;
         var H = H + 280000 ;
     }
     if(document.getElementById("check9").checked) {
         var K = K + 270000 ;
         var H = H + 500000 ;
     }
   
     var I5 = document.getElementById("I5").value;
         var I6 = document.getElementById("I6").value;

         I5 = Number(I5);
         I6 = Number(I6);

         var I55 = K - (K * I5/100);
         var I66 = H - (H * I6/100);

         var I55 = Math.trunc(I55);
         var I66 = Math.trunc(I66);

         document.getElementById("T88").innerText = I55 ;
         document.getElementById("T99").innerText = I66 ;
   
     document.getElementById("B1").onclick = function() {
   
       var I1 = document.getElementById("I1").value;
       var I2 = document.getElementById("I2").value;
   
       I1 = Number(I1);
       I2 = Number(I2);
   
       var I11 = I55 - (I55 * I1/100); 
       var I22 = I66 - (I66 * I2/100); 
   
       var I11 = Math.trunc(I11);
       var I22 = Math.trunc(I22);
   
       document.getElementById("T888").innerText = I11 ;
       document.getElementById("T999").innerText = I22 ;
   
    
      }
   
   
   
   
   }
   
   
   