module.exports = function getZerosCount(number) {
  const a = 5;
  let n = 1;
  let count = 0;
  while(Math.pow(a, n) < number){
	  count += Math.floor(number/Math.pow(a, n));
	  n++;
  }
  return count;
}
