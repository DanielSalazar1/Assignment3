const PRESSURE = [80, 90, 100, 150, 120, 110, 160, 110, 10];
// Code taken from : https://jonlabelle.com/snippets/view/javascript/calculate-mean-median-mode-and-range-in-javascript#targetText=*%20and%20then%20divide%20by%20the%20number%20of%20numbers.&targetText=*%20For%20example%2C%20the%20%22mean,2%2C%203%5D%20is%202.875.&targetText=*%20The%20%22median%22%20is%20the,in%20the%20list%20of%20numbers.&targetText=*%20%40return%20%7BNumber%7D%20The%20calculated%20median,value%20from%20the%20specified%20numbers
function getMean() {
   var sumNumber = 0
   for (var i = 0; i < PRESSURE.length; i++) {
       var number = PRESSURE[i];
       sumNumber += number;
   }
   return sumNumber / PRESSURE.length;
}
var meanElement = document.getElementById("mean");
meanElement.innerHTML = getMean();
