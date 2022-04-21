function countWords(phrase) {
  let result = {};
  let regex = /([A-Za-z0-9]+'?[A-Za-z0-9]+)|([A-Za-z0-9]+)/g;
  let matches = phrase.matchAll(regex);
  for (let match of matches) {
    let word = match[0].toLowerCase();
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word] += 1;
    }
  }
  return result;
}
  
let phrase = `"That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled.`;
// let phrase = 'testing, 1, 2 testing';

console.log(countWords(phrase));

/()/