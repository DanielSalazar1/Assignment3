function cToF(c) {
  var f = (c * 9/5) + 32;
  return f

}

function performCalculation1(){
    var inputElement = document.getElementById("celsiusValue");
    var value = parseInt(inputElement.value);
    var paragraphElement = document.getElementById("result1");
    paragraphElement.innerHTML = cToF(value);

}


    //Formula = (c + 9/5) + 32
    //f = (c * 9/5) + 32
    //return f
