
function FtoK(f) {
    //Formula = (0 °F − 32) × 5 / 9 + 273,15
    //Took from https://www.google.com/search?sxsrf=ACYBGNQ1lXuZy2lJINt1OYvQBpI3Cpf2uQ%3A1568156244000&ei=Uyp4XcDOPPCm_QbywYWYDA&q=formula+from+fahrenheit+to+kelvin&oq=formula+from+fahrenheit+to+kelvin&gs_l=psy-ab.3..0i203j0i22i10i30j0i22i30l6.496385.496975..497230...0.2..0.190.1061.0j6......0....1..gws-wiz.......0i71j0i19j0i22i10i30i19j0i22i30i19.5qfca7p3ClI&ved=0ahUKEwiAxICfrcfkAhVwU98KHfJgAcMQ4dUDCAs&uact=5
    var k = (f - 32) * 5 / 9 + 273.15
    return k
}


function performCalculation4() {
    var inputElement = document.getElementById("farenheitValue");
    var value = parseInt(inputElement.value);
    var paragraphElement = document.getElementById("result4");
    paragraphElement.innerHTML = FtoK(value);
}
