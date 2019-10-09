function KtoF(k) {
    // Formula taken from https://www.metric-conversions.org/es/temperatura/kelvin-a-fahrenheit.htm
    // Formula : F =(K - 273.15)* 1.8000 + 32.00
    var f = (k - 273.15) * 1.8000 + 32
    return f
}

function performCalculation6() {
    var inputElement = document.getElementById("kelvinValue");
    var value = parseInt(inputElement.value);
    var paragraphElement = document.getElementById("result6");
    paragraphElement.innerHTML = KtoF(value);
}
