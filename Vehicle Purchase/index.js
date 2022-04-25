function needsLicense(kind) {
  let result = (kind === 'car') || (kind === 'truck');
  return result;
}

function chooseVehicle(option1, option2) {
  let isBetter = (option1 > option2);
  let result = '' ;
  if (isBetter == true) {
  result = option2;
}
  else {
  result = option1;
}
  return result + ' is clearly the better choice.';
}

function calculateResellPrice(originalPrice, age) {
  let result = 0;
  if (age < 3) {
  result = (originalPrice * 0.80);
} else if (age > 10) {
  result = (originalPrice * 0.50);
} else {
  result = (originalPrice * 0.70);
}
  return result;
}