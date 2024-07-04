   


document.getElementById("B2").onclick = function() {
    
    var K = 0 ;
    var H = 0 ;
    
    K = Number(K);
    H = Number(H); 
     
     
     if(document.getElementById("check1").checked) {
         var K = K + 2300 ;
         var H = H + 5000 ;
     }  
     if(document.getElementById("check2").checked) {
         var K = K + 2600 ;
         var H = H + 5500 ;
     }
     if(document.getElementById("check3").checked) {
         var K = K + 2900 ;
         var H = H + 6000 ;
     }
     if(document.getElementById("check4").checked) {
         var K = K + 3200 ;
         var H = H + 7000 ;
     }
     if(document.getElementById("check5").checked) {
         var K = K + 3500 ;
         var H = H + 8000 ;
     } 
     if(document.getElementById("check6").checked) {
         var K = K + 3800 ;
         var H = H + 9000 ; 
     }
     if(document.getElementById("check7").checked) {
         var K = K + 4100 ;
         var H = H + 10000 ;
     }
     if(document.getElementById("check8").checked) {
         var K = K + 4400 ;
         var H = H + 11000 ;
     }
     if(document.getElementById("check9").checked) {
         var K = K + 4700;
         var H = H + 12000 ;
     }
     if(document.getElementById("check10").checked) {
         var K = K + 5000 ;
         var H = H + 13000 ;
     } 
     if(document.getElementById("check11").checked) {
         var K = K + 5500;
         var H = H + 14000 ;
     } 
     if(document.getElementById("check12").checked) {
         var K = K + 6000 ;
         var H = H + 15000 ;
     } 
     if(document.getElementById("check13").checked) {
         var K = K + 6500 ;
         var H = H + 16000 ;
     } 
     if(document.getElementById("check14").checked) {
         var K = K + 7000 ;
         var H = H + 17000 ;
     } 
     if(document.getElementById("check15").checked) {
         var K = K + 7500 ;
         var H = H + 18000 ;
     } 
     if(document.getElementById("check16").checked) {
         var K = K + 8000 ;
         var H = H + 19000 ;
     } 
     if(document.getElementById("check17").checked) {
         var K = K + 9000 ;
         var H = H + 20000 ;
     } 
     if(document.getElementById("check18").checked) {
         var K = K + 10000 ;
         var H = H + 21000 ;
     } 
     if(document.getElementById("check19").checked) {
         var K = K + 11000 ;
         var H = H + 22000 ;
     } 
     if(document.getElementById("check20").checked) {
         var K = K + 13000 ;
         var H = H + 23000 ;
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