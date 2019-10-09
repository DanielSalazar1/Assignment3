function cToK(c) {
  var k = c + 273.15
  return k
}

function performCalculation2(){
    var inputElement = document.getElementById("celsiusValue");
    var value = parseInt(inputElement.value);
    var paragraphElement = document.getElementById("result2");
    paragraphElement.innerHTML = cToK(value);

}
