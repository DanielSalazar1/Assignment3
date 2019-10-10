const numbersArr = [4, 5, 2, 6, 3, 7, 8, 9, 6, 5, 2, 2];

function getStandardDeviation() {

   var total = 0;
   for(var key in numbersArr)
      total += numbersArr[key];
   var meanVal = total / numbersArr.length;

   var SDprep = 0;
   for(var key in numbersArr)
      SDprep += Math.pow((parseFloat(numbersArr[key]) - meanVal),2);
   var SDresult = Math.sqrt(SDprep/numbersArr.length);

   return SDresult;
}

var element = document.getElementById("standard deviation");
element.innerHTML = getStandardDeviation(numbersArr);
