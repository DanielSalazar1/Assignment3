function tvocMessures() {
  var tvoc = parseInt(document.getElementById("value").value);
  if (tvoc > 0 && tvoc < 65 ) {
    document.getElementById("result").innerHTML = "{Level 1 - Excelent}", "{Higienic rating - No objections}", "{Recomendations - Target value}", "{Exposure limit - no limit}"
  }
  else if (tvoc > 65 && tvoc < 220) {
    document.getElementById("result").innerHTML = "{Level 2 - Good}", "{Higienic rating - No relevant objections}", "{Recomendations - Ventilation}", "{Exposure limit - no limit}"
  }
  else if (tvoc > 220 && tvoc < 660) {
    document.getElementById("result").innerHTML = "{Level 3 - Moderate}", "{Higienic rating - Some objections}", "{Recomendations - Intensified ventilation}", "{Exposure limit - < 12 months}"
  }
  else if (tvoc > 660 && tvoc < 2200) {
    document.getElementById("result").innerHTML = "{Level 4 - Poor}", "{Higienic rating - Major objections}", "{Recomendations - Intensified ventilation}", "{Exposure limit - < 1 month}"
  }
  else if (tvoc >2200 && tvoc < 5500) {
    document.getElementById("result").innerHTML = "{Level 5 - Unhealty}", "{Higienic rating - Situation not acceptable}", "{Recomendations - Use only if unnavoidable}", "{Exposure limit - hours}"
  }
};
