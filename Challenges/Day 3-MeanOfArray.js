Mean of an Array
function getAverage(marks){
  return Math.floor(marks.reduce((a,b) => a + b) / marks.length )
}