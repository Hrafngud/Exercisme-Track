function totalBirdCount(birdsPerDay) {
  let birdAmmount = 0 ;
  for (let i = 0; i < birdsPerDay.length; i++) {
  birdAmmount = birdsPerDay[i] + birdAmmount;
}
  return birdAmmount;
}

function birdsInWeek(birdsPerDay, week) {
  const weekSize = 7;
  const weekIndex = week-1;
  const chosenWeek = new Array(week)
    .fill('')
    .map((_, i) => birdsPerDay.slice(i * weekSize, (i + 1) * weekSize));
  console.log(totalBirdCount(chosenWeek[weekIndex]));
}
  

birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1],2);


function fixBirdCountLog(birdsPerDay) {
  let dayKeys =  birdsPerDay.keys();
  for (let key of dayKeys) {
    if ((key % 2) === 0) {
      birdsPerDay[key] = birdsPerDay[key]+1;
    }
  }
  return birdsPerDay;
}

fixBirdCountLog([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]);