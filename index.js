function myFunction() {
    var Weight = document.getElementById("Weight").value;
    var Height = document.getElementById("Feet").value;
    var Height = ((Height*12) + parseInt(document.getElementById("Inches").value))*0.0254;
    var BMI = Weight/(Height*Height); 
    document.getElementById("result").innerHTML = "BMI = "+BMI.toFixed(1);;
  }