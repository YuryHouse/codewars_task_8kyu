// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]


function digitize(n) {
  const num = String(n).split('').reverse();
  const resultArr = [];
  
  num.map((x) => resultArr.push(Number(x)));
  
  return resultArr;
}
