function frontDoorResponse(line) {
   console.log(line[0]);
}

let line = ['Sunshine warming my toes,',
      'Underwater fun with my friends.',
      'Making homemade ice cream on the porch,',
      'Many long nights catching fireflies.',
      'Early morning walks to the creek,',
      'Reveling in the freedom of lazy days.',];
frontDoorResponse(line);

function frontDoorPassword(word) {
  let firstLetter = word.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  let lastingLetters = word.slice(1)
  lastingLetters = lastingLetters.toLowerCase()
  let result = firstLetter + lastingLetters;
  return result;
}

frontDoorPassword('SUmErr');

function backDoorResponse(line) {
  let result = line.trim().slice(-1);
  console.log(result);
}

function backDoorPassword(word) {
  let firstLetter = word.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  let lastingLetters = word.slice(1)
  lastingLetters = lastingLetters.toLowerCase()
  let result = firstLetter + lastingLetters + ', please';
  console.log(result);
}

backDoorPassword('Cool dude please do not be rude');