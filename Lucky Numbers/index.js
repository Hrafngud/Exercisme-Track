function luckyNumber(value) {
  let num1 = Array.from(String(value), Number);
  let num2 = num1.reverse();
  num2 = num2.join('');
  num2 = parseInt(num2);
  console.log(value === num2)
}

luckyNumber(0);