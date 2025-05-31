
















function result() {
    let labMdd = document.getElementById("x1").value;
   // alert(labMdd);
    let labMdd1=Number(labMdd);
    let omc = document.getElementById("o1").value;
    //alert(omc);
    let omc1=Number(omc);
    let sandDensity = document.getElementById("d1").value;
    //alert(sandDensity);
    let sandDensity1= Number(sandDensity)
    let conicalWt = document.getElementById("c1").value;
    //alert(conicalWt);
    let conicalWt1= Number(conicalWt);
    let weightOfWetSoil = document.getElementById("w").value;
    //alert(weightOfWetSoil);
    let weightOfWetSoil1= Number(weightOfWetSoil);
    let CylinderWeightBefore = document.getElementById("w1").value;
    //alert(CylinderWeightBefore);
    let  CylinderWeightBefore1= Number( CylinderWeightBefore);
    let CylinderWeightAfter = document.getElementById("w2").value;
   // alert(CylinderWeightAfter);
    let CylinderWeightAfter1 = Number(CylinderWeightAfter);
    let rapidMoisture = document.getElementById("m").value;
    //alert(rapidMoisture);
    let rapidMoisture1=Number(rapidMoisture);
 let thicness =document.getElementById("th").value;
    let thickness1= Number(thicness);

    // assigne the conical weight
        document.getElementById("wc").value=conicalWt1

        if ( isNaN(labMdd1)){
            alert(" Lab MDD is not a valid numeral. please enter a valid Numeral")
         } else if (isNaN(omc1)){
            alert("OMC is not a valid numeral. please enter a valid Numeral")
         } else if (isNaN(sandDensity1)){
            alert("Sand density is not a valid numeral. please enter a valid Numeral")
         }
         else if (isNaN(conicalWt1)){
            alert("Conical weight is not a valid numeral. please enter a valid Numeral")
         } else if (isNaN(weightOfWetSoil1)){
            alert("Weight of wet soil in Row 2 is not a valid numeral. please enter a valid Numeral")
         }
         else if (isNaN( CylinderWeightBefore1)){
            alert("Cylinder weight before pouring in Row 3 is not a valid numeral. please enter a valid Numeral")
         }
         else if (isNaN( CylinderWeightAfter1)){
            alert("Cylinder weight After pouring in Row 4 is not a valid numeral. please enter a valid Numeral")
         }
         else if (isNaN(rapidMoisture1)){
            alert("Rapid moisture metre value in Row 5 is not a valid numeral. please enter a valid Numeral")
         }
         else if (isNaN(thickness1)){
            alert("Layer thickness value in Row 13 is not a valid numeral. please enter a valid Numeral")
         }
                         
         else {

             // calculations 
             
   // weigt of sand in hole
      let wtOfSandHolex=(CylinderWeightBefore1-CylinderWeightAfter1-conicalWt1);
       document.getElementById("wh").value=wtOfSandHolex.toFixed(2);
// volume of pit
      let volOfPit=(wtOfSandHolex/sandDensity1);
      document.getElementById("v").value=volOfPit.toFixed(2);
 // Bulk density
      let bulkDensity=(weightOfWetSoil1/volOfPit);
      document.getElementById("yb").value=bulkDensity.toFixed(2);
//Field Moiture
     let fieldMoisture=((rapidMoisture1/(100-rapidMoisture1))*100);
      document.getElementById("fmc").value=fieldMoisture.toFixed(2);
// field dry density
     let fieldDryDensity=(bulkDensity/(1+(fieldMoisture/100)));
      document.getElementById("fdd").value=fieldDryDensity.toFixed(2);
// degree of compaction
      let degreeOfCompaction=((fieldDryDensity/labMdd1)*100);
       document.getElementById("dgc").value= degreeOfCompaction.toFixed(2);
    }
}

function clearit() {
    document.getElementById("yb").value ="";
    document.getElementById("fmc").value="";
    document.getElementById("fdd").value="";
    document.getElementById("dgc").value= "";
    document.getElementById("v").value="";
    document.getElementById("wh").value= "";
    document.getElementById("w").value="";
    document.getElementById("w1").value="";
    document.getElementById("w2").value="";
    document.getElementById("m").value="";
    document.getElementById("wc").value="";
    document.getElementById("cha").value="";
    document.getElementById("th").value="";
  }
  
