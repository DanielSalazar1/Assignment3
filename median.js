const  Power_arr = [4, 5, 2, 6, 3, 7, 8, 9, 6, 5, 2];
// code taken from: https://jonlabelle.com/snippets/view/javascript/calculate-mean-median-mode-and-range-in-javascript#targetText=*%20and%20then%20divide%20by%20the%20number%20of%20numbers.&targetText=*%20For%20example%2C%20the%20%22mean,2%2C%203%5D%20is%202.875.&targetText=*%20The%20%22median%22%20is%20the,in%20the%20list%20of%20numbers.&targetText=*%20%40return%20%7BNumber%7D%20The%20calculated%20median,value%20from%20the%20specified%20numbers

function getMedian(values){
 if(values.length === 0) return 0;
 values.sort(function(a,b){
   return a-b;
 });
 var half = Math.floor(values.length / 2);
 if (values.length % 2)
   return values[half];
 return (values[half - 1] + values[half]) / 2.0;
}
var  medianElement = document.getElementById("median");
medianElement.innerHTML = getMedian(Power_arr);
