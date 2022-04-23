function dayRate(hoursOfWork) {
  const hoursInDay = 8;
  let dailyHours = hoursOfWork * hoursInDay;
  return dailyHours;
}

function daysInBudget(budget, ratePerHour) {
let daysOfWork = Math.round((budget / 8)/ratePerHour);
  return daysOfWork
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let monthsCompleted = Math.floor(numDays / 22);
  let totalDiscount = 1 - discount; 5
  let exceedingDays = numDays % 22;
  let rate = ratePerHour * 8; 
  let monthlyRate = rate * 22; 
  let standardRate = monthsCompleted * monthlyRate; 
  let daysWithDiscount = standardRate * totalDiscount;
  let exceedingDaysRate = exceedingDays * rate;
  let discountRate = Math.ceil(daysWithDiscount + exceedingDaysRate);
  return discountRate;
}