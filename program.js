
function airQuality() {
  var co2 = parseInt(document.getElementById("value").value);
  if (co2 > 1599 && co2 < 2101) {
    document.getElementById("result").innerHTML = "Bad, heavily contaminated indoor air"
  }
  else if (co2 > 1099 && co2 < 1599){
    document.getElementById("result").innerHTML = "Mediocre, contaminated indoor air"
  }
  else if (co2 > 899 && co2 < 1098) {
    document.getElementById("result").innerHTML = "Fair"
  }
  else if (co2 > 699 && co2 < 799) {
    document.getElementById("result").innerHTML = "Good"
  }
  else if (co2 > 399 && co2 < 698) {
    document.getElementById("result").innerHTML = "Excelent"
  }
};
