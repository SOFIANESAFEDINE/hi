

 
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

  document.getElementById("T88").innerText = K ;
  document.getElementById("T99").innerText = H ;

  document.getElementById("B1").onclick = function() {

    var I1 = document.getElementById("I1").value;
    var I2 = document.getElementById("I2").value;

    I1 = Number(I1);
    I2 = Number(I2);

    var I11 = K - (K * I1/100);
    var I22 = H - (H * I2/100);

    var I11 = Math.trunc(I11);
    var I22 = Math.trunc(I22);

    document.getElementById("T888").innerText = I11 ;
    document.getElementById("T999").innerText = I22 ;

       document.getElementById("BB3").onclick = function() {

    var I1111 = document.getElementById("I111").value;
     var I2222 = document.getElementById("I222").value;
      
     I1111=Number(I1111);
     I2222=Number(I2222);

     var I1111 = I11 - I1111 ;
     var I2222 = I22 - I2222 ;

     document.getElementById("T8888").innerText = I1111 ;
     document.getElementById("T9999").innerText = I2222 ;
    
    if( I1111 > 0 ) {
      document.getElementById("T8888").innerText = I1111 + ("( بنقصان  )")   ;
    }
    if( I1111 < 0 ) {
      document.getElementById("T8888").innerText = -I1111 + ("(  بزيادة  )")   ;
    }
    if( I2222 > 0 ) {
      document.getElementById("T9999").innerText = I2222 + ("( بنقصان  )")   ;
    }
    if( I2222 < 0 ) {
      document.getElementById("T9999").innerText = -I2222 + ("( بزيادة  )")   ;
    }
     
   
   }
   }




}


