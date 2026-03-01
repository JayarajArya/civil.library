function result() {
   let WtTotal = document.getElementById("wt1").value;
   let WtTotaln=Number(WtTotal);
   // alert(WtTotaln);


    let WtSample53mmRetained = document.getElementById("R1").value;
    let WtSampleRetained53=Number(WtSample53mmRetained);
   // alert(WtSampleRetained53);

    let WtSample45mmRetained = document.getElementById("R2").value;
    let WtSampleRetained45=Number(WtSample45mmRetained);
   // alert(WtSampleRetained45);s

    let WtSample2204mmRetained = document.getElementById("R3").value;
     let WtSampleRetained2204=Number(WtSample2204mmRetained);
     //alert(WtSampleRetained2204);

     let WtSample1102mmRetained = document.getElementById("R4").value;
     let WtSampleRetained11022=Number(WtSample1102mmRetained);
     // alert(WtSampleRetained11022);

      let WtSample4075mmRetained = document.getElementById("R5").value;
      let WtSampleRetained4075=Number(WtSample4075mmRetained);
       //alert(WtSampleRetained4075);

       let WtSample2036micronRetained = document.getElementById("R6").value;
       let WtSampleRetained2036micron=Number(WtSample2036micronRetained);
       // alert( WtSampleRetained2036micron);

        let WtSample600micronRetained = document.getElementById("R7").value;
        let WtSampleRetained600micron=Number(WtSample600micronRetained);
         //alert( WtSampleRetained600micron);

         let  WtSample75micronRetained = document.getElementById("R8").value;
         let WtSampleRetained75micron=Number(WtSample75micronRetained);
        // alert(WtSampleRetained75micron);

        let WtSampleOnPanRetained = document.getElementById("R9").value;
        let WtSampleRetainedOnPan=Number(WtSampleOnPanRetained);
         // alert(WtSampleRetainedOnPan);

        
 //  verify the enter values and disply alert


 if (isNaN(WtTotaln)) { alert(" Wt. of sample  is not a valid numeral. please enter a valid Numeral"); 
   
 } else if ( isNaN(WtSampleRetained53)){
    alert(" Wt. of sample retained on 53 mm Seive is not a valid numeral. please enter a valid Numeral");

 } else if (isNaN(WtSampleRetained45)){
    alert("Wt of sample retained on 45 mm seive is not a valid numeral. please enter a valid Numeral");
 } else if (isNaN(WtSampleRetained2204)){
    alert("Wt of sample retained on 22.4 mm seive is not a valid numeral. please enter a valid Numeral");
 } else if (isNaN(WtSampleRetained11022)){
    alert("Wt of sample retained on 11.2 mm seive is not a valid numeral. please enter a valid Numeral");
 } else if (isNaN(WtSampleRetained4075)){
    alert("Wt of sample retained on 4.75 mm seive is not a valid numeral. please enter a valid Numeral");
 }else if (isNaN(WtSampleRetained2036micron)){
    alert("Wt of sample retained on2.36 mm seive is not a valid numeral. please enter a valid Numeral");
 }else if (isNaN(WtSampleRetained600micron)){
    alert("Wt of sample retained on 600 micron seive is not a valid numeral. please enter a valid Numeral");
 }else if (isNaN(WtSampleRetained75micron)){
    alert("Wt of sample retained on 75 micron seive is not a valid numeral. please enter a valid Numeral");
 } else if (isNaN(WtSampleRetainedOnPan)){
    alert("Wt of sample retained on pan is not a valid numeral. please enter a valid Numeral");
 } else {

// calculations 
             
   // cumulative weight of sample of Sample

      let cumWtRetainedon53mm =WtSampleRetained53;
      document.getElementById("C1").value=cumWtRetainedon53mm.toFixed(2);

      let cumWtRetainedon45mm =(WtSampleRetained45+cumWtRetainedon53mm);
      document.getElementById("C2").value=cumWtRetainedon45mm.toFixed(2);

      let cumWtRetainedon2204mm =(WtSampleRetained2204+cumWtRetainedon45mm);
      document.getElementById("C3").value= cumWtRetainedon2204mm.toFixed(2);

      let cumWtRetainedon1102mm =(WtSampleRetained11022+cumWtRetainedon2204mm);
      document.getElementById("C4").value= cumWtRetainedon1102mm.toFixed(2);

      let cumWtRetainedon4075mm =(WtSampleRetained4075+cumWtRetainedon1102mm);
      document.getElementById("C5").value= cumWtRetainedon4075mm.toFixed(2);

      let cumWtRetainedon2036mm =(WtSampleRetained2036micron+cumWtRetainedon4075mm);
      document.getElementById("C6").value=  cumWtRetainedon2036mm.toFixed(2);

      let cumWtRetainedon600micron =(WtSampleRetained600micron+cumWtRetainedon2036mm);
      document.getElementById("C7").value=  cumWtRetainedon600micron.toFixed(2);

      let cumWtRetainedon75micron =(WtSampleRetained75micron+cumWtRetainedon600micron);
      document.getElementById("C8").value= cumWtRetainedon75micron.toFixed(2);

      let cumWtRetainedonpan =(WtSampleRetainedOnPan+cumWtRetainedon75micron);
      document.getElementById("C9").value=cumWtRetainedonpan.toFixed(2);

      if (cumWtRetainedonpan != WtTotaln) { 
         alert(" weight of sample is not equals to total weight retained. Hence recheck the weight retained on each seive.  the wt of sample Should be equal to  total weight ratained");
         
      } else {


       // % cumulative weight of sample Retained

       let cumWtRetainedon53mmp =(WtSampleRetained53/cumWtRetainedonpan)*100;
      document.getElementById("P1").value=cumWtRetainedon53mmp.toFixed(2);

      let cumWtRetainedon45mmp =(cumWtRetainedon45mm/cumWtRetainedonpan)*100;
      document.getElementById("P2").value=cumWtRetainedon45mmp.toFixed(2);

      let cumWtRetainedon2204mmp =(cumWtRetainedon2204mm/cumWtRetainedonpan*100);
      document.getElementById("P3").value= cumWtRetainedon2204mmp.toFixed(2);

      let cumWtRetainedon1102mmp =(cumWtRetainedon1102mm/cumWtRetainedonpan)*100;
      document.getElementById("P4").value= cumWtRetainedon1102mmp.toFixed(2);

      let cumWtRetainedon4075mmp =(cumWtRetainedon4075mm/cumWtRetainedonpan)*100;
      document.getElementById("P5").value= cumWtRetainedon4075mmp.toFixed(2);

      let cumWtRetainedon2036mmp =(cumWtRetainedon2036mm/cumWtRetainedonpan)*100;
      document.getElementById("P6").value=  cumWtRetainedon2036mmp.toFixed(2);

      let cumWtRetainedon600micronp =(cumWtRetainedon600micron/cumWtRetainedonpan)*100;
      document.getElementById("P7").value=  cumWtRetainedon600micronp.toFixed(2);

      let cumWtRetainedon75micronp =(cumWtRetainedon75micron/cumWtRetainedonpan)*100;
      document.getElementById("P8").value= cumWtRetainedon75micronp.toFixed(2);

      let cumWtRetainedonpanp =(cumWtRetainedonpan/cumWtRetainedonpan)*100;
      document.getElementById("P9").value=cumWtRetainedonpanp.toFixed(2);

      // % of passing

      let cumWtRetainedon53mmps =100- cumWtRetainedon53mmp;
      document.getElementById("PS1").value=cumWtRetainedon53mmps.toFixed(2);

      let cumWtRetainedon45mmps =100-cumWtRetainedon45mmp;
      document.getElementById("PS2").value=cumWtRetainedon45mmps.toFixed(2);

      let cumWtRetainedon2204mmps =(100-cumWtRetainedon2204mmp);
      document.getElementById("PS3").value= cumWtRetainedon2204mmps.toFixed(2);

      let cumWtRetainedon1102mmps =(100-cumWtRetainedon1102mmp);
      document.getElementById("PS4").value= cumWtRetainedon1102mmps.toFixed(2);

      let cumWtRetainedon4075mmps =(100-cumWtRetainedon4075mmp);
      document.getElementById("PS5").value= cumWtRetainedon4075mmps.toFixed(2);

      let cumWtRetainedon2036mmps =(100- cumWtRetainedon2036mmp);
      document.getElementById("PS6").value=  cumWtRetainedon2036mmps.toFixed(2);

      let cumWtRetainedon600micronps =(100-cumWtRetainedon600micronp);
      document.getElementById("PS7").value=  cumWtRetainedon600micronps.toFixed(2);

      let cumWtRetainedon75micronps =(100-cumWtRetainedon75micronp);
      document.getElementById("PS8").value= cumWtRetainedon75micronps.toFixed(2);

      // let cumWtRetainedonpanps =(100-cumWtRetainedonpanp);
      // document.getElementById("PS9").value=cumWtRetainedonpanps.toFixed(2);

      }

 }
                    
        } 

        function clearit() {

         document.getElementById("wt1").value="";

         document.getElementById("R1").value ="";
         document.getElementById("R2").value="";
         document.getElementById("R3").value="";
         document.getElementById("R4").value= "";
         document.getElementById("R5").value="";
         document.getElementById("R6").value= "";
         document.getElementById("R7").value="";
         document.getElementById("R8").value="";
         document.getElementById("R9").value="";
     
     
         document.getElementById("C1").value ="";
         document.getElementById("C2").value="";
         document.getElementById("C3").value="";
         document.getElementById("C4").value= "";
         document.getElementById("C5").value="";
         document.getElementById("C6").value= "";
         document.getElementById("C7").value="";
         document.getElementById("C8").value="";
         document.getElementById("C9").value="";
     
         document.getElementById("P1").value ="";
         document.getElementById("P2").value="";
         document.getElementById("P3").value="";
         document.getElementById("P4").value= "";
         document.getElementById("P5").value="";
         document.getElementById("P6").value= "";
         document.getElementById("P7").value="";
         document.getElementById("P8").value="";
         document.getElementById("P9").value="";
     
         document.getElementById("PS1").value ="";
         document.getElementById("PS2").value="";
         document.getElementById("PS3").value="";
         document.getElementById("PS4").value= "";
         document.getElementById("PS5").value="";
         document.getElementById("PS6").value= "";
         document.getElementById("PS7").value="";
         document.getElementById("PS8").value="";
     
          document.getElementById("T8").value="";
             
           }
            
          

          
          
          
 
         
  