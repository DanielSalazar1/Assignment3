function KtoC(k) {
    //Formula = K = °C + 273.15
    //Took from https://www.softschools.com/formulas/physics/kelvin_to_celsius_formula/47/
    c = k - 273.15
    return c
}

function performCalculation5() {
    var inputElement = document.getElementById("kelvinValue");
    var value = parseInt(inputElement.value);
    var paragraphElement = document.getElementById("result5");
    paragraphElement.innerHTML = KtoC(value)

}
