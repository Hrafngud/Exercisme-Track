function twoSum(array1, array2) {
  let num1 = '';
  let num2 = '';
  for (let x in array1) {
    num1 = num1 + array1[x]
  }
  num1 = parseInt(num1)
  for (let y in array2) {
    num2 = num2 + array2[y]
  }
  num2 = parseInt(num2)
  return num1 + num2;
}

function luckyNumber(value) {
  let num1 = Array.from(String(value), Number);
  let num2 = num1.reverse();
  num2 = num2.join('');
  num2 = parseInt(num2);
  return num2 === value;
}

function errorMessage(input) {
    if(!input) return 'Required field'
    else if(!Number(input)) return 'Must be a number besides 0'
    else return ''
  }
