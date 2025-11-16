

function result() {
    let WtSampleBefore = document.getElementById("w").value;
   // alert(WtSampleBefore);
    let WtSampleBefore1=Number(WtSampleBefore);

    let WtSampleAfter = document.getElementById("w1").value;
    //alert(WtSampleAfter );
    let WtSampleAfter1 =Number(WtSampleAfter );

    let filterPaperBefore = document.getElementById("m").value;
    //alert(filterPaperBefore);
    let filterPaperBefore1= Number(filterPaperBefore)

    let filterPaperAfter = document.getElementById("wc").value;
    //alert(filterPaperAfter);
    let filterPaperAfter1= Number(filterPaperAfter);

   //  verify the enter values and disply alert

        if ( isNaN(WtSampleBefore1)){
            alert(" Wt. of sample before  is not a valid numeral. please enter a valid Numeral")

         } else if (isNaN(WtSampleAfter1)){
            alert("Wt of sample after  is not a valid numeral. please enter a valid Numeral")

         } else if (isNaN(filterPaperBefore1)){
            alert("wt. of filter paper before is not a valid numeral. please enter a valid Numeral")

         } else if (isNaN(filterPaperAfter1)){
            alert("Wt. of filter paper after is not a valid numeral. please enter a valid Numeral")

         }                          
         else {

             // calculations 
             
   // weigt of Difference of Sample
      let DifferenceOfSample =(WtSampleBefore-WtSampleAfter1);
       document.getElementById("w2").value=DifferenceOfSample.toFixed(2);


// Wt of difference of filter paper
      let DifferenceFilterPaper=(filterPaperAfter1-filterPaperBefore1);
      document.getElementById("wh").value=DifferenceFilterPaper.toFixed(2);


 // % of bitumen contenet
      let bitumenContent=(((DifferenceOfSample-DifferenceFilterPaper)/WtSampleBefore1)*100);
      document.getElementById("bc").value=bitumenContent.toFixed(2);

    }
}

function clearit() {
    document.getElementById("cha").value ="";
    document.getElementById("w").value="";
    document.getElementById("w1").value="";
    document.getElementById("w2").value= "";
    document.getElementById("m").value="";
    document.getElementById("wc").value= "";
    document.getElementById("wh").value="";
    document.getElementById("bc").value="";
      }
  
