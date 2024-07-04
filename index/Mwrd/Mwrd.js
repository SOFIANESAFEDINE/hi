 document.getElementById("B").onclick = function (){
  
    var C1 = document.getElementById("E2").value ;
    C1 = Number(C1);
    var B1 = document.getElementById("E1").value ;
    B1 = Number(B1);
    var CB1 = C1 + B1 ;
    CB1 = Number(CB1);
    
    var C2 = document.getElementById("E4").value ;
    C2 = Number(C2);
    var B2 = document.getElementById("E3").value ;
    B2 = Number(B2);
    var CB2 = C2 + B2 ;
    CB2 = Number(CB2);

    var C3 = document.getElementById("E6").value ;
    C3 = Number(C3);
    var B3 = document.getElementById("E5").value ;
    B3 = Number(B3);
    var CB3 = C3 + B3 ;
    CB3 = Number(CB3);

    var C4 = document.getElementById("E8").value ;
    C4 = Number(C4);
    var B4 = document.getElementById("E7").value ;
    B4 = Number(B4);
    var CB4 = C4 + B4 ;
    CB4 = Number(CB4);

    var C5 = document.getElementById("E10").value ;
    C5 = Number(C5);
    var B5 = document.getElementById("E9").value ;
    B5 = Number(B5);
    var CB5 = C5 + B5 ;
    CB5 = Number(CB5);

    var C6 = document.getElementById("E12").value ;
    C6 = Number(C6);
    var B6 = document.getElementById("E11").value ;
    B6 = Number(B6);
    var CB6 = C6 + B6 ;
    CB6 = Number(CB6);

    var D1 = document.getElementById("E14").value ;
    D1 = Number(D1);
    var E1 = document.getElementById("E13").value ;
    E1 = Number(E1);
    var DE1 = D1 + E1 ;
    DE1 = Number(DE1);

    var D2 = document.getElementById("E16").value ;
    D2 = Number(D2);
    var E2 = document.getElementById("E15").value ;
    E2 = Number(E2);
    var DE2 = D2 + E2 ;
    DE2 = Number(DE2);

    var D3 = document.getElementById("E18").value ;
    D3 = Number(D3);
    var E3 = document.getElementById("E17").value ;
    E3 = Number(E3);
    var DE3 = D3 + E3 ;
    DE3 = Number(DE3);

   
    var KCB1 = 10000 * CB1 ;
    var CCB1 = 10000 * CB1 ;
    var HCB1 = 1600 * CB1 ;
    var FCB1 = 400 * CB1 ;
    KCB1 = Number(KCB1);
    HCB1 = Number(HCB1);
    CCB1 = Number(CCB1);
    FCB1 = Number(FCB1);

    var KCB2 = 50000 * CB2 ;
    var CCB2 = 50000 * CB2 ;
    var HCB2 = 8000 * CB2 ;
    var FCB2 = 2000 * CB2 ;
    KCB2 = Number(KCB2);
    HCB2 = Number(HCB2);
    CCB2 = Number(CCB2);
    FCB2 = Number(FCB2);

    var KCB3 = 150000 * CB3 ;
    var CCB3 = 150000 * CB3 ;
    var HCB3 = 25000 * CB3 ;
    var FCB3 = 6250 * CB3 ;
    KCB3 = Number(KCB3);
    HCB3 = Number(HCB3);
    CCB3 = Number(CCB3);
    FCB3 = Number(FCB3);

    var KCB4 = 500000 * CB4 ;
    var CCB4 = 500000 * CB4 ;
    var HCB4 = 80000 * CB4 ;
    var FCB4 = 20000 * CB4 ;
    KCB4 = Number(KCB4);
    HCB4 = Number(HCB4);
    CCB4 = Number(CCB4);
    FCB4 = Number(FCB4);

    var KCB5 = 1500000 * CB5 ;
    var CCB5 = 1500000 * CB5 ;
    var HCB5 = 250000 * CB5 ;
    var FCB5 = 62500 * CB5 ;
    KCB5 = Number(KCB5);
    HCB5 = Number(HCB5);
    CCB5 = Number(CCB5);
    FCB5 = Number(FCB5);

    var KCB6 = 5000000 * CB6 ;
    var CCB6 = 5000000 * CB6 ;
    var HCB6 = 800000 * CB6 ;
    var FCB6 = 200000 * CB6 ;
    KCB6 = Number(KCB6);
    HCB6 = Number(HCB6);
    CCB6 = Number(CCB6);
    FCB6 = Number(FCB6);

    var KDE1 = 1500000 * DE1 ;
    var CDE1 = 1500000 * DE1 ;
    var HDE1 = 250000 * DE1 ;
    var FDE1 = 62500 * DE1 ;
    var BDE1 = 15000 * DE1 ;
    KDE1 = Number(KDE1);
    HDE1 = Number(HDE1);
    CDE1 = Number(CDE1);
    FDE1 = Number(FDE1);
    BDE1 = Number(BDE1);

    var KDE2 = 5000000 * DE2 ;
    var CDE2 = 5000000 * DE2 ;
    var HDE2 = 800000 * DE2 ;
    var FDE2 = 200000 * DE2 ;
    var BDE2 = 50000 * DE2 ;
    KDE2 = Number(KDE2);
    HDE2 = Number(HDE2);
    CDE2 = Number(CDE2);
    FDE2 = Number(FDE2);
    BDE2 = Number(BDE2);

    var KDE3 = 15000000 * DE3 ;
    var CDE3 = 15000000 * DE3 ;
    var HDE3 = 2500000 * DE3 ;
    var FDE3 = 625000 * DE3 ;
    var BDE3 = 150000 * DE3 ;
    KDE3 = Number(KDE3);
    HDE3 = Number(HDE3);
    CDE3 = Number(CDE3);
    FDE3 = Number(FDE3);
    BDE3 = Number(BDE3);

    var K = KCB1 + KCB2 + KCB3 + KCB4 + KCB5 + KCB6 + KDE1 + KDE2 + KDE3 ;
    var C = CCB1 + CCB2 + CCB3 + CCB4 + CCB5 + CCB6 + CDE1 + CDE2 + CDE3 ;
    var H = HCB1 + HCB2 + HCB3 + HCB4 + HCB5 + HCB6 + HDE1 + HDE2 + HDE3 ;
    var F = FCB1 + FCB2 + FCB3 + FCB4 + FCB5 + FCB6 + FDE1 + FDE2 + FDE3 ;
    var B = BDE1 + BDE2 + BDE3 ;

    K = Number(K);
    C = Number(C);
    H = Number(H);
    F = Number(F);
    B = Number(B);
    

    var M1 = K / 1000000; 
    M1 = Number(M1);

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

     var M2 = C / 1000000 ;
     M2 = Number(M2);

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

   var M3 = H / 1000000 ;
   M3 = Number(M3);

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

     var M4 = F / 1000000 ;
     M4 = Number(M4);

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
   
     var J = B ;
     J = Number(J);

     if(J>999){
      var j = J / 1000 ;
      var j = Math.trunc(j);
   
      var j1 = J / 1000 ;
      var j1 = j1 - j ;
      var j1 = j1 * 1000;
      var j1 = Math.trunc(j1);
   
      document.getElementById("T9").innerText = j + "  الف و"+ j1     ;
      }

     if(J>999999){
      var j = J / 1000000 ;
      var j = Math.trunc(j);
      
      var j1 = J / 1000;
      var j1 = Math.trunc(j1);
      var j2 = j1 - (j*1000);
      
      document.getElementById("T9").innerText = j + " مليون و"  + j2 + " الف" ;
      }
 }