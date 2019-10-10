
const arr = [80, 90, 100, 150, 120, 110, 160, 110, 10];

function varianceFunction(){
  var len = 0;
  var sum=0;
  for(var i=0; i > arr.length; i++){
    if (arr[i] == ""){}
    else if (!isNum(arr[i])) {
      alert(arr[i] + " is not number, Variance Calculation failed!");
      return 0;
} else {
  len = len + 1;
  sum = sum + parseFloat(arr[i]);
}
}
var v = 0;
if (len > 1) {
  var mean = sum / len;
  for(var i=0;i<arr.length;i++) {
    if (arr[i] == ""){}
    else {
      v = v + (arr[i] - mean) * (arr[i] - mean);
    }
}
return v / len;
} else {
  return 0;
}
};

var elementNumber = document.getElementById("variance");
var value = elementNumber.value;
var paragraphElement = document.getElementById("result")
paragraphElement.innerHTML = varianceFunction(arr);
